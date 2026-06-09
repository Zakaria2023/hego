import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="relative mb-8 animate-fade-in">
        <Image
          src="/logo.png"
          alt="SWEDINOX AB"
          width={200}
          height={50}
          priority
          className="h-14 w-auto object-contain"
        />
      </div>

      {/* Animated bar — yellow → blue */}
      <div className="relative w-48 h-1 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 w-1/2 rounded-full animate-loading-bar"
          style={{
            background: "linear-gradient(90deg, #F5A623, #00AADD, #005CA3)",
          }}
        />
      </div>

      {/* Tagline */}
      <p className="mt-6 text-[#94A3B8] text-xs font-semibold tracking-[0.3em] uppercase animate-fade-in delay-200">
        Keeping your business stainless
      </p>

      <style>{`
        @keyframes loading-bar {
          0%   { left: -50%; width: 50%; }
          50%  { left: 25%; width: 60%; }
          100% { left: 110%; width: 50%; }
        }
        .animate-loading-bar {
          animation: loading-bar 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
