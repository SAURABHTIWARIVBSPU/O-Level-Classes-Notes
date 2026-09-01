// CCC Chapter 7: E-mail, Social Networking and e-Governance Services
export const chapter7Topics = [
  {
    "chapterNumber": 7,
    "topicNumber": 1,
    "slug": "using-emails-compose-reply-forward-cc-bcc",
    "title": "Composing, CC vs BCC & Email Protocols",
    "hindiTitle": "ई-मेल भेजना: Compose, CC बनाम BCC एवं प्रोटोकॉल्स",
    "definitionEnglish": "Electronic mail (E-mail) transmits messages across networks using SMTP (sending, port 25), POP3 (retrieving/downloading, port 110), and IMAP (syncing across devices, port 143), supporting CC (Carbon Copy) and BCC (Blind Carbon Copy).",
    "definitionHindi": "ई-मेल नेटवर्क पर संदेश भेजने की इलेक्ट्रॉनिक सेवा है जो SMTP (भेजना), POP3 (डाउनलोड करना) और IMAP (सिंक करना) प्रोटोकॉल पर काम करती है, जिसमें CC और BCC की सुविधा होती है।",
    "simpleWords": "डिजिटल चिट्ठी भेजना जिसमें CC से सबको पता चलता है कौन-कौन जुड़ा है, और BCC से बाकी लोगों का ईमेल पता गुप्त रहता है।",
    "examImportance": "Extreme (CC vs BCC & Email Protocols are core CCC topics)",
    "detailedExplanation": "### 1. ई-मेल एड्रेस की संरचना (Email Address Structure):\n- ईमेल एड्रेस के दो भाग होते हैं जो **`@`** चिह्न से अलग होते हैं:\n  `username@domainname.com` (जैसे `rahul.verma@gmail.com`).\n  - पहला भाग: **User Name** (यूजरनेम)\n  - दूसरा भाग: **Domain Name / Mail Server** (डोमेन नेम)\n- प्रथम ईमेल रे टॉमलिंसन (Ray Tomlinson) ने 1971 में भेजा था और '@' का चयन किया था।\n\n### 2. CC बनाम BCC में अंतर:\n- **CC (Carbon Copy)**: पत्र की प्रतिलिपि। सभी प्राप्तकर्ता एक-दूसरे का ईमेल एड्रेस देख सकते हैं।\n- **BCC (Blind Carbon Copy)**: गुप्त प्रतिलिपि। BCC में डाले गए व्यक्ति का ईमेल एड्रेस किसी अन्य प्राप्तकर्ता को दिखाई नहीं देता।\n\n### 3. ई-मेल प्रोटोकॉल्स (Email Protocols & Ports):\n- **SMTP (Simple Mail Transfer Protocol)**: ईमेल **भेजने (Sending)** के लिए (Port: 25).\n- **POP3 (Post Office Protocol v3)**: सर्वर से ईमेल **डाउनलोड/प्राप्त (Receiving)** करने के लिए (Port: 110).\n- **IMAP (Internet Message Access Protocol)**: सर्वर पर ईमेल को विभिन्न डिवाइसेज में **सिंक (Sync)** करने के लिए (Port: 143).\n- **MIME (Multipurpose Internet Mail Extensions)**: ईमेल में फोटो, ऑडियो, वीडियो अटैचमेंट भेजने के लिए।",
    "realWorldAnalogy": "SMTP डाकिया है जो चिट्ठी ले जाता है, POP3 आपका लेटरबॉक्स है जिससे आप चिट्ठी निकालते हैं।",
    "importantPoints": [
      "ईमेल का आविष्कार **Ray Tomlinson** ने 1971 में किया था।",
      "BCC का अर्थ 'Blind Carbon Copy' है जहां प्राप्तकर्ताओं के नाम गुप्त रहते हैं।",
      "ईमेल भेजने के लिए **SMTP** और प्राप्त करने के लिए **POP3 / IMAP** का उपयोग होता है।",
      "Gmail में डिफॉल्ट फ्री स्टोरेज **15 GB** (Google Drive + Photos साझा) मिलती है और अटैचमेंट सीमा **25 MB** होती है।"
    ],
    "commonMistakes": [
      "ईमेल प्राप्त करने के लिए SMTP समझना (SMTP केवल भेजने के लिए होता है)।"
    ],
    "examTips": [
      "SMTP = Sending Mail, POP3 = Receiving Mail, BCC = Blind Carbon Copy (Hidden emails)."
    ],
    "quickRevision": "Email (User@Domain) uses SMTP to send, POP3/IMAP to receive, CC for visible copies, BCC for secret copies.",
    "practiceAssignment": "Gmail में एक ईमेल कंपोज़ करें और To, CC, BCC फील्ड्स में अलग-अलग ईमेल आईडी डालकर टेस्ट करें।",
    "microQuiz": [
      {
        "question": "ई-मेल भेजने (Sending Mail) के लिए किस प्रोटोकॉल का प्रयोग किया जाता है?",
        "options": [
          {
            "id": "A",
            "text": "POP3"
          },
          {
            "id": "B",
            "text": "SMTP"
          },
          {
            "id": "C",
            "text": "FTP"
          },
          {
            "id": "D",
            "text": "HTTP"
          }
        ],
        "correctAnswer": "B",
        "explanation": "SMTP (Simple Mail Transfer Protocol) का उपयोग ईमेल संदेशों को सर्वर पर भेजने के लिए किया जाता है।"
      },
      {
        "question": "ई-मेल में BCC का पूरा नाम क्या होता है?",
        "options": [
          {
            "id": "A",
            "text": "Basic Carbon Copy"
          },
          {
            "id": "B",
            "text": "Blind Carbon Copy"
          },
          {
            "id": "C",
            "text": "Business Communication Code"
          },
          {
            "id": "D",
            "text": "Binary Carbon Copy"
          }
        ],
        "correctAnswer": "B",
        "explanation": "BCC का पूर्ण रूप 'Blind Carbon Copy' है, जिसमें जोड़े गए ईमेल पते अन्य प्राप्तकर्ताओं को नहीं दिखते।"
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 2,
    "slug": "accessing-egov-on-mobile-umang-app",
    "title": "e-Governance Citizen Services: UMANG & DigiLocker",
    "hindiTitle": "ई-गवर्नेंस सेवाएं: उमंग ऐप (UMANG) एवं डिजिलॉकर (DigiLocker)",
    "definitionEnglish": "UMANG (Unified Mobile Application for New-age Governance) is India's master mobile app integrating 1200+ central and state services, while DigiLocker provides 1 GB cloud storage for issuing and verifying digital official certificates under IT Act 2000.",
    "definitionHindi": "उमंग (UMANG) 1200 से अधिक केंद्र व राज्य सरकार की सेवाओं को जोड़ने वाला एकीकृत मोबाइल ऐप है, जबकि डिजिलॉकर नागरिकों को 1 GB का सुरक्षित क्लाउड स्टोरेज प्रदान करता है जिसके दस्तावेज मूल भौतिक दस्तावेजों के समान मान्य हैं।",
    "simpleWords": "उमang आपकी जेब में पूरा सरकारी दफ्तर है, और डिजिलॉकर डिजिटल तिजोरी है जिसमें पैन, मार्कशीट और ड्राइविंग लाइसेंस सुरक्षित रहते हैं।",
    "examImportance": "Extreme (UMANG launched date, languages, and DigiLocker storage are guaranteed CCC questions)",
    "detailedExplanation": "### 1. उमंग ऐप (UMANG App - Unified Mobile Application for New-age Governance):\n- **लॉन्च तिथि**: **23 नवंबर 2017** (प्रधानमंत्री नरेंद्र मोदी द्वारा).\n- **भाषाएं**: **13 भारतीय भाषाएं** (अंग्रेजी, हिंदी, असमिया, बंगाली, गुजराती, कन्नड़, मलयालम, मराठी, ओडिया, पंजाबी, तमिल, तेलुगु, उर्दू).\n- **प्रमुख सेवाएं**: EPF/PF पासबुक, पैन कार्ड (NSDL), आयुष्मान भारत, पासपोर्ट सेवा, सीबीएसई परिणाम, गैस बुकिंग, ड्राइविंग लाइसेंस.\n\n### 2. डिजिलॉकर (DigiLocker):\n- **उद्देश्य**: 'कागजरहित शासन' (Paperless Governance).\n- **फ्री स्टोरेज स्पेस**: **1 GB** (1 Gigabyte).\n- **वैधता**: सूचना प्रौद्योगिकी अधिनियम (IT Act 2000) के नियम 9A के तहत डिजिलॉकर में जारी इलेक्ट्रॉनिक रिकॉर्ड मूल भौतिक दस्तावेजों के बराबर कानूनी रूप से मान्य हैं।\n- **साइन-अप आवश्यकता**: **Aadhaar Number** और आधार से लिंक मोबाइल नंबर (OTP आधारित प्रमाणीकरण).",
    "realWorldAnalogy": "डिजिलॉकर सरकारी मोहर लगा डिजिटल लॉकर है, ट्रैफिक पुलिस को इसमें डीएल दिखाने पर चालान नहीं काटा जा सकता।",
    "importantPoints": [
      "UMANG का पूरा नाम: **Unified Mobile Application for New-age Governance**।",
      "UMANG ऐप को **23 नवंबर 2017** को **13 भाषाओं** में लॉन्च किया गया था।",
      "DigiLocker प्रत्येक नागरिक को **1 GB** फ्री क्लाउड स्टोरेज प्रदान करता है।",
      "DigiLocker में अकाउंट बनाने के लिए **Aadhaar Card** अनिवार्य है।"
    ],
    "commonMistakes": [
      "DigiLocker में 15 GB स्टोरेज समझना (Google Drive 15 GB देता है, DigiLocker 1 GB देता है)।"
    ],
    "examTips": [
      "याद रखें: UMANG Launch = 23 Nov 2017, Languages = 13, DigiLocker Storage = 1 GB, IT Act = 2000."
    ],
    "quickRevision": "UMANG (Nov 2017, 13 languages) integrates 1200+ services; DigiLocker provides 1GB Aadhaar-linked cloud storage.",
    "practiceAssignment": "DigiLocker पोर्टल (digilocker.gov.in) पर जाकर 'Issued Documents' और 'Uploaded Documents' का अंतर समझें।",
    "microQuiz": [
      {
        "question": "डिजिलॉकर (DigiLocker) में प्रत्येक उपयोगकर्ता को कितनी अधिकतम क्लाउड स्टोरेज क्षमता दी जाती है?",
        "options": [
          {
            "id": "A",
            "text": "500 MB"
          },
          {
            "id": "B",
            "text": "1 GB"
          },
          {
            "id": "C",
            "text": "5 GB"
          },
          {
            "id": "D",
            "text": "15 GB"
          }
        ],
        "correctAnswer": "B",
        "explanation": "DigiLocker में प्रत्येक भारतीय नागरिक को 1 GB (Gigabyte) का सुरक्षित क्लाउड स्पेस आवंटित होता है।"
      },
      {
        "question": "UMANG ऐप का पूरा नाम क्या है?",
        "options": [
          {
            "id": "A",
            "text": "Unified Mobile Application for New-age Governance"
          },
          {
            "id": "B",
            "text": "Universal Mobile Access for National Growth"
          },
          {
            "id": "C",
            "text": "United Management of All Network Gateways"
          },
          {
            "id": "D",
            "text": "Unique Mobile App for Nation Government"
          }
        ],
        "correctAnswer": "A",
        "explanation": "UMANG = Unified Mobile Application for New-age Governance, जिसे 23 नवंबर 2017 को 13 भाषाओं में जारी किया गया था।"
      }
    ]
  }
];
