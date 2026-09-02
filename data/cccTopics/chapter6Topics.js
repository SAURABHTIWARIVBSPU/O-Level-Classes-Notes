// CCC Chapter 6: Introduction to Internet and WWW - Complete Textbook Content
export const chapter6Topics = [
  {
    "chapterNumber": 6,
    "topicNumber": 1,
    "slug": "computer-networks-lan-wan-topologies",
    "title": "Computer Networks: LAN, WAN & Network Topologies",
    "hindiTitle": "कंप्यूटर नेटवर्क: LAN, WAN एवं नेटवर्क टोपोलॉजी",
    "definitionEnglish": "A computer network is an interconnected group of autonomous computing devices linked via physical cables or wireless signals to share data files, hardware peripherals (printers), and software resources.",
    "definitionHindi": "कंप्यूटर नेटवर्क दो या दो से अधिक स्वायत्त कंप्यूटरों का एक ऐसा अंतर-जुड़ाव (Interconnection) है जो केबल या वायरलेस माध्यम से डेटा, फाइलें, प्रिंटर और सॉफ्टवेयर साझा करने के लिए जुड़े होते हैं।",
    "simpleWords": "कंप्यूटरों को आपस में जोड़कर डेटा और प्रिंटर शेयर करने की व्यवस्था को नेटवर्क कहते हैं। सबसे छोटा PAN, कमरे में LAN, शहर में MAN और पूरी दुनिया में WAN होता है।",
    "examImportance": "Very High (4-5 direct questions on network scale PAN/LAN/MAN/WAN, and topologies Star/Bus/Ring/Mesh in every CCC exam)",
    "detailedExplanation": "### 1. Classification of Computer Networks by Geographical Scale\n1. **PAN (Personal Area Network):**\n   - **Range:** Within **10 meters (~33 feet)** around an individual person.\n   - **Technologies:** Bluetooth (IEEE 802.15.1), Zigbee, Wireless USB, Hotspot.\n   - **Use Case:** Connecting smartwatch to phone, or wireless headphones to laptop.\n2. **LAN (Local Area Network):**\n   - **Range:** Within a single room, office, home, school computer lab, or building (Up to **1 km**).\n   - **Technologies:** Ethernet twisted-pair cables (RJ-45), Wi-Fi routers (IEEE 802.11), network switches.\n   - **Speed:** Ultra-high speed (100 Mbps to 10 Gbps) with low error rates.\n3. **MAN (Metropolitan Area Network):**\n   - **Range:** Spans an entire city or municipal region (Up to **50 km**).\n   - **Technologies:** Fiber-optic backbones, cable television networks.\n4. **WAN (Wide Area Network):**\n   - **Range:** Spans entire countries, continents, or the global planet.\n   - **Technologies:** Fiber-optic undersea submarine cables, communication satellites, microwave relays.\n   - **Prime Example:** **The Global Internet**.\n\n### 2. Standard Network Topologies (Geometric Layouts)\n| Topology | Structural Geometry & Design | Key Advantages | Key Limitations |\n| :--- | :--- | :--- | :--- |\n| **Star Topology** | All nodes connect to a **central Hub or Switch** | Most popular modern topology; failure of one cable does not affect others | If central Hub/Switch fails, entire network crashes |\n| **Bus Topology** | All devices connect to a single central **backbone cable terminated at both ends** | Easy to install, uses minimal cabling | If backbone cable breaks, entire network fails; packet collisions |\n| **Ring Topology** | Nodes connect in a continuous **closed circular loop**; tokens circulate unidirectionally | Predictable token access | Failure of a single computer breaks the whole ring loop |\n| **Mesh Topology** | **Every single node has a dedicated point-to-point link** to every other node | Highest redundancy, absolute fault tolerance, maximum security | Highest cabling cost and complex installation (`n(n-1)/2` links) |\n| **Tree Topology** | Hierarchical parent-child tree structure (Combination of Star + Bus) | Scalable across multi-floor school/corporate departments | Failure of root hub disconnects child branches |",
    "realWorldAnalogy": "Star topology is like the spokes of a bicycle wheel connecting to the center hub; Bus topology is like passengers sitting along the single center aisle of a bus.",
    "importantPoints": [
      "PAN range is up to 10 meters (Bluetooth).",
      "LAN covers a building/office; MAN covers a city; WAN covers the world (Internet).",
      "Star Topology connects all devices to a central Hub or Switch (most widely used).",
      "Mesh Topology provides dedicated point-to-point connections between every pair of nodes.",
      "Number of physical links in a full Mesh network with 'n' nodes is n(n-1)/2."
    ],
    "commonMistakes": [
      "Believing failure of one PC breaks a Star network (In Star, only that single PC disconnects; the rest of the network operates normally).",
      "Thinking Bluetooth operates over kilometers (Bluetooth PAN is limited to ~10 meters)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'Which topology connects all nodes to a central Hub or Switch?' ➔ Star Topology.",
      "Guaranteed CCC Question: 'What is the largest type of computer network?' ➔ WAN (Wide Area Network).",
      "Guaranteed CCC Question: 'Bluetooth is an example of which network type?' ➔ PAN."
    ],
    "quickRevision": "Networks: PAN (<10m, Bluetooth), LAN (Office/Lab), MAN (City, Cable TV), WAN (Global Internet). Topologies: Star (central hub), Bus (single backbone), Ring (token loop), Mesh (dedicated links to all).",
    "practiceAssignment": "Draw diagrams of Star, Bus, Ring, and Mesh topologies, and calculate the number of cables required for a 6-node Mesh network (6×5/2 = 15 cables).",
    "microQuiz": [
      {
        "question": "Which computer network topology connects every computer node to a SINGLE CENTRAL HUB OR SWITCH?",
        "options": [
          {
            "id": "A",
            "text": "Bus Topology"
          },
          {
            "id": "B",
            "text": "Ring Topology"
          },
          {
            "id": "C",
            "text": "Star Topology"
          },
          {
            "id": "D",
            "text": "Mesh Topology"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Star topology routes all network traffic through a central hub or switch device."
      },
      {
        "question": "Bluetooth wireless connectivity used to pair headphones with a mobile phone is classified under which network category?",
        "options": [
          {
            "id": "A",
            "text": "LAN"
          },
          {
            "id": "B",
            "text": "PAN"
          },
          {
            "id": "C",
            "text": "MAN"
          },
          {
            "id": "D",
            "text": "WAN"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bluetooth operates within a 10-meter personal radius, forming a Personal Area Network (PAN)."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 2,
    "slug": "concept-of-internet-and-www",
    "title": "Concept of Internet, WWW & Applications",
    "hindiTitle": "इंटरनेट एवं वर्ल्ड वाइड वेब (WWW) की अवधारणा",
    "definitionEnglish": "The Internet is a globally interconnected system of computer networks communicating via TCP/IP protocols, while the World Wide Web (WWW) is an information service operating on top of the Internet that links hypertext documents via hyperlinks.",
    "definitionHindi": "इंटरनेट दुनिया भर के कंप्यूटर नेटवर्कों का एक वैश्विक हार्डवेयर जाल है, जबकि वर्ल्ड वाइड वेब (WWW) इंटरनेट पर चलने वाली एक सूचना सेवा है जो हाइपरटेक्स्ट पेजों को हाइपरलिंक्स द्वारा आपस में जोड़ती है।",
    "simpleWords": "इंटरनेट दुनिया भर की सड़कों और केबलों का जाल है, जबकि WWW उस पर चलने वाली गाड़ियां (वेबसाइटें और वेबपेज) हैं। टिम बर्नर्स-ली ने 1989 में WWW बनाया था।",
    "examImportance": "Very High (3-4 questions on ARPANET 1969, Tim Berners-Lee 1989, and Internet vs WWW)",
    "detailedExplanation": "### 1. Inception and Major Milestones of the Internet\n- **1969 — ARPANET (Advanced Research Projects Agency Network):** The world's first packet-switching computer network, commissioned by the U.S. Department of Defense (DoD). Direct ancestor of the Internet.\n- **1974 — TCP/IP:** Developed by **Vinton Cerf** and **Bob Kahn** (Universally honored as the **\"Fathers of the Internet\"**).\n- **January 1, 1983 (\"Flag Day\"):** ARPANET standardized exclusively on TCP/IP, officially establishing the modern Internet.\n- **August 15, 1995:** Public commercial Internet was launched in India by **VSNL (Videsh Sanchar Nigam Limited)**.\n\n### 2. Invention of the World Wide Web (WWW)\n- **1989:** Invented by British scientist **Sir Tim Berners-Lee** at CERN (Geneva, Switzerland).\n- **The 3 Core Pillars of the Web created by Tim Berners-Lee:**\n  1. **HTML (HyperText Markup Language):** Structural language for building web pages.\n  2. **HTTP (HyperText Transfer Protocol):** Application protocol for transferring hypertext resources.\n  3. **URI / URL (Uniform Resource Identifier):** Global addressing scheme to locate web documents.\n- **W3C (World Wide Web Consortium):** Founded by Tim Berners-Lee in 1994 to maintain web standards.\n\n### 3. Crucial Difference: Internet vs. WWW\n| Dimension | The Internet | The World Wide Web (WWW / W3) |\n| :--- | :--- | :--- |\n| **Nature** | The global physical infrastructure of hardware, routers, fiber cables | A software service of interlinked hypertext documents running on Internet |\n| **Inception** | 1969 (ARPANET) / 1983 (TCP/IP) | 1989 (Tim Berners-Lee at CERN) |\n| **Protocols** | TCP, IP, UDP, BGP, ICMP | HTTP, HTTPS, WebSocket |\n| **Analogy** | The physical railway tracks and highway roads | The trains, cars, and delivery trucks carrying cargo |",
    "realWorldAnalogy": "The Internet is like the physical network of mobile phone towers and satellite signals; the World Wide Web (WWW) is like WhatsApp and YouTube apps running over that signal.",
    "importantPoints": [
      "ARPANET (1969) was the world's first packet-switching network and predecessor of the Internet.",
      "Vinton Cerf and Bob Kahn are the Fathers of the Internet (created TCP/IP).",
      "Sir Tim Berners-Lee invented the World Wide Web (WWW) in 1989 at CERN.",
      "Public Internet was launched in India on August 15, 1995 by VSNL.",
      "The Internet is the hardware network; WWW is the software hypertext service."
    ],
    "commonMistakes": [
      "Assuming Internet and WWW are identical (The Internet is the physical network; WWW is a service on top of the Internet).",
      "Believing Bill Gates invented the Web (Sir Tim Berners-Lee invented the World Wide Web)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'Who is known as the Father of the World Wide Web (WWW)?' ➔ Tim Berners-Lee.",
      "Guaranteed CCC Question: 'When was Internet launched for public in India?' ➔ 15 August 1995 (by VSNL).",
      "Guaranteed CCC Question: 'What was the first network in the world?' ➔ ARPANET."
    ],
    "quickRevision": "Internet: 1969 ARPANET (DoD), Fathers=Vint Cerf & Bob Kahn, India launch=15 Aug 1995 (VSNL). WWW: 1989 CERN, Creator=Tim Berners-Lee (HTML, HTTP, URL, W3C).",
    "practiceAssignment": "Research the history of VSNL in India and write down the names of the first 4 cities in India connected to the Internet in 1995.",
    "microQuiz": [
      {
        "question": "Who invented the World Wide Web (WWW) at CERN in the year 1989?",
        "options": [
          {
            "id": "A",
            "text": "Charles Babbage"
          },
          {
            "id": "B",
            "text": "Vinton Cerf"
          },
          {
            "id": "C",
            "text": "Sir Tim Berners-Lee"
          },
          {
            "id": "D",
            "text": "Bill Gates"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Sir Tim Berners-Lee invented the World Wide Web (WWW), HTML, HTTP, and the first browser in 1989 at CERN."
      },
      {
        "question": "On which historic date was public Internet service officially launched in India by VSNL?",
        "options": [
          {
            "id": "A",
            "text": "26 January 1950"
          },
          {
            "id": "B",
            "text": "15 August 1995"
          },
          {
            "id": "C",
            "text": "01 January 2000"
          },
          {
            "id": "D",
            "text": "02 October 1991"
          }
        ],
        "correctAnswer": "B",
        "explanation": "VSNL (Videsh Sanchar Nigam Limited) officially launched public commercial Internet in India on August 15, 1995."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 3,
    "slug": "website-address-url-and-domain-names",
    "title": "Website Address, URL Structure & Domain Names",
    "hindiTitle": "वेबसाइट एड्रेस, URL संरचना एवं डोमेन नेम्स",
    "definitionEnglish": "A Uniform Resource Locator (URL) is the standardized global address used to identify and locate unique digital resources (webpages, images, files) on the World Wide Web, organized with protocols, domain names, paths, and top-level domain extensions.",
    "definitionHindi": "URL (Uniform Resource Locator) इंटरनेट पर किसी भी वेबपेज, फाइल या संसाधन का एक विशिष्ट वैश्विक पता होता है, जिसमें प्रोटोकॉल, डोमेन नाम, पोर्ट और फाइल पाथ शामिल होते हैं।",
    "simpleWords": "URL किसी वेबसाइट का पूरा वेब पता होता है (जैसे https://www.nielit.gov.in) जिसमें .com, .in, .gov.in जैसे डोमेन एक्सटेंशन लगे होते हैं।",
    "examImportance": "Very High (3-4 questions on URL full form, anatomy breakdown, and TLD domain extensions)",
    "detailedExplanation": "### 1. Anatomy of a Complete URL\nA URL provides the full addressing syntax required by web browsers to fetch assets over the network:\n\n```\nhttps://www.nielit.gov.in:443/student/courses.html?id=10#syllabus\n│──┬─┘  │───────┬────────┘│─┬─┘│────────┬────────┘ │───┬──┘ │───┬────┘\nScheme    Domain Host      Port    Path to Resource  Query    Fragment /\nProtocol  (Subdomain+Name)                           String   Anchor\n```\n\n1. **Protocol / Scheme (`https://`):** Specifies the communications protocol (HTTP, HTTPS, FTP).\n2. **Subdomain (`www`):** Identifies the specific sub-server of the primary domain.\n3. **Domain Name (`nielit.gov.in`):** The human-readable name mapped to the server's numerical IP address.\n4. **Port Number (`:443`):** The communication port (default: `80` for HTTP, `443` for HTTPS).\n5. **Path to Resource (`/student/courses.html`):** The exact directory path and file on the server.\n6. **Query String (`?id=10`):** Key-value parameters passed dynamically to backend scripts.\n7. **Fragment / Bookmark (`#syllabus`):** Jumps directly to a specific named section anchor on that page.\n\n### 2. Classification of Top-Level Domains (TLDs)\n- **Generic Top-Level Domains (gTLD):**\n  - **`.com`:** Commercial businesses and enterprises.\n  - **`.org`:** Non-profit charitable organizations.\n  - **`.edu`:** Accredited educational institutions and universities.\n  - **`.gov`:** Government departments and official agencies.\n  - **`.mil`:** Military and defense forces.\n  - **`.net`:** Network infrastructure and service providers.\n- **Country Code Top-Level Domains (ccTLD):**\n  - **`.in`:** India | **`.uk`:** United Kingdom | **`.us`:** United States | **`.au`:** Australia | **`.jp`:** Japan | **`.ca`:** Canada.",
    "realWorldAnalogy": "A URL is like an international postal address: 'https://' is the courier type (Air Mail), 'nielit.gov.in' is the city and building name, and '/student/courses.html' is the specific room and desk number.",
    "importantPoints": [
      "URL stands for Uniform Resource Locator.",
      "HTTPS operates on Port 443; HTTP operates on Port 80.",
      ".com = Commercial | .gov = Government | .edu = Educational | .org = Organization | .in = India.",
      "The domain name is converted to an IP address by the DNS (Domain Name System)."
    ],
    "commonMistakes": [
      "Writing URL as 'Universal Resource Locator' (The official standard is 'Uniform Resource Locator').",
      "Assuming .gov can be purchased by private commercial businesses (.gov is strictly restricted to government bodies)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What does URL stand for?' ➔ Uniform Resource Locator.",
      "Guaranteed CCC Question: 'What type of organization uses the .org domain?' ➔ Non-Profit Organization.",
      "Guaranteed CCC Question: 'What is the default port for HTTPS?' ➔ Port 443."
    ],
    "quickRevision": "URL=Uniform Resource Locator. Structure: Protocol (https) + Domain (nielit.gov.in) + Port (443) + Path + Query (?id=1) + Fragment (#sec). TLDs: .com, .gov, .edu, .org, .in.",
    "practiceAssignment": "Inspect the URL of 3 official government portals (e.g., nielit.gov.in, incometax.gov.in, uidai.gov.in) and identify the protocol, domain, and TLD.",
    "microQuiz": [
      {
        "question": "What is the full form of the web acronym 'URL'?",
        "options": [
          {
            "id": "A",
            "text": "Universal Resource Locator"
          },
          {
            "id": "B",
            "text": "Uniform Resource Locator"
          },
          {
            "id": "C",
            "text": "Unified Routing Link"
          },
          {
            "id": "D",
            "text": "Universal Reference Link"
          }
        ],
        "correctAnswer": "B",
        "explanation": "URL stands for Uniform Resource Locator, standardized by the W3C and IETF."
      },
      {
        "question": "Which Top-Level Domain (TLD) extension is exclusively designated for GOVERNMENT organizations?",
        "options": [
          {
            "id": "A",
            "text": ".com"
          },
          {
            "id": "B",
            "text": ".gov"
          },
          {
            "id": "C",
            "text": ".org"
          },
          {
            "id": "D",
            "text": ".net"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The .gov top-level domain is strictly reserved for authorized governmental agencies and entities."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 4,
    "slug": "ip-address-mac-address-and-imei",
    "title": "IP Address (IPv4 vs IPv6), MAC Address & IMEI Number",
    "hindiTitle": "आईपी एड्रेस (IPv4/IPv6), मैक एड्रेस एवं IMEI नंबर",
    "definitionEnglish": "Network addressing protocols assign unique logical identifiers (IPv4 32-bit, IPv6 128-bit) and permanent hardware identifiers (MAC Address 48-bit, IMEI 15-digit) to route packets and uniquely authenticate devices globally.",
    "definitionHindi": "नेटवर्क एड्रेसिंग में डिवाइसों को पहचानने के लिए लॉजिकल एड्रेस (IPv4 32-बिट, IPv6 128-बिट) और स्थायी हार्डवेयर एड्रेस (MAC एड्रेस 48-बिट, IMEI 15-अंकीय) का उपयोग किया जाता है।",
    "simpleWords": "IPv4 32-बिट (4 बाइट) का होता है, IPv6 128-बिट (16 बाइट) का होता है, MAC एड्रेस 48-बिट (6 बाइट) का हार्डवेयर पता है और मोबाइल का IMEI 15 अंकों का होता है (*#06#)।",
    "examImportance": "Very High (5-6 direct questions on IPv4 bits, IPv6 bits, MAC address bits, and IMEI check code *#06# in every CCC exam)",
    "detailedExplanation": "### 1. IP Address: IPv4 vs. IPv6 (Crucial CCC Topic)\nAn IP (Internet Protocol) address is a logical numerical address assigned to every device on a TCP/IP network:\n| Dimension | IPv4 (Internet Protocol v4) | IPv6 (Internet Protocol v6) |\n| :--- | :--- | :--- |\n| **Address Length in Bits** | **32 Bits** (`2^32`) | **128 Bits** (`2^128`) |\n| **Address Length in Bytes**| **4 Bytes** (4 Octets) | **16 Bytes** (16 Octets) |\n| **Notation / Representation** | Decimal numbers separated by **Dots (.)** | Hexadecimal digits separated by **Colons (:)** |\n| **Example Format** | `192.168.1.1` or `172.217.167.78` | `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |\n| **Total Address Space** | ~**4.29 Billion** (`4.29 × 10^9`) | ~**340 Undecillion** (`3.4 × 10^38` — virtually infinite) |\n| **Octet Range** | `0` to `255` per octet | `0000` to `ffff` per 16-bit hex group |\n\n### 2. MAC Address (Media Access Control / Physical Address)\n- **Length:** **48 Bits (6 Bytes)**.\n- **Nature:** Permanent, hardware-burned physical identifier stamped into the Network Interface Card (**NIC**) during factory manufacturing.\n- **Notation:** 6 pairs of hexadecimal digits separated by colons or hyphens:\n  - Example: `00:1A:2B:3C:4D:5E`\n  - First 3 Bytes (`00:1A:2B`): **OUI (Organizationally Unique Identifier)** identifying the manufacturer (e.g., Intel, Realtek).\n  - Last 3 Bytes (`3C:4D:5E`): Unique Device Serial Number.\n\n### 3. IMEI Number (International Mobile Equipment Identity)\n- **Length:** Exactly **15 Digits**.\n- **Nature:** Globally unique serial identifier for mobile cellular phones and modems. Used by telecom operators and police to track or block stolen mobile phones on cellular towers.\n- **USSD Code to View IMEI on any Phone:** **`*#06#`** (Star-Hash-Zero-Six-Hash).",
    "realWorldAnalogy": "An IP address is like your current hotel room number (changes when you move); a MAC address is like your permanent biometric fingerprint (never changes); an IMEI is like the engine chassis number of your car.",
    "importantPoints": [
      "IPv4 is 32 Bits (4 Bytes) long, separated by dots (0-255 range).",
      "IPv6 is 128 Bits (16 Bytes) long, separated by colons.",
      "MAC Address is 48 Bits (6 Bytes) long, permanently burned into the NIC card.",
      "IMEI number consists of exactly 15 digits.",
      "The USSD code to check IMEI number on a mobile phone is *#06#."
    ],
    "commonMistakes": [
      "Confusing IPv4 bytes with IPv6 bytes (IPv4 = 4 Bytes = 32 bits; IPv6 = 16 Bytes = 128 bits).",
      "Thinking a MAC address changes when you connect to a new Wi-Fi network (IP address changes, but the physical MAC address remains fixed)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'How many bits are in an IPv4 address?' ➔ 32 Bits.",
      "Guaranteed CCC Question: 'How many bits are in an IPv6 address?' ➔ 128 Bits.",
      "Guaranteed CCC Question: 'How many bits are in a MAC Address?' ➔ 48 Bits (6 Bytes).",
      "Guaranteed CCC Question: 'Which code is dialed to find the IMEI number?' ➔ *#06#."
    ],
    "quickRevision": "IPv4=32 bits (4 bytes, dots), IPv6=128 bits (16 bytes, colons), MAC=48 bits (6 bytes, physical NIC), IMEI=15 digits (dial *#06#).",
    "practiceAssignment": "Open Command Prompt in Windows and type `ipconfig /all` to find your IPv4 Address and physical MAC Address (Physical Address). Dial *#06# on your phone to view its 15-digit IMEI.",
    "microQuiz": [
      {
        "question": "What is the TOTAL length in bits of an Internet Protocol version 4 (IPv4) address?",
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
        "explanation": "An IPv4 address is composed of exactly 32 bits (4 octets of 8 bits each)."
      },
      {
        "question": "How many BITS make up a physical Media Access Control (MAC) Address of a Network Interface Card?",
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
        "explanation": "A MAC address is a 48-bit (6-byte) hardware identifier represented as 6 hexadecimal pairs."
      },
      {
        "question": "Which USSD code should be dialed on a mobile smartphone to display its 15-digit IMEI number?",
        "options": [
          {
            "id": "A",
            "text": "*#00#"
          },
          {
            "id": "B",
            "text": "*#06#"
          },
          {
            "id": "C",
            "text": "*#99#"
          },
          {
            "id": "D",
            "text": "*123#"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Dialing *#06# instantly displays the device's unique 15-digit IMEI (International Mobile Equipment Identity) number."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 5,
    "slug": "isp-and-internet-protocols",
    "title": "Role of ISP and Core Internet Protocols (TCP/IP, HTTP, FTP, DNS)",
    "hindiTitle": "ISP की भूमिका एवं प्रमुख प्रोटोकॉल्स (TCP/IP, HTTP/S, FTP, DNS)",
    "definitionEnglish": "An Internet Service Provider (ISP) is a commercial telecommunications company that provides end-users with access to the Internet, while network protocols are standardized rules and procedures governing data communication across network ports.",
    "definitionHindi": "इंटरनेट सर्विस प्रोवाइडर (ISP) वह दूरसंचार कंपनी है जो उपयोगकर्ताओं को इंटरनेट कनेक्शन प्रदान करती है, जबकि प्रोटोकॉल (जैसे TCP/IP, HTTP, FTP, DNS) डेटा संचार को नियंत्रित करने वाले मानक नियम हैं।",
    "simpleWords": "ISP (जैसे Jio, Airtel, BSNL) इंटरनेट कनेक्शन देती हैं। HTTP वेबपेज लाने, FTP फाइल भेजने, और DNS डोमेन नाम को IP एड्रेस में बदलने का काम करता है।",
    "examImportance": "Very High (4-5 direct questions on protocol port numbers, full forms, and DNS function)",
    "detailedExplanation": "### 1. Role of an Internet Service Provider (ISP)\nAn ISP provides commercial access to the global Internet backbone:\n- **Services Provided:** High-speed broadband (FTTH fiber optics), 4G/5G cellular data, static/dynamic IP allocation, email hosting, and DNS servers.\n- **Prominent Indian ISPs:** **Jio, Airtel, BSNL (Bharat Sanchar Nigam Limited), MTNL, Vodafone Idea (Vi), ACT Fibernet**.\n\n### 2. Core Internet Protocols & Port Numbers (Crucial for CCC Exam)\n| Protocol Name | Full Form | Standard Port | Primary Role & Functionality |\n| :--- | :--- | :--- | :--- |\n| **TCP/IP** | **Transmission Control Protocol / Internet Protocol** | — | Core foundational protocol suite of the global Internet (Packet delivery & routing) |\n| **HTTP** | **HyperText Transfer Protocol** | **Port 80** | Transfers unencrypted HTML web pages and assets from web servers to browsers |\n| **HTTPS** | **HyperText Transfer Protocol Secure** | **Port 443** | Encrypted HTTP using **TLS/SSL** for secure online banking and e-commerce |\n| **FTP** | **File Transfer Protocol** | **Port 20 (Data) / Port 21 (Control)** | Uploads and downloads large computer files to remote FTP servers |\n| **DNS** | **Domain Name System** | **Port 53** | Translates human-readable domain names (`google.com`) into numerical IP addresses (`172.217.167.78`) — **\"The Phonebook of the Internet\"** |\n| **DHCP** | **Dynamic Host Configuration Protocol** | **Port 67 / 68** | Automatically assigns dynamic IP addresses and gateway configs to client PCs |\n| **SMTP** | **Simple Mail Transfer Protocol** | **Port 25 / 587** | Pushes and transmits outgoing email messages between mail servers |\n| **POP3** | **Post Office Protocol version 3** | **Port 110 / 995** | Downloads emails from server to local client PC, deleting them from server |\n| **IMAP** | **Internet Message Access Protocol** | **Port 143 / 993** | Synchronizes emails across multiple devices in real-time, keeping mail on server |\n| **Telnet** | **Teletype Network** | **Port 23** | Legacy unencrypted remote command line terminal access |\n| **SSH** | **Secure Shell** | **Port 22** | Securely encrypted remote terminal login and command execution |",
    "realWorldAnalogy": "DNS is like the Contacts phonebook on your smartphone: you don't memorize your friend's 10-digit phone number (IP address); you simply search their name 'Rahul' (domain name), and the phone dials the number automatically.",
    "importantPoints": [
      "HTTP uses Port 80; HTTPS uses Port 443; FTP uses Port 21; DNS uses Port 53; SSH uses Port 22.",
      "DNS translates human-readable domain names into numerical IP addresses.",
      "HTTPS is encrypted using SSL (Secure Sockets Layer) or TLS (Transport Layer Security).",
      "SMTP is used for sending emails; POP3 and IMAP are used for receiving emails.",
      "ISP stands for Internet Service Provider (e.g., BSNL, Jio, Airtel)."
    ],
    "commonMistakes": [
      "Confusing HTTP port (80) with HTTPS port (443).",
      "Thinking DNS generates website content (DNS only translates domain names to IP addresses)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the standard port number for HTTPS?' ➔ Port 443.",
      "Guaranteed CCC Question: 'What is the main function of DNS?' ➔ Translates Domain Names to IP Addresses.",
      "Guaranteed CCC Question: 'Which protocol is used to transfer files over the Internet?' ➔ FTP."
    ],
    "quickRevision": "Protocols: HTTP (Port 80), HTTPS (Port 443, SSL/TLS), FTP (Port 21, files), DNS (Port 53, Name to IP), SMTP (Port 25, send mail), POP3 (Port 110, receive mail), IMAP (Port 143, sync mail), SSH (Port 22).",
    "practiceAssignment": "In Command Prompt, type `nslookup nielit.gov.in` to see DNS translating the domain name into its actual public IP address.",
    "microQuiz": [
      {
        "question": "What is the primary role of the Domain Name System (DNS) on the Internet?",
        "options": [
          {
            "id": "A",
            "text": "To encrypt passwords during checkout"
          },
          {
            "id": "B",
            "text": "To translate human domain names into numerical IP addresses"
          },
          {
            "id": "C",
            "text": "To compress large video files"
          },
          {
            "id": "D",
            "text": "To scan computers for malware"
          }
        ],
        "correctAnswer": "B",
        "explanation": "DNS acts as the internet directory, translating human-friendly domain names (e.g. nielit.gov.in) into machine-readable IP addresses."
      },
      {
        "question": "What standard networking port number is assigned to the secure HTTPS (HyperText Transfer Protocol Secure) protocol?",
        "options": [
          {
            "id": "A",
            "text": "Port 21"
          },
          {
            "id": "B",
            "text": "Port 25"
          },
          {
            "id": "C",
            "text": "Port 80"
          },
          {
            "id": "D",
            "text": "Port 443"
          }
        ],
        "correctAnswer": "D",
        "explanation": "HTTPS communicates securely over TCP port 443 (HTTP uses port 80)."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 6,
    "slug": "modes-of-connecting-internet",
    "title": "Modes of Internet Connection (Wi-Fi, Hotspot, Broadband, Tethering)",
    "hindiTitle": "इंटरनेट कनेक्टिविटी के प्रकार (Wi-Fi, हॉटस्पॉट, ब्रॉडबैंड, USB टेदरिंग)",
    "definitionEnglish": "Internet connectivity modes are the physical wired mediums (DSL, FTTH Optical Fiber, Ethernet) and wireless transmission channels (Wi-Fi 802.11, Cellular 4G/5G, Mobile Hotspot, USB/Bluetooth Tethering) used to link client devices to an Internet Service Provider.",
    "definitionHindi": "इंटरनेट कनेक्टिविटी के प्रकार वे वायर्ड माध्यम (ब्रॉडबैंड, ऑप्टिकल फाइबर) और वायरलेस माध्यम (वाई-फाई, मोबाइल हॉटस्पॉट, USB टेदरिंग) हैं जिनके द्वारा किसी डिवाइस को इंटरनेट से जोड़ा जाता है।",
    "simpleWords": "इंटरनेट से जुड़ने के तरीके: Wi-Fi, मोबाइल हॉटस्पॉट, फाइबर ब्रॉडबैंड, USB केबल से इंटरनेट शेयर करना (USB Tethering) और ब्लूटूथ टेदरिंग।",
    "examImportance": "High (2-3 questions on Wi-Fi full form, USB Tethering, and Hotspot limits)",
    "detailedExplanation": "### 1. Wired Internet Connection Modes\n1. **FTTH (Fiber to the Home / Optical Broadband):** Uses ultra-thin glass fiber optic strands transmitting data as light pulses. Ultra-high speeds (100 Mbps to 1 Gbps+) with low latency and zero electrical interference.\n2. **DSL (Digital Subscriber Line):** Transmits digital data over traditional 2-wire copper telephone landline cables without disrupting voice calls.\n3. **Dial-Up Connection (Legacy):** Uses telephone lines with analog modems (Max speed: `56 Kbps`). Ties up the phone line while connected.\n\n### 2. Wireless Internet Connection Modes\n1. **Wi-Fi (Wireless Fidelity — IEEE 802.11 Standard):**\n   - Radio frequency wireless networking connecting devices to a local WLAN router.\n   - Frequencies: **2.4 GHz** (Longer range, slower speed) and **5 GHz** (Shorter range, ultra-fast gigabit speeds).\n2. **Mobile Hotspot:**\n   - Software feature on smartphones that turns the mobile device into a portable Wi-Fi router, sharing its cellular 4G/5G internet data with nearby laptops and tablets.\n3. **USB Tethering:**\n   - Shares a smartphone's mobile data connection directly to a PC or laptop via a physical **USB cable**. Highly secure and charges the phone simultaneously.\n4. **Bluetooth Tethering:**\n   - Shares internet connection wirelessly between paired devices using Bluetooth radio (Slower speed, energy efficient).\n5. **Satellite Internet:** Transmits internet signals directly from geostationary and low-earth orbit (LEO) satellite constellations (e.g., Starlink) to remote rural locations.",
    "realWorldAnalogy": "Broadband is like a municipal municipal water pipeline connected directly to your house; Mobile Hotspot is like sharing water from your personal water bottle with a friend.",
    "importantPoints": [
      "Wi-Fi stands for Wireless Fidelity and follows the IEEE 802.11 standard family.",
      "Wi-Fi operates on 2.4 GHz and 5 GHz radio frequencies.",
      "USB Tethering shares a phone's internet connection with a PC via a USB cable.",
      "FTTH stands for Fiber to the Home.",
      "Dial-up connections had a maximum speed of 56 Kbps."
    ],
    "commonMistakes": [
      "Believing Wi-Fi and the Internet are the exact same thing (Wi-Fi is merely the local wireless link between your device and the router; the router connects to the Internet).",
      "Thinking USB Tethering requires third-party software (It is a native built-in feature of Android and iOS)."
    ],
    "examTips": [
      "Direct CCC Question: 'What does Wi-Fi stand for?' ➔ Wireless Fidelity.",
      "Direct CCC Question: 'Which standard governs Wi-Fi technology?' ➔ IEEE 802.11.",
      "Direct CCC Question: 'How can a mobile phone share internet to a PC via cable?' ➔ USB Tethering."
    ],
    "quickRevision": "Modes: Wired (FTTH Fiber, DSL, Dial-up 56Kbps) and Wireless (Wi-Fi 802.11 2.4/5GHz, Mobile Hotspot, USB Tethering via cable, Bluetooth Tethering, Satellite).",
    "practiceAssignment": "Turn on Mobile Hotspot on your smartphone, set a secure WPA2 password, and connect your laptop to the hotspot Wi-Fi network.",
    "microQuiz": [
      {
        "question": "What is the full form of the wireless networking acronym 'Wi-Fi'?",
        "options": [
          {
            "id": "A",
            "text": "Wireless Frequency"
          },
          {
            "id": "B",
            "text": "Wireless Fidelity"
          },
          {
            "id": "C",
            "text": "Wired Fiber"
          },
          {
            "id": "D",
            "text": "Wide Field Interface"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Wi-Fi is the commercial trademark name for Wireless Fidelity, operating under IEEE 802.11 specifications."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 7,
    "slug": "popular-web-browsers-and-features",
    "title": "Popular Web Browsers: Chrome, Firefox, Edge, Opera",
    "hindiTitle": "प्रमुख वेब ब्राउज़र्स एवं उनके मुख्य फीचर्स",
    "definitionEnglish": "A web browser is an application software client that retrieves, renders, and navigates hypertext documents and multimedia resources from World Wide Web servers using HTTP/HTTPS protocols.",
    "definitionHindi": "वेब ब्राउज़र एक एप्लीकेशन सॉफ्टवेयर है जो HTTP/HTTPS प्रोटोकॉल का उपयोग करके वेब सर्वर से वेबपेज और सामग्री को डाउनलोड करके उपयोगकर्ता की स्क्रीन पर प्रदर्शित करता है।",
    "simpleWords": "इंटरनेट चलाने वाला सॉफ्टवेयर जैसे Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari और Opera। इसमें बुकमार्क (Ctrl+D), हिस्ट्री (Ctrl+H) और इनकॉग्निटो मोड होता है।",
    "examImportance": "Very High (4-5 direct questions on first browser Mosaic, browser shortcuts Ctrl+H/Ctrl+J/Ctrl+D, and Incognito mode)",
    "detailedExplanation": "### 1. Historical Evolution of Web Browsers\n- **WorldWideWeb (1990):** The world's first web browser, created by **Tim Berners-Lee** at CERN (later renamed *Nexus*).\n- **NCSA Mosaic (1993):** Created by **Marc Andreessen**; the world's **first popular graphical web browser** capable of displaying images inline alongside text on the same page.\n- **Netscape Navigator (1994):** Dominant commercial browser of the 1990s.\n- **Internet Explorer (1995–2022):** Microsoft's legacy browser (Now officially retired and replaced by **Microsoft Edge**).\n\n### 2. Major Modern Web Browsers\n1. **Google Chrome:** Built on the open-source Chromium and Blink rendering engine; world's most popular browser.\n2. **Mozilla Firefox:** Free and open-source browser developed by the Mozilla Foundation using the Gecko rendering engine.\n3. **Microsoft Edge:** Built on Chromium engine; default built-in browser in Windows 10/11.\n4. **Apple Safari:** Default browser on macOS and iOS, powered by the WebKit rendering engine.\n5. **Opera:** Feature-rich browser with built-in VPN and ad-blocker.\n6. **Lynx:** A prominent **text-only command-line web browser** that displays zero images or graphics.\n\n### 3. Essential Web Browser Shortcuts & Features\n- **Add Bookmark (`Ctrl + D`):** Saves the active webpage URL to the Bookmarks bar for 1-click access.\n- **View Browsing History (`Ctrl + H`):** Displays chronological log of all previously visited websites.\n- **View Downloads History (`Ctrl + J`):** Opens list of downloaded files.\n- **Open New Tab (`Ctrl + T`):** Opens a new tab within the current window.\n- **Close Active Tab (`Ctrl + W`):** Closes the currently active tab.\n- **Reopen Last Closed Tab (`Ctrl + Shift + T`):** Accidentally closed a tab? Reopens it instantly!\n- **Hard Refresh / Bypass Cache (`Ctrl + F5`):** Forces complete re-download of all CSS and scripts.\n- **Private Browsing / Incognito Mode (`Ctrl + Shift + N` in Chrome / `Ctrl + Shift + P` in Firefox):**\n  - Leaves **zero browsing history, zero cookies, zero site data, and zero form entries** stored locally on the computer upon closing the session.",
    "realWorldAnalogy": "A web browser is like a tourist vehicle that drives you to different digital addresses (websites) across the global digital world and displays the scenery (webpages).",
    "importantPoints": [
      "Mosaic was the first widely used graphical web browser (developed by Marc Andreessen in 1993).",
      "WorldWideWeb (Nexus) was the first web browser created by Tim Berners-Lee in 1990.",
      "Ctrl + D bookmarks a webpage; Ctrl + H opens History; Ctrl + J opens Downloads.",
      "Ctrl + Shift + T reopens the last closed browser tab.",
      "Incognito / Private Browsing prevents browsing history and cookies from being saved locally.",
      "Lynx is a text-only web browser."
    ],
    "commonMistakes": [
      "Confusing Web Browsers with Search Engines (Google Chrome is a Browser; Google Search is a Search Engine).",
      "Thinking Incognito Mode makes you anonymous on the internet (It only prevents local history storage on your own device; your ISP and school network can still see traffic)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What was the first graphical web browser?' ➔ NCSA Mosaic (1993).",
      "Guaranteed CCC Question: 'What is the shortcut key to view browsing History?' ➔ Ctrl + H.",
      "Guaranteed CCC Question: 'What is the shortcut key to Bookmark a webpage?' ➔ Ctrl + D."
    ],
    "quickRevision": "Browsers: Chrome, Firefox, Edge, Safari, Opera, Lynx (text-only). First graphical=Mosaic (1993). Shortcuts: Bookmark=Ctrl+D, History=Ctrl+H, Downloads=Ctrl+J, New Tab=Ctrl+T, Reopen Tab=Ctrl+Shift+T, Incognito=Ctrl+Shift+N.",
    "practiceAssignment": "In your browser, press Ctrl + D to bookmark a study portal, press Ctrl + H to view history, and open an Incognito window using Ctrl + Shift + N.",
    "microQuiz": [
      {
        "question": "Which of the following is recognized as the world's FIRST widely popular GRAPHICAL web browser?",
        "options": [
          {
            "id": "A",
            "text": "Google Chrome"
          },
          {
            "id": "B",
            "text": "NCSA Mosaic"
          },
          {
            "id": "C",
            "text": "Internet Explorer"
          },
          {
            "id": "D",
            "text": "Mozilla Firefox"
          }
        ],
        "correctAnswer": "B",
        "explanation": "NCSA Mosaic (1993) was the first graphical browser to display text and images simultaneously in the same window."
      },
      {
        "question": "What is the standard universal keyboard shortcut to add a BOOKMARK for the currently active webpage in a web browser?",
        "options": [
          {
            "id": "A",
            "text": "Ctrl + B"
          },
          {
            "id": "B",
            "text": "Ctrl + D"
          },
          {
            "id": "C",
            "text": "Ctrl + Shift + B"
          },
          {
            "id": "D",
            "text": "Alt + B"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Pressing Ctrl + D prompts the bookmark dialog to save the current website URL for quick access."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "topicNumber": 8,
    "slug": "search-engines-surfing-and-downloading",
    "title": "Search Engines (Google, Bing), Surfing & Downloading Web Pages",
    "hindiTitle": "सर्च इंजन, वेब सर्फिंग एवं वेब पेज डाउनलोड/प्रिंटिंग",
    "definitionEnglish": "A search engine is a specialized web-based software program that maintains an indexed database of the World Wide Web using automated web crawlers and returns relevant ranked web results based on user keyword search queries.",
    "definitionHindi": "सर्च इंजन एक वेब-आधारित सॉफ्टवेयर प्रोग्राम है जो वेब क्रॉलर्स (स्पाइडर्स) की मदद से पूरे इंटरनेट के पेजों की इंडेक्सिंग करता है और उपयोगकर्ता द्वारा खोजे गए कीवर्ड्स के आधार पर परिणाम प्रस्तुत करता है।",
    "simpleWords": "इंटरनेट पर जानकारी ढूंढने वाली वेबसाइटें जैसे Google, Microsoft Bing, Yahoo, और DuckDuckGo। वेब सर्फिंग का अर्थ इंटरनेट पर पेजों को देखना व डाउनलोड करना है।",
    "examImportance": "High (3-4 questions on search engine examples, crawlers/spiders, downloading web pages Ctrl+S)",
    "detailedExplanation": "### 1. How Search Engines Work: The 3-Stage Mechanism\n1. **Crawling (Spiders / Bots / Web Crawlers):**\n   - Automated software bots (e.g., *Googlebot*, *Bingbot*) continuously traverse the World Wide Web by discovering and following hyperlinks from webpage to webpage 24/7.\n2. **Indexing:**\n   - The discovered web pages are downloaded, parsed, tokenized, and stored in a colossal distributed global database (The Index). Words, headings, meta tags, and images are cataloged.\n3. **Ranking & Serving Results:**\n   - When a user submits a query keyword, proprietary ranking algorithms evaluate hundreds of factors (relevance, domain authority, page speed, mobile friendliness) to present the Search Engine Results Page (**SERP**) in fractions of a second.\n\n### 2. Major Search Engines & Privacy Alternatives\n- **Google:** World's most dominant search engine (>90% market share), founded by **Larry Page** and **Sergey Brin** in 1998.\n- **Microsoft Bing:** Default search engine developed by Microsoft.\n- **Yahoo Search:** Early pioneer web portal and search engine.\n- **DuckDuckGo:** Privacy-focused search engine that **does NOT track users**, store search history, or profile personal data for targeted advertising.\n- **Baidu:** Leading search engine in China | **Yandex:** Leading search engine in Russia.\n\n### 3. Web Surfing, Downloading & Printing Web Pages\n- **Web Surfing:** The act of browsing and navigating between interlinked websites on the internet.\n- **Downloading vs. Uploading:**\n  - **Downloading:** Transferring files from a remote server/internet down to your **local device storage**.\n  - **Uploading:** Transferring files from your **local device up to a remote server/cloud**.\n- **Saving Complete Webpages (`Ctrl + S`):** Saves the HTML structure and `_files` folder containing images for offline browsing without internet.\n- **Printing Webpages (`Ctrl + P`):** Prints or saves web pages as PDF documents.",
    "realWorldAnalogy": "A Search Engine is like a university library catalog: the Crawlers are librarians reading every new book, the Index is the master card catalog, and the Search Bar is the librarian instantly bringing you the top 5 books on your topic.",
    "importantPoints": [
      "Search Engine stages: Crawling (Spiders) ➔ Indexing ➔ Ranking & Serving.",
      "Google was founded by Larry Page and Sergey Brin in 1998.",
      "DuckDuckGo is a privacy-first search engine that does not track user data.",
      "Downloading is transferring data from remote server to local PC; Uploading is sending local data to server.",
      "Ctrl + S saves a webpage locally for offline viewing."
    ],
    "commonMistakes": [
      "Confusing Downloading with Uploading (Downloading = Server to PC; Uploading = PC to Server).",
      "Assuming Google Chrome is a search engine (Chrome is the Browser; Google is the Search Engine)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'Which automated program is used by search engines to browse the web?' ➔ Web Crawler / Spider / Bot.",
      "Guaranteed CCC Question: 'Which search engine emphasizes user privacy and does not track searches?' ➔ DuckDuckGo.",
      "Guaranteed CCC Question: 'Who founded Google?' ➔ Larry Page and Sergey Brin (1998)."
    ],
    "quickRevision": "Search Engines: Google (1998), Bing, Yahoo, DuckDuckGo (privacy). Mechanism: Crawling (Spiders) ➔ Indexing ➔ Ranking. Downloading=Server to PC; Uploading=PC to Server. Save page=Ctrl+S.",
    "practiceAssignment": "Open DuckDuckGo (duckduckgo.com) and search for 'NIELIT CCC Syllabus'. Save the resulting webpage locally on your desktop using Ctrl + S.",
    "microQuiz": [
      {
        "question": "What is the automated program called that search engines deploy to continuously discover and index web pages across the internet?",
        "options": [
          {
            "id": "A",
            "text": "Web Crawler / Spider"
          },
          {
            "id": "B",
            "text": "Device Driver"
          },
          {
            "id": "C",
            "text": "Trojan Horse"
          },
          {
            "id": "D",
            "text": "Compiler"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Search engines use Web Crawlers (also known as Spiders or Bots) to traverse hyperlinks and catalog web pages."
      },
      {
        "question": "Which of the following search engines is specifically known for its privacy policy of NOT tracking user searches or storing personal data?",
        "options": [
          {
            "id": "A",
            "text": "Google"
          },
          {
            "id": "B",
            "text": "Microsoft Bing"
          },
          {
            "id": "C",
            "text": "DuckDuckGo"
          },
          {
            "id": "D",
            "text": "Yahoo"
          }
        ],
        "correctAnswer": "C",
        "explanation": "DuckDuckGo is widely recognized as a privacy-centric search engine that protects user anonymity and does not track search queries."
      }
    ]
  }
];
