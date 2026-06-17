import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="mb-8 animate-fade-in">
        <Image
          src="/logo.webp"
          alt="SWEDINOX AB"
          width={200}
          height={56}
          priority
          className="h-14 w-[200px] object-contain"
        />
      </div>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-24 rounded-full animate-pulse bg-linear-to-r from-[#F5A623] via-[#00AADD] to-[#005CA3]" />
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#94A3B8] animate-fade-in delay-200">
        Keeping your business stainless
      </p>
    </div>
  );
}
