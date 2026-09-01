// CCC Chapter 6: Introduction to Internet and WWW
export const chapter6Topics = [
  {
    "chapterNumber": 6,
    "topicNumber": 1,
    "slug": "computer-networks-lan-wan-topologies",
    "title": "Computer Networks: LAN, WAN & Network Topologies",
    "hindiTitle": "कंप्यूटर नेटवर्क: LAN, WAN एवं नेटवर्क टोपोलॉजी",
    "definitionEnglish": "A computer network is an interconnected group of autonomous computers sharing hardware resources and exchanging data, categorized by scale (LAN, MAN, WAN) and topological layout (Star, Bus, Ring, Mesh, Tree).",
    "definitionHindi": "कंप्यूटर नेटवर्क आपस में जुड़े कंप्यूटरों का समूह है जो डेटा और हार्डवेयर संसाधनों को साझा करते हैं, जिन्हें भौगोलिक विस्तार (LAN, MAN, WAN) और भौतिक बनावट (स्टार, बस, रिंग, मेश टोपोलॉजी) में वर्गीकृत किया जाता है।",
    "simpleWords": "दो या अधिक कंप्यूटरों को तार या वाई-फाई से जोड़ना ताकि वे आपस में फाइलें और प्रिंटर शेयर कर सकें।",
    "examImportance": "Extreme (3-4 questions in CCC)",
    "detailedExplanation": "### 1. भौगोलिक विस्तार के आधार पर नेटवर्क के प्रकार:\n- **LAN (Local Area Network)**: एक कमरे, ऑफिस या बिल्डिंग तक सीमित (1 किमी तक). उच्च गति (100 Mbps - 1 Gbps).\n- **MAN (Metropolitan Area Network)**: पूरे शहर (City) में फैला नेटवर्क (जैसे केबल टीवी नेटवर्क).\n- **WAN (Wide Area Network)**: देशों और महाद्वीपों में फैला वैश्विक नेटवर्क (इंटरनेट सबसे बड़ा WAN है).\n- **PAN (Personal Area Network)**: व्यक्ति के निजी दायरे (10 मीटर तक) में, जैसे Bluetooth.\n\n### 2. प्रमुख नेटवर्क टोपोलॉजी (Network Topologies):\n1. **Star Topology**: सभी कंप्यूटर एक केंद्रीय डिवाइस (**Hub / Switch**) से जुड़े होते हैं। (सबसे लोकप्रिय).\n2. **Bus Topology**: सभी नोड्स एक मुख्य केबल (**Backbone Cable**) से जुड़े होते हैं जिसके सिरों पर **Terminator** लगे होते हैं।\n3. **Ring Topology**: प्रत्येक नोड अपने पास के दो नोड्स से जुड़कर एक बंद लूप बनाता है (Token Ring).\n4. **Mesh Topology**: प्रत्येक नोड नेटवर्क के अन्य सभी नोड्स से सीधे जुड़ा होता है (Point-to-Point). सबसे सुरक्षित एवं सबसे महंगा (Total cables = n*(n-1)/2).",
    "realWorldAnalogy": "Star टोपोलॉजी साइकिल का पहिया है (बीच में धुरी Hub, तीलियां तार); Bus टोपोलॉजी एक सीधी सड़क है।",
    "importantPoints": [
      "इंटरनेट (Internet) दुनिया का सबसे बड़ा WAN (Wide Area Network) है।",
      "Star टोपोलॉजी में केंद्रीय डिवाइस Hub या Switch कहलाती है।",
      "Bluetooth एक PAN (Personal Area Network) तकनीक है जिसकी मानक रेंज 10 मीटर होती है।",
      "Mesh टोपोलॉजी सबसे अधिक विश्वसनीय और फॉल्ट-टॉलरेंट (Fault-Tolerant) होती है।"
    ],
    "commonMistakes": [
      "Star टोपोलॉजी के केंद्र में Modem समझना (Hub या Switch होता है)।"
    ],
    "examTips": [
      "PAN की सीमा: 10 मीटर। Bluetooth आविष्कारक: Jaap Haartsen (Ericsson)।"
    ],
    "quickRevision": "LAN (building) < MAN (city) < WAN (global Internet); Star uses Hub/Switch; Mesh provides maximum reliability.",
    "practiceAssignment": "कंप्यूटर में Command Prompt खोलकर 'ipconfig' टाइप करें और अपना लोकल IPv4 एड्रेस देखें।",
    "microQuiz": [
      {
        "question": "स्टार टोपोलॉजी (Star Topology) में सभी कंप्यूटर किस केंद्रीय डिवाइस से जुड़े होते हैं?",
        "options": [
          {
            "id": "A",
            "text": "Hub / Switch"
          },
          {
            "id": "B",
            "text": "Terminator"
          },
          {
            "id": "C",
            "text": "Repeater"
          },
          {
            "id": "D",
            "text": "Gateway"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Star Topology में सभी वर्कस्टेशन एक सेंट्रल Hub या Switch से जुड़े होते हैं।"
      },
      {
        "question": "ब्लूटूथ (Bluetooth) किस प्रकार के नेटवर्क का उदाहरण है?",
        "options": [
          {
            "id": "A",
            "text": "LAN"
          },
          {
            "id": "B",
            "text": "MAN"
          },
          {
            "id": "C",
            "text": "WAN"
          },
          {
            "id": "D",
            "text": "PAN"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Bluetooth एक PAN (Personal Area Network) तकनीक है जो लगभग 10 मीटर के दायरे में काम करती है।"
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 2,
    "slug": "ip-address-mac-address-and-imei",
    "title": "IP Address (IPv4 vs IPv6), MAC Address & IMEI Number",
    "hindiTitle": "आईपी एड्रेस (IPv4/IPv6), मैक एड्रेस एवं IMEI नंबर",
    "definitionEnglish": "An IP address logically identifies a device on a network (IPv4: 32-bit, IPv6: 128-bit), MAC address is a permanent 48-bit hardware identifier burned into NIC, and IMEI is a 15-digit unique mobile equipment identifier.",
    "definitionHindi": "आईपी एड्रेस नेटवर्क पर डिवाइस का लॉजिकल पता है (IPv4: 32-बिट, IPv6: 128-बिट), मैक एड्रेस NIC पर दर्ज 48-बिट स्थाई भौतिक पता है, और IMEI मोबाइल का 15-अंकीय विशिष्ट पहचान नंबर है।",
    "simpleWords": "IP आपका वर्तमान किराए का पता है जो बदल सकता है, MAC आपका आधार कार्ड (फिंगरप्रिंट) है जो कभी नहीं बदलता, और IMEI आपके फोन का चेसिस नंबर है।",
    "examImportance": "Extreme (Direct questions on bits and lengths in 100% CCC exams)",
    "detailedExplanation": "### 1. IPv4 बनाम IPv6 की तुलना:\n- **IPv4 (IP Version 4)**:\n  - साइज: **32 Bits** (4 Bytes).\n  - प्रारूप: 4 दशमलव संख्याओं का समूह जो डॉट (`.`) से अलग होता है (जैसे `192.168.1.1`).\n  - प्रत्येक ऑक्टेट की रेंज: **0 से 255**.\n- **IPv6 (IP Version 6)**:\n  - साइज: **128 Bits** (16 Bytes).\n  - प्रारूप: 8 हेक्साडेसिमल समूहों का सेट जो कोलन (`:`) से अलग होता है (जैसे `2001:0db8:85a3::8a2e:0370:7334`).\n\n### 2. MAC Address (Media Access Control):\n- साइज: **48 Bits** (6 Bytes / 12 Hex Digits).\n- यह नेटवर्क कार्ड (NIC) का स्थाई भौतिक पता (Physical Address) होता है।\n- प्रारूप: `00:1A:2B:3C:4D:5E` (कोलन या हाइफन से अलग).\n\n### 3. IMEI Number (International Mobile Equipment Identity):\n- साइज: **15 Digits** (15 अंक).\n- मोबाइल फोन पर डायल कोड: **`*#06#`** (यह कोड डायल करने पर स्क्रीन पर IMEI दिखता है).",
    "realWorldAnalogy": "IP एड्रेस घर का पता है, MAC एड्रेस व्यक्ति का डीएनए/फिंगरप्रिंट है, और IMEI फोन का रजिस्ट्रेशन नंबर है।",
    "importantPoints": [
      "IPv4 = **32 Bits**, IPv6 = **128 Bits**।",
      "MAC Address = **48 Bits** (या 6 Bytes)।",
      "IMEI Number में कुल **15 अंक** होते हैं और इसका पता लगाने के लिए **`*#06#`** डायल करते हैं।",
      "IPv4 के प्रत्येक भाग (Octet) का मान 0 से 255 के बीच होता है (256 या अधिक अमान्य है)।"
    ],
    "commonMistakes": [
      "IPv4 को 128 बिट और IPv6 को 32 बिट समझना (IPv4 32 है, IPv6 128 है)।",
      "192.168.1.300 को वैध IP मानना (255 से ऊपर अमान्य है)।"
    ],
    "examTips": [
      "याद रखें: IPv4=32, IPv6=128, MAC=48, IMEI=15 Digits, IMEI Code=*#06#।"
    ],
    "quickRevision": "IPv4 (32-bit dot-decimal), IPv6 (128-bit hex-colon), MAC (48-bit hardware address), IMEI (15-digit mobile ID via *#06#).",
    "practiceAssignment": "अपने मोबाइल पर *#06# डायल करके 15 अंकों का IMEI नंबर चेक करें।",
    "microQuiz": [
      {
        "question": "IPv4 एड्रेस का आकार (Size) कितने बिट्स का होता है?",
        "options": [
          {
            "id": "A",
            "text": "16 Bits"
          },
          {
            "id": "B",
            "text": "32 Bits"
          },
          {
            "id": "C",
            "text": "64 Bits"
          },
          {
            "id": "D",
            "text": "128 Bits"
          }
        ],
        "correctAnswer": "B",
        "explanation": "IPv4 32 बिट्स (4 बाइट्स) का होता है जबकि IPv6 128 बिट्स (16 बाइट्स) का होता है।"
      },
      {
        "question": "मैक एड्रेस (MAC Address) की लंबाई कितने बिट्स की होती है?",
        "options": [
          {
            "id": "A",
            "text": "32 Bits"
          },
          {
            "id": "B",
            "text": "48 Bits"
          },
          {
            "id": "C",
            "text": "64 Bits"
          },
          {
            "id": "D",
            "text": "128 Bits"
          }
        ],
        "correctAnswer": "B",
        "explanation": "MAC Address 48 बिट्स (6 बाइट्स / 12 हेक्साडेसिमल डिजिट्स) का फिजिकल एड्रेस होता है।"
      },
      {
        "question": "मोबाइल फोन का IMEI नंबर जानने के लिए कौन सा USSD कोड डायल किया जाता है?",
        "options": [
          {
            "id": "A",
            "text": "*#06#"
          },
          {
            "id": "B",
            "text": "*99#"
          },
          {
            "id": "C",
            "text": "*#123#"
          },
          {
            "id": "D",
            "text": "*#000#"
          }
        ],
        "correctAnswer": "A",
        "explanation": "मोबाइल में '*#06#' डायल करने पर 15 अंकों का विशिष्ट IMEI नंबर स्क्रीन पर प्रदर्शित होता है।"
      }
    ]
  }
];
