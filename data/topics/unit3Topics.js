// Unit 3: HTML Basics & Elements - Complete Topic Notes

export const unit3Topics = [
  {
    "id": "u3-t1",
    "slug": "html-introduction",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "HTML Introduction",
    "hindiTitle": "HTML का परिचय",
    "definitionEnglish": "HTML (HyperText Markup Language) is the standard markup language used worldwide to create, structure, and format web pages and web applications delivered across the World Wide Web.",
    "definitionHindi": "HTML (हाइपरटेक्स्ट मार्कअप लैंग्वेज) वर्ल्ड वाइड वेब पर वेबपेजों और वेब ऐप्लिकेशन्स की संरचना और प्रारूप तैयार करने के लिए उपयोग की जाने वाली सार्वभौमिक मानक मार्कअप भाषा है।",
    "simpleWords": "HTML कोई प्रोग्रामिंग भाषा (जैसे C या Python) नहीं है जिसमें गणितीय लॉजिक चले; यह टैग्स (<tag>) का एक ऐसा समूह है जो वेब ब्राउज़र को बताता है कि कौन सी लाइन हेडिंग है, कौन सा पैराग्राफ है, और कहाँ इमेज लगानी है।",
    "whyImportant": "HTML दुनिया के प्रत्येक वेबपेज की रीढ़ की हड्डी (कंकाल) है। बिना HTML के कोई भी ब्राउज़र किसी सामग्री को स्क्रीन पर प्रदर्शित नहीं कर सकता।",
    "detailedExplanation": "### 1. Evolution and Version History of HTML\n- **1991 — HTML 1.0:** Created by **Tim Berners-Lee** at CERN containing 18 basic structural tags.\n- **1995 — HTML 2.0:** Standardized under IETF RFC 1866, adding formal support for form elements.\n- **1997 — HTML 3.2 & HTML 4.01:** Standardized under the **W3C (World Wide Web Consortium)**, introducing stylesheet separation and advanced tables.\n- **2000 — XHTML 1.0:** Strict XML-based reformation of HTML requiring strict closing tags and lower-case attribute quotes.\n- **2014 — HTML5:** Standardized by WHATWG and W3C, introducing native audio/video playback, canvas 2D graphics, semantic tags, and rich web form validation APIs.\n\n### 2. The Core Philosophy of HTML\nHTML is not a programming language (it contains no loops, variables, or computational logic); it is a **Markup Language** that uses tags and attributes to define the semantic structure and content hierarchy of web documents.",
    "syntax": "HTML Element Syntax:\n<tagname attribute=\"value\">Content goes here...</tagname>\n└───┬───┘ └──────┬──────┘ └───────────┬─────────┘ └───┬────┘\nStart Tag   Attribute           Content          End Tag",
    "codeExample": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First HTML Page</title>\n  </head>\n  <body>\n    <h1>Welcome to NIELIT O Level</h1>\n    <p>HTML is very easy and fun to learn!</p>\n  </body>\n</html>",
    "outputExplanation": "ब्राउज़र `<h1>` को एक बड़े, मोटे शीर्षक के रूप में और `<p>` को एक सामान्य पैराग्राफ के रूप में प्रदर्शित करता है।",
    "realWorldAnalogy": "जैसे एक नए मकान के निर्माण में सबसे पहले ईंटों और सीमेंट से दीवारें और कमरे (कंकाल) बनाए जाते हैं, वही काम वेबपेज में HTML करता है।",
    "importantPoints": [
      "HTML का पूर्ण रूप: HyperText Markup Language.",
      "HTML केस-इंसेंसिटिव (Case-insensitive) है (`<P>` और `<p>` समान हैं, लेकिन स्मॉल लेटर्स मानक हैं)।",
      "HTML फाइलों का एक्सटेंशन .html या .htm होता है।",
      "आविष्कारक: टिम बर्नर्स-ली (1991)।"
    ],
    "commonMistakes": [
      "HTML को प्रोग्रामिंग लैंग्वेज समझना (इसमें लूप, वैरिएबल और कंडीशनल लॉजिक नहीं होते, यह मार्कअप भाषा है)।",
      "क्लोजिंग टैग (`</tag>`) लगाना भूल जाना।"
    ],
    "examPerspective": "HTML का पूर्ण रूप, आविष्कारक, आविष्कार का वर्ष, और मार्कअप भाषा की प्रकृति पर हर साल वस्तुनिष्ठ प्रश्न आते हैं।",
    "quickRevision": "HTML वेबपेज का कंकाल बनाने वाली मार्कअप भाषा है। आविष्कारक: टिम बर्नर्स-ली (1991)। मानक: HTML5.",
    "relatedTopics": [
      "basic-structure-of-html",
      "head-section-and-elements",
      "html5-introduction"
    ],
    "practiceTask": "नोटपैड में HTML का पूर्ण रूप और अपने 3 पसंदीदा विषयों को हेडिंग व पैराग्राफ में लिखकर ब्राउज़र में खोलें।"
  },
  {
    "id": "u3-t2",
    "slug": "basic-structure-of-html",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Basic Structure of HTML",
    "hindiTitle": "HTML की मूल संरचना (Basic Structure of HTML)",
    "definitionEnglish": "The basic structure of an HTML document consists of a mandatory Document Type Declaration (<!DOCTYPE html>), followed by the root <html> tag enclosing two primary structural divisions: the <head> section (metadata) and the <body> section (visible content).",
    "definitionHindi": "एक HTML दस्तावेज़ की मूल संरचना में सबसे ऊपर अनिवार्य डॉक्यूमेंट टाइप डिक्लेरेशन (<!DOCTYPE html>) होता है, जिसके बाद रूट <html> टैग आता है जो दो मुख्य भागों को समेटे रहता है: <head> सेक्शन (मेटाडाटा) और <body> सेक्शन (दृश्यमान सामग्री)।",
    "simpleWords": "हर HTML पेज इंसान के शरीर जैसा होता है: सबसे ऊपर उसका सिर (<head>) जिसमें उसका नाम और पहचान होती है, और नीचे उसका धड़ (<body>) जिसमें वह सब कुछ होता है जो असल में दिखता है।",
    "whyImportant": "किसी भी वेबपेज को ब्राउज़र द्वारा बिना एरर और आधुनिक मानकों के अनुसार सही से रेंडर करने के लिए यह बुनियादी ढांचा अनिवार्य है।",
    "detailedExplanation": "### 1. The Anatomy of a Modern HTML5 Document\nEvery valid HTML5 document must follow this standardized architectural structure:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document Title</title>\n</head>\n<body>\n  <h1>Page Heading</h1>\n  <p>Page Content</p>\n</body>\n</html>\n```\n\n### 2. Breakdown of Core Structural Elements\n1. **`<!DOCTYPE html>`:** Document Type Declaration informing modern browsers to render in standard HTML5 mode rather than legacy \"quirks mode\".\n2. **`<html lang=\"en\">`:** The root element wrapping all document contents; the `lang` attribute informs screen readers and search engines of the primary document language.\n3. **`<head>` Container:** Houses technical metadata (character encoding, responsive viewports, page title, linked CSS, and script tags) not directly painted inside the viewport canvas.\n4. **`<body>` Container:** Encloses all visible elements (headings, paragraphs, images, videos, tables, forms) rendered directly to end-users.",
    "syntax": "Standard HTML5 Structure:\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Page Title</title>\n  </head>\n  <body>\n    <h1>Visible Heading</h1>\n    <p>Visible Content</p>\n  </body>\n</html>",
    "codeExample": "<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>O-Level Web Design Class</title>\n</head>\n<body>\n  <h1>स्वागत है! NIELIT M2-R5.1</h1>\n  <p>यह HTML5 की मानक संरचना का एक सजीव उदाहरण है।</p>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र टैब पर 'O-Level Web Design Class' दिखेगा, और सफेद कैनवास पर हेडिंग और पैराग्राफ दिखेगा।",
    "realWorldAnalogy": "एक पत्र (Letter) में ऊपर का लिफाफा (Head) केवल डाकिए और पते के लिए होता है, जबकि अंदर का पत्र (Body) पढ़ने वाले के लिए होता है।",
    "importantPoints": [
      "<!DOCTYPE html> केस-इंसेंसिटिव है लेकिन हमेशा पहली लाइन में लिखा जाता है।",
      "<html> टैग दस्तावेज़ का रूट एलिमेंट कहलाता है।",
      "<body> टैग के अंदर लिखा गया कंटेंट ही यूजर को स्क्रीन पर दिखता है।"
    ],
    "commonMistakes": [
      "<body> टैग को <head> के अंदर रख देना (दोनों स्वतंत्र और समानांतर होने चाहिए)।",
      "<!DOCTYPE html> लिखना भूल जाना जिससे पेज Quirks Mode में चला जाए।"
    ],
    "examPerspective": "HTML5 के डॉक्युटाइप डिक्लेरेशन का सिंटैक्स, रूट एलिमेंट का नाम, और हेड व बॉडी सेक्शन की भूमिका पर सीधे प्रश्न आते हैं।",
    "quickRevision": "HTML5 संरचना: <!DOCTYPE html> -> <html> -> <head> (मेटाडाटा) + <body> (दृश्य सामग्री).",
    "relatedTopics": [
      "html-introduction",
      "head-section-and-elements",
      "formatting-tags"
    ],
    "practiceTask": "खाली एडिटर में बिना देखे HTML5 का पूरा ढांचा 1 मिनट में टाइप करने का अभ्यास करें।"
  },
  {
    "id": "u3-t3",
    "slug": "head-section-and-elements",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Head Section and Elements of Head Section",
    "hindiTitle": "Head सेक्शन और उसके प्रमुख एलिमेंट्स",
    "definitionEnglish": "The <head> element is a container for metadata (machine-readable data about the HTML document) and external resource links that are not displayed directly on the webpage canvas, including <title>, <meta>, <link>, <style>, <script>, and <base>.",
    "definitionHindi": "<head> एलिमेंट वेबपेज के मेटाडाटा (दस्तावेज़ की पृष्ठभूमि जानकारी) और बाहरी संसाधनों के लिंक्स का एक कंटेनर है जो सीधे स्क्रीन पर प्रदर्शित नहीं होता; इसमें <title>, <meta>, <link>, <style>, <script> और <base> शामिल हैं।",
    "simpleWords": "यह वेबपेज का 'ब्रेन' है। इसमें पेज का नाम (Title), मोबाइल सेटिंग (Viewport), और सुंदरता लाने वाली फाइलें (CSS) जोड़ी जाती हैं।",
    "whyImportant": "सर्च इंजन ऑप्टिमाइजेशन (SEO), सोशल मीडिया शेयरिंग, मोबाइल रिस्पॉन्सिवनेस और स्टाइलशीट लोडिंग पूरी तरह Head सेक्शन के तत्वों पर निर्भर करती है।",
    "detailedExplanation": "### 1. Crucial Tags Located in the `<head>` Section\n1. **`<title>`:** Sets the webpage title shown in browser tab strips, search engine result pages (SERPs), and bookmarks.\n2. **`<meta charset=\"UTF-8\">`:** Specifies the character encoding supporting all world languages, technical symbols, and emojis.\n3. **`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`:** Essential for mobile responsiveness, setting screen width to match device width.\n4. **`<meta name=\"description\" content=\"...\">`:** Provides concise summary snippets indexed by search engine crawlers.\n5. **`<link rel=\"stylesheet\" href=\"style.css\">`:** Links external Cascading Style Sheets.\n6. **`<script src=\"app.js\" defer></script>`:** Links JavaScript files, with `defer` or `async` attributes for non-blocking rendering.",
    "syntax": "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Page Title</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <style> body { font-family: sans-serif; } </style>\n  <script src=\"app.js\"></script>\n</head>",
    "codeExample": "<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"NIELIT O Level Web Designing Study Portal\">\n  <meta name=\"author\" content=\"Saurabh Tiwari\">\n  <title>NIELIT Head Elements Master</title>\n  <style>\n    h1 { color: #0284c7; }\n  </style>\n</head>\n<body>\n  <h1>Head सेक्शन के एलिमेंट्स सफलतापूर्वक लोड हुए!</h1>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र टैब पर 'NIELIT Head Elements Master' दिखेगा और हेड सेक्शन में लिखी गई CSS से हेडिंग नीले रंग में दिखेगी।",
    "realWorldAnalogy": "जैसे किसी पुस्तक के आरंभिक पृष्ठ पर लेखक का नाम, प्रकाशक, ISBN नंबर और विषय-सूची होती है जो मुख्य कहानी का हिस्सा नहीं होते पर पूरी पुस्तक को पहचान देते हैं।",
    "importantPoints": [
      "<title> टैग हेड सेक्शन के अंदर होना कानूनी रूप से अनिवार्य है।",
      "<meta charset=\"UTF-8\"> आधुनिक वेब का मानक एन्कोडिंग है।",
      "<link> टैग एम्प्टी (Void) टैग है, इसका कोई क्लोजिंग टैग नहीं होता।"
    ],
    "commonMistakes": [
      "<title> टैग को <body> के अंदर लिख देना (यह हमेशा <head> में होना चाहिए)।",
      "Viewport मेटा टैग छोड़ देना जिससे मोबाइल पर पेज बहुत छोटा दिखे।"
    ],
    "examPerspective": "परीक्षा में प्रश्न: 'ब्राउज़र के टाइटल बार में दिखने वाला टैग कौन सा है?' (<title>), '<link> टैग का उपयोग कहाँ होता है?' (Head सेक्शन में External CSS जोड़ने हेतु).",
    "quickRevision": "<head> मेटाडाटा कंटेनर है। मुख्य टैग्स: <title>, <meta>, <link>, <style>, <script>, <base>.",
    "relatedTopics": [
      "basic-structure-of-html",
      "responsive-web-designing",
      "types-of-css"
    ],
    "practiceTask": "अपने वेबपेज के हेड सेक्शन में फेविकॉन (`<link rel=\"icon\" href=\"logo.png\">`) जोड़कर ब्राउज़र टैब में लोगो देखें।"
  },
  {
    "id": "u3-t4",
    "slug": "formatting-tags",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Formatting Tags: Bold, Italic, Underline, Strikethrough",
    "hindiTitle": "फॉर्मेटिंग टैग्स: Bold, Italic, Underline, Strikethrough",
    "definitionEnglish": "HTML Formatting Tags are inline elements used to alter the visual presentation and semantic importance of text, primarily including bold (<b>, <strong>), italic (<i>, <em>), underline (<u>, <ins>), and strikethrough (<s>, <del>).",
    "definitionHindi": "HTML फॉर्मेटिंग टैग्स इनलाइन एलिमेंट्स हैं जिनका उपयोग टेक्स्ट के दृश्य रूप और सेमांटिक महत्व को बदलने के लिए किया जाता है; मुख्य रूप से बोल्ड (<b>, <strong>), इटैलिक (<i>, <em>), अंडरलाइन (<u>, <ins>) और स्ट्राइकथ्रू (<s>, <del>)।",
    "simpleWords": "जब आपको किसी शब्द को मोटा (Bold), तिरछा (Italic), नीचे रेखा खींचना (Underline) या बीच से काटना (Strikethrough) हो, तो इन फॉर्मेटिंग टैग्स का उपयोग किया जाता है।",
    "whyImportant": "पाठक का ध्यान महत्वपूर्ण तथ्यों पर खींचने और परीक्षा नोट्स में कीवर्ड्स को हाइलाइट करने के लिए फॉर्मेटिंग टैग्स आवश्यक हैं।",
    "detailedExplanation": "### 1. Physical vs. Semantic Text Formatting Tags\n| Tag | Visual Appearance | Semantic Meaning & Accessibility |\n| :--- | :--- | :--- |\n| **`<b>`** | Bold text | Stylistic offset without extra structural importance |\n| **`<strong>`** | Bold text | High importance, seriousness, or urgency (read with emphasis by screen readers) |\n| **`<i>`** | Italic text | Alternate voice or mood (e.g., technical terms, foreign words) |\n| **`<em>`** | Italic text | Stressed emphasis altering sentence meaning |\n| **`<u>`** | Underlined text | Stylistic underline (used cautiously to avoid confusion with links) |\n| **`<ins>`** | Underlined text | Represents newly inserted text in document revisions |\n| **`<s>` / `<del>`** | Strikethrough | Deleted or obsolete information (e.g., discounted retail pricing) |\n| **`<sub>`** | Subscript text | Chemical formulas (e.g., `H<sub>2</sub>O`) |\n| **`<sup>`** | Superscript text | Mathematical exponents and footnotes (e.g., `E = mc<sup>2</sup>`) |",
    "syntax": "Formatting Tags Syntax:\n<b>Bold Text</b> or <strong>Strong Importance</strong>\n<i>Italic Text</i> or <em>Emphasized Text</em>\n<u>Underlined Text</u> or <ins>Inserted Text</ins>\n<s>Strikethrough</s> or <del>Deleted Text</del>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Text Formatting Demonstration</h2>\n  <p>This is <b>Bold</b> and this is <strong>Strongly Important</strong>.</p>\n  <p>This is <i>Italic</i> and this is <em>Emphasized</em>.</p>\n  <p>This is <u>Underlined</u> text.</p>\n  <p>Old Price: <s>₹500</s> <del>₹400</del> | New Price: <b>₹299</b></p>\n  <p>Water formula: H<sub>2</sub>O | Math: (a + b)<sup>2</sup></p>\n</body>\n</html>",
    "outputExplanation": "पुराने दाम पर बीच से कटी हुई रेखा दिखेगी, नए दाम पर मोटा टेक्स्ट दिखेगी, और सबस्क्रिप्ट/सुपरस्क्रिप्ट में 2 ऊपर और नीचे दिखेगा।",
    "realWorldAnalogy": "जैसे परीक्षा की कॉपी में आप नीले पेन के अलावा काले स्केच से हेडिंग मोटी करते हैं या पेंसिल से नीचे लाइन खींचते हैं, वैसे ही ये टैग्स काम करते हैं।",
    "importantPoints": [
      "<b> और <strong> दोनों दिखने में मोटे होते हैं, लेकिन <strong> सेमांटिक महत्व रखता है।",
      "<i> और <em> दोनों तिरछे होते हैं, लेकिन <em> वॉइस रीडर्स में जोर देकर पढ़ा जाता है।",
      "<del> का उपयोग ई-कॉमर्स में ऑफर वाली घटी हुई कीमतें दिखाने में बहुत होता है।"
    ],
    "commonMistakes": [
      "सामान्य टेक्स्ट में <u> का अत्यधिक प्रयोग करना (यूजर अंडरलाइन देखकर उसे हाइपरलिंक समझकर क्लिक करने लगता है)।"
    ],
    "examPerspective": "<b> बनाम <strong> और <i> बनाम <em> में सेमांटिक अंतर पर बहुविकल्पीय प्रश्न अक्सर पूछे जाते हैं।",
    "quickRevision": "Bold: <b> व <strong>; Italic: <i> व <em>; Underline: <u> व <ins>; Strikethrough: <s> व <del>.",
    "relatedTopics": [
      "paragraphs",
      "pre-tag",
      "div-tag"
    ],
    "practiceTask": "एक वाक्य लिखें: 'O-Level परीक्षा 100 अंकों की होती है जिसमें पास होना अनिवार्य है' और '100' को Bold व 'अनिवार्य' को Underline करें।"
  },
  {
    "id": "u3-t5",
    "slug": "div-tag",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Div Tag",
    "hindiTitle": "Div टैग (<div> Container)",
    "definitionEnglish": "The <div> (division) tag is a generic block-level container element in HTML used to group other elements together for styling purposes (with CSS) or dynamic manipulation (with JavaScript), having no inherent semantic meaning.",
    "definitionHindi": "<div> (डिवीजन) टैग HTML में एक सामान्य ब्लॉक-लेवल कंटेनर एलिमेंट है जिसका उपयोग CSS द्वारा स्टाइलिंग या जावास्क्रिप्ट द्वारा मैनिपुलेशन के लिए कई एलिमेंट्स को एक समूह में बांधने हेतु किया जाता है।",
    "simpleWords": "<div> एक खाली डिब्बा (Cardboard Box) है। इसमें आप हेडिंग, इमेज और पैराग्राफ को एक साथ रखकर उस पूरे डिब्बे को एक साथ रंग सकते हैं, बॉर्डर दे सकते हैं या एक जगह से दूसरी जगह खिसका सकते हैं।",
    "whyImportant": "CSS लेआउट, कार्ड डिजाइन, ग्रिड सिस्टम और वेबपेज को अलग-अलग सेक्शनों में बांटने के लिए <div> सबसे ज्यादा इस्तेमाल होने वाला टैग है।",
    "detailedExplanation": "### 1. The Role of the `<div>` (Division) Tag\nThe `<div>` element is the foundational generic block-level container in HTML. It possesses no inherent visual presentation or semantic meaning until styled with CSS or manipulated with JavaScript.\n\n### 2. Key Characteristics of Block-Level Elements\n1. **Full-Width Expansion:** Automatically expands to fill 100% of the available horizontal width of its parent container.\n2. **New Line Stacking:** Always begins on a new line and pushes subsequent elements onto the next line.\n3. **Box Model Compliance:** Fully respects `width`, `height`, `margin`, and `padding` properties in CSS.\n\n### 3. Best Practice: `<div>` vs. HTML5 Semantic Containers\n- Use `<div>` primarily for CSS layout wrappers (Flexbox/Grid containers) or generic grouping when no semantic tag (`<section>`, `<article>`, `<aside>`, `<nav>`) fits the context.",
    "syntax": "<div class=\"card-container\">\n  <h3>Card Title</h3>\n  <p>Card description text...</p>\n</div>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .my-box {\n      background-color: #f0fdf4;\n      border: 2px solid #16a34a;\n      border-radius: 8px;\n      padding: 16px;\n      margin: 10px 0;\n      max-width: 300px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"my-box\">\n    <h3 style=\"color:#16a34a; margin:0;\">Success Card</h3>\n    <p>This entire box is grouped inside a single div container.</p>\n  </div>\n</body>\n</html>",
    "outputExplanation": "<div> के कारण हेडिंग और पैराग्राफ दोनों एक हरे बॉर्डर वाले कार्ड के अंदर बंधे हुए सुंदर दिखते हैं।",
    "realWorldAnalogy": "जैसे आप बाजार से अलग-अलग सामान (साबुन, टूथपेस्ट, ब्रश) खरीदकर उन्हें एक थैले (Div) में रख लेते हैं ताकि सब एक साथ ले जाया जा सके।",
    "importantPoints": [
      "<div> ब्लॉक-लेवल एलिमेंट है।",
      "इसका कोई अंतर्निहित सेमांटिक अर्थ नहीं होता।",
      "इनलाइन ग्रुपिंग के लिए <span> और ब्लॉक ग्रुपिंग के लिए <div> का प्रयोग होता है।"
    ],
    "commonMistakes": [
      "'Div Soup' बनाना (यानी हर छोटी चीज के लिए अनावश्यक 5-5 नेस्टेड <div> बना देना, जिससे कोड भारी हो जाता है)।"
    ],
    "examPerspective": "<div> (Block) और <span> (Inline) के बीच अंतर पर O-Level परीक्षा में कई बार प्रश्न आ चुके हैं।",
    "quickRevision": "<div> एक ब्लॉक-लेवल जेनेरिक कंटेनर है जिसका उपयोग एलिमेंट्स को ग्रुप करके CSS व JS लागू करने के लिए होता है।",
    "relatedTopics": [
      "formatting-tags",
      "pre-tag",
      "css-selectors"
    ],
    "practiceTask": "एक <div> बनाएं जिसे नीला बैकग्राउंड और सफेद टेक्स्ट देकर एक 'Notice Box' का रूप दें।"
  },
  {
    "id": "u3-t6",
    "slug": "pre-tag",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Pre Tag",
    "hindiTitle": "Pre टैग (Preformatted Text)",
    "definitionEnglish": "The <pre> (preformatted text) tag in HTML is a block-level element that displays text in a fixed-width (monospace) font and preserves both whitespace (spaces, tabs) and line breaks exactly as typed in the source code.",
    "definitionHindi": "<pre> (प्रीफॉर्मेटेड टेक्स्ट) टैग HTML में एक ऐसा ब्लॉक-लेवल एलिमेंट है जो टेक्स्ट को मोनोस्पेस (समान चौड़ाई वाले) फॉन्ट में दिखाता है और सोर्स कोड में टाइप किए गए स्पेस, टैब और लाइन ब्रेक को ठीक वैसे ही सुरक्षित रखता है।",
    "simpleWords": "साधारण HTML में आप 10 स्पेस या 5 बार एंटर दबाएं, ब्राउज़र उसे केवल 1 स्पेस बना देता है। लेकिन <pre> टैग के अंदर आप जैसा लिखेंगे (शायरी, ASCII आर्ट, या प्रोग्रामिंग कोड), ब्राउज़र उसे हूबहू बिना बदले स्क्रीन पर दिखा देगा।",
    "whyImportant": "कंप्यूटर कोड स्निपेट्स, ASCII आरेख, गणितीय मैट्रिक्स, और कविताओं को सही स्वरूप में दिखाने के लिए <pre> टैग अनिवार्य है।",
    "detailedExplanation": "### 1. The Preformatted Text (`<pre>`) Element\nBy default, web browsers collapse multiple consecutive spaces, tabs, and newline characters into a single space (Whitespace Normalization). The `<pre>` tag instructs browsers to preserve all whitespace and line breaks exactly as typed in the source code.\n\n### 2. Common Use Cases\n1. **Displaying Source Code:** Paired with the `<code>` tag (`<pre><code>...</code></pre>`) to present programming snippets.\n2. **ASCII Art & Mathematical Proofs:** Preserving column alignments and diagrams created with text characters.\n3. **Poetry & Formatted Text:** Retaining strict line breaks and indentations without manually inserting multiple `<br>` tags.",
    "syntax": "<pre>\nLine 1\n  Indented Line 2\nLine 3\n</pre>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h3>Comparison: Paragraph vs Pre Tag</h3>\n  \n  <p>\n    Notice how      multiple spaces\n    and enters are ignored by standard p tag.\n  </p>\n\n  <pre style=\"background:#f8fafc; border:1px solid #cbd5e1; padding:10px;\">\n    Notice how      multiple spaces\n    and enters are PRESERVED exactly\n    inside the pre tag!\n       *\n      ***\n     *****\n  </pre>\n</body>\n</html>",
    "outputExplanation": "<p> वाला टेक्स्ट एक सीधी लाइन में सिमट जाएगा, जबकि <pre> वाला टेक्स्ट तारों (*) के पिरामिड और सभी स्पेस को हूबहू दिखाएगा।",
    "realWorldAnalogy": "जैसे पुराने टाइपराइटर पर आप जितनी बार स्पेसबार और कैरिज रिटर्न (Enter) दबाते थे, कागज पर अक्षर बिल्कुल उसी जगह छपते थे, <pre> टैग ठीक वही टाइपराइटर अनुभव देता है।",
    "importantPoints": [
      "<pre> टैग व्हाइटस्पेस और न्यूलाइन्स दोनों को सुरक्षित रखता है।",
      "डिफ़ॉल्ट फॉन्ट हमेशा Monospace होता है।",
      "कोड दर्शाने के लिए अक्सर <pre><code>...</code></pre> का संयोजन उपयोग किया जाता है।"
    ],
    "commonMistakes": [
      "<pre> टैग के अंदर HTML टैग्स (जैसे `<b>`) लिखने पर यह सोचना कि वे नहीं चलेंगे (HTML टैग्स <pre> के अंदर भी प्रोसेस होते हैं; अक्षरों को दिखाने के लिए `&lt;` और `&gt;` लिखना पड़ता है)।"
    ],
    "examPerspective": "प्रश्न: 'HTML में बिना <br> के लाइन ब्रेक और कई स्पेसेस को सुरक्षित रखने वाला टैग कौन सा है?' (उत्तर: <pre> टैग).",
    "quickRevision": "<pre> टैग मोनोस्पेस फॉन्ट में स्पेस और लाइन ब्रेक्स को जस-का-तस प्रदर्शित करता है।",
    "relatedTopics": [
      "formatting-tags",
      "paragraphs",
      "div-tag"
    ],
    "practiceTask": "<pre> टैग का उपयोग करके अपने नाम के पहले अक्षर का एक ASCII आर्ट बनाएं।"
  },
  {
    "id": "u3-t7",
    "slug": "anchor-links-and-named-anchors",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Anchor Links and Named Anchors",
    "hindiTitle": "एंकर लिंक्स और नेम्ड एंकर्स (Anchor Tag & Bookmarks)",
    "definitionEnglish": "The anchor tag (<a>) in HTML creates hyperlinks that connect one webpage to another, to external websites, to email addresses/files, or to specific locations within the same page using Named Anchors / Bookmark Links (href=\"#id\").",
    "definitionHindi": "HTML में एंकर टैग (<a>) हाइपरलिंक्स बनाता है जो एक वेबपेज को दूसरे वेबपेज से, बाहरी वेबसाइटों से, ईमेल/फाइलों से, या नेम्ड एंकर्स (href=\"#id\") का उपयोग करके उसी पेज के किसी विशिष्ट भाग से जोड़ता है।",
    "simpleWords": "एंकर टैग वह जादुई पुल है जिस पर क्लिक करते ही यूजर किसी दूसरे पेज पर या उसी लंबे पेज में नीचे किसी हेडिंग पर सीधे पहुंच जाता है।",
    "whyImportant": "हाइपरलिंक्स के बिना वर्ल्ड वाइड वेब केवल बिखरे हुए पन्नों का ढेर होता। एंकर टैग ही पूरे इंटरनेट को आपस में जोड़ता है।",
    "detailedExplanation": "### 1. Types of Hyperlinks in HTML\nThe anchor (`<a>`) element creates clickable hyperlinks using the mandatory `href` (Hypertext Reference) attribute:\n\n1. **Absolute URL:** Full protocol and domain pointing to external websites (e.g., `href=\"https://nielit.gov.in\"`).\n2. **Relative URL:** Path pointing to internal files within the same website project (e.g., `href=\"contact.html\"`, `href=\"../about.html\"`).\n3. **Named Anchor / Internal Bookmark:** Jumps directly to a specific section on the same page using element IDs (e.g., `href=\"#chapter-3\"`).\n4. **Email Protocol Link:** Launches the user's default email client (e.g., `href=\"mailto:support@example.com\"`).\n5. **Telephone Link:** Prompts direct calling on mobile devices (e.g., `href=\"tel:+919876543210\"`).\n\n### 2. Key Target Attributes\n- **`target=\"_self\"`:** Default behavior; opens linked document in the current browser window/tab.\n- **`target=\"_blank\"`:** Opens linked document in a new window/tab (always pair with `rel=\"noopener noreferrer\"` for security).",
    "syntax": "<a href=\"URL\" target=\"_blank\" title=\"Tooltip\">Link Text</a>\n<a href=\"#section-id\">In-page Bookmark Link</a>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Table of Contents</h2>\n  <ul>\n    <li><a href=\"#html\">Jump to HTML Section</a></li>\n    <li><a href=\"#css\">Jump to CSS Section</a></li>\n    <li><a href=\"https://nielit.gov.in\" target=\"_blank\">Open NIELIT (New Tab)</a></li>\n  </ul>\n\n  <div style=\"height: 400px; background: #f1f5f9; padding: 10px;\">\n    <p>Scroll down to see bookmarks in action...</p>\n  </div>\n\n  <h3 id=\"html\">HTML Section</h3>\n  <p>Details about HTML basics...</p>\n\n  <h3 id=\"css\">CSS Section</h3>\n  <p>Details about Cascading Style Sheets...</p>\n  \n  <a href=\"#\">Back to Top</a>\n</body>\n</html>",
    "outputExplanation": "'Jump to HTML Section' पर क्लिक करते ही पेज अपने आप स्क्रॉल होकर सीधे `<h3 id=\"html\">` पर पहुंच जाता है।",
    "realWorldAnalogy": "किताब के पहले पन्ने की विषय-सूची (Index) पर लिखा 'अध्याय 5 -> पृष्ठ 80' नेम्ड एंकर जैसा है; आप सीधे पन्ना पलटकर वहां पहुंच जाते हैं।",
    "importantPoints": [
      "एंकर टैग <a> इनलाइन एलिमेंट है।",
      "href का अर्थ Hypertext Reference है।",
      "नए टैब में खोलने के लिए target=\"_blank\" का उपयोग होता है।",
      "इन-पेज लिंक के लिए हैश (#) सिंबल का उपयोग किया जाता है।"
    ],
    "commonMistakes": [
      "`target=\"blank\"` लिख देना (आगे अंडरस्कोर `_` लगाना आवश्यक है: `target=\"_blank\"`)।",
      "नेम्ड एंकर में हैश लगाना भूल जाना (`href=\"sec1\"` लिखने पर ब्राउज़र उसे नई फाइल समझ लेता है, सही रूप `href=\"#sec1\"` है)।"
    ],
    "examPerspective": "target=\"_blank\" का कार्य, href का फुल फॉर्म, और नेम्ड एंकर सिंटैक्स पर परीक्षा में प्रश्न जरूर आते हैं।",
    "quickRevision": "<a> टैग लिंक बनाता है। href गंतव्य बताता है, target=\"_blank\" नए टैब में खोलता है, और #id इन-पेज बुकमार्क लिंक करता है।",
    "relatedTopics": [
      "image-tag",
      "formatting-tags",
      "paragraphs"
    ],
    "practiceTask": "एक लंबा वेबपेज बनाएं जिसमें ऊपर 'Go to Bottom' का लिंक हो और सबसे नीचे 'Back to Top' का लिंक हो।"
  },
  {
    "id": "u3-t8",
    "slug": "image-tag",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Image Tag",
    "hindiTitle": "इमेज टैग (<img> Tag & Attributes)",
    "definitionEnglish": "The <img> tag is an empty (void) inline element in HTML used to embed raster or vector graphics into a webpage, requiring the 'src' attribute for image location and 'alt' for descriptive alternative text.",
    "definitionHindi": "<img> टैग HTML में एक एम्प्टी (शून्य/सेल्फ-क्लोजिंग) इनलाइन एलिमेंट है जिसका उपयोग वेबपेज में चित्र (ग्राफिक्स) अंतर्निहित करने के लिए किया जाता है; इसके लिए 'src' (स्थान) और 'alt' (वैकल्पिक टेक्स्ट) अनिवार्य विशेषताएं हैं।",
    "simpleWords": "यह वेबपेज में फोटो लगाने वाला टैग है। इसमें कोई क्लोजिंग टैग नहीं होता। आपको केवल फोटो का पता (src) और अगर फोटो न खुले तो क्या लिखा दिखे (alt) बताना होता है।",
    "whyImportant": "बिना चित्रों के कोई भी आधुनिक वेबसाइट आकर्षक नहीं हो सकती। इमेज का सही उपयोग वेबपेज के सौंदर्य और यूजर एंगेजमेंट को 10 गुना बढ़ा देता है।",
    "detailedExplanation": "### 1. The `<img>` Element and Mandatory Attributes\nThe `<img>` tag is a void (self-closing) inline element used to embed raster and vector images into web pages.\n\n### 2. Essential Attributes\n1. **`src` (Source):** Specifies the absolute or relative path to the image file.\n2. **`alt` (Alternative Text):** Provides text descriptions for visually impaired users using screen readers and displays when the image fails to load.\n3. **`width` and `height`:** Defines intrinsic aspect ratios to prevent Cumulative Layout Shift (CLS) during page loading.\n4. **`loading=\"lazy\"`:** Defers image loading until the user scrolls near the viewport, improving initial page load speed.\n\n### 3. Comparison of Web Image Formats\n- **WebP / AVIF:** Next-generation modern web formats with superior compression and transparency.\n- **JPEG / JPG:** Ideal for complex photographs with millions of colors; lossy compression.\n- **PNG:** Lossless compression supporting alpha transparency; ideal for UI badges, logos, and screenshots.\n- **SVG:** XML-based scalable vector graphics; infinite scaling with zero quality loss.",
    "syntax": "<img src=\"path/to/image.jpg\" alt=\"Description of image\" width=\"300\" height=\"200\" loading=\"lazy\">",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Embedding Images in HTML</h2>\n  <!-- Clickable Image (Image inside Anchor Tag) -->\n  <a href=\"https://nielit.gov.in\" target=\"_blank\">\n    <img src=\"https://via.placeholder.com/250x100/0284c7/ffffff?text=NIELIT+Logo\" \n         alt=\"NIELIT Official Logo\" \n         width=\"250\" \n         height=\"100\"\n         title=\"Click to visit official NIELIT portal\">\n  </a>\n  <p><i>Note: The image above also acts as a clickable hyperlink!</i></p>\n</body>\n</html>",
    "outputExplanation": "स्क्रीन पर 250x100 साइज का नीला लोगो दिखेगा, और उस पर हाथ का कर्सर आएगा जिस पर क्लिक करने से NIELIT की साइट खुल जाएगी।",
    "realWorldAnalogy": "अखबार में छपी फोटो और उसके नीचे लिखा एक लाइन का फोटो कैप्शन (alt) जैसा संबंध यहाँ <img> और उसके alt एट्रिब्यूट में होता है।",
    "importantPoints": [
      "<img> एक Void / Empty Tag है (इसका कोई </img> क्लोजिंग टैग नहीं होता)।",
      "alt एट्रिब्यूट वेब एक्सेसिबिलिटी (WAI) और SEO के लिए अनिवार्य माना जाता है।",
      "इमेज को <a> टैग के अंदर रखकर क्लिक करने योग्य (Clickable Image) बनाया जा सकता है।"
    ],
    "commonMistakes": [
      "alt एट्रिब्यूट खाली छोड़ देना या न लिखना।",
      "width और height को अलग-अलग अनुपात में डालकर फोटो का चेहरा बिगाड़ (Distort) देना (इसके लिए CSS में `object-fit: cover` या केवल width देना चाहिए)।"
    ],
    "examPerspective": "प्रश्न: '<img> टैग में कौन सा एट्रिब्यूट इमेज लोड न होने पर टेक्स्ट दिखाता है?' (alt), 'क्या <img> टैग का क्लोजिंग टैग होता है?' (नहीं, यह एम्प्टी टैग है).",
    "quickRevision": "<img> एक एम्प्टी टैग है। src इमेज का पाथ बताता है और alt वैकल्पिक वर्णनात्मक टेक्स्ट देता है।",
    "relatedTopics": [
      "anchor-links-and-named-anchors",
      "css-image-gallery",
      "w3-css-images"
    ],
    "practiceTask": "एक इमेज जोड़ें, उसका src गलत लिख दें और देखें कि स्क्रीन पर alt टेक्स्ट कैसे प्रदर्शित होता है।"
  },
  {
    "id": "u3-t9",
    "slug": "paragraphs",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Paragraphs and Line Breaks",
    "hindiTitle": "पैराग्राफ और लाइन ब्रेक्स (<p>, <br>, <hr>)",
    "definitionEnglish": "HTML uses the <p> block-level tag to structure body text into distinct paragraphs with automatic top and bottom margins, complemented by the void <br> tag for line breaks and <hr> for thematic horizontal rules.",
    "definitionHindi": "HTML में बॉडी टेक्स्ट को पैराग्राफ में व्यवस्थित करने के लिए ब्लॉक-लेवल <p> टैग का उपयोग होता है जो स्वतः ऊपर-नीचे मार्जिन देता है; इसके साथ लाइन बदलने के लिए एम्प्टी <br> टैग और क्षैतिज रेखा खींचने के लिए <hr> टैग का प्रयोग होता है।",
    "simpleWords": "<p> टैग आपके टेक्स्ट को एक अलग पैराग्राफ बनाता है। अगर आपको बिना पैराग्राफ बदले केवल अगली लाइन पर जाना हो तो <br> लगाएं, और बीच में एक विभाजक रेखा खींचनी हो तो <hr> लगाएं।",
    "whyImportant": "किसी भी लेख या ब्लॉग को साफ, पठनीय और सुव्यवस्थित बनाने के लिए पैराग्राफ और ब्रेक सबसे बुनियादी जरूरत हैं।",
    "detailedExplanation": "### 1. Paragraphs (`<p>`) vs. Line Breaks (`<br>`) vs. Thematic Breaks (`<hr>`)\n- **`<p>` (Paragraph):** Block-level container separating blocks of prose text, automatically appending vertical margin/spacing above and below.\n- **`<br>` (Break):** Void element that creates a manual line break within a paragraph or address block without initiating a new semantic paragraph.\n- **`<hr>` (Horizontal Rule):** Represents a thematic break or transition of topic between paragraphs, visually rendered as a horizontal divider.",
    "syntax": "<p>First paragraph text...</p>\n<hr>\n<p>Line 1<br>Line 2<br>Line 3</p>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Address Demonstration using Paragraph and Break</h2>\n  <p>\n    <b>NIELIT Bhawan</b><br>\n    Plot No. 3, PSP Pocket, Sector-8,<br>\n    Dwarka, New Delhi - 110077\n  </p>\n  <hr>\n  <p>This is a new section separated by a horizontal rule.</p>\n</body>\n</html>",
    "outputExplanation": "पता 3 अलग-अलग लाइनों में पास-पास दिखेगा, बीच में एक पतली स्लेटी रेखा दिखेगी, और नीचे नया पैराग्राफ दिखेगा।",
    "realWorldAnalogy": "जैसे किताब में नया पैराग्राफ शुरू होने पर थोड़ा गैप होता है, लेकिन पते में हर लाइन के नीचे गैप नहीं होता, ठीक वही काम <p> और <br> करते हैं।",
    "importantPoints": [
      "<p> ब्लॉक-लेवल है, जबकि <br> और <hr> दोनों Empty / Void Tags हैं।",
      "<hr> को CSS द्वारा रंग, मोटाई और बॉर्डर स्टाइल दिया जा सकता है।"
    ],
    "commonMistakes": [
      "मार्जिन बढ़ाने के लिए लगातार 5 बार `<br><br><br><br>` लगाना (यह गलत आदत है; स्पेसिंग के लिए CSS मार्जिन का उपयोग करें)।"
    ],
    "examPerspective": "प्रश्न: 'HTML में Line Break देने वाला टैग कौन सा है?' (<br>), 'Horizontal Rule का टैग क्या है?' (<hr>).",
    "quickRevision": "<p> पैराग्राफ बनाता है, <br> लाइन ब्रेक देता है, और <hr> क्षैतिज विभाजक रेखा खींचता है।",
    "relatedTopics": [
      "formatting-tags",
      "pre-tag",
      "basic-structure-of-html"
    ],
    "practiceTask": "एक 4 लाइनों की कविता लिखें जिसमें हर लाइन के बाद `<br>` हो और कविता के बाद `<hr>` लगा हो।"
  },
  {
    "id": "u3-t10",
    "slug": "comments",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Comments in HTML",
    "hindiTitle": "HTML में कमेंट्स (Comments Syntax & Purpose)",
    "definitionEnglish": "HTML comments are non-executable explanatory notes written inside the source code using the <!-- comment --> syntax, ignored by the web browser rendering engine and used by developers for code documentation, organization, and temporary debugging.",
    "definitionHindi": "HTML कमेंट्स सोर्स कोड के अंदर <!-- कमेंट --> सिंटैक्स द्वारा लिखे जाने वाले गैर-निष्पादन योग्य व्याख्यात्मक नोट्स होते हैं, जिन्हें वेब ब्राउज़र स्क्रीन पर प्रदर्शित नहीं करता और जिनका उपयोग डेवलपर कोड को समझाने और डिबगिंग के लिए करते हैं।",
    "simpleWords": "कमेंट्स डेवलपर की अपनी निजी डायरी के नोट्स जैसे हैं। आप कोड में लिख सकते हैं कि 'यह सेक्शन मैंने बनाया है' या 'यह बटन लॉगिन का है', और यूजर को यह स्क्रीन पर बिल्कुल नहीं दिखेगा।",
    "whyImportant": "बड़ी वेबसाइटों में जब 10 डेवलपर्स एक साथ काम करते हैं, तो कमेंट्स ही बताते हैं कि कौन सा कोड किस उद्देश्य से लिखा गया है।",
    "detailedExplanation": "### 1. Syntax and Purpose of HTML Comments\nHTML comments are written using the syntax:\n```html\n<!-- This is an HTML comment that is ignored by web browsers -->\n```\n\n### 2. Critical Best Practices\n1. **Documentation:** Explain complex layout sections, template blocks, or team author information.\n2. **Debugging:** Temporarily deactivate sections of code without deleting them.\n3. **Security Caution:** Never place passwords, sensitive database connection strings, or private API keys inside HTML comments, as anyone can view them using browser \"View Source\" (`Ctrl + U`).",
    "syntax": "<!-- Single Line Comment -->\n<!--\n  Multi-Line Comment\n  Can span across multiple lines\n-->",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <!-- Navigation bar starts here -->\n  <nav>\n    <a href=\"#\">Home</a>\n  </nav>\n  <!-- Navigation bar ends -->\n\n  <h1>Visible Content</h1>\n\n  <!-- <button>Temporarily Hidden Feature</button> -->\n  <p>The button above is commented out and will not be displayed!</p>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र में केवल 'Home', हेडिंग और पैराग्राफ दिखेगा। बटन और कमेंट्स स्क्रीन पर अदृश्य रहेंगे।",
    "realWorldAnalogy": "जैसे नाटक की स्क्रिप्ट में ब्रैकेट में लिखा होता है '(धीमी आवाज में बोले)', जो दर्शक को सुनाने के लिए नहीं बल्कि अभिनेता को समझाने के लिए होता है।",
    "importantPoints": [
      "HTML कमेंट्स ब्राउज़र स्क्रीन पर नहीं दिखते लेकिन 'View Source' दबाकर कोई भी उन्हें पढ़ सकता है।",
      "कमेंट में कभी भी पासवर्ड या गोपनीय डेटा न लिखें।",
      "कमेंट्स को आपस में नेस्ट (एक कमेंट के अंदर दूसरा कमेंट) नहीं किया जा सकता।"
    ],
    "commonMistakes": [
      "HTML में `//` या `/* */` से कमेंट लगाने की कोशिश करना (यह CSS और JS में चलता है, HTML में नहीं)।",
      "एक्सक्लेमेशन मार्क भूल जाना (`<-- comment -->` अमान्य है, सही `<!-- comment -->` है)।"
    ],
    "examPerspective": "HTML, CSS और JavaScript में कमेंट्स के सिंटैक्स पर तुलनात्मक प्रश्न हर साल पूछे जाते हैं।",
    "quickRevision": "HTML कमेंट्स का सिंटैक्स <!-- comment --> होता है। यह ब्राउज़र द्वारा रेंडर नहीं होते।",
    "relatedTopics": [
      "basic-structure-of-html",
      "html-introduction"
    ],
    "practiceTask": "एक पेज में 3 कमेंट्स जोड़ें और ब्राउज़र में 'Right Click -> View Page Source' करके देखें कि वे सोर्स में कैसे दिखते हैं।"
  },
  {
    "id": "u3-t11",
    "slug": "tables-and-attributes",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Tables: Attributes (Border, Cellpadding, Cellspacing, height, width, TR, TH, TD, Rowspan, Colspan)",
    "hindiTitle": "टेबल्स एवं विशेषताएं (Tables, TR, TH, TD, Rowspan, Colspan)",
    "definitionEnglish": "HTML tables are structured two-dimensional grids composed of rows (<tr>), header cells (<th>), and data cells (<td>), configured with attributes such as border, width, height, cellpadding (internal cell padding), cellspacing (gap between cells), rowspan (merging rows vertically), and colspan (merging columns horizontally).",
    "definitionHindi": "HTML टेबल्स पंक्तियों (<tr>), हेडर सेल्स (<th>) और डेटा सेल्स (<td>) से बनी द्वि-आयामी ग्रिड होती हैं, जिनमें बॉर्डर, चौड़ाई, ऊंचाई, cellpadding (सेल सामग्री और बॉर्डर के बीच दूरी), cellspacing (दो सेल्स के बीच दूरी), rowspan (पंक्तियों को मिलाना) और colspan (कॉलम्स को मिलाना) जैसी विशेषताएं होती हैं।",
    "simpleWords": "टेबल पंक्तियों (हॉरिजॉन्टल लाइन) और स्तंभों (वर्टिकल कॉलम) का एक ग्रिड है जिसमें डेटा साफ-सुथरे खानों में भरा जाता है। दो खानों को आजू-बाजू मिलाने के लिए colspan और ऊपर-नीचे मिलाने के लिए rowspan का उपयोग होता है।",
    "whyImportant": "परीक्षा परिणाम, समय-सारिणी (Time-Table), मूल्य-सूची, और डेटा तुलना दर्शाने के लिए टेबल सबसे महत्वपूर्ण HTML अवयव है। O-Level प्रैक्टिकल में टेबल पर प्रश्न 100% आता है।",
    "detailedExplanation": "### 1. Architecture of HTML Tables\nHTML tables organize two-dimensional tabular data into rows and columns:\n- **`<table>`:** Root wrapper for the table.\n- **`<tr>` (Table Row):** Defines a single horizontal row of cells.\n- **`<th>` (Table Header):** Defines header cells with bold, centered text and `scope=\"col\"` or `scope=\"row\"` attributes.\n- **`<td>` (Table Data):** Defines standard individual data cells.\n\n### 2. Spanning Attributes (Crucial for NIELIT Exams)\n1. **`colspan=\"n\"`:** Merges a cell horizontally across `n` adjacent columns.\n2. **`rowspan=\"n\"`:** Merges a cell vertically across `n` stacked rows.\n\n### 3. Semantic Table Sections\n- **`<thead>`:** Groups header rows.\n- **`<tbody>`:** Groups primary data rows.\n- **`<tfoot>`:** Groups summary, totals, or footnote rows.\n- **`<caption>`:** Provides an accessible title placed directly above the table.",
    "syntax": "<table border=\"1\" cellpadding=\"8\" cellspacing=\"0\" width=\"100%\">\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Student Marksheet Table</title>\n</head>\n<body>\n  <h2>NIELIT O-Level Student Result</h2>\n  <table border=\"1\" cellpadding=\"10\" cellspacing=\"0\" width=\"80%\">\n    <tr style=\"background:#0284c7; color:white;\">\n      <th>Roll No</th>\n      <th>Student Name</th>\n      <th colspan=\"2\">Module Marks</th>\n    </tr>\n    <tr style=\"background:#f8fafc;\">\n      <td rowspan=\"2\">101</td>\n      <td rowspan=\"2\">Amit Kumar</td>\n      <td>M1-R5.1 (IT Tools)</td>\n      <td>85</td>\n    </tr>\n    <tr style=\"background:#f8fafc;\">\n      <td>M2-R5.1 (Web Design)</td>\n      <td>92</td>\n    </tr>\n  </table>\n</body>\n</html>",
    "outputExplanation": "अमित कुमार का नाम और रोल नंबर rowspan='2' के कारण दोनों मॉड्यूल्स के सामने एक बड़े दोहरे खाने में लंबवत रूप से मर्ज होकर दिखेगा।",
    "realWorldAnalogy": "जैसे एक्सेल (Excel) शीट में आप दो सेल्स को चुनकर 'Merge & Center' करते हैं, HTML टेबल में ठीक वही काम colspan और rowspan करते हैं।",
    "importantPoints": [
      "<th> डिफ़ॉल्ट रूप से Bold और Center Aligned होता है।",
      "<td> डिफ़ॉल्ट रूप से Normal और Left Aligned होता है।",
      "colspan कॉलम्स को जोड़ता है; rowspan पंक्तियों को जोड़ता है।",
      "cellpadding आंतरिक पैडिंग है, cellspacing बाहरी गैप है।"
    ],
    "commonMistakes": [
      "colspan देने के बाद अगली पंक्ति में अतिरिक्त <td> छोड़ देना जिससे टेबल का कोना बाहर निकल जाए।",
      "rowspan और colspan के कार्य को आपस में उलझा देना।"
    ],
    "examPerspective": "Rowspan, Colspan, Cellpadding, Cellspacing, और <th> vs <td> के डिफ़ॉल्ट संरेखण पर हर साल 10 से 15 नंबर के प्रश्न आते हैं।",
    "quickRevision": "<table> पंक्तियों (<tr>), हेडर्स (<th>) और सेल्स (<td>) से बनती है। rowspan पंक्तियां मिलाता है, colspan कॉलम्स मिलाता है।",
    "relatedTopics": [
      "lists",
      "forms-and-elements",
      "css-tables",
      "w3-css-tables-and-list"
    ],
    "practiceTask": "एक 4 कॉलम और 5 पंक्तियों वाली समय-सारणी (Time-Table) बनाएं जिसमें लंच ब्रेक को `rowspan=\"5\"` से मर्ज किया गया हो।"
  },
  {
    "id": "u3-t12",
    "slug": "lists",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Lists: Ordered List, Unordered List, Definition List",
    "hindiTitle": "लिस्ट्स: ऑर्डर्ड (<ol>), अनऑर्डर्ड (<ul>), डेफिनिशन (<dl>)",
    "definitionEnglish": "HTML lists group related items together, categorized into Ordered Lists (<ol> with numbered/alphabetical markers), Unordered Lists (<ul> with bullet markers), and Definition Lists (<dl> pairing definition terms <dt> with descriptions <dd>).",
    "definitionHindi": "HTML लिस्ट्स संबंधित मदों को एक समूह में व्यवस्थित करती हैं; यह तीन प्रकार की होती हैं: ऑर्डर्ड लिस्ट (<ol> नंबर या अक्षरों के साथ), अनऑर्डर्ड लिस्ट (<ul> बुलेट्स के साथ), और डेफिनिशन लिस्ट (<dl> जो शब्दावली <dt> और विवरण <dd> का जोड़ा बनाती है)।",
    "simpleWords": "यदि आपको 1, 2, 3 नंबरों वाली क्रमबद्ध सूची बनानी हो तो <ol> का उपयोग करें; यदि केवल गोल बुलेट बिंदु चाहिए तो <ul> का उपयोग करें; और यदि डिक्शनरी की तरह शब्द और उसकी परिभाषा लिखनी हो तो <dl> का उपयोग करें।",
    "whyImportant": "वेबसाइट के सभी नेविगेशन मेन्यू, साइडबार लिंक्स और स्टेप-बाय-स्टेप ट्यूटोरियल लिस्ट्स द्वारा ही बनाए जाते हैं।",
    "detailedExplanation": "### 1. The Three Types of HTML Lists\n1. **Unordered List (`<ul>`):** Bulleted collection of items where sequence is arbitrary. Default marker is a disc.\n2. **Ordered List (`<ol>`):** Numbered sequence of items where order is meaningful.\n   - `type=\"1\"` (Numbers 1, 2, 3), `type=\"A\"` (Uppercase letters), `type=\"a\"` (Lowercase), `type=\"I\"` (Roman numerals).\n   - `start=\"5\"` (Begins numbering at 5), `reversed` (Counts down).\n3. **Description / Definition List (`<dl>`):** Pairs of terms and descriptions.\n   - **`<dt>`:** Description Term (the word or concept).\n   - **`<dd>`:** Description Details (the explanation or definition).",
    "syntax": "<!-- Ordered List -->\n<ol type=\"A\" start=\"3\">\n  <li>Item C</li>\n</ol>\n\n<!-- Unordered List -->\n<ul type=\"square\">\n  <li>Bullet Item</li>\n</ul>\n\n<!-- Definition List -->\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h3>Web Development Curriculum</h3>\n  \n  <h4>Step-by-Step Learning (Ordered):</h4>\n  <ol type=\"I\">\n    <li>HTML5 Foundations</li>\n    <li>CSS3 Styling</li>\n    <li>JavaScript Interactivity</li>\n  </ol>\n\n  <h4>Frontend Tools (Unordered):</h4>\n  <ul type=\"circle\">\n    <li>Notepad++</li>\n    <li>Sublime Text</li>\n    <li>Google Chrome DevTools</li>\n  </ul>\n\n  <h4>Key Terms (Definition List):</h4>\n  <dl>\n    <dt><b>HTTP</b></dt>\n    <dd>HyperText Transfer Protocol for transmitting web pages.</dd>\n    <dt><b>DNS</b></dt>\n    <dd>Domain Name System that translates domain names to IP addresses.</dd>\n  </dl>\n</body>\n</html>",
    "outputExplanation": "पहले सेक्शन में रोमन अंक I, II, III दिखेंगे, दूसरे में गोल खोखले बिंदु दिखेंगे, और तीसरे में टर्म के नीचे थोड़ा हटकर विवरण दिखेगा।",
    "realWorldAnalogy": "रेसिपी बनाने के चरण (Step 1, Step 2) ऑर्डर्ड लिस्ट हैं; बाजार से लाने वाले सामान की पर्ची अनऑर्डर्ड लिस्ट है; और शब्दकोश (डिक्शनरी) डेफिनिशन लिस्ट है।",
    "importantPoints": [
      "<ol> और <ul> के अंदर केवल <li> टैग ही आ सकता है।",
      "<dl> के अंदर <dt> (Term) और <dd> (Description) का जोड़ा होता है।",
      "वेब नेविगेशन बार हमेशा <ul style=\"list-style:none;\"> से बनाई जाती है।"
    ],
    "commonMistakes": [
      "<dl> के अंदर <li> टैग लगाने की कोशिश करना (यह अमान्य है, <dl> में केवल <dt> और <dd> होते हैं)।"
    ],
    "examPerspective": "<ol> के प्रकार (1, A, a, I, i), <dl> के घटक (<dt>, <dd>), और start एट्रिब्यूट पर प्रश्न पूछे जाते हैं।",
    "quickRevision": "क्रमबद्ध सूची: <ol>, बुलेट सूची: <ul>, डिक्शनरी सूची: <dl> (<dt> और <dd>).",
    "relatedTopics": [
      "tables-and-attributes",
      "css-lists",
      "css-menu-design"
    ],
    "practiceTask": "एक नेस्टेड लिस्ट बनाएं जिसमें 3 राज्यों के नाम हों और प्रत्येक राज्य के अंदर 2-2 जिलों की बुलेट लिस्ट हो।"
  },
  {
    "id": "u3-t13",
    "slug": "forms-and-elements",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Forms and Form Elements",
    "hindiTitle": "फॉर्म्स और फॉर्म एलिमेंट्स (<form>, Elements & Methods)",
    "definitionEnglish": "An HTML form (<form>) is an interactive container that collects user input and transmits it to a web server for processing, defined with crucial attributes like 'action' (destination backend URL) and 'method' (HTTP GET or POST).",
    "definitionHindi": "HTML फॉर्म (<form>) एक ऐसा इंटरएक्टिव कंटेनर है जो यूजर से इनपुट डेटा एकत्र करता है और प्रोसेसिंग के लिए उसे वेब सर्वर पर भेजता है; इसके मुख्य एट्रिब्यूट्स 'action' (सर्वर URL) और 'method' (GET या POST) हैं।",
    "simpleWords": "जब आप किसी वेबसाइट पर लॉगिन करते हैं, परीक्षा फॉर्म भरते हैं या गूगल पर सर्च करते हैं, तो वह चौकोर डिब्बा जिसमें आप लिखते हैं और 'Submit' दबाते हैं, वही HTML फॉर्म है।",
    "whyImportant": "यूजर से डेटा (लॉगिन, साइनअप, पेमेंट, फीडबैक) लेने का वेब पर केवल एक ही माध्यम है: HTML फॉर्म्स।",
    "detailedExplanation": "### 1. HTML Form Architecture\nThe `<form>` tag acts as a container for collecting user inputs and transmitting them to a web server for processing.\n\n### 2. Key Attributes of the `<form>` Tag\n- **`action=\"URL\"`:** Specifies the backend server endpoint or script that receives the submitted form data.\n- **`method=\"GET|POST\"`:**\n  - **`GET`:** Appends form data directly to the URL query string (`?name=value`). Used for non-sensitive data like search queries. Visible in browser history.\n  - **`POST`:** Transmits form data securely within the HTTP request body. Used for passwords, file uploads, and database modifications.\n- **`enctype=\"multipart/form-data\"`:** Mandatory attribute when submitting file uploads (`<input type=\"file\">`).",
    "syntax": "<form action=\"process.php\" method=\"POST\">\n  <fieldset>\n    <legend>User Credentials</legend>\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" id=\"username\" name=\"user\">\n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Student Login Portal</h2>\n  <form action=\"login.php\" method=\"POST\">\n    <fieldset style=\"max-width: 320px; border-radius: 6px;\">\n      <legend><b>Secure Login</b></legend>\n      <p>\n        <label for=\"uid\">Registration No:</label><br>\n        <input type=\"text\" id=\"uid\" name=\"reg_no\" required>\n      </p>\n      <p>\n        <label for=\"pwd\">Password:</label><br>\n        <input type=\"password\" id=\"pwd\" name=\"password\" required>\n      </p>\n      <input type=\"submit\" value=\"Sign In\">\n      <input type=\"reset\" value=\"Clear\">\n    </fieldset>\n  </form>\n</body>\n</html>",
    "outputExplanation": "स्क्रीन पर एक सुंदर बॉर्डर वाला बॉक्स दिखेगा जिसमें रजिस्ट्रेशन नंबर और मास्क्ड पासवर्ड इनपुट होगा। सबमिट दबाने पर डेटा सुरक्षित POST मेथड से भेजा जाएगा।",
    "realWorldAnalogy": "GET मेथड खुली पोस्टकार्ड जैसा है जिसे रास्ते में कोई भी पढ़ सकता है; POST मेथड सीलबंद लिफाफे जैसा है जो केवल पाने वाले को ही दिखता है।",
    "importantPoints": [
      "संवेदनशील डेटा (पासवर्ड, कार्ड) के लिए हमेशा method=\"POST\" का प्रयोग करें।",
      "सर्च क्वेरीज के लिए method=\"GET\" का प्रयोग करें।",
      "<fieldset> और <legend> फॉर्म को पेशेवर रूप देते हैं।",
      "सर्वर पर डेटा प्राप्त करने के लिए प्रत्येक इनपुट में 'name' एट्रिब्यूट होना अनिवार्य है।"
    ],
    "commonMistakes": [
      "इनपुट में `name` एट्रिब्यूट भूल जाना (इसके बिना सर्वर को पता ही नहीं चलेगा कि कौन सा डेटा किसका है)।",
      "पासवर्ड फॉर्म में method=\"GET\" लगा देना जिससे पासवर्ड URL में दिखने लगे।"
    ],
    "examPerspective": "GET बनाम POST में अंतर, action एट्रिब्यूट का कार्य, और fieldset/legend की भूमिका पर हर परीक्षा में प्रश्न आते हैं।",
    "quickRevision": "<form> डेटा सर्वर पर भेजता है। action गंतव्य बताता है, GET असुरक्षित/URL-दिखता है, POST सुरक्षित/छिपा हुआ है।",
    "relatedTopics": [
      "input-types-and-attributes",
      "html5-form-validations",
      "basic-form-validations-in-javascript"
    ],
    "practiceTask": "एक लॉगिन फॉर्म बनाएं जिसमें fieldset और legend का उपयोग हो और method='POST' सेट हो।"
  },
  {
    "id": "u3-t14",
    "slug": "input-types-and-attributes",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Input Types and Attributes (Text, Text Area, Dropdown, Radio, Check boxes, Submit & Reset Buttons)",
    "hindiTitle": "इनपुट प्रकार एवं विशेषताएं (Text, Textarea, Select, Radio, Checkbox, Buttons)",
    "definitionEnglish": "HTML form controls collect varied data types using <input type='...'> (text, password, radio, checkbox, submit, reset, file), multi-line <textarea>, and dropdown menus (<select> with <option>), governed by attributes like name, value, placeholder, disabled, and readonly.",
    "definitionHindi": "HTML फॉर्म कंट्रोल्स विभिन्न प्रकार का डेटा एकत्र करने के लिए <input> (text, password, radio, checkbox, submit, reset, file), बहु-पंक्ति <textarea> और ड्रॉपडाउन मेन्यू (<select> व <option>) का उपयोग करते हैं, जिनमें name, value, placeholder, disabled और readonly जैसी विशेषताएं होती हैं।",
    "simpleWords": "यह फॉर्म के अलग-अलग पुर्जे हैं: नाम लिखने के लिए टेक्स्ट बॉक्स, लंबा पता लिखने के लिए टेक्स्टएरिया, लिंग (Male/Female) चुनने के लिए रेडियो बटन, कई शौक चुनने के लिए चेकबॉक्स, और शहर चुनने के लिए ड्रॉपडाउन मेन्यू।",
    "whyImportant": "इनपुट कंट्रोल्स ही यूजर इंटरैक्शन का आधार हैं। सही कंट्रोल का चयन यूजर के फॉर्म भरने के अनुभव को सहज और त्रुटिरहित बनाता है।",
    "detailedExplanation": "### 1. The Universal `<input>` Tag and Core Types\nThe `<input>` tag is the most versatile form element, controlled via its `type` attribute:\n- **`type=\"text\"`:** Single-line plain text input.\n- **`type=\"password\"`:** Masks entered characters with dots/asterisks for secrecy.\n- **`type=\"radio\"`:** Single-selection mutually exclusive option button (must share the same `name` attribute).\n- **`type=\"checkbox\"`:** Multi-selection independent boolean toggles.\n- **`type=\"submit\"`:** Action button that triggers form submission.\n- **`type=\"reset\"`:** Reverts all form fields to their default initial values.\n\n### 2. Multi-Line and Dropdown Controls\n- **`<textarea rows=\"4\" cols=\"50\">`:** Multi-line expandable text area for messages and feedback.\n- **`<select>` & `<option>`:** Dropdown selection menu supporting single or multi-item selection.",
    "syntax": "<input type=\"text\" name=\"fname\" placeholder=\"First Name\">\n<textarea name=\"address\" rows=\"3\" cols=\"30\"></textarea>\n<select name=\"state\">\n  <option value=\"UP\">Uttar Pradesh</option>\n</select>\n<input type=\"radio\" name=\"gender\" value=\"m\"> Male\n<input type=\"checkbox\" name=\"hobby\" value=\"sports\"> Sports",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Complete Form Controls Showcase</h2>\n  <form>\n    <p>Full Name: <input type=\"text\" name=\"name\" placeholder=\"John Doe\"></p>\n    <p>Address:<br><textarea name=\"addr\" rows=\"2\" cols=\"30\" placeholder=\"Street, City\"></textarea></p>\n    <p>City: \n      <select name=\"city\">\n        <option value=\"delhi\">Delhi</option>\n        <option value=\"lucknow\">Lucknow</option>\n      </select>\n    </p>\n    <p>Gender: \n      <input type=\"radio\" name=\"gen\" value=\"M\" checked> Male\n      <input type=\"radio\" name=\"gen\" value=\"F\"> Female\n    </p>\n    <p>Skills: \n      <input type=\"checkbox\" name=\"skill\" value=\"html\"> HTML\n      <input type=\"checkbox\" name=\"skill\" value=\"css\"> CSS\n    </p>\n    <input type=\"submit\" value=\"Save Data\">\n    <input type=\"reset\" value=\"Reset\">\n  </form>\n</body>\n</html>",
    "outputExplanation": "एक संपूर्ण फॉर्म दिखेगा जिसमें टेक्स्ट बॉक्स, टेक्स्टएरिया, ड्रॉपडाउन, रेडियो बटन्स, चेकबॉक्स और सबमिट/रिसेट बटन्स काम करेंगे।",
    "realWorldAnalogy": "रेडियो बटन पंखे के 1-2-3-4 रेगुलेटर जैसा है (एक बार में केवल एक ही स्पीड चुन सकते हैं); चेकबॉक्स पिज्जा की टॉपिंग्स जैसा है (चीज, कॉर्न, ऑलिव सब एक साथ चुन सकते हैं)।",
    "importantPoints": [
      "रेडियो बटन्स में परस्पर अनन्यता (Mutual exclusivity) के लिए समान 'name' अनिवार्य है।",
      "चेकबॉक्स कई स्वतंत्र विकल्प चुनने की सुविधा देता है।",
      "<textarea> का क्लोजिंग टैग </textarea> होता है।",
      "Reset बटन भरे हुए पूरे फॉर्म को एक क्लिक में खाली कर देता है।"
    ],
    "commonMistakes": [
      "रेडियो बटन्स में अलग-अलग name दे देना (जिससे यूजर Male और Female दोनों को एक साथ टिक कर पाता है)।",
      "<textarea> को सेल्फ-क्लोजिंग टैग समझ लेना।"
    ],
    "examPerspective": "रेडियो बटन और चेकबॉक्स में अंतर, रेडियो ग्रुप में 'name' की भूमिका, और textarea के rows/cols एट्रिब्यूट्स पर बार-बार प्रश्न आते हैं।",
    "quickRevision": "एकल चयन: radio; बहु-चयन: checkbox; बहु-पंक्ति: textarea; सूची: select/option; सबमिट: submit button.",
    "relatedTopics": [
      "forms-and-elements",
      "html5-form-validations",
      "basic-form-validations-in-javascript"
    ],
    "practiceTask": "एक फॉर्म बनाएं जिसमें 3 रेडियो बटन्स (High School, Intermediate, Graduate) हों और जांचें कि एक समय में एक ही चुना जा रहा है या नहीं।"
  },
  {
    "id": "u3-t15",
    "slug": "frames-and-iframe",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Frames: Frameset, Nested Frames, and HTML Iframe",
    "hindiTitle": "फ्रेम्स: Frameset, Nested Frames एवं HTML Iframe",
    "definitionEnglish": "HTML Frames (<frameset>, <frame>) were legacy HTML4 structures used to divide the browser window into multiple independent HTML document panes, now superseded in modern HTML5 by the inline frame (<iframe>), which securely embeds an external document or video inside the current page.",
    "definitionHindi": "HTML फ्रेम्स (<frameset>, <frame>) पुरानी तकनीक थी जिसका उपयोग ब्राउज़र विंडो को कई अलग-अलग HTML डॉक्यूमेंट खानों में बांटने हेतु किया जाता था; आधुनिक HTML5 में इसे इनलाइन फ्रेम (<iframe>) द्वारा प्रतिस्थापित कर दिया गया है जो वर्तमान पेज के भीतर सुरक्षित रूप से किसी अन्य पेज या वीडियो को अंतर्निहित करता है।",
    "simpleWords": "पुरानी तकनीक में ब्राउज़र स्क्रीन को खिड़की की तरह 2-3 टुकड़ों (Frameset) में बांट दिया जाता था। लेकिन HTML5 में हम <iframe> का उपयोग करते हैं, जो आपके पेज के अंदर एक छोटा सा टीवी स्क्रीन लगा देता है जिसमें आप यूट्यूब वीडियो या गूगल मैप दिखा सकते हैं।",
    "whyImportant": "यूट्यूब वीडियो, गूगल मैप्स, और पेमेंट गेटवे को अपनी वेबसाइट में बिना पेज छोड़े दिखाने के लिए <iframe> आधुनिक वेब का अनिवार्य हिस्सा है।",
    "detailedExplanation": "### 1. Legacy Frames vs. Modern Inline Frames (`<iframe>`)\n- **Legacy `<frameset>` (Obsolete in HTML5):** Divided the entire browser window into distinct grid panes. Deprecated due to severe accessibility, printing, bookmarking, and SEO defects.\n- **Modern `<iframe>` (Inline Frame):** Embeds an independent external HTML document, YouTube video, or Google Map directly inside a container within the current page.\n\n### 2. Key Attributes of `<iframe>`\n- **`src`:** URL of the document to embed.\n- **`title`:** Mandatory accessibility description for screen readers.\n- **`sandbox`:** Enforces strict security restrictions (disallowing script execution, popups, or top-level navigation).\n- **`allowfullscreen`:** Permits full-screen playback mode.",
    "syntax": "<!-- Modern HTML5 Inline Frame -->\n<iframe src=\"https://example.com\" width=\"600\" height=\"400\" title=\"Embedded Webpage\"></iframe>\n\n<!-- Legacy HTML4 Frameset (Historical / Exam Reference) -->\n<frameset cols=\"25%, 75%\">\n  <frame src=\"menu.html\">\n  <frame src=\"content.html\">\n</frameset>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Embedding External Content with HTML5 Iframe</h2>\n  <p>Below is a sandboxed preview frame embedded directly inside this page:</p>\n  \n  <iframe src=\"https://en.wikipedia.org/wiki/HTML\" \n          width=\"100%\" \n          height=\"300\" \n          style=\"border: 2px solid #0284c7; border-radius: 8px;\"\n          title=\"Wikipedia HTML Article\">\n  </iframe>\n</body>\n</html>",
    "outputExplanation": "पेज के अंदर एक 300px ऊंचा बॉक्स दिखेगा जिसमें विकिपीडिया का पेज स्वतंत्र रूप से स्क्रॉल होगा।",
    "realWorldAnalogy": "जैसे आपके कमरे की दीवार में एक छोटा टीवी लगा हो जिसमें बाहर का लाइव कैमरा दिख रहा हो, <iframe> वर्तमान पेज में दूसरी वेबसाइट की खिड़की है।",
    "importantPoints": [
      "<frameset> वाले पेज में <body> टैग नहीं होता था।",
      "HTML5 में <frameset> को हटा दिया गया है और <iframe> को मानक माना गया है।",
      "यूट्यूब वीडियो और गूगल मैप्स हमेशा <iframe> से एम्बेड होते हैं।"
    ],
    "commonMistakes": [
      "<frameset> और <body> को एक ही पेज में साथ-साथ लिख देना (ब्राउज़र फ्रेम्स को अनदेखा कर देता है)।"
    ],
    "examPerspective": "प्रश्न: 'HTML5 में कौन सा फ्रेम टैग समर्थित है?' (<iframe>), 'Frameset में स्क्रीन को क्षैतिज बांटने के लिए कौन सा एट्रिब्यूट होता है?' (rows).",
    "quickRevision": "पुराना <frameset> स्क्रीन बांटता था (HTML5 में अप्रचलित)। आधुनिक <iframe> किसी भी पेज के अंदर दूसरा वेबपेज/वीडियो एम्बेड करता है।",
    "relatedTopics": [
      "html-embed-multimedia",
      "audio-and-video-tags",
      "html5-introduction"
    ],
    "practiceTask": "एक <iframe> बनाएं और उसमें `src=\"https://nielit.gov.in\"` देकर 400px ऊंचाई सेट करें।"
  },
  {
    "id": "u3-t16",
    "slug": "html5-introduction",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "HTML 5 Introduction",
    "hindiTitle": "HTML5 का परिचय एवं नवीन विशेषताएं",
    "definitionEnglish": "HTML5 is the fifth and current major version of the HTML standard, designed to deliver rich multimedia and web application experiences natively without third-party plugins (like Flash), featuring semantic elements, native audio/video, canvas graphics, and built-in form validation.",
    "definitionHindi": "HTML5 एचटीएमएल मानक का पांचवां और वर्तमान प्रमुख संस्करण है, जिसे फ्लैश जैसे बाहरी प्लगइन्स के बिना सीधे ब्राउज़र में समृद्ध मल्टीमीडिया और वेब ऐप्लिकेशन अनुभव प्रदान करने के लिए डिज़ाइन किया गया है; इसमें नए सेमांटिक एलिमेंट्स, नेटिव ऑडियो/वीडियो, और इन-बिल्ट फॉर्म वैलिडेशन शामिल हैं।",
    "simpleWords": "HTML5 वेब की दुनिया की सबसे बड़ी क्रांति है। पहले वीडियो चलाने या गाने सुनने के लिए Flash Player डाउनलोड करना पड़ता था, लेकिन HTML5 में ब्राउज़र खुद ही वीडियो, ऑडियो, गेम और फॉर्म वैलिडेशन चला लेता है।",
    "whyImportant": "आधुनिक मोबाइल और डेस्कटॉप वेब का 100% आधार HTML5 है। O-Level परीक्षा का पूरा पाठ्यक्रम HTML5 मानकों पर ही आधारित है।",
    "detailedExplanation": "### 1. Evolution and Design Goals of HTML5\nHTML5 was officially standardized in 2014 to modernize web development and reduce reliance on proprietary third-party browser plugins (such as Adobe Flash and Microsoft Silverlight).\n\n### 2. Groundbreaking New Capabilities of HTML5\n1. **Native Multimedia Playback:** Built-in `<audio>` and `<video>` elements without requiring external Flash players.\n2. **Semantic Structural Tags:** Introduction of `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.\n3. **Canvas 2D & SVG:** Direct scriptable drawing of vector graphics, animations, and game rendering via JavaScript.\n4. **Client-Side Storage APIs:** `localStorage` (permanent key-value store) and `sessionStorage` providing 5MB+ storage per origin (replacing tiny 4KB cookies).\n5. **Geolocation & Device APIs:** Native browser access to GPS coordinates and device sensors.",
    "syntax": "HTML5 Minimal Declaration:\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>HTML5 Standard</title>\n  </head>\n  <body> ... </body>\n</html>",
    "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML5 Features Showcase</title>\n</head>\n<body>\n  <header>\n    <h1>HTML5 Native Web Application</h1>\n  </header>\n  <main>\n    <article>\n      <h2>No Plugins Required!</h2>\n      <p>HTML5 natively supports audio, video, semantic markup, and storage.</p>\n    </article>\n  </main>\n  <footer>\n    <p>© 2026 NIELIT HTML5 Master</p>\n  </footer>\n</body>\n</html>",
    "outputExplanation": "पेज का स्ट्रक्चर सेमांटिकली स्पष्ट है; सर्च इंजन हेडर, मुख्य आर्टिकल और फुटर को आसानी से समझ लेते हैं।",
    "realWorldAnalogy": "HTML4 एक साधारण फीचर फोन था जिसमें गाने सुनने के लिए अलग से मेमोरी कार्ड और डोंगल लगाना पड़ता था; HTML5 एक आधुनिक स्मार्टफोन है जिसमें सब कुछ पहले से इनबिल्ट है।",
    "importantPoints": [
      "HTML5 का Doctype डिक्लेरेशन केवल <!DOCTYPE html> है।",
      "HTML5 ने Flash और Silverlight प्लगइन्स की आवश्यकता खत्म कर दी।",
      "WHATWG और W3C ने मिलकर इसे विकसित किया।"
    ],
    "commonMistakes": [
      "HTML5 को एक नई भाषा समझना (यह HTML4 का ही उन्नत और अधिक सक्षम रूप है)।"
    ],
    "examPerspective": "HTML5 का डॉक्युटाइप, नए सेमांटिक टैग्स की सूची, और नए इनपुट टाइप्स पर सबसे अधिक प्रश्न पूछे जाते हैं।",
    "quickRevision": "HTML5 आधुनिक वेब मानक है: सरल doctype, सेमांटिक टैग्स, नेटिव ऑडियो/वीडियो, और इन-बिल्ट वैलिडेशन।",
    "relatedTopics": [
      "basic-structure-of-html",
      "html5-new-semantic-elements",
      "html5-form-validations"
    ],
    "practiceTask": "HTML4 और HTML5 के 5 प्रमुख अंतरों की एक तुलनात्मक तालिका बनाएं।"
  },
  {
    "id": "u3-t17",
    "slug": "html5-new-semantic-elements",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "HTML5 New Semantic Elements: Section, Nav, Article, Aside",
    "hindiTitle": "HTML5 सेमांटिक एलिमेंट्स: Section, Nav, Article, Aside, Header, Footer",
    "definitionEnglish": "HTML5 semantic elements clearly describe their meaning to both the browser and the developer, replacing generic <div> tags with meaningful architectural tags: <header>, <nav> (navigation links), <main>, <section> (thematic group), <article> (independent self-contained composition), <aside> (sidebar/indirectly related content), and <footer>.",
    "definitionHindi": "HTML5 सेमांटिक एलिमेंट्स ब्राउज़र और डेवलपर दोनों को अपने अर्थ का स्पष्ट संकेत देते हैं; ये सामान्य <div> टैग्स की जगह अर्थपूर्ण संरचनात्मक टैग्स प्रदान करते हैं: <header>, <nav> (नेविगेशन), <main>, <section> (थीमेटिक खंड), <article> (स्वतंत्र लेख), <aside> (साइडबार), और <footer>।",
    "simpleWords": "पहले डेवलपर हर चीज के लिए `<div id=\"nav\">` या `<div id=\"footer\">` बनाते थे, जिससे सर्च इंजन समझ नहीं पाता था कि क्या कहाँ है। HTML5 ने हर हिस्से को उसका असली नाम दे दिया: नेविगेशन के लिए `<nav>`, लेख के लिए `<article>`, और किनारे के लिए `<aside>`।",
    "whyImportant": "गूगल सर्च रैंकिंग (SEO) और दृष्टिबाधित लोगों के लिए स्क्रीन रीडर्स इन सेमांटिक टैग्स के आधार पर ही पेज को समझते हैं।",
    "detailedExplanation": "### 1. Core HTML5 Semantic Structural Tags\nSemantic HTML elements clearly describe their meaning to both browser rendering engines, screen reader accessibility tools, and search engine crawlers:\n\n1. **`<header>`:** Represents introductory content, branding logos, and site headers.\n2. **`<nav>`:** Encloses primary site navigation links and menus.\n3. **`<main>`:** Contains the dominant, unique central content of the document (only one `<main>` permitted per page).\n4. **`<article>`:** Represents an independent, self-contained composition suitable for syndication (e.g., blog post, news story, product card).\n5. **`<section>`:** Represents a standalone thematic grouping of content, typically introduced by a heading.\n6. **`<aside>`:** Represents content tangentially related to the main content (e.g., sidebars, author bios, related links).\n7. **`<footer>`:** Represents author information, copyright notices, terms of service, and sitemap links.",
    "syntax": "HTML5 Semantic Layout:\n+---------------------------------------------+\n|                 <header>                    |\n+---------------------------------------------+\n|                  <nav>                      |\n+----------------------+----------------------+\n|                      |                      |\n|      <section>       |       <aside>        |\n|     +-------------+  |      (Sidebar)       |\n|     |  <article>  |  |                      |\n|     +-------------+  |                      |\n+----------------------+----------------------+\n|                 <footer>                    |\n+---------------------------------------------+",
    "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Semantic Layout Demo</title>\n  <style>\n    header, nav, section, aside, footer { padding: 12px; margin: 6px; border-radius: 4px; }\n    header { background: #0284c7; color: white; }\n    nav { background: #0369a1; color: white; }\n    .layout { display: flex; gap: 10px; }\n    section { flex: 3; background: #e0f2fe; }\n    aside { flex: 1; background: #fef08a; }\n    footer { background: #334155; color: white; text-align: center; }\n  </style>\n</head>\n<body>\n  <header><h1>NIELIT Web Portal</h1></header>\n  <nav><a href=\"#\" style=\"color:white;\">Home</a> | <a href=\"#\" style=\"color:white;\">Syllabus</a></nav>\n  <div class=\"layout\">\n    <section>\n      <article>\n        <h2>HTML5 Semantic Architecture</h2>\n        <p>This article is a self-contained educational unit.</p>\n      </article>\n    </section>\n    <aside>\n      <h3>Exam Notice</h3>\n      <p>M2-R5.1 exams scheduled for next month.</p>\n    </aside>\n  </div>\n  <footer><p>© 2026 NIELIT Study Hub</p></footer>\n</body>\n</html>",
    "outputExplanation": "सर्च इंजन और ब्राउज़र को स्पष्ट पता है कि हेडर कहाँ है, नेविगेशन कहाँ है, मुख्य लेख कहाँ है और साइडबार कहाँ है।",
    "realWorldAnalogy": "अखबार में मुख्य सुर्खी (Header), शीर्ष मेन्यू (Nav), मुख्य खबर का आर्टिकल (Article), किनारे छपे शेयर बाजार के भाव व विज्ञापन (Aside), और सबसे नीचे छपा प्रेस का पता (Footer) होता है।",
    "importantPoints": [
      "<section> और <article> में अंतर: <article> स्वतंत्र होता है जिसे अकेले अखबार में छापा जा सके; <section> संबंधित विषय का हिस्सा होता है।",
      "<aside> का उपयोग साइडबार और संबंधित लिंक्स के लिए होता है।",
      "<nav> केवल मुख्य नेविगेशन लिंक्स के लिए उपयोग किया जाता है।"
    ],
    "commonMistakes": [
      "हर लिंक के लिए `<nav>` लगाना (केवल मुख्य नेविगेशन मेन्यू के लिए `<nav>` का प्रयोग करें)।",
      "पेज में कई `<main>` टैग बना देना (एक पेज में केवल 1 `<main>` टैग होना चाहिए)।"
    ],
    "examPerspective": "<section>, <nav>, <article>, <aside> के अर्थ और उपयोग पर परीक्षा में बार-बार प्रश्न आते हैं।",
    "quickRevision": "सेमांटिक टैग्स: <header> (शीर्ष), <nav> (मेन्यू), <section> (खंड), <article> (स्वतंत्र लेख), <aside> (साइडबार), <footer> (तल)।",
    "relatedTopics": [
      "html5-introduction",
      "html-layout",
      "div-tag"
    ],
    "practiceTask": "एक ब्लॉग पेज का लेआउट बनाएं जिसमें header, nav, section, article, aside और footer सभी का उपयोग हुआ हो।"
  },
  {
    "id": "u3-t18",
    "slug": "audio-and-video-tags",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "Audio Tag and Video Tag",
    "hindiTitle": "ऑडियो टैग (<audio>) एवं वीडियो टैग (<video>)",
    "definitionEnglish": "HTML5 provides native multimedia playback through the <audio> and <video> elements without needing external plugins, supporting standard web media formats (MP3, WAV, OGG for audio; MP4, WebM, OGG for video) and controlled via attributes like controls, autoplay, loop, and muted.",
    "definitionHindi": "HTML5 बिना किसी बाहरी प्लगइन के नेटिव मल्टीमीडिया प्लेबैक हेतु <audio> और <video> एलिमेंट्स प्रदान करता है, जो मानक वेब मीडिया प्रारूपों (ऑडियो हेतु MP3, WAV, OGG; वीडियो हेतु MP4, WebM, OGG) का समर्थन करते हैं और controls, autoplay, loop व muted विशेषताओं द्वारा नियंत्रित होते हैं।",
    "simpleWords": "पहले वेबसाइट पर गाना या वीडियो चलाने के लिए Flash Player की जरूरत होती थी। HTML5 में आप सिर्फ `<video controls>` लिख दें, और ब्राउज़र में प्ले, पॉज़, वॉल्यूम और फुलस्क्रीन का बटन अपने आप आ जाता है।",
    "whyImportant": "आज का इंटरनेट वीडियो और पॉडकास्ट का इंटरनेट है। वेब डिजाइनिंग में मीडिया एम्बेडिंग के बिना कोई भी आधुनिक वेबसाइट अधूरी है।",
    "detailedExplanation": "### 1. Embedding Native Media with `<audio>` and `<video>`\nHTML5 eliminated third-party media plugins by introducing standard container elements:\n\n```html\n<video width=\"640\" height=\"360\" controls poster=\"cover.jpg\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.webm\" type=\"video/webm\">\n  Your browser does not support HTML5 video.\n</video>\n```\n\n### 2. Standard Media Control Attributes\n- **`controls`:** Displays native browser playback controls (Play, Pause, Seek Bar, Volume).\n- **`autoplay`:** Starts playback automatically (modern browsers require `muted` for autoplay to succeed).\n- **`loop`:** Replays media continuously upon completion.\n- **`muted`:** Silences audio output by default.\n- **`poster`:** Specifies a preview image displayed before the video begins downloading/playing.",
    "syntax": "<!-- Native Audio Player -->\n<audio controls>\n  <source src=\"song.mp3\" type=\"audio/mpeg\">\n  <source src=\"song.ogg\" type=\"audio/ogg\">\n  Your browser does not support audio.\n</audio>\n\n<!-- Native Video Player -->\n<video width=\"480\" height=\"270\" controls poster=\"thumb.jpg\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.webm\" type=\"video/webm\">\n  Your browser does not support video.\n</video>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>HTML5 Native Multimedia</h2>\n  \n  <h3>Audio Player</h3>\n  <audio controls>\n    <source src=\"https://www.w3schools.com/html/horse.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n  </audio>\n\n  <h3>Video Player with Controls</h3>\n  <video width=\"320\" height=\"240\" controls poster=\"https://via.placeholder.com/320x240/0284c7/ffffff?text=Video+Thumbnail\">\n    <source src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n    Your browser does not support the video tag.\n  </video>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र का देशी मीडिया प्लेयर दिखेगा जिसमें प्ले, म्यूट, टाइम बार और डाउनलोड का विकल्प उपलब्ध होगा।",
    "realWorldAnalogy": "जैसे टीवी में इन-बिल्ट स्पीकर और स्क्रीन होती है और अलग से सीडी प्लेयर जोड़ने की जरूरत नहीं पड़ती, HTML5 के ऑडियो/वीडियो टैग्स वैसे ही इन-बिल्ट हैं।",
    "importantPoints": [
      "controls एट्रिब्यूट न लगाने पर प्लेयर स्क्रीन पर दिखाई नहीं देगा।",
      "MP4 वीडियो का सबसे सुरक्षित और सार्वभौमिक रूप से समर्थित फॉर्मेट है।",
      "MP3 ऑडियो का सार्वभौमिक रूप से समर्थित फॉर्मेट है।"
    ],
    "commonMistakes": [
      "`controls` एट्रिब्यूट भूल जाना (जिससे गाना लोड तो होता है पर प्ले करने का बटन ही नहीं दिखता)।"
    ],
    "examPerspective": "controls, autoplay, poster, loop एट्रिब्यूट्स और MP3/MP4 फॉर्मेट सपोर्ट पर वस्तुनिष्ठ प्रश्न पूछे जाते हैं।",
    "quickRevision": "<audio> और <video> बिना प्लगइन मीडिया चलाते हैं। controls बटन दिखाता है, poster थंबनेल देता है, loop दोहराता है।",
    "relatedTopics": [
      "html-embed-multimedia",
      "html5-introduction",
      "frames-and-iframe"
    ],
    "practiceTask": "एक वीडियो टैग बनाएं जिसमें `width=\"400\"`, `controls`, और एक पोस्टर इमेज सेट हो।"
  },
  {
    "id": "u3-t19",
    "slug": "html-embed-multimedia",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "HTML Embed Multimedia",
    "hindiTitle": "मल्टीमीडिया एम्बेड करना (<embed> & <object> Tags)",
    "definitionEnglish": "HTML provides the <embed> (void self-closing container) and <object> (container with fallback capability) elements to embed external interactive content, multimedia players, PDF documents, Java applets, and SVG graphics directly into a webpage.",
    "definitionHindi": "HTML बाहरी इंटरएक्टिव कंटेंट, मल्टीमीडिया प्लेयर्स, PDF दस्तावेज़ों और SVG ग्राफिक्स को सीधे वेबपेज में अंतर्निहित करने के लिए <embed> (सेल्फ-क्लोजिंग टैग) और <object> (फॉलबैक क्षमता वाला कंटेनर) एलिमेंट्स प्रदान करता है।",
    "simpleWords": "जब आपको अपने वेबपेज के अंदर कोई PDF फाइल (जैसे O-Level का सिलेबस) सीधे खोलकर दिखानी हो, तो आप `<embed>` या `<object>` टैग का उपयोग करते हैं।",
    "whyImportant": "दस्तावेज़ों (PDFs), फ्लैश एनिमेशन (ऐतिहासिक), और इंटरएक्टिव प्लगइन्स को वेबपेज में दिखाने के लिए यह टैग्स आवश्यक हैं।",
    "detailedExplanation": "### 1. Multimedia Embedding Tags: `<embed>` and `<object>`\n- **`<embed>`:** Self-closing void element providing an integration point for external plugins, PDF documents, and interactive media.\n- **`<object>`:** Powerful multi-purpose container that allows fallback content nesting if the target resource or plugin is unavailable.\n\n```html\n<object data=\"syllabus.pdf\" type=\"application/pdf\" width=\"100%\" height=\"500px\">\n  <p>Your browser does not support PDF viewing. <a href=\"syllabus.pdf\">Download PDF</a>.</p>\n</object>\n```",
    "syntax": "<!-- Embed a PDF using <embed> -->\n<embed src=\"notes.pdf\" type=\"application/pdf\" width=\"100%\" height=\"500px\">\n\n<!-- Embed a PDF using <object> with fallback -->\n<object data=\"notes.pdf\" type=\"application/pdf\" width=\"100%\" height=\"500px\">\n  <p>Alternative: <a href=\"notes.pdf\">Download PDF</a></p>\n</object>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Embedding PDF Document in Webpage</h2>\n  <object data=\"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf\" \n          type=\"application/pdf\" \n          width=\"100%\" \n          height=\"350px\">\n    <p>Your browser does not support embedded PDFs. \n       <a href=\"dummy.pdf\">Click here to download the syllabus.</a>\n    </p>\n  </object>\n</body>\n</html>",
    "outputExplanation": "ब्राउज़र के अंदर एक इन-बिल्ट PDF रीडर खुल जाएगा जिसमें पेज ज़ूम और स्क्रॉल किया जा सकेगा।",
    "realWorldAnalogy": "जैसे परीक्षा केंद्र के बाहर कांच के नोटिस बोर्ड में पूरा प्रश्न-पत्र या सर्कुलर चिपका दिया जाता है जिसे बाहर से ही पढ़ा जा सकता है।",
    "importantPoints": [
      "<embed> एम्प्टी टैग है और 'src' एट्रिब्यूट लेता है।",
      "<object> कंटेनर टैग है और 'data' एट्रिब्यूट लेता है।",
      "<object> में फॉलबैक कंटेंट दिया जा सकता है।"
    ],
    "commonMistakes": [
      "<object> में `src` लिख देना (ऑब्जेक्ट टैग `data` एट्रिब्यूट लेता है)।"
    ],
    "examPerspective": "प्रश्न: '<embed> और <object> में मुख्य अंतर क्या है?' (<object> फॉलबैक सपोर्ट करता है, <embed> नहीं), 'PDF एम्बेड करने के लिए कौन सा टैग उपयुक्त है?'",
    "quickRevision": "<embed> और <object> बाहरी दस्तावेज़ (जैसे PDF) एम्बेड करते हैं। <object> में फॉलबैक कंटेंट की सुविधा होती है।",
    "relatedTopics": [
      "audio-and-video-tags",
      "frames-and-iframe",
      "documents-interchange-standards"
    ],
    "practiceTask": "एक `<object>` टैग बनाकर उसमें किसी PDF फाइल को 100% चौड़ाई के साथ एम्बेड करने का कोड लिखें।"
  },
  {
    "id": "u3-t20",
    "slug": "html-layout",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "HTML Layout",
    "hindiTitle": "HTML लेआउट (Website Layout Architecture)",
    "definitionEnglish": "HTML layout refers to the structural arrangement of visual content areas across a webpage (header, navigation bar, main content, sidebars, and footer) organized using modern HTML5 semantic elements and CSS positioning models rather than outdated table-based layouts.",
    "definitionHindi": "HTML लेआउट का तात्पर्य वेबपेज के दृश्यमान क्षेत्रों (हेडर, मेन्यू, मुख्य सामग्री, साइडबार और फुटर) की उस संरचनात्मक व्यवस्था से है जिसे पुराने टेबल-आधारित लेआउट के बजाय आधुनिक HTML5 सेमांटिक एलिमेंट्स और CSS द्वारा व्यवस्थित किया जाता है।",
    "simpleWords": "लेआउट वेबसाइट का ब्लूप्रिंट या नक्शा है: ऊपर हेडर कहाँ रहेगा, मेन्यू कहाँ रहेगा, मुख्य लेख बीच में और विज्ञापन साइड में कैसे दिखेंगे, यह तय करना लेआउट कहलाता है।",
    "whyImportant": "एक खराब लेआउट वाली वेबसाइट यूजर को भ्रमित कर देती है। सही लेआउट से यूजर को जो जानकारी चाहिए वह सेकंडों में मिल जाती है।",
    "detailedExplanation": "### 1. Classical vs. Modern HTML Page Layout Systems\nPage layouts organize headers, multi-column articles, sidebars, and footers on a screen:\n1. **Classical Layouts (Legacy):**\n   - Table-based layouts (`<table>`) — Deprecated, non-responsive, severely harms accessibility.\n   - Float-based layouts (`float: left`, `clear: both`) — Fragile and complex to maintain.\n2. **Modern Layout Systems (Standard):**\n   - **CSS Flexbox (1D Layout):** Perfect for aligning navigation bars, centering items, and flexible 1-dimensional rows or columns.\n   - **CSS Grid (2D Layout):** The gold standard for complex 2-dimensional page grids with defined rows, columns, and named template areas.",
    "syntax": "Modern Semantic Layout Structure:\n<header> ... </header>\n<nav> ... </nav>\n<div class=\"main-wrapper\">\n  <main> <section> ... </section> </main>\n  <aside> ... </aside>\n</div>\n<footer> ... </footer>",
    "codeExample": "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; }\n    body { font-family: sans-serif; margin: 0; }\n    header { background: #0284c7; color: white; padding: 20px; text-align: center; }\n    nav { background: #0369a1; padding: 10px; text-align: center; }\n    nav a { color: white; margin: 0 10px; text-decoration: none; font-weight: bold; }\n    .row { display: flex; flex-wrap: wrap; }\n    .content { flex: 70%; padding: 20px; background: #f8fafc; }\n    .sidebar { flex: 30%; padding: 20px; background: #e2e8f0; }\n    footer { background: #1e293b; color: white; padding: 15px; text-align: center; }\n    @media (max-width: 600px) {\n      .content, .sidebar { flex: 100%; }\n    }\n  </style>\n</head>\n<body>\n  <header><h1>Modern Web Layout</h1></header>\n  <nav><a href=\"#\">Home</a><a href=\"#\">Notes</a><a href=\"#\">MCQs</a></nav>\n  <div class=\"row\">\n    <div class=\"content\">\n      <h2>Main Learning Area</h2>\n      <p>Responsive multi-column layout using semantic HTML and CSS.</p>\n    </div>\n    <div class=\"sidebar\">\n      <h3>Quick Links</h3>\n      <p>Unit 1 to Unit 8 Notes</p>\n    </div>\n  </div>\n  <footer><p>© 2026 NIELIT O-Level Learning Hub</p></footer>\n</body>\n</html>",
    "outputExplanation": "पीसी पर 70% सामग्री और 30% साइडबार अगल-बगल दिखेंगे, जबकि 600px से कम चौड़े मोबाइल पर दोनों स्वतः एक के नीचे एक हो जाएंगे।",
    "realWorldAnalogy": "जैसे एक घर का आर्किटेक्चरल नक्शा होता है जिसमें लिविंग रूम, किचन और बालकनी की जगह तय होती है, वैसे ही HTML लेआउट पेज के हिस्सों को तय करता है।",
    "importantPoints": [
      "लेआउट के लिए कभी भी HTML <table> का उपयोग न करें।",
      "आधुनिक लेआउट HTML5 सेमांटिक टैग्स और CSS Flexbox/Grid से बनते हैं।",
      "W3.CSS फ्रेमवर्क 12-कॉलम ग्रिड सिस्टम प्रदान करता है।"
    ],
    "commonMistakes": [
      "टेबल को लेआउट के लिए उपयोग करना (टेबल केवल सारणीबद्ध डेटा के लिए है, लेआउट के लिए नहीं)।"
    ],
    "examPerspective": "प्रश्न: 'वेबपेज लेआउट के लिए टेबल का उपयोग क्यों नहीं करना चाहिए?' और 'HTML5 लेआउट के मुख्य घटक कौन से हैं?'",
    "quickRevision": "HTML लेआउट पेज के हिस्सों (header, nav, content, sidebar, footer) को व्यवस्थित करता है। आधुनिक लेआउट Flexbox व Grid से बनते हैं।",
    "relatedTopics": [
      "html5-new-semantic-elements",
      "w3-css-grid",
      "responsive-web-designing"
    ],
    "practiceTask": "एक संपूर्ण 2-कॉलम लेआउट बनाएं जो मोबाइल पर 1 कॉलम में बदल जाए।"
  },
  {
    "id": "u3-t21",
    "slug": "html5-form-validations",
    "unit": 3,
    "unitSlug": "unit-3",
    "unitTitle": "HTML Basics & HTML5",
    "title": "HTML5 Form Validations: Require, Pattern, Autofocus, email, number, date, range",
    "hindiTitle": "HTML5 फॉर्म वैलिडेशन (Required, Pattern, Autofocus, Types)",
    "definitionEnglish": "HTML5 native form validation provides client-side constraint checking directly in the browser without requiring JavaScript, utilizing attributes like 'required', 'pattern' (Regex), 'autofocus', and specialized semantic input types (email, number, date, range).",
    "definitionHindi": "HTML5 नेटिव फॉर्म वैलिडेशन बिना किसी जावास्क्रिप्ट कोड के सीधे वेब ब्राउज़र में क्लाइंट-साइड इनपुट जांच की सुविधा देता है; इसमें 'required', 'pattern' (रेगुलर एक्सप्रेशन), 'autofocus' जैसी विशेषताएं और विशेष इनपुट प्रकार (email, number, date, range) शामिल हैं।",
    "simpleWords": "पहले अगर किसी फॉर्म में चेक करना होता था कि यूजर ने ईमेल सही लिखा है या नहीं, तो 20 लाइन का जावास्क्रिप्ट कोड लिखना पड़ता था। HTML5 में आपको सिर्फ `type=\"email\"` और `required` लिखना है, बाकी सारी जांच ब्राउज़र खुद कर लेता है!",
    "whyImportant": "गलत, खाली या अधूरा डेटा सर्वर तक जाने से रोकना और यूजर को तुरंत त्रुटि बताना फॉर्म वैलिडेशन का मूल काम है।",
    "detailedExplanation": "### 1. Native HTML5 Form Validation Attributes\nHTML5 provides built-in client-side validation without requiring custom JavaScript code:\n\n1. **`required`:** Prevents form submission if the field is empty.\n2. **`pattern=\"[A-Z]{5}[0-9]{4}[A-Z]{1}\"`:** Validates input against a Regular Expression (e.g., Indian PAN Card format).\n3. **`min` & `max`:** Constrains numeric inputs or date pickers to a designated range.\n4. **`minlength` & `maxlength`:** Enforces minimum and maximum character counts.\n5. **`autofocus`:** Automatically focuses cursor in the designated input field on page load.\n6. **`type=\"email\"` & `type=\"url\"`:** Validates proper syntax structure for email addresses and web URLs automatically.",
    "syntax": "<input type=\"email\" required placeholder=\"name@domain.com\">\n<input type=\"tel\" pattern=\"[0-9]{10}\" required placeholder=\"10 Digits\">\n<input type=\"number\" min=\"18\" max=\"60\" step=\"1\">\n<input type=\"date\" min=\"2026-01-01\">\n<input type=\"range\" min=\"0\" max=\"100\" value=\"50\">",
    "codeExample": "<!DOCTYPE html>\n<html>\n<body>\n  <h2>HTML5 Native Validation Demo</h2>\n  <form action=\"#\" method=\"POST\">\n    <p>\n      Candidate Name *: \n      <input type=\"text\" name=\"uname\" required autofocus placeholder=\"Required field\">\n    </p>\n    <p>\n      Email Address *: \n      <input type=\"email\" name=\"uemail\" required placeholder=\"student@example.com\">\n    </p>\n    <p>\n      Mobile (10 digits) *: \n      <input type=\"tel\" name=\"uphone\" pattern=\"[0-9]{10}\" required placeholder=\"9876543210\">\n    </p>\n    <p>\n      Age (18 to 65): \n      <input type=\"number\" name=\"uage\" min=\"18\" max=\"65\" value=\"20\">\n    </p>\n    <p>\n      Exam Date: \n      <input type=\"date\" name=\"edate\">\n    </p>\n    <p>\n      Confidence Level: \n      <input type=\"range\" name=\"conf\" min=\"0\" max=\"100\" value=\"80\">\n    </p>\n    <button type=\"submit\">Submit Form</button>\n  </form>\n</body>\n</html>",
    "outputExplanation": "यदि ईमेल में '@' न हो या मोबाइल में 9 अंक हों, तो ब्राउज़र सबमिट होने से पहले ही पॉपअप एरर दिखा देगा।",
    "realWorldAnalogy": "जैसे मेट्रो स्टेशन पर ऑटोमैटिक टिकट बैरियर होता है जो अमान्य टोकन या बिना पैसे वाले कार्ड को लाल बत्ती दिखाकर वहीं रोक देता है, HTML5 वैलिडेशन अमान्य डेटा को वहीं रोक देता है।",
    "importantPoints": [
      "required बूलियन एट्रिब्यूट है (इसे केवल required लिखा जाता है)।",
      "pattern में रेगुलर एक्सप्रेशन दिया जाता है।",
      "HTML5 वैलिडेशन के लिए किसी भी जावास्क्रिप्ट की आवश्यकता नहीं होती।",
      "type=\"email\" मोबाइल कीबोर्ड पर स्वतः '@' और '.com' का बटन ले आता है।"
    ],
    "commonMistakes": [
      "pattern में गलत Regex लिख देना जिससे सही इनपुट भी अमान्य घोषित हो जाए।",
      "क्लाइंट-साइड वैलिडेशन पर 100% निर्भर होकर सर्वर-साइड वैलिडेशन छोड़ देना (सुरक्षा के लिए दोनों आवश्यक हैं)।"
    ],
    "examPerspective": "required, pattern, autofocus एट्रिब्यूट्स और email, number, date, range इनपुट टाइप्स पर हर साल प्रश्न पूछे जाते हैं।",
    "quickRevision": "HTML5 नेटिव वैलिडेशन बिना JS के इनपुट जांचता है: required (खाली न छोड़ें), pattern (Regex फॉर्मेट), email, number, date, range.",
    "relatedTopics": [
      "forms-and-elements",
      "input-types-and-attributes",
      "basic-form-validations-in-javascript"
    ],
    "practiceTask": "एक फॉर्म बनाएं जो केवल 10 अंकों का मोबाइल नंबर स्वीकार करे और गलत नंबर डालने पर एरर दिखाए।"
  }
];
