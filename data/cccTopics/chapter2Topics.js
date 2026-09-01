// CCC Chapter 2: Introduction to Operating System
export const chapter2Topics = [
  {
    chapterNumber: 2,
    topicNumber: 1,
    slug: "basics-of-operating-system",
    title: "Basics of Operating System (Desktop, Laptop & Mobile)",
    hindiTitle: "ऑपरेटिंग सिस्टम की मूल बातें (डेस्कटॉप, लैपटॉप एवं मोबाइल OS)",
    definitionEnglish: "An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs, acting as an interface between user and hardware.",
    definitionHindi: "ऑपरेटिंग सिस्टम (OS) वह सिस्टम सॉफ्टवेयर है जो कंप्यूटर के समस्त हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन करता है तथा उपयोगकर्ता एवं हार्डवेयर के मध्य एक सहज माध्यम (Interface) प्रदान करता है।",
    simpleWords: "कंप्यूटर का मैनेजर जो कंप्यूटर चालू करने से लेकर बंद होने तक सभी प्रोग्रामों और फाइलों की देखरेख करता है।",
    examImportance: "Extreme (Functions of OS, GUI vs CLI, and types of OS in CCC)",
    detailedExplanation: `### 1. ऑपरेटिंग सिस्टम के प्रमुख कार्य (Functions of OS):
- **Process Management (प्रोसेस प्रबंधन)**: CPU समय का विभिन्न प्रोग्रामों में आवंटन (Scheduling).
- **Memory Management (मेमोरी प्रबंधन)**: RAM का आवंटन और डी-एलोकेशन करना।
- **File Management (फाइल प्रबंधन)**: फाइलों और फोल्डरों का भंडारण, नामकरण, सुरक्षा और डायरेक्टरी संरचना।
- **Device Management (डिवाइस प्रबंधन)**: I/O डिवाइसेज का नियंत्रण (Device Drivers के माध्यम से)।
- **Security & Protection (सुरक्षा)**: पासवर्ड, यूजर ऑथेंटिकेशन और अनधिकृत पहुंच से सुरक्षा।

### 2. यूजर इंटरफेस के प्रकार (Types of User Interface):
1. **GUI (Graphical User Interface)**:
   - ग्राफिक्स, आइकन्स, विंडो और माउस पॉइंटर (WIMP - Windows, Icons, Menus, Pointer) पर आधारित।
   - यूजर-फ्रेंडली और सीखने में आसान।
   - **उदाहरण**: Windows 11, Ubuntu Linux (GNOME/Unity), macOS.
2. **CLI / CUI (Command Line Interface / Character User Interface)**:
   - टेक्स्ट कमांड लिखकर टाइप करना पड़ता है। माउस का प्रयोग नहीं होता।
   - **उदाहरण**: MS-DOS, Linux Terminal (Bash).

### 3. ऑपरेटिंग सिस्टम का वर्गीकरण:
- **Single-User Single-Tasking**: एक समय में एक यूजर, एक काम (जैसे MS-DOS).
- **Single-User Multi-Tasking**: एक यूजर कई काम एक साथ कर सकता है (जैसे Windows 11, macOS).
- **Multi-User Multi-Tasking**: एक साथ कई उपयोगकर्ता नेटवर्क पर काम कर सकते हैं (जैसे Linux, Unix).
- **Real-Time OS (RTOS)**: सख्त समय सीमा (Deadlines) में काम करने वाले OS (जैसे मिसाइल, एयरबैग, रोबोटिक्स).`,
    realWorldAnalogy: "ऑपरेटिंग सिस्टम एक रेस्टोरेंट के मैनेजर की तरह है जो शेफ (CPU), वेटर (I/O) और ग्राहकों (Users) के बीच तालमेल बिठाता है।",
    importantPoints: [
      "OS यूजर और कंप्यूटर हार्डवेयर के बीच **इंटरफेस** का कार्य करता है।",
      "**GUI** का पूर्ण रूप **Graphical User Interface** और **CLI** का पूर्ण रूप **Command Line Interface** है।",
      "**Linux** एक मल्टी-यूजर, मल्टी-टास्किंग ओपन सोर्स ऑपरेटिंग सिस्टम है।",
      "**MS-DOS** एक सिंगल-यूजर, सिंगल-टास्किंग CUI आधारित ऑपरेटिंग सिस्टम है।"
    ],
    commonMistakes: [
      "Linux को सिंगल-यूजर समझना (Linux एक Multi-User & Multi-Tasking OS है)।",
      "WIMP का अर्थ गलत समझना (WIMP = Windows, Icons, Menus, Pointer)."
    ],
    examTips: [
      "GUI का आधार क्या है? ➔ **WIMP (Windows, Icons, Menus, Pointer)**।",
      "कंप्यूटर बूट होते समय सबसे पहले मेमोरी में क्या लोड होता है? ➔ **Operating System Kernel**।"
    ],
    quickRevision: "OS manages CPU, Memory, Files, and Devices. Interfaces: GUI (visual, WIMP) vs CLI (text commands). Linux = Multi-user/Multi-tasking.",
    practiceAssignment: "Windows में 'Win + R' दबाएं, 'cmd' लिखकर Command Prompt खोलें और 'dir' कमांड चलाकर CUI का अनुभव करें।",
    microQuiz: [
      {
        question: "GUI का पूर्ण रूप (Full Form) क्या है?",
        options: [
          { id: "A", text: "General User Interface" },
          { id: "B", text: "Graphical User Interface" },
          { id: "C", text: "Guided Utility Interface" },
          { id: "D", text: "Graphic Universal Integration" }
        ],
        correctAnswer: "B",
        explanation: "GUI का पूरा नाम 'Graphical User Interface' होता है जो ग्राफिकल आइकन्स और माउस पॉइंटर पर आधारित होता है।"
      },
      {
        question: "निम्न में से कौन सा एक मल्टी-यूजर (Multi-User) ऑपरेटिंग सिस्टम है?",
        options: [
          { id: "A", text: "MS-DOS" },
          { id: "B", text: "Linux" },
          { id: "C", text: "Windows 95" },
          { id: "D", text: "Symbian" }
        ],
        correctAnswer: "B",
        explanation: "Linux एक शक्तिशाली मल्टी-यूजर और मल्टी-टास्किंग ऑपरेटिंग सिस्टम है जहां कई उपयोगकर्ता एक साथ संसाधनों को साझा कर सकते हैं।"
      }
    ]
  },
  {
    chapterNumber: 2,
    topicNumber: 2,
    slug: "user-interface-taskbar-icons-shortcuts",
    title: "User Interface: Taskbar, Icons & Shortcuts",
    hindiTitle: "यूजर इंटरफेस: टास्कबार, आइकन्स एवं शॉर्टकट्स",
    definitionEnglish: "The desktop user interface consists of the Desktop workspace, Taskbar (Start menu, system tray, pinned apps), Icons (visual representations of files/folders/apps), and Shortcuts for rapid access.",
    definitionHindi: "डेस्कटॉप यूजर इंटरफेस में मुख्य डेस्कटॉप बैकग्राउंड, टास्कबार (स्टार्ट मेनू, सिस्टम ट्रे, क्विक लॉन्च), आइकन्स (प्रोग्रामों और फाइलों के ग्राफिक प्रतीक) और शॉर्टकट शामिल होते हैं।",
    simpleWords: "कंप्यूटर ऑन करने पर सामने दिखने वाली पहली स्क्रीन जहां नीचे एक पट्टी (Taskbar) और उस पर छोटे-छोटे चित्र (Icons) होते हैं।",
    examImportance: "High (Taskbar position, Recycle Bin, and desktop shortcuts in CCC)",
    detailedExplanation: `### 1. डेस्कटॉप और उसके प्रमुख घटक (Desktop Components):
- **Desktop (डेस्कटॉप)**: कंप्यूटर बूट होने के बाद दिखाई देने वाली मुख्य स्क्रीन का बैकग्राउंड।
- **Taskbar (टास्कबार)**:
  - स्क्रीन के सबसे नीचे स्थित हॉरिजॉन्टल पट्टी (इसे स्क्रीन के चारों तरफ—Top, Bottom, Left, Right पर सेट किया जा सकता है)।
  - **Start Button (स्टार्ट बटन)**: बाईं ओर, सभी इंस्टॉल किए गए प्रोग्रामों की सूची।
  - **Pinned Applications**: अक्सर उपयोग होने वाले प्रोग्रामों के त्वरित लिंक।
  - **System Tray / Notification Area**: दाईं ओर, जिसमें घड़ी (Clock), कैलेंडर, बैटरी स्तर, वाई-फाई और वॉल्यूम कंट्रोल होता है।
  - **Show Desktop Button / Peek**: सबसे दाएं कोने में सभी विंडोज को एक साथ मिनिमाइज करने का बटन (\`Win + D\`).

### 2. आइकन्स के प्रकार (Types of Icons):
- **System Icons**:
  - **This PC / Computer**: ड्राइव्स और कनेक्टेड स्टोरेज देखने के लिए।
  - **Recycle Bin**: डिलीट की गई फाइलों का अस्थायी डस्टबिन (फाइलें वापस रिस्टोर की जा सकती हैं)।
  - **Control Panel / Settings**: सिस्टम सेटिंग्स बदलने के लिए।
  - **Network**: लोकल नेटवर्क शेयरिंग के लिए।
- **Shortcut Icons**: फाइलों या सॉफ्टवेयर के त्वरित रास्ते, जिनके निचले बाएं कोने में एक छोटा **तीर (Arrow Overlay)** बना होता है।

### 3. आवश्यक डेस्कटॉप शॉर्टकट कीज:
- \`Win + D\`: सभी खुली विंडोज़ को मिनिमाइज करके डेस्कटॉप दिखाना।
- \`Win + E\`: फाइल एक्सप्लोरर (File Explorer) खोलना।
- \`Alt + Tab\`: खुले हुए प्रोग्रामों के बीच स्विच करना।
- \`Win + L\`: कंप्यूटर की स्क्रीन को लॉक (Lock) करना।
- \`Shift + Delete\`: फाइल को Recycle Bin में भेजे बिना **स्थायी रूप से हटाना (Permanently Delete)**।`,
    realWorldAnalogy: "टास्कबार आपकी कलाई घड़ी और टूलबेल्ट है जहां से आप तुरंत कोई भी औजार निकाल सकते हैं।",
    importantPoints: [
      "टास्कबार को स्क्रीन के **चारों किनारों (Top, Bottom, Left, Right)** पर स्थानांतरित किया जा सकता है।",
      "शॉर्टकट आइकन के कोने पर एक छोटा **तीर (Arrow)** का निशान होता है।",
      "**Shift + Delete** दबाने से फाइल Recycle Bin में जाए बिना स्थायी रूप से डिलीट हो जाती है।",
      "घड़ी और नोटिफिकेशन टास्कबार के **System Tray (Notification Area)** में दिखाई देते हैं।"
    ],
    commonMistakes: [
      "शॉर्टकट डिलीट करने से मूल फाइल का डिलीट होना समझना (शॉर्टकट हटाने से मूल फाइल डिलीट नहीं होती)।",
      "Shift+Delete के बाद फाइल Recycle Bin में ढूंढना।"
    ],
    examTips: [
      "CCC प्रश्न: 'टास्कबार की डिफॉल्ट स्थिति क्या होती है?' ➔ **Bottom (नीचे)**।",
      "स्थायी डिलीट करने की शॉर्टकट कुंजी: **Shift + Delete**।"
    ],
    quickRevision: "Taskbar (Start + Pinned + System Tray Clock). Icons: System (Recycle Bin, This PC) & Shortcuts (Arrow badge). Shift+Del = Permanent Delete.",
    practiceAssignment: "डेस्कटॉप पर किसी भी ऐप का शॉर्टकट बनाएं और Win+D दबाकर डेस्कटॉप पर तुरंत जाने का अभ्यास करें।",
    microQuiz: [
      {
        question: "किसी फाइल या फोल्डर को बिना रीसायकल बिन में भेजे हमेशा के लिए (Permanently) डिलीट करने का शॉर्टकट क्या है?",
        options: [
          { id: "A", text: "Delete" },
          { id: "B", text: "Shift + Delete" },
          { id: "C", text: "Ctrl + Delete" },
          { id: "D", text: "Alt + Delete" }
        ],
        correctAnswer: "B",
        explanation: "Shift + Delete दबाने पर फाइल सीधे डिस्क से हमेशा के लिए डिलीट हो जाती है और Recycle Bin में नहीं जाती।"
      },
      {
        question: "टास्कबार के किस भाग में सिस्टम क्लॉक (घड़ी) और नेटवर्क आइकन स्थित होते हैं?",
        options: [
          { id: "A", text: "Start Menu" },
          { id: "B", text: "Quick Launch" },
          { id: "C", text: "System Tray / Notification Area" },
          { id: "D", text: "Title Bar" }
        ],
        correctAnswer: "C",
        explanation: "टास्कबार के दाहिने कोने में स्थित क्षेत्र को System Tray या Notification Area कहा जाता है।"
      }
    ]
  },
  {
    chapterNumber: 2,
    topicNumber: 3,
    slug: "running-an-application",
    title: "Running and Managing Applications in OS",
    hindiTitle: "एप्लीकेशन रन करना और टास्क मैनेजर",
    definitionEnglish: "Running applications involves launching executable programs via Start Menu, Run Dialog (Win+R), or search, and managing running processes, CPU/RAM usage, and non-responsive tasks using the Task Manager.",
    definitionHindi: "एप्लीकेशन चलाने में स्टार्ट मेनू, रन डायलॉग बॉक्स (Win+R) या सर्च बार द्वारा प्रोग्राम शुरू करना और टास्क मैनेजर की सहायता से चल रहे प्रोसेस, रैम/सीपीयू उपयोग और अटके हुए (Hanging) प्रोग्रामों को बंद करना शामिल है।",
    simpleWords: "किसी सॉफ्टवेयर को खोलना और अगर कोई प्रोग्राम हैंग हो जाए तो टास्क मैनेजर से उसे जबरन बंद (End Task) करना।",
    examImportance: "Medium to High (Run command shortcuts, Task Manager shortcut keys in CCC)",
    detailedExplanation: `### 1. एप्लीकेशन शुरू करने के तरीके (Launching Apps):
- **Start Menu Search**: स्टार्ट बटन दबाकर ऐप का नाम (जैसे 'Writer' या 'Calc') टाइप करके Enter दबाना।
- **Run Dialog Box (\`Win + R\`)**:
  - \`soffice\`: LibreOffice सूट खोलना
  - \`calc\`: कैलकुलेटर खोलना
  - \`notepad\`: नोटपैड खोलना
  - \`mspaint\`: एमएस पेंट खोलना
  - \`control\`: कंट्रोल पैनल खोलना
- **Desktop Shortcut / Pin to Taskbar**: आइकन पर डबल क्लिक करके या टास्कबार से सिंगल क्लिक करके।

### 2. टास्क मैनेजर (Task Manager - \`Ctrl + Shift + Esc\` या \`Ctrl + Alt + Delete\`):
- **कार्य**:
  - वर्तमान में चल रहे सभी बैकग्राउंड और फोरग्राउंड प्रोसेस की सूची देखना।
  - CPU, RAM, Disk और Network का प्रतिशत उपयोग (Resource Monitoring) चेक करना।
  - **End Task (एंड टास्क)**: यदि कोई प्रोग्राम हैंग या अनरिस्पॉन्सिव हो जाए, तो उसे फोर्स क्लोज (जबरदस्ती बंद) करना।
  - **Startup Apps**: कंप्यूटर चालू होते ही अपने आप शुरू होने वाले प्रोग्रामों को इनेबल/डिसएबल करना ताकि बूट स्पीड तेज हो सके।`,
    realWorldAnalogy: "टास्क मैनेजर ट्रैफिक पुलिस की क्रेन की तरह है, जो सड़क पर जाम लगाने वाली खराब गाड़ी (हैंग प्रोग्राम) को खींचकर बाहर कर देती है।",
    importantPoints: [
      "Run डायलॉग बॉक्स खोलने का शॉर्टकट **Win + R** होता है।",
      "टास्क मैनेजर सीधे खोलने का शॉर्टकट **Ctrl + Shift + Esc** होता है।",
      "अटके हुए प्रोग्राम को बंद करने के लिए टास्क मैनेजर में **End Task** का प्रयोग करते हैं।"
    ],
    commonMistakes: [
      "कंप्यूटर हैंग होने पर सीधे पावर बटन बंद करना (पहले Task Manager से End Task करने का प्रयास करना चाहिए)।"
    ],
    examTips: [
      "टास्क मैनेजर की डायरेक्ट शॉर्टकट की: **Ctrl + Shift + Esc**।",
      "Run डायलॉग की शॉर्टकट: **Windows Key + R**।"
    ],
    quickRevision: "Run dialog (Win+R). Task Manager (Ctrl+Shift+Esc) monitors CPU/RAM and performs 'End Task' on frozen apps.",
    practiceAssignment: "Ctrl+Shift+Esc दबाकर टास्क मैनेजर खोलें और देखें कि कौन सा प्रोग्राम सबसे ज्यादा RAM उपयोग कर रहा है।",
    microQuiz: [
      {
        question: "टास्क मैनेजर (Task Manager) को सीधे खोलने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + Shift + Esc" },
          { id: "B", text: "Ctrl + Alt + Esc" },
          { id: "C", text: "Alt + F4" },
          { id: "D", text: "Win + T" }
        ],
        correctAnswer: "A",
        explanation: "Ctrl + Shift + Esc दबाने पर टास्क मैनेजर सीधे खुल जाता है।"
      }
    ]
  },
  {
    chapterNumber: 2,
    topicNumber: 4,
    slug: "operating-system-simple-settings",
    title: "OS Settings: Mouse, Date & Time, Display Settings",
    hindiTitle: "ओएस सेटिंग्स: माउस, दिनांक-समय, डिस्प्ले सेटिंग्स",
    definitionEnglish: "Operating system settings allow users to customize device hardware and environment preferences, including display resolution, system date & time zone, sound levels, mouse pointers, and primary/secondary button swapping.",
    definitionHindi: "ऑपरेटिंग सिस्टम सेटिंग्स उपयोगकर्ता को हार्डवेयर और सिस्टम प्राथमिकताओं को कस्टमाइज़ करने की सुविधा देती हैं; जैसे डिस्प्ले रेजोल्यूशन, सिस्टम डेट व टाइम ज़ोन, साउंड, और माउस बटनों की अदला-बदली।",
    simpleWords: "कंप्यूटर की सेटिंग्स जैसे वॉलपेपर बदलना, ब्राइटनेस ठीक करना, समय सेट करना और बाएं हाथ से काम करने वालों के लिए माउस बटन उलटना।",
    examImportance: "Medium (Mouse button swap, Display resolution, Date/Time settings in CCC)",
    detailedExplanation: `### 1. माउस सेटिंग्स (Mouse Properties):
- **Swap Primary and Secondary Buttons**: बाएं हाथ (Left-handed) के उपयोगकर्ताओं के लिए लेफ्ट और राइट क्लिक के कार्यों को आपस में बदलना।
- **Double-Click Speed**: फोल्डर खोलने की डबल क्लिक गति (Slow या Fast) समायोजित करना।
- **Pointer Speed & Trails**: माउस कर्सर की चाल और पॉइंटर ट्रेल प्रभाव।

### 2. डिस्प्ले सेटिंग्स (Display Settings):
- **Display Resolution**: स्क्रीन पर पिक्सल की संख्या (उदा. 1920x1080 Full HD). अधिक रेजोल्यूशन से चीजें अधिक स्पष्ट दिखती हैं।
- **Orientation**: Landscape (डिफॉल्ट क्षैतिज दृश्य) या Portrait (ऊर्ध्वाधर दृश्य).
- **Night Light / Blue Light Filter**: रात में आंखों के तनाव को कम करने के लिए पीली स्क्रीन टोन।

### 3. दिनांक एवं समय सेटिंग्स (Date and Time Settings):
- **Time Zone (समय क्षेत्र)**: भारत का मानक समय **UTC+05:30 (Chennai, Kolkata, Mumbai, New Delhi)** होता है।
- **Automatic Time Sync**: इंटरनेट टाइम सर्वर (NTP) से समय का स्वतः सिंक्रनाइज़ेशन।`,
    realWorldAnalogy: "स्मार्टफोन की सेटिंग्स में जाकर फॉन्ट साइज और डार्क मोड बदलने जैसा।",
    importantPoints: [
      "भारत का आधिकारिक टाइम ज़ोन **UTC+05:30 (IST - Indian Standard Time)** है।",
      "माउस में लेफ्ट हैंडेड यूजर के लिए प्राइमरी बटन बदला जा सकता है।",
      "स्क्रीन का डिफॉल्ट ओरिएंटेशन **Landscape** होता है।"
    ],
    commonMistakes: [
      "भारत के टाइम जोन को GMT+05:00 समझना (सही टाइम जोन **UTC/GMT +05:30** है)।"
    ],
    examTips: [
      "भारतीय मानक समय का टाइम ज़ोन क्या है? ➔ **UTC+05:30**।"
    ],
    quickRevision: "Settings customize Mouse (swap buttons), Display (Resolution, Landscape/Portrait), and Date/Time (India: UTC+05:30).",
    practiceAssignment: "अपने कंप्यूटर की सेटिंग्स में जाकर डिस्प्ले रेजोल्यूशन और भारतीय टाइम जोन की जांच करें।",
    microQuiz: [
      {
        question: "भारतीय मानक समय (IST) का सही टाइम ज़ोन (Time Zone) कौन सा है?",
        options: [
          { id: "A", text: "UTC + 05:00" },
          { id: "B", text: "UTC + 05:30" },
          { id: "C", text: "UTC + 06:00" },
          { id: "D", text: "UTC + 04:30" }
        ],
        correctAnswer: "B",
        explanation: "भारतीय मानक समय ग्रीनविच मीन टाइम (GMT/UTC) से 5 घंटे 30 मिनट आगे है (UTC+05:30)।"
      }
    ]
  },
  {
    chapterNumber: 2,
    topicNumber: 5,
    slug: "add-remove-programs-and-printers",
    title: "Add/Remove Programs and Printer Sharing",
    hindiTitle: "प्रोग्राम इंस्टॉल/अनइंस्टॉल करना एवं प्रिंटर शेयरिंग",
    definitionEnglish: "Managing installed software involves installing from setup files or package managers and cleanly uninstalling via Control Panel/Settings. Printer management includes adding local/network printers and setting default printers.",
    definitionHindi: "सॉफ्टवेयर प्रबंधन में सेटअप फाइल से प्रोग्राम इंस्टॉल करना तथा कंट्रोल पैनल/सेटिंग्स से पूरी तरह अनइंस्टॉल करना शामिल है। प्रिंटर प्रबंधन में नया प्रिंटर जोड़ना और नेटवर्क में प्रिंटर शेयर करना शामिल है।",
    simpleWords: "कंप्यूटर में नया ऐप डालना, फालतू ऐप हटाना (Uninstall), और एक प्रिंटर को कई कंप्यूटरों से जोड़ना (Printer Sharing)।",
    examImportance: "Medium (Uninstallation process, Default printer concept in CCC)",
    detailedExplanation: `### 1. प्रोग्राम्स जोड़ना और हटाना (Add/Remove Programs):
- **Installing a Program**:
  - Windows: \`.exe\` या \`.msi\` इंस्टॉलर फाइल को रन करके विज़ार्ड का पालन करना।
  - Linux (Ubuntu): Ubuntu Software Center या कमांड लाइन (\`sudo apt install package-name\`).
- **Uninstalling a Program**:
  - कभी भी केवल डेस्कटॉप से शॉर्टकट डिलीट करने से प्रोग्राम अनइंस्टॉल नहीं होता!
  - सही तरीका: **Settings ➔ Apps ➔ Installed Apps** या **Control Panel ➔ Programs and Features ➔ Uninstall** पर जाकर हटाना।

### 2. प्रिंटर जोड़ना एवं प्रबंधन (Printers & Scanners):
- **Add a Printer**: USB केबल या Wi-Fi नेटवर्क द्वारा प्रिंटर जोड़ना और ड्राइवर इंस्टॉल करना।
- **Default Printer (डिफॉल्ट प्रिंटर)**: जब यूजर प्रिंट कमांड (\`Ctrl + P\`) देता है, तो जो प्रिंटर अपने आप चयनित होता है उसे डिफॉल्ट प्रिंटर कहते हैं (हरे टिक मार्क द्वारा इंगित)।
- **Printer Sharing**: ऑफिस नेटवर्क (LAN) में एक ही भौतिक प्रिंटर को कई कंप्यूटरों से शेयर करना ताकि हर कंप्यूटर के लिए अलग प्रिंटर न खरीदना पड़े।
- **Print Queue (प्रिंट कतार)**: कतार में लगे डॉक्यूमेंट्स को देखना, प्रिंटिंग रोकना (Pause) या रद्द (Cancel) करना।`,
    realWorldAnalogy: "जैसे एक ऑफिस में 10 कर्मचारी हों लेकिन प्रिंटर एक ही हो, और सभी अपने कंप्यूटर से उसी एक प्रिंटर पर प्रिंट भेज सकें।",
    importantPoints: [
      "केवल डेस्कटॉप आइकन डिलीट करने से प्रोग्राम अनइंस्टॉल नहीं होता।",
      "डिफॉल्ट प्रिंटर पर सिस्टम में **हरा टिक (Green Checkmark)** का निशान लगा होता है।",
      "नेटवर्क में संसाधनों की बचत के लिए **Printer Sharing** की जाती है।"
    ],
    commonMistakes: [
      "सोचना कि Recycle Bin में आइकन डालने से प्रोग्राम अनइंस्टॉल हो गया।"
    ],
    examTips: [
      "CCC प्रश्न: 'क्या एक नेटवर्क पर एक प्रिंटर को कई कंप्यूटर साझा कर सकते हैं?' ➔ **हाँ (True)**।"
    ],
    quickRevision: "Clean uninstall via Control Panel -> Programs & Features. Default printer is auto-selected on Ctrl+P. Printer sharing saves cost on LAN.",
    practiceAssignment: "कंट्रोल पैनल में 'Devices and Printers' खोलकर देखें कि आपके सिस्टम में कौन सा प्रिंटर डिफॉल्ट सेट है।",
    microQuiz: [
      {
        question: "किसी सॉफ्टवेयर को कंप्यूटर से पूर्ण रूप से हटाने (Uninstall) का सही तरीका क्या है?",
        options: [
          { id: "A", text: "डेस्कटॉप आइकन को Recycle Bin में डालना" },
          { id: "B", text: "Control Panel ➔ Programs and Features से Uninstall करना" },
          { id: "C", text: "फाइल का नाम बदलकर Delete दबाना" },
          { id: "D", text: "C: ड्राइव से फोल्डर का नाम बदलना" }
        ],
        correctAnswer: "B",
        explanation: "सॉफ्टवेयर और उसकी रजिस्ट्री फाइलों को पूरी तरह हटाने के लिए Control Panel के Programs and Features में जाकर Uninstall किया जाता है।"
      }
    ]
  },
  {
    chapterNumber: 2,
    topicNumber: 6,
    slug: "file-and-folder-management",
    title: "File and Folder Management Operations",
    hindiTitle: "फाइल एवं फोल्डर प्रबंधन (Copy, Move, Rename, Delete)",
    definitionEnglish: "File management is the organizational hierarchy of storing data in files and directories (folders) using operations such as Create, Copy (Ctrl+C), Cut/Move (Ctrl+X), Paste (Ctrl+V), Rename (F2), and Delete.",
    definitionHindi: "फाइल प्रबंधन फाइलों और फोल्डरों की डायरेक्टरी संरचना में डेटा व्यवस्थित करने की प्रक्रिया है, जिसमें निर्माण, कॉपी (Ctrl+C), कट/मूव (Ctrl+X), पेस्ट (Ctrl+V), नाम बदलना (F2) और डिलीट करना शामिल है।",
    simpleWords: "कंप्यूटर में फाइलों को व्यवस्थित रखना, फोल्डर बनाना, फाइलों की कॉपी बनाना या उनका नाम बदलना।",
    examImportance: "Extreme (File operations shortcut keys like F2 for Rename are classic CCC questions)",
    detailedExplanation: `### 1. फाइल और फोल्डर की मूल अवधारणा:
- **File (फाइल)**: कंप्यूटर में सुरक्षित डेटा, टेक्स्ट या इमेज का संग्रह जिसका एक निश्चित नाम और एक्सटेंशन होता है (उदा. \`resume.odt\`).
- **Folder / Directory (फोल्डर)**: फाइलों और अन्य सब-फोल्डर्स को व्यवस्थित रखने का डिजिटल बॉक्स।

### 2. फाइल व फोल्डर पर मुख्य ऑपरेशन्स:
- **नया फोल्डर बनाना (New Folder)**: \`Ctrl + Shift + N\` (अति महत्वपूर्ण शॉर्टकट!)
- **नाम बदलना (Rename)**: फाइल चुनकर \`F2\` दबाना।
- **कॉपी करना (Copy)**: \`Ctrl + C\` (मूल फाइल वहीं रहती है और नई प्रतिलिपि बनती है).
- **कट/मूव करना (Cut/Move)**: \`Ctrl + X\` (मूल स्थान से हटकर नए स्थान पर जाती है).
- **पेस्ट करना (Paste)**: \`Ctrl + V\`
- **सब कुछ चुनना (Select All)**: \`Ctrl + A\`
- **खोज करना (Search)**: \`Ctrl + F\` या \`F3\`
- **गुण देखना (Properties)**: \`Alt + Enter\`

### 3. फाइल नामकरण के नियम:
- फाइल नाम में दो भाग होते हैं: **Primary Name** और **Extension** (डॉट \`.\` से अलग).
- फाइल नाम में कुछ विशेष वर्ण प्रतिबंधित होते हैं: \`\\ / : * ? " < > |\``,
    realWorldAnalogy: "फाइल एक कागज का दस्तावेज है, और फोल्डर वह दराज या फाइल-कवर है जिसमें बहुत से कागज संभालकर रखे जाते हैं।",
    importantPoints: [
      "नया फोल्डर बनाने का शॉर्टकट **Ctrl + Shift + N** होता है।",
      "फाइल या फोल्डर का नाम बदलने (Rename) की शॉर्टकट कुंजी **F2** होती है।",
      "फाइल की प्रॉपर्टीज देखने का शॉर्टकट **Alt + Enter** होता है।",
      "फाइल के नाम में **\\ / : * ? < > |** जैसे चिन्हों का प्रयोग नहीं किया जा सकता।"
    ],
    commonMistakes: [
      "Rename के लिए F1 समझना (F1 हमेशा Help के लिए होता है, Rename के लिए **F2** होता है)।",
      "नया फोल्डर बनाने के लिए Ctrl+N समझना (नया फोल्डर = **Ctrl+Shift+N**)."
    ],
    examTips: [
      "CCC का पसंदीदा प्रश्न: 'फ़ाइल/फ़ोल्डर का नाम बदलने की शॉर्टकट कुंजी क्या है?' ➔ **F2**।",
      "New Folder Shortcut ➔ **Ctrl + Shift + N**।"
    ],
    quickRevision: "New Folder (Ctrl+Shift+N), Rename (F2), Properties (Alt+Enter). Copy (Ctrl+C) vs Cut (Ctrl+X). Reserved chars: \\ / : * ? < > |",
    practiceAssignment: "डेस्कटॉप पर Ctrl+Shift+N दबाकर नया फोल्डर बनाएं, F2 दबाकर उसका नाम 'My_CCC_Notes' रखें।",
    microQuiz: [
      {
        question: "किसी चयनित फाइल या फोल्डर का नाम बदलने (Rename) के लिए किस फंक्शन कुंजी का प्रयोग किया जाता है?",
        options: [
          { id: "A", text: "F1" },
          { id: "B", text: "F2" },
          { id: "C", text: "F4" },
          { id: "D", text: "F5" }
        ],
        correctAnswer: "B",
        explanation: "F2 फंक्शन कुंजी का उपयोग किसी भी चयनित फाइल या फोल्डर का नाम बदलने (Rename) के लिए किया जाता है।"
      },
      {
        question: "विंडोज़ में नया फोल्डर (New Folder) बनाने की शॉर्टकट कुंजी क्या है?",
        options: [
          { id: "A", text: "Ctrl + N" },
          { id: "B", text: "Ctrl + Shift + N" },
          { id: "C", text: "Alt + Shift + N" },
          { id: "D", text: "Win + N" }
        ],
        correctAnswer: "B",
        explanation: "Ctrl + Shift + N शॉर्टकट का उपयोग तुरंत एक नया फोल्डर बनाने के लिए किया जाता है।"
      }
    ]
  },
  {
    chapterNumber: 2,
    topicNumber: 7,
    slug: "types-of-file-extensions",
    title: "Standard File Extensions and Formats",
    hindiTitle: "मानक फाइल एक्सटेंशन्स एवं उनके प्रकार",
    definitionEnglish: "A file extension is a suffix at the end of a filename (separated by a dot) that indicates the file format and tells the OS which application should open it.",
    definitionHindi: "फाइल एक्सटेंशन फाइल नाम के अंत में डॉट (.) के बाद लगने वाला प्रत्यय है जो फाइल के प्रारूप और प्रकार को दर्शाता है तथा ऑपरेटिंग सिस्टम को बताता है कि इसे किस सॉफ्टवेयर से खोलना है।",
    simpleWords: "फाइल की 'जाति' या उपनाम (Surname) जिससे पता चलता है कि फाइल गाना है (.mp3), वीडियो है (.mp4), फोटो है (.jpg) या डॉक्यूमेंट (.odt)।",
    examImportance: "Extreme (LibreOffice file extensions are asked in every single CCC exam without exception)",
    detailedExplanation: `### 1. लिब्रेऑफिस फाइल एक्सटेंशन्स (LibreOffice Extensions - अति महत्वपूर्ण):
- **LibreOffice Writer**: **\`.odt\`** (OpenDocument Text)
- **LibreOffice Calc**: **\`.ods\`** (OpenDocument Spreadsheet)
- **LibreOffice Impress**: **\`.odp\`** (OpenDocument Presentation)
- **LibreOffice Base**: **\`.odb\`** (OpenDocument Database)
- **LibreOffice Math**: **\`.odf\`** (OpenDocument Formula)
- **LibreOffice Draw**: **\`.odg\`** (OpenDocument Graphics)

### 2. एमएस ऑफिस फाइल एक्सटेंशन्स (MS Office Extensions):
- MS Word: \`.docx\` (पुराना: \`.doc\`)
- MS Excel: \`.xlsx\` (पुराना: \`.xls\`)
- MS PowerPoint: \`.pptx\` (पुराना: \`.ppt\`)

### 3. अन्य महत्वपूर्ण फाइल एक्सटेंशन्स:
- **Text & Documents**:
  - \`.txt\`: Plain Text (Notepad)
  - \`.rtf\`: Rich Text Format (WordPad)
  - \`.pdf\`: Portable Document Format (Adobe)
- **Images (छवियां)**:
  - \`.jpg\` / \`.jpeg\`: Joint Photographic Experts Group (फोटोग्राफी)
  - \`.png\`: Portable Network Graphics (पारदर्शी बैकग्राउंड सपोर्ट)
  - \`.gif\`: Graphics Interchange Format (एनिमेटेड इमेज)
  - \`.bmp\`: Bitmap Image (MS Paint)
- **Audio & Video**:
  - Audio: \`.mp3\`, \`.wav\`, \`.aac\`, \`.ogg\`
  - Video: \`.mp4\`, \`.avi\`, \`.mkv\`, \`.mov\`
- **Executable & Compressed**:
  - \`.exe\`: Windows Executable
  - \`.zip\` / \`.rar\`: Compressed Archive
  - \`.apk\`: Android Package`,
    realWorldAnalogy: "जैसे व्यक्ति के नाम के आगे लगा सरनेम (शर्मा, वर्मा) उसकी पहचान बताता है, वैसे ही डॉट के बाद लगा .odt या .mp3 फाइल की प्रकृति बताता है।",
    importantPoints: [
      "LibreOffice Writer का एक्सटेंशन **.odt** होता है।",
      "LibreOffice Calc का एक्सटेंशन **.ods** होता है।",
      "LibreOffice Impress का एक्सटेंशन **.odp** होता है।",
      "**PDF** का पूर्ण रूप **Portable Document Format** होता है।"
    ],
    commonMistakes: [
      "Writer का एक्सटेंशन .doc समझना (Writer का डिफ़ॉल्ट एक्सटेंशन **.odt** है)।",
      "Calc का एक्सटेंशन .xls समझना (Calc का डिफ़ॉल्ट एक्सटेंशन **.ods** है)।"
    ],
    examTips: [
      "CCC गुरुमंत्र: Writer ➔ .odt | Calc ➔ .ods | Impress ➔ .odp (इन तीनों में से 1 प्रश्न 100% आता है!)"
    ],
    quickRevision: "LibreOffice: Writer (.odt), Calc (.ods), Impress (.odp), Base (.odb). Images: .jpg, .png. Docs: .pdf, .txt. Audio: .mp3.",
    practiceAssignment: "अपने कंप्यूटर में विभिन्न फाइलों पर राइट क्लिक करके Properties में जाएं और उनके एक्सटेंशन (.odt, .pdf, .jpg) देखें।",
    microQuiz: [
      {
        question: "लिब्रेऑफिस राइटर (LibreOffice Writer) की फाइल का डिफॉल्ट एक्सटेंशन क्या होता है?",
        options: [
          { id: "A", text: ".docx" },
          { id: "B", text: ".odt" },
          { id: "C", text: ".ods" },
          { id: "D", text: ".odp" }
        ],
        correctAnswer: "B",
        explanation: "LibreOffice Writer की डिफॉल्ट फाइल OpenDocument Text (.odt) फॉर्मेट में सेव होती है।"
      },
      {
        question: "PDF का पूर्ण रूप (Full Form) क्या है?",
        options: [
          { id: "A", text: "Portable Document Format" },
          { id: "B", text: "Public Document File" },
          { id: "C", text: "Program Data File" },
          { id: "D", text: "Printable Document Form" }
        ],
        correctAnswer: "A",
        explanation: "PDF का पूरा नाम 'Portable Document Format' है, जिसे Adobe कंपनी द्वारा विकसित किया गया था।"
      }
    ]
  }
];
