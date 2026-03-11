export default function VideoGallery() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
                    Video <span className="text-[#22c55e]">Gallery</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Embedded Videos */}
                    <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-lg h-[150px] md:h-[300px]">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-lg h-[150px] md:h-[300px]">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
