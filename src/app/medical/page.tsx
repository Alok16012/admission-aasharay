import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseApplyModal from "@/components/CourseApplyModal";
import { Stethoscope, Building2, BookOpen, Phone } from "lucide-react";

export const metadata = {
    title: "Medical Courses | ADMISSION AASHARAY",
    description: "Get admission in top medical colleges for MBBS, BDS, BAMS, BHMS, and more.",
};

const coursesData = [
    { program: "MBBS (Bachelor of Medicine, Bachelor of Surgery)", duration: "5.5 Years", eligibility: "10+2 (PCB)", minPercent: "50%" },
    { program: "BDS (Bachelor of Dental Surgery)", duration: "5 Years", eligibility: "10+2 (PCB)", minPercent: "50%" },
    { program: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)", duration: "5.5 Years", eligibility: "10+2 (PCB)", minPercent: "50%" },
    { program: "BHMS (Bachelor of Homeopathic Medicine & Surgery)", duration: "5.5 Years", eligibility: "10+2 (PCB)", minPercent: "50%" },
    { program: "B.Pharma (Bachelor of Pharmacy)", duration: "4 Years", eligibility: "10+2 (PCM/PCB)", minPercent: "45%" },
    { program: "B.Sc Nursing", duration: "4 Years", eligibility: "10+2 (PCB)", minPercent: "45%" },
    { program: "MD/MS (Postgraduate Medical Courses)", duration: "3 Years", eligibility: "MBBS", minPercent: "50%" },
];

const colleges = [
    "Christian Medical College, Vellore",
    "Armed Forces Medical College, Pune",
    "Kasturba Medical College, Manipal",
    "Maulana Azad Medical College, New Delhi",
    "Lady Hardinge Medical College, New Delhi",
    "Grant Medical College, Mumbai",
    "Madras Medical College, Chennai",
    "King George's Medical University, Lucknow",
];

export default function Medical() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">Medical Courses</h1>
                    <p className="mt-2 text-gray-200">Your Gateway to a Career in Medicine</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                                <Stethoscope className="text-[#22c55e]" /> Medical Admissions
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The medical profession is one of the most noble and respected careers in the world. India is home to some of the finest medical colleges that produce world-class doctors every year. However, getting admission into these top institutions requires proper guidance and strategic planning.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                At <span className="font-bold">ADMISSION AASHARAY</span>, we help aspiring medical students navigate the complex admission process. From NEET counselling to college selection, we are with you at every step.
                            </p>
                        </section>

                        {/* Popular Courses Table */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <BookOpen className="text-[#22c55e]" /> Popular Courses
                            </h2>
                            <CourseApplyModal coursesData={coursesData} themeColor="#003366" />
                        </section>

                        {/* Top Colleges */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Building2 className="text-[#22c55e]" /> Top Medical Colleges
                            </h2>
                            <ul className="space-y-3">
                                {colleges.map((college, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-600">
                                        <span className="w-2 h-2 bg-[#22c55e] rounded-full"></span>
                                        {college}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Eligibility */}
                        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-[#003366] mb-4">Eligibility Criteria for MBBS</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                                <li>Must have passed 10+2 with Physics, Chemistry, Biology/Biotechnology, and English.</li>
                                <li>Minimum 50% aggregate marks for General category (40% for SC/ST/OBC).</li>
                                <li>Must successfully qualify for the NEET UG entrance exam.</li>
                                <li>Minimum age limit is 17 years as of December 31st of the year of admission.</li>
                            </ul>
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
                                        <option>MBBS</option>
                                        <option>BDS</option>
                                        <option>BAMS</option>
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
