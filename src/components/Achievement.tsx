import { Trophy, Users, GraduationCap, CheckCircle } from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        title: "Direct Representation",
        description: "Top Ranked 500+ Colleges and Universities.",
    },
    {
        icon: Users,
        title: "100% Admission",
        description: "Successful admission in various institutions.",
    },
    {
        icon: GraduationCap,
        title: "Financial Aid",
        description: "Successful processing of Scholarship Applications.",
    },
    {
        icon: CheckCircle,
        title: "95% Success Rate",
        description: "High success rate in providing admission.",
    },
];

export default function Achievement() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <p className="text-[#22c55e] font-semibold uppercase tracking-widest text-sm mb-2">Why Choose Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
                            Our <span className="relative inline-block">Achievement
                                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#22c55e] rounded-full"></span>
                            </span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Since our humble beginning in 2001, <span className="font-bold text-[#003366]">ADMISSION AASHARAY</span> has been constantly providing quality and professional guidance to students. With our dedicated approach, we have been able to win the confidence of students who have approached us to fulfil their educational goals.
                        </p>

                        <div className="space-y-5">
                            {achievements.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="bg-[#003366] p-3 rounded-full text-white flex-shrink-0 group-hover:bg-[#22c55e] transition-colors duration-300 shadow-md">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="/about" className="inline-block bg-[#003366] text-white px-7 py-3 rounded-md hover:bg-[#001a33] transition-colors font-semibold shadow-md hover:shadow-lg">
                                Read More About Us
                            </a>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#003366] relative">
                        {/* Green accent dot */}
                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#22c55e]"></div>
                        <h3 className="text-2xl font-bold text-[#003366] mb-6 text-center">Make an Enquiry</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none transition-shadow" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none transition-shadow" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                <input type="tel" className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none transition-shadow" placeholder="Enter mobile number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Course Interested In</label>
                                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none text-gray-600 transition-shadow">
                                    <option>Select Course</option>
                                    <option>MBBS</option>
                                    <option>B.Tech</option>
                                    <option>MBA</option>
                                    <option>Law</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none transition-shadow" rows={3} placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#22c55e] text-white py-3 rounded-md font-bold hover:bg-[#16a34a] transition-colors shadow-md hover:shadow-lg">
                                Submit Enquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
