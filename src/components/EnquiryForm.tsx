"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export default function EnquiryForm() {
  const [status, setStatus] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const enquiry = [
      "Hello Karni & Co., I'd like to request a quotation.", "",
      `Name: ${get("name")}`, `Company: ${get("company") || "Not provided"}`,
      `Email: ${get("email")}`, `Phone: ${get("phone") || "Not provided"}`,
      `Category: ${get("category") || "General enquiry"}`,
      `Quantity / frequency: ${get("quantity") || "Not specified"}`,
      `Requirements: ${get("message") || "Please contact me to discuss."}`,
    ].join("\n");
    if (/^\d{10,15}$/.test(site.whatsappNumber)) {
      window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(enquiry)}`, "_blank", "noopener,noreferrer");
      setStatus("Your enquiry is ready in WhatsApp. Please review and send it there.");
      return;
    }
    if (site.contactEmail.includes("@")) {
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent("Bulk supply enquiry")}&body=${encodeURIComponent(enquiry)}`;
      setStatus("Your enquiry is ready in your email app. Please review and send it.");
      return;
    }
    setStatus("The website owner needs to configure a WhatsApp number or contact email before enquiries can be sent.");
  }
  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm"><span className="font-semibold">Your name *</span><input className="form-field" name="name" placeholder="Full name" autoComplete="name" required maxLength={100} /></label>
        <label className="grid gap-2 text-sm"><span className="font-semibold">Company / organisation</span><input className="form-field" name="company" placeholder="Company name" autoComplete="organization" maxLength={150} /></label>
        <label className="grid gap-2 text-sm"><span className="font-semibold">Work email *</span><input className="form-field" type="email" name="email" placeholder="you@company.com" autoComplete="email" required maxLength={254} /></label>
        <label className="grid gap-2 text-sm"><span className="font-semibold">Phone number</span><input className="form-field" type="tel" name="phone" placeholder="Contact number" autoComplete="tel" maxLength={30} /></label>
      </div>
      <label className="grid gap-2 text-sm"><span className="font-semibold">Product category</span><select className="form-field" name="category" defaultValue=""><option value="">Select a category</option><option>Waste management</option><option>Paper and hygiene</option><option>Cleaning tools</option><option>Cleaning chemicals</option><option>Housekeeping essentials</option><option>Custom bulk requirements</option></select></label>
      <label className="grid gap-2 text-sm"><span className="font-semibold">Estimated quantity / order frequency</span><input className="form-field" name="quantity" placeholder="e.g. monthly requirement, bulk order" maxLength={200} /></label>
      <label className="grid gap-2 text-sm"><span className="font-semibold">Tell us what you need</span><textarea className="form-field min-h-28 resize-y" name="message" placeholder="Products, quantities, delivery location or other requirements..." rows={4} maxLength={3000} /></label>
      <button type="submit" className="button-primary w-full sm:w-fit">Prepare my enquiry <span aria-hidden="true">→</span></button>
      <p className="text-xs leading-5 text-muted">Your enquiry is prepared in WhatsApp or your email app. It is not submitted to a server by this form.</p>
      {status && <p role="status" aria-live="polite" className="text-sm leading-6 text-maroon">{status}</p>}
    </form>
  );
}
