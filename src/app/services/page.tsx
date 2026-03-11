import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Achievement from "@/components/Achievement";
import {
    GraduationCap,
    FileText,
    Globe,
    BookOpen,
    UserCheck,
    Briefcase
} from "lucide-react";

export const metadata = {
    title: "Services | ADMISSION AASHARAY",
    description: "Explore our wide range of educational services including admission guidance, career counselling, and more.",
};

const services = [
    {
        icon: GraduationCap,
        title: "Admission Guidance",
        description: "We provide expert guidance for admission in top colleges across India and abroad for various courses like Medical, Engineering, Management, and Law.",
    },
    {
        icon: FileText,
        title: "Application Assistance",
        description: "Our team helps students in filling out application forms correctly and ensures all necessary documents are in place to avoid any rejections.",
    },
    {
        icon: UserCheck,
        title: "Career Counselling",
        description: "Confused about your career path? Our experienced counselors analyze your aptitude and interests to suggest the best career options for you.",
    },
    {
        icon: Globe,
        title: "Study Abroad",
        description: "We offer comprehensive support for students fulfilling their dream of studying abroad, including university selection, visa assistance, and pre-departure briefing.",
    },
    {
        icon: BookOpen,
        title: "Entrance Exam Prep",
        description: "Get guidance on how to prepare for competitive entrance exams like NEET, JEE, CAT, CLAT, etc., with tips and resources from experts.",
    },
    {
        icon: Briefcase,
        title: "Placement Support",
        description: "We not only help you get into a good college but also provide guidance on building a strong profile for better placement opportunities in the future.",
    },
];

export default function Services() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="mt-2 text-gray-200">Comprehensive Solutions for Your Educational Journey</p>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#22c55e] transition-colors duration-300">
                                <service.icon size={32} className="text-[#003366] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#22c55e] transition-colors">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#003366] mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us today to get personalized advice and take the first step towards a successful career.
                    </p>
                    <a href="/contact" className="inline-block bg-[#22c55e] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg">
                        Get in Touch
                    </a>
                </div>
            </div>

            <Footer />
        </main>
    );
}
