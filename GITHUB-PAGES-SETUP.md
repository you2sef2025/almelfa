# دليل إعداد GitHub Pages

## ✅ قائمة التحقق قبل الرفع

### الملفات المطلوبة (يجب رفعها):

- [x] `index.html` - الصفحة الرئيسية
- [x] `booking.html` - صفحة الحجز  
- [x] `styles.css` - ملف الأنماط
- [x] `script.js` - ملف JavaScript
- [x] `404.html` - صفحة الخطأ (اختياري)
- [x] `README.md` - ملف التوثيق
- [ ] `src/assets/hero-bg.jpg` - صورة الخلفية (إذا كانت موجودة)

### الملفات التي لا تحتاجها (يمكن تجاهلها):

- ❌ `package.json` و `package-lock.json`
- ❌ `node_modules/`
- ❌ `vite.config.ts`
- ❌ `tailwind.config.ts`
- ❌ `tsconfig.json`
- ❌ مجلد `src/` (باستثناء `src/assets/` للصور)
- ❌ جميع ملفات `.tsx` و `.ts`

## 📋 خطوات الرفع

### 1. إنشاء مستودع جديد

```bash
# في مجلد المشروع
git init
git add index.html booking.html styles.css script.js 404.html README.md
git add src/assets/hero-bg.jpg  # إذا كانت موجودة
git commit -m "Initial commit - HTML version for GitHub Pages"
```

### 2. ربط المستودع المحلي بـ GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/almelfa.git
git branch -M main
git push -u origin main
```

### 3. تفعيل GitHub Pages

1. اذهب إلى: `https://github.com/YOUR_USERNAME/almelfa/settings/pages`
2. تحت "Source" اختر: `Deploy from a branch`
3. Branch: `main`
4. Folder: `/ (root)`
5. اضغط `Save`

### 4. انتظر النشر

- سيظهر الرابط بعد بضع دقائق: `https://YOUR_USERNAME.github.io/almelfa`
- قد يستغرق النشر من 1-10 دقائق

## 🔧 إعدادات إضافية

### تخصيص النطاق (اختياري)

1. في إعدادات Pages، أضف نطاقك المخصص
2. أضف ملف `CNAME` في الجذر:
   ```
   yourdomain.com
   ```

### تحسين SEO

الملفات جاهزة مع:
- ✅ Meta tags كاملة
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ JSON-LD structured data

## ⚠️ ملاحظات مهمة

1. **مسار الصور**: تأكد من أن `src/assets/hero-bg.jpg` موجود أو غيّر المسار في `index.html`

2. **الروابط النسبية**: جميع الروابط نسبية وتعمل على GitHub Pages

3. **رقم الواتساب**: تم توحيده إلى `971508911089` في جميع الملفات

4. **إحداثيات الموقع**: `25.0657,55.1713` - غيّرها إذا لزم الأمر

## 🐛 حل المشاكل

### الصفحة لا تظهر
- تأكد من أن الملفات في الفرع `main`
- تحقق من أن GitHub Pages مفعّل
- انتظر بضع دقائق

### الصور لا تظهر
- تأكد من أن مسار الصورة صحيح
- استخدم روابط نسبية: `src/assets/hero-bg.jpg`
- أو استخدم روابط خارجية (CDN)

### الروابط لا تعمل
- تأكد من استخدام روابط نسبية: `index.html` وليس `/`
- على GitHub Pages، استخدم `index.html` بدلاً من `/`

## 📞 الدعم

إذا واجهت أي مشاكل، تحقق من:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-github-pages)

---

**جاهز للرفع! 🚀**
