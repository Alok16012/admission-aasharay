"use client";

import { Bell } from "lucide-react";

export default function Marquee() {
  return (
    <div className="bg-[#003366] text-white py-2 overflow-hidden flex items-center relative z-20">
      <div className="bg-[#22c55e] px-4 py-1 font-bold flex items-center gap-2 absolute left-0 z-30 h-full">
        <Bell size={16} className="animate-pulse" />
        <span className="hidden md:inline">Notifications</span>
      </div>

      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee pl-[140px] md:pl-[140px]">
          <span className="mx-4">JEE Main - 2026 Applications Open!</span>
          <span className="mx-4 text-yellow-300">•</span>
          <span className="mx-4">NEET UG 2026 Counselling Starts Soon</span>
          <span className="mx-4 text-yellow-300">•</span>
          <span className="mx-4">WBJEE 2026 Admit Card Released</span>
          <span className="mx-4 text-yellow-300">•</span>
          <span className="mx-4">Admission Open for MBBS in Russia, Philippines, and Georgia</span>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
