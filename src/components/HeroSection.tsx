import { Button } from "@/components/ui/button";
import { Phone, Play, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  
  // REPLACE_WHATSAPP_NUMBER: رقم الواتساب
  const whatsappNumber = "971501234567";
  // REPLACE_VIDEO_URL: رابط فيديو المخيم
  const videoUrl = "https://www.youtube.com/watch?v=REPLACE_VIDEO_ID";

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${offsetY * 0.4}px) scale(1.1)`,
          willChange: "transform"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Animated Stars Overlay */}
      <div className="absolute inset-0 stars opacity-40" />

      {/* Heritage Pattern Overlay */}
      <div className="absolute inset-0 heritage-pattern opacity-30" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary/40 rounded-full animate-float blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent/30 rounded-full animate-float-delayed blur-sm" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary/50 rounded-full animate-float blur-sm" />
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-accent/40 rounded-full animate-float-delayed blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full animate-pulse-glow" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-secondary text-sm font-semibold">رأس الخيمة - الإمارات</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 text-shadow-hero font-cairo">
            الملفى
          </h1>
          <p className="text-xl md:text-2xl font-poppins text-secondary tracking-[0.3em] mb-8">
            ALMELFA
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            مخيم إماراتي أصيل يجمع بين عراقة الماضي وراحة الحاضر
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            استمتع بأجواء الضيافة الخليجية الأصيلة في قلب الطبيعة الصحراوية برأس الخيمة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking">
              <Button variant="hero" size="xl" className="gap-3 min-w-[200px] animate-pulse-glow">
                <Calendar className="w-5 h-5" />
                احجز الآن
              </Button>
            </Link>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero-outline" size="xl" className="gap-3 min-w-[200px]">
                <Play className="w-5 h-5" />
                شاهد الفيديو
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
