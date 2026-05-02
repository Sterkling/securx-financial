"use client";

import { useState, useEffect } from "react";
import { Loader2, Download, LogOut } from "lucide-react";

interface Submission {
  id: number;
  form_type: string;
  name: string;
  email: string;
  phone: string;
  business_name: string;
  business_type: string;
  message: string;
  created_at: string;
}

interface Stats {
  form_type: string;
  count: number;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<Stats[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterType, setFilterType] = useState<string>("all");

  useEffect(() => {
    // Check if already logged in by trying to fetch submissions
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async (formType = "all") => {
    setIsLoading(true);
    try {
      const url =
        formType === "all"
          ? "/api/admin/submissions"
          : `/api/admin/submissions?formType=${formType}`;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions);
        setStats(data.stats);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setPassword("");
        fetchSubmissions();
      } else {
        const data = await response.json();
        setLoginError(data.error || "Invalid credentials");
      }
    } catch (error) {
      setLoginError("Network error. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsLoggedIn(false);
    setSubmissions([]);
    setStats([]);
  };

  const handleFilterChange = (formType: string) => {
    setFilterType(formType);
    fetchSubmissions(formType);
  };

  const exportCSV = () => {
    const url =
      filterType === "all"
        ? "/api/admin/submissions?format=csv"
        : `/api/admin/submissions?formType=${filterType}&format=csv`;
    window.location.href = url;
  };

  // Login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h1 className="text-black font-heading text-3xl uppercase mb-6 text-center">
            Admin Login
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-black font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-black font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-500/10 border border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-blue text-black px-6 py-3 rounded-lg font-bold uppercase hover:bg-gold hover:text-white transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-light-bg">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-blue font-heading text-3xl uppercase">
            SecurX Admin
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-white hover:text-blue transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="mb-8">
          <h2 className="text-black font-heading text-2xl uppercase mb-4">
            Submission Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.form_type} className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-heading text-blue mb-2">
                  {stat.count}
                </div>
                <div className="text-gray text-sm uppercase">{stat.form_type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters & Export */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <label htmlFor="filter" className="block text-black font-semibold mb-2">
              Filter by Type
            </label>
            <select
              id="filter"
              value={filterType}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="bg-white border border-gray-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
            >
              <option value="all">All Submissions</option>
              <option value="contact">Contact Forms</option>
            </select>
          </div>

          <button
            onClick={exportCSV}
            className="flex items-center space-x-2 bg-blue text-black px-6 py-3 rounded-lg font-bold hover:bg-gold hover:text-white transition-colors"
          >
            <Download size={20} />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="animate-spin text-blue" size={32} />
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-12 text-gray">
                No submissions yet.
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Business
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 bg-blue/10 text-blue rounded text-xs font-semibold">
                          {submission.form_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-semibold">
                        {submission.name || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">
                        {submission.email || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">
                        {submission.phone || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">
                        {submission.business_name || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">
                        {submission.business_type || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
