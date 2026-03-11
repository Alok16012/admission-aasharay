import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plane, Globe, BookOpen, GraduationCap, Phone } from "lucide-react";

export const metadata = {
    title: "Study Abroad | ADMISSION AASHARAY",
    description: "Fulfill your dream of studying abroad. MBBS in Russia, Philippines, Kazakhstan, and more.",
};

const countries = [
    "Russia",
    "Philippines",
    "Kazakhstan",
    "Kyrgyzstan",
    "Georgia",
    "Ukraine",
    "China",
    "Bangladesh",
    "Nepal",
];

const benefits = [
    "World Class Infrastructure",
    "English Medium Education",
    "Low Tuition Fees",
    "MCI/WHO Recognized Universities",
    "Global Exposure",
    "No Donation/Capitation Fees",
];

export default function StudyAbroad() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">Study Abroad</h1>
                    <p className="mt-2 text-gray-200">Expand Your Horizons</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                                <Plane className="text-[#22c55e]" /> MBBS Abroad
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Studying MBBS abroad has become a popular choice for Indian students due to the limited number of government seats and high fees in private colleges in India. Countries like Russia, Philippines, and Kazakhstan offer high-quality medical education at affordable costs.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <span className="font-bold">ADMISSION AASHARAY</span> is a trusted name for study abroad consultancy. We guide you through the entire process, from university selection to visa application and travel arrangements.
                            </p>
                        </section>

                        {/* Popular Countries */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Globe className="text-[#22c55e]" /> Popular Destinations
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {countries.map((country, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-700 font-medium">{country}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Benefits */}
                        <section className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                            <h2 className="text-xl font-bold text-pink-700 mb-4">Why Study Abroad?</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                                        <GraduationCap size={16} className="text-pink-500" />
                                        {benefit}
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
                                        <option>Select Country</option>
                                        <option>Russia</option>
                                        <option>Philippines</option>
                                        <option>Kazakhstan</option>
                                        <option>Other</option>
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
