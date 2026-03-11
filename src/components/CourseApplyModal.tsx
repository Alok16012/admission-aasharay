"use client";

import { useState } from "react";
import { X, GraduationCap, ArrowRight } from "lucide-react";

interface CourseInfo {
    program: string;
    duration: string;
    eligibility: string;
    minPercent: string;
}

interface CourseApplyModalProps {
    coursesData: CourseInfo[];
    themeColor?: string;
}

export default function CourseApplyModal({ coursesData, themeColor = "#003366" }: CourseApplyModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);

    const openModal = (course: CourseInfo) => {
        setSelectedCourse(course);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedCourse(null);
    };

    return (
        <>
            {/* Table */}
            <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
                <table className="w-full text-left">
                    <thead>
                        <tr style={{ backgroundColor: themeColor }} className="text-white">
                            <th className="px-5 py-4 text-sm font-semibold tracking-wide">Program</th>
                            <th className="px-5 py-4 text-sm font-semibold tracking-wide">Duration</th>
                            <th className="px-5 py-4 text-sm font-semibold tracking-wide">Eligibility</th>
                            <th className="px-5 py-4 text-sm font-semibold tracking-wide text-center">Min %</th>
                            <th className="px-5 py-4 text-sm font-semibold tracking-wide text-center">Apply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesData.map((course, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-100 transition-colors hover:bg-blue-50/60 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                            >
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <GraduationCap size={18} style={{ color: themeColor }} className="flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-800">{course.program}</span>
                                    </div>
                                </td>
                                <td className="px-5 py-4 text-sm text-gray-600 whitespace-nowrap">{course.duration}</td>
                                <td className="px-5 py-4 text-sm text-gray-600">{course.eligibility}</td>
                                <td className="px-5 py-4 text-sm text-gray-700 font-semibold text-center">{course.minPercent}</td>
                                <td className="px-5 py-4 text-center">
                                    <button
                                        onClick={() => openModal(course)}
                                        className="inline-flex items-center gap-1 bg-[#22c55e] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#003366] transition-colors shadow-sm cursor-pointer"
                                    >
                                        Apply <ArrowRight size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Overlay */}
            {isOpen && selectedCourse && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-[modalIn_0.3s_ease-out]">
                        {/* Header */}
                        <div
                            style={{ backgroundColor: themeColor }}
                            className="px-6 py-5 rounded-t-2xl text-white relative"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors cursor-pointer"
                            >
                                <X size={18} />
                            </button>
                            <h3 className="text-lg font-bold pr-10">Apply for Admission</h3>
                            <p className="text-white/80 text-sm mt-1">Fill the form below and our counselors will contact you.</p>
                        </div>

                        {/* Auto-filled Course Info */}
                        <div className="mx-6 mt-5 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Selected Course Details</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <span className="text-xs text-gray-500">Program</span>
                                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{selectedCourse.program}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500">Duration</span>
                                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{selectedCourse.duration}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500">Eligibility</span>
                                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{selectedCourse.eligibility}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500">Min %</span>
                                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{selectedCourse.minPercent}</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="px-6 py-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                <textarea
                                    rows={3}
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                                    placeholder="Any additional information..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#22c55e] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#16a34a] transition-colors shadow-md cursor-pointer"
                            >
                                Submit Application
                            </button>
                            <p className="text-xs text-gray-400 text-center">
                                Our counselors will call you within 24 hours.
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal animation keyframes */}
            <style jsx global>{`
                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </>
    );
}
