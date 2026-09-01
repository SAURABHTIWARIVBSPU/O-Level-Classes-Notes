// Unit 4: Cascading Style Sheets (CSS) - Complete Topic Notes

export const unit4Topics = [
  {
    id: "u4-t1",
    slug: "introduction-to-css",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "Introduction to CSS",
    hindiTitle: "CSS का परिचय एवं लाभ",
    definitionEnglish: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation, layout, colors, typography, and responsive adaptation of documents written in HTML or XML.",
    definitionHindi: "CSS (कैस्केडिंग स्टाइल शीट्स) एक स्टाइल शीट भाषा है जिसका उपयोग HTML या XML में लिखे गए दस्तावेज़ों के प्रस्तुतीकरण, लेआउट, रंगों, फोंट्स और रिस्पॉन्सिव अनुकूलन को नियंत्रित करने के लिए किया जाता है।",
    simpleWords: "HTML यदि घर की ईंटें और सीमेंट (कंकाल) है, तो CSS उस घर का पेंट, पर्दे, टाइल्स और इंटीरियर डिजाइन है जो उसे सुंदर और आकर्षक बनाता है।",
    whyImportant: "बिना CSS के वेबसाइट केवल सादा ब्लैक-एंड-व्हाइट टेक्स्ट दिखेगी। CSS ही वेब को सुंदर, आधुनिक और यूजर-फ्रेंडली बनाती है।",
    detailedExplanation: `### 1. CSS का इतिहास एवं आविष्कार:
- **आविष्कारक:** **Håkon Wium Lie** ने **1994** में CERN में Tim Berners-Lee के साथ काम करते हुए CSS का प्रस्ताव रखा।
- **W3C मानक:** 1996 में CSS1, 1998 में CSS2, और वर्तमान में **CSS3** (मॉड्यूलर आर्किटेक्चर) मानक है।

### 2. 'Cascading' का अर्थ क्या है?
'Cascading' (झरना / पदानुक्रम) का अर्थ है कि यदि किसी एक एलिमेंट पर कई अलग-अलग जगह से स्टाइल्स लगाई गई हों, तो वे एक झरने की तरह नीचे की ओर प्रवाहित होती हैं और एक निश्चित **प्राथमिकता क्रम (Cascading Order / Priority)** के अनुसार लागू होती हैं:
\`Inline CSS > Internal CSS > External CSS > Browser Default\`

### 3. CSS के मुख्य लाभ:
1. **Separation of Concerns:** कंटेंट (HTML) और डिजाइन (CSS) अलग-अलग फाइलों में रहते हैं।
2. **Reusability & Consistency:** एक ही \`style.css\` फाइल को 500 वेबपेजों से जोड़कर पूरी वेबसाइट का रंग-रूप एक सेकंड में बदला जा सकता है।
3. **Faster Loading:** CSS फाइलें ब्राउज़र द्वारा कैश (Cache) हो जाती हैं, जिससे बार-बार डेटा डाउनलोड नहीं करना पड़ता।
4. **Device Adaptation:** मोबाइल, टैबलेट और डेस्कटॉप के लिए अलग-अलग डिजाइन बनाना।`,
    syntax: `CSS Ruleset Syntax:
selector {
  property: value;
  property: value;
}
Example:
h1 {
  color: #0284c7;
  font-size: 24px;
  text-align: center;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS Ruleset applied to h1 */
    h1 {
      color: #0284c7;
      font-family: Arial, sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <h1>Introduction to CSS Mastery</h1>
  <p>The heading above is styled using a standard CSS ruleset.</p>
</body>
</html>`,
    outputExplanation: "हेडिंग बड़े अक्षरों (Uppercase) में, नीले रंग में और सुंदर फॉन्ट के साथ प्रदर्शित होगी।",
    realWorldAnalogy: "जैसे एक ही सादे पुतले (Mannequin) को अलग-अलग कपड़े और गहने पहनाकर अलग-अलग लुक दिया जा सकता है, वैसे ही एक ही HTML को अलग CSS से बिल्कुल अलग रूप दिया जा सकता है।",
    importantPoints: [
      "CSS का पूर्ण रूप: Cascading Style Sheets.",
      "आविष्कारक: Håkon Wium Lie (1994)।",
      "फाइल एक्सटेंशन: .css.",
      "CSS में कमेंट्स केवल /* comment */ रूप में लिखे जाते हैं।"
    ],
    commonMistakes: [
      "प्रॉपर्टी और वैल्यू के बीच कोलन (:) के बजाय बराबर (=) लगा देना (उदा. `color = red;` अमान्य है, सही `color: red;` है)।",
      "नियम के अंत में सेमीकोलन (;) भूल जाना।"
    ],
    examPerspective: "CSS का पूरा नाम, आविष्कारक, आविष्कार का वर्ष, और Cascading की परिभाषा पर हर साल प्रश्न पूछे जाते हैं।",
    quickRevision: "CSS वेबपेज का रूप-रंग तय करती है। आविष्कारक: Håkon Wium Lie (1994)। सिंटैक्स: selector { property: value; }.",
    relatedTopics: ["types-of-css", "css-selectors", "css-properties-background-block-box-list-border-positioning"],
    practiceTask: "एक HTML पेज में h1, p, और a टैग्स को अलग-अलग रंगों में स्टाइल करने के लिए इंटरनल CSS लिखें।"
  },
  {
    id: "u4-t2",
    slug: "types-of-css",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "Types of CSS (Inline, Internal, External)",
    hindiTitle: "CSS के प्रकार (Inline, Internal, External) एवं प्राथमिकता",
    definitionEnglish: "CSS can be applied to HTML documents in three fundamental ways: Inline CSS (using the 'style' attribute on individual HTML tags), Internal/Embedded CSS (using the <style> tag within the <head> section), and External CSS (using a separate .css file linked via the <link> tag).",
    definitionHindi: "HTML दस्तावेज़ों में CSS को तीन मुख्य तरीकों से लागू किया जाता है: Inline CSS (व्यक्तिगत HTML टैग पर 'style' विशेषता द्वारा), Internal CSS (<head> सेक्शन में <style> टैग द्वारा), और External CSS (एक अलग .css फाइल बनाकर <link> टैग द्वारा जोड़ना)।",
    simpleWords: "स्टाइल लगाने के 3 तरीके हैं: 1. सीधे टैग के अंदर लिखना (Inline), 2. पेज के ऊपर सिर (<head>) में लिखना (Internal), या 3. अलग फाइल बनाकर लिंक करना (External - सबसे उत्तम तरीका)।",
    whyImportant: "बड़ी वेबसाइटों में कोड का प्रबंधन और प्राथमिकताओं (Cascading Priority) का टकराव हल करने के लिए इन तीनों तरीकों की गहरी समझ अनिवार्य है।",
    detailedExplanation: `### 1. Inline CSS:
- सीधे HTML टैग के अंदर \`style="..."\` एट्रिब्यूट लगाकर लिखा जाता है।
- **सिंटैक्स:** \`<p style="color: red; font-size: 18px;">Hello</p>\`
- **गुण:** केवल उसी एक विशिष्ट एलिमेंट पर लागू होता है।
- **अवगुण:** कोड गंदा और अव्यवस्थित हो जाता है; इसे दोबारा उपयोग नहीं किया जा सकता।

### 2. Internal (Embedded) CSS:
- HTML फाइल के \`<head>\` सेक्शन में \`<style> ... </style>\` टैग के अंदर लिखा जाता है।
- **गुण:** उस पूरे पेज के सभी तत्वों को एक जगह से स्टाइल कर सकता है।
- **अवगुण:** यह स्टाइल केवल उसी एक वेबपेज तक सीमित रहती है, दूसरे पेजों पर काम नहीं करती।

### 3. External CSS (सर्वश्रेष्ठ और उद्योग मानक):
- एक अलग फाइल (उदा. \`style.css\`) बनाई जाती है जिसमें केवल शुद्ध CSS कोड होता है।
- इसे HTML के \`<head>\` में \`<link>\` टैग द्वारा जोड़ा जाता है:
  \`<link rel="stylesheet" href="style.css">\`
- **गुण:** एक ही फाइल से 1,000 वेबपेजों का डिजाइन नियंत्रित होता है; लोडिंग स्पीड तेज होती है।

### 4. डिफ़ॉल्ट प्राथमिकता क्रम (Priority Order):
यदि एक ही तत्व पर तीनों शैलियाँ लगाई गई हों:
1. **Inline CSS** (सर्वोच्च प्राथमिकता)
2. **Internal CSS**
3. **External CSS**
4. **Browser Default** (सबसे कम प्राथमिकता)
*(नोट: यदि किसी प्रॉपर्टी के आगे \`!important\` लगा दिया जाए, तो वह सभी को ओवरराइड कर देती है।)*`,
    syntax: `<!-- 1. Inline CSS -->
<h1 style="color: blue;">Inline</h1>

<!-- 2. Internal CSS -->
<head>
  <style> h1 { color: green; } </style>
</head>

<!-- 3. External CSS -->
<head>
  <link rel="stylesheet" href="mystyle.css">
</head>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <!-- Internal CSS -->
  <style>
    p { color: green; font-size: 16px; }
  </style>
</head>
<body>
  <!-- This p uses Internal CSS (Green) -->
  <p>This text is green via Internal CSS.</p>

  <!-- This p uses Inline CSS which overrides Internal CSS! -->
  <p style="color: red; font-weight: bold;">
    This text is RED because Inline CSS has higher priority than Internal CSS!
  </p>
</body>
</html>`,
    outputExplanation: "पहला पैराग्राफ हरा दिखेगा, लेकिन दूसरा पैराग्राफ लाल दिखेगा क्योंकि Inline CSS की प्राथमिकता Internal CSS से अधिक होती है।",
    realWorldAnalogy: "External CSS पूरे स्कूल की यूनिफॉर्म नीति जैसी है; Internal CSS किसी एक क्लास की विशेष टी-शर्ट जैसी है; और Inline CSS किसी छात्र द्वारा अपनी शर्ट पर लगाया गया व्यक्तिगत बैच है जो सबसे ऊपर दिखता है।",
    importantPoints: [
      "औद्योगिक विकास में हमेशा External CSS का उपयोग किया जाता है।",
      "External CSS फाइल में कभी भी <style> टैग नहीं लिखा जाता।",
      "प्राथमिकता क्रम: Inline > Internal > External > Browser Default.",
      "!important किसी भी अन्य नियम को ओवरराइड कर देता है।"
    ],
    commonMistakes: [
      "एक्सटर्नल .css फाइल के अंदर `<style>` टैग लिख देना (सीएसएस फाइल में केवल शुद्ध रूल्स होने चाहिए)।",
      "HTML में `<link>` टैग के बजाय `<style src=\"...\">` लिखने की कोशिश करना।"
    ],
    examPerspective: "CSS के तीन प्रकार, उनकी प्राथमिकताओं का क्रम, और <link> टैग के सिंटैक्स पर परीक्षा में 100% प्रश्न आता है।",
    quickRevision: "3 प्रकार: Inline (style=\"\"), Internal (<style> in head), External (.css linked via <link>). प्राथमिकता: Inline > Internal > External.",
    relatedTopics: ["introduction-to-css", "css-selectors", "head-section-and-elements"],
    practiceTask: "एक ही पैराग्राफ पर Internal (नीला) और Inline (लाल) दोनों स्टाइल लगाकर देखें कि कौन सा रंग प्रभावी होता है।"
  },
  {
    id: "u4-t3",
    slug: "css-selectors",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Selectors: Universal, ID, Tag, Class, Sub Selector, Attribute, Group",
    hindiTitle: "CSS चयनकर्ता (Universal, ID, Tag, Class, Sub Selector, Attribute, Group)",
    definitionEnglish: "CSS Selectors define the HTML elements to which a set of CSS rules applies, including Universal (*), Tag/Type, ID (#), Class (.), Sub/Descendant, Child (>), Attribute ([attr=val]), and Grouping (comma-separated) selectors.",
    definitionHindi: "CSS सिलेक्टर्स (चयनकर्ता) उन HTML तत्वों की पहचान करते हैं जिन पर CSS नियम लागू किए जाने हैं; इनमें यूनिवर्सल (*), टैग, ID (#), क्लास (.), सब-सिलेक्टर (डिसेंडेंट), चाइल्ड (>), एट्रिब्यूट, और ग्रुप सिलेक्टर शामिल हैं।",
    simpleWords: "सिलेक्टर वह निशाना साधने वाला तीरंदाज है जो बताता है कि पेज के किस खास शब्द, बटन या बॉक्स को रंगना है।",
    whyImportant: "सही सिलेक्टर का चयन कोड को छोटा, तेज और पेशेवर बनाता है। O-Level परीक्षा में सिलेक्टर्स के सिंबल्स (*, #, .) पर सीधे प्रश्न आते हैं।",
    detailedExplanation: `### आधिकारिक पाठ्यक्रम के 7 मुख्य सिलेक्टर्स:
1. **Universal Selector (\`*\`):**
   - पूरे वेबपेज के **सभी HTML एलिमेंट्स** को एक साथ चुनता है।
   - सिंबल: तारा (\`*\`)
   - उपयोग: मार्जिन और पैडिंग रीसेट करने हेतु: \`* { margin: 0; padding: 0; box-sizing: border-box; }\`
2. **Tag / Element Selector:**
   - सीधे टैग के नाम से चुनना (उदा. \`p { color: #333; }\`, \`h1 { font-family: sans-serif; }\`)।
3. **ID Selector (\`#\`):**
   - किसी एक विशिष्ट और अद्वितीय (Unique) एलिमेंट को चुनता है।
   - सिंबल: हैश (\`#\`)
   - उदाहरण: \`#header { background: navy; }\` (HTML: \`<div id="header">\`)
   - **नियम:** पूरे पेज में एक ID केवल 1 बार उपयोग होनी चाहिए।
4. **Class Selector (\`.\`):**
   - एक जैसे कई एलिमेंट्स के समूह को चुनता है।
   - सिंबल: डॉट / बिंदु (\`.\`)
   - उदाहरण: \`.btn { border-radius: 4px; }\` (HTML: \`<button class="btn">\`)
   - **नियम:** एक ही क्लास को पेज के अनगिनत तत्वों पर लगाया जा सकता है।
5. **Sub-Selector / Descendant Selector (स्पेस):**
   - किसी विशिष्ट पैरेंट के अंदर मौजूद चाइल्ड तत्वों को चुनता है।
   - सिंटैक्स: दो सिलेक्टर्स के बीच **खाली स्पेस**।
   - उदाहरण: \`div p { color: gray; }\` (केवल उन \`<p>\` को रंगेगा जो किसी \`<div>\` के अंदर हैं)।
6. **Attribute Selector (\`[ ]\`):**
   - किसी विशेष एट्रिब्यूट या उसके मान के आधार पर चुनना।
   - उदाहरण: \`input[type="text"] { border: 1px solid blue; }\`
7. **Group Selector (\`,\`):**
   - कई अलग-अलग सिलेक्टर्स को एक साथ समान स्टाइल देने के लिए **कॉमा (,)** से अलग करना।
   - उदाहरण: \`h1, h2, h3, p { font-family: 'Inter', sans-serif; }\``,
    syntax: `CSS Selectors Quick Reference:
*               -> Universal
element         -> Tag Selector
#uniqueId       -> ID Selector
.reusableClass  -> Class Selector
parent child    -> Sub/Descendant Selector
element[attr]   -> Attribute Selector
sel1, sel2      -> Group Selector`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* 1. Universal */
    * { box-sizing: border-box; }
    /* 2. Tag */
    h2 { color: #0284c7; }
    /* 3. ID */
    #main-title { font-size: 28px; text-decoration: underline; }
    /* 4. Class */
    .highlight { background-color: #fef08a; padding: 2px 6px; }
    /* 5. Sub-selector (p inside .box) */
    .box p { font-style: italic; }
    /* 6. Attribute */
    input[type="password"] { background-color: #ffe4e6; }
    /* 7. Group */
    th, td { border: 1px solid #cbd5e1; padding: 6px; }
  </style>
</head>
<body>
  <h2 id="main-title">CSS Selectors in Action</h2>
  <div class="box">
    <p>This paragraph is italic because of the sub-selector!</p>
    <span class="highlight">Class highlight applied!</span>
  </div>
  <p>Password: <input type="password" value="secret"></p>
</body>
</html>`,
    outputExplanation: "ID वाला टाइटल अंडरलाइन दिखेगा, क्लास वाला स्पैन पीला दिखेगा, सब-सिलेक्टर वाला पैराग्राफ तिरछा दिखेगा, और पासवर्ड बॉक्स हल्का गुलाबी दिखेगा।",
    realWorldAnalogy: "Universal = पूरे स्कूल के सभी छात्र; Tag = कक्षा 10 के सभी छात्र; Class = क्रिकेट टीम के 11 खिलाड़ी; ID = रोल नंबर 101 वाला अकेला छात्र।",
    importantPoints: [
      "ID सिलेक्टर के लिए # और Class सिलेक्टर के लिए . का उपयोग होता है।",
      "एक पेज में ID हमेशा Unique होती है, जबकि Class Reusable होती है।",
      "सब-सिलेक्टर में दोनों के बीच खाली जगह (Space) होती है।",
      "ग्रुपिंग सिलेक्टर में कॉमा (,) का उपयोग होता है।"
    ],
    commonMistakes: [
      "ID के लिए डॉट (.) और Class के लिए हैश (#) लगा देना।",
      "एक ही पेज में एक ही ID का नाम दो अलग-अलग एलिमेंट्स को दे देना।"
    ],
    examPerspective: "Universal (*), ID (#), Class (.), Descendant (space) और Group (comma) के प्रतीकों पर बहुविकल्पीय प्रश्न 100% आते हैं।",
    quickRevision: "* = सभी; # = ID; . = Class; स्पेस = सब-सिलेक्टर; कॉमा = ग्रुपिंग; [attr] = एट्रिब्यूट।",
    relatedTopics: ["types-of-css", "css-properties-background-block-box-list-border-positioning", "id-vs-class-selector"],
    practiceTask: "एक पेज में 3 पैराग्राफ बनाएं: पहले को ID से लाल, दूसरे को Class से हरा, और तीसरे को Tag से नीला रंग दें।"
  },
  {
    id: "u4-t4",
    slug: "css-properties-background-block-box-list-border-positioning",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Properties: Background, Block, Box, List, Border, Positioning Properties",
    hindiTitle: "CSS प्रॉपर्टीज (Background, Block, Box Model, List, Border, Positioning)",
    definitionEnglish: "CSS properties control the visual formatting of elements across six core categories: Backgrounds (color, image, repeat, size), Block/Typography (display, text-align, line-height), Box Model (content, padding, border, margin), Lists (style-type, position), Borders (width, style, color, radius), and Positioning (static, relative, absolute, fixed, sticky, z-index).",
    definitionHindi: "CSS प्रॉपर्टीज तत्वों के दृश्य प्रारूप को छह मुख्य श्रेणियों में नियंत्रित करती हैं: Background (रंग, इमेज, साइज), Block/Typography (डिस्प्ले, अलाइनमेंट), Box Model (कंटेंट, पैडिंग, बॉर्डर, मार्जिन), List, Border (मोटाई, स्टाइल, रेडियस), और Positioning (static, relative, absolute, fixed, sticky, z-index)।",
    simpleWords: "यह CSS के 6 सबसे शक्तिशाली हथियार हैं जिनसे बैकग्राउंड में रंग या फोटो लगाई जाती है, डिब्बों के चारों तरफ जगह छोड़ी जाती है, और किसी भी चीज को स्क्रीन पर ऊपर, नीचे या स्क्रॉल करने पर भी एक जगह चिपका कर रखा जा सकता है।",
    whyImportant: "इन 6 प्रॉपर्टी समूहों पर महारत हासिल किए बिना कोई भी व्यक्ति वेब डिजाइनर नहीं बन सकता। O-Level परीक्षा का 40% CSS भाग इन्हीं पर आधारित होता है।",
    detailedExplanation: `### 1. The CSS Box Model (अति महत्वपूर्ण):
प्रत्येक HTML एलिमेंट एक चौकोर बॉक्स होता है जिसमें अंदर से बाहर 4 परतें होती हैं:
\`Content -> Padding -> Border -> Margin\`
- **Content:** वास्तविक टेक्स्ट या इमेज।
- **Padding:** कंटेंट और बॉर्डर के बीच की आंतरिक जगह।
- **Border:** पैडिंग के चारों तरफ की सीमा रेखा।
- **Margin:** बॉर्डर के बाहर की खाली जगह (दो अलग बॉक्सेज के बीच की दूरी)।

### 2. Positioning Properties (स्थिति निर्धारण):
- **\`position: static\` (डिफ़ॉल्ट):** पेज के स्वाभाविक क्रम में रहता है (top/left काम नहीं करते)।
- **\`position: relative\`:** अपनी सामान्य स्थिति के सापेक्ष खिसकता है (top, left, right, bottom द्वारा)।
- **\`position: absolute\`:** अपने निकटतम स्थित (relative) पैरेंट के सापेक्ष तय स्थान पर चला जाता है।
- **\`position: fixed\`:** स्क्रीन के सापेक्ष स्थिर रहता है; पेज चाहे कितना भी स्क्रॉल हो, यह अपनी जगह से नहीं हिलता (जैसे फ्लोटिंग व्हाट्सएप बटन)।
- **\`position: sticky\`:** जब तक यूजर स्क्रॉल न करे तब तक सामान्य रहता है, लेकिन एक निश्चित बिंदु पर पहुंचते ही फिक्स हो जाता है (जैसे स्टिकी नेविगेशन बार)।
- **\`z-index\`:** ओवरलैप होने वाले तत्वों में कौन सा ऊपर दिखेगा (3D स्टैकिंग)।

### 3. Background Properties:
\`background-color\`, \`background-image: url(...)\`, \`background-repeat: no-repeat\`, \`background-size: cover\`।

### 4. Border Properties:
\`border: 2px solid #0284c7;\`, \`border-radius: 8px;\` (कोनों को गोल करना)।`,
    syntax: `/* The CSS Box Model & Shorthand */
padding: 10px 20px;          /* Top/Bottom=10px, Left/Right=20px */
margin: 20px auto;           /* Center-align block element */
border: 1px solid #cbd5e1;
position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Sticky Navigation Bar */
    .navbar {
      position: sticky;
      top: 0;
      background: #0284c7;
      color: white;
      padding: 12px 20px;
      z-index: 100;
    }
    /* The Box Model Card */
    .box-card {
      width: 260px;
      margin: 30px auto;           /* Margin: Outside border */
      border: 3px solid #0369a1;    /* Border: Around padding */
      padding: 20px;               /* Padding: Inside border */
      border-radius: 12px;
      background-color: #f0f9ff;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="navbar"><b>Sticky Navbar (Stays on Top when scrolling)</b></div>
  <div class="box-card">
    <h3 style="margin-top:0;">CSS Box Model</h3>
    <p>Content is inside Padding, wrapped by Border, spaced by Margin.</p>
  </div>
  <div style="height: 500px; padding: 20px;">Scroll down to test sticky navbar...</div>
</body>
</html>`,
    outputExplanation: "नेविगेशन बार स्क्रॉल करने पर भी स्क्रीन के सबसे ऊपर चिपका रहेगा, और बॉक्स मॉडल कार्ड में मार्जिन, बॉर्डर व पैडिंग स्पष्ट दिखेंगे।",
    realWorldAnalogy: "बॉक्स मॉडल एक कीमती घड़ी के गिफ्ट बॉक्स जैसा है: घड़ी (Content), चारों तरफ थर्माकोल की रुई (Padding), गत्ते का डिब्बा (Border), और डिब्बे के बाहर पैकिंग पेपर व टेबल की जगह (Margin)।",
    importantPoints: [
      "बॉक्स मॉडल का सही क्रम: Content -> Padding -> Border -> Margin.",
      "डिफ़ॉल्ट स्थिति: position: static.",
      "स्क्रॉल करने पर भी स्थिर रहने वाला: position: fixed.",
      "3D स्टैकिंग ऑर्डर तय करने वाली प्रॉपर्टी: z-index.",
      "मार्जिन बॉर्डर के बाहर होता है, पैडिंग बॉर्डर के अंदर होती है।"
    ],
    commonMistakes: [
      "मार्जिन और पैडिंग के कार्य को आपस में उलझा देना (पैडिंग बैकग्राउंड रंग लेती है, मार्जिन पारदर्शी होता है)।",
      "position: absolute लगाने पर पैरेंट को position: relative देना भूल जाना (जिससे एलिमेंट पूरे पेज के कोने में भाग जाता है)।"
    ],
    examPerspective: "बॉक्स मॉडल के 4 घटक, static vs fixed vs absolute पोजीशनिंग, और z-index पर हर साल 10 से 15 नंबर के प्रश्न पूछे जाते हैं।",
    quickRevision: "बॉक्स मॉडल = Content + Padding + Border + Margin। पोजीशनिंग: static (डिफ़ॉल्ट), fixed (स्थिर), relative, absolute, sticky.",
    relatedTopics: ["css-selectors", "css-menu-design", "css-image-gallery"],
    practiceTask: "एक ऐसा फ्लोटिंग 'Back to Top' बटन बनाएं जो `position: fixed` और `bottom: 20px; right: 20px;` के साथ हमेशा स्क्रीन के कोने में रहे।"
  },
  {
    id: "u4-t5",
    slug: "css-lists",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Lists",
    hindiTitle: "CSS लिस्ट स्टाइलिंग (Custom Bullets & Markers)",
    definitionEnglish: "CSS List properties style both ordered and unordered lists, controlling marker appearance (list-style-type), marker position inside or outside the flow (list-style-position), custom image markers (list-style-image), or removing markers entirely (list-style: none) for menus.",
    definitionHindi: "CSS लिस्ट प्रॉपर्टीज ऑर्डर्ड और अनऑर्डर्ड लिस्ट्स को स्टाइल करती हैं, जो बुलेट मार्कर के रूप (list-style-type), मार्कर की स्थिति (list-style-position), कस्टम इमेज मार्कर (list-style-image), या मेन्यू बनाने हेतु बुलेट्स को पूरी तरह हटाने (list-style: none) को नियंत्रित करती हैं।",
    simpleWords: "साधारण HTML में केवल काले गोल बुलेट आते हैं। CSS से आप बुलेट की जगह अपनी पसंद का तीर, इमोजी या छोटी इमेज लगा सकते हैं, या नेविगेशन मेन्यू बनाने के लिए बुलेट्स को पूरी तरह हटा सकते हैं।",
    whyImportant: "वेबसाइट के आधुनिक मेन्यू, फीचर बुलेट पॉइंट्स, और प्राइसिंग कार्ड्स सभी CSS लिस्ट प्रॉपर्टीज द्वारा ही सजाए जाते हैं।",
    detailedExplanation: `### CSS लिस्ट की 4 मुख्य प्रॉपर्टीज:
1. **\`list-style-type\`:** मार्कर का प्रकार तय करना:
   - \`none\`: बुलेट्स पूरी तरह हटाना (नेविगेशन मेन्यू के लिए सर्वाधिक प्रयुक्त)।
   - \`square\`, \`circle\`, \`disc\` (अनऑर्डर्ड के लिए)।
   - \`upper-roman\`, \`lower-alpha\`, \`decimal-leading-zero\` (ऑर्डर्ड के लिए)।
2. **\`list-style-position\`:**
   - \`outside\` (डिफ़ॉल्ट): बुलेट टेक्स्ट के बाहर इंडेंट रहता है।
   - \`inside\` : बुलेट टेक्स्ट लाइन के अंदर ही शामिल रहता है।
3. **\`list-style-image\`:** बुलेट की जगह अपनी कोई छोटी PNG/SVG इमेज लगाना:
   \`list-style-image: url('check-icon.png');\`
4. **\`list-style\` (शॉर्टहैंड):**
   \`ul { list-style: square inside; }\``,
    syntax: `/* Standard Navigation Reset */
ul.nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Custom Styled Feature List */
    ul.features {
      list-style-type: none;
      padding: 0;
    }
    ul.features li {
      padding: 8px 12px;
      margin-bottom: 6px;
      background: #f1f5f9;
      border-left: 4px solid #0284c7;
      border-radius: 4px;
    }
    /* Adding bullet prefix via pseudo-element */
    ul.features li::before {
      content: "> ";
      color: #16a34a;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h2>O-Level Course Highlights</h2>
  <ul class="features">
    <li>Complete 8-Unit Official Syllabus Coverage</li>
    <li>200 Chapter-Wise MCQs with Explanations</li>
    <li>100 Golden One-Liners for Fast Revision</li>
    <li>Hands-on Practical Lab Exercises</li>
  </ul>
</body>
</html>`,
    outputExplanation: "सादे बुलेट्स की जगह हरे रंग का कस्टम बुलेट (> ) और नीले बॉर्डर वाले सुंदर कार्ड्स दिखेंगे।",
    realWorldAnalogy: "जैसे एक सादे नोटपैड पर हाथ से स्टार या टिक का निशान बनाकर जरूरी काम लिखे जाते हैं, वैसे ही CSS लिस्ट को आकर्षक बनाती है।",
    importantPoints: [
      "list-style: none का उपयोग नेविगेशन मेन्यू में बुलेट्स हटाने हेतु अनिवार्य है।",
      "list-style-position: inside बुलेट को टेक्स्ट ब्लॉक के अंदर ले आता है।",
      "::before स्यूडो-एलिमेंट से कस्टम फॉन्ट आइकॉन्स लगाए जा सकते हैं।"
    ],
    commonMistakes: [
      "`list-style-type: none` करने के बाद भी बाएँ हाथ पर गैप रहना (ब्राउज़र का डिफ़ॉल्ट `padding-left: 40px` हटाना भी जरूरी होता है: `padding: 0`)."
    ],
    examPerspective: "प्रश्न: 'HTML लिस्ट से बुलेट्स हटाने के लिए कौन सी CSS प्रॉपर्टी उपयोग होती है?' (list-style-type: none).",
    quickRevision: "list-style-type मार्कर बदलता है, list-style: none बुलेट हटाता है, list-style-image कस्टम इमेज लगाता है।",
    relatedTopics: ["lists", "css-menu-design", "css-selectors"],
    practiceTask: "एक अनऑर्डर्ड लिस्ट बनाएं और CSS से बुलेट की जगह '->' एरो या कस्टम बुलेट स्टाइल लगाएं।"
  },
  {
    id: "u4-t6",
    slug: "css-tables",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Tables",
    hindiTitle: "CSS टेबल डिजाइन (Styling, Borders, Zebra Striping & Hover)",
    definitionEnglish: "CSS table styling transforms plain HTML tables into attractive, legible data matrices by controlling border-collapse, spacing, alternating row colors (Zebra striping using :nth-child), hover highlighting (:hover), and responsive table wrappers.",
    definitionHindi: "CSS टेबल स्टाइलिंग साधारण HTML टेबल्स को सुंदर और आसानी से पढ़ी जाने वाली डेटा तालिकाओं में बदलती है; इसमें border-collapse, पैडिंग, एकांतर पंक्ति रंग (Zebra striping via :nth-child), हॉवर प्रभाव (:hover) और रिस्पॉन्सिव टेबल रैपर्स शामिल हैं।",
    simpleWords: "HTML की टेबल पुरानी 1995 जैसी दोहरी काली लाइनों वाली दिखती है। CSS से हम उसकी दोहरी लाइनों को जोड़कर एक कर देते हैं, एक पंक्ति को सफेद और अगली को हल्की नीली (Zebra Striping) बनाते हैं, और माउस ले जाने पर पंक्ति चमकने लगती है।",
    whyImportant: "डैशबोर्ड्स, वित्तीय रिपोर्टों और परीक्षा परिणामों को आधुनिक और साफ-सुथरा दिखाने के लिए CSS टेबल डिजाइनिंग अत्यंत आवश्यक है।",
    detailedExplanation: `### CSS टेबल की मुख्य प्रॉपर्टीज:
1. **\`border-collapse: collapse;\` (अति महत्वपूर्ण):**
   - HTML टेबल की डिफ़ॉल्ट दोहरी (Double) बॉर्डर्स को एक पतली सुंदर एकल बॉर्डर में बदल देता है।
2. **Padding on \`<th>\` and \`<td>\`:**
   - सेल के भीतर पर्याप्त हवा (Spacing) देना (\`padding: 10px 14px;\`)।
3. **Zebra Striping (एकांतर रंग):**
   - \`tr:nth-child(even) { background-color: #f8fafc; }\`
   - सम पंक्तियों को हल्का बैकग्राउंड देकर आंखों के लिए पढ़ना आसान बनाना।
4. **Hover Highlight:**
   - \`tr:hover { background-color: #e0f2fe; }\`
   - माउस ले जाने पर पूरी रो का रंग बदलकर यूजर का फोकस बनाए रखना।
5. **Table Header Styling:**
   - \`th { background-color: #0284c7; color: white; text-align: left; }\``,
    syntax: `/* Modern Responsive Clean Table */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
}
tr:nth-child(even) { background-color: #f8fafc; }
tr:hover { background-color: #f0fdf4; }`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
      font-family: sans-serif;
    }
    th {
      background-color: #0284c7;
      color: white;
      padding: 12px;
      text-align: left;
    }
    td {
      padding: 10px 12px;
      border-bottom: 1px solid #cbd5e1;
    }
    /* Zebra Striping */
    tr:nth-child(even) { background-color: #f8fafc; }
    /* Hover effect */
    tr:hover { background-color: #e0f2fe; cursor: pointer; }
  </style>
</head>
<body>
  <h2>O-Level Module Marks Distribution</h2>
  <table>
    <tr>
      <th>Module Code</th>
      <th>Module Name</th>
      <th>Written Marks</th>
    </tr>
    <tr>
      <td>M1-R5.1</td>
      <td>Information Technology Tools</td>
      <td>100</td>
    </tr>
    <tr>
      <td>M2-R5.1</td>
      <td>Web Designing & Publishing</td>
      <td>100</td>
    </tr>
    <tr>
      <td>M3-R5.1</td>
      <td>Python Programming</td>
      <td>100</td>
    </tr>
  </table>
</body>
</html>`,
    outputExplanation: "टेबल में नीला हेडर दिखेगा, एक पंक्ति सफेद और अगली हल्की स्लेटी दिखेगी, और माउस ले जाने पर पंक्ति हल्के नीले रंग में हाइलाइट होगी।",
    realWorldAnalogy: "जैसे एक पेशेवर बहीखाता (Ledger) में अलग-अलग रंगों की लाइनें होती हैं ताकि आंखें एक रो से दूसरी रो में न भटकें, ज़ेबरा स्ट्राइपिंग वही काम करती है।",
    importantPoints: [
      "border-collapse: collapse टेबल की सबसे महत्वपूर्ण प्रॉपर्टी है।",
      "ज़ेबरा स्ट्राइपिंग के लिए :nth-child(even) या :nth-child(odd) स्यूडो-क्लास का उपयोग होता है।",
      ":hover से माउस ले जाने पर रो हाइलाइट होती है।"
    ],
    commonMistakes: [
      "`border-collapse: collapse` लगाना भूल जाना (जिससे टेबल पुरानी दोहरी लाइनों वाली दिखती है)।"
    ],
    examPerspective: "प्रश्न: 'टेबल की दोहरी बॉर्डर को एकल बॉर्डर में बदलने वाली CSS प्रॉपर्टी कौन सी है?' (border-collapse: collapse), 'Zebra Striping के लिए कौन सा स्यूडो-क्लास उपयोग होता है?' (:nth-child).",
    quickRevision: "border-collapse: collapse बॉर्डर मिलाता है, :nth-child(even) ज़ेबरा पंक्तियां बनाता है, :hover रो को चमकाता है।",
    relatedTopics: ["tables-and-attributes", "w3-css-tables-and-list", "css-selectors"],
    practiceTask: "एक 5 पंक्तियों की टेबल बनाएं जिसमें सम पंक्तियों पर पीला बैकग्राउंड और हॉवर पर हरा बैकग्राउंड आए।"
  },
  {
    id: "u4-t7",
    slug: "css-menu-design",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Menu Design (Horizontal & Vertical Navigation)",
    hindiTitle: "CSS मेन्यू डिजाइन (क्षैतिज एवं लंबवत नेविगेशन मेन्यू)",
    definitionEnglish: "CSS Menu Design transforms semantic HTML unordered lists (<ul>, <li>) into interactive, accessible horizontal or vertical navigation bars using flexbox, display inline-block, list-style none, hover transitions, and dropdown visibility toggling.",
    definitionHindi: "CSS मेन्यू डिजाइन सेमांटिक HTML अनऑर्डर्ड लिस्ट्स (<ul>, <li>) को flexbox, display inline-block, list-style none, हॉवर ट्रांजिशन्स और ड्रॉपडाउन विजिबिलिटी टॉगलिंग का उपयोग करके इंटरएक्टिव क्षैतिज या लंबवत नेविगेशन बार में परिवर्तित करता है।",
    simpleWords: "वेबसाइट के ऊपर जो नीली या काली पट्टी होती है जिसमें Home, About, Courses, Contact लिखा होता है और माउस ले जाने पर रंग बदलता है, वही CSS नेविगेशन मेन्यू है।",
    whyImportant: "नेविगेशन मेन्यू वेबसाइट का कम्पास है। यूजर इसके जरिए ही पूरी साइट में घूमता है। कोई भी वेबसाइट बिना मेन्यू के पूरी नहीं हो सकती।",
    detailedExplanation: `### 1. क्षैतिज (Horizontal) मेन्यू बनाने के 4 मुख्य चरण:
1. **HTML ढांचा:** \`<nav><ul><li><a href="...">Home</a></li>...</ul></nav>\`
2. **बुलेट्स और मार्जिन हटाना:** \`ul { list-style: none; margin: 0; padding: 0; }\`
3. **आइटम्स को एक लाइन में लाना:**
   - तरीका A (आधुनिक): \`ul { display: flex; gap: 20px; }\`
   - तरीका B (पारंपरिक): \`li { display: inline-block; }\` या \`float: left;\`
4. **लिंक स्टाइलिंग व हॉवर:**
   - \`a { text-decoration: none; padding: 10px 16px; display: block; color: white; }\`
   - \`a:hover { background-color: #0284c7; color: white; }\`

### 2. ड्रॉपडाउन मेन्यू (Sub-menu):
- पैरेंट \`<li>\` के अंदर एक और \`<ul>\` (सब-मेन्यू) रखा जाता है।
- डिफ़ॉल्ट रूप से सब-मेन्यू छिपा रहता है: \`.dropdown-content { display: none; position: absolute; }\`
- पैरेंट पर माउस ले जाने पर दिखता है: \`.dropdown:hover .dropdown-content { display: block; }\``,
    syntax: `/* Horizontal Navbar */
nav ul {
  display: flex;
  list-style: none;
  background: #1e293b;
  margin: 0; padding: 0;
}
nav a {
  display: block;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
}
nav a:hover { background: #0284c7; }`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; margin: 0; }
    nav { background-color: #0f172a; }
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    nav li { position: relative; }
    nav a {
      display: block;
      color: #cbd5e1;
      padding: 14px 20px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.2s;
    }
    nav a:hover {
      background-color: #0284c7;
      color: white;
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">O-Level Syllabus</a></li>
      <li><a href="#">MCQ Practice</a></li>
      <li><a href="#">Practical Lab</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
  <div style="padding: 20px;">
    <h2>Hover over the menu items above!</h2>
  </div>
</body>
</html>`,
    outputExplanation: "काले रंग की आधुनिक नेविगेशन पट्टी दिखेगी, और किसी भी लिंक पर माउस ले जाते ही वह नीले रंग में एनिमेट होकर बदल जाएगा।",
    realWorldAnalogy: "जैसे एक मॉल में प्रवेश करते ही ऊपर बड़े बोर्ड पर लिखा होता है 'ग्राउंड फ्लोर: जूते | फर्स्ट फ्लोर: कपड़े | सेकंड फ्लोर: फूड कोर्ट', नेविगेशन मेन्यू वेबसाइट का दिशा-सूचक है।",
    importantPoints: [
      "मेन्यू हमेशा <ul> और <li> से बनाया जाता है ताकि सर्च इंजनों को समझ आए।",
      "text-decoration: none से लिंक के नीचे की नीली अंडरलाइन हटती है।",
      "display: block देने से पूरे पैडिंग एरिया पर क्लिक किया जा सकता है।",
      "flexbox या inline-block से वर्टिकल लिस्ट हॉरिजॉन्टल बन जाती है।"
    ],
    commonMistakes: [
      "एंकर टैग पर `display: block` लगाना भूल जाना (जिससे केवल टेक्स्ट पर क्लिक होता है, पूरे बटन एरिया पर नहीं)।"
    ],
    examPerspective: "CSS हॉरिजॉन्टल मेन्यू बनाने की तकनीक, list-style: none की भूमिका, और a:hover इफेक्ट पर प्रैक्टिकल और थ्योरी दोनों में प्रश्न आते हैं।",
    quickRevision: "<ul> + <li> + <a> को list-style: none, display: flex/inline-block, और :hover स्टाइल देकर आधुनिक मेन्यू बनाया जाता है।",
    relatedTopics: ["css-lists", "css-properties-background-block-box-list-border-positioning", "anchor-links-and-named-anchors"],
    practiceTask: "एक वर्टिकल (साइडबार) मेन्यू बनाएं जिसमें 4 लिंक्स हों और माउस ले जाने पर बैकग्राउंड गहरा नीला हो जाए।"
  },
  {
    id: "u4-t8",
    slug: "css-image-gallery",
    unit: 4,
    unitSlug: "unit-4",
    unitTitle: "Cascading Style Sheets (CSS)",
    title: "CSS Image Gallery",
    hindiTitle: "CSS इमेज गैलरी (Responsive Grid & Hover Effects)",
    definitionEnglish: "A CSS Image Gallery organizes collections of images into a responsive multi-column grid layout, featuring thumbnail card borders, descriptive captions, drop shadows, and scale-on-hover zoom transitions using CSS flexbox or grid.",
    definitionHindi: "CSS इमेज गैलरी तस्वीरों के संग्रह को एक रिस्पॉन्सिव बहु-स्तंभ ग्रिड लेआउट में व्यवस्थित करती है, जिसमें थंबनेल कार्ड बॉर्डर्स, वर्णनात्मक कैप्शन, ड्रॉप शैडो और CSS ट्रांजिशन्स द्वारा माउस ले जाने पर जूम (Scale) होने वाले प्रभाव शामिल होते हैं।",
    simpleWords: "फोटो गैलरी का मतलब है एक सुंदर फोटो एल्बम जैसा वेबपेज, जहाँ कई छोटी तस्वीरें अगल-बगल सजी हों, और जैसे ही आप किसी फोटो पर माउस ले जाएं, वह फोटो हल्की सी बड़ी होकर (Zoom) चमकने लगे।",
    whyImportant: "ई-कॉमर्स उत्पादों, फोटोग्राफी पोर्टफोलियो, और कॉलेज फेस्ट की तस्वीरों को प्रदर्शित करने के लिए इमेज गैलरी सबसे लोकप्रिय वेब कंपोनेंट है।",
    detailedExplanation: `### आधुनिक CSS इमेज गैलरी के 4 प्रमुख घटक:
1. **Grid Container:**
   - \`display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;\`
   - यह ऑटो-फिट ग्रिड मोबाइल पर स्वतः 1 कॉलम, टैबलेट पर 2-3 कॉलम और पीसी पर 4 कॉलम बना देती है!
2. **Card Container:**
   - बॉर्डर्स, गोल कोने (\`border-radius: 8px\`), और ड्रॉप शैडो (\`box-shadow\`)।
   - \`overflow: hidden;\` ताकि इमेज ज़ूम होने पर कार्ड से बाहर न फैले।
3. **Smooth Hover Zoom Effect:**
   - \`img { width: 100%; height: 160px; object-fit: cover; transition: transform 0.3s ease; }\`
   - \`.card:hover img { transform: scale(1.08); }\`
4. **Caption Box:**
   - फोटो के नीचे उसका शीर्षक और विवरण।`,
    syntax: `/* Responsive Gallery Container */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}
.gallery-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #f8fafc; padding: 20px; }
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    }
    .card-banner {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
    }
    .desc { padding: 12px; text-align: center; font-size: 14px; }
  </style>
</head>
<body>
  <h2>Interactive CSS Course Gallery</h2>
  <div class="gallery">
    <div class="card">
      <div class="card-banner" style="background:#0284c7;">HTML5</div>
      <div class="desc">HyperText Markup Language</div>
    </div>
    <div class="card">
      <div class="card-banner" style="background:#0d9488;">CSS3</div>
      <div class="desc">Cascading Style Sheets</div>
    </div>
    <div class="card">
      <div class="card-banner" style="background:#d97706;">W3.CSS</div>
      <div class="desc">Fast Responsive Framework</div>
    </div>
    <div class="card">
      <div class="card-banner" style="background:#7c3aed;">JavaScript</div>
      <div class="desc">Client-Side Interactivity</div>
    </div>
  </div>
</body>
</html>`,
    outputExplanation: "4 सुंदर कार्ड्स अगल-बगल दिखेंगे, और किसी भी कार्ड पर माउस ले जाने पर वह थोड़ा ऊपर उठेगा और उसकी छाया गहरी हो जाएगी।",
    realWorldAnalogy: "जैसे एक आर्ट गैलरी में दीवार पर सुंदर फ्रेम में पेंटिंग्स टंगी होती हैं और नीचे उनका नाम लिखा होता है, CSS इमेज गैलरी ठीक वही डिजिटल अनुभव देती है।",
    importantPoints: [
      "CSS Grid से गैलरी बिना किसी मेहनत के पूरी तरह रिस्पॉन्सिव बन जाती है।",
      "transform: scale() या translateY() से स्मूथ 3D हॉवर इफेक्ट मिलता है।",
      "object-fit: cover से इमेजेस का अनुपात बिगड़े बिना वे बॉक्स में फिट हो जाती हैं।"
    ],
    commonMistakes: [
      "`overflow: hidden` न लगाना (जिससे इमेज ज़ूम होने पर कार्ड के कोनों से बाहर निकल जाती है)।"
    ],
    examPerspective: "CSS इमेज गैलरी के निर्माण, transform प्रॉपर्टी, और रिस्पॉन्सिव ग्रिड लेआउट पर प्रैक्टिकल परीक्षा में प्रश्न पूछा जाता है।",
    quickRevision: "CSS इमेज गैलरी Grid/Flexbox, कार्ड कंटेनर्स, overflow: hidden, और :hover ज़ूम इफेक्ट से बनाई जाती है।",
    relatedTopics: ["image-tag", "css-properties-background-block-box-list-border-positioning", "w3-css-images"],
    practiceTask: "3 कार्ड्स वाली एक इमेज गैलरी बनाएं जिसमें हॉवर करने पर कार्ड का बॉर्डर नीले रंग में चमकने लगे।"
  }
];
