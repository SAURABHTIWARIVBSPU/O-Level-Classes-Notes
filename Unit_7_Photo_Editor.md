# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 7: Photo Editor (फोटो एडिटर) — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 7 Name:** Photo Editor (GIMP / Photoshop Tools & Image Processing)
- **Exam Weightage:** Combined with Unit 8 (Web Publishing & Browsing) = **20 Marks** in written examination.
- **Key Focus Areas:** 
  - Image Fundamentals: Raster (Bitmap) vs Vector Graphics, Resolution, DPI vs PPI.
  - Web Image Formats: JPEG, PNG, GIF, SVG, WebP (Lossy vs Lossless Compression).
  - Concept of Layers (Layer Stacking, Opacity, Blend Modes, Visibility).
  - Photo Editing Tools:
    - **Selection Tools:** Marquee, Lasso (Freehand, Polygonal, Magnetic), Magic Wand.
    - **Paint Tools:** Brush, Pencil, Eraser, Gradient, Paint Bucket, Clone Stamp.
    - **Transform Tools:** Crop, Scale, Rotate, Skew, Distort, Perspective, Flip.
    - **Text Tool:** Horizontal & Vertical Type, Font properties.
  - Image Adjustments: Brightness/Contrast, Levels, Curves, Hue/Saturation, Color Balance.
  - Filters: Blur (Gaussian Blur), Sharpen, Noise, Artistic Effects.
  - Image Optimization for Web Performance.

---

# 1. Image Fundamentals for Web Design (इमेज के मूल सिद्धांत)

### 1.1 Raster (Bitmap) vs. Vector Graphics

```
+-------------------------------------------------------------------------------+
|                       RASTER VS. VECTOR GRAPHICS                              |
+-------------------------------------------------------------------------------+
| Feature              | Raster / Bitmap Graphics      | Vector Graphics        |
+----------------------+-------------------------------+------------------------+
| Basic Building Block | Grid of tiny Pixels (पिक्सेल) | Mathematical Formulas  |
|                      |                               | (Points, Lines, Curves)|
| Scaling (Zoom In)    | पिक्सेल फट जाते हैं (Pixelated)| कभी पिक्सेल नहीं फटते  |
|                      | धुंधला हो जाता है (Blurry)    | (Infinite Scalability) |
| Common Formats       | JPEG, PNG, GIF, BMP, WebP     | SVG, EPS, AI           |
| Best Used For        | प्राकृतिक फोटोग्राफ, जटिल चित्र| लोगो, आइकॉन, रेखाचित्र |
| Common Software      | Photoshop, GIMP, Paint.NET    | Adobe Illustrator,     |
|                      |                               | CorelDRAW, Inkscape    |
+----------------------+-------------------------------+------------------------+
```

### 1.2 Resolution, DPI & PPI
- **Pixel (Picture Element):** डिजिटल इमेज की सबसे छोटी व्यक्तिगत इकाई (Smallest addressable element).
- **PPI (Pixels Per Inch):** डिजिटल स्क्रीनों और मॉनिटरों का डिस्प्ले रेजोल्यूशन (मानक वेब रेजोल्यूशन = **72 PPI** या **96 PPI**).
- **DPI (Dots Per Inch):** प्रिंटर का प्रिंटिंग रेजोल्यूशन (मानक प्रिंट रेजोल्यूशन = **300 DPI**).

---

# 2. Web Image Formats Comparison (वेब इमेज प्रारूप)

```
+-------------------------------------------------------------------------------+
|                         WEB IMAGE FORMATS SUMMARY                             |
+-------------------------------------------------------------------------------+
| Format | Full Name                    | Compression | Transparency | Animation|
+--------+------------------------------+-------------+--------------+----------+
| JPEG   | Joint Photographic Experts   | Lossy       | ❌ No        | ❌ No    |
|        | Group (.jpg, .jpeg)          |             |              |          |
| PNG-8  | Portable Network Graphics    | Lossless    | ✅ 1-bit     | ❌ No    |
| PNG-24 | Portable Network Graphics    | Lossless    | ✅ Alpha 24b | ❌ No    |
| GIF    | Graphics Interchange Format  | Lossless    | ✅ 1-bit     | ✅ Yes   |
| SVG    | Scalable Vector Graphics     | Lossless    | ✅ Yes       | ✅ Yes   |
| WebP   | Web Picture (by Google)      | Both        | ✅ Yes       | ✅ Yes   |
+--------+------------------------------+-------------+--------------+----------+
```

### 2.1 Key Insights on Formats:
1. **JPEG / JPG:** जटिल रंगों वाली तस्वीरों (Photos) के लिए सर्वोत्तम। यह **Lossy Compression** का उपयोग करता है (फाइल साइज बहुत छोटा हो जाता है, लेकिन कुछ इमेज डेटा हमेशा के लिए हट जाता है).
2. **PNG (Portable Network Graphics):** **Lossless Compression** का उपयोग करता है। यह पारदर्शी बैकग्राउंड (Transparent Backgrounds) और शार्प लोगो के लिए सबसे उपयुक्त है।
3. **GIF (Graphics Interchange Format):** अधिकतम **256 रंग (8-bit color)** सपोर्ट करता है। सरल एनिमेशन के लिए प्रसिद्ध है।
4. **SVG (Scalable Vector Graphics):** XML आधारित वेक्टर फॉर्मेट; मोबाइल से लेकर 4K मॉनिटर तक बिना क्वालिटी खोए बिल्कुल शार्प रहता है।
5. **WebP:** गूगल द्वारा विकसित आधुनिक फॉर्मेट जो JPEG और PNG दोनों से 30% छोटा साइज देता है।

---

# 3. The Concept of Layers (लेयर्स की अवधारणा)

### 3.1 What are Layers?
- **English:** Layers in photo editing are like a stack of transparent plastic sheets (acetates) placed on top of one another. You can draw or edit on one layer without affecting the content on other layers.
- **हिन्दी सरल शब्दों में:** लेयर्स पारदर्शी प्लास्टिक शीटों (कांच की परतों) के एक बंडल की तरह होती हैं जो एक के ऊपर एक रखी होती हैं। आप किसी एक परत (Layer) पर चित्र बना सकते हैं या बदलाव कर सकते हैं, जिससे नीचे या ऊपर रखी दूसरी परतों पर कोई असर नहीं पड़ता।

```
+-------------------------------------------------------------------------------+
|                             LAYER STACKING ORDER                              |
+-------------------------------------------------------------------------------+
| [Top Layer 3]    : Text Layer ("NIELIT O Level 2026")  [T]                    |
|       ▲                                                                       |
| [Middle Layer 2] : Graphic / Logo Cutout (Transparent BG)                     |
|       ▲                                                                       |
| [Bottom Layer 1] : Background Layer (Locked, Solid Color or Landscape Image)  |
+-------------------------------------------------------------------------------+
```

### 3.2 Layer Operations & Properties:
1. **Visibility (Eye Icon 👁️):** किसी लेयर को अस्थायी रूप से छिपाने या दिखाने के लिए।
2. **Opacity (पारदर्शिता):** 0% (पूरी तरह पारदर्शी/गायब) से लेकर 100% (पूरी तरह ठोस/दिखने योग्य) तक सेट करना।
3. **Locking (ताला लगाना 🔒):** लेयर में गलती से होने वाले बदलावों को रोकने के लिए।
4. **Blending Modes:** नीचे वाली लेयर के पिक्सल्स के साथ रंग मिलाने के तरीके (जैसे *Multiply, Screen, Overlay, Soft Light*).
5. **Flatten Image (इमेज को फ्लैट करना):** सभी अलग-अलग लेयर्स को मिलाकर एक इकलौती फ्लैट बैकग्राउंड लेयर में बदलना (फाइनल JPEG एक्सपोर्ट के लिए).

---

# 4. Photo Editing Tools Master Reference (फोटो एडिटिंग टूल्स)

### 4.1 Selection Tools (चयन टूल्स)
फोटो के किसी विशेष हिस्से को चुनने के लिए उपयोग किए जाने वाले टूल्स:

| Tool Name | How it Works (कार्यप्रणाली) |
|:---|:---|
| **Rectangular Marquee** | आयताकार (चौकोर) क्षेत्र को सेलेक्ट करना। |
| **Elliptical Marquee** | अंडाकार या गोल (वृत्ताकार) क्षेत्र को सेलेक्ट करना। |
| **Lasso Tool** | माउस से फ्री-हैंड (अपनी मर्जी से) कोई भी अनियमित आकार सेलेक्ट करना। |
| **Polygonal Lasso Tool** | सीधी रेखाओं वाले बहुभुज (Polygon) आकार में क्लिक-क्लिक करके सेलेक्ट करना। |
| **Magnetic Lasso Tool** | इमेज के किनारों (High contrast edges) पर चुंबक की तरह चिपक कर अपने आप सेलेक्ट करना। |
| **Magic Wand Tool** | एक क्लिक में एक जैसे रंग वाले पिक्सेल्स (Color tolerance के आधार पर) को चुनना। |
| **Quick Selection Tool**| ब्रश की तरह पेंट करके इमेज के किसी ऑब्जेक्ट को तेजी से ऑटो-सेलेक्ट करना। |

---

### 4.2 Paint, Draw and Retouch Tools (पेंट और री-टच टूल्स)

| Tool Name | Function & Purpose (कार्य एवं उद्देश्य) |
|:---|:---|
| **Brush Tool (`B`)** | नरम किनारों (Soft edges) वाले स्ट्रोक्स से पेंट करना। |
| **Pencil Tool** | कठोर किनारों (Hard edges) वाले पिक्सेल स्ट्रोक्स बनाना। |
| **Eraser Tool (`E`)** | पिक्सेल्स को मिटाकर बैकग्राउंड या ट्रांसपेरेंट बनाना। |
| **Paint Bucket Tool (`G`)**| एक क्लिक में पूरे चयनित क्षेत्र में एक समान ठोस रंग (Solid Color) भरना। |
| **Gradient Tool (`G`)** | दो या दो से अधिक रंगों का क्रमिक संक्रमण (Smooth blending transition) बनाना (Linear, Radial, Angle, Reflected, Diamond). |
| **Clone Stamp Tool (`S`)**| इमेज के एक हिस्से का सैंपल (Alt+Click) लेकर दूसरे हिस्से पर हूबहू डुप्लीकेट पेंट करना (दाग-धब्बे हटाने हेतु). |
| **Healing Brush Tool** | क्लोन किए गए पिक्सेल्स को आसपास के रंग और बनावट (Texture) के साथ स्वतः मिला देना। |

---

### 4.3 Transform Tools (रूपांतरण टूल्स)

- **Crop Tool (`C`):** इमेज के अवांछित बाहरी किनारों को काटकर अलग करना।
- **Free Transform (`Ctrl + T`):** किसी लेयर या ऑब्जेक्ट को ट्रांसफॉर्म करने का मास्टर मोड:
  1. **Scale:** आकार को छोटा या बड़ा करना (Shift दबाकर आनुपातिक / Aspect ratio बनाए रखना).
  2. **Rotate:** किसी निश्चित कोण (Degrees) पर घुमाना।
  3. **Skew:** क्षैतिज या लंबवत तिरछा झुकाना।
  4. **Distort:** कोनों को स्वतंत्र रूप से खींचना।
  5. **Perspective:** 3D जैसी दूरी और गहराई का प्रभाव देना।
  6. **Flip:** क्षैतिज दर्पण (Flip Horizontal) या ऊर्ध्वाधर (Flip Vertical) पलटना।

---

### 4.4 Text Tool / Type Tool (`T`)
- वेक्टर आधारित टेक्स्ट लेयर बनाता है।
- **विकल्प:** Font Name, Font Style (Regular, Bold, Italic), Size (pt), Anti-aliasing (Smooth, Crisp), Text Alignment (Left, Center, Right), और Text Color.

---

# 5. Image Color & Tone Adjustments (रंग एवं टोन समायोजन)

```
+-------------------------------------------------------------------------------+
|                      IMAGE ADJUSTMENTS COMPARISON                             |
+-------------------------------------------------------------------------------+
| Adjustment Name     | Primary Function / Working                              |
+---------------------+---------------------------------------------------------+
| Brightness/Contrast | इमेज के कुल उजाले (Brightness) और हल्के-गहरे शेड्स के    |
|                     | बीच के अंतर (Contrast) को बढ़ाना/घटाना।                 |
+---------------------+---------------------------------------------------------+
| Hue / Saturation    | Hue = मूल रंग (Color identity),                         |
|                     | Saturation = रंग की शुद्धता/गहराई (Purity of color),    |
|                     | Lightness = उजाले की मात्रा।                            |
+---------------------+---------------------------------------------------------+
| Levels & Curves     | शैडोज़ (Shadows), मिड-टोन्स (Midtones), और हाइलाइट्स   |
|                     | (Highlights) का सटीक हिस्टोग्राम-आधारित समायोजन।        |
+---------------------+---------------------------------------------------------+
| Desaturate          | सभी रंगों को हटाकर इमेज को तुरंत ब्लैक-एंड-व्हाइट बनाना।|
+---------------------+---------------------------------------------------------+
```

---

# 6. Filters and Web Optimization (फिल्टर्स और वेब अनुकूलन)

### 6.1 Filters (फिल्टर्स):
- **Blur Filters:** इमेज को धुंधला करना (उदा. **Gaussian Blur** बैकग्राउंड को ब्लर करके मुख्य ऑब्जेक्ट को उभारने के लिए सबसे लोकप्रिय है).
- **Sharpen Filters:** किनारों के कंट्रास्ट को बढ़ाकर इमेज को और तीखा व स्पष्ट बनाना।
- **Noise Filters:** ग्रेन जोड़ना या फोटो से डिजिटल शोर (Noise) हटाना।

### 6.2 Optimizing Images for Web Performance:
1. **सही फॉर्मेट चुनें:** फोटो के लिए **JPEG/WebP**, पारदर्शी ग्राफिक्स/लोगो के लिए **PNG/SVG**।
2. **रेजोल्यूशन सीमित रखें:** वेब डिस्प्ले के लिए **72 PPI** पर्याप्त है (300 DPI से फाइल बेवजह भारी होती है).
3. **डाइमेंशन कंप्रेस करें:** 4000x3000 पिक्सेल की मूल कैमरा फोटो को वेबपेज की आवश्यकता अनुसार 800x600 पिक्सेल में रिसाइज करें।

---

# 🔥 NIELIT Exam Quick Revision Points (गोल्डन प्वाइंट्स)

1. वेक्टर ग्राफिक्स (Vector Graphics) को कितना भी ज़ूम करने पर पिक्सेल कभी नहीं फटते।
2. **SVG** का पूर्ण रूप **Scalable Vector Graphics** है और यह **XML** पर आधारित होता है।
3. **JPEG** का पूर्ण रूप **Joint Photographic Experts Group** है और यह **Lossy Compression** करता है।
4. **GIF** अधिकतम **256 कलर्स** को सपोर्ट करता है।
5. एक जैसे रंग वाले पिक्सेल्स को एक क्लिक में सेलेक्ट करने के लिए **Magic Wand Tool** का उपयोग किया जाता है।
6. फ्री ट्रांसफॉर्म (Free Transform) का मानक कीबोर्ड शॉर्टकट **`Ctrl + T`** होता है।
7. **Gaussian Blur** सबसे प्रसिद्ध ब्लर फ़िल्टर है।
8. ट्रांसपेरेंट बैकग्राउंड सेव करने के लिए **PNG** या **GIF** या **WebP** फॉर्मेट का उपयोग किया जाता है (JPEG ट्रांसपेरेंसी सपोर्ट नहीं करता)।
