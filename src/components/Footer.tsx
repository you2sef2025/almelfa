import { Phone, Instagram } from "lucide-react";

const Footer = () => {
  // REPLACE_SOCIAL_LINKS: استبدل بروابط حسابات التواصل الاجتماعي
  const socialLinks = {
    instagram: "https://instagram.com/REPLACE_INSTAGRAM_USERNAME",
    tiktok: "https://tiktok.com/@REPLACE_TIKTOK_USERNAME",
    whatsapp: "https://wa.me/971501234567", // REPLACE_WHATSAPP_NUMBER
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Logo & Description */}
          <div className="text-center md:text-right">
            <div className="mb-4">
              <span className="text-3xl font-bold font-cairo">الملفى</span>
              <span className="block text-sm font-poppins text-secondary tracking-widest mt-1">ALMELFA</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              مخيم إماراتي أصيل يقدم تجربة تخييم فريدة تجمع بين الأصالة والراحة
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 font-cairo">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  ميزات المخيم
                </a>
              </li>
              <li>
                <a href="#media" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  معرض الصور
                </a>
              </li>
              <li>
                <a href="#location" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  الموقع
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 font-cairo">تواصل معنا</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-secondary transition-colors" />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-colors group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/40 transition-colors group"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-[#25D366] group-hover:text-[#128C7E] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            جميع الحقوق محفوظة © {currentYear} مخيم الملفى - الإمارات العربية المتحدة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
