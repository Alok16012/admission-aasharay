"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Akash Kumar",
        review: "PHO Group is the best consultancy for career guidance. All counsellors are very supportive and knowledgeable. I thank this consultancy because I got admission in my favourite college.",
        location: "Patna",
        initials: "AK",
    },
    {
        name: "Zaid Khan",
        review: "PHO Group is a place where students can get accurate information without being distracted. Their qualified staff is one of the main reasons for their success.",
        location: "Bihar",
        initials: "ZK",
    },
    {
        name: "Amit Kumar",
        review: "One of the best consultancy in Patna! The reason I am giving 5 stars is because I got selected in a college where it's tough to go. Thanks a lot sir.",
        location: "Jharkhand",
        initials: "AK",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="py-20 bg-[#003366]">
            <div className="container mx-auto px-4 text-center">
                <p className="text-[#22c55e] font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Students Say</h2>
                <div className="w-12 h-1 bg-[#22c55e] mx-auto mb-12 rounded-full"></div>

                {/* Cards row */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 text-left ${index === currentIndex
                                    ? "bg-white/15 border border-white/30 shadow-xl scale-105"
                                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                                }`}
                        >
                            {/* Green quote icon like growusauto */}
                            <Quote className="text-[#22c55e] mb-3" size={30} />

                            <p className="text-gray-200 text-sm leading-relaxed mb-6 italic">
                                &ldquo;{t.review}&rdquo;
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="bg-[#22c55e] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                    <p className="text-gray-400 text-xs">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? "bg-[#22c55e] w-8 h-3"
                                    : "bg-white/30 w-3 h-3"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
