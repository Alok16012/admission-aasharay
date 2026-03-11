import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Stethoscope, Cog, Briefcase, Scale, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "All Courses | ADMISSION AASHARAY",
    description: "Browse our wide range of courses in Medical, Engineering, Management, Law, and more.",
};

const courseCategories = [
    {
        title: "Medical",
        icon: Stethoscope,
        description: "MBBS, BDS, BAMS, BHMS, B.Pharma",
        link: "/medical",
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        title: "Engineering",
        icon: Cog,
        description: "B.Tech, M.Tech, Diploma, B.Arch",
        link: "/engineering",
        color: "text-green-600",
        bg: "bg-green-100",
    },
    {
        title: "Management",
        icon: Briefcase,
        description: "MBA, PGDM, BBA",
        link: "/management",
        color: "text-orange-600",
        bg: "bg-orange-100",
    },
    {
        title: "Law",
        icon: Scale,
        description: "LLB, BA LLB, BBALLB",
        link: "/law",
        color: "text-purple-600",
        bg: "bg-purple-100",
    },
    {
        title: "Polytechnic",
        icon: GraduationCap,
        description: "Diploma courses in various streams",
        link: "/polytechnic",
        color: "text-red-600",
        bg: "bg-red-100",
    },
    {
        title: "Paramedical",
        icon: Stethoscope,
        description: "Nursing, Lab Technician, etc.",
        link: "/paramedical",
        color: "text-teal-600",
        bg: "bg-teal-100",
    },
];

export default function Courses() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white">
                <h1 className="text-4xl font-bold">Our Courses</h1>
                <p className="mt-2 text-gray-200">Choose the Right Path for Your Career</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseCategories.map((category, index) => (
                        <Link key={index} href={category.link} className="block group">
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                                <div className={`${category.bg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon size={32} className={category.color} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#22c55e] transition-colors">{category.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {category.description}
                                </p>
                                <span className="text-[#003366] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    View Details &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
