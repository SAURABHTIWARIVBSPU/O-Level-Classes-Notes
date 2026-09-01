// Unit 3: HTML Basics & HTML5 - Complete Topic Notes

export const unit3Topics = [
  {
    id: "u3-t1",
    slug: "html-introduction",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "HTML Introduction",
    hindiTitle: "HTML का परिचय",
    definitionEnglish: "HTML (HyperText Markup Language) is the standard markup language used worldwide to create, structure, and format web pages and web applications delivered across the World Wide Web.",
    definitionHindi: "HTML (हाइपरटेक्स्ट मार्कअप लैंग्वेज) वर्ल्ड वाइड वेब पर वेबपेजों और वेब ऐप्लिकेशन्स की संरचना और प्रारूप तैयार करने के लिए उपयोग की जाने वाली सार्वभौमिक मानक मार्कअप भाषा है।",
    simpleWords: "HTML कोई प्रोग्रामिंग भाषा (जैसे C या Python) नहीं है जिसमें गणितीय लॉजिक चले; यह टैग्स (<tag>) का एक ऐसा समूह है जो वेब ब्राउज़र को बताता है कि कौन सी लाइन हेडिंग है, कौन सा पैराग्राफ है, और कहाँ इमेज लगानी है।",
    whyImportant: "HTML दुनिया के प्रत्येक वेबपेज की रीढ़ की हड्डी (कंकाल) है। बिना HTML के कोई भी ब्राउज़र किसी सामग्री को स्क्रीन पर प्रदर्शित नहीं कर सकता।",
    detailedExplanation: `### 1. 'HTML' के नाम का अर्थ:
- **HyperText (हाइपरटेक्स्ट):** ऐसा टेक्स्ट जिसमें साधारण अक्षरों के अलावा अन्य वेबपेजों पर जाने वाले क्लिक करने योग्य लिंक्स (Hyperlinks) समाहित होते हैं।
- **Markup (मार्कअप):** किसी सादे टेक्स्ट को टैग्स (जैसे \`<h1>\`, \`<p>\`) के अंदर लपेटकर ब्राउज़र को उसका अर्थ और रूप बताना।
- **Language (लैंग्वेज):** ब्राउज़र और कंप्यूटर के बीच संचार का एक मानक माध्यम।

### 2. इतिहास एवं विकास:
- **1991:** Sir Tim Berners-Lee ने CERN में 18 मूल टैग्स के साथ HTML का पहला ड्राफ्ट बनाया।
- **1995:** HTML 2.0 (IETF मानक)।
- **1997:** HTML 3.2 और HTML 4.01 (W3C मानक)।
- **2000:** XHTML 1.0 (सख्त XML नियम)।
- **2014:** **HTML5** आधिकारिक W3C अनुशंसा बना (वर्तमान मानक, WHATWG लिविंग स्टैंडर्ड)।`,
    syntax: `HTML Element Syntax:
<tagname attribute="value">Content goes here...</tagname>
└───┬───┘ └──────┬──────┘ └───────────┬─────────┘ └───┬────┘
Start Tag   Attribute           Content          End Tag`,
    codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to NIELIT O Level</h1>
    <p>HTML is very easy and fun to learn!</p>
  </body>
</html>`,
    outputExplanation: "ब्राउज़र `<h1>` को एक बड़े, मोटे शीर्षक के रूप में और `<p>` को एक सामान्य पैराग्राफ के रूप में प्रदर्शित करता है।",
    realWorldAnalogy: "जैसे एक नए मकान के निर्माण में सबसे पहले ईंटों और सीमेंट से दीवारें और कमरे (कंकाल) बनाए जाते हैं, वही काम वेबपेज में HTML करता है।",
    importantPoints: [
      "HTML का पूर्ण रूप: HyperText Markup Language.",
      "HTML केस-इंसेंसिटिव (Case-insensitive) है (`<P>` और `<p>` समान हैं, लेकिन स्मॉल लेटर्स मानक हैं)।",
      "HTML फाइलों का एक्सटेंशन .html या .htm होता है।",
      "आविष्कारक: टिम बर्नर्स-ली (1991)।"
    ],
    commonMistakes: [
      "HTML को प्रोग्रामिंग लैंग्वेज समझना (इसमें लूप, वैरिएबल और कंडीशनल लॉजिक नहीं होते, यह मार्कअप भाषा है)।",
      "क्लोजिंग टैग (`</tag>`) लगाना भूल जाना।"
    ],
    examPerspective: "HTML का पूर्ण रूप, आविष्कारक, आविष्कार का वर्ष, और मार्कअप भाषा की प्रकृति पर हर साल वस्तुनिष्ठ प्रश्न आते हैं।",
    quickRevision: "HTML वेबपेज का कंकाल बनाने वाली मार्कअप भाषा है। आविष्कारक: टिम बर्नर्स-ली (1991)। मानक: HTML5.",
    relatedTopics: ["basic-structure-of-html", "head-section-and-elements", "html5-introduction"],
    practiceTask: "नोटपैड में HTML का पूर्ण रूप और अपने 3 पसंदीदा विषयों को हेडिंग व पैराग्राफ में लिखकर ब्राउज़र में खोलें।"
  },
  {
    id: "u3-t2",
    slug: "basic-structure-of-html",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Basic Structure of HTML",
    hindiTitle: "HTML की मूल संरचना (Basic Structure of HTML)",
    definitionEnglish: "The basic structure of an HTML document consists of a mandatory Document Type Declaration (<!DOCTYPE html>), followed by the root <html> tag enclosing two primary structural divisions: the <head> section (metadata) and the <body> section (visible content).",
    definitionHindi: "एक HTML दस्तावेज़ की मूल संरचना में सबसे ऊपर अनिवार्य डॉक्यूमेंट टाइप डिक्लेरेशन (<!DOCTYPE html>) होता है, जिसके बाद रूट <html> टैग आता है जो दो मुख्य भागों को समेटे रहता है: <head> सेक्शन (मेटाडाटा) और <body> सेक्शन (दृश्यमान सामग्री)।",
    simpleWords: "हर HTML पेज इंसान के शरीर जैसा होता है: सबसे ऊपर उसका सिर (<head>) जिसमें उसका नाम और पहचान होती है, और नीचे उसका धड़ (<body>) जिसमें वह सब कुछ होता है जो असल में दिखता है।",
    whyImportant: "किसी भी वेबपेज को ब्राउज़र द्वारा बिना एरर और आधुनिक मानकों के अनुसार सही से रेंडर करने के लिए यह बुनियादी ढांचा अनिवार्य है।",
    detailedExplanation: `### HTML5 के 4 मुख्य संरचनात्मक घटक:
1. **\`<!DOCTYPE html>\` (Document Type Declaration):**
   - यह ब्राउज़र को सूचित करता है कि यह दस्तावेज़ **HTML5** मानक में लिखा गया है।
   - यह कोई HTML टैग नहीं है, बल्कि ब्राउज़र के लिए एक निर्देश है।
   - इसके न होने पर ब्राउज़र 'Quirks Mode' में चला जाता है।
2. **\`<html lang="en">\` (Root Element):**
   - यह पूरे पेज का मुख्य आवरण है। सभी अन्य टैग्स इसी के अंदर आते हैं।
   - \`lang\` एट्रिब्यूट भाषा (जैसे \`en\` अंग्रेजी, \`hi\` हिंदी) तय करता है जो स्क्रीन रीडर्स के लिए जरूरी है।
3. **\`<head>\` (Header / Metadata Section):**
   - इसमें ऐसी जानकारी होती है जो सीधे पेज पर नहीं दिखती (टाइटल, फोंट्स, स्टाइल्स, व्यूकंट्रोल)।
4. **\`<body>\` (Body Section):**
   - यूजर को स्क्रीन पर दिखने वाला सारा कंटेंट (टेक्स्ट, इमेजेस, वीडियो, टेबल्स, फॉर्म्स) इसी के अंदर होता है।`,
    syntax: `Standard HTML5 Structure:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>
    <h1>Visible Heading</h1>
    <p>Visible Content</p>
  </body>
</html>`,
    codeExample: `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <title>O-Level Web Design Class</title>
</head>
<body>
  <h1>स्वागत है! NIELIT M2-R5.1</h1>
  <p>यह HTML5 की मानक संरचना का एक सजीव उदाहरण है।</p>
</body>
</html>`,
    outputExplanation: "ब्राउज़र टैब पर 'O-Level Web Design Class' दिखेगा, और सफेद कैनवास पर हेडिंग और पैराग्राफ दिखेगा।",
    realWorldAnalogy: "एक पत्र (Letter) में ऊपर का लिफाफा (Head) केवल डाकिए और पते के लिए होता है, जबकि अंदर का पत्र (Body) पढ़ने वाले के लिए होता है।",
    importantPoints: [
      "<!DOCTYPE html> केस-इंसेंसिटिव है लेकिन हमेशा पहली लाइन में लिखा जाता है।",
      "<html> टैग दस्तावेज़ का रूट एलिमेंट कहलाता है।",
      "<body> टैग के अंदर लिखा गया कंटेंट ही यूजर को स्क्रीन पर दिखता है।"
    ],
    commonMistakes: [
      "<body> टैग को <head> के अंदर रख देना (दोनों स्वतंत्र और समानांतर होने चाहिए)।",
      "<!DOCTYPE html> लिखना भूल जाना जिससे पेज Quirks Mode में चला जाए।"
    ],
    examPerspective: "HTML5 के डॉक्युटाइप डिक्लेरेशन का सिंटैक्स, रूट एलिमेंट का नाम, और हेड व बॉडी सेक्शन की भूमिका पर सीधे प्रश्न आते हैं।",
    quickRevision: "HTML5 संरचना: <!DOCTYPE html> -> <html> -> <head> (मेटाडाटा) + <body> (दृश्य सामग्री).",
    relatedTopics: ["html-introduction", "head-section-and-elements", "formatting-tags"],
    practiceTask: "खाली एडिटर में बिना देखे HTML5 का पूरा ढांचा 1 मिनट में टाइप करने का अभ्यास करें।"
  },
  {
    id: "u3-t3",
    slug: "head-section-and-elements",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Head Section and Elements of Head Section",
    hindiTitle: "Head सेक्शन और उसके प्रमुख एलिमेंट्स",
    definitionEnglish: "The <head> element is a container for metadata (machine-readable data about the HTML document) and external resource links that are not displayed directly on the webpage canvas, including <title>, <meta>, <link>, <style>, <script>, and <base>.",
    definitionHindi: "<head> एलिमेंट वेबपेज के मेटाडाटा (दस्तावेज़ की पृष्ठभूमि जानकारी) और बाहरी संसाधनों के लिंक्स का एक कंटेनर है जो सीधे स्क्रीन पर प्रदर्शित नहीं होता; इसमें <title>, <meta>, <link>, <style>, <script> और <base> शामिल हैं।",
    simpleWords: "यह वेबपेज का 'ब्रेन' है। इसमें पेज का नाम (Title), मोबाइल सेटिंग (Viewport), और सुंदरता लाने वाली फाइलें (CSS) जोड़ी जाती हैं।",
    whyImportant: "सर्च इंजन ऑप्टिमाइजेशन (SEO), सोशल मीडिया शेयरिंग, मोबाइल रिस्पॉन्सिवनेस और स्टाइलशीट लोडिंग पूरी तरह Head सेक्शन के तत्वों पर निर्भर करती है।",
    detailedExplanation: `### Head सेक्शन के 6 प्रमुख एलिमेंट्स:
1. **\`<title>\` (अनिवार्य):** ब्राउज़र के टैब बार और गूगल सर्च रिजल्ट्स में दिखने वाला मुख्य शीर्षक।
2. **\`<meta>\` (मेटाडाटा):**
   - \`<meta charset="UTF-8">\`: वर्ण एन्कोडिंग (UTF-8 सभी भाषाओं को सपोर्ट करता है)।
   - \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`: मोबाइल रिस्पॉन्सिवनेस।
   - \`<meta name="description" content="...">\`: सर्च इंजन स्निपेट।
   - \`<meta name="keywords" content="...">\`: सर्च कीवर्ड्स।
3. **\`<link>\`:** बाहरी संसाधनों जैसे \`style.css\` या फेविकॉन (Favicon) को जोड़ना।
   \`<link rel="stylesheet" href="style.css">\`
4. **\`<style>\`:** इंटरनल CSS लिखने के लिए।
5. **\`<script>\`:** जावास्क्रिप्ट फाइल जोड़ने या सीधे स्क्रिप्ट लिखने के लिए।
6. **\`<base>\`:** पेज के सभी रिलेटिव URLs के लिए एक बेस URL तय करना।`,
    syntax: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
  <style> body { font-family: sans-serif; } </style>
  <script src="app.js"></script>
</head>`,
    codeExample: `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="NIELIT O Level Web Designing Study Portal">
  <meta name="author" content="Saurabh Tiwari">
  <title>NIELIT Head Elements Master</title>
  <style>
    h1 { color: #0284c7; }
  </style>
</head>
<body>
  <h1>Head सेक्शन के एलिमेंट्स सफलतापूर्वक लोड हुए!</h1>
</body>
</html>`,
    outputExplanation: "ब्राउज़र टैब पर 'NIELIT Head Elements Master' दिखेगा और हेड सेक्शन में लिखी गई CSS से हेडिंग नीले रंग में दिखेगी।",
    realWorldAnalogy: "जैसे किसी पुस्तक के आरंभिक पृष्ठ पर लेखक का नाम, प्रकाशक, ISBN नंबर और विषय-सूची होती है जो मुख्य कहानी का हिस्सा नहीं होते पर पूरी पुस्तक को पहचान देते हैं।",
    importantPoints: [
      "<title> टैग हेड सेक्शन के अंदर होना कानूनी रूप से अनिवार्य है।",
      "<meta charset=\"UTF-8\"> आधुनिक वेब का मानक एन्कोडिंग है।",
      "<link> टैग एम्प्टी (Void) टैग है, इसका कोई क्लोजिंग टैग नहीं होता।"
    ],
    commonMistakes: [
      "<title> टैग को <body> के अंदर लिख देना (यह हमेशा <head> में होना चाहिए)।",
      "Viewport मेटा टैग छोड़ देना जिससे मोबाइल पर पेज बहुत छोटा दिखे।"
    ],
    examPerspective: "परीक्षा में प्रश्न: 'ब्राउज़र के टाइटल बार में दिखने वाला टैग कौन सा है?' (<title>), '<link> टैग का उपयोग कहाँ होता है?' (Head सेक्शन में External CSS जोड़ने हेतु).",
    quickRevision: "<head> मेटाडाटा कंटेनर है। मुख्य टैग्स: <title>, <meta>, <link>, <style>, <script>, <base>.",
    relatedTopics: ["basic-structure-of-html", "responsive-web-designing", "types-of-css"],
    practiceTask: "अपने वेबपेज के हेड सेक्शन में फेविकॉन (`<link rel=\"icon\" href=\"logo.png\">`) जोड़कर ब्राउज़र टैब में लोगो देखें।"
  },
  {
    id: "u3-t4",
    slug: "formatting-tags",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Formatting Tags: Bold, Italic, Underline, Strikethrough",
    hindiTitle: "फॉर्मेटिंग टैग्स: Bold, Italic, Underline, Strikethrough",
    definitionEnglish: "HTML Formatting Tags are inline elements used to alter the visual presentation and semantic importance of text, primarily including bold (<b>, <strong>), italic (<i>, <em>), underline (<u>, <ins>), and strikethrough (<s>, <del>).",
    definitionHindi: "HTML फॉर्मेटिंग टैग्स इनलाइन एलिमेंट्स हैं जिनका उपयोग टेक्स्ट के दृश्य रूप और सेमांटिक महत्व को बदलने के लिए किया जाता है; मुख्य रूप से बोल्ड (<b>, <strong>), इटैलिक (<i>, <em>), अंडरलाइन (<u>, <ins>) और स्ट्राइकथ्रू (<s>, <del>)।",
    simpleWords: "जब आपको किसी शब्द को मोटा (Bold), तिरछा (Italic), नीचे रेखा खींचना (Underline) या बीच से काटना (Strikethrough) हो, तो इन फॉर्मेटिंग टैग्स का उपयोग किया जाता है।",
    whyImportant: "पाठक का ध्यान महत्वपूर्ण तथ्यों पर खींचने और परीक्षा नोट्स में कीवर्ड्स को हाइलाइट करने के लिए फॉर्मेटिंग टैग्स आवश्यक हैं।",
    detailedExplanation: `### 1. Physical Tags बनाम Semantic Tags:
- **Bold:**
  - \`<b>\` (Bold): केवल टेक्स्ट को मोटा दिखाता है (कोई अतिरिक्त अर्थ नहीं)।
  - \`<strong>\` (Strong Importance): टेक्स्ट को मोटा भी करता है और स्क्रीन रीडर्स को बताता है कि यह अत्यंत महत्वपूर्ण है।
- **Italic:**
  - \`<i>\` (Italic): केवल टेक्स्ट को तिरछा दिखाता है।
  - \`<em>\` (Emphasized): टेक्स्ट को तिरछा करता है और मौखिक तनाव (Emphasis) दर्शाता है।
- **Underline:**
  - \`<u>\` (Underline): टेक्स्ट के नीचे रेखा खींचता है।
  - \`<ins>\` (Inserted): दर्शाता है कि यह नया कंटेंट जोड़ा गया है (अंडरलाइन के साथ)।
- **Strikethrough:**
  - \`<s>\` (Strikethrough): टेक्स्ट के बीच से रेखा खींचता है।
  - \`<del>\` (Deleted): दर्शाता है कि यह कंटेंट हटा या रद्द दिया गया है (ई-कॉमर्स में पुरानी कीमत दर्शाने हेतु)।`,
    syntax: `Formatting Tags Syntax:
<b>Bold Text</b> or <strong>Strong Importance</strong>
<i>Italic Text</i> or <em>Emphasized Text</em>
<u>Underlined Text</u> or <ins>Inserted Text</ins>
<s>Strikethrough</s> or <del>Deleted Text</del>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Text Formatting Demonstration</h2>
  <p>This is <b>Bold</b> and this is <strong>Strongly Important</strong>.</p>
  <p>This is <i>Italic</i> and this is <em>Emphasized</em>.</p>
  <p>This is <u>Underlined</u> text.</p>
  <p>Old Price: <s>₹500</s> <del>₹400</del> | New Price: <b>₹299</b></p>
  <p>Water formula: H<sub>2</sub>O | Math: (a + b)<sup>2</sup></p>
</body>
</html>`,
    outputExplanation: "पुराने दाम पर बीच से कटी हुई रेखा दिखेगी, नए दाम पर मोटा टेक्स्ट दिखेगी, और सबस्क्रिप्ट/सुपरस्क्रिप्ट में 2 ऊपर और नीचे दिखेगा।",
    realWorldAnalogy: "जैसे परीक्षा की कॉपी में आप नीले पेन के अलावा काले स्केच से हेडिंग मोटी करते हैं या पेंसिल से नीचे लाइन खींचते हैं, वैसे ही ये टैग्स काम करते हैं।",
    importantPoints: [
      "<b> और <strong> दोनों दिखने में मोटे होते हैं, लेकिन <strong> सेमांटिक महत्व रखता है।",
      "<i> और <em> दोनों तिरछे होते हैं, लेकिन <em> वॉइस रीडर्स में जोर देकर पढ़ा जाता है।",
      "<del> का उपयोग ई-कॉमर्स में ऑफर वाली घटी हुई कीमतें दिखाने में बहुत होता है।"
    ],
    commonMistakes: [
      "सामान्य टेक्स्ट में <u> का अत्यधिक प्रयोग करना (यूजर अंडरलाइन देखकर उसे हाइपरलिंक समझकर क्लिक करने लगता है)।"
    ],
    examPerspective: "<b> बनाम <strong> और <i> बनाम <em> में सेमांटिक अंतर पर बहुविकल्पीय प्रश्न अक्सर पूछे जाते हैं।",
    quickRevision: "Bold: <b> व <strong>; Italic: <i> व <em>; Underline: <u> व <ins>; Strikethrough: <s> व <del>.",
    relatedTopics: ["paragraphs", "pre-tag", "div-tag"],
    practiceTask: "एक वाक्य लिखें: 'O-Level परीक्षा 100 अंकों की होती है जिसमें पास होना अनिवार्य है' और '100' को Bold व 'अनिवार्य' को Underline करें।"
  },
  {
    id: "u3-t5",
    slug: "div-tag",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Div Tag",
    hindiTitle: "Div टैग (<div> Container)",
    definitionEnglish: "The <div> (division) tag is a generic block-level container element in HTML used to group other elements together for styling purposes (with CSS) or dynamic manipulation (with JavaScript), having no inherent semantic meaning.",
    definitionHindi: "<div> (डिवीजन) टैग HTML में एक सामान्य ब्लॉक-लेवल कंटेनर एलिमेंट है जिसका उपयोग CSS द्वारा स्टाइलिंग या जावास्क्रिप्ट द्वारा मैनिपुलेशन के लिए कई एलिमेंट्स को एक समूह में बांधने हेतु किया जाता है।",
    simpleWords: "<div> एक खाली डिब्बा (Cardboard Box) है। इसमें आप हेडिंग, इमेज और पैराग्राफ को एक साथ रखकर उस पूरे डिब्बे को एक साथ रंग सकते हैं, बॉर्डर दे सकते हैं या एक जगह से दूसरी जगह खिसका सकते हैं।",
    whyImportant: "CSS लेआउट, कार्ड डिजाइन, ग्रिड सिस्टम और वेबपेज को अलग-अलग सेक्शनों में बांटने के लिए <div> सबसे ज्यादा इस्तेमाल होने वाला टैग है।",
    detailedExplanation: `### <div> टैग की विशेषताएं:
1. **Block-Level Element:** यह हमेशा एक नई लाइन से शुरू होता है और अपने पैरेंट की पूरी उपलब्ध चौड़ाई (100% Width) घेरता है।
2. **No Visual Output Alone:** यदि <div> के अंदर कुछ न लिखा जाए और कोई CSS न दी जाए, तो स्क्रीन पर कुछ भी दिखाई नहीं देता।
3. **Styling Container:** इसके ऊपर \`class\` या \`id\` लगाकर CSS में बॉर्डर, पैडिंग, बैकग्राउंड और मार्जिन दिया जाता है।
4. **HTML5 सेमांटिक्स का विकल्प:** HTML5 आने से पहले पूरे पेज (हेडर, फूटर, साइडबार) को \`<div id="header">\`, \`<div id="footer">\` से ही बनाया जाता था।`,
    syntax: `<div class="card-container">
  <h3>Card Title</h3>
  <p>Card description text...</p>
</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    .my-box {
      background-color: #f0fdf4;
      border: 2px solid #16a34a;
      border-radius: 8px;
      padding: 16px;
      margin: 10px 0;
      max-width: 300px;
    }
  </style>
</head>
<body>
  <div class="my-box">
    <h3 style="color:#16a34a; margin:0;">Success Card</h3>
    <p>This entire box is grouped inside a single div container.</p>
  </div>
</body>
</html>`,
    outputExplanation: "<div> के कारण हेडिंग और पैराग्राफ दोनों एक हरे बॉर्डर वाले कार्ड के अंदर बंधे हुए सुंदर दिखते हैं।",
    realWorldAnalogy: "जैसे आप बाजार से अलग-अलग सामान (साबुन, टूथपेस्ट, ब्रश) खरीदकर उन्हें एक थैले (Div) में रख लेते हैं ताकि सब एक साथ ले जाया जा सके।",
    importantPoints: [
      "<div> ब्लॉक-लेवल एलिमेंट है।",
      "इसका कोई अंतर्निहित सेमांटिक अर्थ नहीं होता।",
      "इनलाइन ग्रुपिंग के लिए <span> और ब्लॉक ग्रुपिंग के लिए <div> का प्रयोग होता है।"
    ],
    commonMistakes: [
      "'Div Soup' बनाना (यानी हर छोटी चीज के लिए अनावश्यक 5-5 नेस्टेड <div> बना देना, जिससे कोड भारी हो जाता है)।"
    ],
    examPerspective: "<div> (Block) और <span> (Inline) के बीच अंतर पर O-Level परीक्षा में कई बार प्रश्न आ चुके हैं।",
    quickRevision: "<div> एक ब्लॉक-लेवल जेनेरिक कंटेनर है जिसका उपयोग एलिमेंट्स को ग्रुप करके CSS व JS लागू करने के लिए होता है।",
    relatedTopics: ["formatting-tags", "pre-tag", "css-selectors"],
    practiceTask: "एक <div> बनाएं जिसे नीला बैकग्राउंड और सफेद टेक्स्ट देकर एक 'Notice Box' का रूप दें।"
  },
  {
    id: "u3-t6",
    slug: "pre-tag",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Pre Tag",
    hindiTitle: "Pre टैग (Preformatted Text)",
    definitionEnglish: "The <pre> (preformatted text) tag in HTML is a block-level element that displays text in a fixed-width (monospace) font and preserves both whitespace (spaces, tabs) and line breaks exactly as typed in the source code.",
    definitionHindi: "<pre> (प्रीफॉर्मेटेड टेक्स्ट) टैग HTML में एक ऐसा ब्लॉक-लेवल एलिमेंट है जो टेक्स्ट को मोनोस्पेस (समान चौड़ाई वाले) फॉन्ट में दिखाता है और सोर्स कोड में टाइप किए गए स्पेस, टैब और लाइन ब्रेक को ठीक वैसे ही सुरक्षित रखता है।",
    simpleWords: "साधारण HTML में आप 10 स्पेस या 5 बार एंटर दबाएं, ब्राउज़र उसे केवल 1 स्पेस बना देता है। लेकिन <pre> टैग के अंदर आप जैसा लिखेंगे (शायरी, ASCII आर्ट, या प्रोग्रामिंग कोड), ब्राउज़र उसे हूबहू बिना बदले स्क्रीन पर दिखा देगा।",
    whyImportant: "कंप्यूटर कोड स्निपेट्स, ASCII आरेख, गणितीय मैट्रिक्स, और कविताओं को सही स्वरूप में दिखाने के लिए <pre> टैग अनिवार्य है।",
    detailedExplanation: `### साधारण <p> बनाम <pre> में मुख्य अंतर:
1. **White Space Collapsing:**
   - साधारण HTML में ब्राउज़र लगातार कई स्पेस को केवल एक स्पेस (White Space Collapse) में बदल देता है।
   - \`<pre>\` में प्रत्येक स्पेस और टैब सुरक्षित रहता है।
2. **Line Breaks:**
   - सामान्य पैराग्राफ में नई लाइन के लिए \`<br>\` लगाना अनिवार्य होता है।
   - \`<pre>\` में कीबोर्ड से दबाया गया 'Enter' स्वतः नई लाइन बनाता है।
3. **Font Family:**
   - \`<pre>\` डिफ़ॉल्ट रूप से **Monospace / Fixed-Width** फॉन्ट (जैसे Courier) में दिखता है जहां 'i' और 'w' दोनों समान चौड़ाई लेते हैं।`,
    syntax: `<pre>
Line 1
  Indented Line 2
Line 3
</pre>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h3>Comparison: Paragraph vs Pre Tag</h3>
  
  <p>
    Notice how      multiple spaces
    and enters are ignored by standard p tag.
  </p>

  <pre style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px;">
    Notice how      multiple spaces
    and enters are PRESERVED exactly
    inside the pre tag!
       *
      ***
     *****
  </pre>
</body>
</html>`,
    outputExplanation: "<p> वाला टेक्स्ट एक सीधी लाइन में सिमट जाएगा, जबकि <pre> वाला टेक्स्ट तारों (*) के पिरामिड और सभी स्पेस को हूबहू दिखाएगा।",
    realWorldAnalogy: "जैसे पुराने टाइपराइटर पर आप जितनी बार स्पेसबार और कैरिज रिटर्न (Enter) दबाते थे, कागज पर अक्षर बिल्कुल उसी जगह छपते थे, <pre> टैग ठीक वही टाइपराइटर अनुभव देता है।",
    importantPoints: [
      "<pre> टैग व्हाइटस्पेस और न्यूलाइन्स दोनों को सुरक्षित रखता है।",
      "डिफ़ॉल्ट फॉन्ट हमेशा Monospace होता है।",
      "कोड दर्शाने के लिए अक्सर <pre><code>...</code></pre> का संयोजन उपयोग किया जाता है।"
    ],
    commonMistakes: [
      "<pre> टैग के अंदर HTML टैग्स (जैसे `<b>`) लिखने पर यह सोचना कि वे नहीं चलेंगे (HTML टैग्स <pre> के अंदर भी प्रोसेस होते हैं; अक्षरों को दिखाने के लिए `&lt;` और `&gt;` लिखना पड़ता है)।"
    ],
    examPerspective: "प्रश्न: 'HTML में बिना <br> के लाइन ब्रेक और कई स्पेसेस को सुरक्षित रखने वाला टैग कौन सा है?' (उत्तर: <pre> टैग).",
    quickRevision: "<pre> टैग मोनोस्पेस फॉन्ट में स्पेस और लाइन ब्रेक्स को जस-का-तस प्रदर्शित करता है।",
    relatedTopics: ["formatting-tags", "paragraphs", "div-tag"],
    practiceTask: "<pre> टैग का उपयोग करके अपने नाम के पहले अक्षर का एक ASCII आर्ट बनाएं।"
  },
  {
    id: "u3-t7",
    slug: "anchor-links-and-named-anchors",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Anchor Links and Named Anchors",
    hindiTitle: "एंकर लिंक्स और नेम्ड एंकर्स (Anchor Tag & Bookmarks)",
    definitionEnglish: "The anchor tag (<a>) in HTML creates hyperlinks that connect one webpage to another, to external websites, to email addresses/files, or to specific locations within the same page using Named Anchors / Bookmark Links (href=\"#id\").",
    definitionHindi: "HTML में एंकर टैग (<a>) हाइपरलिंक्स बनाता है जो एक वेबपेज को दूसरे वेबपेज से, बाहरी वेबसाइटों से, ईमेल/फाइलों से, या नेम्ड एंकर्स (href=\"#id\") का उपयोग करके उसी पेज के किसी विशिष्ट भाग से जोड़ता है।",
    simpleWords: "एंकर टैग वह जादुई पुल है जिस पर क्लिक करते ही यूजर किसी दूसरे पेज पर या उसी लंबे पेज में नीचे किसी हेडिंग पर सीधे पहुंच जाता है।",
    whyImportant: "हाइपरलिंक्स के बिना वर्ल्ड वाइड वेब केवल बिखरे हुए पन्नों का ढेर होता। एंकर टैग ही पूरे इंटरनेट को आपस में जोड़ता है।",
    detailedExplanation: `### 1. एंकर टैग के मुख्य एट्रिब्यूट्स:
- **\`href\` (Hypertext Reference - अनिवार्य):** वह URL या फाइल पाथ जहाँ लिंक ले जाएगा।
- **\`target\` (खोलने का स्थान):**
  - \`target="_self"\` (डिफ़ॉल्ट): उसी टैब में खोलता है।
  - \`target="_blank"\`: नए ब्राउज़र टैब में खोलता है।
- **\`title\`:** माउस ले जाने पर दिखने वाला टूलटिप।

### 2. लिंक्स के प्रकार:
1. **Absolute URL:** पूरा इंटरनेट पता (\`https://www.google.com\`)।
2. **Relative URL:** उसी वेबसाइट की आंतरिक फाइल (\`about.html\` या \`../contact.html\`)।
3. **Email Link (\`mailto:\`):** \`<a href="mailto:support@nielit.gov.in">Email Us</a>\`
4. **Phone Link (\`tel:\`):** \`<a href="tel:9876543210">Call Us</a>\`

### 3. Named Anchors / In-Page Bookmarks:
जब पेज बहुत लंबा हो और आप सीधे नीचे किसी सेक्शन (जैसे 'Contact') पर कूदना चाहते हों:
- स्टेप 1: उस सेक्शन को एक \`id\` दें: \`<h2 id="contact-sec">Contact Us</h2>\`
- स्टेप 2: लिंक में हैश (\`#\`) के साथ वह id दें: \`<a href="#contact-sec">Jump to Contact</a>\`
- पेज के सबसे ऊपर लौटने के लिए: \`<a href="#top">Back to Top</a>\``,
    syntax: `<a href="URL" target="_blank" title="Tooltip">Link Text</a>
<a href="#section-id">In-page Bookmark Link</a>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#html">Jump to HTML Section</a></li>
    <li><a href="#css">Jump to CSS Section</a></li>
    <li><a href="https://nielit.gov.in" target="_blank">Open NIELIT (New Tab)</a></li>
  </ul>

  <div style="height: 400px; background: #f1f5f9; padding: 10px;">
    <p>Scroll down to see bookmarks in action...</p>
  </div>

  <h3 id="html">HTML Section</h3>
  <p>Details about HTML basics...</p>

  <h3 id="css">CSS Section</h3>
  <p>Details about Cascading Style Sheets...</p>
  
  <a href="#">Back to Top</a>
</body>
</html>`,
    outputExplanation: "'Jump to HTML Section' पर क्लिक करते ही पेज अपने आप स्क्रॉल होकर सीधे `<h3 id=\"html\">` पर पहुंच जाता है।",
    realWorldAnalogy: "किताब के पहले पन्ने की विषय-सूची (Index) पर लिखा 'अध्याय 5 -> पृष्ठ 80' नेम्ड एंकर जैसा है; आप सीधे पन्ना पलटकर वहां पहुंच जाते हैं।",
    importantPoints: [
      "एंकर टैग <a> इनलाइन एलिमेंट है।",
      "href का अर्थ Hypertext Reference है।",
      "नए टैब में खोलने के लिए target=\"_blank\" का उपयोग होता है।",
      "इन-पेज लिंक के लिए हैश (#) सिंबल का उपयोग किया जाता है।"
    ],
    commonMistakes: [
      "`target=\"blank\"` लिख देना (आगे अंडरस्कोर `_` लगाना आवश्यक है: `target=\"_blank\"`)।",
      "नेम्ड एंकर में हैश लगाना भूल जाना (`href=\"sec1\"` लिखने पर ब्राउज़र उसे नई फाइल समझ लेता है, सही रूप `href=\"#sec1\"` है)।"
    ],
    examPerspective: "target=\"_blank\" का कार्य, href का फुल फॉर्म, और नेम्ड एंकर सिंटैक्स पर परीक्षा में प्रश्न जरूर आते हैं।",
    quickRevision: "<a> टैग लिंक बनाता है। href गंतव्य बताता है, target=\"_blank\" नए टैब में खोलता है, और #id इन-पेज बुकमार्क लिंक करता है।",
    relatedTopics: ["image-tag", "formatting-tags", "paragraphs"],
    practiceTask: "एक लंबा वेबपेज बनाएं जिसमें ऊपर 'Go to Bottom' का लिंक हो और सबसे नीचे 'Back to Top' का लिंक हो।"
  },
  {
    id: "u3-t8",
    slug: "image-tag",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Image Tag",
    hindiTitle: "इमेज टैग (<img> Tag & Attributes)",
    definitionEnglish: "The <img> tag is an empty (void) inline element in HTML used to embed raster or vector graphics into a webpage, requiring the 'src' attribute for image location and 'alt' for descriptive alternative text.",
    definitionHindi: "<img> टैग HTML में एक एम्प्टी (शून्य/सेल्फ-क्लोजिंग) इनलाइन एलिमेंट है जिसका उपयोग वेबपेज में चित्र (ग्राफिक्स) अंतर्निहित करने के लिए किया जाता है; इसके लिए 'src' (स्थान) और 'alt' (वैकल्पिक टेक्स्ट) अनिवार्य विशेषताएं हैं।",
    simpleWords: "यह वेबपेज में फोटो लगाने वाला टैग है। इसमें कोई क्लोजिंग टैग नहीं होता। आपको केवल फोटो का पता (src) और अगर फोटो न खुले तो क्या लिखा दिखे (alt) बताना होता है।",
    whyImportant: "बिना चित्रों के कोई भी आधुनिक वेबसाइट आकर्षक नहीं हो सकती। इमेज का सही उपयोग वेबपेज के सौंदर्य और यूजर एंगेजमेंट को 10 गुना बढ़ा देता है।",
    detailedExplanation: `### <img> टैग के प्रमुख एट्रिब्यूट्स:
1. **\`src\` (Source - अनिवार्य):** इमेज फाइल का पाथ या वेब URL (उदा. \`images/logo.png\` या \`https://example.com/pic.jpg\`)।
2. **\`alt\` (Alternative Text - अत्यंत महत्वपूर्ण):**
   - यदि इंटरनेट धीमा हो या इमेज डिलीट हो गई हो, तो उसकी जगह यह टेक्स्ट दिखता है।
   - दृष्टिबाधित लोगों के स्क्रीन रीडर्स इस टेक्स्ट को पढ़कर बताते हैं।
   - सर्च इंजन (SEO) इमेज को समझने के लिए \`alt\` टेक्स्ट पढ़ते हैं।
3. **\`width\` और \`height\`:** इमेज की चौड़ाई और ऊंचाई पिक्सेल में तय करना।
4. **\`title\`:** माउस कर्सर इमेज पर ले जाने पर दिखने वाला पॉपअप टेक्स्ट।
5. **\`loading="lazy"\` (HTML5):** जब तक यूजर स्क्रॉल करके इमेज तक न पहुंचे, तब तक इमेज लोड न करके पेज को सुपरफास्ट बनाना।`,
    syntax: `<img src="path/to/image.jpg" alt="Description of image" width="300" height="200" loading="lazy">`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Embedding Images in HTML</h2>
  <!-- Clickable Image (Image inside Anchor Tag) -->
  <a href="https://nielit.gov.in" target="_blank">
    <img src="https://via.placeholder.com/250x100/0284c7/ffffff?text=NIELIT+Logo" 
         alt="NIELIT Official Logo" 
         width="250" 
         height="100"
         title="Click to visit official NIELIT portal">
  </a>
  <p><i>Note: The image above also acts as a clickable hyperlink!</i></p>
</body>
</html>`,
    outputExplanation: "स्क्रीन पर 250x100 साइज का नीला लोगो दिखेगा, और उस पर हाथ का कर्सर आएगा जिस पर क्लिक करने से NIELIT की साइट खुल जाएगी।",
    realWorldAnalogy: "अखबार में छपी फोटो और उसके नीचे लिखा एक लाइन का फोटो कैप्शन (alt) जैसा संबंध यहाँ <img> और उसके alt एट्रिब्यूट में होता है।",
    importantPoints: [
      "<img> एक Void / Empty Tag है (इसका कोई </img> क्लोजिंग टैग नहीं होता)।",
      "alt एट्रिब्यूट वेब एक्सेसिबिलिटी (WAI) और SEO के लिए अनिवार्य माना जाता है।",
      "इमेज को <a> टैग के अंदर रखकर क्लिक करने योग्य (Clickable Image) बनाया जा सकता है।"
    ],
    commonMistakes: [
      "alt एट्रिब्यूट खाली छोड़ देना या न लिखना।",
      "width और height को अलग-अलग अनुपात में डालकर फोटो का चेहरा बिगाड़ (Distort) देना (इसके लिए CSS में `object-fit: cover` या केवल width देना चाहिए)।"
    ],
    examPerspective: "प्रश्न: '<img> टैग में कौन सा एट्रिब्यूट इमेज लोड न होने पर टेक्स्ट दिखाता है?' (alt), 'क्या <img> टैग का क्लोजिंग टैग होता है?' (नहीं, यह एम्प्टी टैग है).",
    quickRevision: "<img> एक एम्प्टी टैग है। src इमेज का पाथ बताता है और alt वैकल्पिक वर्णनात्मक टेक्स्ट देता है।",
    relatedTopics: ["anchor-links-and-named-anchors", "css-image-gallery", "w3-css-images"],
    practiceTask: "एक इमेज जोड़ें, उसका src गलत लिख दें और देखें कि स्क्रीन पर alt टेक्स्ट कैसे प्रदर्शित होता है।"
  },
  {
    id: "u3-t9",
    slug: "paragraphs",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Paragraphs and Line Breaks",
    hindiTitle: "पैराग्राफ और लाइन ब्रेक्स (<p>, <br>, <hr>)",
    definitionEnglish: "HTML uses the <p> block-level tag to structure body text into distinct paragraphs with automatic top and bottom margins, complemented by the void <br> tag for line breaks and <hr> for thematic horizontal rules.",
    definitionHindi: "HTML में बॉडी टेक्स्ट को पैराग्राफ में व्यवस्थित करने के लिए ब्लॉक-लेवल <p> टैग का उपयोग होता है जो स्वतः ऊपर-नीचे मार्जिन देता है; इसके साथ लाइन बदलने के लिए एम्प्टी <br> टैग और क्षैतिज रेखा खींचने के लिए <hr> टैग का प्रयोग होता है।",
    simpleWords: "<p> टैग आपके टेक्स्ट को एक अलग पैराग्राफ बनाता है। अगर आपको बिना पैराग्राफ बदले केवल अगली लाइन पर जाना हो तो <br> लगाएं, और बीच में एक विभाजक रेखा खींचनी हो तो <hr> लगाएं।",
    whyImportant: "किसी भी लेख या ब्लॉग को साफ, पठनीय और सुव्यवस्थित बनाने के लिए पैराग्राफ और ब्रेक सबसे बुनियादी जरूरत हैं।",
    detailedExplanation: `### 1. \`<p>\` (Paragraph Tag):
- यह ब्लॉक-लेवल एलिमेंट है।
- ब्राउज़र प्रत्येक \`<p>\` के ऊपर और नीचे स्वतः थोड़ा खाली स्थान (मार्जिन) जोड़ता है।

### 2. \`<br>\` (Line Break Tag):
- यह एक **Empty / Void Tag** है (इसका कोई \`</br>\` नहीं होता)।
- यह पैराग्राफ के अंदर ही तुरंत एक नई लाइन शुरू कर देता है (बिना कोई अतिरिक्त मार्जिन छोड़े)।
- कविता या पता लिखने के लिए यह आदर्श है।

### 3. \`<hr>\` (Horizontal Rule Tag):
- यह भी एक **Empty Tag** है।
- यह पेज पर बाएं से दाएं एक क्षैतिज रेखा (Thematic Break) खींचता है जो दो अलग-अलग विषयों को अलग करती है।`,
    syntax: `<p>First paragraph text...</p>
<hr>
<p>Line 1<br>Line 2<br>Line 3</p>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Address Demonstration using Paragraph and Break</h2>
  <p>
    <b>NIELIT Bhawan</b><br>
    Plot No. 3, PSP Pocket, Sector-8,<br>
    Dwarka, New Delhi - 110077
  </p>
  <hr>
  <p>This is a new section separated by a horizontal rule.</p>
</body>
</html>`,
    outputExplanation: "पता 3 अलग-अलग लाइनों में पास-पास दिखेगा, बीच में एक पतली स्लेटी रेखा दिखेगी, और नीचे नया पैराग्राफ दिखेगा।",
    realWorldAnalogy: "जैसे किताब में नया पैराग्राफ शुरू होने पर थोड़ा गैप होता है, लेकिन पते में हर लाइन के नीचे गैप नहीं होता, ठीक वही काम <p> और <br> करते हैं।",
    importantPoints: [
      "<p> ब्लॉक-लेवल है, जबकि <br> और <hr> दोनों Empty / Void Tags हैं।",
      "<hr> को CSS द्वारा रंग, मोटाई और बॉर्डर स्टाइल दिया जा सकता है।"
    ],
    commonMistakes: [
      "मार्जिन बढ़ाने के लिए लगातार 5 बार `<br><br><br><br>` लगाना (यह गलत आदत है; स्पेसिंग के लिए CSS मार्जिन का उपयोग करें)।"
    ],
    examPerspective: "प्रश्न: 'HTML में Line Break देने वाला टैग कौन सा है?' (<br>), 'Horizontal Rule का टैग क्या है?' (<hr>).",
    quickRevision: "<p> पैराग्राफ बनाता है, <br> लाइन ब्रेक देता है, और <hr> क्षैतिज विभाजक रेखा खींचता है।",
    relatedTopics: ["formatting-tags", "pre-tag", "basic-structure-of-html"],
    practiceTask: "एक 4 लाइनों की कविता लिखें जिसमें हर लाइन के बाद `<br>` हो और कविता के बाद `<hr>` लगा हो।"
  },
  {
    id: "u3-t10",
    slug: "comments",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Comments in HTML",
    hindiTitle: "HTML में कमेंट्स (Comments Syntax & Purpose)",
    definitionEnglish: "HTML comments are non-executable explanatory notes written inside the source code using the <!-- comment --> syntax, ignored by the web browser rendering engine and used by developers for code documentation, organization, and temporary debugging.",
    definitionHindi: "HTML कमेंट्स सोर्स कोड के अंदर <!-- कमेंट --> सिंटैक्स द्वारा लिखे जाने वाले गैर-निष्पादन योग्य व्याख्यात्मक नोट्स होते हैं, जिन्हें वेब ब्राउज़र स्क्रीन पर प्रदर्शित नहीं करता और जिनका उपयोग डेवलपर कोड को समझाने और डिबगिंग के लिए करते हैं।",
    simpleWords: "कमेंट्स डेवलपर की अपनी निजी डायरी के नोट्स जैसे हैं। आप कोड में लिख सकते हैं कि 'यह सेक्शन मैंने बनाया है' या 'यह बटन लॉगिन का है', और यूजर को यह स्क्रीन पर बिल्कुल नहीं दिखेगा।",
    whyImportant: "बड़ी वेबसाइटों में जब 10 डेवलपर्स एक साथ काम करते हैं, तो कमेंट्स ही बताते हैं कि कौन सा कोड किस उद्देश्य से लिखा गया है।",
    detailedExplanation: `### 1. HTML कमेंट का सिंटैक्स:
- शुरू: \`<!--\` (लेफ्ट एंगल ब्रैकेट + एक्सक्लेमेशन + दो हाइफन)
- खत्म: \`-->\` (दो हाइफन + राइट एंगल ब्रैकेट)
- उदाहरण: \`<!-- This is a single-line comment -->\`

### 2. कमेंट्स के मुख्य उपयोग:
1. **Code Documentation:** कोड के जटिल हिस्सों का उद्देश्य लिखना।
2. **Section Demarcation:** बताना कि हेडर कहाँ शुरू हुआ और कहाँ खत्म:
   \`<!-- ================= HEADER SECTION START ================= -->\`
3. **Debugging (कोड को अस्थायी रूप से बंद करना):** किसी कोड ब्लॉक को हटाए बिना केवल कमेंट में बंद कर देना ताकि टेस्ट किया जा सके।

### 3. विभिन्न भाषाओं में कमेंट्स की तुलना (अति महत्वपूर्ण परीक्षा बिंदु):
- **HTML:** \`<!-- comment -->\`
- **CSS:** \`/* comment */\`
- **JavaScript:** \`// single line\` और \`/* multi line */\``,
    syntax: `<!-- Single Line Comment -->
<!--
  Multi-Line Comment
  Can span across multiple lines
-->`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <!-- Navigation bar starts here -->
  <nav>
    <a href="#">Home</a>
  </nav>
  <!-- Navigation bar ends -->

  <h1>Visible Content</h1>

  <!-- <button>Temporarily Hidden Feature</button> -->
  <p>The button above is commented out and will not be displayed!</p>
</body>
</html>`,
    outputExplanation: "ब्राउज़र में केवल 'Home', हेडिंग और पैराग्राफ दिखेगा। बटन और कमेंट्स स्क्रीन पर अदृश्य रहेंगे।",
    realWorldAnalogy: "जैसे नाटक की स्क्रिप्ट में ब्रैकेट में लिखा होता है '(धीमी आवाज में बोले)', जो दर्शक को सुनाने के लिए नहीं बल्कि अभिनेता को समझाने के लिए होता है।",
    importantPoints: [
      "HTML कमेंट्स ब्राउज़र स्क्रीन पर नहीं दिखते लेकिन 'View Source' दबाकर कोई भी उन्हें पढ़ सकता है।",
      "कमेंट में कभी भी पासवर्ड या गोपनीय डेटा न लिखें।",
      "कमेंट्स को आपस में नेस्ट (एक कमेंट के अंदर दूसरा कमेंट) नहीं किया जा सकता।"
    ],
    commonMistakes: [
      "HTML में `//` या `/* */` से कमेंट लगाने की कोशिश करना (यह CSS और JS में चलता है, HTML में नहीं)।",
      "एक्सक्लेमेशन मार्क भूल जाना (`<-- comment -->` अमान्य है, सही `<!-- comment -->` है)।"
    ],
    examPerspective: "HTML, CSS और JavaScript में कमेंट्स के सिंटैक्स पर तुलनात्मक प्रश्न हर साल पूछे जाते हैं।",
    quickRevision: "HTML कमेंट्स का सिंटैक्स <!-- comment --> होता है। यह ब्राउज़र द्वारा रेंडर नहीं होते।",
    relatedTopics: ["basic-structure-of-html", "html-introduction"],
    practiceTask: "एक पेज में 3 कमेंट्स जोड़ें और ब्राउज़र में 'Right Click -> View Page Source' करके देखें कि वे सोर्स में कैसे दिखते हैं।"
  },
  {
    id: "u3-t11",
    slug: "tables-and-attributes",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Tables: Attributes (Border, Cellpadding, Cellspacing, height, width, TR, TH, TD, Rowspan, Colspan)",
    hindiTitle: "टेबल्स एवं विशेषताएं (Tables, TR, TH, TD, Rowspan, Colspan)",
    definitionEnglish: "HTML tables are structured two-dimensional grids composed of rows (<tr>), header cells (<th>), and data cells (<td>), configured with attributes such as border, width, height, cellpadding (internal cell padding), cellspacing (gap between cells), rowspan (merging rows vertically), and colspan (merging columns horizontally).",
    definitionHindi: "HTML टेबल्स पंक्तियों (<tr>), हेडर सेल्स (<th>) और डेटा सेल्स (<td>) से बनी द्वि-आयामी ग्रिड होती हैं, जिनमें बॉर्डर, चौड़ाई, ऊंचाई, cellpadding (सेल सामग्री और बॉर्डर के बीच दूरी), cellspacing (दो सेल्स के बीच दूरी), rowspan (पंक्तियों को मिलाना) और colspan (कॉलम्स को मिलाना) जैसी विशेषताएं होती हैं।",
    simpleWords: "टेबल पंक्तियों (हॉरिजॉन्टल लाइन) और स्तंभों (वर्टिकल कॉलम) का एक ग्रिड है जिसमें डेटा साफ-सुथरे खानों में भरा जाता है। दो खानों को आजू-बाजू मिलाने के लिए colspan और ऊपर-नीचे मिलाने के लिए rowspan का उपयोग होता है।",
    whyImportant: "परीक्षा परिणाम, समय-सारिणी (Time-Table), मूल्य-सूची, और डेटा तुलना दर्शाने के लिए टेबल सबसे महत्वपूर्ण HTML अवयव है। O-Level प्रैक्टिकल में टेबल पर प्रश्न 100% आता है।",
    detailedExplanation: `### 1. टेबल के 4 मुख्य टैग्स:
1. **\`<table>\`:** टेबल का मुख्य कंटेनर।
2. **\`<tr>\` (Table Row):** टेबल में एक क्षैतिज पंक्ति बनाता है।
3. **\`<th>\` (Table Header):** कॉलम का शीर्षक। डिफ़ॉल्ट रूप से **Bold** और **Center-Aligned** होता है।
4. **\`<td>\` (Table Data):** पंक्ति के अंदर सामान्य डेटा सेल। डिफ़ॉल्ट रूप से **Normal Font** और **Left-Aligned** होता है।

### 2. महत्वपूर्ण टेबल एट्रिब्यूट्स:
- **\`border="1"\`:** टेबल के चारों तरफ और सेल्स पर बॉर्डर की मोटाई।
- **\`width\` / \`height\`:** पिक्सेल (उदा. \`width="500"\`) या प्रतिशत (\`width="100%"\`) में आकार।
- **\`cellpadding\`:** सेल की सामग्री (टेक्स्ट) और सेल की बॉर्डर के बीच की आंतरिक दूरी।
- **\`cellspacing\`:** दो अलग-अलग सेल्स की दीवारों के बीच की खाली दूरी।
- **\`align\`:** टेबल का संरेखण (\`left\`, \`center\`, \`right\`)।

### 3. Rowspan बनाम Colspan (अति महत्वपूर्ण):
- **\`colspan="n"\`:** एक सेल को दाईं ओर **n कॉलम्स** तक फैलाना (क्षैतिज रूप से मिलाना)।
- **\`rowspan="n"\`:** एक सेल को नीचे की ओर **n पंक्तियों** तक फैलाना (लंबवत रूप से मिलाना)।`,
    syntax: `<table border="1" cellpadding="8" cellspacing="0" width="100%">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <title>Student Marksheet Table</title>
</head>
<body>
  <h2>NIELIT O-Level Student Result</h2>
  <table border="1" cellpadding="10" cellspacing="0" width="80%">
    <tr style="background:#0284c7; color:white;">
      <th>Roll No</th>
      <th>Student Name</th>
      <th colspan="2">Module Marks</th>
    </tr>
    <tr style="background:#f8fafc;">
      <td rowspan="2">101</td>
      <td rowspan="2">Amit Kumar</td>
      <td>M1-R5.1 (IT Tools)</td>
      <td>85</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td>M2-R5.1 (Web Design)</td>
      <td>92</td>
    </tr>
  </table>
</body>
</html>`,
    outputExplanation: "अमित कुमार का नाम और रोल नंबर rowspan='2' के कारण दोनों मॉड्यूल्स के सामने एक बड़े दोहरे खाने में लंबवत रूप से मर्ज होकर दिखेगा।",
    realWorldAnalogy: "जैसे एक्सेल (Excel) शीट में आप दो सेल्स को चुनकर 'Merge & Center' करते हैं, HTML टेबल में ठीक वही काम colspan और rowspan करते हैं।",
    importantPoints: [
      "<th> डिफ़ॉल्ट रूप से Bold और Center Aligned होता है।",
      "<td> डिफ़ॉल्ट रूप से Normal और Left Aligned होता है।",
      "colspan कॉलम्स को जोड़ता है; rowspan पंक्तियों को जोड़ता है।",
      "cellpadding आंतरिक पैडिंग है, cellspacing बाहरी गैप है।"
    ],
    commonMistakes: [
      "colspan देने के बाद अगली पंक्ति में अतिरिक्त <td> छोड़ देना जिससे टेबल का कोना बाहर निकल जाए।",
      "rowspan और colspan के कार्य को आपस में उलझा देना।"
    ],
    examPerspective: "Rowspan, Colspan, Cellpadding, Cellspacing, और <th> vs <td> के डिफ़ॉल्ट संरेखण पर हर साल 10 से 15 नंबर के प्रश्न आते हैं।",
    quickRevision: "<table> पंक्तियों (<tr>), हेडर्स (<th>) और सेल्स (<td>) से बनती है। rowspan पंक्तियां मिलाता है, colspan कॉलम्स मिलाता है।",
    relatedTopics: ["lists", "forms-and-elements", "css-tables", "w3-css-tables-and-list"],
    practiceTask: "एक 4 कॉलम और 5 पंक्तियों वाली समय-सारणी (Time-Table) बनाएं जिसमें लंच ब्रेक को `rowspan=\"5\"` से मर्ज किया गया हो।"
  },
  {
    id: "u3-t12",
    slug: "lists",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Lists: Ordered List, Unordered List, Definition List",
    hindiTitle: "लिस्ट्स: ऑर्डर्ड (<ol>), अनऑर्डर्ड (<ul>), डेफिनिशन (<dl>)",
    definitionEnglish: "HTML lists group related items together, categorized into Ordered Lists (<ol> with numbered/alphabetical markers), Unordered Lists (<ul> with bullet markers), and Definition Lists (<dl> pairing definition terms <dt> with descriptions <dd>).",
    definitionHindi: "HTML लिस्ट्स संबंधित मदों को एक समूह में व्यवस्थित करती हैं; यह तीन प्रकार की होती हैं: ऑर्डर्ड लिस्ट (<ol> नंबर या अक्षरों के साथ), अनऑर्डर्ड लिस्ट (<ul> बुलेट्स के साथ), और डेफिनिशन लिस्ट (<dl> जो शब्दावली <dt> और विवरण <dd> का जोड़ा बनाती है)।",
    simpleWords: "यदि आपको 1, 2, 3 नंबरों वाली क्रमबद्ध सूची बनानी हो तो <ol> का उपयोग करें; यदि केवल गोल बुलेट बिंदु चाहिए तो <ul> का उपयोग करें; और यदि डिक्शनरी की तरह शब्द और उसकी परिभाषा लिखनी हो तो <dl> का उपयोग करें।",
    whyImportant: "वेबसाइट के सभी नेविगेशन मेन्यू, साइडबार लिंक्स और स्टेप-बाय-स्टेप ट्यूटोरियल लिस्ट्स द्वारा ही बनाए जाते हैं।",
    detailedExplanation: `### 1. Ordered List (\`<ol>\`):
- क्रम महत्वपूर्ण होता है।
- **\`type\` एट्रिब्यूट:**
  - \`type="1"\` (डिफ़ॉल्ट): 1, 2, 3...
  - \`type="A"\`: A, B, C...
  - \`type="a"\`: a, b, c...
  - \`type="I"\`: I, II, III (रोमन अंक)
  - \`type="i"\`: i, ii, iii
- **\`start\` एट्रिब्यूट:** गिनती किसी निश्चित संख्या से शुरू करना (उदा. \`<ol start="5">\`)।
- **\`reversed\`:** उल्टी गिनती (5, 4, 3...).

### 2. Unordered List (\`<ul>\`):
- क्रम महत्वपूर्ण नहीं होता।
- **\`type\` एट्रिब्यूट:**
  - \`type="disc"\` (डिफ़ॉल्ट भरा हुआ गोल बिंदु)
  - \`type="circle"\` (खोखला गोल वृत्त)
  - \`type="square"\` (भरा हुआ चौकोर वर्ग)
  - \`type="none"\` (कोई बुलेट नहीं - नेविगेशन मेन्यू के लिए)

### 3. Definition / Description List (\`<dl>\`):
- इसमें \`<li>\` नहीं होता।
- \`<dt>\` = Definition Term (शब्दावली/हेडिंग)
- \`<dd>\` = Definition Description (उसका विवरण, जो स्वतः इंडेंट होता है)`,
    syntax: `<!-- Ordered List -->
<ol type="A" start="3">
  <li>Item C</li>
</ol>

<!-- Unordered List -->
<ul type="square">
  <li>Bullet Item</li>
</ul>

<!-- Definition List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h3>Web Development Curriculum</h3>
  
  <h4>Step-by-Step Learning (Ordered):</h4>
  <ol type="I">
    <li>HTML5 Foundations</li>
    <li>CSS3 Styling</li>
    <li>JavaScript Interactivity</li>
  </ol>

  <h4>Frontend Tools (Unordered):</h4>
  <ul type="circle">
    <li>Notepad++</li>
    <li>Sublime Text</li>
    <li>Google Chrome DevTools</li>
  </ul>

  <h4>Key Terms (Definition List):</h4>
  <dl>
    <dt><b>HTTP</b></dt>
    <dd>HyperText Transfer Protocol for transmitting web pages.</dd>
    <dt><b>DNS</b></dt>
    <dd>Domain Name System that translates domain names to IP addresses.</dd>
  </dl>
</body>
</html>`,
    outputExplanation: "पहले सेक्शन में रोमन अंक I, II, III दिखेंगे, दूसरे में गोल खोखले बिंदु दिखेंगे, और तीसरे में टर्म के नीचे थोड़ा हटकर विवरण दिखेगा।",
    realWorldAnalogy: "रेसिपी बनाने के चरण (Step 1, Step 2) ऑर्डर्ड लिस्ट हैं; बाजार से लाने वाले सामान की पर्ची अनऑर्डर्ड लिस्ट है; और शब्दकोश (डिक्शनरी) डेफिनिशन लिस्ट है।",
    importantPoints: [
      "<ol> और <ul> के अंदर केवल <li> टैग ही आ सकता है।",
      "<dl> के अंदर <dt> (Term) और <dd> (Description) का जोड़ा होता है।",
      "वेब नेविगेशन बार हमेशा <ul style=\"list-style:none;\"> से बनाई जाती है।"
    ],
    commonMistakes: [
      "<dl> के अंदर <li> टैग लगाने की कोशिश करना (यह अमान्य है, <dl> में केवल <dt> और <dd> होते हैं)।"
    ],
    examPerspective: "<ol> के प्रकार (1, A, a, I, i), <dl> के घटक (<dt>, <dd>), और start एट्रिब्यूट पर प्रश्न पूछे जाते हैं।",
    quickRevision: "क्रमबद्ध सूची: <ol>, बुलेट सूची: <ul>, डिक्शनरी सूची: <dl> (<dt> और <dd>).",
    relatedTopics: ["tables-and-attributes", "css-lists", "css-menu-design"],
    practiceTask: "एक नेस्टेड लिस्ट बनाएं जिसमें 3 राज्यों के नाम हों और प्रत्येक राज्य के अंदर 2-2 जिलों की बुलेट लिस्ट हो।"
  },
  {
    id: "u3-t13",
    slug: "forms-and-elements",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Forms and Form Elements",
    hindiTitle: "फॉर्म्स और फॉर्म एलिमेंट्स (<form>, Elements & Methods)",
    definitionEnglish: "An HTML form (<form>) is an interactive container that collects user input and transmits it to a web server for processing, defined with crucial attributes like 'action' (destination backend URL) and 'method' (HTTP GET or POST).",
    definitionHindi: "HTML फॉर्म (<form>) एक ऐसा इंटरएक्टिव कंटेनर है जो यूजर से इनपुट डेटा एकत्र करता है और प्रोसेसिंग के लिए उसे वेब सर्वर पर भेजता है; इसके मुख्य एट्रिब्यूट्स 'action' (सर्वर URL) और 'method' (GET या POST) हैं।",
    simpleWords: "जब आप किसी वेबसाइट पर लॉगिन करते हैं, परीक्षा फॉर्म भरते हैं या गूगल पर सर्च करते हैं, तो वह चौकोर डिब्बा जिसमें आप लिखते हैं और 'Submit' दबाते हैं, वही HTML फॉर्म है।",
    whyImportant: "यूजर से डेटा (लॉगिन, साइनअप, पेमेंट, फीडबैक) लेने का वेब पर केवल एक ही माध्यम है: HTML फॉर्म्स।",
    detailedExplanation: `### 1. फॉर्म के दो सबसे महत्वपूर्ण एट्रिब्यूट्स:
1. **\`action\` (गंतव्य पता):** उस बैक-एंड सर्वर स्क्रिप्ट (उदा. \`save.php\` या \`/api/login\`) का URL जहाँ फॉर्म का डेटा प्रोसेस होने जाएगा।
2. **\`method\` (डेटा भेजने का तरीका):**
   - **\`GET\` (डिफ़ॉल्ट):**
     - फॉर्म डेटा URL की क्वेरी स्ट्रिंग में चिपक कर जाता है (\`search.php?q=nielit\`)।
     - डेटा सभी को दिखता है, इसलिए **पासवर्ड के लिए कभी उपयोग न करें**।
     - डेटा की लंबाई सीमित होती है (~2048 कैरेक्टर)।
     - सर्च बॉक्स के लिए आदर्श है।
   - **\`POST\`:**
     - डेटा HTTP रिक्वेस्ट की बॉडी के अंदर छिपकर सुरक्षित जाता है।
     - URL में कुछ नहीं दिखता।
     - असीमित डेटा और फाइल अपलोड (इमेजेस) भेजने के लिए अनिवार्य।
     - लॉगिन और रजिस्ट्रेशन के लिए अनिवार्य।

### 2. फॉर्म संरचना के अन्य सहायक टैग्स:
- **\`<fieldset>\`:** फॉर्म के संबंधित इनपुट्स के चारों तरफ एक सुंदर बॉर्डर बॉक्स बनाता है।
- **\`<legend>\`:** उस फील्डसेट बॉक्स के बॉर्डर पर एक शीर्षक (कैप्शन) लिखता है।
- **\`<label>\`:** इनपुट बॉक्स का लेबल; \`for\` एट्रिब्यूट इनपुट की \`id\` से जुड़कर क्लिक क्षमता बढ़ाता है।`,
    syntax: `<form action="process.php" method="POST">
  <fieldset>
    <legend>User Credentials</legend>
    <label for="username">Username:</label>
    <input type="text" id="username" name="user">
    <button type="submit">Submit</button>
  </fieldset>
</form>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Student Login Portal</h2>
  <form action="login.php" method="POST">
    <fieldset style="max-width: 320px; border-radius: 6px;">
      <legend><b>Secure Login</b></legend>
      <p>
        <label for="uid">Registration No:</label><br>
        <input type="text" id="uid" name="reg_no" required>
      </p>
      <p>
        <label for="pwd">Password:</label><br>
        <input type="password" id="pwd" name="password" required>
      </p>
      <input type="submit" value="Sign In">
      <input type="reset" value="Clear">
    </fieldset>
  </form>
</body>
</html>`,
    outputExplanation: "स्क्रीन पर एक सुंदर बॉर्डर वाला बॉक्स दिखेगा जिसमें रजिस्ट्रेशन नंबर और मास्क्ड पासवर्ड इनपुट होगा। सबमिट दबाने पर डेटा सुरक्षित POST मेथड से भेजा जाएगा।",
    realWorldAnalogy: "GET मेथड खुली पोस्टकार्ड जैसा है जिसे रास्ते में कोई भी पढ़ सकता है; POST मेथड सीलबंद लिफाफे जैसा है जो केवल पाने वाले को ही दिखता है।",
    importantPoints: [
      "संवेदनशील डेटा (पासवर्ड, कार्ड) के लिए हमेशा method=\"POST\" का प्रयोग करें।",
      "सर्च क्वेरीज के लिए method=\"GET\" का प्रयोग करें।",
      "<fieldset> और <legend> फॉर्म को पेशेवर रूप देते हैं।",
      "सर्वर पर डेटा प्राप्त करने के लिए प्रत्येक इनपुट में 'name' एट्रिब्यूट होना अनिवार्य है।"
    ],
    commonMistakes: [
      "इनपुट में `name` एट्रिब्यूट भूल जाना (इसके बिना सर्वर को पता ही नहीं चलेगा कि कौन सा डेटा किसका है)।",
      "पासवर्ड फॉर्म में method=\"GET\" लगा देना जिससे पासवर्ड URL में दिखने लगे।"
    ],
    examPerspective: "GET बनाम POST में अंतर, action एट्रिब्यूट का कार्य, और fieldset/legend की भूमिका पर हर परीक्षा में प्रश्न आते हैं।",
    quickRevision: "<form> डेटा सर्वर पर भेजता है। action गंतव्य बताता है, GET असुरक्षित/URL-दिखता है, POST सुरक्षित/छिपा हुआ है।",
    relatedTopics: ["input-types-and-attributes", "html5-form-validations", "basic-form-validations-in-javascript"],
    practiceTask: "एक लॉगिन फॉर्म बनाएं जिसमें fieldset और legend का उपयोग हो और method='POST' सेट हो।"
  },
  {
    id: "u3-t14",
    slug: "input-types-and-attributes",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Input Types and Attributes (Text, Text Area, Dropdown, Radio, Check boxes, Submit & Reset Buttons)",
    hindiTitle: "इनपुट प्रकार एवं विशेषताएं (Text, Textarea, Select, Radio, Checkbox, Buttons)",
    definitionEnglish: "HTML form controls collect varied data types using <input type='...'> (text, password, radio, checkbox, submit, reset, file), multi-line <textarea>, and dropdown menus (<select> with <option>), governed by attributes like name, value, placeholder, disabled, and readonly.",
    definitionHindi: "HTML फॉर्म कंट्रोल्स विभिन्न प्रकार का डेटा एकत्र करने के लिए <input> (text, password, radio, checkbox, submit, reset, file), बहु-पंक्ति <textarea> और ड्रॉपडाउन मेन्यू (<select> व <option>) का उपयोग करते हैं, जिनमें name, value, placeholder, disabled और readonly जैसी विशेषताएं होती हैं।",
    simpleWords: "यह फॉर्म के अलग-अलग पुर्जे हैं: नाम लिखने के लिए टेक्स्ट बॉक्स, लंबा पता लिखने के लिए टेक्स्टएरिया, लिंग (Male/Female) चुनने के लिए रेडियो बटन, कई शौक चुनने के लिए चेकबॉक्स, और शहर चुनने के लिए ड्रॉपडाउन मेन्यू।",
    whyImportant: "इनपुट कंट्रोल्स ही यूजर इंटरैक्शन का आधार हैं। सही कंट्रोल का चयन यूजर के फॉर्म भरने के अनुभव को सहज और त्रुटिरहित बनाता है।",
    detailedExplanation: `### प्रमुख फॉर्म कंट्रोल्स का विस्तृत विवरण:
1. **Text Input (\`<input type="text">\`):** एकल पंक्ति नाम या सामान्य टेक्स्ट लिखने हेतु।
2. **Password Input (\`<input type="password">\`):** अक्षरों को बिंदुओं (bullets) में छिपाने हेतु।
3. **Textarea (\`<textarea rows="4" cols="40">\`):** बहु-पंक्ति टेक्स्ट (जैसे पता, संदेश, फीडबैक)। इसका क्लोजिंग टैग \`</textarea>\` अनिवार्य है।
4. **Radio Buttons (\`<input type="radio">\`):**
   - कई विकल्पों में से **केवल एक (Single Choice)** चुनने हेतु।
   - **नियम:** एक समूह बनाने के लिए सभी रेडियो बटनों का **\`name\` attribute एक समान** होना अनिवार्य है।
5. **Checkboxes (\`<input type="checkbox">\`):**
   - एक साथ **कई विकल्प (Multiple Choices)** चुनने हेतु (उदा. पसंदीदा भाषाएं)।
6. **Dropdown List (\`<select>\` & \`<option>\`):**
   - लंबी सूची में से एक चुनने हेतु ड्रॉपडाउन मेन्यू।
7. **Submit Button (\`<input type="submit">\`):** फॉर्म डेटा सर्वर पर भेजने वाला बटन।
8. **Reset Button (\`<input type="reset">\`):** फॉर्म की सभी फील्ड्स को डिफ़ॉल्ट खाली करने वाला बटन।

### महत्वपूर्ण इनपुट एट्रिब्यूट्स:
- **\`placeholder\`:** इनपुट बॉक्स के अंदर हल्की स्लेटी हिंट।
- **\`value\`:** इनपुट का डिफ़ॉल्ट मान।
- **\`readonly\`:** यूजर केवल पढ़ सकता है, बदल नहीं सकता।
- **\`disabled\`:** कंट्रोल निष्क्रिय हो जाता है और सर्वर पर नहीं भेजा जाता।
- **\`maxlength\`:** अधिकतम अक्षरों की संख्या।`,
    syntax: `<input type="text" name="fname" placeholder="First Name">
<textarea name="address" rows="3" cols="30"></textarea>
<select name="state">
  <option value="UP">Uttar Pradesh</option>
</select>
<input type="radio" name="gender" value="m"> Male
<input type="checkbox" name="hobby" value="sports"> Sports`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Complete Form Controls Showcase</h2>
  <form>
    <p>Full Name: <input type="text" name="name" placeholder="John Doe"></p>
    <p>Address:<br><textarea name="addr" rows="2" cols="30" placeholder="Street, City"></textarea></p>
    <p>City: 
      <select name="city">
        <option value="delhi">Delhi</option>
        <option value="lucknow">Lucknow</option>
      </select>
    </p>
    <p>Gender: 
      <input type="radio" name="gen" value="M" checked> Male
      <input type="radio" name="gen" value="F"> Female
    </p>
    <p>Skills: 
      <input type="checkbox" name="skill" value="html"> HTML
      <input type="checkbox" name="skill" value="css"> CSS
    </p>
    <input type="submit" value="Save Data">
    <input type="reset" value="Reset">
  </form>
</body>
</html>`,
    outputExplanation: "एक संपूर्ण फॉर्म दिखेगा जिसमें टेक्स्ट बॉक्स, टेक्स्टएरिया, ड्रॉपडाउन, रेडियो बटन्स, चेकबॉक्स और सबमिट/रिसेट बटन्स काम करेंगे।",
    realWorldAnalogy: "रेडियो बटन पंखे के 1-2-3-4 रेगुलेटर जैसा है (एक बार में केवल एक ही स्पीड चुन सकते हैं); चेकबॉक्स पिज्जा की टॉपिंग्स जैसा है (चीज, कॉर्न, ऑलिव सब एक साथ चुन सकते हैं)।",
    importantPoints: [
      "रेडियो बटन्स में परस्पर अनन्यता (Mutual exclusivity) के लिए समान 'name' अनिवार्य है।",
      "चेकबॉक्स कई स्वतंत्र विकल्प चुनने की सुविधा देता है।",
      "<textarea> का क्लोजिंग टैग </textarea> होता है।",
      "Reset बटन भरे हुए पूरे फॉर्म को एक क्लिक में खाली कर देता है।"
    ],
    commonMistakes: [
      "रेडियो बटन्स में अलग-अलग name दे देना (जिससे यूजर Male और Female दोनों को एक साथ टिक कर पाता है)।",
      "<textarea> को सेल्फ-क्लोजिंग टैग समझ लेना।"
    ],
    examPerspective: "रेडियो बटन और चेकबॉक्स में अंतर, रेडियो ग्रुप में 'name' की भूमिका, और textarea के rows/cols एट्रिब्यूट्स पर बार-बार प्रश्न आते हैं।",
    quickRevision: "एकल चयन: radio; बहु-चयन: checkbox; बहु-पंक्ति: textarea; सूची: select/option; सबमिट: submit button.",
    relatedTopics: ["forms-and-elements", "html5-form-validations", "basic-form-validations-in-javascript"],
    practiceTask: "एक फॉर्म बनाएं जिसमें 3 रेडियो बटन्स (High School, Intermediate, Graduate) हों और जांचें कि एक समय में एक ही चुना जा रहा है या नहीं।"
  },
  {
    id: "u3-t15",
    slug: "frames-and-iframe",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Frames: Frameset, Nested Frames, and HTML Iframe",
    hindiTitle: "फ्रेम्स: Frameset, Nested Frames एवं HTML Iframe",
    definitionEnglish: "HTML Frames (<frameset>, <frame>) were legacy HTML4 structures used to divide the browser window into multiple independent HTML document panes, now superseded in modern HTML5 by the inline frame (<iframe>), which securely embeds an external document or video inside the current page.",
    definitionHindi: "HTML फ्रेम्स (<frameset>, <frame>) पुरानी तकनीक थी जिसका उपयोग ब्राउज़र विंडो को कई अलग-अलग HTML डॉक्यूमेंट खानों में बांटने हेतु किया जाता था; आधुनिक HTML5 में इसे इनलाइन फ्रेम (<iframe>) द्वारा प्रतिस्थापित कर दिया गया है जो वर्तमान पेज के भीतर सुरक्षित रूप से किसी अन्य पेज या वीडियो को अंतर्निहित करता है।",
    simpleWords: "पुरानी तकनीक में ब्राउज़र स्क्रीन को खिड़की की तरह 2-3 टुकड़ों (Frameset) में बांट दिया जाता था। लेकिन HTML5 में हम <iframe> का उपयोग करते हैं, जो आपके पेज के अंदर एक छोटा सा टीवी स्क्रीन लगा देता है जिसमें आप यूट्यूब वीडियो या गूगल मैप दिखा सकते हैं।",
    whyImportant: "यूट्यूब वीडियो, गूगल मैप्स, और पेमेंट गेटवे को अपनी वेबसाइट में बिना पेज छोड़े दिखाने के लिए <iframe> आधुनिक वेब का अनिवार्य हिस्सा है।",
    detailedExplanation: `### 1. Legacy Frameset & Frames (HTML4 - अब अप्रचलित):
- \`<frameset>\`: <body> टैग की जगह लेता था (जिस पेज में frameset होता था उसमें <body> नहीं होता था)।
- \`rows="50%, 50%"\`: स्क्रीन को दो क्षैतिज हिस्सों में बांटना।
- \`cols="30%, 70%"\`: स्क्रीन को दो लंबवत हिस्सों में बांटना।
- \`<frame src="menu.html">\`: उस हिस्से में खुलने वाला पेज।
- **Nested Frames:** एक frameset के अंदर दूसरा frameset डालकर ग्रिड बनाना।
- **कमियां:** SEO में बाधा, बुकमार्क करने में असमर्थ, मोबाइल पर अप्रभावी। HTML5 में हटा दिया गया।

### 2. Modern HTML5 \`<iframe>\` (Inline Frame):
- यह वर्तमान पेज के <body> सेक्शन के अंदर किसी भी जगह लगाया जा सकता है।
- **मुख्य एट्रिब्यूट्स:**
  - \`src\`: एम्बेड किए जाने वाले पेज या वीडियो का URL।
  - \`width\` और \`height\`: आकार।
  - \`frameborder="0"\`: बॉर्डर हटाना।
  - \`allowfullscreen\`: वीडियो को फुल स्क्रीन करने की अनुमति देना।
  - \`loading="lazy"\`: पेज तेजी से लोड करने हेतु।`,
    syntax: `<!-- Modern HTML5 Inline Frame -->
<iframe src="https://example.com" width="600" height="400" title="Embedded Webpage"></iframe>

<!-- Legacy HTML4 Frameset (Historical / Exam Reference) -->
<frameset cols="25%, 75%">
  <frame src="menu.html">
  <frame src="content.html">
</frameset>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Embedding External Content with HTML5 Iframe</h2>
  <p>Below is a sandboxed preview frame embedded directly inside this page:</p>
  
  <iframe src="https://en.wikipedia.org/wiki/HTML" 
          width="100%" 
          height="300" 
          style="border: 2px solid #0284c7; border-radius: 8px;"
          title="Wikipedia HTML Article">
  </iframe>
</body>
</html>`,
    outputExplanation: "पेज के अंदर एक 300px ऊंचा बॉक्स दिखेगा जिसमें विकिपीडिया का पेज स्वतंत्र रूप से स्क्रॉल होगा।",
    realWorldAnalogy: "जैसे आपके कमरे की दीवार में एक छोटा टीवी लगा हो जिसमें बाहर का लाइव कैमरा दिख रहा हो, <iframe> वर्तमान पेज में दूसरी वेबसाइट की खिड़की है।",
    importantPoints: [
      "<frameset> वाले पेज में <body> टैग नहीं होता था।",
      "HTML5 में <frameset> को हटा दिया गया है और <iframe> को मानक माना गया है।",
      "यूट्यूब वीडियो और गूगल मैप्स हमेशा <iframe> से एम्बेड होते हैं।"
    ],
    commonMistakes: [
      "<frameset> और <body> को एक ही पेज में साथ-साथ लिख देना (ब्राउज़र फ्रेम्स को अनदेखा कर देता है)।"
    ],
    examPerspective: "प्रश्न: 'HTML5 में कौन सा फ्रेम टैग समर्थित है?' (<iframe>), 'Frameset में स्क्रीन को क्षैतिज बांटने के लिए कौन सा एट्रिब्यूट होता है?' (rows).",
    quickRevision: "पुराना <frameset> स्क्रीन बांटता था (HTML5 में अप्रचलित)। आधुनिक <iframe> किसी भी पेज के अंदर दूसरा वेबपेज/वीडियो एम्बेड करता है।",
    relatedTopics: ["html-embed-multimedia", "audio-and-video-tags", "html5-introduction"],
    practiceTask: "एक <iframe> बनाएं और उसमें `src=\"https://nielit.gov.in\"` देकर 400px ऊंचाई सेट करें।"
  },
  {
    id: "u3-t16",
    slug: "html5-introduction",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "HTML 5 Introduction",
    hindiTitle: "HTML5 का परिचय एवं नवीन विशेषताएं",
    definitionEnglish: "HTML5 is the fifth and current major version of the HTML standard, designed to deliver rich multimedia and web application experiences natively without third-party plugins (like Flash), featuring semantic elements, native audio/video, canvas graphics, and built-in form validation.",
    definitionHindi: "HTML5 एचटीएमएल मानक का पांचवां और वर्तमान प्रमुख संस्करण है, जिसे फ्लैश जैसे बाहरी प्लगइन्स के बिना सीधे ब्राउज़र में समृद्ध मल्टीमीडिया और वेब ऐप्लिकेशन अनुभव प्रदान करने के लिए डिज़ाइन किया गया है; इसमें नए सेमांटिक एलिमेंट्स, नेटिव ऑडियो/वीडियो, और इन-बिल्ट फॉर्म वैलिडेशन शामिल हैं।",
    simpleWords: "HTML5 वेब की दुनिया की सबसे बड़ी क्रांति है। पहले वीडियो चलाने या गाने सुनने के लिए Flash Player डाउनलोड करना पड़ता था, लेकिन HTML5 में ब्राउज़र खुद ही वीडियो, ऑडियो, गेम और फॉर्म वैलिडेशन चला लेता है।",
    whyImportant: "आधुनिक मोबाइल और डेस्कटॉप वेब का 100% आधार HTML5 है। O-Level परीक्षा का पूरा पाठ्यक्रम HTML5 मानकों पर ही आधारित है।",
    detailedExplanation: `### 1. HTML4 बनाम HTML5 के क्रांतिकारी बदलाव:
1. **अत्यंत सरल Doctype:**
   - HTML4: \`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\` (याद रखना असंभव!)
   - HTML5: \`<!DOCTYPE html>\` (सरल और सीधा)।
2. **Native Audio & Video:** बिना किसी प्लगइन के \`<audio>\` और \`<video>\` टैग्स।
3. **Semantic Tags:** \`<section>\`, \`<article>\`, \`<nav>\`, \`<header>\`, \`<footer>\`, \`<aside>\`।
4. **New Form Input Types:** \`email\`, \`number\`, \`date\`, \`range\`, \`color\`, \`tel\`।
5. **Built-in Validations:** \`required\`, \`pattern\`, \`autofocus\` (बिना जावास्क्रिप्ट के वैलिडेशन)।
6. **Canvas & SVG:** ब्राउज़र में 2D ग्राफिक्स और गेम्स बनाना।
7. **Local Storage:** कुकीज के मुकाबले 5-10MB डेटा ब्राउज़र में सुरक्षित स्टोर करना।`,
    syntax: `HTML5 Minimal Declaration:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML5 Standard</title>
  </head>
  <body> ... </body>
</html>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Features Showcase</title>
</head>
<body>
  <header>
    <h1>HTML5 Native Web Application</h1>
  </header>
  <main>
    <article>
      <h2>No Plugins Required!</h2>
      <p>HTML5 natively supports audio, video, semantic markup, and storage.</p>
    </article>
  </main>
  <footer>
    <p>© 2026 NIELIT HTML5 Master</p>
  </footer>
</body>
</html>`,
    outputExplanation: "पेज का स्ट्रक्चर सेमांटिकली स्पष्ट है; सर्च इंजन हेडर, मुख्य आर्टिकल और फुटर को आसानी से समझ लेते हैं।",
    realWorldAnalogy: "HTML4 एक साधारण फीचर फोन था जिसमें गाने सुनने के लिए अलग से मेमोरी कार्ड और डोंगल लगाना पड़ता था; HTML5 एक आधुनिक स्मार्टफोन है जिसमें सब कुछ पहले से इनबिल्ट है।",
    importantPoints: [
      "HTML5 का Doctype डिक्लेरेशन केवल <!DOCTYPE html> है।",
      "HTML5 ने Flash और Silverlight प्लगइन्स की आवश्यकता खत्म कर दी।",
      "WHATWG और W3C ने मिलकर इसे विकसित किया।"
    ],
    commonMistakes: [
      "HTML5 को एक नई भाषा समझना (यह HTML4 का ही उन्नत और अधिक सक्षम रूप है)।"
    ],
    examPerspective: "HTML5 का डॉक्युटाइप, नए सेमांटिक टैग्स की सूची, और नए इनपुट टाइप्स पर सबसे अधिक प्रश्न पूछे जाते हैं।",
    quickRevision: "HTML5 आधुनिक वेब मानक है: सरल doctype, सेमांटिक टैग्स, नेटिव ऑडियो/वीडियो, और इन-बिल्ट वैलिडेशन।",
    relatedTopics: ["basic-structure-of-html", "html5-new-semantic-elements", "html5-form-validations"],
    practiceTask: "HTML4 और HTML5 के 5 प्रमुख अंतरों की एक तुलनात्मक तालिका बनाएं।"
  },
  {
    id: "u3-t17",
    slug: "html5-new-semantic-elements",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "HTML5 New Semantic Elements: Section, Nav, Article, Aside",
    hindiTitle: "HTML5 सेमांटिक एलिमेंट्स: Section, Nav, Article, Aside, Header, Footer",
    definitionEnglish: "HTML5 semantic elements clearly describe their meaning to both the browser and the developer, replacing generic <div> tags with meaningful architectural tags: <header>, <nav> (navigation links), <main>, <section> (thematic group), <article> (independent self-contained composition), <aside> (sidebar/indirectly related content), and <footer>.",
    definitionHindi: "HTML5 सेमांटिक एलिमेंट्स ब्राउज़र और डेवलपर दोनों को अपने अर्थ का स्पष्ट संकेत देते हैं; ये सामान्य <div> टैग्स की जगह अर्थपूर्ण संरचनात्मक टैग्स प्रदान करते हैं: <header>, <nav> (नेविगेशन), <main>, <section> (थीमेटिक खंड), <article> (स्वतंत्र लेख), <aside> (साइडबार), और <footer>।",
    simpleWords: "पहले डेवलपर हर चीज के लिए `<div id=\"nav\">` या `<div id=\"footer\">` बनाते थे, जिससे सर्च इंजन समझ नहीं पाता था कि क्या कहाँ है। HTML5 ने हर हिस्से को उसका असली नाम दे दिया: नेविगेशन के लिए `<nav>`, लेख के लिए `<article>`, और किनारे के लिए `<aside>`।",
    whyImportant: "गूगल सर्च रैंकिंग (SEO) और दृष्टिबाधित लोगों के लिए स्क्रीन रीडर्स इन सेमांटिक टैग्स के आधार पर ही पेज को समझते हैं।",
    detailedExplanation: `### HTML5 के 6 प्रमुख सेमांटिक एलिमेंट्स:
1. **\`<header>\`:** पेज या किसी सेक्शन का ऊपरी हिस्सा (लोगो, हेडिंग, लेखक विवरण)।
2. **\`<nav>\`:** वेबसाइट के मुख्य नेविगेशन लिंक्स का कंटेनर।
3. **\`<main>\`:** पेज की मुख्य अनूठी सामग्री (पूरे पेज में केवल 1 बार आता है)।
4. **\`<section>\`:** एक ही विषय से संबंधित सामग्री का थीमेटिक समूह (उदा. 'About Us Section', 'Features Section')।
5. **\`<article>\`:** एक पूर्ण, स्वतंत्र और आत्मनिर्भर सामग्री (जैसे एक ब्लॉग पोस्ट, समाचार लेख, या प्रोडक्ट रिव्यू) जिसे अकेले भी कहीं शेयर किया जा सके।
6. **\`<aside>\`:** मुख्य सामग्री से संबंधित लेकिन किनारे रखी जाने वाली जानकारी (जैसे साइडबार, संबंधित लिंक्स, विज्ञापन, लेखक बायो)।
7. **\`<footer>\`:** पेज का निचला हिस्सा (कॉपीराइट, प्राइवेसी पॉलिसी, सोशल लिंक्स)।`,
    syntax: `HTML5 Semantic Layout:
+---------------------------------------------+
|                 <header>                    |
+---------------------------------------------+
|                  <nav>                      |
+----------------------+----------------------+
|                      |                      |
|      <section>       |       <aside>        |
|     +-------------+  |      (Sidebar)       |
|     |  <article>  |  |                      |
|     +-------------+  |                      |
+----------------------+----------------------+
|                 <footer>                    |
+---------------------------------------------+`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Semantic Layout Demo</title>
  <style>
    header, nav, section, aside, footer { padding: 12px; margin: 6px; border-radius: 4px; }
    header { background: #0284c7; color: white; }
    nav { background: #0369a1; color: white; }
    .layout { display: flex; gap: 10px; }
    section { flex: 3; background: #e0f2fe; }
    aside { flex: 1; background: #fef08a; }
    footer { background: #334155; color: white; text-align: center; }
  </style>
</head>
<body>
  <header><h1>NIELIT Web Portal</h1></header>
  <nav><a href="#" style="color:white;">Home</a> | <a href="#" style="color:white;">Syllabus</a></nav>
  <div class="layout">
    <section>
      <article>
        <h2>HTML5 Semantic Architecture</h2>
        <p>This article is a self-contained educational unit.</p>
      </article>
    </section>
    <aside>
      <h3>Exam Notice</h3>
      <p>M2-R5.1 exams scheduled for next month.</p>
    </aside>
  </div>
  <footer><p>© 2026 NIELIT Study Hub</p></footer>
</body>
</html>`,
    outputExplanation: "सर्च इंजन और ब्राउज़र को स्पष्ट पता है कि हेडर कहाँ है, नेविगेशन कहाँ है, मुख्य लेख कहाँ है और साइडबार कहाँ है।",
    realWorldAnalogy: "अखबार में मुख्य सुर्खी (Header), शीर्ष मेन्यू (Nav), मुख्य खबर का आर्टिकल (Article), किनारे छपे शेयर बाजार के भाव व विज्ञापन (Aside), और सबसे नीचे छपा प्रेस का पता (Footer) होता है।",
    importantPoints: [
      "<section> और <article> में अंतर: <article> स्वतंत्र होता है जिसे अकेले अखबार में छापा जा सके; <section> संबंधित विषय का हिस्सा होता है।",
      "<aside> का उपयोग साइडबार और संबंधित लिंक्स के लिए होता है।",
      "<nav> केवल मुख्य नेविगेशन लिंक्स के लिए उपयोग किया जाता है।"
    ],
    commonMistakes: [
      "हर लिंक के लिए `<nav>` लगाना (केवल मुख्य नेविगेशन मेन्यू के लिए `<nav>` का प्रयोग करें)।",
      "पेज में कई `<main>` टैग बना देना (एक पेज में केवल 1 `<main>` टैग होना चाहिए)।"
    ],
    examPerspective: "<section>, <nav>, <article>, <aside> के अर्थ और उपयोग पर परीक्षा में बार-बार प्रश्न आते हैं।",
    quickRevision: "सेमांटिक टैग्स: <header> (शीर्ष), <nav> (मेन्यू), <section> (खंड), <article> (स्वतंत्र लेख), <aside> (साइडबार), <footer> (तल)।",
    relatedTopics: ["html5-introduction", "html-layout", "div-tag"],
    practiceTask: "एक ब्लॉग पेज का लेआउट बनाएं जिसमें header, nav, section, article, aside और footer सभी का उपयोग हुआ हो।"
  },
  {
    id: "u3-t18",
    slug: "audio-and-video-tags",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "Audio Tag and Video Tag",
    hindiTitle: "ऑडियो टैग (<audio>) एवं वीडियो टैग (<video>)",
    definitionEnglish: "HTML5 provides native multimedia playback through the <audio> and <video> elements without needing external plugins, supporting standard web media formats (MP3, WAV, OGG for audio; MP4, WebM, OGG for video) and controlled via attributes like controls, autoplay, loop, and muted.",
    definitionHindi: "HTML5 बिना किसी बाहरी प्लगइन के नेटिव मल्टीमीडिया प्लेबैक हेतु <audio> और <video> एलिमेंट्स प्रदान करता है, जो मानक वेब मीडिया प्रारूपों (ऑडियो हेतु MP3, WAV, OGG; वीडियो हेतु MP4, WebM, OGG) का समर्थन करते हैं और controls, autoplay, loop व muted विशेषताओं द्वारा नियंत्रित होते हैं।",
    simpleWords: "पहले वेबसाइट पर गाना या वीडियो चलाने के लिए Flash Player की जरूरत होती थी। HTML5 में आप सिर्फ `<video controls>` लिख दें, और ब्राउज़र में प्ले, पॉज़, वॉल्यूम और फुलस्क्रीन का बटन अपने आप आ जाता है।",
    whyImportant: "आज का इंटरनेट वीडियो और पॉडकास्ट का इंटरनेट है। वेब डिजाइनिंग में मीडिया एम्बेडिंग के बिना कोई भी आधुनिक वेबसाइट अधूरी है।",
    detailedExplanation: `### 1. \`<audio>\` टैग के मुख्य एट्रिब्यूट्स:
- **\`controls\` (अनिवार्य):** प्ले, पॉज़, और वॉल्यूम स्लाइडर दिखाना। इसके बिना ऑडियो प्लेयर स्क्रीन पर अदृश्य रहेगा!
- **\`autoplay\`:** पेज लोड होते ही गाना बजना (आधुनिक ब्राउज़र यूजर इंटरैक्शन के बिना इसे ब्लॉक करते हैं)।
- **\`loop\`:** गाना खत्म होने पर दोबारा शुरू से बजना।
- **\`muted\`:** म्यूट अवस्था में शुरू होना।
- **मानक ऑडियो प्रारूप:** **MP3** (सार्वभौमिक समर्थित), WAV, OGG।

### 2. \`<video>\` टैग के मुख्य एट्रिब्यूट्स:
- **\`controls\`:** प्ले/पॉज़, टाइमलाइन, और फुलस्क्रीन बटन।
- **\`width\` और \`height\`:** वीडियो प्लेयर का आकार।
- **\`poster="thumb.jpg"\`:** वीडियो प्ले होने से पहले दिखने वाली थंबनेल इमेज।
- **\`autoplay muted\`:** म्यूट अवस्था में स्वतः वीडियो चलाना (ब्राउज़र इसे अनुमति देते हैं)।
- **\`loop\`:** वीडियो का निरंतर दोहराव।
- **मानक वीडियो प्रारूप:** **MP4 (H.264)** (100% ब्राउज़रों में समर्थित), WebM, OGG।

### 3. \`<source>\` टैग द्वारा फॉलबैक प्रदान करना:
विभिन्न ब्राउज़रों के लिए एक साथ कई फॉर्मेट्स देना ताकि यदि एक न चले तो दूसरा चल जाए।`,
    syntax: `<!-- Native Audio Player -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>

<!-- Native Video Player -->
<video width="480" height="270" controls poster="thumb.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support video.
</video>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML5 Native Multimedia</h2>
  
  <h3>Audio Player</h3>
  <audio controls>
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <h3>Video Player with Controls</h3>
  <video width="320" height="240" controls poster="https://via.placeholder.com/320x240/0284c7/ffffff?text=Video+Thumbnail">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</body>
</html>`,
    outputExplanation: "ब्राउज़र का देशी मीडिया प्लेयर दिखेगा जिसमें प्ले, म्यूट, टाइम बार और डाउनलोड का विकल्प उपलब्ध होगा।",
    realWorldAnalogy: "जैसे टीवी में इन-बिल्ट स्पीकर और स्क्रीन होती है और अलग से सीडी प्लेयर जोड़ने की जरूरत नहीं पड़ती, HTML5 के ऑडियो/वीडियो टैग्स वैसे ही इन-बिल्ट हैं।",
    importantPoints: [
      "controls एट्रिब्यूट न लगाने पर प्लेयर स्क्रीन पर दिखाई नहीं देगा।",
      "MP4 वीडियो का सबसे सुरक्षित और सार्वभौमिक रूप से समर्थित फॉर्मेट है।",
      "MP3 ऑडियो का सार्वभौमिक रूप से समर्थित फॉर्मेट है।"
    ],
    commonMistakes: [
      "`controls` एट्रिब्यूट भूल जाना (जिससे गाना लोड तो होता है पर प्ले करने का बटन ही नहीं दिखता)।"
    ],
    examPerspective: "controls, autoplay, poster, loop एट्रिब्यूट्स और MP3/MP4 फॉर्मेट सपोर्ट पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    quickRevision: "<audio> और <video> बिना प्लगइन मीडिया चलाते हैं। controls बटन दिखाता है, poster थंबनेल देता है, loop दोहराता है।",
    relatedTopics: ["html-embed-multimedia", "html5-introduction", "frames-and-iframe"],
    practiceTask: "एक वीडियो टैग बनाएं जिसमें `width=\"400\"`, `controls`, और एक पोस्टर इमेज सेट हो।"
  },
  {
    id: "u3-t19",
    slug: "html-embed-multimedia",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "HTML Embed Multimedia",
    hindiTitle: "मल्टीमीडिया एम्बेड करना (<embed> & <object> Tags)",
    definitionEnglish: "HTML provides the <embed> (void self-closing container) and <object> (container with fallback capability) elements to embed external interactive content, multimedia players, PDF documents, Java applets, and SVG graphics directly into a webpage.",
    definitionHindi: "HTML बाहरी इंटरएक्टिव कंटेंट, मल्टीमीडिया प्लेयर्स, PDF दस्तावेज़ों और SVG ग्राफिक्स को सीधे वेबपेज में अंतर्निहित करने के लिए <embed> (सेल्फ-क्लोजिंग टैग) और <object> (फॉलबैक क्षमता वाला कंटेनर) एलिमेंट्स प्रदान करता है।",
    simpleWords: "जब आपको अपने वेबपेज के अंदर कोई PDF फाइल (जैसे O-Level का सिलेबस) सीधे खोलकर दिखानी हो, तो आप `<embed>` या `<object>` टैग का उपयोग करते हैं।",
    whyImportant: "दस्तावेज़ों (PDFs), फ्लैश एनिमेशन (ऐतिहासिक), और इंटरएक्टिव प्लगइन्स को वेबपेज में दिखाने के लिए यह टैग्स आवश्यक हैं।",
    detailedExplanation: `### 1. \`<embed>\` टैग:
- यह एक **Void / Empty Tag** है।
- **एट्रिब्यूट्स:** \`src\` (फाइल पाथ), \`type\` (MIME टाइप जैसे \`application/pdf\`), \`width\`, \`height\`।
- यह बहुत सरल है लेकिन इसका कोई फॉलबैक कंटेंट नहीं होता (अगर ब्राउज़र फाइल नहीं खोल पाया तो कुछ नहीं दिखेगा)।

### 2. \`<object>\` टैग:
- यह एक कंटेनर टैग है (\`</object>\` क्लोजिंग टैग अनिवार्य है)।
- **एट्रिब्यूट्स:** \`data\` (फाइल पाथ), \`type\` (MIME टाइप)।
- **फॉलबैक सपोर्ट (अत्यंत शक्तिशाली):** यदि यूजर का ब्राउज़र उस फाइल को नहीं खोल सकता, तो टैग के अंदर लिखा वैकल्पिक लिंक या मैसेज दिखता है:
  \`<object data="syllabus.pdf" type="application/pdf">\`
    \`<p>Your browser cannot view PDFs. <a href="syllabus.pdf">Download it here.</a></p>\`
  \`</object>\``,
    syntax: `<!-- Embed a PDF using <embed> -->
<embed src="notes.pdf" type="application/pdf" width="100%" height="500px">

<!-- Embed a PDF using <object> with fallback -->
<object data="notes.pdf" type="application/pdf" width="100%" height="500px">
  <p>Alternative: <a href="notes.pdf">Download PDF</a></p>
</object>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>Embedding PDF Document in Webpage</h2>
  <object data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
          type="application/pdf" 
          width="100%" 
          height="350px">
    <p>Your browser does not support embedded PDFs. 
       <a href="dummy.pdf">Click here to download the syllabus.</a>
    </p>
  </object>
</body>
</html>`,
    outputExplanation: "ब्राउज़र के अंदर एक इन-बिल्ट PDF रीडर खुल जाएगा जिसमें पेज ज़ूम और स्क्रॉल किया जा सकेगा।",
    realWorldAnalogy: "जैसे परीक्षा केंद्र के बाहर कांच के नोटिस बोर्ड में पूरा प्रश्न-पत्र या सर्कुलर चिपका दिया जाता है जिसे बाहर से ही पढ़ा जा सकता है।",
    importantPoints: [
      "<embed> एम्प्टी टैग है और 'src' एट्रिब्यूट लेता है।",
      "<object> कंटेनर टैग है और 'data' एट्रिब्यूट लेता है।",
      "<object> में फॉलबैक कंटेंट दिया जा सकता है।"
    ],
    commonMistakes: [
      "<object> में `src` लिख देना (ऑब्जेक्ट टैग `data` एट्रिब्यूट लेता है)।"
    ],
    examPerspective: "प्रश्न: '<embed> और <object> में मुख्य अंतर क्या है?' (<object> फॉलबैक सपोर्ट करता है, <embed> नहीं), 'PDF एम्बेड करने के लिए कौन सा टैग उपयुक्त है?'",
    quickRevision: "<embed> और <object> बाहरी दस्तावेज़ (जैसे PDF) एम्बेड करते हैं। <object> में फॉलबैक कंटेंट की सुविधा होती है।",
    relatedTopics: ["audio-and-video-tags", "frames-and-iframe", "documents-interchange-standards"],
    practiceTask: "एक `<object>` टैग बनाकर उसमें किसी PDF फाइल को 100% चौड़ाई के साथ एम्बेड करने का कोड लिखें।"
  },
  {
    id: "u3-t20",
    slug: "html-layout",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "HTML Layout",
    hindiTitle: "HTML लेआउट (Website Layout Architecture)",
    definitionEnglish: "HTML layout refers to the structural arrangement of visual content areas across a webpage (header, navigation bar, main content, sidebars, and footer) organized using modern HTML5 semantic elements and CSS positioning models rather than outdated table-based layouts.",
    definitionHindi: "HTML लेआउट का तात्पर्य वेबपेज के दृश्यमान क्षेत्रों (हेडर, मेन्यू, मुख्य सामग्री, साइडबार और फुटर) की उस संरचनात्मक व्यवस्था से है जिसे पुराने टेबल-आधारित लेआउट के बजाय आधुनिक HTML5 सेमांटिक एलिमेंट्स और CSS द्वारा व्यवस्थित किया जाता है।",
    simpleWords: "लेआउट वेबसाइट का ब्लूप्रिंट या नक्शा है: ऊपर हेडर कहाँ रहेगा, मेन्यू कहाँ रहेगा, मुख्य लेख बीच में और विज्ञापन साइड में कैसे दिखेंगे, यह तय करना लेआउट कहलाता है।",
    whyImportant: "एक खराब लेआउट वाली वेबसाइट यूजर को भ्रमित कर देती है। सही लेआउट से यूजर को जो जानकारी चाहिए वह सेकंडों में मिल जाती है।",
    detailedExplanation: `### लेआउट तकनीकों का विकासक्रम (Evolution of Layouts):
1. **Table-Based Layout (1990s - अब पूर्णतः वर्जित):**
   - पुराने समय में पूरे पेज को \`<table>\` के अंदर rows और cols में तोड़ा जाता था।
   - यह बहुत धीमा, दुर्गम (inaccessible) और मोबाइल पर पूरी तरह फेल था।
2. **Div + Float Layout (2000s):**
   - \`<div>\` और CSS \`float: left; clear: both;\` का उपयोग।
   - इसमें अक्सर लेआउट टूटने (Clearing issues) की समस्या आती थी।
3. **HTML5 Semantic Layout + CSS Flexbox / Grid (आधुनिक मानक):**
   - सेमांटिक टैग्स (\`<header>\`, \`<nav>\`, \`<section>\`, \`<aside>\`, \`<footer>\`)।
   - CSS Flexbox (1D लेआउट) और CSS Grid (2D लेआउट) का उपयोग।
   - फ्रेमवर्क्स जैसे **W3.CSS Grid System** (\`w3-row\`, \`w3-col\`)।`,
    syntax: `Modern Semantic Layout Structure:
<header> ... </header>
<nav> ... </nav>
<div class="main-wrapper">
  <main> <section> ... </section> </main>
  <aside> ... </aside>
</div>
<footer> ... </footer>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; margin: 0; }
    header { background: #0284c7; color: white; padding: 20px; text-align: center; }
    nav { background: #0369a1; padding: 10px; text-align: center; }
    nav a { color: white; margin: 0 10px; text-decoration: none; font-weight: bold; }
    .row { display: flex; flex-wrap: wrap; }
    .content { flex: 70%; padding: 20px; background: #f8fafc; }
    .sidebar { flex: 30%; padding: 20px; background: #e2e8f0; }
    footer { background: #1e293b; color: white; padding: 15px; text-align: center; }
    @media (max-width: 600px) {
      .content, .sidebar { flex: 100%; }
    }
  </style>
</head>
<body>
  <header><h1>Modern Web Layout</h1></header>
  <nav><a href="#">Home</a><a href="#">Notes</a><a href="#">MCQs</a></nav>
  <div class="row">
    <div class="content">
      <h2>Main Learning Area</h2>
      <p>Responsive multi-column layout using semantic HTML and CSS.</p>
    </div>
    <div class="sidebar">
      <h3>Quick Links</h3>
      <p>Unit 1 to Unit 8 Notes</p>
    </div>
  </div>
  <footer><p>© 2026 NIELIT O-Level Learning Hub</p></footer>
</body>
</html>`,
    outputExplanation: "पीसी पर 70% सामग्री और 30% साइडबार अगल-बगल दिखेंगे, जबकि 600px से कम चौड़े मोबाइल पर दोनों स्वतः एक के नीचे एक हो जाएंगे।",
    realWorldAnalogy: "जैसे एक घर का आर्किटेक्चरल नक्शा होता है जिसमें लिविंग रूम, किचन और बालकनी की जगह तय होती है, वैसे ही HTML लेआउट पेज के हिस्सों को तय करता है।",
    importantPoints: [
      "लेआउट के लिए कभी भी HTML <table> का उपयोग न करें।",
      "आधुनिक लेआउट HTML5 सेमांटिक टैग्स और CSS Flexbox/Grid से बनते हैं।",
      "W3.CSS फ्रेमवर्क 12-कॉलम ग्रिड सिस्टम प्रदान करता है।"
    ],
    commonMistakes: [
      "टेबल को लेआउट के लिए उपयोग करना (टेबल केवल सारणीबद्ध डेटा के लिए है, लेआउट के लिए नहीं)।"
    ],
    examPerspective: "प्रश्न: 'वेबपेज लेआउट के लिए टेबल का उपयोग क्यों नहीं करना चाहिए?' और 'HTML5 लेआउट के मुख्य घटक कौन से हैं?'",
    quickRevision: "HTML लेआउट पेज के हिस्सों (header, nav, content, sidebar, footer) को व्यवस्थित करता है। आधुनिक लेआउट Flexbox व Grid से बनते हैं।",
    relatedTopics: ["html5-new-semantic-elements", "w3-css-grid", "responsive-web-designing"],
    practiceTask: "एक संपूर्ण 2-कॉलम लेआउट बनाएं जो मोबाइल पर 1 कॉलम में बदल जाए।"
  },
  {
    id: "u3-t21",
    slug: "html5-form-validations",
    unit: 3,
    unitSlug: "unit-3",
    unitTitle: "HTML Basics & HTML5",
    title: "HTML5 Form Validations: Require, Pattern, Autofocus, email, number, date, range",
    hindiTitle: "HTML5 फॉर्म वैलिडेशन (Required, Pattern, Autofocus, Types)",
    definitionEnglish: "HTML5 native form validation provides client-side constraint checking directly in the browser without requiring JavaScript, utilizing attributes like 'required', 'pattern' (Regex), 'autofocus', and specialized semantic input types (email, number, date, range).",
    definitionHindi: "HTML5 नेटिव फॉर्म वैलिडेशन बिना किसी जावास्क्रिप्ट कोड के सीधे वेब ब्राउज़र में क्लाइंट-साइड इनपुट जांच की सुविधा देता है; इसमें 'required', 'pattern' (रेगुलर एक्सप्रेशन), 'autofocus' जैसी विशेषताएं और विशेष इनपुट प्रकार (email, number, date, range) शामिल हैं।",
    simpleWords: "पहले अगर किसी फॉर्म में चेक करना होता था कि यूजर ने ईमेल सही लिखा है या नहीं, तो 20 लाइन का जावास्क्रिप्ट कोड लिखना पड़ता था। HTML5 में आपको सिर्फ `type=\"email\"` और `required` लिखना है, बाकी सारी जांच ब्राउज़र खुद कर लेता है!",
    whyImportant: "गलत, खाली या अधूरा डेटा सर्वर तक जाने से रोकना और यूजर को तुरंत त्रुटि बताना फॉर्म वैलिडेशन का मूल काम है।",
    detailedExplanation: `### 1. HTML5 के प्रमुख वैलिडेशन एट्रिब्यूट्स:
- **\`required\` (अनिवार्य):** यदि यूजर इस फील्ड को खाली छोड़कर सबमिट दबाएगा, तो ब्राउज़र 'Please fill out this field' की चेतावनी दिखाकर सबमिशन रोक देगा।
- **\`autofocus\`:** पेज लोड होते ही कर्सर स्वतः इस इनपुट बॉक्स में ब्लिंक करने लगेगा।
- **\`pattern\` (रेगुलर एक्सप्रेशन):** डेटा को एक निश्चित फॉर्मेट में बंधित करना।
  - उदाहरण: \`pattern="[0-9]{10}"\` (केवल 10 अंकों का मोबाइल नंबर स्वीकार करेगा)।
  - उदाहरण: \`pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"\` (पैन कार्ड नंबर फॉर्मेट)।
- **\`min\` / \`max\`:** संख्या या तारीख की न्यूनतम और अधिकतम सीमा तय करना।
- **\`step\`:** नंबर या रेंज इनपुट में बढ़ने का अंतराल (उदा. \`step="5"\`)।

### 2. नए विशिष्ट इनपुट प्रकार (Input Types):
1. **\`type="email"\`:** स्वतः जांचता है कि इनपुट में \`@\` और वैध डोमेन नाम है या नहीं।
2. **\`type="number"\`:** केवल संख्यात्मक मान स्वीकार करता है (ऊपर-नीचे तीर के साथ)।
3. **\`type="date"\`:** एक क्लिक में कैलेंडर पिकर (Date Picker) खोल देता है।
4. **\`type="range"\`:** स्लाइडर कंट्रोल (जैसे वॉल्यूम या मूल्य सीमा तय करना)।`,
    syntax: `<input type="email" required placeholder="name@domain.com">
<input type="tel" pattern="[0-9]{10}" required placeholder="10 Digits">
<input type="number" min="18" max="60" step="1">
<input type="date" min="2026-01-01">
<input type="range" min="0" max="100" value="50">`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML5 Native Validation Demo</h2>
  <form action="#" method="POST">
    <p>
      Candidate Name *: 
      <input type="text" name="uname" required autofocus placeholder="Required field">
    </p>
    <p>
      Email Address *: 
      <input type="email" name="uemail" required placeholder="student@example.com">
    </p>
    <p>
      Mobile (10 digits) *: 
      <input type="tel" name="uphone" pattern="[0-9]{10}" required placeholder="9876543210">
    </p>
    <p>
      Age (18 to 65): 
      <input type="number" name="uage" min="18" max="65" value="20">
    </p>
    <p>
      Exam Date: 
      <input type="date" name="edate">
    </p>
    <p>
      Confidence Level: 
      <input type="range" name="conf" min="0" max="100" value="80">
    </p>
    <button type="submit">Submit Form</button>
  </form>
</body>
</html>`,
    outputExplanation: "यदि ईमेल में '@' न हो या मोबाइल में 9 अंक हों, तो ब्राउज़र सबमिट होने से पहले ही पॉपअप एरर दिखा देगा।",
    realWorldAnalogy: "जैसे मेट्रो स्टेशन पर ऑटोमैटिक टिकट बैरियर होता है जो अमान्य टोकन या बिना पैसे वाले कार्ड को लाल बत्ती दिखाकर वहीं रोक देता है, HTML5 वैलिडेशन अमान्य डेटा को वहीं रोक देता है।",
    importantPoints: [
      "required बूलियन एट्रिब्यूट है (इसे केवल required लिखा जाता है)।",
      "pattern में रेगुलर एक्सप्रेशन दिया जाता है।",
      "HTML5 वैलिडेशन के लिए किसी भी जावास्क्रिप्ट की आवश्यकता नहीं होती।",
      "type=\"email\" मोबाइल कीबोर्ड पर स्वतः '@' और '.com' का बटन ले आता है।"
    ],
    commonMistakes: [
      "pattern में गलत Regex लिख देना जिससे सही इनपुट भी अमान्य घोषित हो जाए।",
      "क्लाइंट-साइड वैलिडेशन पर 100% निर्भर होकर सर्वर-साइड वैलिडेशन छोड़ देना (सुरक्षा के लिए दोनों आवश्यक हैं)।"
    ],
    examPerspective: "required, pattern, autofocus एट्रिब्यूट्स और email, number, date, range इनपुट टाइप्स पर हर साल प्रश्न पूछे जाते हैं।",
    quickRevision: "HTML5 नेटिव वैलिडेशन बिना JS के इनपुट जांचता है: required (खाली न छोड़ें), pattern (Regex फॉर्मेट), email, number, date, range.",
    relatedTopics: ["forms-and-elements", "input-types-and-attributes", "basic-form-validations-in-javascript"],
    practiceTask: "एक फॉर्म बनाएं जो केवल 10 अंकों का मोबाइल नंबर स्वीकार करे और गलत नंबर डालने पर एरर दिखाए।"
  }
];
