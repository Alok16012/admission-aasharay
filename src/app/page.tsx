import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import FeatureCards from "@/components/FeatureCards";
import Achievement from "@/components/Achievement";
import CollegeList from "@/components/CollegeList";
import Testimonials from "@/components/Testimonials";

import MapSection from "@/components/MapSection";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col font-sans">
            <Header />

            <div className="flex-grow">
                <HeroSlider />
                <Marquee />
                <FeatureCards />
                <Achievement />
                <CollegeList />
                <Testimonials />

                <MapSection />
            </div>

            <Footer />
        </main>
    );
}
