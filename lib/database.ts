import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

let db: Database.Database | null = null;

function getDb() {
  if (db) return db;

  const dbDir = path.join(process.cwd(), "data");
  const dbPath = path.join(dbDir, "securx.db");

  // Ensure data directory exists
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  // Initialize database
  db = new Database(dbPath);
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
      city TEXT,
      has_current_atm TEXT,
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

  return db;
}

// Insert submission
export function insertSubmission(data: {
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  city?: string;
  hasCurrentAtm?: string;
  message?: string;
  ipAddress?: string;
  userAgent?: string;
}) {
  const database = getDb();
  const stmt = database.prepare(`
    INSERT INTO submissions (
      form_type, name, email, phone, business_name, business_type, city, has_current_atm, message, ip_address, user_agent
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  return stmt.run(
    data.formType,
    data.name || null,
    data.email || null,
    data.phone || null,
    data.businessName || null,
    data.businessType || null,
    data.city || null,
    data.hasCurrentAtm || null,
    data.message || null,
    data.ipAddress || null,
    data.userAgent || null
  );
}

// Get all submissions
export function getAllSubmissions() {
  const database = getDb();
  const stmt = database.prepare(`
    SELECT * FROM submissions ORDER BY created_at DESC
  `);
  return stmt.all();
}

// Get submissions by type
export function getSubmissionsByType(formType: string) {
  const database = getDb();
  const stmt = database.prepare(`
    SELECT * FROM submissions WHERE form_type = ? ORDER BY created_at DESC
  `);
  return stmt.all(formType);
}

// Get submissions by business type
export function getSubmissionsByBusinessType(businessType: string) {
  const database = getDb();
  const stmt = database.prepare(`
    SELECT * FROM submissions WHERE business_type = ? ORDER BY created_at DESC
  `);
  return stmt.all(businessType);
}

// Get total submission count
export function getTotalSubmissions() {
  const database = getDb();
  const stmt = database.prepare(`SELECT COUNT(*) as count FROM submissions`);
  return stmt.get() as { count: number };
}

// Get submission stats by form type
export function getSubmissionStats() {
  const database = getDb();
  const stmt = database.prepare(`
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
  const database = getDb();
  const stmt = database.prepare(`
    SELECT * FROM submissions 
    WHERE created_at >= datetime('now', '-' || ? || ' days')
    ORDER BY created_at DESC
  `);
  return stmt.all(days);
}

export default getDb;
