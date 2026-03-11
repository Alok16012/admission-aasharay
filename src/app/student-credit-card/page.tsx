"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CreditCard, CheckCircle, AlertCircle, FileText, Phone, Send, User, Mail, BookOpen, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const documents = [
    "Aadhar Card of Applicant and Co-applicant",
    "Pan Card of Applicant and Co-applicant",
    "10th and 12th Marksheets",
    "Admission Proof (Bonafide Certificate)",
    "Fee Structure from College",
    "Residential Certificate",
    "Bank Passbook",
    "Photos",
];

const steps = [
    "Registration on MNSSBY Portal",
    "Fill Application Form",
    "Document Verification at DRCC",
    "Loan Sanction",
    "Disbursement of Fees",
];

const eligibleCourses = [
    "MBBS / BDS / BAMS / BHMS",
    "B.Tech / B.E / BCA / MCA",
    "MBA / BBA / PGDM",
    "BA LLB / LLB / LLM",
    "B.Sc Nursing / GNM / ANM",
    "Polytechnic / Diploma Courses",
    "B.Pharma / D.Pharma",
    "Other UGC / AICTE Approved Courses",
];

export default function StudentCreditCard() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        fatherName: "",
        district: "",
        course: "",
        collegeName: "",
        passingYear: "",
        queryType: "Admission + Credit Card",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
    };

    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Page Header */}
            <div className="bg-gradient-to-r from-[#003366] via-[#0a4a8a] to-[#003366] py-14 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-4 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-1/3 w-16 h-16 border border-white rounded-full"></div>
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <CreditCard size={36} className="text-yellow-300" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">Bihar Student Credit Card</h1>
                    <p className="mt-3 text-gray-200 text-lg">Financial Support for Higher Education — Loan up to ₹4 Lakhs</p>
                    <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
                        <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">💰 Up to ₹4 Lakhs</span>
                        <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">📉 1-4% Interest</span>
                        <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">🎓 42+ Courses</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                                <CreditCard className="text-[#22c55e]" /> Bihar Student Credit Card Scheme
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The Bihar Student Credit Card (BSCC) scheme is a visionary initiative by the Government of Bihar to ensure that no student is deprived of higher education due to financial constraints. Under this scheme, students can avail an education loan of up to ₹4 Lakhs at a minimal interest rate.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                <span className="font-bold">ADMISSION AASHARAY</span> helps eligible students apply for this scheme, guiding them through the registration, documentation, and verification process to ensure quick approval.
                            </p>
                        </section>

                        {/* Key Features */}
                        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                            <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                                <AlertCircle size={20} /> Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">Loan amount up to <strong>₹4 Lakhs</strong></span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">Interest: <strong>4% Boys</strong>, <strong>1% Girls/Transgender/Divyang</strong></span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">Available for <strong>42+ courses</strong></span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">Repayment starts <strong>after course completion</strong></span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">No collateral or security required</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">Covers tuition fees, hostel, books, laptop</span>
                                </div>
                            </div>
                        </section>

                        {/* Eligible Courses */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <BookOpen className="text-[#22c55e]" /> Eligible Courses
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {eligibleCourses.map((course, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                        <span className="w-2 h-2 bg-[#22c55e] rounded-full flex-shrink-0"></span>
                                        <span className="text-sm text-gray-700">{course}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Application Process */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <FileText className="text-[#22c55e]" /> Application Process
                            </h2>
                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="bg-gradient-to-br from-[#003366] to-[#0a4a8a] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg shadow-md">
                                            {index + 1}
                                        </div>
                                        <span className="text-gray-700 font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Documents Required */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <FileText className="text-[#22c55e]" /> Documents Required
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {documents.map((doc, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md">
                                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                                        {doc}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Application Form */}
                        <section id="apply-form" className="scroll-mt-24">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#003366]/10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#003366] via-[#22c55e] to-[#003366]"></div>
                                <h2 className="text-2xl font-bold text-[#003366] mb-2 flex items-center gap-2">
                                    <Send className="text-[#22c55e]" /> Apply for Bihar Student Credit Card
                                </h2>
                                <p className="text-gray-500 text-sm mb-6">Fill the form below and our BSCC expert counselors will guide you through the process.</p>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle size={40} className="text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                                        <p className="text-gray-500">Our counselors will contact you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <User size={14} /> Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="Applicant full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <User size={14} /> Father&apos;s Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fatherName"
                                                    value={formData.fatherName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="Father's full name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <Mail size={14} /> Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <Phone size={14} /> Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <MapPin size={14} /> District *
                                                </label>
                                                <select
                                                    name="district"
                                                    value={formData.district}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all text-gray-700"
                                                >
                                                    <option value="">Select District</option>
                                                    <option>Patna</option>
                                                    <option>Gaya</option>
                                                    <option>Bhagalpur</option>
                                                    <option>Muzaffarpur</option>
                                                    <option>Darbhanga</option>
                                                    <option>Purnia</option>
                                                    <option>Begusarai</option>
                                                    <option>Samastipur</option>
                                                    <option>Saran</option>
                                                    <option>Vaishali</option>
                                                    <option>Nalanda</option>
                                                    <option>Aurangabad</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <Calendar size={14} /> 12th Passing Year *
                                                </label>
                                                <select
                                                    name="passingYear"
                                                    value={formData.passingYear}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all text-gray-700"
                                                >
                                                    <option value="">Select Year</option>
                                                    <option>2026</option>
                                                    <option>2025</option>
                                                    <option>2024</option>
                                                    <option>2023</option>
                                                    <option>2022</option>
                                                    <option>Before 2022</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <BookOpen size={14} /> Course *
                                                </label>
                                                <select
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all text-gray-700"
                                                >
                                                    <option value="">Select Course</option>
                                                    <option>MBBS</option>
                                                    <option>BDS</option>
                                                    <option>BAMS / BHMS</option>
                                                    <option>B.Tech / B.E</option>
                                                    <option>BCA / MCA</option>
                                                    <option>MBA / BBA</option>
                                                    <option>BA LLB / LLB</option>
                                                    <option>B.Sc Nursing</option>
                                                    <option>GNM / ANM</option>
                                                    <option>B.Pharma / D.Pharma</option>
                                                    <option>Polytechnic / Diploma</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                                                    <BookOpen size={14} /> College Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="collegeName"
                                                    value={formData.collegeName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="College name (if selected)"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Query Type</label>
                                            <select
                                                name="queryType"
                                                value={formData.queryType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all text-gray-700"
                                            >
                                                <option>Admission + Credit Card</option>
                                                <option>Credit Card Only</option>
                                                <option>Credit Card Renewal</option>
                                                <option>Document Help</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={3}
                                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#003366] focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                                                placeholder="Any specific query or requirement..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-[#003366] to-[#0a4a8a] text-white py-3.5 rounded-lg font-bold text-sm hover:from-[#001a33] hover:to-[#003366] transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                                        >
                                            <Send size={16} /> Submit BSCC Application
                                        </button>
                                        <p className="text-xs text-gray-400 text-center">
                                            Our BSCC expert counselors will contact you within 24 hours with complete guidance.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#003366] sticky top-24">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Enquiry</h3>
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
                                        <option>Select Query Type</option>
                                        <option>Admission + Credit Card</option>
                                        <option>Credit Card Only</option>
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

                            {/* Quick Info Card */}
                            <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-[#003366] text-sm mb-2">MNSSBY Portal</h4>
                                <p className="text-xs text-gray-600 mb-2">Apply directly on the official Bihar Student Credit Card portal:</p>
                                <a
                                    href="https://www.7nishchay-yuvaupmission.bihar.gov.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-[#003366] font-bold underline hover:text-[#22c55e]"
                                >
                                    Visit MNSSBY Portal →
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
