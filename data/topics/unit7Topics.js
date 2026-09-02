// Unit 7: Photo Editor - Complete Topic Notes

export const unit7Topics = [
  {
    "id": "u7-t1",
    "slug": "features-of-photo-editing",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Features of Photo Editing & Image Fundamentals",
    "hindiTitle": "फोटो एडिटिंग की विशेषताएं एवं डिजिटल इमेज के मूल सिद्धांत",
    "definitionEnglish": "Photo editing in web design encompasses manipulating, enhancing, resizing, cropping, and optimizing digital graphics, distinguishing fundamentally between pixel-based Raster (Bitmap) graphics and mathematically defined Vector graphics, with resolution measured in PPI (web standard: 72-96 PPI).",
    "definitionHindi": "वेब डिजाइन में फोटो एडिटिंग का तात्पर्य डिजिटल ग्राफिक्स को संशोधित करने, बेहतर बनाने, रीसाइज़ करने, क्रॉप करने और ऑप्टिमाइज़ करने से है; यह मुख्य रूप से पिक्सेल-आधारित रास्टर (Bitmap) ग्राफिक्स और गणितीय सूत्रों पर आधारित वेक्टर ग्राफिक्स के बीच अंतर करता है, जिसका वेब मानक रेजोल्यूशन 72-96 PPI होता है।",
    "simpleWords": "वेबसाइट के लिए फोटो का आकार छोटा करना, उसकी चमक बढ़ाना और सही फॉर्मेट (जैसे पारदर्शी लोगो के लिए PNG और फोटो के लिए JPEG) चुनना फोटो एडिटिंग कहलाता है।",
    "whyImportant": "भारी और अनऑप्टिमाइज्ड इमेजेस वेबसाइट की लोडिंग स्पीड को 10 गुना धीमा कर देती हैं। सही इमेज प्रोसेसिंग वेब परफॉर्मेंस का मूल आधार है।",
    "detailedExplanation": "### 1. Raster (Bitmap) vs. Vector Graphics\n| Feature | Raster Graphics (Bitmap) | Vector Graphics |\n| :--- | :--- | :--- |\n| **Composition** | Grid of individual colored pixels | Mathematical vectors, paths, curves, and points |\n| **Scalability** | Pixelates and loses sharpness when enlarged | Infinitely scalable with crystal clear quality at any size |\n| **File Formats** | JPEG, PNG, GIF, BMP, WebP | SVG, EPS, AI, PDF |\n| **Software** | Adobe Photoshop, GIMP, Photopea | Adobe Illustrator, Inkscape, CorelDRAW |\n| **Primary Use** | Complex digital photos, artwork, textures | Logos, typography, UI icons, illustrations |\n\n### 2. Resolution & Color Spaces in Web Graphics\n- **Web Resolution:** Standardized at **72 DPI to 96 DPI** (Dots Per Inch) for optimal browser download speed and screen display.\n- **RGB Color Mode (Red, Green, Blue):** The additive light color model used exclusively for digital computer displays (Values: 0–255 per channel).\n- **CMYK Color Mode (Cyan, Magenta, Yellow, Key/Black):** The subtractive pigment color model used exclusively for commercial print media.",
    "syntax": "Web Resolution Standards:\nWeb Displays: 72 to 96 PPI\nPrint Media : 300 DPI\nStandard Web Formats: WebP, PNG, JPEG, SVG",
    "codeExample": "<!-- Responsive Optimized Web Graphic Demonstration -->\n<picture>\n  <source srcset=\"banner.webp\" type=\"image/webp\">\n  <img src=\"banner.jpg\" alt=\"Optimized Web Banner at 72 PPI\" width=\"600\" height=\"250\" loading=\"lazy\">\n</picture>",
    "outputExplanation": "ब्राउज़र आधुनिक WebP फॉर्मेट को प्राथमिकता देगा और यदि समर्थित न हो तो फॉलबैक JPEG लोड करेगा, जिससे पेज तेज लोड होगा।",
    "realWorldAnalogy": "रास्टर इमेज मोज़ेक टाइलों की बनी दीवार जैसी है (पास जाने पर टाइलें अलग-अलग दिखती हैं); वेक्टर इमेज कम्पास और स्केल से खींचे गए रेखाचित्र जैसी है (कितना भी बड़ा खींचो, रेखा हमेशा साफ रहेगी)।",
    "importantPoints": [
      "वेब इमेजेस का मानक रेजोल्यूशन 72 PPI से 96 PPI होता है।",
      "प्रिंटिंग का मानक रेजोल्यूशन 300 DPI होता है।",
      "रास्टर ग्राफिक्स पिक्सल्स से और वेक्टर ग्राफिक्स गणितीय सूत्रों से बनती हैं।",
      "पारदर्शी बैकग्राउंड के लिए PNG और एनीमेशन के लिए GIF का उपयोग होता है।"
    ],
    "commonMistakes": [
      "वेबसाइट पर 300 DPI की भारी प्रिंट फाइल अपलोड कर देना (जिससे वेबपेज लोड होने में बहुत समय लेता है; वेब के लिए हमेशा 72 PPI रखें)।"
    ],
    "examPerspective": "Raster बनाम Vector, PPI बनाम DPI, और JPEG/PNG/GIF/SVG की विशेषताओं पर प्रश्न हर साल आते हैं।",
    "quickRevision": "रास्टर = पिक्सेल ग्रिड (JPEG, PNG); वेक्टर = अनंत स्केलेबिलिटी (SVG); वेब रेजोल्यूशन = 72 PPI; प्रिंट = 300 DPI.",
    "relatedTopics": [
      "selection-tools",
      "paint-tools",
      "transform-tools"
    ],
    "practiceTask": "एक लोगो को SVG फॉर्मेट में और एक फोटो को JPEG फॉर्मेट में सेव करके दोनों के फाइल साइज की तुलना करें।"
  },
  {
    "id": "u7-t2",
    "slug": "selection-tools",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Selection Tools (Marquee, Lasso, Magic Wand)",
    "hindiTitle": "सिलेक्शन टूल्स (Marquee, Lasso, Magic Wand)",
    "definitionEnglish": "Selection tools in photo editing isolate specific areas of an image for targeted editing, filtering, or cutting, comprising geometric Marquee tools (Rectangular, Elliptical), freeform Lasso tools (Freehand, Polygonal, Magnetic), and color-range based Magic Wand / Quick Selection tools.",
    "definitionHindi": "फोटो एडिटिंग में सिलेक्शन टूल्स इमेज के किसी खास हिस्से को अलग (Isolate) करते हैं ताकि केवल उसी हिस्से पर एडिटिंग, रंगाई या कटिंग की जा सके; इनमें ज्यामितीय Marquee टूल्स, फ्रीहैंड Lasso टूल्स और रंग-आधारित Magic Wand टूल्स शामिल हैं।",
    "simpleWords": "जैसे दर्जी कपड़े का एक खास हिस्सा कैंची से काटने के लिए पहले उस पर चॉक से निशान लगाता है, वैसे ही सिलेक्शन टूल्स फोटो के किसी हिस्से को चुनकर बाकी फोटो को सुरक्षित रखते हैं।",
    "whyImportant": "बिना सिलेक्शन के आप फोटो में से किसी व्यक्ति को बैकग्राउंड से अलग नहीं कर सकते और न ही केवल चेहरे का रंग सुधार सकते हैं।",
    "detailedExplanation": "### 1. Classification of Photo Editing Selection Tools\nSelection tools isolate specific regions of an image so modifications (adjustments, fills, cut/copy) affect only the selected pixels:\n\n1. **Geometric Marquee Tools:**\n   - **Rectangular Marquee:** Selects rectangular or square bounding areas (holding `Shift` constrains aspect ratio).\n   - **Elliptical Marquee:** Selects circular and oval regions.\n2. **Freehand Lasso Tools:**\n   - **Standard Lasso:** Freeform hand-drawn selection outline.\n   - **Polygonal Lasso:** Straight-line segment selections, ideal for geometric objects.\n   - **Magnetic Lasso:** Automatically snaps to contrasting object edges.\n3. **Color-Based Selection Tools:**\n   - **Magic Wand Tool:** Selects contiguous areas of similar color tone based on a **Tolerance** threshold (typically 0–255).\n   - **Quick Selection Tool:** Paints a selection that automatically finds and follows edges.",
    "syntax": "Selection Shortcuts:\nCtrl + D         : Deselect (हटाना)\nCtrl + Shift + I : Invert Selection (उलटना)\nShift + Selection: Add to Selection (+)\nAlt + Selection  : Subtract from Selection (-)",
    "codeExample": "<!-- Visual Representation of Selection Tool Concepts -->\n<div style=\"display:flex; gap:15px; font-family:sans-serif;\">\n  <div style=\"border:2px dashed #0284c7; padding:15px; border-radius:4px; text-align:center;\">\n    <b>Marquee Tool</b><br>[ Rectangular Grid ]\n  </div>\n  <div style=\"border:2px dashed #16a34a; padding:15px; border-radius:50%; text-align:center;\">\n    <b>Elliptical</b><br>( Circular )\n  </div>\n  <div style=\"border:2px dashed #d97706; padding:15px; border-radius:4px; text-align:center;\">\n    <b>Magic Wand</b><br>Single Click Color\n  </div>\n</div>",
    "outputExplanation": "स्क्रीन पर डैश वाली बॉर्डर (Marching Ants) के रूप में सिलेक्शन का दृश्यमान मॉडल प्रदर्शित होगा।",
    "realWorldAnalogy": "Marquee कुकी-कटर जैसा है जो निश्चित आकार काटता है; Lasso कैंची जैसा है जिसे आप हाथ से घुमाते हैं; और Magic Wand चुंबक जैसा है जो एक ही रंग के लोहे के कणों को एक बार में खींच लेता है।",
    "importantPoints": [
      "Magic Wand रंग के आधार पर पिक्सल्स चुनता है।",
      "Tolerance मान बढ़ाने से अधिक रंगों के शेड्स चुने जाते हैं।",
      "Deselect का शॉर्टकट Ctrl + D है।",
      "सिलेक्शन को उलटने (Invert) का शॉर्टकट Ctrl + Shift + I है।"
    ],
    "commonMistakes": [
      "सिलेक्शन पूरा होने के बाद उसे Deselect (Ctrl + D) करना भूल जाना (जिससे बाकी इमेज पर कोई भी ब्रश या टूल काम नहीं करता)।"
    ],
    "examPerspective": "Magic Wand के कार्य, Tolerance एट्रिब्यूट, और Ctrl+D (Deselect) शॉर्टकट पर परीक्षा में बार-बार प्रश्न पूछे जाते हैं।",
    "quickRevision": "Marquee (चौकोर/गोल), Lasso (फ्रीहैंड/पॉलीगोनल/मैग्नेटिक), Magic Wand (एक क्लिक में समान रंग)। Deselect = Ctrl + D.",
    "relatedTopics": [
      "features-of-photo-editing",
      "paint-tools",
      "transform-tools"
    ],
    "practiceTask": "फोटो एडिटर खोलें, एक सफेद बैकग्राउंड वाली तस्वीर लें और Magic Wand से सफेद बैकग्राउंड को एक क्लिक में डिलीट करें।"
  },
  {
    "id": "u7-t3",
    "slug": "paint-tools",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Paint Tools (Brush, Pencil, Gradient, Paint Bucket, Eraser)",
    "hindiTitle": "पेंट टूल्स (Brush, Pencil, Gradient, Paint Bucket, Eraser, Clone Stamp)",
    "definitionEnglish": "Paint tools in photo editing software apply color, textures, and gradient transitions to pixels, encompassing the Brush tool (soft anti-aliased strokes), Pencil tool (hard aliased strokes), Paint Bucket (solid flood fill), Gradient tool (smooth blending of multiple colors), Eraser tool, and Clone Stamp tool (pixel duplication).",
    "definitionHindi": "फोटो एडिटिंग में पेंट टूल्स पिक्सल्स पर रंग, टेक्सचर और ग्रेडिएंट लागू करते हैं; इनमें Brush टूल (मुलायम स्ट्रोक्स), Pencil टूल (कठोर स्ट्रोक्स), Paint Bucket (ठोस रंग भरना), Gradient टूल (दो या अधिक रंगों का क्रमिक मिश्रण), Eraser टूल, और Clone Stamp टूल (पिक्सेल कॉपी) शामिल हैं।",
    "simpleWords": "यह डिजिटल कैनवास के रंग-बिरंगे ब्रश, पेंसिल, बाल्टी और रबर हैं। यदि पूरी दीवार को एक रंग में रंगना हो तो पेंट बकेट लें, दो रंगों का सुंदर शेड बनाना हो तो ग्रेडिएंट लें, और किसी चेहरे के दाग-धब्बे मिटाने हों तो क्लोन स्टैम्प टूल लें।",
    "whyImportant": "वेब बैनर डिजाइन करने, बटन बैकग्राउंड तैयार करने और तस्वीरों को रीटच करने के लिए पेंट टूल्स का ज्ञान अनिवार्य है।",
    "detailedExplanation": "### 1. Standard Digital Painting Tools\n1. **Brush Tool (`B`):** Paints smooth, soft-edged or textured strokes with customizable size, hardness, opacity, and flow.\n2. **Pencil Tool:** Draws hard-edged, pixelated lines without anti-aliasing.\n3. **Gradient Tool (`G`):** Fills selections with a smooth linear, radial, angle, reflected, or diamond transition between two or more colors.\n4. **Paint Bucket Tool:** Fills contiguous areas of similar color tone with the selected foreground color.\n5. **Eraser Tools:**\n   - **Standard Eraser:** Replaces pixels with the background color (on background layers) or transparent pixels (on standard layers).\n   - **Background Eraser:** Samples color at the crosshair and erases matching colors to transparency.",
    "syntax": "Key Paint Shortcuts:\nB             : Brush Tool\nG             : Gradient / Paint Bucket Tool\nE             : Eraser Tool\nS             : Clone Stamp Tool\n[ and ]       : Decrease / Increase Brush Size\nAlt + Click   : Sample Source for Clone Stamp",
    "codeExample": "<!-- Demonstrating CSS simulation of Gradient & Brush Effects -->\n<div style=\"width: 100%; height: 80px; \n            background: linear-gradient(90deg, #0284c7, #0d9488, #16a34a); \n            border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;\">\n  CSS Linear Gradient (Simulating Gradient Tool in Web Design)\n</div>",
    "outputExplanation": "स्क्रीन पर नीले से हरे रंग में क्रमिक रूप से बदलती हुई एक सुंदर ग्रेडिएंट पट्टी दिखेगी।",
    "realWorldAnalogy": "ब्रश टूल वाटरकलर ब्रश जैसा है; पेंसिल टूल मार्कर पेन जैसा है; पेंट बकेट रंग की बाल्टी उड़ेलने जैसी है; और क्लोन स्टैम्प कार्बन पेपर से हूबहू नकल उतारने जैसा है।",
    "importantPoints": [
      "Brush टूल के किनारे मुलायम होते हैं जबकि Pencil के किनारे कठोर होते हैं।",
      "Gradient दो या अधिक रंगों का क्रमिक मिश्रण बनाता है।",
      "Clone Stamp टूल Alt + Click द्वारा नमूना लेकर काम करता है।",
      "ब्रश का आकार बड़ा करने के लिए ']' और छोटा करने के लिए '[' का उपयोग होता है।"
    ],
    "commonMistakes": [
      "Clone Stamp टूल को बिना Alt+Click के सीधे चलाने की कोशिश करना (सॉफ्टवेयर एरर देगा कि 'पहले नमूना बिंदु चुनें')।"
    ],
    "examPerspective": "Clone Stamp टूल का उपयोग (दाग-धब्बे हटाना/कॉपी करना), Alt+Click की भूमिका, और Gradient के प्रकारों पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "Brush (मुलायम), Pencil (कठोर), Paint Bucket (ठोस रंग), Gradient (मिश्रित रंग), Clone Stamp (Alt+Click से पिक्सेल डुप्लीकेशन)।",
    "relatedTopics": [
      "features-of-photo-editing",
      "selection-tools",
      "transform-tools"
    ],
    "practiceTask": "एक 3-रंगों वाला लीनियर ग्रेडिएंट बैकग्राउंड तैयार करें और उस पर सफेद टेक्स्ट लिखें।"
  },
  {
    "id": "u7-t4",
    "slug": "transform-tools",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Transform Tools (Scale, Rotate, Skew, Flip, Crop)",
    "hindiTitle": "ट्रांसफॉर्म टूल्स (Scale, Rotate, Skew, Flip, Crop)",
    "definitionEnglish": "Transform tools alter the physical geometry, orientation, dimensions, and bounding boundaries of image elements or layers, including Scale (resizing), Rotate (angling), Skew (slanting), Flip (mirroring horizontally/vertically), and Crop (trimming outer canvas areas).",
    "definitionHindi": "ट्रांसफॉर्म टूल्स इमेज एलिमेंट्स या लेयर्स की भौतिक ज्यामिति, दिशा, आकार और सीमाओं को बदलते हैं; इनमें Scale (आकार बदलना), Rotate (घुमाना), Skew (तिरछा करना), Flip (उलटना/दर्पण छवि), और Crop (अवांछित किनारों को काटना) शामिल हैं।",
    "simpleWords": "फोटो को छोटा-बड़ा करना (Scale), आड़ा-तिरछा घुमाना (Rotate), आईने की तरह उल्टा करना (Flip), और फालतू किनारे काटकर फोटो का मुख्य हिस्सा निकालना (Crop) ट्रांसफॉर्म कहलाता है।",
    "whyImportant": "वेबसाइट के बैनर का सही साइज तय करने और उत्पादों को सही एंगल में दिखाने के लिए ट्रांसफॉर्म टूल्स का दैनिक उपयोग होता है।",
    "detailedExplanation": "### 1. Essential Geometric Transformation Operations\n1. **Scale:** Enlarges or shrinks an image layer horizontally and vertically (holding `Shift` locks proportions).\n2. **Rotate:** Spins the layer around a designated pivot center point by specified degree angles.\n3. **Skew:** Slants the layer horizontally or vertically along an axis.\n4. **Distort & Perspective:** Manipulates corner handles independently to simulate 3D vanishing points.\n5. **Flip Horizontal / Flip Vertical:** Creates a mirrored reflection along the X or Y axis.\n6. **Crop Tool (`C`):** Trims away unwanted outer canvas areas to reframe the composition and change aspect ratio.",
    "syntax": "Key Transform Shortcuts:\nCtrl + T     : Free Transform (Scale & Rotate)\nC            : Crop Tool\nEnter        : Apply Transform\nEsc          : Cancel Transform\nShift + Drag : Maintain Aspect Ratio",
    "codeExample": "<!-- Demonstrating CSS Transform Equivalents -->\n<div style=\"display: flex; gap: 20px; padding: 20px; font-family: sans-serif;\">\n  <div style=\"padding: 10px; background: #0284c7; color: white; transform: rotate(-10deg);\">\n    Rotated -10deg\n  </div>\n  <div style=\"padding: 10px; background: #16a34a; color: white; transform: scale(1.15);\">\n    Scaled 1.15x\n  </div>\n  <div style=\"padding: 10px; background: #d97706; color: white; transform: skewX(-15deg);\">\n    Skewed -15deg\n  </div>\n</div>",
    "outputExplanation": "स्क्रीन पर एक बॉक्स थोड़ा घूमा हुआ दिखेगा, दूसरा बड़ा दिखेगा, और तीसरा तिरछा झुका हुआ दिखेगा।",
    "realWorldAnalogy": "Crop कैंची से फोटो के किनारे काटना है; Scale फोटोकॉपी को 50% छोटा करना है; और Flip फोटो को आईने के सामने रखकर उल्टी छवि देखना है।",
    "importantPoints": [
      "Free Transform का शॉर्टकट Ctrl + T है।",
      "Shift कुंजी दबाकर खींचने से आस्पेक्ट रेश्यो नहीं बिगड़ता।",
      "Crop टूल पूरी इमेज के कैनवास को छोटा करता है।",
      "Flip Horizontal आईने जैसा बाएँ-दाएँ का प्रतिबिंब बनाता है।"
    ],
    "commonMistakes": [
      "बिना Shift दबाए इमेज को खींचना (जिससे व्यक्ति की फोटो चपटी या बहुत लंबी होकर विकृत हो जाती है)।"
    ],
    "examPerspective": "Free Transform का शॉर्टकट (Ctrl + T), Crop टूल का उद्देश्य, और Flip Horizontal vs Vertical में अंतर पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "Ctrl+T = Free Transform; Scale = आकार; Rotate = घुमाव; Skew = झुकाव; Flip = दर्पण; Crop = कैनवास काटना।",
    "relatedTopics": [
      "features-of-photo-editing",
      "selection-tools",
      "layers"
    ],
    "practiceTask": "एक तस्वीर को Free Transform (Ctrl + T) करके 45 डिग्री पर घुमाएं और उसका Flip Horizontal करें।"
  },
  {
    "id": "u7-t5",
    "slug": "text-tool",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Text Tool",
    "hindiTitle": "टेक्स्ट टूल (Text Tool & Typography in Photo Editing)",
    "definitionEnglish": "The Text Tool (T) in photo editing software creates vector-based type layers containing editable typography, supporting font family selection, point sizes, text color, alignment, tracking, kerning, leading, and anti-aliasing modes (None, Sharp, Crisp, Strong, Smooth).",
    "definitionHindi": "फोटो एडिटिंग सॉफ्टवेयर में टेक्स्ट टूल (T) संपादन योग्य टाइपोग्राफी युक्त वेक्टर-आधारित टाइप लेयर्स बनाता है, जो फॉन्ट फैमिली चयन, साइज, रंग, संरेखण, और एंटी-अलियासिंग मोड्स (Sharp, Crisp, Strong, Smooth) का समर्थन करता है।",
    "simpleWords": "फोटो के ऊपर सुंदर अक्षरों में नाम, स्लोगन या विज्ञापन की लाइनें लिखने के लिए टेक्स्ट टूल (T) का उपयोग किया जाता है। खास बात यह है कि टेक्स्ट हमेशा अपनी एक नई स्वतंत्र लेयर पर बनता है।",
    "whyImportant": "वेब बैनर्स, पोस्टर, थंबनेल और प्रमोशनल ग्राफिक्स में टेक्स्ट ही मुख्य संदेश देता है।",
    "detailedExplanation": "### 1. Working with Digital Typography in Image Editors\nThe Text Tool (`T`) creates vector-based editable type layers above raster pixel layers:\n- **Font Family & Typeface:** Selects typography (Sans-serif, Serif, Monospace, Display).\n- **Font Size & Leading:** Controls character height (pt/px) and line spacing.\n- **Tracking & Kerning:**\n  - **Kerning:** Adjusts the space between specific individual character pairs (e.g., 'AV', 'To').\n  - **Tracking:** Adjusts the overall uniform spacing across an entire block of text.\n- **Anti-Aliasing:** Smooths jagged pixel staircasing along letter edges (`Sharp`, `Crisp`, `Strong`, `Smooth`).\n- **Rasterizing Text:** Converts vector font outlines into raw raster pixels (making it uneditable as text, but enabling direct filter painting).",
    "syntax": "Text Tool Controls:\nFont Family : Arial / Montserrat / Inter\nFont Size   : 36 pt\nAnti-alias  : Smooth / Sharp\nTracking    : Character spacing",
    "codeExample": "<!-- Demonstrating Typography in Web Graphics -->\n<div style=\"background:#0f172a; padding:30px; border-radius:8px; text-align:center;\">\n  <h1 style=\"color:#38bdf8; font-family:'Inter', sans-serif; letter-spacing:2px; margin:0; text-shadow:0 2px 8px rgba(56,189,248,0.4);\">\n    NIELIT O-LEVEL GRAPHICS\n  </h1>\n  <p style=\"color:#94a3b8; font-size:14px; margin-top:8px;\">\n    Rendered with smooth anti-aliasing and letter-spacing\n  </p>\n</div>",
    "outputExplanation": "गहरे नीले बैकग्राउंड पर चमकदार स्काई-ब्लू रंग में स्मूथ किनारों वाला सुंदर हेडिंग टेक्स्ट दिखेगा।",
    "realWorldAnalogy": "जैसे किसी पेंटिंग पर कांच की एक अलग पारदर्शी शीट रखकर उस पर मार्कर से स्लोगन लिखा जाए, ताकि पेंटिंग भी बची रहे और स्लोगन भी सुंदर दिखे।",
    "importantPoints": [
      "टेक्स्ट टूल का शॉर्टकट 'T' होता है।",
      "टेक्स्ट जोड़ने पर स्वतः एक नई टाइप लेयर बनती है।",
      "Anti-aliasing अक्षरों के किनारों को चिकना और पठनीय बनाता है।"
    ],
    "commonMistakes": [
      "टेक्स्ट को इमेज के साथ मर्ज (Rasterize/Flatten) कर देना, जिससे बाद में स्पेलिंग सुधारना असंभव हो जाता है।"
    ],
    "examPerspective": "Anti-aliasing की परिभाषा, टेक्स्ट टूल का शॉर्टकट (T), और टाइप लेयर के स्वतः बनने की प्रक्रिया पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "टेक्स्ट टूल (T) स्वतंत्र लेयर पर संपादन योग्य टेक्स्ट बनाता है। Anti-aliasing अक्षरों के किनारों को चिकना रखता है।",
    "relatedTopics": [
      "layers",
      "features-of-photo-editing",
      "transform-tools"
    ],
    "practiceTask": "एक फोटो पर टेक्स्ट टूल से 'Web Designing 2026' लिखें और उसका फॉन्ट, रंग और साइज बदलकर देखें।"
  },
  {
    "id": "u7-t6",
    "slug": "layers",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Layers (Stacking, Opacity, Masks)",
    "hindiTitle": "लेयर्स (Layers) की अवधारणा, स्टैकिंग, अपारदर्शिता एवं मास्क",
    "definitionEnglish": "Layers are transparent sheets stacked on top of one another that hold distinct elements of an artwork independently, allowing non-destructive editing of individual components without altering adjacent graphics, controlled via stacking order, visibility (eye icon), opacity (0-100%), blend modes, and layer masks.",
    "definitionHindi": "लेयर्स (Layers) एक-दूसरे के ऊपर रखी गई पारदर्शी शीटों की तरह होती हैं जो किसी चित्र के अलग-अलग तत्वों को स्वतंत्र रूप से धारण करती हैं; यह आसपास के ग्राफिक्स को नुकसान पहुंचाए बिना किसी भी हिस्से को एडिट करने, स्टैकिंग क्रम, दृश्यता (आंख का आइकॉन), अपारदर्शिता (0-100%) और लेयर मास्क की सुविधा देती हैं।",
    "simpleWords": "मान लीजिए आपके पास 3 पारदर्शी प्लास्टिक की शीटें हैं। सबसे नीचे वाली पर आपने पहाड़ बनाया, बीच वाली पर पेड़ बनाया, और सबसे ऊपर वाली पर सूरज बनाया। जब तीनों एक साथ देखते हैं तो पूरा चित्र दिखता है। यदि पेड़ मिटाना हो तो सिर्फ बीच की शीट मिटाएंगे, पहाड़ और सूरज पर कोई असर नहीं पड़ेगा!",
    "whyImportant": "लेयर्स फोटो एडिटिंग की सबसे क्रांतिकारी और महत्वपूर्ण अवधारणा है। बिना लेयर्स के कोई भी पेशेवर ग्राफिक्स का निर्माण संभव नहीं है।",
    "detailedExplanation": "### 1. The Power of Non-Destructive Layer Stacking\nLayers are transparent sheets stacked on top of one another, enabling developers and designers to edit individual graphic elements independently without modifying the underlying background pixels.\n\n### 2. Core Layer Concepts\n1. **Layer Hierarchy & Stacking Order:** Layers higher in the Layers panel render on top of lower layers.\n2. **Layer Opacity:** Controls transparency (0% = completely invisible, 100% = fully opaque).\n3. **Blending Modes:** Mathematical algorithms determining how layer pixels blend with underlying layers (e.g., `Multiply`, `Screen`, `Overlay`, `Soft Light`).\n4. **Layer Masks:** Uses grayscale painting to reveal (White), hide (Black), or partially show (Gray) layer contents without permanently deleting pixels.\n5. **Adjustment Layers:** Applies color and tone corrections to all layers below without altering the original source pixels.",
    "syntax": "Layer Anatomy:\n[ Eye Icon ] [ Layer Thumbnail ] Layer Name [ Opacity: 100% ]\nStack Order:\nTop Layer    (Foreground: Text)\nMiddle Layer (Subject: Person)\nBottom Layer (Background: Nature)",
    "codeExample": "<!-- Demonstrating Stacking Order with CSS Layers (z-index) -->\n<div style=\"position: relative; width: 250px; height: 120px; font-family: sans-serif;\">\n  <!-- Bottom Layer -->\n  <div style=\"position: absolute; width: 100%; height: 100%; background: #0284c7; border-radius: 8px; z-index: 1;\">\n    <span style=\"color: white; padding: 10px; display: inline-block;\">Layer 1: Background</span>\n  </div>\n  <!-- Top Layer (Higher Stacking Order) -->\n  <div style=\"position: absolute; top: 30px; left: 30px; padding: 10px; background: #fef08a; border: 2px solid #ca8a04; border-radius: 6px; z-index: 2;\">\n    <b>Layer 2: Foreground Card</b>\n  </div>\n</div>",
    "outputExplanation": "पीली लेयर नीली लेयर के ऊपर दिखेगी क्योंकि उसका स्टैकिंग ऑर्डर (z-index) अधिक है।",
    "realWorldAnalogy": "एनीमेशन स्टूडियो में पारदर्शी सेल्यूलॉयड (Cel) शीटों पर कार्टून कैरेक्टर को बैकग्राउंड सीन के ऊपर रखकर शूट किया जाता है, ताकि कैरेक्टर बदलते समय बैकग्राउंड दोबारा न बनाना पड़े।",
    "importantPoints": [
      "लेयर्स पारदर्शी शीटों की तरह काम करती हैं।",
      "आंख (Eye) का आइकॉन लेयर की दृश्यता को ऑन या ऑफ करता है।",
      "लेयर पैनल में सबसे ऊपर वाली लेयर स्क्रीन पर सबसे आगे दिखाई देती है।",
      "Opacity 0% से 100% के बीच होती है।"
    ],
    "commonMistakes": [
      "गलत लेयर चुनकर ब्रश चला देना (हमेशा चेक करें कि लेयर पैनल में सही लेयर नीले रंग में हाइलाइट है)।",
      "सभी लेयर्स को बहुत जल्दी 'Flatten' कर देना (जिससे बाद में अलग-अलग एलिमेंट्स को एडिट नहीं किया जा सकता)।"
    ],
    "examPerspective": "लेयर्स की परिभाषा, स्टैकिंग ऑर्डर, Opacity का अर्थ, और आंख के आइकॉन की भूमिका पर हर साल प्रश्न पूछे जाते हैं।",
    "quickRevision": "लेयर्स पारदर्शी शीटें हैं जो स्वतंत्र एडिटिंग देती हैं। आँख आइकॉन = दृश्यता; स्टैक ऑर्डर = आगे-पीछे का क्रम; Opacity = पारदर्शिता।",
    "relatedTopics": [
      "text-tool",
      "features-of-photo-editing",
      "filters"
    ],
    "practiceTask": "एक फोटो एडिटर में 2 लेयर्स बनाएं: नीचे रंग भरें और ऊपर टेक्स्ट लिखें, फिर ऊपर वाली लेयर की Opacity 50% करके देखें।"
  },
  {
    "id": "u7-t7",
    "slug": "brightness-contrast",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Brightness / Contrast",
    "hindiTitle": "ब्राइटनेस एवं कंट्रास्ट (Tonal Range Adjustments)",
    "definitionEnglish": "Brightness and Contrast adjustments control the overall tonal range of an image: Brightness shifts the overall luminance (making all pixels uniformly lighter or darker), while Contrast adjusts the separation between the darkest shadows and the brightest highlights.",
    "definitionHindi": "ब्राइटनेस और कंट्रास्ट एडजस्टमेंट्स किसी छवि की समग्र टोनल रेंज को नियंत्रित करते हैं: ब्राइटनेस समग्र चमक को बढ़ाती या घटाती है (सभी पिक्सल्स को समान रूप से हल्का या गहरा करना), जबकि कंट्रास्ट सबसे गहरे छाया क्षेत्रों और सबसे चमकीले हाइलाइट्स के बीच के अंतर को बढ़ाता है।",
    "simpleWords": "ब्राइटनेस का मतलब है कमरे की लाइट तेज या मद्धम करना (पूरी फोटो गोरी या काली होना)। कंट्रास्ट का मतलब है काले को और काला करना और सफेद को और सफेद करना ताकि तस्वीर बिल्कुल कुरकुरी और साफ दिखे।",
    "whyImportant": "कम रोशनी में खींची गई धुंधली तस्वीरों को वेबसाइट के लिए चमकीला और पेशेवर बनाने का यह पहला कदम है।",
    "detailedExplanation": "### 1. Adjusting Luminance and Contrast\n1. **Brightness:** Adjusts the overall tonal lightness or darkness of an image by shifting pixel values uniformly up or down.\n2. **Contrast:** Enhances or diminishes the distinction between light and dark areas.\n   - **High Contrast:** Bright highlights become purer white, shadows become deeper black, creating punchy, dramatic visuals.\n   - **Low Contrast:** Reduces the distance between light and dark tones, producing a softer, flatter, muted image.",
    "syntax": "Tonal Adjustment Range:\nBrightness: -100 to +100\nContrast  : -100 to +100\nIdeal: Moderate positive boost (+15 Brightness, +20 Contrast)",
    "codeExample": "<!-- Demonstrating CSS Filter Equivalents for Brightness & Contrast -->\n<div style=\"display:flex; gap:15px; font-family:sans-serif;\">\n  <div style=\"padding:15px; background:#0284c7; color:white; border-radius:6px;\">\n    Normal (100%)\n  </div>\n  <div style=\"padding:15px; background:#0284c7; color:white; border-radius:6px; filter: brightness(1.4);\">\n    High Brightness (140%)\n  </div>\n  <div style=\"padding:15px; background:#0284c7; color:white; border-radius:6px; filter: contrast(1.6);\">\n    High Contrast (160%)\n  </div>\n</div>",
    "outputExplanation": "सामान्य बॉक्स के मुकाबले दूसरा बॉक्स अधिक चमकदार दिखेगा और तीसरा बॉक्स गहरे कंट्रास्ट में दिखेगा।",
    "realWorldAnalogy": "ब्रश से पेंटिंग करते समय पूरे कैनवास पर थोड़ा सा सफेद रंग पोत देना ब्राइटनेस बढ़ाना है; और काले बॉर्डर को और गहरा काला कर देना कंट्रास्ट बढ़ाना है।",
    "importantPoints": [
      "ब्राइटनेस ओवरऑल लाइट को नियंत्रित करती है।",
      "कंट्रास्ट डार्क और लाइट पिक्सल्स के अंतर को बढ़ाता है।",
      "CSS में इसे `filter: brightness()` और `filter: contrast()` से लागू किया जा सकता है।"
    ],
    "commonMistakes": [
      "केवल ब्राइटनेस बहुत ज्यादा बढ़ा देना जिससे फोटो की सारी डिटेल उड़ जाए (हमेशा ब्राइटनेस के साथ थोड़ा कंट्रास्ट भी बढ़ाना चाहिए)।"
    ],
    "examPerspective": "ब्राइटनेस और कंट्रास्ट की परिभाषा, दोनों के प्रभाव, और छवि सुधार में उनकी भूमिका पर वस्तुनिष्ठ प्रश्न आते हैं।",
    "quickRevision": "ब्राइटनेस = पूरी छवि की समग्र चमक (हल्का/गहरा); कंट्रास्ट = काले और सफेद का अलगाव (क्रिसपनेस)।",
    "relatedTopics": [
      "improve-colors-and-tone",
      "filters",
      "features-of-photo-editing"
    ],
    "practiceTask": "एक डार्क फोटो लें और फोटो एडिटर में ब्राइटनेस +20 और कंट्रास्ट +15 करके अंतर देखें।"
  },
  {
    "id": "u7-t8",
    "slug": "improve-colors-and-tone",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Improve Colors and Tone (Levels, Curves, Hue/Saturation)",
    "hindiTitle": "कलर्स एवं टोन सुधारना (Levels, Curves, Hue/Saturation, Color Balance)",
    "definitionEnglish": "Improving colors and tone involves advanced non-linear tonal adjustments using Levels (histogram-based input/output black, midtone, and white points), Curves (precise tone curve mapping across 256 tonal levels), Hue/Saturation (adjusting color tint, purity, and lightness), and Color Balance.",
    "definitionHindi": "कलर्स और टोन सुधारने का तात्पर्य उन्नत नॉन-लीनियर टोनल एडजस्टमेंट्स से है; इसमें Levels (हिस्टोग्राम पर आधारित शैडो, मिडटोन और हाइलाइट्स), Curves (256 टोनल स्तरों पर सटीक कर्व मैपिंग), Hue/Saturation (रंग का टिंट, शुद्धता और चमक) और Color Balance शामिल हैं।",
    "simpleWords": "यह ब्राइटनेस से भी आगे का पेशेवर टूल है। यदि किसी फोटो में पीलापन ज्यादा है तो कलर बैलेंस से उसे ठीक करें, यदि रंग फीके हैं तो सैचुरेशन बढ़ाकर चटकीला बनाएं, और लेवल्स से शैडो और हाइलाइट को संतुलित करें।",
    "whyImportant": "पेशेवर वेब डिजाइन में ई-कॉमर्स उत्पादों (जैसे कपड़ों और जूतों) के बिल्कुल असली रंग दिखाने के लिए कलर करेक्शन अनिवार्य होता है।",
    "detailedExplanation": "### 1. Professional Tonal Correction Tools\n1. **Levels (`Ctrl + L`):**\n   - Displays a tonal Histogram showing Shadow (Black point), Midtone (Gamma), and Highlight (White point) distributions.\n2. **Curves (`Ctrl + M`):**\n   - The most powerful and precise tone tool. An S-curve steepens contrast, while individual RGB curves correct color casts.\n3. **Hue / Saturation (`Ctrl + U`):**\n   - **Hue:** The actual color wavelength (0° to 360° color wheel).\n   - **Saturation:** The purity or intensity of color (0% = grayscale, 100% = vivid).\n   - **Lightness:** The relative brightness value.",
    "syntax": "Color Adjustment Shortcuts:\nCtrl + L : Levels (हिस्टोग्राम)\nCtrl + M : Curves (कर्व मैपिंग)\nCtrl + U : Hue / Saturation\nCtrl + B : Color Balance",
    "codeExample": "<!-- Demonstrating CSS Hue-Rotate and Saturate -->\n<div style=\"display:flex; gap:15px; font-family:sans-serif;\">\n  <div style=\"padding:15px; background:#ef4444; color:white; border-radius:6px;\">\n    Original Red (Hue 0)\n  </div>\n  <div style=\"padding:15px; background:#ef4444; color:white; border-radius:6px; filter: hue-rotate(90deg);\">\n    Hue Shifted +90deg (Greenish)\n  </div>\n  <div style=\"padding:15px; background:#ef4444; color:white; border-radius:6px; filter: saturate(2.5);\">\n    Super Saturated (Vibrant)\n  </div>\n</div>",
    "outputExplanation": "मूल लाल रंग Hue बदलने पर हरा हो जाएगा, और सैचुरेशन बढ़ाने पर बेहद गाढ़ा और चमकीला हो जाएगा।",
    "realWorldAnalogy": "जैसे टीवी के रिमोट में कलर (Saturation) शून्य करने पर दूरदर्शन का ब्लैक-एंड-व्हाइट जमाना आ जाता है और बढ़ाने पर रंगीन दुनिया दिखती है।",
    "importantPoints": [
      "Levels का शॉर्टकट Ctrl + L है (हिस्टोग्राम आधारित)।",
      "Curves का शॉर्टकट Ctrl + M है।",
      "Hue/Saturation का शॉर्टकट Ctrl + U है।",
      "Saturation 0% करने से फोटो ग्रेस्केल (Black & White) बन जाती है।"
    ],
    "commonMistakes": [
      "Saturation बहुत ज्यादा बढ़ा देना जिससे लोगों के चेहरे लाल टमाटर जैसे अप्राकृतिक दिखने लगें।"
    ],
    "examPerspective": "Levels, Curves, Hue, Saturation की परिभाषा और उनके शॉर्टकट्स (Ctrl+L, Ctrl+M, Ctrl+U) पर परीक्षा में प्रश्न आते हैं।",
    "quickRevision": "Levels = हिस्टोग्राम बैलेंस (Ctrl+L); Curves = टोन मैपिंग (Ctrl+M); Hue = रंग का शेड; Saturation = रंग की शुद्धता (Ctrl+U).",
    "relatedTopics": [
      "brightness-contrast",
      "filters",
      "features-of-photo-editing"
    ],
    "practiceTask": "एक फोटो पर `Ctrl + U` खोलें और Saturation को -100 करके उसे ब्लैक-एंड-व्हाइट बनाएं।"
  },
  {
    "id": "u7-t9",
    "slug": "filters",
    "unit": 7,
    "unitSlug": "unit-7",
    "unitTitle": "Photo Editor",
    "title": "Filters (Blur, Sharpen, Noise, Artistic)",
    "hindiTitle": "फिल्टर्स (Blur, Sharpen, Noise, Artistic Effects)",
    "definitionEnglish": "Filters in photo editing software are algorithmic transformations applied to pixels to create visual enhancements, corrective fixes, or special artistic effects, categorized into Blur (Gaussian Blur), Sharpen (Unsharp Mask), Noise (Add/Reduce Noise), and Artistic/Stylize filters.",
    "definitionHindi": "फोटो एडिटिंग में फिल्टर्स पिक्सल्स पर लागू होने वाले ऐसे एल्गोरिदम हैं जो दृश्य सुधार, सुधारात्मक समाधान या विशेष कलात्मक प्रभाव पैदा करते हैं; इन्हें Blur (गॉसियन ब्लर), Sharpen (किनारों को तीखा करना), Noise (शोर जोड़ना/हटाना) और Artistic/Stylize फिल्टर्स में बांटा जाता है।",
    "simpleWords": "फिल्टर फोटो पर एक जादुई चश्मा लगाने जैसा है। यदि बैकग्राउंड को धुंधला (Blur) करके केवल व्यक्ति को चमकाना हो, या फोटो को तेल-रंग की पेंटिंग जैसा बनाना हो, तो फिल्टर्स का उपयोग किया जाता है।",
    "whyImportant": "वेबसाइट के बैकग्राउंड बैनर्स को ब्लर करने और उत्पाद तस्वीरों को शार्प करने के लिए फिल्टर्स अत्यंत आवश्यक हैं।",
    "detailedExplanation": "### 1. Special Effects and Artistic Filters\nFilters apply algorithmic mathematical transformations to pixel grids to enhance images or create artistic visual effects:\n1. **Blur Filters (Gaussian Blur, Motion Blur):** Smooths transitions, reduces noise, or simulates camera depth-of-field focus (bokeh).\n2. **Sharpen Filters (Unsharp Mask, Smart Sharpen):** Enhances edge contrast to make soft photographs appear crisper.\n3. **Noise Filters (Add Noise, Despeckle):** Adds film grain texture or cleans digital sensor artifacts.\n4. **Distortion Filters (Ripple, Twirl, Spherize):** Geometrically bends and warps pixel coordinate mappings.",
    "syntax": "Common Photo Filters:\nFilter -> Blur -> Gaussian Blur (Radius: 5px)\nFilter -> Sharpen -> Unsharp Mask\nFilter -> Noise -> Add Noise / Reduce Noise",
    "codeExample": "<!-- Demonstrating CSS Blur Filter Simulation -->\n<div style=\"position:relative; width:300px; height:120px; border-radius:8px; overflow:hidden; font-family:sans-serif;\">\n  <!-- Blurred Background Layer -->\n  <div style=\"position:absolute; width:100%; height:100%; \n              background: linear-gradient(45deg, #0284c7, #f43f5e); \n              filter: blur(8px); transform: scale(1.2);\">\n  </div>\n  <!-- Sharp Foreground Text -->\n  <div style=\"position:relative; z-index:2; padding:20px; color:white; text-align:center;\">\n    <h3 style=\"margin:0; text-shadow:0 2px 4px rgba(0,0,0,0.5);\">Sharp Text on Blurred BG</h3>\n    <p style=\"margin:4px 0 0 0; font-size:13px;\">Gaussian Blur Effect</p>\n  </div>\n</div>",
    "outputExplanation": "रंगीन बैकग्राउंड धुंधला (Blur) दिखेगा और उसके ऊपर लिखा सफेद टेक्स्ट बिल्कुल साफ और शार्प दिखेगा।",
    "realWorldAnalogy": "मोबाइल कैमरे का 'Portrait Mode' जो आपके पीछे के पेड़-पौधों को ब्लर कर देता है और केवल आपके चेहरे को शार्प रखता है, वही गॉसियन ब्लर फिल्टर का काम है।",
    "importantPoints": [
      "Gaussian Blur सबसे लोकप्रिय और प्राकृतिक ब्लर फिल्टर है।",
      "Unsharp Mask किनारों का कंट्रास्ट बढ़ाकर फोटो को शार्प करता है।",
      "CSS में `filter: blur(5px)` से सीधे वेबपेज पर ब्लर लगाया जा सकता है।"
    ],
    "commonMistakes": [
      "बहुत ज्यादा शार्पन (Over-sharpening) कर देना जिससे फोटो के किनारों पर सफेद बदसूरत लकीरें (Halo artifacts) दिखने लगें।"
    ],
    "examPerspective": "Gaussian Blur, Unsharp Mask, और Noise फिल्टर के उद्देश्य तथा उपयोग पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    "quickRevision": "Blur (धुंधलापन - Gaussian Blur); Sharpen (स्पष्टता - Unsharp Mask); Noise (दाने जोड़ना/हटाना); Artistic (कलात्मक प्रभाव)।",
    "relatedTopics": [
      "brightness-contrast",
      "improve-colors-and-tone",
      "layers"
    ],
    "practiceTask": "एक इमेज बैकग्राउंड पर CSS `filter: blur(4px)` लगाकर उसके ऊपर एक हेडिंग लिखकर देखें कि टेक्स्ट कितना साफ दिखता है।"
  }
];
