import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseApplyModal from "@/components/CourseApplyModal";
import { Briefcase, Building2, BookOpen, Phone } from "lucide-react";

export const metadata = {
    title: "Management Courses | ADMISSION AASHARAY",
    description: "Get admission in top management colleges for MBA, PGDM, BBA, and more.",
};

const coursesData = [
    { program: "MBA (Master of Business Administration)", duration: "2 Years", eligibility: "Graduation", minPercent: "50%" },
    { program: "PGDM (Post Graduate Diploma in Management)", duration: "2 Years", eligibility: "Graduation", minPercent: "50%" },
    { program: "BBA (Bachelor of Business Administration)", duration: "3 Years", eligibility: "10+2 (Any Stream)", minPercent: "45%" },
    { program: "BMS (Bachelor of Management Studies)", duration: "3 Years", eligibility: "10+2 (Any Stream)", minPercent: "45%" },
    { program: "Executive MBA", duration: "1 Year", eligibility: "Graduation + Experience", minPercent: "50%" },
];

const specializations = [
    "Finance",
    "Marketing",
    "Human Resource (HR)",
    "Operations",
    "Information Technology",
    "International Business",
    "Data Analytics",
];

const exams = [
    "CAT",
    "MAT",
    "XAT",
    "CMAT",
    "SNAP",
    "NMAT",
];

export default function Management() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">Management Courses</h1>
                    <p className="mt-2 text-gray-200">Lead the Future of Business</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                                <Briefcase className="text-[#22c55e]" /> Management Admissions
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                A career in management opens doors to leadership roles in top organizations worldwide. Whether you are looking to start your own business or climb the corporate ladder, a management degree provides the necessary skills and network.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                At <span className="font-bold">ADMISSION AASHARAY</span>, we guide students to the best B-Schools in India and abroad. We help you choose the right specialization and college that fits your career aspirations.
                            </p>
                        </section>

                        {/* Popular Courses Table */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <BookOpen className="text-[#22c55e]" /> Popular Courses
                            </h2>
                            <CourseApplyModal coursesData={coursesData} themeColor="#003366" />
                        </section>

                        {/* Specializations List */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Briefcase className="text-[#22c55e]" /> Top Specializations
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {specializations.map((spec, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#003366] hover:text-white transition-colors cursor-default">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Entrance Exams */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Building2 className="text-[#22c55e]" /> Top Entrance Exams
                            </h2>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {exams.map((exam, index) => (
                                    <li key={index} className="bg-white p-3 rounded-md shadow-sm border border-gray-200 text-center font-semibold text-[#003366]">
                                        {exam}
                                    </li>
                                ))}
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
                                        <option>MBA</option>
                                        <option>PGDM</option>
                                        <option>BBA</option>
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
