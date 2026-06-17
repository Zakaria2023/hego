import type { ReactNode } from "react";

type ContactInfoRowProps = {
  children: ReactNode;
  icon: ReactNode;
  label: string;
};

const ContactInfoRow = ({ children, icon, label }: ContactInfoRowProps) => (
  <div className="group flex items-start gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#005CA3]/20 bg-[#005CA3]/10 transition-all duration-200 group-hover:border-[#005CA3]/40 group-hover:bg-[#005CA3]/20">
      {icon}
    </div>
    <div>
      <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-widest text-slate-600">
        {label}
      </span>
      <div className="text-sm font-medium leading-relaxed text-[#0F172A]">
        {children}
      </div>
    </div>
  </div>
);

export default ContactInfoRow;
