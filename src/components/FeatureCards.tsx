import Link from "next/link";
import {
    Stethoscope,
    Cog,
    Briefcase,
    Scale,
    Plane,
    CreditCard
} from "lucide-react";

const features = [
    {
        icon: Stethoscope,
        title: "Medical",
        description: "MBBS, BDS, BAMS, BHMS admissions in top colleges.",
        iconBg: "bg-[#003366]",
        link: "/medical"
    },
    {
        icon: Cog,
        title: "Engineering",
        description: "B.Tech, M.Tech admissions in premier institutes.",
        iconBg: "bg-[#003366]",
        link: "/engineering"
    },
    {
        icon: Briefcase,
        title: "Management",
        description: "MBA, PGDM admissions in top B-Schools.",
        iconBg: "bg-[#003366]",
        link: "/management"
    },
    {
        icon: Scale,
        title: "Law",
        description: "LLB, LLM admissions in reputed law colleges.",
        iconBg: "bg-[#003366]",
        link: "/law"
    },
    {
        icon: Plane,
        title: "Study Abroad",
        description: "MBBS and other courses in foreign universities.",
        iconBg: "bg-[#003366]",
        link: "/study-abroad"
    },
    {
        icon: CreditCard,
        title: "Student Credit Card",
        description: "Guidance for Bihar Student Credit Card Scheme.",
        iconBg: "bg-[#003366]",
        link: "/student-credit-card"
    },
];

export default function FeatureCards() {
    return (
        <section className="py-20 bg-[#f0f4ff]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <p className="text-[#22c55e] font-semibold uppercase tracking-widest text-sm mb-2">What We Offer</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                        Our <span className="relative inline-block">Services
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#22c55e] rounded-full"></span>
                        </span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
                        Comprehensive educational counselling to help you achieve your academic goals across all disciplines.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {features.map((feature, index) => (
                        <Link href={feature.link} key={index} className="group">
                            <div className="bg-white p-5 md:p-7 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full hover:-translate-y-1.5 relative overflow-hidden">
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003366] to-[#22c55e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                                {/* Icon circle - navy like growusauto */}
                                <div className={`${feature.iconBg} p-3 md:p-4 rounded-full mb-4 text-white group-hover:bg-[#22c55e] transition-colors duration-300 shadow-lg`}>
                                    <feature.icon size={24} className="md:hidden" />
                                    <feature.icon size={30} className="hidden md:block" />
                                </div>

                                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-[#003366] transition-colors line-clamp-1">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-[11px] md:text-sm line-clamp-2 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="mt-4 text-[#003366] font-semibold group-hover:text-[#22c55e] text-xs md:text-sm flex items-center gap-1 transition-colors">
                                    Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
