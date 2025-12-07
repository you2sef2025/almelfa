import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const MapSection = () => {
  // REPLACE_COORDINATES: استبدل بإحداثيات الموقع الفعلي
  const latitude = "25.0657";
  const longitude = "55.1713";
  
  // REPLACE_GOOGLE_MAPS_EMBED: استبدل بكود التضمين من Google Maps
  // للحصول على كود التضمين: افتح Google Maps > ابحث عن الموقع > مشاركة > تضمين خريطة > انسخ HTML
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.123456789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzU2LjUiTiA1NcKwMTAnMTYuNyJF!5e0!3m2!1sar!2sae!4v1234567890123`;
  
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <section id="location" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 inline-block ml-1" />
            موقعنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-cairo">
            كيف تصل إلينا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            يقع مخيم الملفى في موقع استراتيجي يسهل الوصول إليه
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border">
            {/* Map iframe */}
            <div className="aspect-video w-full bg-muted">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مخيم الملفى"
                className="w-full h-full min-h-[400px]"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-8">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="xl" className="gap-3">
                <Navigation className="w-5 h-5" />
                افتح في خرائط جوجل
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
