import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, MapPin, GraduationCap, Phone, Search } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Top Colleges & Universities | ADMISSION AASHARAY",
    description: "Explore the best colleges and universities in India with ADMISSION AASHARAY.",
};

const topColleges = [
    { name: "Christian Medical College", city: "Vellore", type: "Medical", image: "https://images.unsplash.com/photo-1519494140681-891791d9b4b3?w=500&h=300&fit=crop" },
    { name: "Armed Forces Medical College", city: "Pune", type: "Medical", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=300&fit=crop" },
    { name: "Kasturba Medical College", city: "Manipal", type: "Medical", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?w=500&h=300&fit=crop" },
    { name: "Katihar Medical College", city: "Katihar", type: "Medical", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&h=300&fit=crop" },
    { name: "Bharati Vidyapeeth University", city: "Pune", type: "Multiple", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop" },
    { name: "Maharashtra Institute Of Tech", city: "Pune", type: "Engineering", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=300&fit=crop" },
    { name: "Vellore Institute Of Tech", city: "Vellore", type: "Engineering", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop" },
    { name: "Galgotias College", city: "Greater Noida", type: "Engineering", image: "https://images.unsplash.com/photo-1592280771800-bcf291d0337e?w=500&h=300&fit=crop" },
    { name: "Amity University", city: "Noida", type: "Multiple", image: "https://images.unsplash.com/photo-1498243639351-a6c9af99adce?w=500&h=300&fit=crop" },
    { name: "BITS Pilani", city: "Pilani", type: "Engineering", image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?w=500&h=300&fit=crop" },
    { name: "Manipal Institute of Tech", city: "Manipal", type: "Engineering", image: "https://images.unsplash.com/photo-1525921429624-479b6a29d81d?w=500&h=300&fit=crop" },
    { name: "SRM Institute of Science", city: "Chennai", type: "Engineering", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop" },
];

export default function TopColleges() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Top Colleges & Universities</h1>
                    <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
                        Your destination for premium education. Explore top-ranked institutions across India.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1 border-r border-gray-100 pr-8 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <Search size={20} className="text-[#22c55e]" /> Search
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Search colleges..."
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] outline-none"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                                <div className="space-y-2">
                                    {["Medical", "Engineering", "Management", "Law", "Paramedical", "Polytechnic"].map((cat) => (
                                        <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-[#22c55e] transition-colors">
                                            <input type="checkbox" className="w-4 h-4 rounded text-[#22c55e] focus:ring-[#003366]" />
                                            <span className="text-gray-600">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-[#003366] mb-2">Need Guidance?</h4>
                                <p className="text-sm text-gray-600 mb-4">Get free counselling from our experts.</p>
                                <a href="tel:+919155427301" className="flex items-center justify-center gap-2 w-full bg-[#22c55e] text-white py-2 rounded-md font-bold hover:bg-red-700 transition-colors">
                                    <Phone size={16} /> Call Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Colleges Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {topColleges.map((college, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                                    <div className="relative h-32 md:h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src={college.image}
                                            alt={college.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <span className="absolute top-2 left-2 z-20 bg-[#22c55e] text-white text-[10px] md:text-xs px-2 py-1 rounded-full font-bold">
                                            {college.type}
                                        </span>
                                    </div>
                                    <div className="p-3 md:p-6 flex flex-col flex-grow">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-lg mb-1 md:mb-2 line-clamp-2 group-hover:text-[#003366] transition-colors">
                                            {college.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-gray-500 text-[10px] md:text-sm mb-3 md:mb-4">
                                            <MapPin size={14} className="flex-shrink-0" />
                                            <span className="truncate">{college.city}</span>
                                        </div>
                                        <div className="mt-auto">
                                            <Link href="#" className="block w-full text-center py-1.5 md:py-2 bg-gray-50 text-[#003366] text-xs md:text-sm font-bold rounded-md hover:bg-[#003366] hover:text-white transition-colors border border-[#003366]/20">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
