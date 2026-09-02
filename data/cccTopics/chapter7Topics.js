// CCC Chapter 7: E-mail, Social Networking and e-Governance Services - Complete Textbook Content
export const chapter7Topics = [
  {
    "chapterNumber": 7,
    "topicNumber": 1,
    "slug": "structure-of-email-and-mailbox",
    "title": "Structure of E-mail, Address Syntax & Mailbox Folders",
    "hindiTitle": "ई-मेल संरचना, पता सिंटैक्स एवं मेलबॉक्स फोल्डर्स",
    "definitionEnglish": "Electronic Mail (E-mail) is a digital asynchronous telecommunications service that transmits text messages and multimedia attachments across computer networks using client-server protocols like SMTP, POP3, and IMAP.",
    "definitionHindi": "इलेक्ट्रॉनिक मेल (ई-मेल) डिजिटल नेटवर्क पर संदेश और फाइलें भेजने की एक प्रणाली है। 1971 में रे टॉमलिंसन ने पहला ई-मेल भेजा था और यूजरनेम व डोमेन को अलग करने के लिए '@' (एट-द-रेट) चिह्न का आविष्कार किया था।",
    "simpleWords": "ई-मेल का पता दो भागों में बंटा होता है: यूजरनेम और डोमेन नेम, जिन्हें '@' चिह्न अलग करता है (जैसे info@nielit.gov.in)। इनबॉक्स में आए मेल और सेंट में भेजे गए मेल रहते हैं।",
    "examImportance": "Very High (4-5 direct questions on Ray Tomlinson 1971, @ symbol, email address parts, and mailbox folders in every CCC exam)",
    "detailedExplanation": "### 1. Inception & Anatomy of an E-mail Address\n- **1971:** **Ray Tomlinson** sent the world's first network email over ARPANET and introduced the universal **`@` (at-the-rate)** symbol to separate the user's name from their host computer. Ray Tomlinson is universally honored as the **Father of E-mail**.\n- **The Two Mandatory Parts of an E-mail Address:**\n  ```\n  saurabh.tiwari  @  nielit.gov.in\n  │──────┬──────┘  │  │──────┬──────┘\n    User Name      At   Domain Name /\n  (Local Part)   Symbol  Mail Server Host\n  ```\n  1. **User Name (Local Part):** Unique account identifier chosen by the individual user.\n  2. **Domain Name:** Name of the mail server hosting the mailbox (e.g., `gmail.com`, `yahoo.com`, `nielit.gov.in`).\n  3. **Case Sensitivity:** Email addresses are **case-insensitive** (e.g., `USER@GMAIL.COM` is identical to `user@gmail.com`).\n  4. **Spaces Not Allowed:** An email address can NEVER contain white spaces.\n\n### 2. Standard Mailbox Folders and Functions\n| Mailbox Folder | Primary Function and Characteristics |\n| :--- | :--- |\n| **Inbox** | Stores all incoming received email messages |\n| **Outbox** | Temporary holding queue for outgoing emails waiting to be dispatched (e.g., when offline) |\n| **Sent Mail / Sent** | Successfully transmitted and delivered emails dispatched from your account |\n| **Drafts** | Incomplete, unsent composed messages saved automatically for later editing |\n| **Spam / Junk Mail** | Unsolicited bulk promotional emails and suspected phishing attempts filtered automatically |\n| **Trash / Bin** | Holds deleted emails temporarily (automatically purged permanently after **30 days** in Gmail) |",
    "realWorldAnalogy": "An email address is like a postal address: 'saurabh.tiwari' is the person's name inside the house, '@' means 'at', and 'nielit.gov.in' is the city and street where the house is located.",
    "importantPoints": [
      "Ray Tomlinson invented email and introduced the '@' symbol in 1971.",
      "An email address consists of two parts separated by '@': Username and Domain Name.",
      "Email addresses cannot contain spaces and are case-insensitive.",
      "Outbox holds outgoing emails temporarily before transmission; Sent holds sent emails.",
      "Deleted emails in Trash are permanently erased after 30 days in standard mail services."
    ],
    "commonMistakes": [
      "Confusing Outbox with Sent folder (Outbox holds unsent queued messages; Sent holds dispatched messages).",
      "Writing an email address with spaces (Spaces are strictly invalid in email syntax)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'Who is known as the Father of E-mail?' ➔ Ray Tomlinson (1971).",
      "Guaranteed CCC Question: 'Which symbol separates the username and domain in an email address?' ➔ @ (At the rate).",
      "Guaranteed CCC Question: 'How many days do deleted emails remain in Trash before permanent deletion in Gmail?' ➔ 30 Days."
    ],
    "quickRevision": "Email: 1971 Ray Tomlinson (@ symbol). Address syntax: username@domain.com. Folders: Inbox (received), Outbox (pending), Sent (delivered), Drafts (saved), Spam (junk), Trash (deleted, 30 days retention).",
    "practiceAssignment": "Open your email account, locate the Inbox, Sent, Drafts, Spam, and Trash folders, and compose a draft message without sending it.",
    "microQuiz": [
      {
        "question": "Who is universally recognized as the pioneer and 'Father of Electronic Mail' (E-mail)?",
        "options": [
          {
            "id": "A",
            "text": "Charles Babbage"
          },
          {
            "id": "B",
            "text": "Ray Tomlinson"
          },
          {
            "id": "C",
            "text": "Tim Berners-Lee"
          },
          {
            "id": "D",
            "text": "Martin Cooper"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Ray Tomlinson developed the first network email system on ARPANET in 1971 and established the use of the '@' delimiter."
      },
      {
        "question": "Which mailbox folder temporarily holds outgoing email messages that are QUEUED for delivery but NOT yet sent?",
        "options": [
          {
            "id": "A",
            "text": "Sent"
          },
          {
            "id": "B",
            "text": "Outbox"
          },
          {
            "id": "C",
            "text": "Drafts"
          },
          {
            "id": "D",
            "text": "Spam"
          }
        ],
        "correctAnswer": "B",
        "explanation": "The Outbox acts as a temporary holding buffer for outgoing messages until a connection is established and the email is dispatched."
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 2,
    "slug": "email-signatures-and-searching-emails",
    "title": "Email Features: CC, BCC, Attachments & Signatures",
    "hindiTitle": "ई-मेल फीचर्स: CC, BCC, अटैचमेंट एवं डिजिटल सिग्नेचर",
    "definitionEnglish": "Advanced email communication features include multi-recipient distribution (To, CC, BCC), file attachments with standardized size constraints, automated professional email signatures, and indexed search filters.",
    "definitionHindi": "ई-मेल फीचर्स में कई लोगों को मेल भेजना (To, CC, BCC), फाइलें अटैच करना (Gmail में 25MB लिमिट), ऑटोमैटिक ईमेल सिग्नेचर और पुराने संदेशों को कीवर्ड से खोजना शामिल है।",
    "simpleWords": "CC (Carbon Copy) में सबको पता चलता है कि मेल किसे गया है, जबकि BCC (Blind Carbon Copy) में प्राप्तकर्ताओं के नाम गुप्त रहते हैं। Gmail में 25 MB तक की फाइल अटैच की जा सकती है।",
    "examImportance": "Very High (5-6 direct questions on CC vs BCC privacy, Gmail 25MB attachment limit, and Email Signature in every CCC exam)",
    "detailedExplanation": "### 1. The Recipient Fields: To vs. CC vs. BCC (Crucial CCC Topic)\n| Field | Full Form | Visibility to Recipients | Primary Use Case |\n| :--- | :--- | :--- | :--- |\n| **To** | Primary Recipient | **Publicly visible** to all recipients in To and CC | Primary person expected to read and take direct action on the email |\n| **CC** | **Carbon Copy** | **Publicly visible** to everyone; all recipients see each other's email addresses | Secondary recipients kept in the loop for information sharing (no action needed) |\n| **BCC** | **Blind Carbon Copy** | **Completely Invisible / Secret**; other recipients in To, CC, and BCC **CANNOT see BCC addresses**! | Confidential multi-recipient mass newsletters where individual recipient email privacy is paramount |\n\n### 2. Email Attachments\n- **Attachment Icon:** Represented visually across all email clients by a **Paperclip icon (📎)**.\n- **Maximum File Size Limit:**\n  - Standard maximum single email attachment limit in **Gmail / Google Workspace** is **`25 MB`**.\n  - Standard maximum attachment limit in **Outlook / Yahoo Mail** is **`20 MB – 25 MB`**.\n  - Larger files (>25MB) are automatically converted into cloud **Google Drive / OneDrive download links**.\n\n### 3. Email Signature & Search Filters\n- **Email Signature:** A pre-configured block of professional text (Name, Job Title, Organization, Contact Phone, Legal Disclaimer) automatically appended to the bottom of every outgoing email.\n- **Search Operators:** Use query filters to locate past emails rapidly (e.g., `from:nielit`, `has:attachment`, `larger:10M`, `before:2026/01/01`).",
    "realWorldAnalogy": "CC is like sending an open announcement letter where everyone's name is printed on the cover; BCC is like delivering individual sealed envelopes through separate mail slots so nobody knows who else got a copy.",
    "importantPoints": [
      "CC stands for Carbon Copy; all recipients can see each other's email addresses.",
      "BCC stands for Blind Carbon Copy; recipient email addresses remain completely hidden and secret.",
      "The paperclip icon represents an Email Attachment.",
      "The maximum attachment size in Gmail is 25 MB.",
      "Email Signature automatically adds contact details to the end of outgoing emails."
    ],
    "commonMistakes": [
      "Using CC instead of BCC for mass public circulars (CC leaks everyone's private email address to all recipients; BCC protects privacy).",
      "Thinking BCC recipients can see who else was in the BCC list (BCC recipients cannot see other BCC addresses)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What does BCC stand for in email?' ➔ Blind Carbon Copy.",
      "Guaranteed CCC Question: 'Which email field hides recipient addresses from others?' ➔ BCC.",
      "Guaranteed CCC Question: 'What is the maximum attachment size limit in Gmail?' ➔ 25 MB."
    ],
    "quickRevision": "Recipients: To (action), CC (Carbon Copy, visible to all), BCC (Blind Carbon Copy, secret/hidden). Attachments: Paperclip icon, 25MB max in Gmail. Signature: Automatic footer.",
    "practiceAssignment": "Compose a test email in Gmail, add one address to CC and one to BCC, attach a small file using the paperclip icon, and verify the attachment preview.",
    "microQuiz": [
      {
        "question": "In an email client, which recipient field ensures that the recipient's email address remains completely INVISIBLE and HIDDEN from all other recipients?",
        "options": [
          {
            "id": "A",
            "text": "To"
          },
          {
            "id": "B",
            "text": "CC (Carbon Copy)"
          },
          {
            "id": "C",
            "text": "BCC (Blind Carbon Copy)"
          },
          {
            "id": "D",
            "text": "Subject"
          }
        ],
        "correctAnswer": "C",
        "explanation": "BCC (Blind Carbon Copy) conceals recipient email addresses, preventing other recipients in To, CC, or BCC from seeing them."
      },
      {
        "question": "What is the standard MAXIMUM attachment file size limit allowed for a single outgoing email in Gmail?",
        "options": [
          {
            "id": "A",
            "text": "10 MB"
          },
          {
            "id": "B",
            "text": "15 MB"
          },
          {
            "id": "C",
            "text": "25 MB"
          },
          {
            "id": "D",
            "text": "100 MB"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Google Gmail permits a maximum direct attachment file payload of 25 MB per email message."
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 3,
    "slug": "social-networking-and-instant-messaging",
    "title": "Social Networking (Facebook, X, LinkedIn) & Messaging",
    "hindiTitle": "सोशल नेटवर्किंग (Facebook, X, LinkedIn) एवं मैसेजिंग",
    "definitionEnglish": "Social networking platforms enable users to build digital social graphs, share multimedia posts, and engage with online communities, while Instant Messaging (IM) provides synchronous real-time encrypted point-to-point text, voice, and video messaging.",
    "definitionHindi": "सोशल नेटवर्किंग प्लेटफॉर्म (जैसे Facebook, X, LinkedIn, Instagram) लोगों को ऑनलाइन जुड़ने और सामग्री साझा करने की सुविधा देते हैं, जबकि इंस्टेंट मैसेजिंग (जैसे WhatsApp, Telegram) रीयल-टाइम में चैट, ऑडियो और वीडियो कॉल की सुविधा देते हैं।",
    "simpleWords": "फेसबुक (फ्रेंड्स), एक्स/ट्विटर (280 अक्षर की पोस्ट), लिंक्डइन (नौकरी और प्रोफेशनल्स), इंस्टाग्राम (फोटो/रील्स) और व्हाट्सएप (रीयल-टाइम चैट)।",
    "examImportance": "Very High (3-4 questions on Twitter character limits 280 chars, LinkedIn professional focus, and founders)",
    "detailedExplanation": "### 1. Major Social Networking Platforms\n1. **Facebook (Meta):**\n   - Founded by **Mark Zuckerberg in 2004**.\n   - World's largest social network for connecting friends, families, groups, and business pages.\n2. **X (Formerly Twitter):**\n   - Founded by **Jack Dorsey, Biz Stone, and Evan Williams in 2006** (Acquired by Elon Musk).\n   - Microblogging platform featuring short text posts (\"Tweets\" / Posts).\n   - **Maximum Character Limit:** Originally 140 characters; standard limit is now **`280 Characters`** for standard accounts.\n   - Core Features: **Hashtags (`#`)** to categorize topics, **Mentions (`@`)** to tag accounts, and Retweets/Reposts.\n3. **LinkedIn (Microsoft):**\n   - Founded by **Reid Hoffman in 2002** (Acquired by Microsoft in 2016).\n   - The world's premier **professional and career networking platform** used for job searching, corporate hiring, resume building, and B2B business development.\n4. **Instagram (Meta):**\n   - Founded by **Kevin Systrom and Mike Krieger in 2010**.\n   - Visual photo and short-video sharing platform (Stories, Reels, Filters).\n\n### 2. Instant Messaging (IM) Applications\n- **Synchronous Communication:** Messages are delivered and displayed immediately in real-time.\n- **WhatsApp (Meta):** Founded by Jan Koum and Brian Acton (2009); uses End-to-End Encryption (**E2EE**).\n- **Telegram:** Cloud-based messaging featuring large broadcast channels and public bots.\n- **Signal:** Open-source privacy-first messenger endorsed by cryptography experts.",
    "realWorldAnalogy": "Facebook is like a friendly neighborhood tea stall; LinkedIn is like a formal corporate job interview conference; X (Twitter) is like a town square megaphone where everyone shares quick 280-character headlines.",
    "importantPoints": [
      "Standard character limit for a post on X (formerly Twitter) is 280 characters.",
      "LinkedIn is specifically designed for professional business networking and job recruitment.",
      "Mark Zuckerberg founded Facebook in 2004.",
      "Hashtags (#) are used to group and search trending topics on social media.",
      "End-to-End Encryption (E2EE) ensures only sender and receiver can read messages."
    ],
    "commonMistakes": [
      "Thinking Twitter character limit is still 140 characters (Standard limit was expanded to 280 characters).",
      "Classifying LinkedIn as an entertainment gaming app (LinkedIn is strictly a professional career network)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the standard character limit for a tweet/post on Twitter/X?' ➔ 280 Characters.",
      "Guaranteed CCC Question: 'Which social media network is specifically used for professional career networking and jobs?' ➔ LinkedIn.",
      "Guaranteed CCC Question: 'Who founded Facebook?' ➔ Mark Zuckerberg (2004)."
    ],
    "quickRevision": "Social Media: Facebook (Zuckerberg 2004), X/Twitter (280 chars, #hashtag), LinkedIn (Reid Hoffman, jobs/careers), Instagram (photos). Instant Messaging: WhatsApp (E2EE), Telegram, Signal.",
    "practiceAssignment": "Open LinkedIn (linkedin.com), explore the professional profile section, and identify how it functions as a digital resume compared to Facebook.",
    "microQuiz": [
      {
        "question": "What is the standard MAXIMUM character limit for a single post (Tweet) on X (formerly Twitter)?",
        "options": [
          {
            "id": "A",
            "text": "140 Characters"
          },
          {
            "id": "B",
            "text": "280 Characters"
          },
          {
            "id": "C",
            "text": "500 Characters"
          },
          {
            "id": "D",
            "text": "1000 Characters"
          }
        ],
        "correctAnswer": "B",
        "explanation": "X (formerly Twitter) allows standard user accounts to post up to 280 characters per tweet."
      },
      {
        "question": "Which social networking platform is specifically designed and tailored for BUSINESS PROFESSIONALS and JOB SEEKERS?",
        "options": [
          {
            "id": "A",
            "text": "Instagram"
          },
          {
            "id": "B",
            "text": "LinkedIn"
          },
          {
            "id": "C",
            "text": "Snapchat"
          },
          {
            "id": "D",
            "text": "Pinterest"
          }
        ],
        "correctAnswer": "B",
        "explanation": "LinkedIn is the world's largest professional networking platform, focused on careers, recruitment, and business connections."
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 4,
    "slug": "blogs-ecommerce-basics-and-netiquettes",
    "title": "Blogs, Basics of e-Commerce & Online Netiquettes",
    "hindiTitle": "ब्लॉग्स, ई-कॉमर्स के प्रकार एवं ऑनलाइन शिष्टाचार (Netiquette)",
    "definitionEnglish": "A blog (weblog) is a regularly updated digital journal published by an individual or organization, e-Commerce involves commercial buying/selling transactions over electronic networks, and Netiquette represents the ethical rules of courteous online digital conduct.",
    "definitionHindi": "ब्लॉग (Weblog) एक ऑनलाइन डिजिटल पत्रिका या लेख है, ई-कॉमर्स इंटरनेट पर वस्तुओं और सेवाओं की खरीद-बिक्री (B2B, B2C, C2C) है, और नेटीकेट (Netiquette) इंटरनेट पर सभ्य और नैतिक आचरण के नियम हैं।",
    "simpleWords": "ब्लॉग (जैसे WordPress/Blogger पर आर्टिकल्स लिखना), ई-कॉमर्स के 4 मॉडल (B2B, B2C, C2C, C2B), और नेटीकेट (जैसे इंटरनेट पर बड़े अक्षरों में टाइप करना चिल्लाने के समान माना जाता है)।",
    "examImportance": "High (3-4 questions on e-Commerce models B2B/B2C/C2C, Netiquette capital letters meaning, and blog platforms)",
    "detailedExplanation": "### 1. Blogs & Microblogging\n- **Blog (Weblog):** Coined by Jorn Barger in 1997; an online discussion website published chronologically with the newest posts appearing at the top (**Reverse Chronological Order**).\n- **Prominent Blogging Platforms:** **WordPress, Google Blogger (Blogspot), Medium, Tumblr**.\n- **Vlog:** Video Blog (e.g., YouTube video diaries).\n- **Microblogging:** Publishing very short text updates (e.g., X / Twitter, Threads).\n\n### 2. The 4 Major Models of e-Commerce (Electronic Commerce)\n| e-Commerce Model | Full Name | Transaction Flow & Relationship | Real-World Examples |\n| :--- | :--- | :--- | :--- |\n| **B2C** | **Business-to-Consumer** | Commercial enterprise sells goods directly to individual retail end-users | **Amazon, Flipkart, Myntra, Swiggy, Zomato** |\n| **B2B** | **Business-to-Business** | One commercial business sells wholesale supplies or services to another business | **IndiaMART, Alibaba, Udaan, Cisco** |\n| **C2C** | **Consumer-to-Consumer** | Individual consumer sells second-hand items directly to another consumer | **OLX, Quikr, eBay auctions** |\n| **C2B** | **Consumer-to-Business** | Individual freelancer/influencer offers services or content to commercial businesses | **Freelancer.com, Upwork, Shutterstock** |\n\n### 3. Core Online Netiquettes (Internet Etiquette & Manners)\n- **DO NOT WRITE IN ALL CAPS:** In email and chat netiquette, typing in **ALL CAPITAL LETTERS IS INTERPRETED AS SHOUTING / YELLING** at the recipient and is considered rude!\n- **Respect Privacy:** Never forward private personal emails or disclose personal phone numbers without explicit consent.\n- **Do Not Spam:** Avoid sending unsolicited bulk promotional messages to group chats.\n- **Fact-Check Before Forwarding:** Do not forward unverified fake news, rumors, or panic-inducing social media chain messages.",
    "realWorldAnalogy": "B2C is like buying groceries from a supermarket; B2B is the supermarket buying 10 truckloads of flour from a mill; C2C is selling your used bicycle to a neighbor through classifieds.",
    "importantPoints": [
      "Typing in ALL CAPITAL LETTERS in emails/chats is considered SHOUTING in internet netiquette.",
      "B2C = Business to Consumer (Amazon, Flipkart).",
      "B2B = Business to Business (IndiaMART, Alibaba).",
      "C2C = Consumer to Consumer (OLX, Quikr).",
      "Blog posts are displayed in reverse chronological order (newest first).",
      "WordPress and Blogger are prominent blogging platforms."
    ],
    "commonMistakes": [
      "Classifying OLX as B2C (OLX is Consumer-to-Consumer: C2C).",
      "Writing professional emails in all uppercase letters (Violates netiquette by appearing as shouting)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'In internet netiquette, what does typing in ALL CAPITAL LETTERS signify?' ➔ SHOUTING / Screaming.",
      "Guaranteed CCC Question: 'OLX is an example of which e-commerce model?' ➔ C2C (Consumer to Consumer).",
      "Guaranteed CCC Question: 'Amazon is an example of which e-commerce model?' ➔ B2C."
    ],
    "quickRevision": "e-Commerce: B2C (Amazon/Flipkart), B2B (IndiaMART), C2C (OLX/Quikr), C2B (Freelancer). Netiquette: ALL CAPS = Shouting, no spam, respect privacy. Blogs: Reverse chronological order.",
    "practiceAssignment": "List 2 websites you use for online shopping and identify their e-commerce business model (e.g., Amazon = B2C; OLX = C2C).",
    "microQuiz": [
      {
        "question": "In email communication and internet netiquette, typing an entire message in ALL CAPITAL LETTERS is interpreted as:",
        "options": [
          {
            "id": "A",
            "text": "Urgent high-priority message"
          },
          {
            "id": "B",
            "text": "SHOUTING or Screaming at the reader"
          },
          {
            "id": "C",
            "text": "A computer encryption error"
          },
          {
            "id": "D",
            "text": "Formal respectful tone"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Internet Netiquette universally interprets all-uppercase text as shouting, which is considered discourteous."
      },
      {
        "question": "The online platform 'OLX', where individual citizens buy and sell second-hand goods with each other, represents which e-Commerce model?",
        "options": [
          {
            "id": "A",
            "text": "B2B (Business to Business)"
          },
          {
            "id": "B",
            "text": "B2C (Business to Consumer)"
          },
          {
            "id": "C",
            "text": "C2C (Consumer to Consumer)"
          },
          {
            "id": "D",
            "text": "C2B (Consumer to Business)"
          }
        ],
        "correctAnswer": "C",
        "explanation": "OLX is a Consumer-to-Consumer (C2C) marketplace enabling individual citizens to trade directly with one another."
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 5,
    "slug": "overview-of-egovernance-services",
    "title": "Overview of e-Governance Services: Railway, Passport & ORS",
    "hindiTitle": "ई-गवर्नेंस सेवाएं: रेलवे (IRCTC), पासपोर्ट सेवा एवं ई-हॉस्पिटल (ORS)",
    "definitionEnglish": "Electronic Governance (e-Governance) is the application of Information and Communication Technologies (ICT) by government departments to deliver public services transparently, efficiently, and rapidly directly to citizens (G2C), businesses (G2B), and government bodies (G2G).",
    "definitionHindi": "ई-गवर्नेंस (e-Governance) सरकारी विभागों द्वारा नागरिकों (G2C) और व्यवसायों (G2B) को सरकारी सेवाएं, प्रमाण पत्र और सुविधाएं पारदर्शी और त्वरित रूप से ऑनलाइन उपलब्ध कराने की डिजिटल प्रणाली है।",
    "simpleWords": "डिजिटल इंडिया के तहत सरकारी काम ऑनलाइन करना—जैसे ट्रेन टिकट बुक करना (IRCTC), पासपोर्ट बनवाना (Passport Seva), और अस्पताल में OPD पर्ची बनवाना (e-Hospital ORS)।",
    "examImportance": "Very High (4-5 direct questions on e-Gov models G2C/G2B/G2G, IRCTC, Passport portal, and e-Hospital ORS in every CCC exam)",
    "detailedExplanation": "### 1. The 4 Interactive Models of e-Governance\n1. **G2C (Government-to-Citizen):** Public welfare services delivered directly to citizens (e.g., Aadhaar portal, DigiLocker, Passport Seva, Income Tax e-filing).\n2. **G2B (Government-to-Business):** Services facilitating corporate trade and commerce (e.g., GST portal, MCA corporate filings, GeM - Government e-Marketplace).\n3. **G2G (Government-to-Government):** Electronic information sharing between various central, state, and local municipal government ministries.\n4. **G2E (Government-to-Employee):** Internal payroll, pension, and leave management for government staff.\n\n### 2. Flagship Indian e-Governance Portals\n1. **Railway Ticket Booking (IRCTC):**\n   - **IRCTC:** *Indian Railway Catering and Tourism Corporation* (`irctc.co.in`).\n   - Official portal for reserving train seat tickets, Tatkal bookings, PNR status inquiries, and flight/hotel reservations.\n   - **PNR:** *Passenger Name Record* (10-digit number printed on railway tickets).\n2. **Passport Seva Portal (`passportindia.gov.in`):**\n   - Managed by the Ministry of External Affairs (MEA) to streamline online passport applications, document appointment booking at Passport Seva Kendras (PSK), and police verification tracking.\n3. **e-Hospital & Online Registration System (ORS):**\n   - **ORS (`ors.gov.in`):** Online Registration System linking major government hospitals (AIIMS, RML, Safdarjung) across India.\n   - Citizens can book online OPD doctor appointments, view lab test reports, and check blood availability using their **Aadhaar** number.\n4. **National Scholarship Portal (NSP - `scholarships.gov.in`):**\n   - Single unified digital window for applying to central and state government educational scholarships.",
    "realWorldAnalogy": "e-Governance is like converting long, crowded physical government office queues into a 24/7 online vending machine on your smartphone where any certificate or ticket is issued in minutes.",
    "importantPoints": [
      "e-Gov interaction models: G2C (Citizen), G2B (Business), G2G (Government), G2E (Employee).",
      "IRCTC stands for Indian Railway Catering and Tourism Corporation.",
      "PNR stands for Passenger Name Record (10 digits).",
      "ORS stands for Online Registration System (used for e-Hospital OPD appointments).",
      "Passport Seva portal is managed by the Ministry of External Affairs (MEA)."
    ],
    "commonMistakes": [
      "Believing PNR has 12 digits (Aadhaar has 12 digits; PNR on railway ticket has 10 digits).",
      "Confusing G2C with G2B (G2C is for individual Citizens; G2B is for commercial Businesses)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the full form of IRCTC?' ➔ Indian Railway Catering and Tourism Corporation.",
      "Guaranteed CCC Question: 'How many digits are in a Railway PNR number?' ➔ 10 Digits.",
      "Guaranteed CCC Question: 'What does ORS stand for in e-Hospital services?' ➔ Online Registration System."
    ],
    "quickRevision": "e-Gov: G2C (Citizens), G2B (Business), G2G (Govt). Key portals: IRCTC (Train tickets, 10-digit PNR), Passport Seva (MEA), ORS (Online Registration System for e-Hospital OPD), NSP (Scholarships).",
    "practiceAssignment": "Visit the official IRCTC portal (irctc.co.in) and ORS portal (ors.gov.in) to explore the online citizen booking services.",
    "microQuiz": [
      {
        "question": "What is the full form of the official railway portal acronym 'IRCTC'?",
        "options": [
          {
            "id": "A",
            "text": "Indian Railway Catering and Tourism Corporation"
          },
          {
            "id": "B",
            "text": "Indian Road Catering and Transport Commission"
          },
          {
            "id": "C",
            "text": "Integrated Railway Computer Ticket Center"
          },
          {
            "id": "D",
            "text": "International Railway Catering and Travel Council"
          }
        ],
        "correctAnswer": "A",
        "explanation": "IRCTC stands for Indian Railway Catering and Tourism Corporation, an enterprise of the Government of India."
      },
      {
        "question": "How many digits are contained in a Railway PNR (Passenger Name Record) number?",
        "options": [
          {
            "id": "A",
            "text": "8 Digits"
          },
          {
            "id": "B",
            "text": "10 Digits"
          },
          {
            "id": "C",
            "text": "12 Digits"
          },
          {
            "id": "D",
            "text": "16 Digits"
          }
        ],
        "correctAnswer": "B",
        "explanation": "A Railway PNR number printed on Indian railway tickets is a unique 10-digit code."
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 6,
    "slug": "digital-locker-digilocker-complete-guide",
    "title": "Digital Locker (DigiLocker): Verification, Storage & Legal Validity",
    "hindiTitle": "डिजिटल लॉकर (DigiLocker): सत्यापन, 1GB स्टोरेज एवं कानूनी मान्यता",
    "definitionEnglish": "DigiLocker is a flagship cloud-based document repository platform launched under the Digital India initiative by the Ministry of Electronics and IT (MeitY) that provides Indian citizens with 1 GB of free secure cloud storage to store, verify, and share authentic digitally-signed e-documents.",
    "definitionHindi": "डिजीपॉकर (DigiLocker) भारत सरकार के इलेक्ट्रॉनिक्स एवं आईटी मंत्रालय (MeitY) द्वारा शुरू की गई एक क्लाउड स्टोरेज सेवा है जो भारतीय नागरिकों को 1 GB का सुरक्षित क्लाउड स्पेस देती है, जिसमें जारी किए गए डिजिटल दस्तावेज़ मूल प्रतियों के समान कानूनी रूप से मान्य होते हैं।",
    "simpleWords": "भारत सरकार द्वारा दिया गया 1 GB का फ्री डिजिटल लॉकर जिसमें आधार, ड्राइविंग लाइसेंस, गाड़ी की RC और मार्कशीट सीधे सरकारी सर्वर से जारी होते हैं और भौतिक मूल दस्तावेजों के समान 100% मान्य हैं।",
    "examImportance": "Very High (4-5 direct questions on DigiLocker storage size 1GB, ministry MeitY, IT Act Rule 9A legal validity, and Aadhaar authentication in every CCC exam)",
    "detailedExplanation": "### 1. What is DigiLocker?\n- **Launched By:** Government of India under the **Digital India initiative** in **July 2015**.\n- **Managing Ministry:** **Ministry of Electronics and Information Technology (MeitY)**.\n- **Official Website / App:** `digilocker.gov.in` & Mobile App on Android/iOS.\n- **Free Cloud Storage Capacity Allocated to Each Citizen:** Exactly **`1 GB (Gigabyte)`** of dedicated secure cloud storage.\n- **Maximum File Upload Size:** **`10 MB`** per uploaded PDF/JPEG file.\n\n### 2. Sign-Up & Authentication Process\n- **Mandatory Authentication:** Linking the user's **12-digit Aadhaar Number**.\n- Registration requires an **Aadhaar-linked Mobile OTP (One Time Password)** and setting a **6-digit Security PIN**.\n\n### 3. The 2 Document Sections in DigiLocker\n1. **Issued Documents (Official Digitally Signed):**\n   - Documents pulled directly from official issuers' electronic databases (e.g., *CBSE Board Marksheets, Driving License & RC from MoRTH / Parivahan, Aadhaar from UIDAI, PAN Card from Income Tax*).\n   - Carry a verifiable cryptographic digital signature and QR code.\n2. **Uploaded Documents (Self-Uploaded Drive):**\n   - Personal scanned copies of legacy certificates, medical reports, or private documents uploaded by the citizen into their 1 GB space.\n\n### 4. Legal Status & Validity under Indian Law\n- Under **Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016**:\n- **Digitally issued documents in DigiLocker are legally treated at par with original physical paper documents!** Traffic police, airport security, and university admissions MUST accept DigiLocker documents.",
    "realWorldAnalogy": "DigiLocker is like a government-certified digital wallet on your phone: instead of carrying physical plastic Driving License and paper RC cards, showing the verified DigiLocker screen is 100% legally accepted by traffic police.",
    "importantPoints": [
      "DigiLocker provides 1 GB of free secure cloud storage to each citizen.",
      "DigiLocker was launched under Digital India by the Ministry of Electronics and IT (MeitY) in 2015.",
      "DigiLocker account is authenticated using the 12-digit Aadhaar number and OTP.",
      "Under Rule 9A of the IT Act, Issued documents in DigiLocker are legally equivalent to original physical documents.",
      "Maximum single file upload size in DigiLocker is 10 MB."
    ],
    "commonMistakes": [
      "Thinking DigiLocker gives 15 GB or 5 GB (DigiLocker provides exactly 1 GB of storage).",
      "Believing traffic police can reject DigiLocker driving licenses (Under IT Rule 9A, issued DigiLocker documents are legally valid original documents)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'How much free cloud storage space is provided to a user in DigiLocker?' ➔ 1 GB.",
      "Guaranteed CCC Question: 'Which ministry manages the DigiLocker service?' ➔ Ministry of Electronics and IT (MeitY).",
      "Guaranteed CCC Question: 'Are DigiLocker documents legally valid?' ➔ Yes (Under Rule 9A of IT Act 2000/2016)."
    ],
    "quickRevision": "DigiLocker: Launched 2015 (MeitY, Digital India), Storage=1 GB, Max upload=10 MB, Authentication=Aadhaar OTP + 6-digit PIN. Legally valid at par with original physical documents under IT Rule 9A.",
    "practiceAssignment": "Download the DigiLocker app or visit digilocker.gov.in, link your Aadhaar, and pull your digital Aadhaar card or 10th Class Marksheet into 'Issued Documents'.",
    "microQuiz": [
      {
        "question": "How much FREE cloud storage space is allocated to each registered citizen on DigiLocker?",
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
        "explanation": "DigiLocker provides exactly 1 GB of dedicated cloud storage to every citizen holding a valid Aadhaar number."
      },
      {
        "question": "Which Indian Government Ministry is responsible for managing and operating the DigiLocker platform?",
        "options": [
          {
            "id": "A",
            "text": "Ministry of Finance"
          },
          {
            "id": "B",
            "text": "Ministry of Home Affairs"
          },
          {
            "id": "C",
            "text": "Ministry of Electronics and Information Technology (MeitY)"
          },
          {
            "id": "D",
            "text": "Ministry of External Affairs"
          }
        ],
        "correctAnswer": "C",
        "explanation": "DigiLocker is built and operated by MeitY (Ministry of Electronics and Information Technology) under Digital India."
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 7,
    "slug": "accessing-egov-services-umang-prashikshan",
    "title": "Accessing e-Gov Services: UMANG App & National Portals",
    "hindiTitle": "UMANG ऐप (Unified Mobile App) एवं राष्ट्रीय सरकारी पोर्टल्स",
    "definitionEnglish": "The UMANG (Unified Mobile Application for New-age Governance) app is an all-in-one unified mobile application developed by MeitY and NeGD that integrates over 1,200 central and state government citizen services into a single multilingual mobile interface.",
    "definitionHindi": "उमंग (UMANG) ऐप इलेक्ट्रॉनिक्स और आईटी मंत्रालय द्वारा विकसित एक एकीकृत मोबाइल ऐप है जो 1200+ केंद्र और राज्य सरकार की सेवाओं (जैसे EPF, गैस बुकिंग, पेंशन, छात्रवृत्ति) को 13 भारतीय भाषाओं में एक ही स्थान पर उपलब्ध कराता है।",
    "simpleWords": "UMANG (Unified Mobile Application for New-age Governance) एक ऐसा सिंगल ऐप है जिससे PF पासबुक चेक करना, LPG सिलेंडर बुक करना, और CBSE रिजल्ट देखना सब एक जगह से होता है।",
    "examImportance": "Very High (4-5 direct questions on UMANG full form, developer NeGD/MeitY, language count 13 languages, and major services in every CCC exam)",
    "detailedExplanation": "### 1. The UMANG Mobile Application\n- **Full Form:** **`UMANG` = Unified Mobile Application for New-age Governance**.\n- **Launched By:** Hon'ble Prime Minister Narendra Modi in **November 2017**.\n- **Developed By:** **Ministry of Electronics and Information Technology (MeitY)** in collaboration with the **National e-Governance Division (NeGD)**.\n- **Number of Languages Supported:** **`13 Indian Languages`** (English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu).\n- **Core Citizen Services Integrated inside UMANG:**\n  - **EPFO (Employees' Provident Fund Organization):** View EPF Passbook, track PF claim status, apply for PF withdrawal.\n  - **LPG Cylinder Booking:** Online refill booking and subsidy tracking for Bharat Gas, Indane, and HP Gas.\n  - **Pradhan Mantri Awas Yojana (PMAY):** Check housing beneficiary status.\n  - **Ayushman Bharat (PM-JAY):** Search empanelled hospitals and download health cards.\n  - **CBSE & Examination Results:** View 10th and 12th board results.\n\n### 2. Other Crucial National e-Gov Portals\n- **NCS (National Career Service - `ncs.gov.in`):** A unified employment portal connecting job-seekers with employers, career counselors, and skill training centers.\n- **PMKVY (Pradhan Mantri Kaushal Vikas Yojana):** Flagship skill certification scheme of the Ministry of Skill Development and Entrepreneurship (MSDE).\n- **GeM (Government e-Marketplace - `gem.gov.in`):** Online public procurement portal where government ministries directly purchase goods and services from registered vendors.",
    "realWorldAnalogy": "UMANG is like a massive digital government mall: instead of traveling to 50 separate government offices in 50 different cities, all offices have opened customer service counters inside one single smartphone app.",
    "importantPoints": [
      "UMANG stands for Unified Mobile Application for New-age Governance.",
      "UMANG supports 13 major Indian languages.",
      "UMANG was developed by MeitY and NeGD and launched in November 2017.",
      "EPFO passbook inquiry and LPG gas cylinder booking can be done directly through UMANG.",
      "NCS stands for National Career Service (employment portal)."
    ],
    "commonMistakes": [
      "Writing UMANG full form as 'Universal Mobile App...' (The correct name is 'Unified Mobile Application for New-age Governance').",
      "Thinking UMANG only supports Hindi and English (It supports 13 Indian languages)."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the full form of UMANG?' ➔ Unified Mobile Application for New-age Governance.",
      "Guaranteed CCC Question: 'How many languages does the UMANG app support?' ➔ 13 Languages.",
      "Guaranteed CCC Question: 'Which agency developed the UMANG app?' ➔ MeitY and NeGD."
    ],
    "quickRevision": "UMANG=Unified Mobile Application for New-age Governance. Launched 2017 (MeitY + NeGD), 13 languages, 1200+ services (EPFO, LPG, PMAY, CBSE). NCS=National Career Service, GeM=Govt e-Marketplace.",
    "practiceAssignment": "Download the UMANG app or explore umang.gov.in and browse the list of services available under the EPFO and Ministry of Education sections.",
    "microQuiz": [
      {
        "question": "What is the correct full form of the government mobile application 'UMANG'?",
        "options": [
          {
            "id": "A",
            "text": "Universal Mobile Application for National Growth"
          },
          {
            "id": "B",
            "text": "Unified Mobile Application for New-age Governance"
          },
          {
            "id": "C",
            "text": "Unique Mobile Access for National Government"
          },
          {
            "id": "D",
            "text": "United Mobile App for Next Generation"
          }
        ],
        "correctAnswer": "B",
        "explanation": "UMANG stands for Unified Mobile Application for New-age Governance, an all-in-one government service platform."
      },
      {
        "question": "How many regional and official Indian LANGUAGES are supported by the UMANG mobile application?",
        "options": [
          {
            "id": "A",
            "text": "2 Languages"
          },
          {
            "id": "B",
            "text": "8 Languages"
          },
          {
            "id": "C",
            "text": "13 Languages"
          },
          {
            "id": "D",
            "text": "22 Languages"
          }
        ],
        "correctAnswer": "C",
        "explanation": "The UMANG application supports 13 major Indian languages including English, Hindi, and 11 regional languages."
      }
    ]
  },
  {
    "chapterNumber": 7,
    "topicNumber": 8,
    "slug": "cyber-etiquette-and-email-security",
    "title": "Cyber Etiquette, Email Security & Phishing Awareness",
    "hindiTitle": "साइबर शिष्टाचार, ई-मेल सुरक्षा एवं फ़िशिंग (Phishing) से बचाव",
    "definitionEnglish": "Cyber etiquette and email security encompass best practices for safe digital communication, recognizing deceptive social engineering schemes (Phishing, Spoofing), implementing Multi-Factor Authentication (MFA), and defending against email-borne malware attacks.",
    "definitionHindi": "साइबर सुरक्षा एवं ई-मेल सुरक्षा में इंटरनेट पर धोखाधड़ी (जैसे फ़िशिंग, स्पूफिंग) से बचना, टू-फैक्टर ऑथेंटिकेशन (2FA) लागू करना और अनजान ई-मेल अटैचमेंट्स से वायरस संक्रमण को रोकना शामिल है।",
    "simpleWords": "फ़िशिंग (फर्जी ई-मेल भेजकर पासवर्ड चुराना), स्पैमिंग, संदिग्ध लिंक पर क्लिक न करना और टू-फैक्टर ऑथेंटिकेशन (2FA / OTP) से अपने ई-मेल खाते को सुरक्षित रखना।",
    "examImportance": "High (3-4 questions on Phishing definitions, Spam filters, and Two-Factor Authentication 2FA)",
    "detailedExplanation": "### 1. Phishing & Email Spoofing Attacks\n1. **Phishing:**\n   - A fraudulent cybercrime where attackers send **fake, deceptive emails pretending to be from trusted banks, government agencies, or tech companies** (e.g., *\"Your SBI Bank account is locked! Click here to verify OTP immediately\"*).\n   - Directs victims to clone fake websites designed to steal usernames, passwords, credit card numbers, and UPI PINs.\n2. **Email Spoofing:**\n   - Forging the sender address header in an email so that the message appears to have originated from someone else (e.g., spoofing `support@google.com`).\n3. **Spamming:**\n   - Sending unsolicited bulk advertising messages to thousands of email accounts simultaneously.\n\n### 2. Safeguards and Defensive Strategies\n- **Two-Factor Authentication (2FA / MFA):**\n  - Adds a critical second verification layer beyond a simple password: Requires *Something You Know* (Password) + *Something You Have* (Smartphone OTP / Authenticator App / Biometric Fingerprint).\n  - Even if a hacker steals your password through phishing, they cannot log into your account without the OTP!\n- **Safe Attachment Policies:**\n  - **NEVER** open or execute email attachments ending with executable extensions: **`.exe`, `.scr`, `.vbs`, `.bat`, `.js`**.\n- **Inspecting Hyperlink URLs:**\n  - Always hover the mouse pointer over links in suspicious emails before clicking to reveal the true underlying destination URL in the status bar!",
    "realWorldAnalogy": "Phishing is like an angler dropping a shiny fake bait hook into the water to catch a fish: the email looks like a delicious reward or urgent bank alert, but behind it is a sharp hook designed to steal your credentials.",
    "importantPoints": [
      "Phishing is a deceptive social engineering attack designed to steal passwords and financial details.",
      "Two-Factor Authentication (2FA) requires two independent verification steps (Password + OTP).",
      "Never execute suspicious email attachments with .exe, .vbs, or .bat extensions.",
      "Hovering over a link reveals its true destination URL.",
      "Spam is unsolicited bulk email."
    ],
    "commonMistakes": [
      "Clicking emergency links in emails asking to update KYC or bank details (Official banks never ask for passwords or PINs via email).",
      "Assuming strong passwords alone are 100% secure without Two-Factor Authentication."
    ],
    "examTips": [
      "Guaranteed CCC Question: 'What is the fraudulent attempt to obtain sensitive information like usernames and passwords through deceptive emails called?' ➔ Phishing.",
      "Guaranteed CCC Question: 'What does 2FA stand for?' ➔ Two-Factor Authentication."
    ],
    "quickRevision": "Threats: Phishing (fraudulent identity theft emails), Spoofing (fake sender), Spam (bulk junk). Defense: 2FA (Two-Factor Authentication: Password + OTP), do not open .exe attachments, verify URLs.",
    "practiceAssignment": "Enable 2-Step Verification (Two-Factor Authentication) on your personal Google/Gmail account using Google Authenticator or SMS OTP.",
    "microQuiz": [
      {
        "question": "What is the cyber attack called where fraudulent emails masquerade as legitimate institutions to trick victims into revealing passwords or credit card details?",
        "options": [
          {
            "id": "A",
            "text": "Phishing"
          },
          {
            "id": "B",
            "text": "Defragmentation"
          },
          {
            "id": "C",
            "text": "Paging"
          },
          {
            "id": "D",
            "text": "Spooling"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Phishing is a social engineering attack that uses deceptive emails and cloned login portals to steal sensitive personal and financial data."
      }
    ]
  }
];
