import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseApplyModal from "@/components/CourseApplyModal";
import { Activity, BookOpen, Phone } from "lucide-react";

export const metadata = {
    title: "Paramedical Courses | ADMISSION AASHARAY",
    description: "Get admission in top Paramedical colleges for Nursing, Lab Tech, Pharmacy, etc.",
};

const coursesData = [
    { program: "B.Sc Nursing", duration: "4 Years", eligibility: "10+2 (PCB)", minPercent: "45%" },
    { program: "GNM (General Nursing and Midwifery)", duration: "3.5 Years", eligibility: "10+2 (Any Stream)", minPercent: "40%" },
    { program: "ANM (Auxiliary Nursing Midwifery)", duration: "2 Years", eligibility: "10th Pass", minPercent: "40%" },
    { program: "BMLT (Bachelor of Medical Lab Technology)", duration: "3 Years", eligibility: "10+2 (PCB)", minPercent: "45%" },
    { program: "DMLT (Diploma in Medical Lab Technology)", duration: "2 Years", eligibility: "10+2 (Science)", minPercent: "40%" },
    { program: "BPT (Bachelor of Physiotherapy)", duration: "4.5 Years", eligibility: "10+2 (PCB)", minPercent: "50%" },
    { program: "B.Optom (Bachelor of Optometry)", duration: "4 Years", eligibility: "10+2 (PCB)", minPercent: "45%" },
];

const opportunities = [
    "Government Hospitals",
    "Private Hospitals",
    "Diagnostic Centers",
    "Rehabilitation Centers",
    "Pharmaceutical Companies",
    "Research Labs",
];

export default function Paramedical() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">Paramedical Courses</h1>
                    <p className="mt-2 text-gray-200">The Backbone of Healthcare</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                                <Activity className="text-[#22c55e]" /> Paramedical Admissions
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Paramedical science is a vital part of the healthcare system. Paramedical professionals work alongside doctors to provide advanced medical care and diagnostic services. It is a career with immense scope and stability.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <span className="font-bold">ADMISSION AASHARAY</span> assists students in securing admissions to top nursing and paramedical colleges in India, ensuring a bright future in the healthcare sector.
                            </p>
                        </section>

                        {/* Popular Courses Table */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <BookOpen className="text-[#22c55e]" /> Popular Courses
                            </h2>
                            <CourseApplyModal coursesData={coursesData} themeColor="#003366" />
                        </section>

                        {/* Career Opportunities */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Activity className="text-[#22c55e]" /> Career Opportunities
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {opportunities.map((opp, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#003366] hover:text-white transition-colors cursor-default">
                                        {opp}
                                    </span>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#003366] sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Enquire Now</h3>
                            <form className="space-y-4">
                                <div>
                                    <input type="text" className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[#003366]" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[#003366]" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="tel" className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[#003366]" placeholder="Phone" />
                                </div>
                                <div>
                                    <select className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[#003366] text-gray-500">
                                        <option>Select Course</option>
                                        <option>Nursing</option>
                                        <option>BMLT</option>
                                        <option>BPT</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea className="w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[#003366]" rows={3} placeholder="Message"></textarea>
                                </div>
                                <button className="w-full bg-[#003366] text-white py-2 rounded-md font-bold hover:bg-[#22c55e] transition-colors">
                                    Submit Request
                                </button>
                            </form>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
                                <p className="text-gray-600 text-sm mb-4">Call our expert counselors for free guidance.</p>
                                <a href="tel:+919155427301" className="flex items-center justify-center gap-2 w-full border-2 border-[#003366] text-[#22c55e] py-2 rounded-md font-bold hover:bg-[#22c55e] hover:text-white transition-colors">
                                    <Phone size={18} /> +91 9155427301, +91 9334808277
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
