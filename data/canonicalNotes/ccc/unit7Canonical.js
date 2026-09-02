// Unit 7: E-mail, Social Networking & e-Gov Services - Tutorial & Textbook Grade Content
export function getUnit7Canonical() {
  return {
    unitNumber: 7,
    title: "E-mail, Social Networking & e-Gov Services",
    officialSection: "7.0 - 7.9",
    totalHours: 9,
    theoryHours: 3,
    practicalHours: 6,
    introduction: "Modern digital communication encompasses electronic mail, social media networks, instant messaging, electronic commerce, and citizen e-governance platforms. This unit teaches the complete structure and operational protocols of email (To, CC, BCC, attachments, mailbox management), social networking platforms and netiquette, e-commerce transaction models, and flagship Indian Digital India e-governance citizen portals including DigiLocker, UMANG, IRCTC, and Passport Seva.",
    whatYouWillLearn: [
      "The historical genesis and anatomy of an email address (Ray Tomlinson 1971, '@' symbol, username@domain).",
      "Composing emails: To, CC (Carbon Copy visible to all), BCC (Blind Carbon Copy secret/hidden), attachments (paperclip icon, 25MB Gmail limit), and email signatures.",
      "Mailbox folders: Inbox, Outbox (pending queue), Sent, Drafts, Spam, and Trash (auto-deleted after 30 days).",
      "Social networking platforms (Facebook, X/Twitter 280 characters, LinkedIn professional network) and Netiquette rules (ALL CAPS = SHOUTING).",
      "Instant messaging (WhatsApp, Telegram) and Blogs (reverse chronological order web logs).",
      "The 4 major e-Commerce business models: B2B, B2C, C2C (OLX), and C2B.",
      "Citizen e-Governance models (G2C, G2B, G2G) and official portals: IRCTC (10-digit PNR), Passport Seva, and e-Hospital (ORS).",
      "Flagship citizen platforms: DigiLocker (1 GB storage, 10MB file limit, Rule 9A legal original equivalence) and UMANG App (13 languages, 1200+ services)."
    ],
    topics: [
      {
        code: "7.1",
        title: "Structure of an Email and Email Protocol",
        whatIsIt: "Electronic Mail (E-mail) is a digital messaging system that allows users to send and receive text, images, and documents across computer networks almost instantaneously.",
        whyImportant: "Email is the official, legally recognized communication standard for business correspondence, government notices, academic admissions, and corporate transactions worldwide.",
        howItWorks: "An email client (like Gmail or Thunderbird) sends outgoing messages via Simple Mail Transfer Protocol (SMTP) to a mail server. The server routes the message across the Internet to the recipient's mail server, where it is retrieved using POP3 or IMAP.",
        componentsTitle: "ANATOMY OF AN EMAIL ADDRESS",
        componentsOrTypes: [
          "Father of Email: Ray Tomlinson invented network email in 1971 and introduced the universal at-sign (`@`) symbol to separate the username from the machine domain.",
          "Standard Syntax: `username@domain.com` (e.g. `saurabh.tiwari@nielit.gov.in`).",
          "Username (Local Part): Identifies the specific person or mailbox (characters, numbers, dots; spaces are strictly prohibited).",
          "Domain Name: Identifies the mail server host provider (e.g., `gmail.com`, `nielit.gov.in`).",
          "Separator (`@`): Pronounced 'at', cleanly divides the username from the server domain."
        ],
        practicalExample: "In the email address `exam.controller@nielit.gov.in`: `exam.controller` is the username representing the official's mailbox, `@` is the separator, and `nielit.gov.in` is the official government domain hosting the mail server.",
        importantPoints: [
          "Ray Tomlinson invented email in 1971 and introduced the `@` symbol.",
          "An email address cannot contain spaces.",
          "SMTP (Simple Mail Transfer Protocol) is used for SENDING outgoing emails.",
          "POP3 and IMAP protocols are used for RECEIVING incoming emails."
        ],
        quickRevision: "Email was invented by Ray Tomlinson (1971, `@` symbol). Format: `username@domain` (no spaces). SMTP sends mail (Port 25); POP3/IMAP receive mail."
      },
      {
        code: "7.2",
        title: "Composing, Sending, CC, BCC, and Attachments",
        whatIsIt: "Composing an email involves addressing recipient fields (To, CC, BCC), adding a subject line, typing the message body, attaching files via the paperclip icon, and adding a digital signature.",
        whyImportant: "Understanding the privacy difference between CC and BCC is essential to prevent accidentally exposing confidential email lists to unauthorized recipients.",
        howItWorks: "The sender enters addresses into respective fields. The mail server relays copies to all recipients, but strips out the BCC header line so BCC recipients remain completely invisible.",
        tableTitle: "RECIPIENT ADDRESSING FIELDS: TO VS. CC VS. BCC",
        table: {
          headers: ["Recipient Field", "Full Term Meaning", "Recipient Visibility", "Intended Practical Use Case"],
          rows: [
            ["To", "Primary Recipient", "Visible to all recipients", "Direct person expected to read, reply, or take immediate action"],
            ["CC", "Carbon Copy", "Visible to all recipients", "Secondary stakeholders kept informed for reference; no direct action required"],
            ["BCC", "Blind Carbon Copy", "Strictly Hidden / Invisible", "Mass announcements where recipients' private email addresses must remain secret"]
          ],
          colWidths: [80, 110, 140, 181]
        },
        componentsTitle: "COMPOSITION ELEMENTS & LIMITS",
        componentsOrTypes: [
          "Subject Line: A brief, clear summary of the email's purpose (never leave the subject blank in formal communication).",
          "Attachment (Paperclip Icon): Attaches external digital files (PDFs, images, spreadsheets). Standard Gmail maximum attachment file size limit is **25 MB**.",
          "Email Signature: A standardized block of text automatically appended to the bottom of outgoing emails containing your full name, designation, phone number, and organization."
        ],
        practicalExample: "A manager sends a project update to their team: The team members' addresses are placed in the 'To' field. The department director is placed in 'CC' (kept informed). The company CEO is placed in 'BCC' (observing silently without the team knowing the CEO received a copy).",
        importantPoints: [
          "CC stands for Carbon Copy; all recipients can see who received a CC copy.",
          "BCC stands for Blind Carbon Copy; other recipients CANNOT see who is listed in BCC.",
          "The paperclip icon represents adding a file Attachment.",
          "The maximum standard file attachment size in Gmail is 25 MB."
        ],
        quickRevision: "To = primary recipient. CC = Carbon Copy (visible). BCC = Blind Carbon Copy (hidden/secret for privacy). Paperclip icon attaches files (25MB limit in Gmail)."
      },
      {
        code: "7.3",
        title: "Managing Mailboxes: Inbox, Outbox, Sent, and Trash",
        whatIsIt: "Mailbox management involves organizing messages into dedicated system folders to track incoming, outgoing, queued, draft, and discarded communications.",
        whyImportant: "Proper mailbox organization prevents missing urgent correspondence, allows reviewing sent proof, and frees storage quota by managing trash and spam.",
        howItWorks: "Mail servers automatically categorize incoming and outgoing messages into pre-defined folder structures based on message delivery status.",
        tableTitle: "STANDARD EMAIL MAILBOX FOLDERS REFERENCE",
        table: {
          headers: ["Mailbox Folder", "Functional Purpose", "Automatic Retention & System Behavior"],
          rows: [
            ["Inbox", "Stores all incoming received email messages", "Messages remain indefinitely until manually archived or deleted"],
            ["Outbox", "Temporary holding queue for outgoing messages", "Holds emails temporarily while transmitting or when offline; empties once sent"],
            ["Sent (Sent Mail)", "Stores copies of messages successfully transmitted", "Provides permanent legal proof of messages delivered to the server"],
            ["Drafts", "Stores unfinished, unsent email compositions", "Auto-saves typed messages so you can resume editing later"],
            ["Spam / Junk", "Filters suspected unsolicited promotional or phishing emails", "Auto-quarantined by spam filters; auto-purged periodically"],
            ["Trash / Bin", "Stores deleted email messages", "Holding area for deleted mail; **automatically deleted permanently after 30 days**"]
          ],
          colWidths: [100, 180, 231]
        },
        practicalExample: "You write an email on a train with no cellular signal and click 'Send'. The email waits in the **Outbox** folder. When the train arrives at a station with network coverage, the email sends successfully and automatically moves from Outbox to **Sent**.",
        importantPoints: [
          "Emails waiting to be sent (due to no internet connection) reside in the Outbox.",
          "Successfully transmitted emails reside in the Sent folder.",
          "Deleted emails are moved to the Trash / Bin folder.",
          "Messages in the Trash folder are automatically deleted permanently after 30 days (in Gmail/standard webmail)."
        ],
        quickRevision: "Inbox = received. Outbox = pending queue. Sent = successfully delivered. Drafts = unsent. Trash = deleted (auto-purged after 30 days)."
      },
      {
        code: "7.4",
        title: "Social Networking Platforms and Netiquette",
        whatIsIt: "Social networking platforms are online interactive communities where users create public or semi-public profiles to share text, photos, video updates, and professional credentials. **Netiquette** (Network Etiquette) is the established code of respectful, polite online behavior.",
        whyImportant: "Social networks drive modern public discourse and career recruitment, while proper Netiquette prevents cyberbullying, privacy violations, and professional reputation damage.",
        howItWorks: "Users register accounts, build friend/follower graphs, publish posts, and interact using likes, comments, and direct messages.",
        tableTitle: "MAJOR SOCIAL NETWORKING PLATFORMS OVERVIEW",
        table: {
          headers: ["Social Platform", "Founder & Launch Year", "Core Niche / Feature", "Key Exam Fact / Specification"],
          rows: [
            ["Facebook", "Mark Zuckerberg (2004)", "Personal & community social networking", "World's largest social network; parent company is Meta"],
            ["X (formerly Twitter)", "Jack Dorsey, Biz Stone (2006)", "Microblogging and breaking real-time news", "Standard post limit is **280 characters**; uses '#' hashtags"],
            ["LinkedIn", "Reid Hoffman (2003)", "Professional business & career networking", "Used for corporate job recruiting, resumes, and B2B connections"],
            ["Instagram", "Kevin Systrom, Mike Krieger (2010)", "Visual photo and short video sharing", "Acquired by Meta; emphasizes visual stories and reels"],
            ["YouTube", "Steve Chen, Chad Hurley, Jawed Karim (2005)", "Online video sharing and live streaming", "World's largest video platform; owned by Google"]
          ],
          colWidths: [110, 140, 130, 131]
        },
        componentsTitle: "GOLDEN RULES OF NETIQUETTE (ONLINE ETIQUETTE)",
        componentsOrTypes: [
          "Never Type in All Capital Letters: Typing messages in ALL CAPS is universally interpreted in online communication as **SHOUTING or AGGRESSION**.",
          "Respect Privacy: Never share someone else's personal phone number, home address, or private photos without explicit consent (doxxing).",
          "Verify Before Sharing: Never forward unverified rumors, hate speech, or panic messages on social groups.",
          "Professional Tone: Maintain polite, courteous language and respect differing viewpoints in public forums."
        ],
        practicalExample: "When applying for a job, a candidate connects with hiring managers on LinkedIn (professional networking). In their communication, typing 'PLEASE HIRE ME' in all caps appears aggressive; typing 'Please review my resume for the software role' follows correct Netiquette.",
        importantPoints: [
          "X (formerly Twitter) character limit for a standard post is 280 characters.",
          "LinkedIn is the premier social platform dedicated to professional and career networking.",
          "In Netiquette, typing in ALL CAPITAL LETTERS is considered SHOUTING.",
          "The symbol used to categorize topics on social media is the hash symbol (`#` hashtag)."
        ],
        quickRevision: "Facebook (2004), X/Twitter (280 chars, #hashtag), LinkedIn (professional networking). Netiquette: Typing in ALL CAPS = SHOUTING. Respect privacy and verify facts."
      },
      {
        code: "7.5",
        title: "Instant Messaging and Blogs",
        whatIsIt: "Instant Messaging (IM) provides real-time, bidirectional text, voice, and video communication between individuals or groups. A **Blog** (short for Web Log) is an online personal or thematic journal updated regularly with articles displayed in **reverse chronological order** (newest posts first).",
        whyImportant: "Instant messaging has largely replaced traditional SMS for everyday communication, while blogs serve as democratized publishing platforms for journalism, education, and technical tutorials.",
        howItWorks: "IM applications use internet data sockets with End-to-End Encryption (E2EE) so only sender and recipient can read messages. Blogs utilize Content Management Systems (CMS) with posts, tags, and comment feeds.",
        componentsTitle: "INSTANT MESSAGING & BLOGGING PLATFORMS",
        componentsOrTypes: [
          "Popular Instant Messengers: WhatsApp, Telegram, Signal, Facebook Messenger. Modern messengers feature End-to-End Encryption (E2EE), meaning even the telecom provider or server cannot inspect the message contents.",
          "Characteristics of a Blog: Maintained by a 'Blogger'; articles are called 'Posts'; displayed in reverse chronological order (newest on top); readers can post comments.",
          "Blogging CMS Platforms: WordPress, Blogger (Blogspot by Google), Medium.",
          "Vlog (Video Blog): A blog where the primary medium is recorded video rather than written text (popular on YouTube)."
        ],
        practicalExample: "A teacher creates a blog named 'CCC_Master_Notes'. When they publish 'Unit 7 Notes' on Friday, it appears at the very top of the webpage. The older 'Unit 6 Notes' published on Thursday moves down to second place (reverse chronological order).",
        importantPoints: [
          "Blog is short for Web Log.",
          "Articles on a blog are displayed in Reverse Chronological Order (newest first).",
          "E2EE stands for End-to-End Encryption.",
          "Blogger is a free blogging platform provided by Google."
        ],
        quickRevision: "Instant messaging provides real-time E2EE communication (WhatsApp, Telegram). Blogs (Web Logs) display articles in reverse chronological order (newest first)."
      },
      {
        code: "7.6",
        title: "e-Commerce Business Models: B2B, B2C, C2C, C2B",
        whatIsIt: "Electronic Commerce (e-Commerce) is the buying and selling of goods, services, and digital products over the Internet, categorized into distinct business models based on the transacting parties.",
        whyImportant: "e-Commerce powers the modern digital retail economy, enabling consumer shopping from home, digital payments, and global business supply chains.",
        howItWorks: "Online marketplaces host electronic product catalogs, secure shopping carts, digital payment gateways (UPI, Cards), and automated logistics tracking.",
        tableTitle: "THE 4 MAJOR E-COMMERCE BUSINESS MODELS",
        table: {
          headers: ["e-Commerce Model", "Transacting Parties", "Operational Description", "Prominent Real-World Examples"],
          rows: [
            ["B2B (Business-to-Business)", "Business -> Business", "Wholesale transactions, raw material procurement, and bulk business supply", "IndiaMART, Alibaba, Udaan, TradeIndia"],
            ["B2C (Business-to-Consumer)", "Business -> Consumer", "Retail businesses selling products directly to individual end-users", "Amazon India, Flipkart, Myntra, BookMyShow"],
            ["C2C (Consumer-to-Consumer)", "Consumer -> Consumer", "Individual consumers selling second-hand used goods directly to other consumers", "OLX, Quikr, eBay, Facebook Marketplace"],
            ["C2B (Consumer-to-Business)", "Consumer -> Business", "Individual freelancers or influencers selling services, photos, or code to businesses", "Upwork, Freelancer, Shutterstock, Fiverr"]
          ],
          colWidths: [120, 120, 150, 121]
        },
        practicalExample: "When a farmer sells a used tractor directly to another farmer on OLX, it is a **C2C** transaction. When a student orders a textbook from Amazon, it is a **B2C** transaction. When a retail store buys 500 laptops from a manufacturer on IndiaMART, it is a **B2B** transaction.",
        importantPoints: [
          "OLX and Quikr are classic examples of the C2C (Consumer-to-Consumer) model.",
          "Amazon and Flipkart are primary examples of the B2C (Business-to-Consumer) model.",
          "IndiaMART is a prominent B2B (Business-to-Business) marketplace.",
          "e-Commerce relies on secure digital payment gateways and logistics tracking."
        ],
        quickRevision: "e-Commerce models: B2B (wholesale businesses: IndiaMART), B2C (retail to consumer: Amazon), C2C (peer-to-peer used goods: OLX), C2B (freelancer to business)."
      },
      {
        code: "7.7",
        title: "e-Governance Citizen Services: IRCTC, Passport, e-Hospital",
        whatIsIt: "Electronic Governance (e-Governance) is the application of Information Technology by government bodies to deliver public services, exchange information, and conduct administrative transactions transparently to citizens and businesses.",
        whyImportant: "e-Governance eliminates middlemen, prevents bribery, removes the need to stand in long physical queues, and delivers 24x7 transparent government services directly to citizens' phones.",
        howItWorks: "Government portals integrate national citizen databases (Aadhaar, PAN) with online payment gateways to process citizen applications, railway reservations, and hospital OPD registrations digitally.",
        tableTitle: "E-GOVERNANCE SERVICE MODELS & PORTALS",
        table: {
          headers: ["e-Gov Model / Portal", "Government Entity", "Service Description & Key Identifier", "Citizen Benefits"],
          rows: [
            ["G2C (Gov-to-Citizen)", "All Ministries", "Services delivered directly to individual citizens", "Aadhaar update, Ration Card, Voter ID registration"],
            ["G2B (Gov-to-Business)", "Ministry of Finance", "Services and compliance for commercial enterprises", "GST e-filing, MCA Company Registration, GeM portal"],
            ["G2G (Gov-to-Gov)", "Inter-Departmental", "Data sharing and coordination between government departments", "Smart City traffic management, inter-state police grids"],
            ["IRCTC Portal", "Indian Railways (CRIS)", "Online railway ticket booking; issues **10-digit PNR**", "Book train berths, tatkal tickets, and order meals online"],
            ["Passport Seva", "Ministry of External Affairs", "Online passport application and appointment scheduling", "Transparent tracking of passport verification and delivery"],
            ["e-Hospital (ORS)", "Ministry of Health (NIC)", "Online Registration System (ORS) for government hospital OPD", "Book OPD doctor appointments at AIIMS and civil hospitals online"]
          ],
          colWidths: [110, 110, 160, 131]
        },
        practicalExample: "To visit AIIMS for a medical checkup: The citizen visits `ors.gov.in` (e-Hospital), verifies their Aadhaar number via OTP, selects the hospital and department, and books a confirmed OPD appointment slot without waiting in line at the hospital counter at 5 AM.",
        importantPoints: [
          "G2C stands for Government-to-Citizen; G2B stands for Government-to-Business.",
          "IRCTC railway passenger tickets issue a unique 10-digit PNR (Passenger Name Record) number.",
          "Passport Seva portal is managed by the Ministry of External Affairs (MEA).",
          "e-Hospital ORS (Online Registration System) enables digital booking of hospital OPD appointments."
        ],
        quickRevision: "e-Governance delivers citizen services online (G2C, G2B, G2G). Portals: IRCTC (10-digit PNR for trains), Passport Seva (MEA passports), e-Hospital ORS (hospital OPD booking)."
      },
      {
        code: "7.8",
        title: "DigiLocker and UMANG App",
        whatIsIt: "DigiLocker and UMANG are two flagship mobile e-governance platforms under the Digital India initiative of the Ministry of Electronics and Information Technology (MeitY).",
        whyImportant: "DigiLocker replaces physical paper certificates with legally valid digital originals, while UMANG aggregates over 1,200 central and state government services into a single unified mobile app.",
        howItWorks: "Both platforms authenticate citizens using their 12-digit Aadhaar number linked to mobile OTP, securely pulling verified digital certificates directly from government issuer databases.",
        tableTitle: "DIGILOCKER VS. UMANG APP COMPARISON",
        table: {
          headers: ["Feature / Parameter", "DigiLocker Platform", "UMANG Mobile Application"],
          rows: [
            ["Governing Ministry", "MeitY (Digital India Initiative, launched 2015)", "MeitY & NeGD (Launched November 2017)"],
            ["Full Name / Acronym", "Digital Locker (Secure Cloud Document Wallet)", "Unified Mobile Application for New-age Governance"],
            ["Storage & File Limits", "Provides **1 GB free cloud storage**; 10 MB upload per file", "Not a document storage; service aggregation portal"],
            ["Primary Core Purpose", "Issuing, storing, and verifying digital documents (Aadhaar, DL, RC, Marksheets)", "Single unified gateway accessing 1,200+ central & state citizen services"],
            ["Supported Languages", "English, Hindi, and regional Indian languages", "Available in **13 Indian languages**"],
            ["Legal Recognition", "Documents are legally equivalent to physical originals under **Rule 9A of IT Rules 2016**", "Enables direct official citizen transactions (EPFO, LPG, PMAY, CBSE, Taxes)"]
          ],
          colWidths: [110, 200, 201]
        },
        componentsTitle: "DIGILOCKER DOCUMENT CATEGORIES",
        componentsOrTypes: [
          "Issued Documents (Green Verified Badge): Pulled directly from official issuer databases (e.g. CBSE 10th Marksheet, Driving License from MoRTH). These carry legal validity under IT Act Rule 9A.",
          "Uploaded Documents: Scanned personal documents uploaded by the user to their 1 GB personal storage drive (acts as private backup, but does not carry official verified legal status).",
          "National Cyber Crime Helpline: In case of cyber fraud or identity theft, citizens should immediately dial **`1930`** or report at `cybercrime.gov.in`."
        ],
        practicalExample: "During a traffic police check: The driver does not carry their physical driving license. They open the DigiLocker app and display their digital Driving License and Vehicle RC (pulled directly from MoRTH). Traffic police scan the QR code and accept it as a legally valid original under Rule 9A of the IT Rules.",
        importantPoints: [
          "DigiLocker provides 1 GB of free secure cloud storage to every Aadhaar-verified citizen.",
          "Under Rule 9A of the IT (Preservation and Retention of Information) Rules 2016, issued documents in DigiLocker are legally treated as physical originals.",
          "UMANG stands for Unified Mobile Application for New-age Governance.",
          "UMANG was launched in November 2017 and supports 13 Indian languages.",
          "National Cyber Crime Reporting Helpline number is 1930."
        ],
        quickRevision: "DigiLocker provides 1 GB storage for legally valid digital certificates (Rule 9A). UMANG (Nov 2017, 13 languages) unifies 1200+ government services (EPFO, LPG, PMAY). Cyber helpline = 1930."
      }
    ],
    unitRevision: [
      "Email was invented by Ray Tomlinson in 1971, introducing the `@` separator: `username@domain` (no spaces allowed).",
      "Email Addressing: To = primary recipient; CC (Carbon Copy) = visible to all; BCC (Blind Carbon Copy) = hidden/secret for privacy.",
      "The paperclip icon represents adding an attachment. Standard Gmail attachment limit is 25 MB.",
      "Mailbox folders: Inbox (received), Outbox (pending queue), Sent (delivered proof), Drafts (unsent), Trash (deleted, auto-purged after 30 days).",
      "Social Media: Facebook (2004, Zuckerberg), X/Twitter (280 characters, #hashtag), LinkedIn (professional networking).",
      "Netiquette: Typing in ALL CAPITAL LETTERS is universally considered SHOUTING. Respect privacy and avoid harassment.",
      "Instant Messaging (WhatsApp, Telegram) uses End-to-End Encryption (E2EE). Blogs display posts in reverse chronological order.",
      "The 4 e-Commerce Models: B2B (IndiaMART), B2C (Amazon/Flipkart), C2C (OLX/Quikr), C2B (Freelancers).",
      "e-Governance Portals: IRCTC issues 10-digit PNR for train bookings; Passport Seva is managed by MEA; e-Hospital ORS books OPD appointments.",
      "DigiLocker (MeitY, 2015) provides 1 GB free cloud storage. Issued documents are legally valid originals under Rule 9A of IT Rules 2016.",
      "UMANG App (Nov 2017, 13 languages) unifies 1200+ government services. National Cyber Crime Helpline is 1930."
    ],
    keyTerms: [
      { term: "SMTP", fullForm: "Simple Mail Transfer Protocol", desc: "Protocol for sending outgoing emails across mail servers over Port 25." },
      { term: "POP3", fullForm: "Post Office Protocol version 3", desc: "Protocol for downloading incoming emails to a local client over Port 110." },
      { term: "IMAP", fullForm: "Internet Message Access Protocol", desc: "Protocol synchronizing email folders across multiple devices over Port 143." },
      { term: "CC", fullForm: "Carbon Copy", desc: "Secondary email recipient field visible to all parties." },
      { term: "BCC", fullForm: "Blind Carbon Copy", desc: "Hidden email recipient field kept secret from all other recipients." },
      { term: "E2EE", fullForm: "End-to-End Encryption", desc: "Cryptographic security where only communicating users can read messages." },
      { term: "PNR", fullForm: "Passenger Name Record", desc: "10-digit unique booking reference number on IRCTC train tickets." },
      { term: "UMANG", fullForm: "Unified Mobile Application for New-age Governance", desc: "Official Indian government app aggregating 1,200+ citizen services." },
      { term: "MeitY", fullForm: "Ministry of Electronics and Information Technology", desc: "Union ministry governing Digital India, DigiLocker, and UMANG." }
    ]
  };
}
