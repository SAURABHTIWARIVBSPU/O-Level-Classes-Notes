// CCC Chapter 8: Digital Financial Tools and Applications
export const chapter8Topics = [
  {
    "chapterNumber": 8,
    "topicNumber": 1,
    "slug": "unified-payment-interface-upi-and-apps",
    "title": "UPI (Unified Payment Interface), QR Code & BHIM App",
    "hindiTitle": "यूपीआई (UPI), क्यूआर कोड (QR Code) एवं भीम ऐप (BHIM)",
    "definitionEnglish": "UPI (Unified Payment Interface) is an instant real-time payment system developed by NPCI facilitating inter-bank peer-to-peer (P2P) and peer-to-merchant (P2M) transactions using Virtual Payment Address (VPA).",
    "definitionHindi": "यूपीआई (UPI) एनपीसीआई (NPCI) द्वारा विकसित एक त्वरित रियल-टाइम भुगतान प्रणाली है जो वर्चुअल पेमेंट एड्रेस (VPA) या क्यूआर कोड के माध्यम से 24x7 तत्काल बैंक ट्रांसफर की सुविधा देती है।",
    "simpleWords": "बिना बैंक अकाउंट नंबर और IFSC डाले सिर्फ मोबाइल नंबर या QR कोड स्कैन करके सेकंडों में पैसे भेजने का जरिया।",
    "examImportance": "Extreme (UPI limits, NPCI, and BHIM app are guaranteed CCC questions)",
    "detailedExplanation": "### 1. यूपीआई (UPI - Unified Payment Interface):\n- **विकासकर्ता**: **NPCI (National Payments Corporation of India)**.\n- **लॉन्च तिथि**: **11 अप्रैल 2016** (रघुराम राजन, तत्कालीन RBI गवर्नर द्वारा).\n- **पहचानकर्ता**: **VPA (Virtual Payment Address)**, जैसे `mobile@upi` या `name@okhdfcbank`.\n- **UPI PIN**: 4 या 6 अंकों का गुप्त पासवर्ड जो पैसे भेजते समय अनिवार्य होता है (पैसे प्राप्त करने के लिए PIN की आवश्यकता नहीं होती!).\n\n### 2. भीम ऐप (BHIM - Bharat Interface for Money):\n- **लॉन्च तिथि**: **30 दिसंबर 2016** (डॉ. बी. आर. अंबेडकर के नाम पर).\n- **भाषाएं**: **20+ भारतीय भाषाएं**.\n- **ट्रांजेक्शन सीमा (Transaction Limit)**: ₹1,00,000 (1 लाख रुपये) प्रति दिन.\n\n### 3. क्यूआर कोड (QR Code - Quick Response Code):\n- **खोजकर्ता**: **Denso Wave (Japan), 1994** (Masahiro Hara).\n- यह 2D (द्वि-आयामी) बारकोड है जो 7089 संख्यात्मक वर्ण स्टोर कर सकता है।",
    "realWorldAnalogy": "जैसे ईमेल आईडी पर संदेश जाता है, वैसे ही UPI में VPA आईडी पर बैंक का पैसा सीधे बैंक खाते में जाता है।",
    "importantPoints": [
      "UPI और BHIM को **NPCI** (National Payments Corporation of India) ने बनाया है।",
      "UPI को **11 अप्रैल 2016** को लॉन्च किया गया था।",
      "QR Code का पूरा नाम **Quick Response Code** है और इसे **Denso Wave** ने 1994 में बनाया था।",
      "पैसे प्राप्त (Receive) करने के लिए UPI PIN की कभी जरूरत नहीं होती।"
    ],
    "commonMistakes": [
      "पैसे रिसीव करने के लिए UPI PIN डालना (यह साइबर फ्रॉड है, PIN सिर्फ पैसे कटने/भेजने पर लगता है)।"
    ],
    "examTips": [
      "NPCI का पूरा नाम: National Payments Corporation of India।",
      "QR Code = Quick Response Code (2D Barcode)।"
    ],
    "quickRevision": "UPI (NPCI, Apr 2016) enables instant 24/7 bank transfer via VPA; BHIM launched Dec 2016; QR Code (Denso Wave 1994).",
    "practiceAssignment": "BHIM ऐप खोलकर अपना VPA और QR कोड देखें।",
    "microQuiz": [
      {
        "question": "यूपीआई (UPI) और भीम (BHIM) ऐप का विकास किस संस्था द्वारा किया गया है?",
        "options": [
          {
            "id": "A",
            "text": "RBI"
          },
          {
            "id": "B",
            "text": "NPCI"
          },
          {
            "id": "C",
            "text": "SBI"
          },
          {
            "id": "D",
            "text": "NITI Aayog"
          }
        ],
        "correctAnswer": "B",
        "explanation": "NPCI (National Payments Corporation of India) भारत में सभी खुदरा डिजिटल भुगतान प्रणालियों (UPI, IMPS, RuPay, AEPS, NACH) का संचालन करता है।"
      },
      {
        "question": "क्यूआर (QR) कोड का पूरा नाम क्या होता है?",
        "options": [
          {
            "id": "A",
            "text": "Quick Response Code"
          },
          {
            "id": "B",
            "text": "Quality Record Code"
          },
          {
            "id": "C",
            "text": "Quantum Reader Code"
          },
          {
            "id": "D",
            "text": "Query Resource Code"
          }
        ],
        "correctAnswer": "A",
        "explanation": "QR Code का पूर्ण रूप 'Quick Response Code' है, जिसका आविष्कार 1994 में जापानी कंपनी Denso Wave ने किया था।"
      }
    ]
  },
  {
    "chapterNumber": 8,
    "topicNumber": 2,
    "slug": "aeps-and-ussd-banking-star-99-hash",
    "title": "AEPS (Aadhaar Payment) & USSD Banking (*99#)",
    "hindiTitle": "AEPS (आधार इनेबल्ड पेमेंट) एवं USSD बैंकिंग (*99#)",
    "definitionEnglish": "AEPS (Aadhaar Enabled Payment System) allows micro-ATM bank transactions using Aadhaar number and Biometric (fingerprint/iris) authentication, while USSD (*99#) provides basic mobile banking on feature phones without internet.",
    "definitionHindi": "AEPS आधार नंबर और बायोमेट्रिक (फिंगरप्रिंट) द्वारा माइक्रो-एटीएम से बैंकिंग करने की सुविधा है, जबकि USSD (*99#) बिना इंटरनेट वाले कीपैड फोन पर बुनियादी मोबाइल बैंकिंग उपलब्ध कराता है।",
    "simpleWords": "AEPS में आपका अंगूठा ही आपका एटीएम कार्ड और पिन है; और *99# डायल करके बिना इंटरनेट वाले सादा फोन से भी बैंक बैलेंस चेक और पैसे ट्रांसफर किए जा सकते हैं।",
    "examImportance": "Extreme (AEPS services, USSD code *99# and limits in CCC)",
    "detailedExplanation": "### 1. AEPS (Aadhaar Enabled Payment System):\n- **संचालक**: **NPCI**.\n- **प्रमाणीकरण**: 12-अंकीय **Aadhaar Number** + **Biometric (Fingerprint / Iris)**.\n- **उपलब्ध 4 मुख्य सेवाएं**:\n  1. *Cash Withdrawal* (नकद निकासी)\n  2. *Cash Deposit* (नकद जमा)\n  3. *Balance Enquiry* (बैलेंस जांच)\n  4. *Mini Statement / Aadhaar to Aadhaar Fund Transfer*.\n- इसमें डेबिट कार्ड या हस्ताक्षर की कोई आवश्यकता नहीं होती।\n\n### 2. USSD बैंकिंग (Unstructured Supplementary Service Data - `*99#`):\n- **शॉर्ट कोड**: **`*99#`** (स्टार 99 हैश).\n- **विशेषता**: इसके लिए **इंटरनेट कनेक्शन या स्मार्टफोन की आवश्यकता नहीं होती** (साधारण 2G फीचर फोन पर GSM नेटवर्क द्वारा काम करता है).\n- **सेवाएं**: बैलेंस चेक, मिनी स्टेटमेंट, फंड ट्रांसफर (MMID / IFSC द्वारा).\n- **अधिकतम सीमा**: ₹5,000 प्रति ट्रांजेक्शन.",
    "realWorldAnalogy": "AEPS गांव में ग्राहक सेवा केंद्र (CSP) पर अंगूठा लगाकर पैसे निकालने की मशीन है।",
    "importantPoints": [
      "USSD का पूरा नाम **Unstructured Supplementary Service Data** है और इसका कोड **`*99#`** है।",
      "USSD बैंकिंग बिना इंटरनेट के साधारण फीचर फोन पर काम करती है।",
      "AEPS में प्रमाणीकरण के लिए **Biometrics (Fingerprint)** का उपयोग होता है, OTP या डेबिट कार्ड की जरूरत नहीं होती।",
      "AEPS और *99# दोनों का संचालन **NPCI** करता है।"
    ],
    "commonMistakes": [
      "USSD के लिए स्मार्टफोन या 4G इंटरनेट जरूरी समझना (*99# बिना इंटरनेट सादा फोन पर चलता है)।"
    ],
    "examTips": [
      "USSD कोड = *99#, AEPS = Aadhaar Enabled Payment System, MMID = Mobile Money Identifier (7 digits)।"
    ],
    "quickRevision": "AEPS uses Aadhaar + Fingerprint at Micro-ATMs; USSD (*99#) enables offline mobile banking without internet.",
    "practiceAssignment": "मोबाइल में *99# डायल करके अपनी बैंक सूची और बैलेंस इंक्वायरी मेन्यू देखें।",
    "microQuiz": [
      {
        "question": "बिना इंटरनेट वाले साधारण मोबाइल फोन पर बैंकिंग सेवाओं का उपयोग करने के लिए कौन सा USSD कोड डायल किया जाता है?",
        "options": [
          {
            "id": "A",
            "text": "*121#"
          },
          {
            "id": "B",
            "text": "*99#"
          },
          {
            "id": "C",
            "text": "*198#"
          },
          {
            "id": "D",
            "text": "*100#"
          }
        ],
        "correctAnswer": "B",
        "explanation": "NPCI द्वारा संचालित '*99#' सेवा से बिना इंटरनेट के किसी भी मोबाइल से USSD आधारित बैंकिंग की जा सकती है।"
      },
      {
        "question": "AEPS (Aadhaar Enabled Payment System) में लेनदेन के लिए किस प्रमाणीकरण की आवश्यकता होती है?",
        "options": [
          {
            "id": "A",
            "text": "डेबिट कार्ड एवं पिन"
          },
          {
            "id": "B",
            "text": "आधार नंबर एवं बायोमेट्रिक (फिंगरप्रिंट)"
          },
          {
            "id": "C",
            "text": "इंटरनेट बैंकिंग पासवर्ड"
          },
          {
            "id": "D",
            "text": "केवल ओटीपी"
          }
        ],
        "correctAnswer": "B",
        "explanation": "AEPS में ग्राहक को केवल अपना 12 अंकों का आधार नंबर और बायोमेट्रिक फिंगरप्रिंट देना होता है।"
      }
    ]
  },
  {
    "chapterNumber": 8,
    "topicNumber": 3,
    "slug": "internet-banking-neft-rtgs-imps",
    "title": "Internet Banking Transfer Modes: NEFT vs RTGS vs IMPS",
    "hindiTitle": "इंटरनेट बैंकिंग ट्रांसफर: NEFT, RTGS एवं IMPS की विस्तृत तुलना",
    "definitionEnglish": "Electronic fund transfer in India operates via NEFT (batch settlements, 24x7, no min/max limit), RTGS (real-time gross settlement, min ₹2 Lakhs), and IMPS (instant mobile/net payment, 24x7, max ₹5 Lakhs).",
    "definitionHindi": "भारत में इलेक्ट्रॉनिक फंड ट्रांसफर NEFT (बैच आधारित, 24x7, कोई न्यूनतम सीमा नहीं), RTGS (रियल-टाइम ग्रॉस सेटलमेंट, न्यूनतम ₹2 लाख) और IMPS (तत्काल भुगतान, 24x7, अधिकतम ₹5 लाख) के माध्यम से होता है।",
    "simpleWords": "NEFT सामान्य ऑनलाइन ट्रांसफर है, RTGS बड़े कारोबारियों के लिए 2 लाख से ऊपर का तत्काल ट्रांसफर है, और IMPS मोबाइल से तुरंत पैसा भेजने की सेवा है।",
    "examImportance": "Extreme (NEFT/RTGS full forms, limits, and timings in every CCC exam)",
    "detailedExplanation": "### 1. NEFT (National Electronic Funds Transfer):\n- **प्रबंधन**: **RBI (Reserve Bank of India)**.\n- **शुरुआत**: नवंबर 2005.\n- **कार्यप्रणाली**: आधा-आधा घंटे के 48 बैचों में सेटलमेंट (Batch-wise Settlement).\n- **समय**: **24x7x365** (दिसंबर 2019 से 24 घंटे उपलब्ध).\n- **सीमा**: न्यूनतम ₹1, अधिकतम कोई सीमा नहीं (No Minimum / Maximum Limit).\n\n### 2. RTGS (Real Time Gross Settlement):\n- **प्रबंधन**: **RBI (Reserve Bank of India)**.\n- **शुरुआत**: मार्च 2004.\n- **कार्यप्रणाली**: ऑर्डर-दर-ऑर्डर तत्काल रियल टाइम सेटलमेंट (बड़ी राशियों के लिए).\n- **समय**: **24x7x365** (दिसंबर 2020 से 24 घंटे उपलब्ध).\n- **सीमा**: **न्यूनतम ₹2,00,000 (2 लाख रुपये)**, अधिकतम कोई सीमा नहीं.\n\n### 3. IMPS (Immediate Payment Service):\n- **प्रबंधन**: **NPCI**.\n- **शुरुआत**: 22 नवंबर 2010.\n- **कार्यप्रणाली**: 24x7 तत्काल सेकंडों में बैंक ट्रांसफर (मोबाइल MMID या खाता+IFSC द्वारा).\n- **सीमा**: न्यूनतम ₹1, **अधिकतम ₹5,00,000 (5 लाख रुपये)**.\n\n### 4. IFSC Code (Indian Financial System Code):\n- कुल **11 वर्ण (11 Characters)**:\n  - पहले 4 अक्षर: **Bank Name** (जैसे `SBIN` = SBI).\n  - 5वां अक्षर: हमेशा **शून्य (`0`)** होता है.\n  - अंतिम 6 अंक/अक्षर: **शाखा कोड (Branch Code)** (जैसे `001234`).",
    "realWorldAnalogy": "NEFT सिटी बस है जो हर आधे घंटे पर चलती है; RTGS वीआईपी चार्टर्ड प्लेन है (2 लाख से ऊपर); IMPS एक्सप्रेस बुलेट ट्रेन है।",
    "importantPoints": [
      "RTGS में न्यूनतम ट्रांसफर सीमा **₹2,00,000 (2 लाख रुपये)** होती है।",
      "NEFT में कोई न्यूनतम या अधिकतम सीमा नहीं होती।",
      "IFSC कोड में कुल **11 Characters** होते हैं और 5वां कैरेक्टर हमेशा **0 (शून्य)** होता है।",
      "NEFT और RTGS का संचालन **RBI** करता है, जबकि IMPS का संचालन **NPCI** करता है।"
    ],
    "commonMistakes": [
      "RTGS में न्यूनतम ₹10,000 समझना (RTGS की न्यूनतम सीमा ₹2 लाख है)।",
      "IFSC कोड को 10 या 12 अंकों का समझना (यह 11 वर्णों का होता है)।"
    ],
    "examTips": [
      "IFSC Code: 11 Chars, 5th character is always '0'.",
      "RTGS Minimum Limit = ₹2,00,000. NEFT Settlement = Half-hourly batches."
    ],
    "quickRevision": "NEFT (RBI, 24x7 batches, no min limit), RTGS (RBI, min ₹2 Lakh, real-time), IMPS (NPCI, max ₹5 Lakh, instant 24x7), IFSC (11 chars).",
    "practiceAssignment": "अपनी चेकबुक पर मुद्रित 11-अंकीय IFSC कोड देखकर 5वें स्थान पर '0' की पुष्टि करें।",
    "microQuiz": [
      {
        "question": "आरटीजीएस (RTGS) के माध्यम से न्यूनतम कितनी धनराशि का ट्रांसफर किया जा सकता है?",
        "options": [
          {
            "id": "A",
            "text": "₹50,000"
          },
          {
            "id": "B",
            "text": "₹1,00,000"
          },
          {
            "id": "C",
            "text": "₹2,00,000"
          },
          {
            "id": "D",
            "text": "कोई न्यूनतम सीमा नहीं"
          }
        ],
        "correctAnswer": "C",
        "explanation": "RTGS (Real Time Gross Settlement) में न्यूनतम लेनदेन सीमा ₹2,00,000 (दो लाख रुपये) है, जबकि अधिकतम कोई सीमा नहीं है।"
      },
      {
        "question": "आईएफएससी (IFSC) कोड में कुल कितने वर्ण (Characters) होते हैं और 5वां वर्ण क्या होता है?",
        "options": [
          {
            "id": "A",
            "text": "10 वर्ण, 5वां अंक 1"
          },
          {
            "id": "B",
            "text": "11 वर्ण, 5वां अंक 0 (शून्य)"
          },
          {
            "id": "C",
            "text": "12 वर्ण, 5वां अंक 0"
          },
          {
            "id": "D",
            "text": "16 वर्ण, 5वां अंक X"
          }
        ],
        "correctAnswer": "B",
        "explanation": "IFSC कोड 11 वर्णों का अल्फ़ान्यूमेरिक कोड होता है जिसका 5वां कैरेक्टर हमेशा '0' (Zero) आरक्षित होता है।"
      }
    ]
  }
];
