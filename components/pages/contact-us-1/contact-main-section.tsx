"use client";

import ContactFormSection from "./contact-form-section";
import ContactInfoSection from "./contact-info-section";

const ContactMainSection = () => (
  <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <ContactFormSection />
      </div>
      <div className="lg:col-span-2">
        <ContactInfoSection />
      </div>
    </div>
  </div>
);

export default ContactMainSection;
