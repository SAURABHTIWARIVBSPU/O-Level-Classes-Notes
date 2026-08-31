# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 2: Editors (एडिटर्स) — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 2 Name:** Editors (एडिटर्स)
- **Exam Weightage:** Combined with Unit 1 (Introduction to Web Design) & Unit 3 (HTML Basics) = **25 Marks** in written examination.
- **Key Focus Areas:** 
  - What is a Text Editor vs Word Processor?
  - Downloading and installing free editors (Notepad++, Sublime Text, VS Code).
  - File creation, editing, syntax highlighting, and saving with proper extensions (`.html`, `.css`, `.js`).
  - Essential keyboard shortcuts, character encodings (UTF-8), and running code in web browsers.

---

# 1. Introduction to Text Editors (टेक्स्ट एडिटर क्या है?)

### 1.1 What is a Text Editor? (टेक्स्ट एडिटर की परिभाषा)
- **English:** A **Text Editor** is a type of computer program that allows users to create, view, open, and edit plain text files without adding hidden formatting characters (like fonts, margins, or page breaks).
- **हिन्दी सरल शब्दों में:** **Text Editor (टेक्स्ट एडिटर)** एक ऐसा सॉफ्टवेयर प्रोग्राम होता है जिसका उपयोग सादा टेक्स्ट (Plain Text) फाइलों को बनाने, खोलने और संपादित (Edit) करने के लिए किया जाता है। वेब डेवलपमेंट (HTML, CSS, JavaScript) में कोड लिखने के लिए टेक्स्ट एडिटर की ही आवश्यकता होती है।

```
+-------------------------------------------------------------------------------+
|                       TEXT EDITOR VS. WORD PROCESSOR                          |
+-------------------------------------------------------------------------------+
| Feature              | Text Editor (e.g. Notepad++)  | Word Processor (MS Word)|
+----------------------+-------------------------------+-------------------------+
| Output Format        | Raw / Plain Text (.txt, .html)| Formatted (.docx, .rtf) |
| Hidden Formatting    | NO (Pure code only)           | YES (Styles, fonts, XML)|
| Source Code Editing  | Perfect for HTML, CSS, JS, C  | Unsuitable for coding   |
| Execution in Browser | Direct execution              | Cannot run in browser   |
+-------------------------------------------------------------------------------+
```

> 💡 **EXAM TIP (परीक्षा में पूछा जाने वाला प्रश्न):**  
> कभी भी HTML कोड लिखने के लिए **MS Word** का उपयोग नहीं किया जाता है, क्योंकि MS Word टेक्स्ट के साथ अदृश्य स्टाइल कोड और बाइनरी डेटा जोड़ देता है, जिससे ब्राउज़र HTML को सही तरीके से रेंडर नहीं कर पाता।

---

# 2. Popular Editors for Web Designing (वेब डिजाइनिंग के प्रमुख एडिटर्स)

NIELIT M2-R5.1 सिलेबस में विशेष रूप से निम्नलिखित एडिटर्स शामिल हैं:
1. **Notepad++** (ओपन सोर्स, हल्का और सबसे लोकप्रिय)
2. **Sublime Text** (सुपरफास्ट, आधुनिक और फीचर-रिच)
3. **Visual Studio Code (VS Code)** (माइक्रोसॉफ्ट का आधुनिक फ्री एडिटर)
4. **Basic Notepad** (Windows का इन-बिल्ट बेसिक एडिटर)

---

### 2.1 Notepad++ (नोटपैड++)

- **What is Notepad++?**  
  - Notepad++ एक फ्री और ओपन-सोर्स (GNU General Public License) सोर्स कोड एडिटर है।
  - यह **C++** भाषा में लिखा गया है और **Scintilla** एडिटिंग कंपोनेंट पर आधारित है।
  - यह केवल **Microsoft Windows** ऑपरेटिंग सिस्टम के लिए उपलब्ध है।
- **Official Website:** `https://notepad-plus-plus.org`

#### Key Features of Notepad++ (Notepad++ की मुख्य विशेषताएं):
1. **Syntax Highlighting & Syntax Folding:** विभिन्न प्रोग्रामिंग और मार्कअप भाषाओं (HTML, CSS, JavaScript, PHP, C, Python आदि) के टैग्स और कीवर्ड्स को अलग-अलग रंगों (Colors) में दिखाता है।
2. **Tabbed Document Interface (Multi-Document):** एक ही विंडो में एक साथ कई फाइलों को टैब (Tabs) के रूप में खोलकर काम किया जा सकता है।
3. **Auto-Completion:** टैग्स, फ़ंक्शन और शब्दों को टाइप करते समय सुझाव (Suggestions) देता है।
4. **Multi-Language Support:** 80 से अधिक प्रोग्रामिंग भाषाओं को सपोर्ट करता है।
5. **Search and Replace with Regex:** Regular Expressions (रेगेक्स) का उपयोग करके टेक्स्ट को खोजने और बदलने की सुविधा।
6. **Macro Recording and Playback:** बार-बार दोहराए जाने वाले कीबोर्ड एक्शन को रिकॉर्ड करके प्ले करने की सुविधा।
7. **Plugin Support:** 'Plugin Admin' के माध्यम से नए टूल्स और एक्सटेंशन जोड़े जा सकते हैं।

```
+-------------------------------------------------------------------------------+
|                      NOTEPAD++ INTERFACE OVERVIEW                             |
+-------------------------------------------------------------------------------+
| [File] [Edit] [Search] [View] [Encoding] [Language] [Settings] [Plugins] [Run]|
| +---------------------------------------------------------------------------+ |
| | [index.html] x | [style.css] x | [script.js] x                            | |
| +---------------------------------------------------------------------------+ |
| | 1 <!DOCTYPE html>                                                         | |
| | 2 <html>                                                                  | |
| | 3   <head><title>My Webpage</title></head>                                | |
| | 4   <body>                                                                | |
| | 5     <h1 style="color: blue;">Welcome to O Level</h1>                    | |
| | 6   </body>                                                               | |
| | 7 </html>                                                                 | |
| +---------------------------------------------------------------------------+ |
| | Line: 5  Col: 12  Sel: 0 | Windows (CR LF) | UTF-8 | INS                  | |
+-------------------------------------------------------------------------------+
```

---

### 2.2 Sublime Text Editor (सबलाइम टेक्स्ट एडिटर)

- **What is Sublime Text?**  
  - Sublime Text एक शक्तिशाली, क्रॉस-प्लेटफॉर्म (Windows, macOS, Linux) सोर्स कोड एडिटर है।
  - इसे **Jon Skinner** द्वारा विकसित किया गया था और यह **Python** और **C++** पर आधारित है।
- **Official Website:** `https://www.sublimetext.com`

#### Key Features of Sublime Text:
1. **Goto Anything (`Ctrl + P`):** कुछ ही कीस्ट्रोक्स में किसी भी फाइल, फंक्शन या लाइन पर तुरंत जंप करने की सुविधा।
2. **Multiple Selections (`Ctrl + D`):** एक साथ कई जगहों पर टेक्स्ट को सेलेक्ट करके एक साथ एडिट (Multi-cursor editing) करने की सुविधा।
3. **Command Palette (`Ctrl + Shift + P`):** एडिटर के सभी कमांड्स, सेटिंग्स और पैकेज मैनेजर को तुरंत एक्सेस करने का मेन्यू।
4. **Distraction-Free Mode (`Shift + F11`):** फुल स्क्रीन मोड जिसमें केवल आपका कोड दिखाई देता है।
5. **Split Editing:** एक साथ 2, 3 या 4 फाइलों को अलग-अलग कॉलम/ग्रिड में रखकर साइड-बाई-साइड काम करना।
6. **Package Control:** अनगिनत थर्ड-पार्टी प्लगइन्स (Emmet, ColorPicker, Linter आदि) इनस्टॉल करने की सुविधा।

---

### 2.3 Visual Studio Code (VS Code) — Additional Modern Context
- विकसित किया: **Microsoft**
- प्लेटफॉर्म: Windows, macOS, Linux (Cross-platform)
- **Built-in Features:** इन-बिल्ट टर्मिनल, गिट (Git) वर्जन कंट्रोल, इंटेलिजेंस (IntelliSense) कोड कम्पलीशन, और लाइव सर्वर (Live Server) एक्सटेंशन।

---

# 3. File Operations in Editors (फाइल ऑपरेशन्स: निर्माण, संपादन, और सेविंग)

### 3.1 Step-by-Step: Creating and Saving Web Files

```
+-------------------------------------------------------------------------------+
|                       FILE CREATION & WORKFLOW CYCLE                          |
+-------------------------------------------------------------------------------+
| 1. Open Editor (Notepad++ / Sublime Text)                                      |
|    └── Press Ctrl + N (Create New File)                                       |
|                                                                               |
| 2. Write Web Code                                                             |
|    └── Type standard HTML5 / CSS / JS code                                    |
|                                                                               |
| 3. Save File (Ctrl + S)                                                       |
|    ├── Choose Directory / Folder                                              |
|    ├── Enter File Name: index.html  (NOT index.txt)                           |
|    ├── Save as type: All Types (*.*) or Hyper Text Markup Language (*.html)   |
|    └── Character Encoding: UTF-8                                              |
|                                                                               |
| 4. Preview / Run in Web Browser                                               |
|    ├── Double-click the saved .html file OR                                   |
|    └── In Notepad++: Menu -> Run -> Launch in Chrome / Firefox                |
+-------------------------------------------------------------------------------+
```

#### Important Standard File Extensions (महत्वपूर्ण फाइल एक्सटेंशन्स):
| File Type | Standard Extension | Purpose (उद्देश्य) |
|:---|:---|:---|
| **HTML Webpage** | `.html` or `.htm` | वेबपेज की संरचना (Structure & Markup) |
| **Cascading Style Sheet** | `.css` | वेबपेज की स्टाइलिंग व डिजाइनिंग (Presentation) |
| **JavaScript File** | `.js` | वेबपेज में इंटरएक्टिविटी और लॉजिक (Functionality) |
| **Plain Text File** | `.txt` | सामान्य बिना किसी फॉर्मेटिंग का टेक्स्ट |
| **PHP Script** | `.php` | सर्वर-साइड स्क्रिप्टिंग फाइल |

---

# 4. Important Concepts & Terminology (महत्वपूर्ण शब्दावली)

### 4.1 Syntax Highlighting (सिंटैक्स हाइलाइटिंग)
- **English:** The feature of displaying source code in different colors and fonts according to the category of terms (tags, attributes, values, keywords, strings, comments).
- **हिन्दी:** जब एडिटर कोड के विभिन्न भागों (जैसे टैग्स, एट्रिब्यूट्स, वैल्यूज, कमेंट्स) को अलग-अलग रंगों में प्रदर्शित करता है, तो इसे **Syntax Highlighting** कहते हैं।
- **फायदा:** कोड पढ़ने में आसान होता है और स्पेलिंग या टैग बंद न करने की गलतियाँ तुरंत पकड़ में आ जाती हैं।

### 4.2 Auto Indentation & Code Folding (इंडेंटेशन और कोड फोल्डिंग)
- **Indentation (इंडेंटेशन):** चाइल्ड टैग्स को पैरेंट टैग के अंदर कुछ स्पेस (Tab) देकर लिखना ताकि कोड की हायरार्की स्पष्ट दिखे।
- **Code Folding (कोड फोल्डिंग):** कोड के बड़े ब्लॉक्स (जैसे `<div>...</div>` या `<script>...</script>`) को '+' और '-' आइकॉन पर क्लिक करके सिकोड़ने (Collapse) या फैलाने (Expand) की सुविधा।

### 4.3 Character Encoding: UTF-8 (कैरेक्टर एन्कोडिंग)
- **UTF-8 (8-bit Unicode Transformation Format):**
  - यह वेब पर सबसे अधिक उपयोग होने वाली स्टैंडर्ड कैरेक्टर एन्कोडिंग है।
  - यह दुनिया की लगभग सभी भाषाओं (हिन्दी, अंग्रेज़ी, चीनी, अरबी, इमोजी आदि) के अक्षरों और प्रतीकों को बाइनरी कोड में सुरक्षित रूप से बदलती है।
  - HTML5 में इसे हेड सेक्शन में परिभाषित किया जाता है:
    ```html
    <meta charset="UTF-8">
    ```

---

# 5. Essential Shortcut Keys for Exam (महत्वपूर्ण शॉर्टकट कीज)

| Shortcut Key | General Action (सामान्य कार्य) | Notepad++ / Sublime Action |
|:---|:---|:---|
| **`Ctrl + N`** | New File | नया खाली डॉक्यूमेंट खोलना |
| **`Ctrl + O`** | Open File | पहले से मौजूद फाइल को खोलना |
| **`Ctrl + S`** | Save | वर्तमान फाइल को सुरक्षित (Save) करना |
| **`Ctrl + Shift + S`** | Save As / Save All | सभी खुली फाइलों को सेव करना |
| **`Ctrl + F`** | Find | डॉक्यूमेंट में टेक्स्ट खोजना |
| **`Ctrl + H`** | Replace | टेक्स्ट खोजकर किसी अन्य शब्द से बदलना |
| **`Ctrl + Z`** | Undo | अंतिम क्रिया को पूर्ववत (रद्द) करना |
| **`Ctrl + Y`** | Redo | पूर्ववत की गई क्रिया को पुनः लागू करना |
| **`Ctrl + /`** | Toggle Comment | चुनी हुई लाइन पर कमेंट लगाना या हटाना |
| **`Ctrl + D`** | Duplicate Line (Notepad++) | वर्तमान लाइन की हूबहू कॉपी अगली लाइन पर बनाना |
| **`F5`** | Run / Launch (Notepad++) | 'Run' डायलॉग बॉक्स खोलना (ब्राउज़र में रन करना) |
| **`Ctrl + W`** | Close Tab | वर्तमान एक्टिव टैब/फाइल को बंद करना |
| **`Ctrl + Shift + T`**| Reopen Closed Tab | गलती से बंद हुए अंतिम टैब को दोबारा खोलना |

---

# 🔥 NIELIT Exam Golden Points (परीक्षा उपयोगी मुख्य बिंदु)

1. **Notepad++** केवल **Windows OS** पर काम करता है और यह **C++** में लिखा गया है।
2. **Sublime Text** क्रॉस-प्लेटफॉर्म है (Windows, Mac, Linux तीनों पर चलता है) और यह **Python API** को सपोर्ट करता है।
3. वेबपेज की होमपेज फाइल का मानक नाम हमेशा **`index.html`** रखा जाता है।
4. यदि HTML फाइल को `.txt` एक्सटेंशन से सेव कर दिया जाए, तो ब्राउज़र उसे वेबपेज के रूप में रेंडर न करके सादा टेक्स्ट (Plain text) के रूप में दिखाएगा।
5. **UTF-8** का पूर्ण रूप **8-bit Unicode Transformation Format** है।
6. **WYSIWYG** का पूर्ण रूप **What You See Is What You Get** होता है (जैसे Adobe Dreamweaver), जिसमें बिना कोड लिखे विजुअल ड्रैग-एंड-ड्रॉप से वेबपेज बन जाता है।
