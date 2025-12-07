import { Flame, Car, Utensils, Sofa, TreePine, Users } from "lucide-react";

const features = [
  {
    icon: Sofa,
    title: "جلسات عربية إماراتية",
    description: "جلسات أرضية مريحة بتصميم تراثي أصيل مع وسائد فاخرة",
  },
  {
    icon: TreePine,
    title: "ملاعب ومساحات خضراء",
    description: "مساحات واسعة للعائلات والأطفال للاستمتاع بالأجواء",
  },
  {
    icon: Flame,
    title: "مدفئة ونار تخييم",
    description: "أجواء دافئة حول نار المخيم في الليالي الشتوية",
  },
  {
    icon: Utensils,
    title: "منطقة شواء مجهزة",
    description: "منطقة شواء كاملة التجهيز لتجربة طهي مميزة",
  },
  {
    icon: Users,
    title: "مرافق متكاملة",
    description: "دورات مياه نظيفة ومرافق صحية بمعايير عالية",
  },
  {
    icon: Car,
    title: "مواقف سيارات",
    description: "مواقف سيارات واسعة ومؤمنة لراحتكم",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 heritage-pattern opacity-50" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-semibold mb-4">
            ما نقدمه
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-cairo">
            ميزات المخيم
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نوفر لكم كل ما تحتاجونه لتجربة تخييم لا تُنسى في أجواء إماراتية أصيلة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-background/80 backdrop-blur-sm rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-accent/30 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-cairo">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
