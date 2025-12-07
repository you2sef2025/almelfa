import { useEffect, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = "",
  backgroundImage,
  overlay = true
}: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offsetY * speed}px)`,
            willChange: "transform"
          }}
        >
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
          )}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
