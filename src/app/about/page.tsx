import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Achievement from "@/components/Achievement";
import { Users, Target, Eye, ShieldCheck, Award } from "lucide-react";

export const metadata = {
    title: "About Us | Admission Providers",
    description: "Learn about ADMISSION AASHARAY, the leading educational consultancy in Patna.",
};

export default function About() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-2 text-gray-200">Our Journey, Mission, and Vision</p>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-[#003366] mb-6">Who We Are</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            <span className="font-bold">ADMISSION AASHARAY</span> is a premier educational consultancy based in Nala Road, Patna, Bihar. Since our inception in 2001, we have been dedicated to guiding students towards their dream careers. We bridge the gap between ambitious students and top-tier educational institutions across India and abroad.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We understand that choosing the right career path and college is one of the most critical decisions in a student's life. Our team of experienced counselors provides personalized guidance, ensuring that every student makes an informed choice based on their aptitude and interests.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <div className="flex items-center gap-2 text-[#22c55e] font-bold">
                                <Award /> <span>20+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#22c55e] font-bold">
                                <Users /> <span>10k+ Students Placed</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                        {/* Placeholder for About Image */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                            About Us Image Placeholder
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team Meeting"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-blue-100 p-4 rounded-full inline-block mb-4 text-blue-600">
                            <Target size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
                        <p className="text-gray-600 text-sm">
                            To empower students with the right knowledge and guidance to achieve their academic and career goals. We aim to make quality education accessible to all.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#22c55e] text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-red-100 p-4 rounded-full inline-block mb-4 text-red-600">
                            <Eye size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
                        <p className="text-gray-600 text-sm">
                            To be the most trusted and respected educational consultancy in India, known for our integrity, transparency, and student-centric approach.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-green-100 p-4 rounded-full inline-block mb-4 text-green-600">
                            <ShieldCheck size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
                        <p className="text-gray-600 text-sm">
                            Integrity, Excellence, and Empathy are at the core of everything we do. We believe in building long-term relationships based on trust.
                        </p>
                    </div>
                </div>
            </div>

            <Achievement />
            <Footer />
        </main>
    );
}
