// Master Cheat Sheets for O-Level M2-R5.1

export const cheatSheetsData = [
  {
    id: "html-cheat-sheet",
    unit: 3,
    title: "HTML5 Master Cheat Sheet",
    hindiTitle: "HTML5 मास्टर चीट शीट",
    category: "HTML",
    description: "All official tags, attributes, structural elements, and HTML5 features in one place.",
    sections: [
      {
        title: "Basic Skeleton",
        items: [
          { code: "<!DOCTYPE html>", desc: "डॉक्यूमेंट को HTML5 मानक के रूप में घोषित करता है" },
          { code: "<html lang=\"en\">...</html>", desc: "HTML डॉक्यूमेंट का रूट कंटेनर" },
          { code: "<head>...</head>", desc: "मेटाडाटा, टाइटल और लिंक्स का कंटेनर" },
          { code: "<body>...</body>", desc: "वेबपेज का दृश्यमान कंटेंट कंटेनर" }
        ]
      },
      {
        title: "Head Elements & Metadata",
        items: [
          { code: "<title>My Page</title>", desc: "ब्राउज़र टैब पर दिखने वाला पेज शीर्षक" },
          { code: "<meta charset=\"UTF-8\">", desc: "मानक यूनीकोड कैरेक्टर एन्कोडिंग" },
          { code: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", desc: "मोबाइल रिस्पॉन्सिव व्यूकंट्रोल" },
          { code: "<link rel=\"stylesheet\" href=\"style.css\">", desc: "बाहरी CSS स्टाइलशीट लिंक करना" },
          { code: "<script src=\"script.js\"></script>", desc: "जावास्क्रिप्ट फाइल जोड़ना" }
        ]
      },
      {
        title: "Text Formatting Tags",
        items: [
          { code: "<h1>...</h1> to <h6>...</h6>", desc: "हेडिंग्स (h1 सबसे बड़ी, h6 सबसे छोटी)" },
          { code: "<p>...</p>", desc: "पैराग्राफ कंटेनर (डिफ़ॉल्ट रूप से ऊपर-नीचे मार्जिन)" },
          { code: "<b>...</b> / <strong>...</strong>", desc: "बोल्ड टेक्स्ट (strong सेमांटिक महत्व देता है)" },
          { code: "<i>...</i> / <em>...</em>", desc: "इटैलिक टेक्स्ट (em सेमांटिक तनाव देता है)" },
          { code: "<u>...</u> / <ins>...</ins>", desc: "अंडरलाइन टेक्स्ट" },
          { code: "<s>...</s> / <del>...</del>", desc: "स्ट्राइकथ्रू (कटा हुआ टेक्स्ट)" },
          { code: "<pre>...</pre>", desc: "स्पेस और लाइन ब्रेक को जस-का-तस रखने वाला प्रीफॉर्मेट" },
          { code: "<br>", desc: "खाली लाइन ब्रेक (Void Tag)" },
          { code: "<hr>", desc: "क्षैतिज विभाजक रेखा (Thematic Break)" }
        ]
      },
      {
        title: "Links & Images",
        items: [
          { code: "<a href=\"url\">Link</a>", desc: "हाइपरलिंक बनाना" },
          { code: "<a href=\"url\" target=\"_blank\">", desc: "लिंक को नए ब्राउज़र टैब में खोलना" },
          { code: "<a href=\"#section1\">Jump</a>", desc: "नेम्ड एंकर / इन-पेज बुकमार्क लिंक" },
          { code: "<img src=\"img.jpg\" alt=\"desc\">", desc: "इमेज जोड़ना (alt अनिवार्य वैकल्पिक टेक्स्ट)" },
          { code: "<img width=\"300\" height=\"200\">", desc: "इमेज की चौड़ाई और ऊंचाई पिक्सेल में" }
        ]
      },
      {
        title: "Tables",
        items: [
          { code: "<table border=\"1\">...</table>", desc: "टेबल कंटेनर" },
          { code: "<tr>...</tr>", desc: "टेबल रो (क्षैतिज पंक्ति)" },
          { code: "<th>...</th>", desc: "टेबल हेडर (Bold & Center aligned)" },
          { code: "<td>...</td>", desc: "टेबल डेटा सेल (Regular & Left aligned)" },
          { code: "<td rowspan=\"2\">", desc: "दो पंक्तियों को लंबवत मिलाना" },
          { code: "<td colspan=\"3\">", desc: "तीन स्तंभों को क्षैतिज मिलाना" },
          { code: "cellpadding=\"10\"", desc: "सेल कंटेंट और बॉर्डर के बीच दूरी" },
          { code: "cellspacing=\"5\"", desc: "दो अलग-अलग सेल्स के बीच दूरी" }
        ]
      },
      {
        title: "Lists",
        items: [
          { code: "<ol type=\"1|A|a|I|i\">", desc: "ऑर्डर्ड (नंबर/अक्षर) लिस्ट" },
          { code: "<ul type=\"disc|circle|square\">", desc: "अनऑर्डर्ड (बुलेट) लिस्ट" },
          { code: "<li>...</li>", desc: "लिस्ट आइटम (सूची की प्रविष्टि)" },
          { code: "<dl> <dt>...</dt> <dd>...</dd> </dl>", desc: "डेफिनिशन लिस्ट (Term और Description)" }
        ]
      },
      {
        title: "Forms & Input Types",
        items: [
          { code: "<form action=\"save.php\" method=\"POST\">", desc: "फॉर्म कंटेनर (POST सुरक्षित ट्रांसमिशन)" },
          { code: "<input type=\"text\" name=\"user\">", desc: "एकल पंक्ति टेक्स्ट इनपुट" },
          { code: "<input type=\"password\">", desc: "मास्क्ड पासवर्ड इनपुट (बिंदु/तारे)" },
          { code: "<textarea rows=\"4\" cols=\"50\">", desc: "बहुपंक्ति टेक्स्ट एरिया" },
          { code: "<select> <option>...</option> </select>", desc: "ड्रॉपडाउन लिस्ट" },
          { code: "<input type=\"radio\" name=\"gender\">", desc: "रेडियो बटन (एक समूह में समान name)" },
          { code: "<input type=\"checkbox\">", desc: "चेकबॉक्स (एकाधिक विकल्प चयन)" },
          { code: "<input type=\"submit\" value=\"Send\">", desc: "फॉर्म सबमिट बटन" },
          { code: "<input type=\"reset\" value=\"Clear\">", desc: "फॉर्म रिसेट बटन" },
          { code: "required", desc: "HTML5 अनिवार्य फील्ड वैलिडेशन" },
          { code: "autofocus", desc: "पेज लोड पर स्वतः कर्सर फोकस" },
          { code: "pattern=\"[0-9]{10}\"", desc: "रेगुलर एक्सप्रेशन वैलिडेशन पैटर्न" }
        ]
      },
      {
        title: "HTML5 Semantic Elements & Multimedia",
        items: [
          { code: "<section>, <article>", desc: "सेमांटिक सेक्शन व स्वतंत्र लेख" },
          { code: "<nav>, <aside>", desc: "नेविगेशन लिंक्स और साइडबार कंटेनर" },
          { code: "<header>, <footer>", desc: "पेज हेडर और फुटर कंटेनर" },
          { code: "<audio controls src=\"song.mp3\">", desc: "देशी HTML5 ऑडियो प्लेयर" },
          { code: "<video controls width=\"400\">", desc: "देशी HTML5 वीडियो प्लेयर" },
          { code: "<iframe src=\"page.html\">", desc: "इनलाइन फ्रेम द्वारा दूसरा पेज एम्बेड करना" }
        ]
      }
    ]
  },
  {
    id: "css-cheat-sheet",
    unit: 4,
    title: "CSS3 Master Cheat Sheet",
    hindiTitle: "CSS3 मास्टर चीट शीट",
    category: "CSS",
    description: "Selectors, box model, layout properties, typography, menus, and CSS tables.",
    sections: [
      {
        title: "CSS Selectors",
        items: [
          { code: "*", desc: "यूनिवर्सल सिलेक्टर (पेज के सभी एलिमेंट्स)" },
          { code: "p", desc: "टैग / टाइप सिलेक्टर (सभी <p> टैग्स)" },
          { code: "#header", desc: "ID सिलेक्टर (विशिष्ट यूनिक एलिमेंट, Hash)" },
          { code: ".btn", desc: "Class सिलेक्टर (पुनः प्रयोज्य ग्रुप, Dot)" },
          { code: "div p", desc: "डिसेंडेंट / सब-सिलेक्टर (div के अंदर के p)" },
          { code: "div > p", desc: "चाइल्ड सिलेक्टर (सीधे प्रत्यक्ष चाइल्ड)" },
          { code: 'input[type="text"]', desc: "एट्रिब्यूट सिलेक्टर" },
          { code: "h1, h2, h3", desc: "ग्रुपिंग सिलेक्टर (एक साथ कई टैग्स)" },
          { code: "a:hover", desc: "स्यूडो-क्लास (माउस ले जाने पर)" }
        ]
      },
      {
        title: "CSS Box Model",
        items: [
          { code: "width / height", desc: "कंटेंट एरिया का आकार" },
          { code: "padding: 10px;", desc: "कंटेंट और बॉर्डर के बीच आंतरिक खाली जगह" },
          { code: "border: 1px solid #ccc;", desc: "कंटेनर की सीमा रेखा" },
          { code: "margin: 20px auto;", desc: "बॉर्डर के बाहर की खाली जगह (auto से केंद्र में)" },
          { code: "box-sizing: border-box;", desc: "पैडिंग व बॉर्डर को कुल चौड़ाई में शामिल करना" }
        ]
      },
      {
        title: "Positioning Properties",
        items: [
          { code: "position: static;", desc: "डिफ़ॉल्ट सामान्य फ्लो स्थिति" },
          { code: "position: relative;", desc: "अपनी सामान्य स्थिति के सापेक्ष ऑफसेट" },
          { code: "position: absolute;", desc: "निकटतम स्थित पैरेंट के सापेक्ष तय स्थिति" },
          { code: "position: fixed;", desc: "स्क्रीन व्यूकंट्रोल के सापेक्ष स्थिर (स्क्रॉल पर भी)" },
          { code: "position: sticky;", desc: "स्क्रॉल सीमा तक पहुंचने पर फिक्स होना" },
          { code: "z-index: 10;", desc: "3D स्टैकिंग ऑर्डर (उच्च संख्या ऊपर दिखती है)" }
        ]
      },
      {
        title: "Background & Borders",
        items: [
          { code: "background-color: #f8fafc;", desc: "बैकग्राउंड रंग" },
          { code: "background-image: url('bg.jpg');", desc: "बैकग्राउंड इमेज" },
          { code: "background-repeat: no-repeat;", desc: "इमेज का दोहराव रोकना" },
          { code: "background-size: cover;", desc: "पूरी स्क्रीन को भरना" },
          { code: "border-radius: 8px;", desc: "कोनों को गोल करना" }
        ]
      },
      {
        title: "Menus & Lists",
        items: [
          { code: "list-style-type: none;", desc: "बुलेट्स या नंबर्स हटाना" },
          { code: "display: inline-block;", desc: "लिस्ट आइटम्स को एक पंक्ति में लाना" },
          { code: "text-decoration: none;", desc: "लिंक्स के नीचे की अंडरलाइन हटाना" },
          { code: "border-collapse: collapse;", desc: "टेबल की दोहरी बॉर्डर्स को एक में मिलाना" }
        ]
      }
    ]
  },
  {
    id: "w3css-cheat-sheet",
    unit: 5,
    title: "W3.CSS Framework Cheat Sheet",
    hindiTitle: "W3.CSS फ्रेमवर्क चीट शीट",
    category: "W3.CSS",
    description: "Ready reference for W3.CSS classes, 12-column grid, containers, panels, and tables.",
    sections: [
      {
        title: "Containers & Panels",
        items: [
          { code: "w3-container", desc: "16px दाएँ-बाएँ पैडिंग वाला मानक कंटेनर" },
          { code: "w3-panel", desc: "16px ऊपर-नीचे मार्जिन और 16px पैडिंग वाला अलर्ट बॉक्स" },
          { code: "w3-card / w3-card-4", desc: "शैडो वाला कार्ड कंटेनर (4px शैडो)" }
        ]
      },
      {
        title: "Colors & Text",
        items: [
          { code: "w3-red, w3-blue, w3-teal", desc: "बैकग्राउंड कलर्स" },
          { code: "w3-text-red, w3-text-white", desc: "टेक्स्ट कलर्स" },
          { code: "w3-hover-blue, w3-hover-opacity", desc: "माउस हॉवर इफेक्ट्स" },
          { code: "w3-tiny, w3-small, w3-large, w3-xlarge, w3-jumbo", desc: "फॉन्ट साइजेस (jumbo 64px)" }
        ]
      },
      {
        title: "12-Column Responsive Grid",
        items: [
          { code: "w3-row", desc: "ग्रिड रो कंटेनर" },
          { code: "w3-row-padding", desc: "8px पैडिंग वाली ग्रिड रो" },
          { code: "w3-col s12 m6 l4", desc: "मोबाइल पर 12, टैबलेट पर 6, डेस्कटॉप पर 4 कॉलम" }
        ]
      },
      {
        title: "Tables & Images",
        items: [
          { code: "w3-table", desc: "मानक W3.CSS टेबल" },
          { code: "w3-striped", desc: "ज़ेबरा स्ट्राइप्ड पंक्तियां" },
          { code: "w3-bordered", desc: "पंक्तियों के नीचे हल्की बॉर्डर" },
          { code: "w3-hoverable", desc: "हॉवर पर पंक्ति हाइलाइट होना" },
          { code: "w3-image", desc: "रिस्पॉन्सिव इमेज (अधिकतम चौड़ाई 100%)" },
          { code: "w3-circle", desc: "गोल / वृत्ताकार इमेज बनाना" },
          { code: "w3-round", desc: "गोल कोनों वाली इमेज" }
        ]
      }
    ]
  },
  {
    id: "javascript-cheat-sheet",
    unit: 6,
    title: "JavaScript & AngularJS Cheat Sheet",
    hindiTitle: "जावास्क्रिप्ट एवं एंगुलरजेएस चीट शीट",
    category: "JavaScript",
    description: "Variables, operators, DOM events, popup dialogs, form validations, and AngularJS directives.",
    sections: [
      {
        title: "Variables & Scope",
        items: [
          { code: "var x = 10;", desc: "फंक्शन-स्कोप्ड, री-डिक्लेयर संभव (पुराना ES5)" },
          { code: "let y = 20;", desc: "ब्लॉक-स्कोप्ड, री-असाइन संभव (आधुनिक ES6)" },
          { code: "const PI = 3.14;", desc: "ब्लॉक-स्कोप्ड, स्थिर मान (अपरिवर्तनीय)" }
        ]
      },
      {
        title: "Popup Boxes",
        items: [
          { code: "alert('Hello!');", desc: "चेतावनी सूचना बॉक्स (कोई रिटर्न मान नहीं)" },
          { code: "let res = confirm('Delete?');", desc: "पुष्टिकरण बॉक्स (true या false लौटाता है)" },
          { code: "let name = prompt('Name:');", desc: "इनपुट बॉक्स (यूजर द्वारा दर्ज स्ट्रिंग लौटाता है)" }
        ]
      },
      {
        title: "Common DOM Events",
        items: [
          { code: "onclick", desc: "एलिमेंट पर माउस क्लिक होने पर" },
          { code: "onmouseover", desc: "माउस पॉइंटर एलिमेंट पर आने पर" },
          { code: "onmouseout", desc: "माउस पॉइंटर एलिमेंट से बाहर जाने पर" },
          { code: "onsubmit", desc: "फॉर्म सबमिट बटन दबाने पर" },
          { code: "onchange", desc: "इनपुट या ड्रॉपडाउन मान बदलने पर" },
          { code: "onload", desc: "पेज/इमेज पूरी तरह लोड होने पर" }
        ]
      },
      {
        title: "AngularJS Directives",
        items: [
          { code: "ng-app=\"myApp\"", desc: "AngularJS ऐप्लिकेशन को इनिशियलाइज़ करना" },
          { code: "ng-model=\"user.name\"", desc: "इनपुट और डेटा के बीच 2-Way Data Binding" },
          { code: "ng-bind=\"user.name\"", desc: "HTML कंटेंट में डेटा बाइंड करना" },
          { code: "{{ 5 + 5 }}", desc: "AngularJS एक्सप्रेशन (मान का मूल्यांकन)" },
          { code: "ng-repeat=\"item in list\"", desc: "ऐरे के प्रत्येक तत्व के लिए लूप चलाना" },
          { code: "ng-show / ng-hide", desc: "शर्त के आधार पर एलिमेंट दिखाना या छिपाना" },
          { code: "ng-click=\"doAction()\"", desc: "AngularJS क्लिक इवेंट" }
        ]
      }
    ]
  },
  {
    id: "publishing-cheat-sheet",
    unit: 8,
    title: "Web Publishing & Browsing Cheat Sheet",
    hindiTitle: "वेब पब्लिशिंग एवं प्रोटोकॉल्स चीट शीट",
    category: "Publishing",
    description: "Standard ports, HTTP methods, status codes, hosting models, and browser engines.",
    sections: [
      {
        title: "Important Protocols & Default Ports",
        items: [
          { code: "HTTP -> Port 80", desc: "HyperText Transfer Protocol (असुरक्षित प्लेनटेक्स्ट)" },
          { code: "HTTPS -> Port 443", desc: "HTTP Secure (SSL/TLS एन्क्रिप्टेड)" },
          { code: "FTP -> Port 21", desc: "File Transfer Protocol (फाइल अपलोड/डाउनलोड)" },
          { code: "SSH / SFTP -> Port 22", desc: "Secure Shell / Secure FTP" },
          { code: "DNS -> Port 53", desc: "Domain Name System (नाम से IP समाधान)" },
          { code: "SMTP -> Port 25", desc: "Simple Mail Transfer Protocol (ईमेल भेजना)" }
        ]
      },
      {
        title: "Crucial HTTP Status Codes",
        items: [
          { code: "200 OK", desc: "रिक्वेस्ट सफल, डेटा सफलतापूर्वक मिला" },
          { code: "301 Moved Permanently", desc: "पेज का URL स्थायी रूप से बदल गया है" },
          { code: "400 Bad Request", desc: "क्लाइंट का सिंटैक्स अमान्य है" },
          { code: "403 Forbidden", desc: "सर्वर ने एक्सेस देने से मना कर दिया" },
          { code: "404 Not Found", desc: "मांगा गया पेज या फाइल सर्वर पर मौजूद नहीं है" },
          { code: "500 Internal Server Error", desc: "सर्वर साइड स्क्रिप्ट में खराबी" },
          { code: "503 Service Unavailable", desc: "सर्वर ओवरलोड या मेंटेनेंस पर है" }
        ]
      },
      {
        title: "Browser Rendering Engines",
        items: [
          { code: "Blink", desc: "Google Chrome, Microsoft Edge, Opera, Brave" },
          { code: "Gecko", desc: "Mozilla Firefox" },
          { code: "WebKit", desc: "Apple Safari" }
        ]
      }
    ]
  }
];

export const masterCheatSheets = cheatSheetsData;
