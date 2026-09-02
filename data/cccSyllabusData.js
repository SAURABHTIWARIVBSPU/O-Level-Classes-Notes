// CCC Complete Syllabus & Chapter-Wise Topic Mapping (NIELIT Official Curriculum)
export const cccSyllabusMeta = {
  courseCode: "CCC (Revision 3)",
  revision: "Latest NIELIT Curriculum",
  courseName: "Course on Computer Concepts (CCC)",
  hindiCourseName: "कंप्यूटर अवधारणाओं पर पाठ्यक्रम (सी.सी.सी.)",
  durationTotalHours: 80,
  theoryHours: 32,
  practicalHours: 48,
  purpose: "An end-to-end curriculum designed by NIELIT to equip learners with essential digital literacy, office productivity (LibreOffice Writer, Calc, Impress), internet safety, digital financial services, and Industry 4.0 FutureSkills.",
  eligibility: "No minimum qualification required. Open to all learners and job aspirants.",
  passingCriteria: "Minimum 50% marks in the online examination (Grade D or higher).",
  examPattern: "100 Objective Type Questions (MCQ & True/False), 90 Minutes, Zero Negative Marking."
};

export const cccChaptersData = [
  {
    "id": 1,
    "chapterNumber": "01",
    "slug": "chapter-1",
    "title": "Introduction to Computer",
    "hindiTitle": "कंप्यूटर का परिचय",
    "officialSection": "1.0 - 1.5",
    "theoryHours": 3,
    "practicalHours": 3,
    "totalHours": 6,
    "marksWeight": "10-12 Marks",
    "color": "from-blue-600 to-cyan-600",
    "description": "Understand the fundamentals of computers, latest IT gadgets and their applications, hardware components (CPU, Input/Output, Memory & Storage), and software classifications (System, Application, Utility, Open Source & Proprietary, Mobile Apps).",
    "learningOutcomes": [
      "Identify computers, IT gadgets and explain their evolution and applications.",
      "Get familiar with various input, output hardware components along with storage devices.",
      "Get familiar with various types of software, utilities used for computer and mobile apps."
    ],
    "topics": [
      {
        "id": "c1-t1",
        "slug": "introduction-to-computer-and-gadgets",
        "title": "Computer and Latest IT Gadgets",
        "hindiTitle": "कंप्यूटर एवं नवीनतम आईटी गैजेट्स"
      },
      {
        "id": "c1-t2",
        "slug": "evolution-of-computers-and-applications",
        "title": "Evolution of Computers & Applications",
        "hindiTitle": "कंप्यूटर का विकास एवं अनुप्रयोग"
      },
      {
        "id": "c1-t3",
        "slug": "it-gadgets-and-their-applications",
        "title": "IT Gadgets and Their Applications",
        "hindiTitle": "आईटी गैजेट्स और उनके दैनिक उपयोग"
      },
      {
        "id": "c1-t4",
        "slug": "hardware-cpu-input-output-devices",
        "title": "Hardware: CPU, Input & Output Devices",
        "hindiTitle": "हार्डवेयर: सीपीयू, इनपुट एवं आउटपुट डिवाइसेज"
      },
      {
        "id": "c1-t5",
        "slug": "computer-memory-and-storage",
        "title": "Computer Memory and Storage Devices",
        "hindiTitle": "कंप्यूटर मेमोरी एवं स्टोरेज डिवाइसेज"
      },
      {
        "id": "c1-t6",
        "slug": "software-system-application-utility",
        "title": "Software: System, Application & Utility Software",
        "hindiTitle": "सॉफ्टवेयर: सिस्टम, एप्लीकेशन एवं यूटिलिटी सॉफ्टवेयर"
      },
      {
        "id": "c1-t7",
        "slug": "open-source-and-proprietary-software",
        "title": "Open Source and Proprietary Software",
        "hindiTitle": "ओपन सोर्स बनाम प्रोप्रायटरी सॉफ्टवेयर"
      },
      {
        "id": "c1-t8",
        "slug": "mobile-apps-and-ecosystem",
        "title": "Mobile Apps and Mobile Operating Systems",
        "hindiTitle": "मोबाइल एप्स एवं उनका इकोसिस्टम"
      }
    ]
  },
  {
    "id": 2,
    "chapterNumber": "02",
    "slug": "chapter-2",
    "title": "Introduction to Operating System",
    "hindiTitle": "ऑपरेटिंग सिस्टम का परिचय",
    "officialSection": "2.0 - 2.8",
    "theoryHours": 3,
    "practicalHours": 4,
    "totalHours": 7,
    "marksWeight": "10-12 Marks",
    "color": "from-indigo-600 to-purple-600",
    "description": "Master operating system basics for Desktop, Laptop, and Mobile/Tablets (Ubuntu Linux & Windows). User interface components (Taskbar, Icons, Shortcuts), simple OS settings (Mouse, Date/Time, Display, Printers), and File/Folder management with standard file extensions.",
    "learningOutcomes": [
      "Well acquainted with Operating System and its applications for desktop and mobile devices.",
      "Able to identify desktop components and modify properties, date, time, display, etc.",
      "Able to add/remove programs, manage files and folders, and recognize standard file extensions."
    ],
    "topics": [
      {
        "id": "c2-t1",
        "slug": "basics-of-operating-system",
        "title": "Basics of Operating System (Desktop, Laptop & Mobile)",
        "hindiTitle": "ऑपरेटिंग सिस्टम की मूल बातें (डेस्कटॉप, लैपटॉप एवं मोबाइल OS)"
      },
      {
        "id": "c2-t2",
        "slug": "user-interface-taskbar-icons-shortcuts",
        "title": "User Interface: Taskbar, Icons & Shortcuts",
        "hindiTitle": "यूजर इंटरफेस: टास्कबार, आइकन्स एवं शॉर्टकट्स"
      },
      {
        "id": "c2-t3",
        "slug": "running-an-application",
        "title": "Running and Managing Applications in OS",
        "hindiTitle": "एप्लीकेशन रन करना और टास्क मैनेजर"
      },
      {
        "id": "c2-t4",
        "slug": "operating-system-simple-settings",
        "title": "OS Settings: Mouse, Date & Time, Display Settings",
        "hindiTitle": "ओएस सेटिंग्स: माउस, दिनांक-समय, डिस्प्ले सेटिंग्स"
      },
      {
        "id": "c2-t5",
        "slug": "add-remove-programs-and-printers",
        "title": "Add/Remove Programs and Printer Sharing",
        "hindiTitle": "प्रोग्राम इंस्टॉल/अनइंस्टॉल करना एवं प्रिंटर शेयरिंग"
      },
      {
        "id": "c2-t6",
        "slug": "file-and-folder-management",
        "title": "File and Folder Management Operations",
        "hindiTitle": "फाइल एवं फोल्डर प्रबंधन"
      },
      {
        "id": "c2-t7",
        "slug": "types-of-file-extensions",
        "title": "Standard File Extensions and Formats",
        "hindiTitle": "मानक फाइल एक्सटेंशन्स एवं उनके प्रकार"
      }
    ]
  },
  {
    "id": 3,
    "chapterNumber": "03",
    "slug": "chapter-3",
    "title": "Word Processing (LibreOffice Writer)",
    "hindiTitle": "वर्ड प्रोसेसिंग (लिब्रेऑफिस राइटर)",
    "officialSection": "3.0 - 3.10",
    "theoryHours": 4,
    "practicalHours": 8,
    "totalHours": 12,
    "marksWeight": "15-18 Marks",
    "color": "from-blue-700 to-indigo-700",
    "description": "Complete practical mastery of LibreOffice Writer: Document creation, formatting, styles, paragraph indentation, bullets, tables manipulation, headers/footers, mail merge, spelling & grammar checks, and essential shortcut keys.",
    "learningOutcomes": [
      "In-depth knowledge of Word Processing usage, screen details, opening, saving, and printing as PDF.",
      "Document creation, formatting text, paragraph, and inserting Header & Footer.",
      "Manipulate tables (borders, shading, cell alignment), and prepare copies of letters using Mail Merge."
    ],
    "topics": [
      {
        "id": "c3-t1",
        "slug": "word-processing-basics-libreoffice-writer",
        "title": "Word Processing Basics & LibreOffice Writer Interface",
        "hindiTitle": "वर्ड प्रोसेसिंग बेसिक्स एवं लिब्रेऑफिस राइटर इंटरफ़ेस"
      },
      {
        "id": "c3-t2",
        "slug": "opening-closing-saving-and-pdf-export",
        "title": "Document Operations: Save, Print Preview & PDF Export",
        "hindiTitle": "दस्तावेज़ ऑपरेशन्स: सेव, प्रिंट प्रीव्यू एवं पीडीएफ एक्सपोर्ट"
      },
      {
        "id": "c3-t3",
        "slug": "text-creation-editing-and-selection",
        "title": "Text Creation, Editing, Cut/Copy/Paste & Undo/Redo",
        "hindiTitle": "टेक्स्ट निर्माण, संपादन, कट/कॉपी/पेस्ट एवं अनडू/रीडू"
      },
      {
        "id": "c3-t4",
        "slug": "font-color-style-and-case-conversion",
        "title": "Font Formatting: Color, Style, Size & Change Case",
        "hindiTitle": "फॉन्ट फॉर्मेटिंग: रंग, शैली, आकार एवं चेंज केस"
      },
      {
        "id": "c3-t5",
        "slug": "paragraph-indentation-alignment-and-bullets",
        "title": "Paragraph Alignment, Indentation, Bullets & Numbering",
        "hindiTitle": "पैराग्राफ अलाइनमेंट, इंडेंटेशन, बुलेट्स एवं नंबरिंग"
      },
      {
        "id": "c3-t6",
        "slug": "header-footer-and-page-setup",
        "title": "Headers, Footers, Page Numbers & Page Setup",
        "hindiTitle": "हेडर, फुटर, पेज नंबर एवं पेज सेटअप"
      },
      {
        "id": "c3-t7",
        "slug": "table-manipulation-rows-columns-borders",
        "title": "Table Manipulation: Insert Rows/Cols, Merge/Split & Borders",
        "hindiTitle": "टेबल मैनिपुलेशन: रो/कॉलम जोड़ना, मर्ज/स्प्लिट एवं बॉर्डर"
      },
      {
        "id": "c3-t8",
        "slug": "mail-merge-in-libreoffice-writer",
        "title": "Mail Merge in LibreOffice Writer (Step-by-Step)",
        "hindiTitle": "मेल मर्ज की संपूर्ण कार्यविधि (Mail Merge Step-by-Step)"
      },
      {
        "id": "c3-t9",
        "slug": "autocorrect-spelling-and-grammar-find-replace",
        "title": "AutoCorrect, Spelling & Grammar, Find and Replace",
        "hindiTitle": "ऑटो-करेक्ट, स्पेलिंग-ग्रामर चेक एवं फाइंड-रिप्लेस"
      },
      {
        "id": "c3-t10",
        "slug": "libreoffice-writer-shortcut-keys",
        "title": "Essential LibreOffice Writer Shortcut Keys",
        "hindiTitle": "लिब्रेऑफिस राइटर के महत्वपूर्ण शॉर्टकट कीज"
      }
    ]
  },
  {
    "id": 4,
    "chapterNumber": "04",
    "slug": "chapter-4",
    "title": "Spreadsheet (LibreOffice Calc)",
    "hindiTitle": "स्प्रेडशीट (लिब्रेऑफिस कैल्क)",
    "officialSection": "4.0 - 4.6",
    "theoryHours": 4,
    "practicalHours": 8,
    "totalHours": 12,
    "marksWeight": "15-18 Marks",
    "color": "from-emerald-600 to-teal-600",
    "description": "Master LibreOffice Calc: Sheet structure, cell referencing, data types (Text, Number, Date), mathematical formulas (+, -, *, /), built-in functions (SUM, COUNT, MAX, MIN, AVERAGE), AutoFill, AutoSum, Sorting & Filtering, Freezing Panes, and Charts (Bar, Pie, Line).",
    "learningOutcomes": [
      "Basic knowledge of Spreadsheet processing, saving, printing, and sheet creation.",
      "Spreadsheet creation, inserting and editing data in cells, sorting, filtering, and freezing panes.",
      "Applying basic formulas and functions (SUM, COUNT, MAX, MIN, AVERAGE), and preparing visual charts."
    ],
    "topics": [
      {
        "id": "c4-t1",
        "slug": "elements-of-spreadsheet-libreoffice-calc",
        "title": "Elements of Spreadsheet & LibreOffice Calc Interface",
        "hindiTitle": "स्प्रेडशीट के मूल तत्व एवं कैल्क इंटरफ़ेस"
      },
      {
        "id": "c4-t2",
        "slug": "concept-of-cell-address-and-data-entry",
        "title": "Cell Address [Row & Column] & Entering Data",
        "hindiTitle": "सेल एड्रेस (Row/Column) एवं डेटा प्रविष्टि (Text, Number, Date)"
      },
      {
        "id": "c4-t3",
        "slug": "manipulation-of-cells-and-sheets",
        "title": "Editing Cells, Formatting, Cut/Copy/Paste & Cell Sizing",
        "hindiTitle": "सेल संपादन, फॉर्मेटिंग, कट/कॉपी/पेस्ट एवं रो/कॉलम साइजिंग"
      },
      {
        "id": "c4-t4",
        "slug": "inserting-deleting-rows-columns-and-autofill",
        "title": "Inserting/Deleting Rows/Cols & AutoFill Magic",
        "hindiTitle": "रो/कॉलम जोड़ना-हटाना एवं ऑटो-फिल (AutoFill) फीचर"
      },
      {
        "id": "c4-t5",
        "slug": "sorting-filtering-and-freezing-panes",
        "title": "Data Sorting, Filtering & Freezing Panes",
        "hindiTitle": "डेटा सॉर्टिंग, फिल्टरिंग एवं फ्रीज पैन (Freeze Panes)"
      },
      {
        "id": "c4-t6",
        "slug": "basic-formulas-and-autosum",
        "title": "Using Mathematical Formulas (+, -, *, /) & AutoSum",
        "hindiTitle": "मूल गणितीय सूत्र (+, -, *, /) एवं ऑटो-सम (AutoSum)"
      },
      {
        "id": "c4-t7",
        "slug": "essential-calc-functions",
        "title": "Core Functions: SUM, COUNT, MAX, MIN, AVERAGE",
        "hindiTitle": "प्रमुख फंक्शन्स: SUM, COUNT, MAX, MIN, AVERAGE"
      },
      {
        "id": "c4-t8",
        "slug": "creating-charts-bar-pie-line",
        "title": "Creating and Formatting Charts (Bar, Pie, Line)",
        "hindiTitle": "चार्ट्स बनाना और कस्टमाइज़ करना (Bar, Pie, Line Charts)"
      },
      {
        "id": "c4-t9",
        "slug": "libreoffice-calc-shortcut-keys-and-errors",
        "title": "Calc Shortcut Keys & Common Formula Error Codes",
        "hindiTitle": "कैल्क शॉर्टकट कीज एवं फॉर्मूला एरर कोड्स (###, #DIV/0!)"
      }
    ]
  },
  {
    "id": 5,
    "chapterNumber": "05",
    "slug": "chapter-5",
    "title": "Presentation (LibreOffice Impress)",
    "hindiTitle": "प्रेजेंटेशन (लिब्रेऑफिस इम्प्रेस)",
    "officialSection": "5.0 - 5.7",
    "theoryHours": 4,
    "practicalHours": 8,
    "totalHours": 12,
    "marksWeight": "12-15 Marks",
    "color": "from-amber-600 to-orange-600",
    "description": "Design dynamic visual presentations in LibreOffice Impress: Slide templates, Master Slides, inserting tables, clipart, pictures, multimedia (audio/video), slide transitions, animation effects, slide show automation, and printing handouts/notes.",
    "learningOutcomes": [
      "Basic knowledge of slide presentations, saving, and printing handouts.",
      "Manipulate slides (inserting pictures, objects, multimedia) and using Master Slide.",
      "Running slide shows with automated timings and custom transition effects."
    ],
    "topics": [
      {
        "id": "c5-t1",
        "slug": "presentation-basics-libreoffice-impress",
        "title": "Presentation Basics & LibreOffice Impress Screen",
        "hindiTitle": "प्रेजेंटेशन बेसिक्स एवं लिब्रेऑफिस इम्प्रेस स्क्रीन"
      },
      {
        "id": "c5-t2",
        "slug": "creating-saving-and-managing-slides",
        "title": "Creating Slides from Templates & Blank Presentations",
        "hindiTitle": "टेम्पलेट्स से स्लाइड बनाना एवं स्लाइड प्रबंधन"
      },
      {
        "id": "c5-t3",
        "slug": "inserting-tables-clipart-and-pictures",
        "title": "Inserting Tables, ClipArt, Pictures & Shapes",
        "hindiTitle": "टेबल, क्लिपआर्ट, चित्र एवं आकृतियां जोड़ना"
      },
      {
        "id": "c5-t4",
        "slug": "creating-and-using-master-slide",
        "title": "Creating and Using Master Slide",
        "hindiTitle": "मास्टर स्लाइड (Master Slide) का निर्माण एवं उपयोग"
      },
      {
        "id": "c5-t5",
        "slug": "slide-transitions-and-animation-effects",
        "title": "Slide Transitions, Custom Animations & Slide Timings",
        "hindiTitle": "स्लाइड ट्रांज़िशन, कस्टम एनिमेशन एवं टाइमिंग्स"
      },
      {
        "id": "c5-t6",
        "slug": "adding-movie-sound-and-headers-footers",
        "title": "Adding Audio, Video, Header, Footer & Notes",
        "hindiTitle": "ऑडियो, वीडियो, हेडर, फुटर एवं स्पीकर नोट्स जोड़ना"
      },
      {
        "id": "c5-t7",
        "slug": "running-slide-show-and-printing-handouts",
        "title": "Running Slide Shows (F5) & Printing Handouts",
        "hindiTitle": "स्लाइड शो चलाना (F5 / Shift+F5) एवं हैंडआउट्स प्रिंट करना"
      },
      {
        "id": "c5-t8",
        "slug": "libreoffice-impress-shortcut-keys",
        "title": "Essential LibreOffice Impress Shortcut Keys",
        "hindiTitle": "लिब्रेऑफिस इम्प्रेस के महत्वपूर्ण शॉर्टकट कीज"
      }
    ]
  },
  {
    "id": 6,
    "chapterNumber": "06",
    "slug": "chapter-6",
    "title": "Introduction to Internet and WWW",
    "hindiTitle": "इंटरनेट एवं WWW का परिचय",
    "officialSection": "6.0 - 6.7",
    "theoryHours": 3,
    "practicalHours": 4,
    "totalHours": 7,
    "marksWeight": "10-12 Marks",
    "color": "from-cyan-600 to-blue-600",
    "description": "Computer networks (LAN, WAN, Topologies), Internet vs WWW, URL anatomy, IP Address, MAC Address, IMEI number, ISP role, Internet protocols (HTTP/HTTPS, FTP, TCP/IP, DNS), connection modes (Hotspot, Wi-Fi, LAN, Broadband, USB Tethering), Web Browsers, Search Engines, and web surfing.",
    "learningOutcomes": [
      "Gather knowledge of network types (LAN, WAN) and topologies (Star, Bus, Ring, Mesh).",
      "Get an overview of Internet, WWW, IP Address, MAC Address, IMEI, and ISP role.",
      "Connect to Internet using various modes and search/download web resources safely."
    ],
    "topics": [
      {
        "id": "c6-t1",
        "slug": "computer-networks-lan-wan-topologies",
        "title": "Computer Networks: LAN, WAN & Network Topologies",
        "hindiTitle": "कंप्यूटर नेटवर्क: LAN, WAN एवं नेटवर्क टोपोलॉजी"
      },
      {
        "id": "c6-t2",
        "slug": "concept-of-internet-and-www",
        "title": "Concept of Internet, WWW & Applications",
        "hindiTitle": "इंटरनेट एवं वर्ल्ड वाइड वेब (WWW) की अवधारणा"
      },
      {
        "id": "c6-t3",
        "slug": "website-address-url-and-domain-names",
        "title": "Website Address, URL Structure & Domain Names",
        "hindiTitle": "वेबसाइट एड्रेस, URL संरचना एवं डोमेन नेम्स"
      },
      {
        "id": "c6-t4",
        "slug": "ip-address-mac-address-and-imei",
        "title": "IP Address (IPv4 vs IPv6), MAC Address & IMEI Number",
        "hindiTitle": "आईपी एड्रेस (IPv4/IPv6), मैक एड्रेस एवं IMEI नंबर"
      },
      {
        "id": "c6-t5",
        "slug": "isp-and-internet-protocols",
        "title": "Role of ISP and Core Internet Protocols (TCP/IP, HTTP, FTP, DNS)",
        "hindiTitle": "ISP की भूमिका एवं प्रमुख प्रोटोकॉल्स (TCP/IP, HTTP/S, FTP, DNS)"
      },
      {
        "id": "c6-t6",
        "slug": "modes-of-connecting-internet",
        "title": "Modes of Internet Connection (Wi-Fi, Hotspot, Broadband, Tethering)",
        "hindiTitle": "इंटरनेट कनेक्टिविटी के प्रकार (Wi-Fi, हॉटस्पॉट, ब्रॉडबैंड, USB टेदरिंग)"
      },
      {
        "id": "c6-t7",
        "slug": "popular-web-browsers-and-features",
        "title": "Popular Web Browsers: Chrome, Firefox, Edge, Opera",
        "hindiTitle": "प्रमुख वेब ब्राउज़र्स एवं उनके मुख्य फीचर्स"
      },
      {
        "id": "c6-t8",
        "slug": "search-engines-surfing-and-downloading",
        "title": "Search Engines (Google, Bing), Surfing & Downloading Web Pages",
        "hindiTitle": "सर्च इंजन, वेब सर्फिंग एवं वेब पेज डाउनलोड/प्रिंटिंग"
      }
    ]
  },
  {
    "id": 7,
    "chapterNumber": "07",
    "slug": "chapter-7",
    "title": "E-mail, Social Networking & e-Gov Services",
    "hindiTitle": "ई-मेल, सोशल नेटवर्किंग एवं ई-गवर्नेंस सेवाएं",
    "officialSection": "7.0 - 7.9",
    "theoryHours": 3,
    "practicalHours": 6,
    "totalHours": 9,
    "marksWeight": "10-12 Marks",
    "color": "from-purple-600 to-pink-600",
    "description": "Master email structure, CC/BCC, composing, attachments, signatures. Social networking platforms (Facebook, X/Twitter, LinkedIn, Instagram), instant messaging (WhatsApp, Telegram), blogs, e-commerce basics, and digital citizen services: UMANG App, DigiLocker, IRCTC Railway Booking, Passport Seva, and e-Hospital.",
    "learningOutcomes": [
      "Create an email account, compose, reply, forward, search, and send attachments with signature.",
      "Get familiar with Social Networking, Instant Messaging, Blogs, e-Commerce, and Netiquettes.",
      "Access e-Governance citizen services on mobile using UMANG App and Digital Locker (DigiLocker)."
    ],
    "topics": [
      {
        "id": "c7-t1",
        "slug": "structure-of-email-and-mailbox",
        "title": "Structure of E-mail, Address Syntax & Mailbox Folders",
        "hindiTitle": "ई-मेल संरचना, पता सिंटैक्स एवं मेलबॉक्स फोल्डर्स"
      },
      {
        "id": "c7-t2",
        "slug": "email-signatures-and-searching-emails",
        "title": "Email Features: CC, BCC, Attachments & Signatures",
        "hindiTitle": "ई-मेल फीचर्स: CC, BCC, अटैचमेंट एवं डिजिटल सिग्नेचर"
      },
      {
        "id": "c7-t3",
        "slug": "social-networking-and-instant-messaging",
        "title": "Social Networking (Facebook, X, LinkedIn) & Messaging",
        "hindiTitle": "सोशल नेटवर्किंग (Facebook, X, LinkedIn) एवं मैसेजिंग"
      },
      {
        "id": "c7-t4",
        "slug": "blogs-ecommerce-basics-and-netiquettes",
        "title": "Blogs, Basics of e-Commerce & Online Netiquettes",
        "hindiTitle": "ब्लॉग्स, ई-कॉमर्स के प्रकार एवं ऑनलाइन शिष्टाचार (Netiquette)"
      },
      {
        "id": "c7-t5",
        "slug": "overview-of-egovernance-services",
        "title": "Overview of e-Governance Services: Railway, Passport & ORS",
        "hindiTitle": "ई-गवर्नेंस सेवाएं: रेलवे (IRCTC), पासपोर्ट सेवा एवं ई-हॉस्पिटल (ORS)"
      },
      {
        "id": "c7-t6",
        "slug": "digital-locker-digilocker-complete-guide",
        "title": "Digital Locker (DigiLocker): Verification, Storage & Legal Validity",
        "hindiTitle": "डिजिटल लॉकर (DigiLocker): सत्यापन, 1GB स्टोरेज एवं कानूनी मान्यता"
      },
      {
        "id": "c7-t7",
        "slug": "accessing-egov-services-umang-prashikshan",
        "title": "Accessing e-Gov Services: UMANG App & National Portals",
        "hindiTitle": "UMANG ऐप (Unified Mobile App) एवं राष्ट्रीय सरकारी पोर्टल्स"
      },
      {
        "id": "c7-t8",
        "slug": "cyber-etiquette-and-email-security",
        "title": "Cyber Etiquette, Email Security & Phishing Awareness",
        "hindiTitle": "साइबर शिष्टाचार, ई-मेल सुरक्षा एवं फ़िशिंग (Phishing) से बचाव"
      }
    ]
  },
  {
    "id": 8,
    "chapterNumber": "08",
    "slug": "chapter-8",
    "title": "Digital Financial Tools and Applications",
    "hindiTitle": "डिजिटल वित्तीय उपकरण एवं अनुप्रयोग",
    "officialSection": "8.0 - 8.6",
    "theoryHours": 4,
    "practicalHours": 4,
    "totalHours": 8,
    "marksWeight": "12-15 Marks",
    "color": "from-green-600 to-emerald-600",
    "description": "Complete understanding of digital banking in India: OTP & QR Code, UPI (Unified Payment Interface), AEPS (Aadhaar Enabled Payment System), USSD (*99#), Credit/Debit Cards, eWallets, PoS machines, Internet Banking (NEFT, RTGS, IMPS), and online bill payments.",
    "learningOutcomes": [
      "Know Digital Financial Tools (OTP, QR Code, UPI, AEPS, USSD, Cards, eWallets, PoS).",
      "Get knowledge of Internet Banking modes: NEFT, RTGS, IMPS timings and limits.",
      "Understand online bill payments, payment security, and safe digital transactions."
    ],
    "topics": [
      {
        "id": "c8-t1",
        "slug": "digital-financial-tools-otp-and-qr-code",
        "title": "Digital Financial Tools: OTP & QR Code",
        "hindiTitle": "डिजिटल वित्तीय उपकरण: OTP (वन टाइम पासवर्ड) एवं QR कोड"
      },
      {
        "id": "c8-t2",
        "slug": "upi-unified-payments-interface",
        "title": "Unified Payments Interface (UPI) & BHIM Ecosystem",
        "hindiTitle": "यूनिफाइड पेमेंट्स इंटरफ़ेस (UPI) एवं BHIM इकोसिस्टम"
      },
      {
        "id": "c8-t3",
        "slug": "aeps-aadhaar-enabled-payment-system",
        "title": "AEPS (Aadhaar Enabled Payment System) & Micro-ATMs",
        "hindiTitle": "AEPS (आधार इनेबल्ड पेमेंट सिस्टम) एवं माइक्रो-ATM"
      },
      {
        "id": "c8-t4",
        "slug": "ussd-banking-star-99-hash",
        "title": "USSD Banking (*99# Service on Feature Phones)",
        "hindiTitle": "USSD बैंकिंग (*99# सेवा) एवं नॉन-इंटरनेट मोबाइल बैंकिंग"
      },
      {
        "id": "c8-t5",
        "slug": "cards-credit-debit-ewallets-and-pos",
        "title": "Cards (Credit, Debit, RuPay), eWallets & PoS Machines",
        "hindiTitle": "कार्ड्स (डेबिट, क्रेडिट, RuPay), ई-वॉलेट्स एवं PoS मशीनें"
      },
      {
        "id": "c8-t6",
        "slug": "electronic-fund-transfer-neft-rtgs-imps",
        "title": "Electronic Fund Transfers: NEFT, RTGS & IMPS",
        "hindiTitle": "इलेक्ट्रॉनिक फंड ट्रांसफर: NEFT, RTGS एवं IMPS की तुलना"
      },
      {
        "id": "c8-t7",
        "slug": "online-bill-payment-and-bbps",
        "title": "Online Bill Payments (BBPS) & Safe Banking Practices",
        "hindiTitle": "भारत बिल पेमेंट सिस्टम (BBPS) एवं सुरक्षित डिजिटल बैंकिंग"
      }
    ]
  },
  {
    "id": 9,
    "chapterNumber": "09",
    "slug": "chapter-9",
    "title": "Overview of FutureSkills & Cyber Security",
    "hindiTitle": "फ्यूचरस्किल्स एवं साइबर सुरक्षा का अवलोकन",
    "officialSection": "9.0 - 9.4",
    "theoryHours": 4,
    "practicalHours": 3,
    "totalHours": 7,
    "marksWeight": "10-12 Marks",
    "color": "from-rose-600 to-red-600",
    "description": "Explore cutting-edge industry 4.0 FutureSkills: IoT (Internet of Things), Big Data Analytics, Cloud Computing, Virtual Reality (VR), Artificial Intelligence (AI), Social & Mobile, Blockchain Technology, 3D Printing / Additive Manufacturing, and RPA (Robotics Process Automation). Cyber Security fundamentals: Protecting PCs, Securing Smartphones, Passwords, Antivirus, and Safe Online Browsing.",
    "learningOutcomes": [
      "Learn latest trends and technologies in upcoming fields of IECT (IoT, AI, Cloud, Blockchain, 3D Printing, RPA).",
      "Understand need of Cyber Security, protect PC and mobile devices using basic security features.",
      "Master password safety, phishing prevention, antivirus protection, and firewall usage."
    ],
    "topics": [
      {
        "id": "c9-t1",
        "slug": "internet-of-things-iot-and-smart-devices",
        "title": "Internet of Things (IoT) & Smart Connected Devices",
        "hindiTitle": "इंटरनेट ऑफ थिंग्स (IoT) एवं स्मार्ट डिवाइसेज"
      },
      {
        "id": "c9-t2",
        "slug": "big-data-analytics-and-cloud-computing",
        "title": "Big Data Analytics & Cloud Computing (SaaS, PaaS, IaaS)",
        "hindiTitle": "बिग डेटा एनालिटिक्स एवं क्लाउड कंप्यूटिंग (SaaS, PaaS, IaaS)"
      },
      {
        "id": "c9-t3",
        "slug": "virtual-reality-and-artificial-intelligence",
        "title": "Virtual Reality (VR) & Artificial Intelligence (AI)",
        "hindiTitle": "आर्टिफिशियल इंटेलिजेंस (AI) एवं वर्चुअल रियलिटी (VR)"
      },
      {
        "id": "c9-t4",
        "slug": "blockchain-technology-and-cryptography",
        "title": "Blockchain Technology, Distributed Ledgers & Cryptography",
        "hindiTitle": "ब्लॉकचेन टेक्नोलॉजी, डिस्ट्रीब्यूटेड लेजर एवं क्रिप्टोग्राफी"
      },
      {
        "id": "c9-t5",
        "slug": "3d-printing-and-robotic-process-automation",
        "title": "3D Printing (Additive Manufacturing) & RPA (Robotics)",
        "hindiTitle": "3D प्रिंटिंग (एडिटिव मैन्युफैक्चरिंग) एवं RPA (रोबोटिक्स)"
      },
      {
        "id": "c9-t6",
        "slug": "cyber-security-fundamentals-and-threats",
        "title": "Cyber Security Fundamentals: Malware, Viruses & Cyber Threats",
        "hindiTitle": "साइबर सुरक्षा के मूल सिद्धांत, मैलवेयर एवं वायरस के प्रकार"
      },
      {
        "id": "c9-t7",
        "slug": "securing-pc-and-smartphones",
        "title": "Securing PC & Mobile Devices: Firewalls, Antivirus & Patches",
        "hindiTitle": "पीसी एवं मोबाइल सुरक्षा: फ़ायरवॉल, एंटीवायरस एवं सुरक्षा पैच"
      },
      {
        "id": "c9-t8",
        "slug": "cyber-security-laws-and-it-act-2000",
        "title": "Information Technology Act, 2000 (IT Act) & Cyber Laws",
        "hindiTitle": "सूचना प्रौद्योगिकी अधिनियम, 2000 (IT Act) एवं साइबर कानून"
      }
    ]
  }
];
