import { Phone, MapPin, Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // REPLACE_WHATSAPP_NUMBER: أدخل رقم الواتساب مع رمز البلد (مثال: 971501234567)
  const whatsappNumber = "971501234567";
  // REPLACE_GOOGLE_MAPS_URL: أدخل رابط موقع المخيم من Google Maps
  const googleMapsUrl = "https://maps.google.com/?q=25.0657,55.1713";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* REPLACE_LOGO: يمكن استبدال النص بصورة شعار */}
            <div className="flex flex-col items-center">
              <span className={`text-2xl md:text-3xl font-bold font-cairo transition-colors ${
                isScrolled || !isHomePage ? "text-primary" : "text-primary-foreground"
              }`}>الملفى</span>
              <span className={`text-xs md:text-sm font-poppins tracking-widest transition-colors ${
                isScrolled || !isHomePage ? "text-muted-foreground" : "text-secondary"
              }`}>ALMELFA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={isScrolled || !isHomePage ? "outline" : "hero-outline"} size="default" className="gap-2">
                <MapPin className="w-4 h-4" />
                الموقع
              </Button>
            </a>
            <Link to="/booking">
              <Button variant={isScrolled || !isHomePage ? "gold" : "hero"} size="default" className="gap-2">
                <Calendar className="w-4 h-4" />
                احجز الآن
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full gap-2">
                  <MapPin className="w-4 h-4" />
                  الموقع على الخريطة
                </Button>
              </a>
              <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button variant="gold" size="lg" className="w-full gap-2">
                  <Calendar className="w-4 h-4" />
                  احجز الآن
                </Button>
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أريد الحجز في مخيم الملفى")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  تواصل عبر واتساب
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
