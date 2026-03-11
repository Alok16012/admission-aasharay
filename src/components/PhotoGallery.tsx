import Image from "next/image";

export default function PhotoGallery() {
    const images = [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1592280771800-bcf291d0337e?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop",
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">
                    Photo <span className="text-[#22c55e]">Gallery</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative h-48 overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 group">
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
