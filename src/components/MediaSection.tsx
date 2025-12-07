const MediaSection = () => {
  // REPLACE_VIDEO_URLS: استبدل الروابط بروابط فيديوهات TikTok أو Instagram الخاصة بالمخيم
  // للحصول على كود التضمين من TikTok: انقر على مشاركة > Embed > انسخ الكود
  // للحصول على كود التضمين من Instagram: انقر على ... > Embed > Copy Embed Code
  
  const mediaItems = [
    {
      type: "placeholder",
      title: "جولة في المخيم",
      embedCode: "REPLACE_TIKTOK_EMBED_1",
    },
    {
      type: "placeholder",
      title: "أجواء المساء",
      embedCode: "REPLACE_TIKTOK_EMBED_2",
    },
    {
      type: "placeholder",
      title: "الجلسات العربية",
      embedCode: "REPLACE_INSTAGRAM_EMBED",
    },
    {
      type: "placeholder",
      title: "لحظات مميزة",
      embedCode: "REPLACE_TIKTOK_EMBED_3",
    },
  ];

  return (
    <section id="media" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-foreground rounded-full text-sm font-semibold mb-4">
            معرض الصور والفيديو
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-cairo">
            شاهد أجواء الملفى
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف لحظاتنا المميزة وأجواء المخيم الساحرة
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[9/16] bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 group"
            >
              {/* Placeholder content - replace with actual embeds */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-foreground font-semibold mb-2">{item.title}</p>
                <p className="text-muted-foreground text-sm">
                  {/* تعليمات للمطور */}
                  استبدل هذا بكود التضمين
                </p>
                <code className="text-xs text-accent/70 mt-2 block">
                  {item.embedCode}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions Comment */}
        {/* 
          لإضافة فيديو TikTok:
          <blockquote class="tiktok-embed" cite="VIDEO_URL" data-video-id="VIDEO_ID">
            <script async src="https://www.tiktok.com/embed.js"></script>
          </blockquote>
          
          لإضافة فيديو Instagram:
          <blockquote class="instagram-media" data-instgrm-permalink="VIDEO_URL">
            <script async src="//www.instagram.com/embed.js"></script>
          </blockquote>
        */}
      </div>
    </section>
  );
};

export default MediaSection;
