import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | ADMISSION AASHARAY",
    description: "Get in touch with ADMISSION AASHARAY for expert career guidance and admission assistance.",
};

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-[#003366] py-12 text-center text-white">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 text-gray-200">We'd Love to Hear From You</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#003366] mb-8">Get In Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-[#003366]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">Our Location</h3>
                                    <p className="text-gray-600">Nala Road, Bich Mandir, Laxmi Medical Hall Ke Upper, Patna, Bihar</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-[#003366]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">Phone Number</h3>
                                    <p className="text-gray-600">+91 9155427301, +91 9334808277</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-[#003366]">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">Email Address</h3>
                                    <p className="text-gray-600">admissionaasharay@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-[#003366]">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">Working Hours</h3>
                                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sun: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#003366]">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none" placeholder="+91 9876543210" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none" rows={4} placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#22c55e] text-white py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <MapSection />
            <Footer />
        </main>
    );
}
