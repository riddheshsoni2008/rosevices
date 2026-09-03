"use client";

import React, { useState, useEffect } from "react";

interface BookingRecord {
  ticketId: string;
  name: string;
  phone: string;
  serviceType: string;
  preferredTime: string;
  address: string;
  comments?: string;
  status?: string;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(false);

  const ADMIN_PIN = "1234"; // Default admin passcode

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_PIN) {
      setIsAuthenticated(true);
      setAuthError("");
      fetchBookings();
    } else {
      setAuthError("Invalid admin passcode. Please try again.");
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/booking");
      const data = await res.json();
      if (data.bookings) {
        setBookings(data.bookings);
      }
    } catch (err) {
      console.error("Failed to load admin bookings", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (ticketId: string, newStatus: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.ticketId === ticketId ? { ...b, status: newStatus } : b))
    );
  };

  const filteredBookings = bookings.filter((b) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "pending") return !b.status || b.status === "Pending";
    if (filterStatus === "completed") return b.status === "Completed";
    return true;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FBFDFC] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white border border-[#CFE6E2] rounded-lg p-8 space-y-6 shadow-sm">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#0E5C56] text-white font-serif font-bold text-2xl flex items-center justify-center mx-auto">
              🔒
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#10201D]">
              Jalcare Admin Desk
            </h1>
            <p className="text-xs text-[#43554F]">
              Enter admin passcode to view doorstep service inquiries & customer bookings.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-pin" className="block text-xs font-semibold text-[#10201D] mb-1">
                Admin Security PIN *
              </label>
              <input
                id="admin-pin"
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter PIN (Default: 1234)"
                className="w-full px-4 py-3 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]"
              />
            </div>

            {authError && (
              <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded">
                {authError}
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-3 text-sm min-h-[44px]">
              Access Admin Portal
            </button>
          </form>

          <p className="text-[11px] text-[#43554F] text-center">
            Authorized technician & manager access only. Default PIN is <code className="bg-[#E7F3F1] px-1 py-0.5 rounded font-mono">1234</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFDFC] pb-16">
      
      {/* Admin Top Header */}
      <header className="bg-[#10201D] text-white py-6 border-b border-[#0E5C56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#C98A2E] uppercase tracking-wider block">
              Management Portal
            </span>
            <h1 className="font-serif text-2xl font-bold text-white">
              Customer Inquiries & Doorstep Booking Ledger
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchBookings}
              className="btn-secondary text-xs px-3.5 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              🔄 Refresh List
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="btn-primary text-xs px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Metrics Summary Bar */}
      <section className="py-8 bg-[#E7F3F1] border-b border-[#CFE6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-[#CFE6E2]">
              <span className="text-xs text-[#43554F] block">Total Inquiries</span>
              <span className="font-serif text-2xl font-bold text-[#10201D]">
                {bookings.length}
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#CFE6E2]">
              <span className="text-xs text-[#43554F] block">Emergency Calls</span>
              <span className="font-serif text-2xl font-bold text-[#0E5C56]">
                {bookings.filter((b) => b.preferredTime?.toLowerCase().includes("emergency")).length}
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#CFE6E2]">
              <span className="text-xs text-[#43554F] block">AMC Contracts</span>
              <span className="font-serif text-2xl font-bold text-[#C98A2E]">
                {bookings.filter((b) => b.serviceType?.toLowerCase().includes("amc")).length}
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#CFE6E2]">
              <span className="text-xs text-[#43554F] block">Pending Visits</span>
              <span className="font-serif text-2xl font-bold text-amber-800">
                {bookings.filter((b) => !b.status || b.status === "Pending").length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Inquiries Table */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#CFE6E2] pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors min-h-[38px] ${
                  filterStatus === "all"
                    ? "bg-[#0E5C56] text-white"
                    : "bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]"
                }`}
              >
                All Inquiries ({bookings.length})
              </button>
              <button
                onClick={() => setFilterStatus("pending")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors min-h-[38px] ${
                  filterStatus === "pending"
                    ? "bg-[#0E5C56] text-white"
                    : "bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilterStatus("completed")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors min-h-[38px] ${
                  filterStatus === "completed"
                    ? "bg-[#0E5C56] text-white"
                    : "bg-white text-[#10201D] border border-[#CFE6E2] hover:bg-[#E7F3F1]"
                }`}
              >
                Completed
              </button>
            </div>

            <p className="text-xs text-[#43554F]">
              Showing {filteredBookings.length} customer records
            </p>
          </div>

          {loading ? (
            <div className="p-12 text-center text-xs text-[#43554F]">
              Loading doorstep service records...
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="p-12 bg-white border border-[#CFE6E2] rounded-lg text-center space-y-2">
              <p className="font-serif text-base font-semibold text-[#10201D]">
                No customer inquiries found
              </p>
              <p className="text-xs text-[#43554F]">
                New doorstep bookings submitted on the website or mobile phone will appear here in real-time.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden border border-[#CFE6E2] rounded-lg bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#E7F3F1] border-b border-[#CFE6E2] text-xs font-semibold text-[#10201D]">
                      <th className="py-3 px-4">Ticket & Date</th>
                      <th className="py-3 px-4">Customer Details</th>
                      <th className="py-3 px-4">Requested Service</th>
                      <th className="py-3 px-4">Slot & Location</th>
                      <th className="py-3 px-4">Status & Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#CFE6E2] text-xs text-[#10201D]">
                    {filteredBookings.map((b) => (
                      <tr key={b.ticketId} className="hover:bg-[#E7F3F1]/40 transition-colors">
                        
                        {/* Ticket & Date */}
                        <td className="py-3.5 px-4 align-top whitespace-nowrap">
                          <span className="font-serif font-bold text-xs text-[#0E5C56] block">
                            {b.ticketId}
                          </span>
                          <span className="text-[11px] text-[#43554F] block mt-0.5">
                            {b.createdAt ? new Date(b.createdAt).toLocaleString("en-IN") : "Just now"}
                          </span>
                        </td>

                        {/* Customer */}
                        <td className="py-3.5 px-4 align-top">
                          <strong className="block text-sm text-[#10201D]">
                            {b.name}
                          </strong>
                          <a
                            href={`tel:${b.phone}`}
                            className="inline-flex items-center gap-1 text-xs text-[#0E5C56] font-semibold hover:underline mt-0.5"
                          >
                            📞 {b.phone}
                          </a>
                        </td>

                        {/* Service */}
                        <td className="py-3.5 px-4 align-top">
                          <span className="font-semibold text-xs text-[#10201D] block">
                            {b.serviceType}
                          </span>
                          {b.comments && (
                            <p className="text-[11px] text-[#43554F] mt-1 italic max-w-xs">
                              "{b.comments}"
                            </p>
                          )}
                        </td>

                        {/* Slot & Address */}
                        <td className="py-3.5 px-4 align-top max-w-xs">
                          <span className="inline-block text-[10px] font-semibold text-[#0E5C56] bg-[#E7F3F1] px-2 py-0.5 rounded border border-[#CFE6E2] mb-1">
                            {b.preferredTime}
                          </span>
                          <p className="text-xs text-[#43554F] leading-relaxed">
                            {b.address}
                          </p>
                        </td>

                        {/* Status & Actions */}
                        <td className="py-3.5 px-4 align-top whitespace-nowrap">
                          <div className="space-y-2">
                            <span
                              className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                b.status === "Completed"
                                  ? "bg-green-100 text-green-800 border border-green-200"
                                  : "bg-amber-100 text-amber-900 border border-amber-200"
                              }`}
                            >
                              {b.status || "Pending"}
                            </span>

                            <div className="flex items-center gap-2">
                              {b.status !== "Completed" ? (
                                <button
                                  onClick={() => updateStatus(b.ticketId, "Completed")}
                                  className="text-[11px] px-2.5 py-1 rounded bg-[#0E5C56] text-white hover:bg-[#1D7A72]"
                                >
                                  Mark Completed
                                </button>
                              ) : (
                                <button
                                  onClick={() => updateStatus(b.ticketId, "Pending")}
                                  className="text-[11px] px-2.5 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                                >
                                  Reopen
                                </button>
                              )}
                            </div>
                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
