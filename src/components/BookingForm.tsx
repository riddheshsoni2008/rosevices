"use client";

import React, { useState, useEffect } from "react";

// Configured WhatsApp & Phone contact number
export const WHATSAPP_NUMBER = "917499933452"; 
export const PHONE_DISPLAY = "+91 74999 33452";

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "Repair & Diagnostic Visit (₹299)",
    preferredTime: "Immediate Emergency (Within 2 Hours)",
    comments: "",
  });

  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const issueParam = urlParams.get("issue");
      const itemParam = urlParams.get("item");
      const serviceParam = urlParams.get("service");

      if (issueParam) {
        setFormData((prev) => ({
          ...prev,
          serviceType: `Diagnosed Issue: ${issueParam}`,
          comments: `Symptom selected: ${issueParam}`,
        }));
      } else if (itemParam) {
        setFormData((prev) => ({
          ...prev,
          serviceType: itemParam,
        }));
      } else if (serviceParam) {
        setFormData((prev) => ({
          ...prev,
          serviceType: `${serviceParam} Doorstep Booking`,
        }));
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomTicket = "JAL-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);

    const message = `💧 *JALCARE RO SERVICE BOOKING* 💧
---------------------------------------
👤 *Customer Name:* ${formData.name}
📱 *Contact Number:* ${formData.phone}
🛠️ *Service Needed:* ${formData.serviceType}
🕒 *Time Slot:* ${formData.preferredTime}
📍 *Address:* ${formData.address}
📝 *Notes:* ${formData.comments || "N/A"}
---------------------------------------
🎫 *Ticket Ref:* ${randomTicket}`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp directly
    window.open(waUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#CFE6E2] rounded-lg p-6 space-y-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-bold text-[#10201D]">
          Book Doorstep RO Appointment
        </h3>
        <span className="bg-[#25D366]/10 text-[#128C7E] px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1">
          💬 Instant WhatsApp Booking
        </span>
      </div>

      <p className="text-xs text-[#43554F]">
        Fill details below to send direct WhatsApp booking to our service team.
      </p>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-[#10201D] mb-1">
          Your full name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Rajesh Kumar"
          className="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-[#10201D] mb-1">
          Mobile phone number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number (e.g. 7499933452)"
          className="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-xs font-semibold text-[#10201D] mb-1">
          Select service or product required *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]"
        >
          <option value="Repair & Diagnostic Visit (₹299)">On-demand repair & diagnostic check (₹299)</option>
          <option value="Filter & Sediment Cartridge Replacement (₹650)">Filter & sediment cartridge replacement (₹650)</option>
          <option value="RO Membrane Replacement 75 GPD (₹1,450)">RO membrane replacement 75 GPD (₹1,450)</option>
          <option value="Essential AMC Annual Contract (₹2,499)">Essential AMC annual contract (₹2,499)</option>
          <option value="Comprehensive Complete AMC (₹3,999)">Comprehensive complete AMC (₹3,999)</option>
          <option value="Jalcare Aqua Pure 8-Stage Copper RO (₹11,499)">Jalcare Aqua Pure 8-Stage Copper RO (₹11,499)</option>
          <option value="Jalcare Compact UV+RO (₹8,999)">Jalcare Compact UV+RO (₹8,999)</option>
          <option value="Commercial 50 LPH Purifier (₹24,500)">Commercial 50 LPH Purifier (₹24,500)</option>
        </select>
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#10201D] mb-1">
          Preferred visit time slot
        </label>
        <select
          id="preferredTime"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none min-h-[44px]"
        >
          <option value="Immediate Emergency (Within 2 Hours)">Immediate emergency (within 2 hours)</option>
          <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
          <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
          <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
        </select>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-xs font-semibold text-[#10201D] mb-1">
          Doorstep location / full address *
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={2}
          value={formData.address}
          onChange={handleChange}
          placeholder="House No, Street, Landmark, Sector/Area"
          className="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none"
        ></textarea>
      </div>

      {/* Additional Comments */}
      <div>
        <label htmlFor="comments" className="block text-xs font-semibold text-[#10201D] mb-1">
          Additional notes / symptom details (optional)
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={2}
          value={formData.comments}
          onChange={handleChange}
          placeholder="e.g., Kent Grand RO, bad taste or water leaking"
          className="w-full px-3.5 py-2.5 text-sm border border-[#CFE6E2] rounded-md bg-[#FBFDFC] text-[#10201D] focus:border-[#0E5C56] focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 text-sm min-h-[44px] shadow-sm"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981z"/>
        </svg>
        Send Direct WhatsApp Booking
      </button>

      <p className="text-[11px] text-[#43554F] text-center">
        No upfront payment required. Instant response on WhatsApp!
      </p>
    </form>
  );
};
