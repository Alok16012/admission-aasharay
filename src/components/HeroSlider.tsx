"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        title: "Admission in Top Colleges",
        subtitle: "Secure your future with the best institutions in India",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        title: "Medical Admissions Made Easy",
        subtitle: "Expert guidance for NEET and MBBS aspirants",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        title: "Engineering Counselling",
        subtitle: "Join the best engineering colleges in India",
    },
];

const stats = [
    { value: "5000+", label: "Students Placed" },
    { value: "500+", label: "Partner Colleges" },
    { value: "20+", label: "Years Experience" },
    { value: "95%", label: "Success Rate" },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-[#003366]">
            {/* Slides */}
            <div className="relative w-full h-[350px] md:h-[580px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Deep blue gradient overlay like growusauto */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/70 to-[#001a33]/50 z-10" />

                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />

                        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-6 md:px-12 max-w-4xl">
                            <p className="text-[#22c55e] font-semibold uppercase tracking-widest text-sm mb-3">ADMISSION AASHARAY</p>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-200 drop-shadow-md mb-8 max-w-2xl mx-auto">
                                {slide.subtitle}
                            </p>
                            {/* Dual CTA buttons like growusauto */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 px-8 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="/about"
                                    className="border-2 border-white text-white hover:bg-white hover:text-[#003366] font-bold py-3 px-8 rounded-md transition-all duration-200"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full transition-all backdrop-blur-sm"
                >
                    <ChevronRight size={28} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentSlide
                                    ? "bg-[#22c55e] w-8 h-3"
                                    : "bg-white/50 w-3 h-3"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Stats bar - like growusauto's metric strip */}
            <div className="bg-white shadow-xl">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`py-5 px-4 text-center ${i < stats.length - 1 ? "border-r border-gray-200" : ""}`}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-[#003366]">{stat.value}</div>
                                <div className="text-xs md:text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
