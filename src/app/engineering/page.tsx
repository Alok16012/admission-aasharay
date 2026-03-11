import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseApplyModal from "@/components/CourseApplyModal";
import { Cog, Building2, BookOpen, Laptop, Phone } from "lucide-react";

export const metadata = {
    title: "Engineering Courses | ADMISSION AASHARAY",
    description: "Get admission in top engineering colleges for B.Tech, M.Tech, and diploma courses.",
};

const coursesData = [
    { program: "B.Tech (Bachelor of Technology)", duration: "4 Years", eligibility: "10+2 (PCM)", minPercent: "45%" },
    { program: "M.Tech (Master of Technology)", duration: "2 Years", eligibility: "B.Tech/B.E", minPercent: "50%" },
    { program: "Diploma in Engineering", duration: "3 Years", eligibility: "10th Pass", minPercent: "35%" },
    { program: "B.E (Bachelor of Engineering)", duration: "4 Years", eligibility: "10+2 (PCM)", minPercent: "45%" },
    { program: "B.Arch (Bachelor of Architecture)", duration: "5 Years", eligibility: "10+2 (PCM)", minPercent: "50%" },
    { program: "BCA (Bachelor of Computer Applications)", duration: "3 Years", eligibility: "10+2 (Any Stream)", minPercent: "45%" },
    { program: "MCA (Master of Computer Applications)", duration: "2 Years", eligibility: "BCA/B.Sc", minPercent: "50%" },
];

const branches = [
    "Computer Science & Engineering",
    "Information Technology",
    "Electronics & Communication Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Biotechnology",
    "Aerospace Engineering",
];

const exams = [
    "JEE Main",
    "JEE Advanced",
    "WBJEE",
    "COMEDK",
    "BITSAT",
    "VITEEE",
    "SRMJEEE",
];

export default function Engineering() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">Engineering Courses</h1>
                    <p className="mt-2 text-gray-200">Build Your Future with Technology</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                                <Cog className="text-[#22c55e]" /> Engineering Admissions
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Engineering remains one of the most sought-after career paths in India. With a plethora of specialization options and rapidly evolving technology, choosing the right branch and college is crucial for a successful career.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <span className="font-bold">ADMISSION AASHARAY</span> offers expert counselling for students aiming for IITs, NITs, and top private engineering colleges. We help you understand the scope of various branches and identify colleges that align with your career goals.
                            </p>
                        </section>

                        {/* Popular Courses Table */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <BookOpen className="text-[#22c55e]" /> Popular Courses
                            </h2>
                            <CourseApplyModal coursesData={coursesData} themeColor="#003366" />
                        </section>

                        {/* Branches List */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Laptop className="text-[#22c55e]" /> Top Engineering Branches
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {branches.map((branch, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#003366] hover:text-white transition-colors cursor-default">
                                        {branch}
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
                                        <option>Select Branch</option>
                                        <option>Computer Science</option>
                                        <option>Mechanical</option>
                                        <option>Civil</option>
                                        <option>Electronics</option>
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
