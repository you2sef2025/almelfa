import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
    alt: "خيمة المخيم الرئيسية",
    category: "الخيام"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80",
    alt: "نار المخيم الليلية",
    category: "الأجواء"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    alt: "الجلسات العربية",
    category: "الجلسات"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "المناظر الصحراوية",
    category: "الطبيعة"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&q=80",
    alt: "غروب الشمس",
    category: "الأجواء"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    alt: "الضيافة الإماراتية",
    category: "الخدمات"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            معرض الصور
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-cairo">
            لحظات من الملفى
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف أجواء المخيم من خلال صورنا المميزة
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-elevated"
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-primary-foreground font-semibold text-lg font-cairo">
                    {image.alt}
                  </p>
                </div>
              </div>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors bg-foreground/50 rounded-full"
            aria-label="السابق"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors bg-foreground/50 rounded-full"
            aria-label="التالي"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[85vh]">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-primary-foreground mt-4 font-cairo text-lg">
              {galleryImages[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
