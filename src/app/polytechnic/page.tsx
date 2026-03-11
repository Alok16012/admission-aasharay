import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseApplyModal from "@/components/CourseApplyModal";
import { Hammer, BookOpen, Phone } from "lucide-react";

export const metadata = {
    title: "Polytechnic Courses | ADMISSION AASHARAY",
    description: "Get admission in top Polytechnic colleges for Diploma courses in Engineering.",
};

const coursesData = [
    { program: "Diploma in Mechanical Engineering", duration: "3 Years", eligibility: "10th Pass", minPercent: "35%" },
    { program: "Diploma in Civil Engineering", duration: "3 Years", eligibility: "10th Pass", minPercent: "35%" },
    { program: "Diploma in Electrical Engineering", duration: "3 Years", eligibility: "10th Pass", minPercent: "35%" },
    { program: "Diploma in Computer Science", duration: "3 Years", eligibility: "10th Pass", minPercent: "35%" },
    { program: "Diploma in Electronics", duration: "3 Years", eligibility: "10th Pass", minPercent: "35%" },
    { program: "Diploma in Automobile Engineering", duration: "3 Years", eligibility: "10th Pass", minPercent: "35%" },
];

const eligibility = [
    "Candidate must have passed 10th standard (SSC) from a recognized board.",
    "Minimum 35% marks in Mathematics and Science.",
    "Age limit usually minimum 15 years.",
];

export default function Polytechnic() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">Polytechnic Courses</h1>
                    <p className="mt-2 text-gray-200">Start Your Technical Career Early</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                                <Hammer className="text-[#22c55e]" /> Polytechnic Admissions
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Polytechnic diploma courses provide practical technical knowledge and skills, enabling students to start their careers in engineering fields immediately after completion. They also serve as a gateway to lateral entry into the second year of B.Tech programs.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                At <span className="font-bold">ADMISSION AASHARAY</span>, we help you find the best government and private polytechnic colleges that offer excellent infrastructure and placement support.
                            </p>
                        </section>

                        {/* Popular Courses Table */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <BookOpen className="text-[#22c55e]" /> Popular Diploma Courses
                            </h2>
                            <CourseApplyModal coursesData={coursesData} themeColor="#003366" />
                        </section>

                        {/* Eligibility */}
                        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-xl font-bold text-[#003366] mb-4">Eligibility Criteria</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                                {eligibility.map((criteria, index) => (
                                    <li key={index}>{criteria}</li>
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
                                        <option>Mechanical</option>
                                        <option>Civil</option>
                                        <option>Electrical</option>
                                        <option>Computer Science</option>
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
