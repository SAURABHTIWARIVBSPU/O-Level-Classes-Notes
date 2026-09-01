// Unit 5: CSS Framework (W3.CSS) - Complete Topic Notes

export const unit5Topics = [
  {
    id: "u5-t1",
    slug: "website-development-using-w3-css",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "Web Site Development using W3.CSS Framework",
    hindiTitle: "W3.CSS फ्रेमवर्क का उपयोग कर वेबसाइट विकास",
    definitionEnglish: "Website development using W3.CSS leverages a standardized, pre-built, lightweight CSS framework developed by W3Schools to rapidly construct responsive, modern, mobile-first websites without writing custom CSS from scratch or relying on JavaScript dependencies.",
    definitionHindi: "W3.CSS फ्रेमवर्क का उपयोग कर वेबसाइट विकास का अर्थ है W3Schools द्वारा विकसित एक मानकीकृत, हल्के और रेडी-टू-यूज़ CSS फ्रेमवर्क का उपयोग करना, जिससे बिना शून्य से लंबी CSS लिखे और बिना किसी जावास्क्रिप्ट निर्भरता के आधुनिक, मोबाइल-फर्स्ट रिस्पॉन्सिव वेबसाइटें तेजी से बनाई जा सकती हैं।",
    simpleWords: "साधारण CSS में हर बटन, कार्ड और मेन्यू के लिए 20-20 लाइनें खुद लिखनी पड़ती हैं। W3.CSS में सब कुछ पहले से बना हुआ है; आपको केवल क्लास का नाम (जैसे `w3-container w3-blue`) लिखना है और तैयार सुंदर डिजाइन स्क्रीन पर आ जाता है!",
    whyImportant: "NIELIT O-Level पाठ्यक्रम में W3.CSS आधिकारिक रूप से निर्धारित फ्रेमवर्क है। यह Bootstrap से कहीं अधिक सरल, हल्का और छात्रों के लिए सीखने में आसान है।",
    detailedExplanation: `### 1. CSS फ्रेमवर्क क्या होता है?
- एक **CSS Framework** पहले से लिखी गई स्टाइलशीट का एक ऐसा तैयार पैकेज होता है जिसमें आम घटकों (बटन, फॉर्म, ग्रिड, टेबल, कार्ड्स) के लिए तैयार CSS क्लासेज मौजूद होती हैं।
- **फायदा:** विकास का समय 70% तक घट जाता है और वेबसाइट हर डिवाइस (स्मार्टफोन से लेकर 4K मॉनिटर) पर अपने आप सही दिखती है।

### 2. W3.CSS को अपने प्रोजेक्ट में कैसे जोड़ें:
- **विधि 1: आधिकारिक CDN (अनुशंसित):**
  \`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\`
- **विधि 2: लोकल डाउनलोड (ऑफलाइन अभ्यास हेतु):**
  - \`w3.css\` फाइल को डाउनलोड करके अपने प्रोजेक्ट के \`css/\` फोल्डर में रखें।
  - HTML में लिंक करें: \`<link rel="stylesheet" href="css/w3.css">\``,
    syntax: `<!-- Linking W3.CSS in HTML Head -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <title>First W3.CSS Webpage</title>
</head>
<body>
  <!-- Header Container -->
  <div class="w3-container w3-teal w3-center w3-padding-32">
    <h1>Built with W3.CSS Framework</h1>
    <p>Mobile-First, Responsive & Modern</p>
  </div>

  <!-- Content Card -->
  <div class="w3-container w3-margin-top">
    <div class="w3-card-4 w3-padding w3-light-grey">
      <h3>Why use W3.CSS?</h3>
      <p>It requires zero JavaScript, zero jQuery, and weighs only ~23 KB!</p>
      <button class="w3-button w3-blue w3-round">Get Started</button>
    </div>
  </div>
</body>
</html>`,
    outputExplanation: "बिना 1 लाइन भी खुद की CSS लिखे, एक पेशेवर टील रंग का हेडर, शैडो वाला कार्ड, और गोल कोनों वाला नीला बटन तैयार हो गया।",
    realWorldAnalogy: "कच्ची ईंटें और मसाला खुद बनाने के बजाय पहले से बने-बनाए रेडीमेड ब्लॉक्स (Lego Bricks) से तेजी से सुंदर मकान खड़ा करना।",
    importantPoints: [
      "W3.CSS को W3Schools द्वारा विकसित किया गया है।",
      "यह Pure CSS है (इसमें jQuery या JavaScript की कोई आवश्यकता नहीं)।",
      "इसकी मुख्य फाइल का साइज मात्र ~23 KB है।",
      "यह मोबाइल-फर्स्ट और पूरी तरह रिस्पॉन्सिव है।"
    ],
    commonMistakes: [
      "हेड सेक्शन में Viewport मेटा टैग लगाना भूल जाना (इसके बिना W3.CSS का रिस्पॉन्सिव ग्रिड मोबाइल पर सही काम नहीं करेगा)।"
    ],
    examPerspective: "W3.CSS का विकासकर्ता (W3Schools), इसकी शुद्ध CSS प्रकृति (No JS required), और CDN लिंक करने के तरीके पर परीक्षा में सीधे प्रश्न आते हैं।",
    quickRevision: "W3.CSS W3Schools द्वारा विकसित हल्का (~23KB) शुद्ध CSS फ्रेमवर्क है जो बिना JS के रिस्पॉन्सिव वेबसाइट तेजी से बनाता है।",
    relatedTopics: ["w3-css-intro", "w3-css-containers-and-panels", "w3-css-grid"],
    practiceTask: "W3.CSS के CDN लिंक का उपयोग करके एक रंगीन हेडर और 3 बटन वाला वेबपेज 5 मिनट में बनाएं।"
  },
  {
    id: "u5-t2",
    slug: "w3-css-intro",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Intro",
    hindiTitle: "W3.CSS का परिचय एवं Bootstrap से तुलना",
    definitionEnglish: "W3.CSS is an ultra-lightweight, high-performance, open-source CSS framework designed by W3Schools that provides cross-device responsiveness, standard styling classes, and UI components using 100% pure CSS with zero JavaScript dependencies.",
    definitionHindi: "W3.CSS W3Schools द्वारा डिज़ाइन किया गया एक अत्यंत हल्का, उच्च-प्रदर्शन वाला और ओपन-सोर्स CSS फ्रेमवर्क है, जो बिना किसी जावास्क्रिप्ट निर्भरता के 100% शुद्ध CSS का उपयोग करके क्रॉस-डिवाइस रिस्पॉन्सिवनेस और यूआई कंपोनेंट्स प्रदान करता है।",
    simpleWords: "Bootstrap एक भारी ट्रक जैसा है जिसे चलाने के लिए कई अतिरिक्त पुर्जे (JavaScript/jQuery) चाहिए। W3.CSS एक तेज स्पोर्ट्स साइकिल जैसी है जो बहुत हल्की (~23KB) है, जिसे कोई भी 1 दिन में सीख सकता है।",
    whyImportant: "परीक्षा में W3.CSS के फायदे और अन्य फ्रेमवर्क्स (विशेषकर Bootstrap) के मुकाबले इसकी श्रेष्ठता पर अक्सर 5 अंकों का प्रश्न पूछा जाता है।",
    detailedExplanation: `### W3.CSS बनाम Bootstrap की विस्तृत तुलना:
1. **JavaScript Dependency:**
   - **W3.CSS:** बिल्कुल शून्य (Pure CSS)। कोई jQuery या बाहरी स्क्रिप्ट नहीं चाहिए।
   - **Bootstrap:** ड्रॉपडाउन, मॉडल और अलर्ट्स चलाने के लिए JavaScript/Popper जरूरी होता है।
2. **File Size (फाइल का आकार):**
   - **W3.CSS:** मात्र **~23 KB** (अत्यंत तीव्र लोडिंग गति)।
   - **Bootstrap:** **~160+ KB** (CSS + JS मिलाकर)।
3. **Learning Curve (सीखने की सरलता):**
   - **W3.CSS:** बहुत आसान; क्लास के नाम सीधे और प्राकृतिक हैं (जैसे \`w3-red\`, \`w3-center\`, \`w3-card\`)।
   - **Bootstrap:** मध्यम; बहुत अधिक जटिल और गहरी क्लास संरचना।
4. **Browser Support:**
   - W3.CSS सभी आधुनिक ब्राउज़रों (Chrome, Firefox, Safari, Edge, Opera) में समान रूप से चलता है।`,
    syntax: `W3.CSS Class Naming Convention:
All W3.CSS classes begin with the "w3-" prefix.
Examples:
w3-container, w3-panel, w3-card, w3-row, w3-col, w3-red, w3-center`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body class="w3-light-grey">
  <div class="w3-container w3-blue w3-center">
    <h2>W3.CSS is Pure CSS</h2>
    <p>No jQuery. No JavaScript. High Speed.</p>
  </div>
</body>
</html>`,
    outputExplanation: "हल्के स्लेटी बैकग्राउंड पर एक सुंदर नीला बैनर दिखेगा जिसका टेक्स्ट केंद्र में संरेखित होगा।",
    realWorldAnalogy: "W3.CSS इंस्टेंट नूडल्स जैसा है—पैकेट खोलो और 2 मिनट में तैयार, बिना किसी तामझाम के।",
    importantPoints: [
      "W3.CSS की सभी क्लासेज 'w3-' प्रीफिक्स से शुरू होती हैं।",
      "यह पूरी तरह फ्री और ओपन-सोर्स है।",
      "Bootstrap की तुलना में यह काफी हल्का और तेज है।"
    ],
    commonMistakes: [
      "क्लास के नाम के आगे 'w3-' लगाना भूल जाना (उदा. `container` लिखने पर स्टाइल नहीं आएगी, `w3-container` लिखना अनिवार्य है)।"
    ],
    examPerspective: "प्रश्न: 'W3.CSS का मुख्य लाभ क्या है?' (Pure CSS, No JS needed), 'W3.CSS फाइल का आकार लगभग कितना होता है?' (~23 KB).",
    quickRevision: "W3.CSS शुद्ध CSS फ्रेमवर्क है। विशेषताएं: शून्य JS निर्भरता, छोटा आकार (~23KB), आसान क्लास नाम (w3-).",
    relatedTopics: ["website-development-using-w3-css", "w3css-vs-bootstrap", "w3-css-containers-and-panels"],
    practiceTask: "W3.CSS और Bootstrap के बीच 4 मुख्य अंतरों की तालिका बनाएं।"
  },
  {
    id: "u5-t3",
    slug: "w3-css-fonts-and-text",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Fonts and Text",
    hindiTitle: "W3.CSS फोंट्स एवं टेक्स्ट क्लासेज",
    definitionEnglish: "W3.CSS provides predefined classes for typography, text alignment, font sizes (from w3-tiny to w3-jumbo), font families (w3-serif), text opacity, and shadow effects to standardize textual presentation across web applications.",
    definitionHindi: "W3.CSS टाइपोग्राफी, टेक्स्ट संरेखण, फॉन्ट साइजेस (w3-tiny से लेकर w3-jumbo तक), फॉन्ट फैमिली (w3-serif), टेक्स्ट अपारदर्शिता और शैडो प्रभावों के लिए पूर्व-निर्धारित क्लासेज प्रदान करता है।",
    simpleWords: "W3.CSS में टेक्स्ट को छोटा, बड़ा या विशाल (Jumbo) करने के लिए, या बाएँ, बीच या दाएँ करने के लिए सिर्फ एक क्लास का नाम जोड़ना होता है।",
    whyImportant: "पठनीयता (Readability) और हेडिंग्स के आकार को बिना कस्टम CSS लिखे तुरंत नियंत्रित करने के लिए ये क्लासेज आवश्यक हैं।",
    detailedExplanation: `### 1. फॉन्ट साइज क्लासेज (Font Sizes):
- \`w3-tiny\`: 10px (अति छोटा)
- \`w3-small\`: 12px (छोटा)
- \`w3-medium\`: 15px (सामान्य डिफ़ॉल्ट)
- \`w3-large\`: 18px (बड़ा)
- \`w3-xlarge\`: 24px (अति बड़ा)
- \`w3-xxlarge\`: 36px
- \`w3-xxxlarge\`: 48px
- **\`w3-jumbo\`:** **64px** (विशालतम फॉन्ट - परीक्षा का प्रिय प्रश्न!)

### 2. टेक्स्ट संरेखण क्लासेज (Text Alignment):
- \`w3-left-align\`: बाईं ओर संरेखित।
- \`w3-center\`: केंद्र में संरेखित।
- \`w3-right-align\`: दाईं ओर संरेखित।
- \`w3-justify\`: दोनों तरफ बराबर (Justified)।

### 3. टेक्स्ट स्पेशल इफेक्ट्स:
- \`w3-wide\`: अक्षरों के बीच अधिक स्पेस (Letter Spacing)।
- \`w3-opacity\`: टेक्स्ट को हल्का पारदर्शी (Opacity 0.6) बनाना।`,
    syntax: `<p class="w3-center w3-large">Centered Large Text</p>
<h1 class="w3-jumbo w3-text-teal">Huge Title</h1>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body class="w3-container">
  <h1 class="w3-jumbo w3-text-indigo w3-center">JUMBO TITLE</h1>
  <p class="w3-xlarge w3-center">This is w3-xlarge text.</p>
  <p class="w3-large w3-left-align">This is w3-large left-aligned.</p>
  <p class="w3-small w3-opacity">This is w3-small text with w3-opacity.</p>
</body>
</html>`,
    outputExplanation: "स्क्रीन पर 64px का विशाल 'JUMBO TITLE' केंद्र में दिखेगा, उसके नीचे मध्यम और छोटे टेक्स्ट दिखेंगे।",
    realWorldAnalogy: "जैसे वर्ड प्रोसेसर में फॉन्ट साइज का ड्रॉपडाउन (12, 18, 24, 64) और अलाइनमेंट बटन होते हैं, W3.CSS की ये क्लासेज ठीक वही काम करती हैं।",
    importantPoints: [
      "W3.CSS में सबसे बड़ा फॉन्ट साइज w3-jumbo (64px) होता है।",
      "टेक्स्ट को सेंटर करने की क्लास w3-center है।",
      "टेक्स्ट कलर के लिए w3-text-colorname (उदा. w3-text-red) का उपयोग होता है।"
    ],
    commonMistakes: [
      "`w3-align-center` लिख देना (सही नाम `w3-center` है)।"
    ],
    examPerspective: "प्रश्न: 'W3.CSS में सबसे बड़े फॉन्ट साइज की क्लास कौन सी है?' (w3-jumbo), 'टेक्स्ट को केंद्र में संरेखित करने की क्लास कौन सी है?' (w3-center).",
    quickRevision: "फॉन्ट साइज: w3-tiny से w3-jumbo (64px)। संरेखण: w3-left-align, w3-center, w3-right-align, w3-justify.",
    relatedTopics: ["w3-css-colors", "w3-css-containers-and-panels", "w3-css-intro"],
    practiceTask: "एक वेबपेज बनाएं जिसमें `w3-jumbo` में अपना नाम और नीचे `w3-center` में अपनी क्लास लिखें।"
  },
  {
    id: "u5-t4",
    slug: "w3-css-colors",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Colors",
    hindiTitle: "W3.CSS कलर्स एवं कलर पैलेट्स",
    definitionEnglish: "W3.CSS provides an extensive palette of background color classes (w3-color), text color classes (w3-text-color), and interactive hover color classes (w3-hover-color), inspired by modern Material Design and contemporary fashion color trends.",
    definitionHindi: "W3.CSS बैकग्राउंड रंग क्लासेज (w3-color), टेक्स्ट रंग क्लासेज (w3-text-color) और इंटरएक्टिव हॉवर रंग क्लासेज (w3-hover-color) का एक समृद्ध संग्रह प्रदान करता है, जो आधुनिक मटीरियल डिजाइन और कलर पैलेट्स से प्रेरित हैं।",
    simpleWords: "किसी भी बॉक्स को लाल करने के लिए `w3-red`, टेक्स्ट को हरा करने के लिए `w3-text-green`, और माउस ले जाने पर पीला करने के लिए `w3-hover-yellow` लिख दें।",
    whyImportant: "वेबसाइट को जीवंत, आकर्षक और ब्रांड-अनुकूल बनाने के लिए रंगों का संयोजन सबसे प्रभावशाली कारक होता है।",
    detailedExplanation: `### W3.CSS के 3 मुख्य रंग समूह:
1. **Background Colors (\`w3-color\`):**
   - \`w3-red\`, \`w3-blue\`, \`w3-teal\`, \`w3-green\`, \`w3-indigo\`, \`w3-amber\`, \`w3-dark-grey\`, \`w3-black\`, \`w3-white\`।
2. **Text Colors (\`w3-text-color\`):**
   - \`w3-text-red\`, \`w3-text-blue\`, \`w3-text-white\`, \`w3-text-grey\`।
3. **Hover Colors (\`w3-hover-color\`):**
   - जब माउस एलिमेंट के ऊपर आए तब रंग बदलना:
   - \`w3-hover-blue\`, \`w3-hover-red\`, \`w3-hover-text-white\`।
4. **विशेष शेड्स (Shades):**
   - \`w3-light-grey\`, \`w3-pale-red\`, \`w3-pale-green\` (अलर्ट बॉक्सेज के लिए आदर्श हल्के रंग)।`,
    syntax: `<div class="w3-teal w3-text-white">Teal Background with White Text</div>
<button class="w3-button w3-blue w3-hover-green">Hover turns Green</button>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body class="w3-container w3-padding-16">
  <h2>W3.CSS Color Palette Showcase</h2>
  
  <div class="w3-panel w3-red"><h3>w3-red</h3></div>
  <div class="w3-panel w3-blue"><h3>w3-blue</h3></div>
  <div class="w3-panel w3-teal"><h3>w3-teal</h3></div>
  
  <p class="w3-text-indigo w3-large"><b>This is w3-text-indigo</b></p>
  
  <button class="w3-button w3-dark-grey w3-hover-teal w3-round">
    Hover Me (Turns Teal)
  </button>
</body>
</html>`,
    outputExplanation: "अलग-अलग रंगों के पैनल्स दिखेंगे और बटन पर माउस ले जाते ही वह स्लेटी से टील रंग में बदल जाएगा।",
    realWorldAnalogy: "जैसे किसी पेंटर के पास रंगों की रेडीमेड पैलेट होती है और वह ब्रश डुबोकर सीधे रंग लगा देता है, W3.CSS की ये क्लासेज तैयार रंग हैं।",
    importantPoints: [
      "बैकग्राउंड कलर के लिए सीधे w3-color (उदा. w3-red) लिखा जाता है।",
      "टेक्स्ट कलर के लिए w3-text-color (उदा. w3-text-red) लिखा जाता है।",
      "हॉवर पर रंग बदलने के लिए w3-hover-color का प्रयोग होता है।"
    ],
    commonMistakes: [
      "बैकग्राउंड के लिए `w3-bg-red` लिख देना (Bootstrap में `bg-` होता है, W3.CSS में केवल `w3-red` होता है)।"
    ],
    examPerspective: "प्रश्न: 'W3.CSS में टेक्स्ट को लाल रंग देने वाली क्लास कौन सी है?' (w3-text-red), 'हॉवर पर बैकग्राउंड बदलने की क्लास कौन सी है?' (w3-hover-color).",
    quickRevision: "बैकग्राउंड: w3-[color], टेक्स्ट: w3-text-[color], हॉवर: w3-hover-[color].",
    relatedTopics: ["w3-css-fonts-and-text", "w3-css-containers-and-panels", "w3-css-intro"],
    practiceTask: "एक ऐसा बटन बनाएं जो सामान्य अवस्था में पीला (`w3-amber`) हो और हॉवर पर लाल (`w3-hover-red`) हो जाए।"
  },
  {
    id: "u5-t5",
    slug: "w3-css-containers-and-panels",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Containers and Panels",
    hindiTitle: "W3.CSS कंटेनर्स (w3-container) एवं पैनल्स (w3-panel)",
    definitionEnglish: "The 'w3-container' class adds 16px left and right padding to any HTML container, serving as the foundational building block for all layouts, headers, and footers, while 'w3-panel' adds both 16px top/bottom margins and 16px left/right padding, designed for notes, alerts, and quotes.",
    definitionHindi: "'w3-container' क्लास किसी भी HTML कंटेनर में 16px दाएँ और बाएँ पैडिंग जोड़ती है और सभी लेआउट, हेडर और फुटर का मुख्य आधार है; जबकि 'w3-panel' 16px ऊपर/नीचे मार्जिन और 16px दाएँ/बाएँ पैडिंग दोनों जोड़ती है, जो नोट्स, अलर्ट और कोट्स के लिए बनाई गई है।",
    simpleWords: "w3-container और w3-panel में सिर्फ एक बड़ा अंतर है: container में ऊपर-नीचे मार्जिन नहीं होता (वह हेडर या फुटर के लिए एकदम सटकर बैठता है), जबकि panel में ऊपर-नीचे 16px का मार्जिन अपने आप आता है, जिससे वह अलर्ट बॉक्स की तरह अलग से चमकता है।",
    whyImportant: "यह W3.CSS का सबसे बुनियादी और परीक्षा में 100% पूछा जाने वाला अंतर है।",
    detailedExplanation: `### w3-container बनाम w3-panel का गहरा विश्लेषण:
| विशेषता | w3-container | w3-panel |
|:---|:---|:---|
| **Top & Bottom Margin** | **0px** (कोई मार्जिन नहीं) | **16px** (ऊपर-नीचे मार्जिन) |
| **Left & Right Padding** | **16px** | **16px** |
| **सर्वोत्तम उपयोग** | Header, Footer, Section, Grid Columns | Alert Box, Note, Warning, Callout |
| **कार्ड्स का आधार** | \`w3-card\` के साथ मिलकर कार्ड बनाता है | सीधे अलर्ट बॉक्स बनाता है |

### 2. कार्ड्स (\`w3-card\` और \`w3-card-4\`):
- जब कंटेनर या पैनल में ड्रॉप शैडो जोड़नी हो:
  - \`w3-card\`: 2 पिक्सेल की हल्की छाया।
  - \`w3-card-4\`: 4 पिक्सेल की गहरी सुंदर छाया (सर्वाधिक लोकप्रिय)।`,
    syntax: `<div class="w3-container w3-blue">
  <h2>Header Container (0px top/bottom margin)</h2>
</div>

<div class="w3-panel w3-yellow w3-border-left w3-border-amber">
  <p>Alert Panel (Has 16px top and bottom margin automatically!)</p>
</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
  <!-- Container: Perfect for Headers -->
  <div class="w3-container w3-teal">
    <h2>w3-container (Padding: 16px L/R, Margin: 0)</h2>
  </div>

  <!-- Panel: Perfect for Alert Callouts -->
  <div class="w3-panel w3-pale-green w3-leftbar w3-border-green">
    <p><b>Important Exam Note:</b> w3-panel has 16px top and bottom margin!</p>
  </div>

  <!-- Card: Elevation and Shadow -->
  <div class="w3-container">
    <div class="w3-card-4 w3-padding w3-white" style="max-width:300px;">
      <h4>w3-card-4 Elevation</h4>
      <p>Beautiful 4px drop shadow card.</p>
    </div>
  </div>
</body>
</html>`,
    outputExplanation: "हेडर स्क्रीन की दीवार से सटकर आएगा, उसके नीचे अलर्ट पैनल ऊपर-नीचे गैप के साथ हरी बॉर्डर में दिखेगा, और नीचे 4px शैडो वाला कार्ड दिखेगा।",
    realWorldAnalogy: "कंटेनर कमरे की फर्श और दीवारों जैसा है जो कोने से कोना मिलाता है; पैनल कमरे के बीच रखी मेज जैसा है जिसके चारों तरफ जगह होती है।",
    importantPoints: [
      "w3-container में 16px Left और 16px Right पैडिंग होती है।",
      "w3-panel में 16px Left/Right पैडिंग + 16px Top/Bottom मार्जिन होता है।",
      "अलर्ट मैसेज और नोट्स के लिए w3-panel का उपयोग किया जाता है।",
      "4px ड्रॉप शैडो के लिए w3-card-4 क्लास उपयोग होती है।"
    ],
    commonMistakes: [
      "हेडर में `w3-panel` लगा देना (जिससे हेडर के ऊपर 16px की अजीब खाली सफेद जगह छूट जाती है; हेडर में हमेशा `w3-container` लगाएं)।"
    ],
    examPerspective: "प्रश्न: 'w3-container और w3-panel में क्या अंतर है?' (Top/Bottom 16px margin का अंतर), 'कार्ड बनाने के लिए कौन सी क्लास उपयोग होती है?' (w3-card-4).",
    quickRevision: "w3-container = 16px L/R पैडिंग (0 margin); w3-panel = 16px पैडिंग + 16px T/B मार्जिन; w3-card-4 = 4px शैडो।",
    relatedTopics: ["w3-css-intro", "w3-css-borders", "w3-css-grid"],
    practiceTask: "एक w3-container और एक w3-panel अगल-बगल रखकर उनके मार्जिन का अंतर स्वयं मापें।"
  },
  {
    id: "u5-t6",
    slug: "w3-css-borders",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Borders",
    hindiTitle: "W3.CSS बॉर्डर्स एवं राउंडिंग क्लासेज",
    definitionEnglish: "W3.CSS border classes provide ready-made classes to add borders to any element (w3-border), style specific sides (w3-border-top, w3-leftbar), apply border colors (w3-border-color), and control corner rounding (w3-round, w3-circle).",
    definitionHindi: "W3.CSS बॉर्डर क्लासेज किसी भी तत्व पर चारों तरफ बॉर्डर जोड़ने (w3-border), किसी एक तरफ बॉर्डर लगाने (w3-border-top, w3-leftbar), बॉर्डर को रंग देने (w3-border-color) और कोनों को गोल करने (w3-round, w3-circle) की रेडीमेड सुविधा देती हैं।",
    simpleWords: "किसी बॉक्स पर बॉर्डर लगाना हो तो `w3-border`, बाईं तरफ मोटी पट्टी देनी हो तो `w3-leftbar`, कोनों को हल्का गोल करना हो तो `w3-round` और पूरा गोल (सर्कल) बनाना हो तो `w3-circle` लिखें।",
    whyImportant: "कॉलआउट बॉक्स, इनपुट बॉर्डर्स, और गोल प्रोफाइल अवतार बनाने के लिए बॉर्डर क्लासेज का अत्यधिक उपयोग होता है।",
    detailedExplanation: `### W3.CSS की प्रमुख बॉर्डर क्लासेज:
1. **चारों तरफ बॉर्डर:**
   - \`w3-border\`: चारों तरफ 1px की स्लेटी बॉर्डर।
   - \`w3-border-0\`: बॉर्डर हटाना।
2. **विशिष्ट दिशा में बॉर्डर:**
   - \`w3-border-top\`, \`w3-border-bottom\`, \`w3-border-left\`, \`w3-border-right\`।
   - **\`w3-leftbar\`:** बाईं तरफ 6px की मोटी खूबसूरत पट्टी जोड़ना (नोट्स और कोट्स के लिए)।
3. **बॉर्डर कलर्स (\`w3-border-color\`):**
   - \`w3-border-red\`, \`w3-border-blue\`, \`w3-border-teal\`।
4. **Rounding (कोनों को गोल करना):**
   - \`w3-round-small\`: 2px रेडियस
   - \`w3-round\` / \`w3-round-medium\`: 4px रेडियस
   - \`w3-round-large\`: 8px रेडियस
   - \`w3-round-xlarge\`: 16px रेडियस
   - **\`w3-circle\`:** **100% गोल (Circular/Avatar)** बनाना (अति महत्वपूर्ण!)।`,
    syntax: `<div class="w3-panel w3-leftbar w3-border-blue w3-pale-blue">
  <p>Callout with thick left blue border</p>
</div>
<img src="avatar.jpg" class="w3-circle" width="80" height="80">`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body class="w3-container w3-padding-16">
  <h2>W3.CSS Borders Showcase</h2>

  <div class="w3-panel w3-border w3-border-blue w3-round-large">
    <p>Box with full blue border and rounded corners (w3-round-large).</p>
  </div>

  <div class="w3-panel w3-leftbar w3-border-green w3-pale-green">
    <p><b>Quote Panel:</b> Highlighted with w3-leftbar and w3-border-green.</p>
  </div>

  <div class="w3-circle w3-teal w3-center" style="width:70px; height:70px; line-height:70px;">
    <b>AV</b>
  </div>
</body>
</html>`,
    outputExplanation: "एक गोल कोनों वाला नीला बॉक्स दिखेगा, एक बाईं मोटी हरी पट्टी वाला कोट पैनल दिखेगा, और एक पूर्णतः गोल 100% वृत्ताकार अवतार दिखेगा।",
    realWorldAnalogy: "जैसे फोटो फ्रेम में लकड़ी की चौखट (Border), बाईं तरफ की लाल रिबन (leftbar), और गोल लॉकेट (circle) होता है।",
    importantPoints: [
      "w3-leftbar बाईं तरफ 6px की मोटी हाइलाइट बॉर्डर देता है।",
      "इमेज या बॉक्स को पूर्णतः वृत्ताकार बनाने के लिए w3-circle का उपयोग होता है।",
      "w3-round-large कोनों को 8px गोल करता है।"
    ],
    commonMistakes: [
      "केवल `w3-border-blue` लिखना और `w3-border` भूल जाना (रंग तभी दिखेगा जब पहले `w3-border` लगाया गया हो)।"
    ],
    examPerspective: "प्रश्न: 'W3.CSS में एलिमेंट को गोल (वृत्ताकार) बनाने के लिए कौन सी क्लास उपयोग होती है?' (w3-circle), 'बाईं तरफ मोटी बॉर्डर के लिए कौन सी क्लास है?' (w3-leftbar).",
    quickRevision: "w3-border = बॉर्डर; w3-leftbar = बाईं मोटी पट्टी; w3-border-[color] = रंग; w3-round = गोल कोने; w3-circle = पूर्ण वृत्त।",
    relatedTopics: ["w3-css-containers-and-panels", "w3-css-images", "border-properties"],
    practiceTask: "एक `w3-circle` का उपयोग करके अपने नाम के अक्षरों वाला एक सर्कुलर प्रोफाइल लोगो बनाएं।"
  },
  {
    id: "u5-t7",
    slug: "w3-css-grid",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Grid (12-Column Responsive System)",
    hindiTitle: "W3.CSS 12-कॉलम रिस्पॉन्सिव ग्रिड सिस्टम",
    definitionEnglish: "The W3.CSS Grid is a fluid, 12-column responsive layout system consisting of rows (w3-row, w3-row-padding) and columns (w3-col) with responsive prefixes 's' (small/mobile <601px), 'm' (medium/tablet 601-992px), and 'l' (large/desktop >992px) totaling 12 columns per row.",
    definitionHindi: "W3.CSS ग्रिड एक 12-कॉलम रिस्पॉन्सिव लेआउट सिस्टम है जो पंक्तियों (w3-row, w3-row-padding) और स्तंभों (w3-col) से मिलकर बनता है, जिसमें रिस्पॉन्सिव प्रीफिक्स 's' (मोबाइल <601px), 'm' (टैबलेट 601-992px), और 'l' (डेस्कटॉप >992px) होते हैं जिनका प्रति पंक्ति कुल योग 12 कॉलम होता है।",
    simpleWords: "यह स्क्रीन को 12 बराबर भागों में बांटने का पैमाना है। यदि आप चाहते हैं कि कंप्यूटर पर 3 बॉक्स अगल-बगल दिखें (4+4+4 = 12), लेकिन मोबाइल पर एक के नीचे एक पूरी चौड़ाई में दिखें (12+12+12), तो W3.CSS ग्रिड यह काम चुटकियों में कर देता है।",
    whyImportant: "रिस्पॉन्सिव वेबसाइट बनाने के लिए W3.CSS ग्रिड सिस्टम पूरे यूनिट 5 का सबसे महत्वपूर्ण और व्यावहारिक विषय है।",
    detailedExplanation: `### 1. W3.CSS ग्रिड के 3 स्क्रीन ब्रेकपॉइंट्स (अति महत्वपूर्ण):
- **\`s\` (Small Screens / Mobile):** स्क्रीन चौड़ाई **600px या उससे कम**।
- **\`m\` (Medium Screens / Tablets):** स्क्रीन चौड़ाई **601px से 992px तक**।
- **\`l\` (Large Screens / Desktops):** स्क्रीन चौड़ाई **992px से अधिक**।

### 2. ग्रिड का गोल्डन रूल (The Rule of 12):
एक पंक्ति (\`w3-row\`) के अंदर सभी कॉलम्स के अंकों का योग हमेशा **12** होना चाहिए:
- **3 बराबर कॉलम:** \`w3-col s12 m4 l4\` (मोबाइल पर 12, टैबलेट और पीसी पर 4-4-4 = 12)।
- **2 बराबर कॉलम:** \`w3-col s12 m6 l6\` (मोबाइल पर 12, पीसी पर 6-6 = 12)।
- **4 बराबर कॉलम:** \`w3-col s12 m6 l3\` (मोबाइल पर 12, टैबलेट पर 6, पीसी पर 3-3-3-3 = 12)।
- **साइडबार + मेन कंटेंट:** \`w3-col m3 l3\` (साइडबार) + \`w3-col m9 l9\` (कंटेंट) = 12.

### 3. \`w3-row\` बनाम \`w3-row-padding\`:
- \`w3-row\`: कॉलम्स के बीच कोई खाली गैप नहीं होता।
- \`w3-row-padding\`: कॉलम्स के बीच दोनों तरफ 8px की पैडिंग (गैप) स्वतः आ जाती है जिससे कार्ड्स आपस में चिपकते नहीं।`,
    syntax: `<div class="w3-row-padding">
  <div class="w3-col s12 m6 l4">Column 1 (12 on mobile, 4 on desktop)</div>
  <div class="w3-col s12 m6 l4">Column 2</div>
  <div class="w3-col s12 m6 l4">Column 3</div>
</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <title>W3.CSS Responsive Grid Demo</title>
</head>
<body>
  <div class="w3-container w3-teal w3-center">
    <h2>12-Column Responsive Grid</h2>
  </div>

  <div class="w3-row-padding w3-margin-top">
    <!-- 3 Responsive Cards: Stacks on mobile (s12), 3 columns on PC (l4) -->
    <div class="w3-col s12 m4 l4">
      <div class="w3-card-4 w3-padding w3-blue">
        <h3>Card 1</h3>
        <p>Span: s12, m4, l4</p>
      </div>
    </div>
    <div class="w3-col s12 m4 l4">
      <div class="w3-card-4 w3-padding w3-green">
        <h3>Card 2</h3>
        <p>Span: s12, m4, l4</p>
      </div>
    </div>
    <div class="w3-col s12 m4 l4">
      <div class="w3-card-4 w3-padding w3-orange">
        <h3>Card 3</h3>
        <p>Span: s12, m4, l4</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    outputExplanation: "डेस्कटॉप पर तीनों रंगीन कार्ड्स अगल-बगल एक लाइन में दिखेंगे; ब्राउज़र विंडो को छोटा करने पर वे स्वतः एक के नीचे एक स्टैक हो जाएंगे।",
    realWorldAnalogy: "जैसे एक बड़ी चॉकलेट में 12 टुकड़े होते हैं, आप 4-4-4 के तीन हिस्से कर सकते हैं या 6-6 के दो हिस्से कर सकते हैं।",
    importantPoints: [
      "W3.CSS ग्रिड सिस्टम कुल 12 कॉलम्स में विभाजित होता है।",
      "s = Small (<=600px), m = Medium (601-992px), l = Large (>992px).",
      "w3-row-padding कॉलम्स के बीच 8px का गैप देती है।",
      "कुल योग हमेशा 12 होना चाहिए।"
    ],
    commonMistakes: [
      "कॉलम के अंकों का योग 12 से अधिक कर देना (जैसे 6 + 7 = 13, जिससे अंतिम कॉलम टूटकर नीचे गिर जाता है)।"
    ],
    examPerspective: "प्रश्न: 'W3.CSS ग्रिड में कुल कितने कॉलम होते हैं?' (12), 'स्मॉल स्क्रीन के लिए कौन सा प्रीफिक्स होता है?' (s), 'मीडियम स्क्रीन की रेंज क्या है?' (601px से 992px).",
    quickRevision: "12-कॉलम ग्रिड: w3-row कंटेनर है, w3-col कॉलम है। प्रीफिक्स: s (मोबाइल), m (टैबलेट), l (डेस्कटॉप)। योग = 12.",
    relatedTopics: ["responsive-web-designing", "w3-css-containers-and-panels", "html-layout"],
    practiceTask: "एक 2-कॉलम लेआउट बनाएं जिसमें बायाँ कॉलम 4 कॉलम (m4) और दायाँ कॉलम 8 कॉलम (m8) का हो।"
  },
  {
    id: "u5-t8",
    slug: "w3-css-tables-and-list",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Tables and List",
    hindiTitle: "W3.CSS टेबल्स एवं लिस्ट्स (w3-table, w3-striped, w3-ul)",
    definitionEnglish: "W3.CSS provides comprehensive styling classes for HTML tables (w3-table, w3-striped, w3-bordered, w3-hoverable, w3-responsive) and lists (w3-ul, w3-hoverable, w3-card) to render clean, readable, professional data presentations instantly.",
    definitionHindi: "W3.CSS HTML टेबल्स (w3-table, w3-striped, w3-bordered, w3-hoverable, w3-responsive) और लिस्ट्स (w3-ul, w3-hoverable, w3-card) के लिए तैयार स्टाइलिंग क्लासेज प्रदान करता है जिससे स्वच्छ, सुंदर और पेशेवर डेटा तुरंत प्रदर्शित होता है।",
    simpleWords: "साधारण टेबल पर केवल `class=\"w3-table w3-striped w3-bordered\"` लिख दें और वह बिना कोई CSS लिखे आधुनिक ज़ेबरा-स्ट्राइप्ड टेबल में बदल जाएगी!",
    whyImportant: "परीक्षा परिणाम, स्टूडेंट लिस्ट और डेटा डिस्प्ले के लिए ये क्लासेज डेवलपमेंट समय को शून्य कर देती हैं।",
    detailedExplanation: `### 1. W3.CSS टेबल क्लासेज:
- **\`w3-table\`:** मूल W3.CSS टेबल स्टाइल।
- **\`w3-striped\`:** एकांतर पंक्तियों को हल्का स्लेटी रंग (Zebra Striping) देना।
- **\`w3-bordered\`:** प्रत्येक पंक्ति के नीचे हल्की बॉर्डर रेखा खींचना।
- **\`w3-border\`:** टेबल के चारों तरफ बॉर्डर लगाना।
- **\`w3-hoverable\`:** माउस ले जाने पर रो का रंग हाइलाइट होना।
- **\`w3-centered\`:** टेबल के पूरे कंटेंट को केंद्र में संरेखित करना।
- **\`w3-responsive\`:** टेबल को छोटे मोबाइल पर हॉरिजॉन्टली स्क्रॉल करने योग्य बनाना ताकि स्क्रीन टूटे नहीं।

### 2. W3.CSS लिस्ट क्लासेज:
- **\`w3-ul\`:** अनऑर्डर्ड लिस्ट को बॉर्डर्ड कार्ड जैसी सुंदर लिस्ट में बदलना।
- **\`w3-hoverable\`:** लिस्ट आइटम पर हॉवर इफेक्ट।
- **\`w3-card\`:** लिस्ट के चारों तरफ शैडो जोड़ना।`,
    syntax: `<table class="w3-table w3-striped w3-bordered w3-hoverable">
  <tr class="w3-teal"><th>Header</th></tr>
  <tr><td>Data</td></tr>
</table>

<ul class="w3-ul w3-card-4 w3-hoverable">
  <li>List Item 1</li>
</ul>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body class="w3-container w3-padding-16">
  <h2>W3.CSS Table & List Demo</h2>

  <!-- Responsive Striped Hoverable Table -->
  <table class="w3-table w3-striped w3-bordered w3-hoverable w3-card">
    <tr class="w3-blue">
      <th>Module</th>
      <th>Subject Name</th>
      <th>Marks</th>
    </tr>
    <tr><td>M1-R5.1</td><td>IT Tools</td><td>100</td></tr>
    <tr><td>M2-R5.1</td><td>Web Designing</td><td>100</td></tr>
    <tr><td>M3-R5.1</td><td>Python Programming</td><td>100</td></tr>
  </table>

  <h3 class="w3-margin-top">W3.CSS List Component</h3>
  <ul class="w3-ul w3-card w3-hoverable" style="max-width:300px;">
    <li>HTML5 Basics</li>
    <li>CSS3 Selectors</li>
    <li>W3.CSS Framework</li>
  </ul>
</body>
</html>`,
    outputExplanation: "एक सुंदर नीले हेडर वाली ज़ेबरा टेबल और नीचे बॉर्डर्स वाली शैडो युक्त लिस्ट दिखेगी जो माउस ले जाने पर चमकेगी।",
    realWorldAnalogy: "जैसे एक साधारण नोटबुक के पन्नों पर पहले से खींची गई सुंदर लाल-नीली लाइनें और कॉलम मार्जिन होते हैं।",
    importantPoints: [
      "w3-striped ज़ेबरा स्ट्राइपिंग बनाता है।",
      "w3-hoverable माउस हॉवर इफेक्ट जोड़ता है।",
      "w3-responsive टेबल को मोबाइल पर स्क्रॉल करने योग्य बनाता है।",
      "w3-ul लिस्ट को बॉर्डर्ड ब्लॉक लिस्ट में बदलता है।"
    ],
    commonMistakes: [
      "`w3-striped` के साथ `w3-table` लिखना भूल जाना (बेस क्लास `w3-table` होना अनिवार्य है)।"
    ],
    examPerspective: "प्रश्न: 'W3.CSS में ज़ेबरा-स्ट्राइप्ड टेबल बनाने के लिए कौन सी क्लास उपयोग होती है?' (w3-striped), 'लिस्ट स्टाइल करने की क्लास कौन सी है?' (w3-ul).",
    quickRevision: "टेबल: w3-table, w3-striped (ज़ेबरा), w3-bordered, w3-hoverable, w3-responsive। लिस्ट: w3-ul.",
    relatedTopics: ["tables-and-attributes", "css-tables", "w3-css-containers-and-panels"],
    practiceTask: "एक W3.CSS टेबल बनाएं जिसमें 3 छात्र हों और `w3-striped` तथा `w3-hoverable` दोनों क्लासेज लगी हों।"
  },
  {
    id: "u5-t9",
    slug: "w3-css-images",
    unit: 5,
    unitSlug: "unit-5",
    unitTitle: "CSS Framework (W3.CSS)",
    title: "W3.CSS Images",
    hindiTitle: "W3.CSS इमेजेस एवं कार्ड्स (w3-image, w3-circle, w3-round)",
    definitionEnglish: "W3.CSS provides dedicated utility classes to make images fully responsive (w3-image, automatically scaling with max-width: 100%), style corner radii (w3-round), create circular avatar profiles (w3-circle), apply elevation drop shadows (w3-card-4), and trigger transparency transitions (w3-hover-opacity).",
    definitionHindi: "W3.CSS इमेजेस को पूरी तरह से रिस्पॉन्सिव बनाने (w3-image, max-width: 100% के साथ स्वतः स्केलिंग), कोनों को गोल करने (w3-round), गोल अवतार प्रोफाइल बनाने (w3-circle), शैडो देने (w3-card-4) और पारदर्शिता प्रभाव (w3-hover-opacity) लगाने के लिए विशेष क्लासेज प्रदान करता है।",
    simpleWords: "बड़ी इमेज को मोबाइल स्क्रीन से बाहर भागने से रोकने के लिए `w3-image` लगाएं, फोटो को गोल सिक्का जैसा बनाने के लिए `w3-circle` लगाएं, और माउस ले जाने पर फोटो को चमकाने के लिए `w3-hover-opacity` लगाएं।",
    whyImportant: "मोबाइल स्क्रीन पर इमेजेस का कटना शुरुआती वेब डिजाइनर्स की सबसे बड़ी समस्या होती है। W3.CSS इसे एक क्लास से हल कर देता है।",
    detailedExplanation: `### W3.CSS की प्रमुख इमेज क्लासेज:
1. **\`w3-image\` (रिस्पॉन्सिव इमेज):**
   - यह इमेज पर \`max-width: 100%; height: auto;\` लागू करता है।
   - इससे इमेज अपनी पैरेंट स्क्रीन से कभी बाहर नहीं निकलती और हमेशा स्क्रीन के अनुपात में सिकुड़ जाती है।
2. **\`w3-circle\` (गोल अवतार):**
   - इमेज को **पूर्ण वृत्त (Circular 100%)** बना देता है (यूजर प्रोफाइल फोटो हेतु सर्वोत्तम)।
3. **\`w3-round\` / \`w3-round-large\`:**
   - इमेज के कोनों को हल्का गोल करना।
4. **\`w3-card-4\`:**
   - इमेज के चारों तरफ 4px की सुंदर ड्रॉप शैडो लगाना।
5. **\`w3-hover-opacity\`:**
   - माउस कर्सर इमेज पर जाने पर उसकी अपारदर्शिता (Opacity) को थोड़ा हल्का या गहरा करना।`,
    syntax: `<img src="pic.jpg" class="w3-image w3-round" alt="Responsive">
<img src="avatar.jpg" class="w3-circle" alt="Avatar" width="80">
<img src="card.jpg" class="w3-image w3-hover-opacity w3-card-4">`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body class="w3-container w3-padding-16">
  <h2>W3.CSS Image Styling Showcase</h2>

  <!-- Profile Avatar Card -->
  <div class="w3-card-4 w3-center w3-padding-16" style="max-width:260px;">
    <img src="https://via.placeholder.com/100/0284c7/ffffff?text=User" 
         class="w3-circle w3-hover-opacity" 
         alt="Student Avatar">
    <h3>Saurabh Tiwari</h3>
    <p class="w3-text-grey">O-Level Student</p>
    <button class="w3-button w3-blue w3-round">View Profile</button>
  </div>
</body>
</html>`,
    outputExplanation: "कार्ड के केंद्र में एक गोल अवतार फोटो दिखेगी जिस पर माउस ले जाने पर वह हल्की चमकेगी, और नीचे गोल बटन दिखेगा।",
    realWorldAnalogy: "जैसे पासपोर्ट साइज फोटो को कैंची से काटकर गोल लॉकेट में फिट किया जाता है, `w3-circle` वही काम डिजिटल रूप से करता है।",
    importantPoints: [
      "w3-image इमेज को स्वतः रिस्पॉन्सिव बनाती है।",
      "w3-circle 100% गोल वृत्ताकार इमेज बनाती है।",
      "w3-hover-opacity माउस ले जाने पर विजुअल फीडबैक देती है।"
    ],
    commonMistakes: [
      "बिना `w3-image` के बहुत बड़ी 2000px की इमेज लगा देना (जिससे मोबाइल स्क्रीन पर हॉरिजॉन्टल स्क्रॉलबार आ जाता है)।"
    ],
    examPerspective: "प्रश्न: 'W3.CSS में इमेज को गोल करने के लिए कौन सी क्लास उपयोग होती है?' (w3-circle), 'इमेज को रिस्पॉन्सिव बनाने की क्लास कौन सी है?' (w3-image).",
    quickRevision: "w3-image = रिस्पॉन्सिव; w3-circle = गोल अवतार; w3-round = गोल कोने; w3-hover-opacity = हॉवर प्रभाव।",
    relatedTopics: ["image-tag", "w3-css-borders", "css-image-gallery"],
    practiceTask: "एक प्रोफाइल कार्ड बनाएं जिसमें एक गोल अवतार (`w3-circle`) और उसके नीचे नाम व पदनाम लिखा हो।"
  }
];
