export default function MapSection() {
    return (
        <section className="bg-gray-200">
            <div className="w-full h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.804344015694!2d85.1228229!3d25.6114251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f700000001%3A0x6b4fb6c1f100bbcf!2sPHO%20GROUP%20OF%20ADMISSION%20COUNSELLING!5e0!3m2!1sen!2sin!4v1709491000000!5m2!1sen!2sin"
                    title="ADMISSION AASHARAY Location"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}
