import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbDir = path.join(process.cwd(), "data");
const dbPath = path.join(dbDir, "securx.db");

// Ensure data directory exists
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize database
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

// Create submissions table
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    form_type TEXT NOT NULL,
    name TEXT,
    email TEXT,
    phone TEXT,
    business_name TEXT,
    business_type TEXT,
    message TEXT,
    ip_address TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Create indexes
db.exec(`
  CREATE INDEX IF NOT EXISTS idx_form_type ON submissions(form_type);
  CREATE INDEX IF NOT EXISTS idx_created_at ON submissions(created_at);
  CREATE INDEX IF NOT EXISTS idx_business_type ON submissions(business_type);
`);

// Insert submission
export function insertSubmission(data: {
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  message?: string;
  ipAddress?: string;
  userAgent?: string;
}) {
  const stmt = db.prepare(`
    INSERT INTO submissions (
      form_type, name, email, phone, business_name, business_type, message, ip_address, user_agent
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  return stmt.run(
    data.formType,
    data.name || null,
    data.email || null,
    data.phone || null,
    data.businessName || null,
    data.businessType || null,
    data.message || null,
    data.ipAddress || null,
    data.userAgent || null
  );
}

// Get all submissions
export function getAllSubmissions() {
  const stmt = db.prepare(`
    SELECT * FROM submissions ORDER BY created_at DESC
  `);
  return stmt.all();
}

// Get submissions by type
export function getSubmissionsByType(formType: string) {
  const stmt = db.prepare(`
    SELECT * FROM submissions WHERE form_type = ? ORDER BY created_at DESC
  `);
  return stmt.all(formType);
}

// Get submissions by business type
export function getSubmissionsByBusinessType(businessType: string) {
  const stmt = db.prepare(`
    SELECT * FROM submissions WHERE business_type = ? ORDER BY created_at DESC
  `);
  return stmt.all(businessType);
}

// Get total submission count
export function getTotalSubmissions() {
  const stmt = db.prepare(`SELECT COUNT(*) as count FROM submissions`);
  return stmt.get() as { count: number };
}

// Get submission stats by form type
export function getSubmissionStats() {
  const stmt = db.prepare(`
    SELECT 
      form_type,
      COUNT(*) as count
    FROM submissions
    GROUP BY form_type
    ORDER BY count DESC
  `);
  return stmt.all();
}

// Get recent submissions (last N days)
export function getRecentSubmissions(days: number = 30) {
  const stmt = db.prepare(`
    SELECT * FROM submissions 
    WHERE created_at >= datetime('now', '-' || ? || ' days')
    ORDER BY created_at DESC
  `);
  return stmt.all(days);
}

export default db;
