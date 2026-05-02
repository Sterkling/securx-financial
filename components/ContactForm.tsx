"use client";

import { useState } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { Loader2 } from "lucide-react";

const businessTypes = [
  "Bar / Nightclub",
  "Convenience Store",
  "Restaurant",
  "Gas Station",
  "Event Venue",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    message: "",
  });

  const { submitForm, isLoading, isSuccess, isError, message, reset } =
    useFormSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm("contact", formData);
    if (!isError) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessType: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (isSuccess || isError) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-black font-semibold mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-black font-semibold mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-black font-semibold mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
          required
        />
      </div>

      {/* Business Name */}
      <div>
        <label
          htmlFor="businessName"
          className="block text-black font-semibold mb-2"
        >
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>

      {/* Business Type */}
      <div>
        <label
          htmlFor="businessType"
          className="block text-black font-semibold mb-2"
        >
          Business Type <span className="text-red-500">*</span>
        </label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
          required
        >
          <option value="">Select a business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-black font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your location and what you're looking for..."
          className="w-full bg-white border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2" size={20} />
            SENDING...
          </>
        ) : (
          "GET A FREE ATM"
        )}
      </button>

      {/* Success/Error Messages */}
      {isSuccess && (
        <div className="bg-blue/10 border border-blue text-black px-4 py-3 rounded-lg">
          <p className="font-semibold">{message}</p>
        </div>
      )}

      {isError && (
        <div className="bg-red-500/10 border border-red-500 text-red-700 px-4 py-3 rounded-lg">
          <p className="font-semibold">{message}</p>
        </div>
      )}
    </form>
  );
}
