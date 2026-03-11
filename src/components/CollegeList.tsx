import Link from "next/link";
import { Building2 } from "lucide-react";

const colleges = [
    { name: "Christian Medical College", city: "Vellore", type: "Medical" },
    { name: "Armed Forces Medical College", city: "Pune", type: "Medical" },
    { name: "Kasturba Medical College", city: "Manipal", type: "Medical" },
    { name: "Katihar Medical College", city: "Katihar", type: "Medical" },
    { name: "Bharati Vidyapeeth Deemed University", city: "Pune", type: "Multiple" },
    { name: "Maharashtra Institute Of Technology", city: "Pune", type: "Engineering" },
    { name: "Vellore Institute Of Technology", city: "Vellore", type: "Engineering" },
    { name: "Galgotias College Of Engineering", city: "Greater Noida", type: "Engineering" },
];

export default function CollegeList() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
                    Top <span className="text-[#22c55e]">Colleges</span> & Universities
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {colleges.map((college, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="bg-white p-3 md:p-4 rounded-full shadow-sm mb-3 md:mb-4 group-hover:bg-[#22c55e] group-hover:text-white transition-colors duration-300">
                                <Building2 size={24} className="text-[#003366] group-hover:text-white transition-colors md:hidden" />
                                <Building2 size={32} className="text-[#003366] group-hover:text-white transition-colors hidden md:block" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm md:text-lg mb-0.5 md:mb-1 line-clamp-1">{college.name}</h3>
                            <p className="text-[10px] md:text-sm text-gray-500 mb-1.5 md:mb-2">{college.city}</p>
                            <span className="text-[10px] md:text-xs bg-blue-100 text-blue-700 px-2 py-0.5 md:py-1 rounded-full">{college.type}</span>
                            <Link href="#" className="mt-4 text-[#22c55e] font-semibold text-sm hover:underline">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link href="/top-colleges" className="inline-block border-2 border-[#003366] text-[#003366] px-8 py-3 rounded-full font-bold hover:bg-[#003366] hover:text-white transition-colors">
                        View All Colleges
                    </Link>
                </div>
            </div>
        </section>
    );
}
