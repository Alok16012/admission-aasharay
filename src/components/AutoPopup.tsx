"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AutoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show the popup after 3 seconds of page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-300">

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10 bg-white/50 rounded-full p-1"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="bg-[#003366] p-6 text-center text-white">
                    <h3 className="text-2xl font-bold">Free Counselling</h3>
                    <p className="text-sm mt-2 text-gray-200">Get expert guidance for your career</p>
                </div>

                {/* Form */}
                <div className="p-6">
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none text-gray-700"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none text-gray-700"
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div>
                            <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none text-gray-500" required>
                                <option value="">Select Interested Course</option>
                                <option value="Medical">Medical (MBBS, BDS, etc.)</option>
                                <option value="Engineering">Engineering (B.Tech, M.Tech)</option>
                                <option value="Management">Management (MBA, BBA)</option>
                                <option value="Law">Law (LLB, BA LLB)</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#22c55e] text-white py-3 rounded-md font-bold hover:bg-[#16a34a] transition-colors mt-2"
                        >
                            Submit Request
                        </button>
                    </form>
                    <p className="text-xs text-center text-gray-400 mt-4">We will get back to you shortly.</p>
                </div>
            </div>
        </div>
    );
}
