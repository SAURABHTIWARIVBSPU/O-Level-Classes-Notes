// Unit 7: Photo Editor - Complete Topic Notes

export const unit7Topics = [
  {
    id: "u7-t1",
    slug: "features-of-photo-editing",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Features of Photo Editing & Image Fundamentals",
    hindiTitle: "फोटो एडिटिंग की विशेषताएं एवं डिजिटल इमेज के मूल सिद्धांत",
    definitionEnglish: "Photo editing in web design encompasses manipulating, enhancing, resizing, cropping, and optimizing digital graphics, distinguishing fundamentally between pixel-based Raster (Bitmap) graphics and mathematically defined Vector graphics, with resolution measured in PPI (web standard: 72-96 PPI).",
    definitionHindi: "वेब डिजाइन में फोटो एडिटिंग का तात्पर्य डिजिटल ग्राफिक्स को संशोधित करने, बेहतर बनाने, रीसाइज़ करने, क्रॉप करने और ऑप्टिमाइज़ करने से है; यह मुख्य रूप से पिक्सेल-आधारित रास्टर (Bitmap) ग्राफिक्स और गणितीय सूत्रों पर आधारित वेक्टर ग्राफिक्स के बीच अंतर करता है, जिसका वेब मानक रेजोल्यूशन 72-96 PPI होता है।",
    simpleWords: "वेबसाइट के लिए फोटो का आकार छोटा करना, उसकी चमक बढ़ाना और सही फॉर्मेट (जैसे पारदर्शी लोगो के लिए PNG और फोटो के लिए JPEG) चुनना फोटो एडिटिंग कहलाता है।",
    whyImportant: "भारी और अनऑप्टिमाइज्ड इमेजेस वेबसाइट की लोडिंग स्पीड को 10 गुना धीमा कर देती हैं। सही इमेज प्रोसेसिंग वेब परफॉर्मेंस का मूल आधार है।",
    detailedExplanation: `### 1. Raster (Bitmap) बनाम Vector Graphics:
- **Raster Graphics (रास्टर ग्राफिक्स):**
  - यह छोटे-छोटे चौकोर रंगीन बिंदुओं (**Pixels**) के ग्रिड से बनती हैं।
  - जब आप ज़ूम इन करते हैं, तो पिक्सेल फट जाते हैं और चित्र धुंधला (Pixelated) हो जाता है।
  - **प्रारूप:** JPEG, PNG, GIF, WebP, BMP.
  - **उपयुक्त:** प्राकृतिक फोटोग्राफ और जटिल चित्र।
  - **सॉफ्टवेयर:** Adobe Photoshop, GIMP.
- **Vector Graphics (वेक्टर ग्राफिक्स):**
  - यह गणितीय सूत्रों (बिंदु, रेखाएं, वक्र) से बनती हैं।
  - इन्हें कितना भी बड़ा (Zoom) किया जाए, इनके पिक्सेल कभी नहीं फटते (Infinite Scalability)।
  - **प्रारूप:** **SVG (Scalable Vector Graphics)**, AI, EPS.
  - **उपयुक्त:** कंपनी के लोगो, आइकॉन्स, और टाइपोग्राफी।
  - **सॉफ्टवेयर:** Adobe Illustrator, CorelDRAW, Inkscape.

### 2. Resolution: DPI बनाम PPI:
- **Pixel (Picture Element):** डिजिटल चित्र की सबसे छोटी इकाई।
- **PPI (Pixels Per Inch):** डिजिटल मॉनिटरों और स्क्रीनों का रेजोल्यूशन (मानक वेब रेजोल्यूशन = **72 PPI से 96 PPI**)।
- **DPI (Dots Per Inch):** प्रिंटर का प्रिंटिंग रेजोल्यूशन (मानक प्रिंट रेजोल्यूशन = **300 DPI**)।

### 3. प्रमुख वेब इमेज फॉर्मेट्स:
- **JPEG:** प्राकृतिक तस्वीरों हेतु (Lossy संपीड़न, कोई ट्रांसपेरेंसी नहीं)।
- **PNG-24:** पारदर्शी बैकग्राउंड (Alpha Transparency) हेतु (Lossless संपीड़न)।
- **GIF:** 256 रंग, सरल फ्रेम एनिमेशन हेतु।
- **WebP:** Google का आधुनिक फॉर्मेट जो JPEG और PNG दोनों से 30% छोटा होता है।`,
    syntax: `Web Resolution Standards:
Web Displays: 72 to 96 PPI
Print Media : 300 DPI
Standard Web Formats: WebP, PNG, JPEG, SVG`,
    codeExample: `<!-- Responsive Optimized Web Graphic Demonstration -->
<picture>
  <source srcset="banner.webp" type="image/webp">
  <img src="banner.jpg" alt="Optimized Web Banner at 72 PPI" width="600" height="250" loading="lazy">
</picture>`,
    outputExplanation: "ब्राउज़र आधुनिक WebP फॉर्मेट को प्राथमिकता देगा और यदि समर्थित न हो तो फॉलबैक JPEG लोड करेगा, जिससे पेज तेज लोड होगा।",
    realWorldAnalogy: "रास्टर इमेज मोज़ेक टाइलों की बनी दीवार जैसी है (पास जाने पर टाइलें अलग-अलग दिखती हैं); वेक्टर इमेज कम्पास और स्केल से खींचे गए रेखाचित्र जैसी है (कितना भी बड़ा खींचो, रेखा हमेशा साफ रहेगी)।",
    importantPoints: [
      "वेब इमेजेस का मानक रेजोल्यूशन 72 PPI से 96 PPI होता है।",
      "प्रिंटिंग का मानक रेजोल्यूशन 300 DPI होता है।",
      "रास्टर ग्राफिक्स पिक्सल्स से और वेक्टर ग्राफिक्स गणितीय सूत्रों से बनती हैं।",
      "पारदर्शी बैकग्राउंड के लिए PNG और एनीमेशन के लिए GIF का उपयोग होता है।"
    ],
    commonMistakes: [
      "वेबसाइट पर 300 DPI की भारी प्रिंट फाइल अपलोड कर देना (जिससे वेबपेज लोड होने में बहुत समय लेता है; वेब के लिए हमेशा 72 PPI रखें)।"
    ],
    examPerspective: "Raster बनाम Vector, PPI बनाम DPI, और JPEG/PNG/GIF/SVG की विशेषताओं पर प्रश्न हर साल आते हैं।",
    quickRevision: "रास्टर = पिक्सेल ग्रिड (JPEG, PNG); वेक्टर = अनंत स्केलेबिलिटी (SVG); वेब रेजोल्यूशन = 72 PPI; प्रिंट = 300 DPI.",
    relatedTopics: ["selection-tools", "paint-tools", "transform-tools"],
    practiceTask: "एक लोगो को SVG फॉर्मेट में और एक फोटो को JPEG फॉर्मेट में सेव करके दोनों के फाइल साइज की तुलना करें।"
  },
  {
    id: "u7-t2",
    slug: "selection-tools",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Selection Tools (Marquee, Lasso, Magic Wand)",
    hindiTitle: "सिलेक्शन टूल्स (Marquee, Lasso, Magic Wand)",
    definitionEnglish: "Selection tools in photo editing isolate specific areas of an image for targeted editing, filtering, or cutting, comprising geometric Marquee tools (Rectangular, Elliptical), freeform Lasso tools (Freehand, Polygonal, Magnetic), and color-range based Magic Wand / Quick Selection tools.",
    definitionHindi: "फोटो एडिटिंग में सिलेक्शन टूल्स इमेज के किसी खास हिस्से को अलग (Isolate) करते हैं ताकि केवल उसी हिस्से पर एडिटिंग, रंगाई या कटिंग की जा सके; इनमें ज्यामितीय Marquee टूल्स, फ्रीहैंड Lasso टूल्स और रंग-आधारित Magic Wand टूल्स शामिल हैं।",
    simpleWords: "जैसे दर्जी कपड़े का एक खास हिस्सा कैंची से काटने के लिए पहले उस पर चॉक से निशान लगाता है, वैसे ही सिलेक्शन टूल्स फोटो के किसी हिस्से को चुनकर बाकी फोटो को सुरक्षित रखते हैं।",
    whyImportant: "बिना सिलेक्शन के आप फोटो में से किसी व्यक्ति को बैकग्राउंड से अलग नहीं कर सकते और न ही केवल चेहरे का रंग सुधार सकते हैं।",
    detailedExplanation: `### आधिकारिक पाठ्यक्रम के 3 मुख्य सिलेक्शन टूल्स:
1. **Marquee Tools (ज्यामितीय चयन):**
   - **Rectangular Marquee:** चौकोर या आयताकार क्षेत्र चुनने हेतु।
   - **Elliptical Marquee:** गोल (अंडाकार या पूर्ण वृत्ताकार) क्षेत्र चुनने हेतु (Shift दबाने पर पूर्ण वृत्त बनता है)।
   - **Single Row / Column Marquee:** केवल 1 पिक्सेल चौड़ी पंक्ति या स्तंभ चुनने हेतु।

2. **Lasso Tools (स्वतंत्र हाथ से चयन):**
   - **Lasso Tool (Standard):** माउस को पेंसिल की तरह चलाकर मनचाहा टेढ़ा-मेढ़ा आकार चुनना।
   - **Polygonal Lasso Tool:** सीधी रेखाओं वाले बहुभुज (जैसे त्रिकोण या इमारत) को क्लिक-क्लिक करके चुनना।
   - **Magnetic Lasso Tool:** इमेज के किनारों (High Contrast Edges) पर चुंबक की तरह स्वतः चिपकते हुए चलना।

3. **Magic Wand Tool (रंग-आधारित जादुई चयन):**
   - एक जैसे रंग वाले पूरे क्षेत्र को **सिर्फ एक क्लिक** में चुनना (उदा. पूरा सफेद बैकग्राउंड या नीला आसमान)।
   - **Tolerance (सहिष्णुता):** यह तय करता है कि क्लिक किए गए रंग से कितने मिलते-जुलते शेड्स चुने जाएंगे (डिफ़ॉल्ट मान आमतौर पर 32 होता है)।
   - **Contiguous:** यदि टिक हो तो केवल आपस में जुड़े पिक्सेल चुने जाते हैं; अनटिक करने पर पूरी इमेज में बिखरे उस रंग के सभी पिक्सेल चुने जाते हैं।

### जरूरी शॉर्टकट्स:
- **\`Ctrl + D\`:** सक्रिय सिलेक्शन को हटाना (Deselect)।
- **\`Shift + Drag\`:** मौजूदा सिलेक्शन में नया क्षेत्र जोड़ना (Add to Selection)।
- **\`Alt + Drag\`:** मौजूदा सिलेक्शन में से हिस्सा घटाना (Subtract from Selection)।`,
    syntax: `Selection Shortcuts:
Ctrl + D         : Deselect (हटाना)
Ctrl + Shift + I : Invert Selection (उलटना)
Shift + Selection: Add to Selection (+)
Alt + Selection  : Subtract from Selection (-)`,
    codeExample: `<!-- Visual Representation of Selection Tool Concepts -->
<div style="display:flex; gap:15px; font-family:sans-serif;">
  <div style="border:2px dashed #0284c7; padding:15px; border-radius:4px; text-align:center;">
    <b>Marquee Tool</b><br>[ Rectangular Grid ]
  </div>
  <div style="border:2px dashed #16a34a; padding:15px; border-radius:50%; text-align:center;">
    <b>Elliptical</b><br>( Circular )
  </div>
  <div style="border:2px dashed #d97706; padding:15px; border-radius:4px; text-align:center;">
    <b>Magic Wand</b><br>Single Click Color
  </div>
</div>`,
    outputExplanation: "स्क्रीन पर डैश वाली बॉर्डर (Marching Ants) के रूप में सिलेक्शन का दृश्यमान मॉडल प्रदर्शित होगा।",
    realWorldAnalogy: "Marquee कुकी-कटर जैसा है जो निश्चित आकार काटता है; Lasso कैंची जैसा है जिसे आप हाथ से घुमाते हैं; और Magic Wand चुंबक जैसा है जो एक ही रंग के लोहे के कणों को एक बार में खींच लेता है।",
    importantPoints: [
      "Magic Wand रंग के आधार पर पिक्सल्स चुनता है।",
      "Tolerance मान बढ़ाने से अधिक रंगों के शेड्स चुने जाते हैं।",
      "Deselect का शॉर्टकट Ctrl + D है।",
      "सिलेक्शन को उलटने (Invert) का शॉर्टकट Ctrl + Shift + I है।"
    ],
    commonMistakes: [
      "सिलेक्शन पूरा होने के बाद उसे Deselect (Ctrl + D) करना भूल जाना (जिससे बाकी इमेज पर कोई भी ब्रश या टूल काम नहीं करता)।"
    ],
    examPerspective: "Magic Wand के कार्य, Tolerance एट्रिब्यूट, और Ctrl+D (Deselect) शॉर्टकट पर परीक्षा में बार-बार प्रश्न पूछे जाते हैं।",
    quickRevision: "Marquee (चौकोर/गोल), Lasso (फ्रीहैंड/पॉलीगोनल/मैग्नेटिक), Magic Wand (एक क्लिक में समान रंग)। Deselect = Ctrl + D.",
    relatedTopics: ["features-of-photo-editing", "paint-tools", "transform-tools"],
    practiceTask: "फोटो एडिटर खोलें, एक सफेद बैकग्राउंड वाली तस्वीर लें और Magic Wand से सफेद बैकग्राउंड को एक क्लिक में डिलीट करें।"
  },
  {
    id: "u7-t3",
    slug: "paint-tools",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Paint Tools (Brush, Pencil, Gradient, Paint Bucket, Eraser)",
    hindiTitle: "पेंट टूल्स (Brush, Pencil, Gradient, Paint Bucket, Eraser, Clone Stamp)",
    definitionEnglish: "Paint tools in photo editing software apply color, textures, and gradient transitions to pixels, encompassing the Brush tool (soft anti-aliased strokes), Pencil tool (hard aliased strokes), Paint Bucket (solid flood fill), Gradient tool (smooth blending of multiple colors), Eraser tool, and Clone Stamp tool (pixel duplication).",
    definitionHindi: "फोटो एडिटिंग में पेंट टूल्स पिक्सल्स पर रंग, टेक्सचर और ग्रेडिएंट लागू करते हैं; इनमें Brush टूल (मुलायम स्ट्रोक्स), Pencil टूल (कठोर स्ट्रोक्स), Paint Bucket (ठोस रंग भरना), Gradient टूल (दो या अधिक रंगों का क्रमिक मिश्रण), Eraser टूल, और Clone Stamp टूल (पिक्सेल कॉपी) शामिल हैं।",
    simpleWords: "यह डिजिटल कैनवास के रंग-बिरंगे ब्रश, पेंसिल, बाल्टी और रबर हैं। यदि पूरी दीवार को एक रंग में रंगना हो तो पेंट बकेट लें, दो रंगों का सुंदर शेड बनाना हो तो ग्रेडिएंट लें, और किसी चेहरे के दाग-धब्बे मिटाने हों तो क्लोन स्टैम्प टूल लें।",
    whyImportant: "वेब बैनर डिजाइन करने, बटन बैकग्राउंड तैयार करने और तस्वीरों को रीटच करने के लिए पेंट टूल्स का ज्ञान अनिवार्य है।",
    detailedExplanation: `### आधिकारिक पाठ्यक्रम के प्रमुख पेंट टूल्स:
1. **Brush Tool (B):**
   - मुलायम किनारों (Soft Edges / Anti-aliased) वाले स्ट्रोक्स बनाता है।
   - इसमें **Opacity** (पारदर्शिता) और **Flow** को नियंत्रित किया जा सकता है।
2. **Pencil Tool:**
   - कठोर किनारों (Hard Edges / Pixelated) वाली सीधी लाइनें खींचता है।
3. **Paint Bucket Tool (G):**
   - एक जैसे रंग वाले पूरे क्षेत्र में एक क्लिक में फोरग्राउंड रंग (Solid Color) भर देता है।
4. **Gradient Tool (G):**
   - दो या अधिक रंगों के बीच एक सहज, क्रमिक संक्रमण (Smooth Blending) बनाता है।
   - प्रकार: Linear (रेखीय), Radial (गोलाकार), Angle, Reflected, Diamond.
5. **Eraser Tool (E):**
   - पिक्सल्स को मिटाकर पारदर्शी (Transparent) या बैकग्राउंड रंग में बदलता है।
6. **Clone Stamp Tool (S - अति महत्वपूर्ण!):**
   - इमेज के किसी एक हिस्से का सटीक नमूना (Sample) लेकर दूसरी जगह हूबहू पेंट करना।
   - **तरीका:** \`Alt + Click\` करके नमूना लें, फिर दूसरी जगह ब्रश चलाएं। चेहरे के दाग-धब्बे हटाने या किसी वस्तु को गायब करने हेतु प्रयुक्त।`,
    syntax: `Key Paint Shortcuts:
B             : Brush Tool
G             : Gradient / Paint Bucket Tool
E             : Eraser Tool
S             : Clone Stamp Tool
[ and ]       : Decrease / Increase Brush Size
Alt + Click   : Sample Source for Clone Stamp`,
    codeExample: `<!-- Demonstrating CSS simulation of Gradient & Brush Effects -->
<div style="width: 100%; height: 80px; 
            background: linear-gradient(90deg, #0284c7, #0d9488, #16a34a); 
            border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
  CSS Linear Gradient (Simulating Gradient Tool in Web Design)
</div>`,
    outputExplanation: "स्क्रीन पर नीले से हरे रंग में क्रमिक रूप से बदलती हुई एक सुंदर ग्रेडिएंट पट्टी दिखेगी।",
    realWorldAnalogy: "ब्रश टूल वाटरकलर ब्रश जैसा है; पेंसिल टूल मार्कर पेन जैसा है; पेंट बकेट रंग की बाल्टी उड़ेलने जैसी है; और क्लोन स्टैम्प कार्बन पेपर से हूबहू नकल उतारने जैसा है।",
    importantPoints: [
      "Brush टूल के किनारे मुलायम होते हैं जबकि Pencil के किनारे कठोर होते हैं।",
      "Gradient दो या अधिक रंगों का क्रमिक मिश्रण बनाता है।",
      "Clone Stamp टूल Alt + Click द्वारा नमूना लेकर काम करता है।",
      "ब्रश का आकार बड़ा करने के लिए ']' और छोटा करने के लिए '[' का उपयोग होता है।"
    ],
    commonMistakes: [
      "Clone Stamp टूल को बिना Alt+Click के सीधे चलाने की कोशिश करना (सॉफ्टवेयर एरर देगा कि 'पहले नमूना बिंदु चुनें')।"
    ],
    examPerspective: "Clone Stamp टूल का उपयोग (दाग-धब्बे हटाना/कॉपी करना), Alt+Click की भूमिका, और Gradient के प्रकारों पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Brush (मुलायम), Pencil (कठोर), Paint Bucket (ठोस रंग), Gradient (मिश्रित रंग), Clone Stamp (Alt+Click से पिक्सेल डुप्लीकेशन)।",
    relatedTopics: ["features-of-photo-editing", "selection-tools", "transform-tools"],
    practiceTask: "एक 3-रंगों वाला लीनियर ग्रेडिएंट बैकग्राउंड तैयार करें और उस पर सफेद टेक्स्ट लिखें।"
  },
  {
    id: "u7-t4",
    slug: "transform-tools",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Transform Tools (Scale, Rotate, Skew, Flip, Crop)",
    hindiTitle: "ट्रांसफॉर्म टूल्स (Scale, Rotate, Skew, Flip, Crop)",
    definitionEnglish: "Transform tools alter the physical geometry, orientation, dimensions, and bounding boundaries of image elements or layers, including Scale (resizing), Rotate (angling), Skew (slanting), Flip (mirroring horizontally/vertically), and Crop (trimming outer canvas areas).",
    definitionHindi: "ट्रांसफॉर्म टूल्स इमेज एलिमेंट्स या लेयर्स की भौतिक ज्यामिति, दिशा, आकार और सीमाओं को बदलते हैं; इनमें Scale (आकार बदलना), Rotate (घुमाना), Skew (तिरछा करना), Flip (उलटना/दर्पण छवि), और Crop (अवांछित किनारों को काटना) शामिल हैं।",
    simpleWords: "फोटो को छोटा-बड़ा करना (Scale), आड़ा-तिरछा घुमाना (Rotate), आईने की तरह उल्टा करना (Flip), और फालतू किनारे काटकर फोटो का मुख्य हिस्सा निकालना (Crop) ट्रांसफॉर्म कहलाता है।",
    whyImportant: "वेबसाइट के बैनर का सही साइज तय करने और उत्पादों को सही एंगल में दिखाने के लिए ट्रांसफॉर्म टूल्स का दैनिक उपयोग होता है।",
    detailedExplanation: `### आधिकारिक पाठ्यक्रम के 5 प्रमुख ट्रांसफॉर्म ऑपरेशन्स:
1. **Free Transform (\`Ctrl + T\` - सार्वभौमिक शॉर्टकट!):**
   - सक्रिय लेयर या सिलेक्शन के चारों तरफ एक बाउंडिंग बॉक्स बना देता है जिसके 8 हैंडल्स होते हैं।
2. **Scale (रीसाइज़िंग):**
   - इमेज को छोटा या बड़ा करना।
   - **गोल्डन टिप:** \`Shift\` दबाकर खींचने से तस्वीर का अनुपात (Aspect Ratio) सुरक्षित रहता है और चेहरा चपटा नहीं होता।
3. **Rotate (घुमाना):**
   - इमेज को किसी भी कोण (Angle) पर 90°, 180° या फ्रीहैंड घुमाना।
4. **Skew & Distort (तिरछा करना):**
   - किनारों को पकड़कर किसी एक दिशा में खींचना ताकि 3D झुकाव का आभास हो।
5. **Flip (दर्पण छवि):**
   - **Flip Horizontal:** बाएँ को दाएँ करना (जैसे व्यक्ति का चेहरा बाईं तरफ से दाईं तरफ मोड़ना)।
   - **Flip Vertical:** सिर नीचे और पैर ऊपर करना (पानी में परछाईं जैसा प्रतिबिंब)।
6. **Crop Tool (C):**
   - पूरी इमेज के अवांछित किनारों को काटकर कैनवास का आकार छोटा करना।`,
    syntax: `Key Transform Shortcuts:
Ctrl + T     : Free Transform (Scale & Rotate)
C            : Crop Tool
Enter        : Apply Transform
Esc          : Cancel Transform
Shift + Drag : Maintain Aspect Ratio`,
    codeExample: `<!-- Demonstrating CSS Transform Equivalents -->
<div style="display: flex; gap: 20px; padding: 20px; font-family: sans-serif;">
  <div style="padding: 10px; background: #0284c7; color: white; transform: rotate(-10deg);">
    Rotated -10deg
  </div>
  <div style="padding: 10px; background: #16a34a; color: white; transform: scale(1.15);">
    Scaled 1.15x
  </div>
  <div style="padding: 10px; background: #d97706; color: white; transform: skewX(-15deg);">
    Skewed -15deg
  </div>
</div>`,
    outputExplanation: "स्क्रीन पर एक बॉक्स थोड़ा घूमा हुआ दिखेगा, दूसरा बड़ा दिखेगा, और तीसरा तिरछा झुका हुआ दिखेगा।",
    realWorldAnalogy: "Crop कैंची से फोटो के किनारे काटना है; Scale फोटोकॉपी को 50% छोटा करना है; और Flip फोटो को आईने के सामने रखकर उल्टी छवि देखना है।",
    importantPoints: [
      "Free Transform का शॉर्टकट Ctrl + T है।",
      "Shift कुंजी दबाकर खींचने से आस्पेक्ट रेश्यो नहीं बिगड़ता।",
      "Crop टूल पूरी इमेज के कैनवास को छोटा करता है।",
      "Flip Horizontal आईने जैसा बाएँ-दाएँ का प्रतिबिंब बनाता है।"
    ],
    commonMistakes: [
      "बिना Shift दबाए इमेज को खींचना (जिससे व्यक्ति की फोटो चपटी या बहुत लंबी होकर विकृत हो जाती है)।"
    ],
    examPerspective: "Free Transform का शॉर्टकट (Ctrl + T), Crop टूल का उद्देश्य, और Flip Horizontal vs Vertical में अंतर पर प्रश्न पूछे जाते हैं।",
    quickRevision: "Ctrl+T = Free Transform; Scale = आकार; Rotate = घुमाव; Skew = झुकाव; Flip = दर्पण; Crop = कैनवास काटना।",
    relatedTopics: ["features-of-photo-editing", "selection-tools", "layers"],
    practiceTask: "एक तस्वीर को Free Transform (Ctrl + T) करके 45 डिग्री पर घुमाएं और उसका Flip Horizontal करें।"
  },
  {
    id: "u7-t5",
    slug: "text-tool",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Text Tool",
    hindiTitle: "टेक्स्ट टूल (Text Tool & Typography in Photo Editing)",
    definitionEnglish: "The Text Tool (T) in photo editing software creates vector-based type layers containing editable typography, supporting font family selection, point sizes, text color, alignment, tracking, kerning, leading, and anti-aliasing modes (None, Sharp, Crisp, Strong, Smooth).",
    definitionHindi: "फोटो एडिटिंग सॉफ्टवेयर में टेक्स्ट टूल (T) संपादन योग्य टाइपोग्राफी युक्त वेक्टर-आधारित टाइप लेयर्स बनाता है, जो फॉन्ट फैमिली चयन, साइज, रंग, संरेखण, और एंटी-अलियासिंग मोड्स (Sharp, Crisp, Strong, Smooth) का समर्थन करता है।",
    simpleWords: "फोटो के ऊपर सुंदर अक्षरों में नाम, स्लोगन या विज्ञापन की लाइनें लिखने के लिए टेक्स्ट टूल (T) का उपयोग किया जाता है। खास बात यह है कि टेक्स्ट हमेशा अपनी एक नई स्वतंत्र लेयर पर बनता है।",
    whyImportant: "वेब बैनर्स, पोस्टर, थंबनेल और प्रमोशनल ग्राफिक्स में टेक्स्ट ही मुख्य संदेश देता है।",
    detailedExplanation: `### टेक्स्ट टूल की 4 मुख्य विशेषताएं:
1. **स्वचालित नई लेयर (Automatic New Layer):**
   - जब भी आप टेक्स्ट टूल चुनकर कैनवास पर क्लिक करते हैं, सॉफ्टवेयर स्वतः एक **'T' मार्का टाइप लेयर** बना देता है।
   - इसका फायदा यह है कि नीचे की मुख्य फोटो बिल्कुल खराब नहीं होती और टेक्स्ट को कभी भी एडिट या हटाया जा सकता है।
2. **Anti-Aliasing (अक्षरों के किनारों को चिकना करना - अति महत्वपूर्ण!):**
   - जब अक्षरों के किनारे पिक्सेल कटने से आरी जैसे (Jagged) दिखने लगते हैं, तो **Anti-aliasing** किनारों पर हल्के शेड्स जोड़कर उन्हें बिल्कुल स्मूथ और चिकना बना देता है।
   - मोड्स: None, Sharp, Crisp, Strong, Smooth.
3. **Typography Controls:**
   - **Font Size:** प्वाइंट्स (pt) में आकार।
   - **Leading:** दो पंक्तियों के बीच की लंबवत दूरी (Line Height)।
   - **Tracking / Kerning:** दो अक्षरों के बीच की क्षैतिज दूरी।
4. **Warp Text:** टेक्स्ट को मेहराब (Arc), लहर (Wave) या झंडे के आकार में मोड़ना।`,
    syntax: `Text Tool Controls:
Font Family : Arial / Montserrat / Inter
Font Size   : 36 pt
Anti-alias  : Smooth / Sharp
Tracking    : Character spacing`,
    codeExample: `<!-- Demonstrating Typography in Web Graphics -->
<div style="background:#0f172a; padding:30px; border-radius:8px; text-align:center;">
  <h1 style="color:#38bdf8; font-family:'Inter', sans-serif; letter-spacing:2px; margin:0; text-shadow:0 2px 8px rgba(56,189,248,0.4);">
    NIELIT O-LEVEL GRAPHICS
  </h1>
  <p style="color:#94a3b8; font-size:14px; margin-top:8px;">
    Rendered with smooth anti-aliasing and letter-spacing
  </p>
</div>`,
    outputExplanation: "गहरे नीले बैकग्राउंड पर चमकदार स्काई-ब्लू रंग में स्मूथ किनारों वाला सुंदर हेडिंग टेक्स्ट दिखेगा।",
    realWorldAnalogy: "जैसे किसी पेंटिंग पर कांच की एक अलग पारदर्शी शीट रखकर उस पर मार्कर से स्लोगन लिखा जाए, ताकि पेंटिंग भी बची रहे और स्लोगन भी सुंदर दिखे।",
    importantPoints: [
      "टेक्स्ट टूल का शॉर्टकट 'T' होता है।",
      "टेक्स्ट जोड़ने पर स्वतः एक नई टाइप लेयर बनती है।",
      "Anti-aliasing अक्षरों के किनारों को चिकना और पठनीय बनाता है।"
    ],
    commonMistakes: [
      "टेक्स्ट को इमेज के साथ मर्ज (Rasterize/Flatten) कर देना, जिससे बाद में स्पेलिंग सुधारना असंभव हो जाता है।"
    ],
    examPerspective: "Anti-aliasing की परिभाषा, टेक्स्ट टूल का शॉर्टकट (T), और टाइप लेयर के स्वतः बनने की प्रक्रिया पर प्रश्न पूछे जाते हैं।",
    quickRevision: "टेक्स्ट टूल (T) स्वतंत्र लेयर पर संपादन योग्य टेक्स्ट बनाता है। Anti-aliasing अक्षरों के किनारों को चिकना रखता है।",
    relatedTopics: ["layers", "features-of-photo-editing", "transform-tools"],
    practiceTask: "एक फोटो पर टेक्स्ट टूल से 'Web Designing 2026' लिखें और उसका फॉन्ट, रंग और साइज बदलकर देखें।"
  },
  {
    id: "u7-t6",
    slug: "layers",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Layers (Stacking, Opacity, Masks)",
    hindiTitle: "लेयर्स (Layers) की अवधारणा, स्टैकिंग, अपारदर्शिता एवं मास्क",
    definitionEnglish: "Layers are transparent sheets stacked on top of one another that hold distinct elements of an artwork independently, allowing non-destructive editing of individual components without altering adjacent graphics, controlled via stacking order, visibility (eye icon), opacity (0-100%), blend modes, and layer masks.",
    definitionHindi: "लेयर्स (Layers) एक-दूसरे के ऊपर रखी गई पारदर्शी शीटों की तरह होती हैं जो किसी चित्र के अलग-अलग तत्वों को स्वतंत्र रूप से धारण करती हैं; यह आसपास के ग्राफिक्स को नुकसान पहुंचाए बिना किसी भी हिस्से को एडिट करने, स्टैकिंग क्रम, दृश्यता (आंख का आइकॉन), अपारदर्शिता (0-100%) और लेयर मास्क की सुविधा देती हैं।",
    simpleWords: "मान लीजिए आपके पास 3 पारदर्शी प्लास्टिक की शीटें हैं। सबसे नीचे वाली पर आपने पहाड़ बनाया, बीच वाली पर पेड़ बनाया, और सबसे ऊपर वाली पर सूरज बनाया। जब तीनों एक साथ देखते हैं तो पूरा चित्र दिखता है। यदि पेड़ मिटाना हो तो सिर्फ बीच की शीट मिटाएंगे, पहाड़ और सूरज पर कोई असर नहीं पड़ेगा!",
    whyImportant: "लेयर्स फोटो एडिटिंग की सबसे क्रांतिकारी और महत्वपूर्ण अवधारणा है। बिना लेयर्स के कोई भी पेशेवर ग्राफिक्स का निर्माण संभव नहीं है।",
    detailedExplanation: `### लेयर्स के 5 सबसे महत्वपूर्ण घटक:
1. **Stacking Order (स्टैकिंग क्रम):**
   - लेयर पैनल में जो लेयर **सबसे ऊपर** होती है, वह स्क्रीन पर भी सबसे आगे दिखती है।
   - जो लेयर नीचे होती है, वह ऊपर वाली लेयर से ढक जाती है।
   - ड्रैग करके किसी भी लेयर को ऊपर या नीचे किया जा सकता है।
2. **Layer Visibility (आंख का आइकॉन - Eye Icon):**
   - लेयर के नाम के आगे बनी छोटी आँख पर क्लिक करके उस लेयर को अस्थायी रूप से छिपाया (Hide) या दिखाया (Show) जा सकता है।
3. **Opacity (अपारदर्शिता 0% से 100%):**
   - 100% Opacity = पूरी तरह ठोस (पीछे का कुछ नहीं दिखेगा)।
   - 50% Opacity = अर्ध-पारदर्शी (पीछे की लेयर हल्की दिखेगी)।
   - 0% Opacity = पूर्णतः अदृश्य।
4. **Locking (लेयर लॉक करना):**
   - ताले के निशान पर क्लिक करके लेयर को लॉक करना ताकि गलती से उस पर कोई ब्रश न चल जाए या वह खिसक न जाए।
5. **Layer Mask (नॉन-डिस्ट्रक्टिव इरेज़िंग):**
   - फोटो के किसी हिस्से को परमानेंट मिटाने के बजाय मास्क से छिपाना (काला रंग छिपाता है, सफेद रंग दिखाता है)।`,
    syntax: `Layer Anatomy:
[ Eye Icon ] [ Layer Thumbnail ] Layer Name [ Opacity: 100% ]
Stack Order:
Top Layer    (Foreground: Text)
Middle Layer (Subject: Person)
Bottom Layer (Background: Nature)`,
    codeExample: `<!-- Demonstrating Stacking Order with CSS Layers (z-index) -->
<div style="position: relative; width: 250px; height: 120px; font-family: sans-serif;">
  <!-- Bottom Layer -->
  <div style="position: absolute; width: 100%; height: 100%; background: #0284c7; border-radius: 8px; z-index: 1;">
    <span style="color: white; padding: 10px; display: inline-block;">Layer 1: Background</span>
  </div>
  <!-- Top Layer (Higher Stacking Order) -->
  <div style="position: absolute; top: 30px; left: 30px; padding: 10px; background: #fef08a; border: 2px solid #ca8a04; border-radius: 6px; z-index: 2;">
    <b>Layer 2: Foreground Card</b>
  </div>
</div>`,
    outputExplanation: "पीली लेयर नीली लेयर के ऊपर दिखेगी क्योंकि उसका स्टैकिंग ऑर्डर (z-index) अधिक है।",
    realWorldAnalogy: "एनीमेशन स्टूडियो में पारदर्शी सेल्यूलॉयड (Cel) शीटों पर कार्टून कैरेक्टर को बैकग्राउंड सीन के ऊपर रखकर शूट किया जाता है, ताकि कैरेक्टर बदलते समय बैकग्राउंड दोबारा न बनाना पड़े।",
    importantPoints: [
      "लेयर्स पारदर्शी शीटों की तरह काम करती हैं।",
      "आंख (Eye) का आइकॉन लेयर की दृश्यता को ऑन या ऑफ करता है।",
      "लेयर पैनल में सबसे ऊपर वाली लेयर स्क्रीन पर सबसे आगे दिखाई देती है।",
      "Opacity 0% से 100% के बीच होती है।"
    ],
    commonMistakes: [
      "गलत लेयर चुनकर ब्रश चला देना (हमेशा चेक करें कि लेयर पैनल में सही लेयर नीले रंग में हाइलाइट है)।",
      "सभी लेयर्स को बहुत जल्दी 'Flatten' कर देना (जिससे बाद में अलग-अलग एलिमेंट्स को एडिट नहीं किया जा सकता)।"
    ],
    examPerspective: "लेयर्स की परिभाषा, स्टैकिंग ऑर्डर, Opacity का अर्थ, और आंख के आइकॉन की भूमिका पर हर साल प्रश्न पूछे जाते हैं।",
    quickRevision: "लेयर्स पारदर्शी शीटें हैं जो स्वतंत्र एडिटिंग देती हैं। आँख आइकॉन = दृश्यता; स्टैक ऑर्डर = आगे-पीछे का क्रम; Opacity = पारदर्शिता।",
    relatedTopics: ["text-tool", "features-of-photo-editing", "filters"],
    practiceTask: "एक फोटो एडिटर में 2 लेयर्स बनाएं: नीचे रंग भरें और ऊपर टेक्स्ट लिखें, फिर ऊपर वाली लेयर की Opacity 50% करके देखें।"
  },
  {
    id: "u7-t7",
    slug: "brightness-contrast",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Brightness / Contrast",
    hindiTitle: "ब्राइटनेस एवं कंट्रास्ट (Tonal Range Adjustments)",
    definitionEnglish: "Brightness and Contrast adjustments control the overall tonal range of an image: Brightness shifts the overall luminance (making all pixels uniformly lighter or darker), while Contrast adjusts the separation between the darkest shadows and the brightest highlights.",
    definitionHindi: "ब्राइटनेस और कंट्रास्ट एडजस्टमेंट्स किसी छवि की समग्र टोनल रेंज को नियंत्रित करते हैं: ब्राइटनेस समग्र चमक को बढ़ाती या घटाती है (सभी पिक्सल्स को समान रूप से हल्का या गहरा करना), जबकि कंट्रास्ट सबसे गहरे छाया क्षेत्रों और सबसे चमकीले हाइलाइट्स के बीच के अंतर को बढ़ाता है।",
    simpleWords: "ब्राइटनेस का मतलब है कमरे की लाइट तेज या मद्धम करना (पूरी फोटो गोरी या काली होना)। कंट्रास्ट का मतलब है काले को और काला करना और सफेद को और सफेद करना ताकि तस्वीर बिल्कुल कुरकुरी और साफ दिखे।",
    whyImportant: "कम रोशनी में खींची गई धुंधली तस्वीरों को वेबसाइट के लिए चमकीला और पेशेवर बनाने का यह पहला कदम है।",
    detailedExplanation: `### 1. Brightness (चमक):
- **मान:** -100 से +100 तक।
- **बढ़ाने पर (+):** सभी पिक्सल्स के मान में रोशनी जुड़ती है; फोटो उजली हो जाती है।
- **घटाने पर (-):** सभी पिक्सल्स गहरे होते हैं; फोटो अंधेरी हो जाती है।
- **अत्यधिक ब्राइटनेस का नुकसान:** फोटो 'Washed Out' (धुली हुई) हो जाती है और डिटेल्स गायब हो जाती हैं।

### 2. Contrast (विरोधाभास / विषमता):
- **बढ़ाने पर (+):** चमकीले हिस्से और चमकीले हो जाते हैं और अंधेरे हिस्से और गहरे हो जाते हैं। फोटो जीवंत (Crisp & Punchy) दिखती है।
- **घटाने पर (-):** अंधेरे और उजाले का अंतर मिटने लगता है और पूरी फोटो बेजान स्लेटी (Flat Grey) दिखने लगती है।`,
    syntax: `Tonal Adjustment Range:
Brightness: -100 to +100
Contrast  : -100 to +100
Ideal: Moderate positive boost (+15 Brightness, +20 Contrast)`,
    codeExample: `<!-- Demonstrating CSS Filter Equivalents for Brightness & Contrast -->
<div style="display:flex; gap:15px; font-family:sans-serif;">
  <div style="padding:15px; background:#0284c7; color:white; border-radius:6px;">
    Normal (100%)
  </div>
  <div style="padding:15px; background:#0284c7; color:white; border-radius:6px; filter: brightness(1.4);">
    High Brightness (140%)
  </div>
  <div style="padding:15px; background:#0284c7; color:white; border-radius:6px; filter: contrast(1.6);">
    High Contrast (160%)
  </div>
</div>`,
    outputExplanation: "सामान्य बॉक्स के मुकाबले दूसरा बॉक्स अधिक चमकदार दिखेगा और तीसरा बॉक्स गहरे कंट्रास्ट में दिखेगा।",
    realWorldAnalogy: "ब्रश से पेंटिंग करते समय पूरे कैनवास पर थोड़ा सा सफेद रंग पोत देना ब्राइटनेस बढ़ाना है; और काले बॉर्डर को और गहरा काला कर देना कंट्रास्ट बढ़ाना है।",
    importantPoints: [
      "ब्राइटनेस ओवरऑल लाइट को नियंत्रित करती है।",
      "कंट्रास्ट डार्क और लाइट पिक्सल्स के अंतर को बढ़ाता है।",
      "CSS में इसे `filter: brightness()` और `filter: contrast()` से लागू किया जा सकता है।"
    ],
    commonMistakes: [
      "केवल ब्राइटनेस बहुत ज्यादा बढ़ा देना जिससे फोटो की सारी डिटेल उड़ जाए (हमेशा ब्राइटनेस के साथ थोड़ा कंट्रास्ट भी बढ़ाना चाहिए)।"
    ],
    examPerspective: "ब्राइटनेस और कंट्रास्ट की परिभाषा, दोनों के प्रभाव, और छवि सुधार में उनकी भूमिका पर वस्तुनिष्ठ प्रश्न आते हैं।",
    quickRevision: "ब्राइटनेस = पूरी छवि की समग्र चमक (हल्का/गहरा); कंट्रास्ट = काले और सफेद का अलगाव (क्रिसपनेस)।",
    relatedTopics: ["improve-colors-and-tone", "filters", "features-of-photo-editing"],
    practiceTask: "एक डार्क फोटो लें और फोटो एडिटर में ब्राइटनेस +20 और कंट्रास्ट +15 करके अंतर देखें।"
  },
  {
    id: "u7-t8",
    slug: "improve-colors-and-tone",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Improve Colors and Tone (Levels, Curves, Hue/Saturation)",
    hindiTitle: "कलर्स एवं टोन सुधारना (Levels, Curves, Hue/Saturation, Color Balance)",
    definitionEnglish: "Improving colors and tone involves advanced non-linear tonal adjustments using Levels (histogram-based input/output black, midtone, and white points), Curves (precise tone curve mapping across 256 tonal levels), Hue/Saturation (adjusting color tint, purity, and lightness), and Color Balance.",
    definitionHindi: "कलर्स और टोन सुधारने का तात्पर्य उन्नत नॉन-लीनियर टोनल एडजस्टमेंट्स से है; इसमें Levels (हिस्टोग्राम पर आधारित शैडो, मिडटोन और हाइलाइट्स), Curves (256 टोनल स्तरों पर सटीक कर्व मैपिंग), Hue/Saturation (रंग का टिंट, शुद्धता और चमक) और Color Balance शामिल हैं।",
    simpleWords: "यह ब्राइटनेस से भी आगे का पेशेवर टूल है। यदि किसी फोटो में पीलापन ज्यादा है तो कलर बैलेंस से उसे ठीक करें, यदि रंग फीके हैं तो सैचुरेशन बढ़ाकर चटकीला बनाएं, और लेवल्स से शैडो और हाइलाइट को संतुलित करें।",
    whyImportant: "पेशेवर वेब डिजाइन में ई-कॉमर्स उत्पादों (जैसे कपड़ों और जूतों) के बिल्कुल असली रंग दिखाने के लिए कलर करेक्शन अनिवार्य होता है।",
    detailedExplanation: `### रंग और टोन सुधारने के 4 मुख्य टूल्स:
1. **Levels (\`Ctrl + L\`):**
   - यह एक **हिस्टोग्राम (Histogram ग्राफ)** दिखाता है जो बताता है कि फोटो में शैडो (काले), मिडटोन (स्लेटी), और हाइलाइट्स (सफेद) पिक्सल्स का वितरण कैसा है।
   - इसमें 3 स्लाइडर्स होते हैं: ब्लैक पॉइंट (0), ग्रे मिडटोन (1.0), और व्हाइट पॉइंट (255)।
2. **Curves (\`Ctrl + M\` - सबसे शक्तिशाली टूल!):**
   - यह 45-डिग्री की एक विकर्ण रेखा होती है।
   - रेखा को बीच से ऊपर खींचने पर इमेज चमकदार होती है, नीचे खींचने पर गहरी होती है।
   - 'S-Curve' बनाने से फोटो में सिनेमाई कंट्रास्ट और गहराई आ जाती है।
3. **Hue / Saturation (\`Ctrl + U\`):**
   - **Hue (रंग का नाम):** लाल, हरा, नीला, पीला (रंग का मूल शेड बदलना)।
   - **Saturation (रंग की तीव्रता/शुद्धता):** 0% करने पर फोटो ब्लैक-एंड-व्हाइट हो जाती है; 100% करने पर रंग अत्यंत गाढ़े हो जाते हैं।
   - **Lightness:** रंग का हल्का या गहरा होना।
4. **Color Balance (\`Ctrl + B\`):**
   - फोटो के टोन में Cyan vs Red, Magenta vs Green, और Yellow vs Blue के संतुलन को ठीक करना (जैसे शाम की फोटो से अतिरिक्त पीलापन हटाना)।`,
    syntax: `Color Adjustment Shortcuts:
Ctrl + L : Levels (हिस्टोग्राम)
Ctrl + M : Curves (कर्व मैपिंग)
Ctrl + U : Hue / Saturation
Ctrl + B : Color Balance`,
    codeExample: `<!-- Demonstrating CSS Hue-Rotate and Saturate -->
<div style="display:flex; gap:15px; font-family:sans-serif;">
  <div style="padding:15px; background:#ef4444; color:white; border-radius:6px;">
    Original Red (Hue 0)
  </div>
  <div style="padding:15px; background:#ef4444; color:white; border-radius:6px; filter: hue-rotate(90deg);">
    Hue Shifted +90deg (Greenish)
  </div>
  <div style="padding:15px; background:#ef4444; color:white; border-radius:6px; filter: saturate(2.5);">
    Super Saturated (Vibrant)
  </div>
</div>`,
    outputExplanation: "मूल लाल रंग Hue बदलने पर हरा हो जाएगा, और सैचुरेशन बढ़ाने पर बेहद गाढ़ा और चमकीला हो जाएगा।",
    realWorldAnalogy: "जैसे टीवी के रिमोट में कलर (Saturation) शून्य करने पर दूरदर्शन का ब्लैक-एंड-व्हाइट जमाना आ जाता है और बढ़ाने पर रंगीन दुनिया दिखती है।",
    importantPoints: [
      "Levels का शॉर्टकट Ctrl + L है (हिस्टोग्राम आधारित)।",
      "Curves का शॉर्टकट Ctrl + M है।",
      "Hue/Saturation का शॉर्टकट Ctrl + U है।",
      "Saturation 0% करने से फोटो ग्रेस्केल (Black & White) बन जाती है।"
    ],
    commonMistakes: [
      "Saturation बहुत ज्यादा बढ़ा देना जिससे लोगों के चेहरे लाल टमाटर जैसे अप्राकृतिक दिखने लगें।"
    ],
    examPerspective: "Levels, Curves, Hue, Saturation की परिभाषा और उनके शॉर्टकट्स (Ctrl+L, Ctrl+M, Ctrl+U) पर परीक्षा में प्रश्न आते हैं।",
    quickRevision: "Levels = हिस्टोग्राम बैलेंस (Ctrl+L); Curves = टोन मैपिंग (Ctrl+M); Hue = रंग का शेड; Saturation = रंग की शुद्धता (Ctrl+U).",
    relatedTopics: ["brightness-contrast", "filters", "features-of-photo-editing"],
    practiceTask: "एक फोटो पर `Ctrl + U` खोलें और Saturation को -100 करके उसे ब्लैक-एंड-व्हाइट बनाएं।"
  },
  {
    id: "u7-t9",
    slug: "filters",
    unit: 7,
    unitSlug: "unit-7",
    unitTitle: "Photo Editor",
    title: "Filters (Blur, Sharpen, Noise, Artistic)",
    hindiTitle: "फिल्टर्स (Blur, Sharpen, Noise, Artistic Effects)",
    definitionEnglish: "Filters in photo editing software are algorithmic transformations applied to pixels to create visual enhancements, corrective fixes, or special artistic effects, categorized into Blur (Gaussian Blur), Sharpen (Unsharp Mask), Noise (Add/Reduce Noise), and Artistic/Stylize filters.",
    definitionHindi: "फोटो एडिटिंग में फिल्टर्स पिक्सल्स पर लागू होने वाले ऐसे एल्गोरिदम हैं जो दृश्य सुधार, सुधारात्मक समाधान या विशेष कलात्मक प्रभाव पैदा करते हैं; इन्हें Blur (गॉसियन ब्लर), Sharpen (किनारों को तीखा करना), Noise (शोर जोड़ना/हटाना) और Artistic/Stylize फिल्टर्स में बांटा जाता है।",
    simpleWords: "फिल्टर फोटो पर एक जादुई चश्मा लगाने जैसा है। यदि बैकग्राउंड को धुंधला (Blur) करके केवल व्यक्ति को चमकाना हो, या फोटो को तेल-रंग की पेंटिंग जैसा बनाना हो, तो फिल्टर्स का उपयोग किया जाता है।",
    whyImportant: "वेबसाइट के बैकग्राउंड बैनर्स को ब्लर करने और उत्पाद तस्वीरों को शार्प करने के लिए फिल्टर्स अत्यंत आवश्यक हैं।",
    detailedExplanation: `### आधिकारिक पाठ्यक्रम के 4 प्रमुख फिल्टर समूह:
1. **Blur Filters (धुंधला करना):**
   - **Gaussian Blur (गॉसियन ब्लर - सर्वाधिक लोकप्रिय):** पिक्सल्स को गणितीय बेल-कर्व के अनुसार स्मूदली धुंधला करना।
   - **Motion Blur:** तेज गति (Speed) का आभास देना।
   - **वेब में उपयोग:** हीरो बैनर के बैकग्राउंड को ब्लर करना ताकि उसके ऊपर लिखा सफेद टेक्स्ट साफ पढ़ा जा सके।
2. **Sharpen Filters (तीखा करना):**
   - **Unsharp Mask (USM):** किनारों के कंट्रास्ट को बढ़ाकर धुंधली फोटो को बिल्कुल स्पष्ट और शार्प बनाना।
3. **Noise Filters:**
   - **Add Noise:** रेट्रो या विंटेज लुक देने के लिए छोटे-छोटे दाने (Grain) जोड़ना।
   - **Despeckle / Reduce Noise:** कम रोशनी में खींची गई फोटो के अनचाहे दाने हटाना।
4. **Artistic / Stylize Filters:**
   - Watercolor, Oil Paint, Emboss, Mosaic, Glowing Edges (फोटो को पेंटिंग जैसा रूप देना)।`,
    syntax: `Common Photo Filters:
Filter -> Blur -> Gaussian Blur (Radius: 5px)
Filter -> Sharpen -> Unsharp Mask
Filter -> Noise -> Add Noise / Reduce Noise`,
    codeExample: `<!-- Demonstrating CSS Blur Filter Simulation -->
<div style="position:relative; width:300px; height:120px; border-radius:8px; overflow:hidden; font-family:sans-serif;">
  <!-- Blurred Background Layer -->
  <div style="position:absolute; width:100%; height:100%; 
              background: linear-gradient(45deg, #0284c7, #f43f5e); 
              filter: blur(8px); transform: scale(1.2);">
  </div>
  <!-- Sharp Foreground Text -->
  <div style="position:relative; z-index:2; padding:20px; color:white; text-align:center;">
    <h3 style="margin:0; text-shadow:0 2px 4px rgba(0,0,0,0.5);">Sharp Text on Blurred BG</h3>
    <p style="margin:4px 0 0 0; font-size:13px;">Gaussian Blur Effect</p>
  </div>
</div>`,
    outputExplanation: "रंगीन बैकग्राउंड धुंधला (Blur) दिखेगा और उसके ऊपर लिखा सफेद टेक्स्ट बिल्कुल साफ और शार्प दिखेगा।",
    realWorldAnalogy: "मोबाइल कैमरे का 'Portrait Mode' जो आपके पीछे के पेड़-पौधों को ब्लर कर देता है और केवल आपके चेहरे को शार्प रखता है, वही गॉसियन ब्लर फिल्टर का काम है।",
    importantPoints: [
      "Gaussian Blur सबसे लोकप्रिय और प्राकृतिक ब्लर फिल्टर है।",
      "Unsharp Mask किनारों का कंट्रास्ट बढ़ाकर फोटो को शार्प करता है।",
      "CSS में `filter: blur(5px)` से सीधे वेबपेज पर ब्लर लगाया जा सकता है।"
    ],
    commonMistakes: [
      "बहुत ज्यादा शार्पन (Over-sharpening) कर देना जिससे फोटो के किनारों पर सफेद बदसूरत लकीरें (Halo artifacts) दिखने लगें।"
    ],
    examPerspective: "Gaussian Blur, Unsharp Mask, और Noise फिल्टर के उद्देश्य तथा उपयोग पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    quickRevision: "Blur (धुंधलापन - Gaussian Blur); Sharpen (स्पष्टता - Unsharp Mask); Noise (दाने जोड़ना/हटाना); Artistic (कलात्मक प्रभाव)।",
    relatedTopics: ["brightness-contrast", "improve-colors-and-tone", "layers"],
    practiceTask: "एक इमेज बैकग्राउंड पर CSS `filter: blur(4px)` लगाकर उसके ऊपर एक हेडिंग लिखकर देखें कि टेक्स्ट कितना साफ दिखता है।"
  }
];
