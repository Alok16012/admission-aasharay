import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0a1f3d] text-white pt-14 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-bold mb-1 text-white">ADMISSION AASHARAY</h3>
                        <div className="w-10 h-0.5 bg-[#22c55e] mb-4"></div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            We are the leading educational consultancy in Patna. We provide the best guidance for students looking for admission in Medical, Engineering, and Management colleges.
                        </p>

                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-1 text-white uppercase tracking-wide">Quick Links</h3>
                        <div className="w-10 h-0.5 bg-[#22c55e] mb-4"></div>
                        <ul className="space-y-2.5 text-sm text-gray-400">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Services" },
                                { href: "/contact", label: "Contact Us" },
                                { href: "/top-colleges", label: "Top Colleges" },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="hover:text-[#22c55e] transition-colors flex items-center gap-1.5">
                                        <ChevronRight size={12} className="text-[#22c55e]" />{l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Courses */}
                    <div>
                        <h3 className="text-lg font-bold mb-1 text-white uppercase tracking-wide">Our Courses</h3>
                        <div className="w-10 h-0.5 bg-[#22c55e] mb-4"></div>
                        <ul className="space-y-2.5 text-sm text-gray-400">
                            {[
                                { href: "/medical", label: "Medical" },
                                { href: "/engineering", label: "Engineering" },
                                { href: "/management", label: "Management" },
                                { href: "/law", label: "Law" },
                                { href: "/polytechnic", label: "Polytechnic" },
                                { href: "/paramedical", label: "Paramedical" },
                                { href: "/study-abroad", label: "Study Abroad" },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="hover:text-[#22c55e] transition-colors flex items-center gap-1.5">
                                        <ChevronRight size={12} className="text-[#22c55e]" />{l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact - with icon boxes like growusauto */}
                    <div>
                        <h3 className="text-lg font-bold mb-1 text-white uppercase tracking-wide">Contact Info</h3>
                        <div className="w-10 h-0.5 bg-[#22c55e] mb-4"></div>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="bg-[#22c55e]/20 p-2 rounded text-[#22c55e] flex-shrink-0 mt-0.5">
                                    <Phone size={16} />
                                </div>
                                <a href="tel:+919155427301" className="hover:text-white transition-colors leading-relaxed">+91 9155427301, +91 9334808277</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#22c55e]/20 p-2 rounded text-[#22c55e] flex-shrink-0 mt-0.5">
                                    <Mail size={16} />
                                </div>
                                <a href="mailto:admissionaasharay@gmail.com" className="hover:text-white transition-colors leading-relaxed">admissionaasharay@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#22c55e]/20 p-2 rounded text-[#22c55e] flex-shrink-0 mt-0.5">
                                    <MapPin size={16} />
                                </div>
                                <span className="leading-relaxed">Nala Road, Bich Mandir,<br />Laxmi Medical Hall Ke Upper, Patna, Bihar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} ADMISSION AASHARAY. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-5 text-xs uppercase tracking-wider">
                        <Link href="#" className="hover:text-[#22c55e] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#22c55e] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
