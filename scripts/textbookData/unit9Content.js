// Unit 9: Overview of FutureSkills & Cyber Security - Tutorial & Textbook Grade Content
export function getUnit9Content() {
  return {
    unitNumber: 9,
    title: "Overview of FutureSkills & Cyber Security",
    officialSection: "9.0 - 9.4",
    totalHours: 7,
    theoryHours: 4,
    practicalHours: 3,
    introduction: "The Fourth Industrial Revolution (Industry 4.0) is powered by transformative digital technologies including the Internet of Things (IoT), Big Data Analytics, Cloud Computing, Artificial Intelligence (AI), Virtual/Augmented Reality, 3D Printing, and Robotic Process Automation (RPA). Alongside these opportunities, protecting digital infrastructure is critical. This unit teaches the foundational principles of FutureSkills, the CIA cyber security triad, malware classifications (Viruses, Worms, Trojans, Ransomware, Spyware), firewall defense, and key legal provisions of the Information Technology Act 2000.",
    whatYouWillLearn: [
      "Internet of Things (IoT): History (Kevin Ashton 1999), Sensors (data input), Actuators (physical action), and smart home/industrial ecosystems.",
      "Big Data Analytics: The defining 5 Vs (Volume, Velocity, Variety, Veracity, and Value).",
      "Cloud Computing service delivery models: Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS).",
      "Artificial Intelligence (John McCarthy 1956), Machine Learning (ML), and Natural Language Processing (NLP).",
      "Immersive technologies: Virtual Reality (VR headsets), Augmented Reality (AR digital overlay), 3D Printing (Additive Manufacturing), and RPA software bots.",
      "Cyber Security fundamentals: The CIA Triad (Confidentiality, Integrity, and Availability).",
      "Malware taxonomy: Viruses (host-dependent, Creeper 1971), Worms (self-replicating, Morris Worm 1988), Trojans, Ransomware (WannaCry), and Spyware.",
      "Securing devices: Firewalls, security patches, and the Information Technology (IT) Act 2000 (Sections 65, 66, 66C, 66F Cyber Terrorism, CERT-In)."
    ],
    topics: [
      {
        code: "9.1",
        title: "Internet of Things (IoT) Architecture and Applications",
        whatIsIt: "The Internet of Things (IoT) is a global network of physical devices ('things') embedded with sensors, software, actuators, and network connectivity that enables them to collect, exchange, and act upon physical data without human intervention.",
        whyImportant: "IoT bridges the physical and digital worlds, automating smart city street lighting, industrial machinery monitoring, agricultural soil moisture irrigation, and home appliances.",
        howItWorks: "1. **Sensors** detect physical conditions (temperature, motion, light). 2. Microcontrollers transmit data via lightweight protocols (MQTT, CoAP). 3. Cloud analytics analyze data. 4. **Actuators** execute physical responses (turning on a motor, closing an electric valve).",
        componentsTitle: "CORE ARCHITECTURAL COMPONENTS OF IoT",
        componentsOrTypes: [
          "Coined by Kevin Ashton (1999): The term 'Internet of Things' was introduced by British technologist Kevin Ashton during a presentation at Procter & Gamble.",
          "Sensors (Input Organ): Hardware devices that measure real-world physical analog phenomena and convert them into digital signals (e.g., DHT11 temperature sensor, PIR motion sensor, ultrasonic distance sensor).",
          "Actuators (Output Organ): Mechanical or electromechanical devices that execute physical movement or change in the environment upon receiving an electrical command (e.g., electric motors, relays, hydraulic valves, sirens).",
          "IoT Communication Protocols: MQTT (Message Queuing Telemetry Transport) and CoAP (Constrained Application Protocol) designed for low-bandwidth, battery-constrained devices.",
          "Industrial IoT (IIoT): Applying IoT sensors to factory assembly lines, predictive pipeline monitoring, and logistics fleet telemetry."
        ],
        practicalExample: "A Smart Agricultural Greenhouse: A soil sensor detects that moisture has fallen below 20%. It sends an alert over Wi-Fi via MQTT to a central microcontroller. The controller signals an **Actuator** (an electric relay switch) to open the water irrigation valve, watering crops automatically.",
        importantPoints: [
          "The term 'Internet of Things' (IoT) was coined by Kevin Ashton in 1999.",
          "Sensors collect and capture data from the physical environment (Input).",
          "Actuators perform physical movements or mechanical operations (Output).",
          "MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol widely used in IoT.",
          "IIoT stands for Industrial Internet of Things."
        ],
        quickRevision: "IoT connects physical devices to the internet. Coined by Kevin Ashton in 1999. Sensors detect input; Actuators execute physical motion. Uses lightweight MQTT protocol."
      },
      {
        code: "9.2",
        title: "Big Data Analytics and the 5 Vs",
        whatIsIt: "Big Data refers to extremely vast, complex, fast-moving, and heterogeneous datasets generated by digital sensors, social media, transactions, and videos that exceed the processing capacity of traditional relational database management systems (RDBMS).",
        whyImportant: "Analyzing Big Data uncovers hidden patterns, customer behavior trends, disease outbreaks, and financial fraud that would remain invisible through manual analysis.",
        howItWorks: "Distributed computing frameworks (such as Apache Hadoop and Apache Spark) divide petabytes of raw data across clusters of thousands of computers, analyzing records simultaneously in parallel.",
        tableTitle: "THE 5 Vs OF BIG DATA FRAMEWORK",
        table: {
          headers: ["The 5 Vs Dimension", "Core Concept / Definition", "Practical Real-World Industry Example"],
          rows: [
            ["1. Volume", "The sheer physical size and scale of data generated (Terabytes, Petabytes, Exabytes)", "Billions of daily Google search queries and YouTube video uploads"],
            ["2. Velocity", "The speed and frequency at which new data is generated and must be processed", "Stock market trading feeds, credit card fraud detection algorithms (real-time)"],
            ["3. Variety", "The diverse structural formats of data (Structured, Semi-Structured, Unstructured)", "Relational SQL tables, JSON logs, audio recordings, medical X-rays, CCTV videos"],
            ["4. Veracity", "The accuracy, trustworthiness, cleanliness, and data quality of information", "Filtering out fake news, bots, and sensor noise from real customer feedback"],
            ["5. Value", "The actionable business insights, revenue, or social benefit derived from data", "Predicting cyclone landfall to evacuate coastal villages safely in advance"]
          ],
          colWidths: [110, 195, 206]
        },
        practicalExample: "UPI payment networks process over 10 billion transactions monthly (Volume) at thousands of transactions per second (Velocity), mixing QR scans, mobile app logs, and account numbers (Variety). Machine learning models analyze this data in milliseconds to flag stolen cards (Value).",
        importantPoints: [
          "The fundamental characteristics of Big Data are defined by the 5 Vs: Volume, Velocity, Variety, Veracity, and Value.",
          "Volume represents data size; Velocity represents data speed; Variety represents diverse formats.",
          "Veracity refers to the truthfulness, trustworthiness, and data quality.",
          "Apache Hadoop is a prominent open-source framework used for distributed Big Data processing."
        ],
        quickRevision: "Big Data represents massive datasets defined by the 5 Vs: Volume (size), Velocity (speed), Variety (formats), Veracity (accuracy), and Value (actionable insights)."
      },
      {
        code: "9.3",
        title: "Cloud Computing Models: SaaS, PaaS, IaaS",
        whatIsIt: "Cloud Computing is the on-demand delivery of computing services-including servers, storage, databases, networking, software, and analytics-over the Internet ('the cloud') with pay-as-you-go pricing.",
        whyImportant: "Cloud computing eliminates the need for companies to purchase, maintain, and house expensive physical server rooms and air-conditioned data centers.",
        howItWorks: "Hyperscale cloud providers (Amazon AWS, Microsoft Azure, Google Cloud) manage vast centralized server facilities, renting virtual slices of hardware and software platforms securely over the web.",
        tableTitle: "THE 3 CLOUD SERVICE DELIVERY MODELS",
        table: {
          headers: ["Cloud Service Model", "Full Form & Level of Abstraction", "What the Cloud Vendor Manages", "Prominent Real-World Examples"],
          rows: [
            ["SaaS", "Software as a Service (End-user applications)", "Entire stack: Infrastructure, OS, databases, and application software", "Google Drive, Gmail, Microsoft Office 365, Dropbox, Salesforce"],
            ["PaaS", "Platform as a Service (Developer environment)", "Hardware infrastructure, OS runtime, and web server execution engines", "Google App Engine, Heroku, AWS Elastic Beanstalk, Red Hat OpenShift"],
            ["IaaS", "Infrastructure as a Service (Raw computing)", "Physical virtualization, bare servers, network cables, and power", "Amazon AWS EC2, Microsoft Azure VMs, Google Compute Engine"]
          ],
          colWidths: [80, 140, 140, 151]
        },
        componentsTitle: "CLOUD DEPLOYMENT ARCHITECTURES",
        componentsOrTypes: [
          "Public Cloud: Owned and operated by third-party providers; computing resources are shared among multiple tenants over the public internet (e.g. AWS, Google Cloud).",
          "Private Cloud: Infrastructure operated solely and exclusively for a single organization, often hosted behind an internal corporate firewall (e.g. Defense data centers, Reserve Bank core cloud).",
          "Hybrid Cloud: Combines public and private clouds bound together by encrypted technology, allowing sensitive customer data to remain private while bursting public web traffic."
        ],
        practicalExample: "A student writing notes on Google Docs uses **SaaS** (the app runs directly in the browser). A developer coding a python website uses **PaaS** (Google App Engine runs the code). An IT admin provisioning 5 virtual Linux servers uses **IaaS** (AWS EC2)." ,
        importantPoints: [
          "SaaS stands for Software as a Service (e.g. Google Drive, Gmail, Office 365).",
          "PaaS stands for Platform as a Service (e.g. Google App Engine, Heroku).",
          "IaaS stands for Infrastructure as a Service (e.g. Amazon EC2, Azure Virtual Machines).",
          "The three cloud deployment models are Public, Private, and Hybrid Cloud."
        ],
        quickRevision: "Cloud Computing models: SaaS (ready software: Google Drive, Gmail), PaaS (dev platform: App Engine), IaaS (raw virtual servers: AWS EC2). Deployments: Public, Private, Hybrid."
      },
      {
        code: "9.4",
        title: "Artificial Intelligence, Machine Learning, and NLP",
        whatIsIt: "Artificial Intelligence (AI) is the branch of computer science dedicated to building machines capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.",
        whyImportant: "AI powers modern facial recognition, medical diagnostic imaging, autonomous vehicles, fraud prevention algorithms, and generative conversational agents.",
        howItWorks: "Traditional software requires human programmers to hand-code every rule. In contrast, **Machine Learning (ML)** uses algorithms that learn patterns directly from millions of historical data examples, iteratively improving performance.",
        componentsTitle: "AI TAXONOMY & COGNITIVE SUBFIELDS",
        componentsOrTypes: [
          "Father of Artificial Intelligence: John McCarthy, who coined the term 'Artificial Intelligence' at the Dartmouth Conference in 1956.",
          "Machine Learning (ML): A subset of AI that gives computers the ability to learn without being explicitly programmed (Supervised, Unsupervised, and Reinforcement Learning).",
          "Deep Learning: A specialized subfield of ML inspired by biological brain neural networks, utilizing multi-layered Artificial Neural Networks (ANNs) for complex image and voice analysis.",
          "Natural Language Processing (NLP): The subfield enabling computers to understand, interpret, and generate human spoken and written language (e.g. Google Assistant, Siri, ChatGPT, Machine Translation)."
        ],
        practicalExample: "When an email arrives: A Machine Learning NLP model inspects the words. If it sees suspicious phrases like 'Claim your lottery millions now!', the model automatically classifies the message as Spam and moves it to the Spam folder without manual human rules.",
        importantPoints: [
          "John McCarthy is universally recognized as the Father of Artificial Intelligence (1956).",
          "Machine Learning (ML) is a core subset of Artificial Intelligence.",
          "Deep Learning utilizes Artificial Neural Networks inspired by the human brain.",
          "NLP stands for Natural Language Processing (enables human language interaction)."
        ],
        quickRevision: "AI creates intelligent machines (Father = John McCarthy 1956). Machine Learning learns patterns from data. Deep Learning uses neural networks. NLP understands human language."
      },
      {
        code: "9.5",
        title: "Virtual Reality, Augmented Reality, 3D Printing, and RPA",
        whatIsIt: "Immersive and automated technologies redefine human sensory interaction and manufacturing: **Virtual Reality (VR)** immerses users in completely synthetic simulated worlds; **Augmented Reality (AR)** overlays digital information onto the real world; **3D Printing** builds physical 3D objects layer-by-layer; **RPA** automates repetitive computer workflows using software bots.",
        whyImportant: "These technologies revolutionize surgical training, flight simulation, customized industrial manufacturing, and clerical banking automation.",
        howItWorks: "VR uses enclosed head-mounted displays; AR uses optical camera feeds; 3D printers deposit melted plastic filament; RPA bots mimic human keyboard and mouse clicks.",
        tableTitle: "IMMERSIVE AND AUTOMATED TECHNOLOGIES COMPARISON",
        table: {
          headers: ["Technology", "Core Operating Mechanism", "Key Identifier / Pioneer", "Typical Practical Use Case"],
          rows: [
            ["Virtual Reality (VR)", "Complete sensory immersion inside a 100% digital simulated 3D environment", "Requires opaque Head-Mounted Display (HMD) headsets (e.g. Meta Quest)", "Pilot flight simulation training, military combat drills, virtual architecture walkthroughs"],
            ["Augmented Reality (AR)", "Superimposes digital computer graphics, 3D models, or text onto real physical world", "Uses smartphone cameras or transparent smart glasses", "Pokémon GO game, IKEA furniture room preview app, Google Maps Live View"],
            ["3D Printing", "Additive Manufacturing: Creates solid physical objects layer-by-layer from 3D CAD models", "Invented by Chuck Hull (1986); uses `.stl` format and PLA/ABS plastic filaments", "Rapid prototyping, medical prosthetic limbs, custom dental implants, aerospace parts"],
            ["Robotic Process Automation (RPA)", "Software 'robots' (bots) programmed to mimic human clerical keyboard and mouse actions", "Zero physical robot; purely software bots (e.g. UiPath, Automation Anywhere)", "Automating data entry between legacy banking spreadsheets and customer portals"]
          ],
          colWidths: [110, 140, 120, 141]
        },
        practicalExample: "An interior design student uses AR on their smartphone: Pointing the phone camera at an empty bedroom, the app overlays a virtual 3D sofa onto the real room floor, allowing the user to inspect its fit and color before purchasing.",
        importantPoints: [
          "Virtual Reality (VR) provides complete digital immersion using headsets.",
          "Augmented Reality (AR) overlays digital information onto the real-world view (e.g. Pokémon GO).",
          "3D Printing is formally known as Additive Manufacturing.",
          "3D Printing was invented by Chuck Hull in 1986 and commonly uses `.stl` file formats.",
          "RPA (Robotic Process Automation) uses software bots to automate repetitive clerical digital tasks."
        ],
        quickRevision: "VR = 100% virtual simulated world (headset). AR = digital overlay on real world (Pokémon GO). 3D Printing = additive manufacturing layer-by-layer (.stl). RPA = clerical software bots."
      },
      {
        code: "9.6",
        title: "Cyber Security Fundamentals & the CIA Triad",
        whatIsIt: "Cyber Security is the practice of protecting computer networks, servers, mobile devices, electronic systems, and data from malicious digital attacks, unauthorized access, identity theft, and damage.",
        whyImportant: "As banking, governance, health records, and national defense transition online, cyber security breaches can cause catastrophic financial losses and national security threats.",
        howItWorks: "Cyber security architectures are structured around the foundational **CIA Triad**: Confidentiality, Integrity, and Availability.",
        diagramType: "cia-triad",
        tableTitle: "THE CIA CYBER SECURITY TRIAD PILLARS",
        table: {
          headers: ["CIA Pillar", "Security Objective", "Common Threats & Attacks", "Standard Defensive Controls"],
          rows: [
            ["Confidentiality", "Ensuring sensitive data is accessible ONLY to authorized individuals", "Data breaches, shoulder surfing, eavesdropping, identity theft", "End-to-End Encryption, AES ciphers, two-factor authentication (2FA), access control lists"],
            ["Integrity", "Ensuring data remains accurate, complete, and untampered during storage and transit", "Unauthorized modification, man-in-the-middle tampering, checksum mismatch", "Cryptographic Hashing (SHA-256), digital signatures, audit logs, blockchain immutability"],
            ["Availability", "Ensuring systems and networks remain operational and accessible to users when needed", "DDoS (Distributed Denial of Service) attacks, hardware crashes, power outages", "Redundant backup servers, load balancers, cloud disaster recovery, uninterruptible power (UPS)"]
          ],
          colWidths: [95, 140, 135, 141]
        },
        practicalExample: "A digital bank enforces the CIA triad: (1) **Confidentiality**: Customer account balances are encrypted so hackers cannot see them. (2) **Integrity**: Cryptographic hashing ensures nobody can alter an account balance from ₹500 to ₹50,000. (3) **Availability**: High-availability backup servers ensure mobile banking works 24x7 without crashing on holidays.",
        importantPoints: [
          "The CIA Triad in cyber security stands for: Confidentiality, Integrity, and Availability.",
          "Confidentiality is protected by Encryption and Authentication.",
          "Integrity is protected by Cryptographic Hashes and Digital Signatures.",
          "Availability is protected by Redundancy, Backups, and DDoS mitigation."
        ],
        quickRevision: "The CIA Triad is the core pillar of cyber security: Confidentiality (keep data secret via encryption), Integrity (keep data accurate via hashing), and Availability (keep systems running 24x7)."
      },
      {
        code: "9.7",
        title: "Malware Taxonomy: Virus, Worm, Trojan, Ransomware, Spyware",
        whatIsIt: "Malware (short for Malicious Software) is an umbrella term for any intrusive, harmful computer program written intentionally by threat actors to damage devices, steal credentials, or compromise networks.",
        whyImportant: "Recognizing malware categories and infection mechanisms is essential to prevent system infections and protect financial accounts.",
        howItWorks: "Different malwares operate through distinct propagation vectors: Viruses attach to host files, Worms self-replicate across networks, Trojans disguise as useful programs, and Ransomware encrypts user documents.",
        tableTitle: "COMPREHENSIVE MALWARE CLASSIFICATION TAXONOMY",
        table: {
          headers: ["Malware Type", "Infection & Propagation Mechanism", "Historical / Famous Examples", "Primary Damage & Impact"],
          rows: [
            ["Computer Virus", "Must attach to a host program or executable file (.exe); requires human action to execute", "1st on ARPANET: **Creeper** (1971); 1st on PC: **Brain** (1986); 1st Antivirus: **Reaper**", "Corrupts file systems, deletes documents, alters system memory"],
            ["Computer Worm", "Standalone self-replicating program; spreads automatically across networks without human action", "**Morris Worm** (1988), ILOVEYOU, Conficker", "Consumes massive network bandwidth, slows servers, crashes internet connections"],
            ["Trojan Horse", "Disguises itself as a legitimate, useful program (game, utility) but contains hidden malicious payloads", "Zeus banking trojan, fake video player codecs", "Creates stealth backdoors, steals bank keystrokes, provides remote hacker access"],
            ["Ransomware", "Encrypts user documents and locks the screen; demands ransom payments in cryptocurrency", "**WannaCry** (2017), Petya, Locky", "Paralyzes hospitals and businesses by rendering all documents unreadable"],
            ["Spyware", "Secretly tracks user computer activity, keystrokes, and browsing habits without consent", "**Pegasus**, Keyloggers", "Steals typed banking passwords, credit card numbers, and microphone/camera feeds"],
            ["Adware", "Forces intrusive advertising banners, unwanted pop-ups, and redirects search engines", "Browser hijackers", "Degrades internet browsing speed, consumes mobile data"],
            ["Botnet / DDoS", "Network of infected 'zombie' computers remotely controlled to flood target servers", "Mirai botnet", "Overwhelms website servers with bogus traffic, forcing downtime (Denial of Service)"]
          ],
          colWidths: [95, 140, 135, 141]
        },
        practicalExample: "A user downloads a free 'Video Editor.exe' from an unverified website. When clicked, the program installs a **Trojan Horse** that silently runs a background keylogger (**Spyware**) recording every banking password typed.",
        importantPoints: [
          "A Computer Virus requires a host file and human action to execute.",
          "A Computer Worm is a standalone program that self-replicates across networks without human intervention.",
          "The first computer virus on ARPANET was Creeper (1971); the first PC virus was Brain (1986).",
          "Reaper was the world's first antivirus software created to eliminate Creeper.",
          "WannaCry is a famous example of Ransomware that encrypted millions of computers in 2017."
        ],
        quickRevision: "Malware types: Virus (needs host file; 1st = Creeper 1971, PC = Brain 1986), Worm (standalone self-replicating network parasite), Trojan (fake useful app), Ransomware (encrypts files for ransom: WannaCry), Spyware (steals passwords: Keylogger)."
      },
      {
        code: "9.8",
        title: "Securing Devices, Firewalls, and the IT Act 2000",
        whatIsIt: "Endpoint security encompasses hardware and software defenses (Firewalls, Antivirus, OS Patches) that safeguard devices against cyber intrusions. The **Information Technology Act 2000 (IT Act 2000)** is the cyber law governing electronic commerce, digital signatures, and cybercrimes in India.",
        whyImportant: "Technical defenses prevent hacking attacks, while cyber laws establish strict legal penalties and imprisonment for identity theft, hacking, and cyber terrorism.",
        howItWorks: "A **Firewall** acts as a digital barrier inspecting every incoming and outgoing network data packet, blocking unauthorized traffic based on security rules.",
        tableTitle: "CRITICAL PROVISIONS OF THE INFORMATION TECHNOLOGY ACT 2000",
        table: {
          headers: ["IT Act Section", "Offense / Cyber Crime Description", "Legal Penalty & Imprisonment under Indian Law"],
          rows: [
            ["Section 43", "Unauthorized access, downloading data, or introducing virus to computer system", "Heavy monetary compensation and civil damages to the affected victim"],
            ["Section 65", "Tampering with computer source documents (altering source code)", "Imprisonment up to **3 years**, or fine up to ₹2,00,000, or both"],
            ["Section 66", "Hacking computer systems, fraudulent data destruction, or system disruption", "Imprisonment up to **3 years**, or fine up to ₹5,00,000, or both"],
            ["Section 66C", "Identity Theft (Fraudulently using another person's password, PIN, or digital signature)", "Imprisonment up to **3 years**, and fine up to ₹1,00,000"],
            ["Section 66D", "Cheating by personation using computer resources (phishing / impersonation)", "Imprisonment up to **3 years**, and fine up to ₹1,00,000"],
            ["Section 66E", "Violation of privacy (Capturing, publishing, or transmitting private body images)", "Imprisonment up to **3 years**, or fine up to ₹2,00,000, or both"],
            ["Section 66F", "**Cyber Terrorism** (Attacking national critical infrastructure, defense, or cyber sovereignty)", "**Imprisonment for LIFE** (Rigorous life imprisonment)"],
            ["Section 67", "Publishing or transmitting obscene material in electronic form", "First conviction: Imprisonment up to 3 years; Second conviction: up to 5 years"],
            ["Section 70B", "Establishment of **CERT-In** (Indian Computer Emergency Response Team)", "National nodal agency for monitoring and responding to cyber security incidents in India"]
          ],
          colWidths: [85, 208, 218]
        },
        componentsTitle: "DEVICE DEFENSE PROTOCOLS",
        componentsOrTypes: [
          "Firewall: Hardware or software packet traffic filter that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
          "Regular OS & Software Updates: Manufacturers release periodic 'patches' that fix security vulnerabilities exploited by hackers.",
          "Strong Password Hygiene: Use complex passwords (minimum 8-12 characters combining uppercase, lowercase, numbers, and symbols) and never reuse passwords across accounts.",
          "Two-Factor Authentication (2FA): Requires both a password and an SMS/App OTP to sign in, protecting accounts even if passwords are leaked."
        ],
        practicalExample: "A cybercriminal creates a fake banking website and tricks a victim into revealing their net banking password. Under the Indian IT Act 2000, the criminal is prosecuted under **Section 66D** (Cheating by personation) and **Section 66C** (Identity theft), facing up to 3 years imprisonment and fines.",
        importantPoints: [
          "The Information Technology Act was enacted on 9 June 2000 and came into effect on **17 October 2000** (amended in 2008).",
          "A Firewall monitors and filters incoming and outgoing network traffic.",
          "Section 66 of the IT Act penalizes computer hacking with up to 3 years imprisonment.",
          "Section 66F of the IT Act penalizes **Cyber Terrorism with LIFE IMPRISONMENT**.",
          "CERT-In stands for Indian Computer Emergency Response Team (under Section 70B of IT Act)."
        ],
        quickRevision: "Firewall filters network traffic packets. IT Act 2000 effective 17 Oct 2000: Sec 65 (source code tampering), Sec 66 (hacking 3 yrs), Sec 66C (identity theft), Sec 66F (Cyber Terrorism = Life Imprisonment). CERT-In responds to cyber threats."
      }
    ],
    unitRevision: [
      "Internet of Things (IoT, Kevin Ashton 1999) connects physical objects. Sensors capture data (Input); Actuators perform physical actions (Output). Uses MQTT protocol.",
      "Big Data is defined by the 5 Vs: Volume (size), Velocity (speed), Variety (formats), Veracity (accuracy), and Value (actionable insights).",
      "Cloud Computing Models: SaaS (ready software: Google Drive, Gmail), PaaS (dev platform: App Engine), IaaS (raw virtual servers: AWS EC2). Deployments: Public, Private, Hybrid.",
      "Artificial Intelligence (Father = John McCarthy 1956 Dartmouth) includes Machine Learning, Deep Learning (Neural Networks), and NLP.",
      "Immersive Tech: Virtual Reality (VR 100% immersive headset), Augmented Reality (AR digital overlay, e.g. Pokémon GO), 3D Printing (Additive Manufacturing, .stl format, Chuck Hull 1986), and RPA (software bots).",
      "The CIA Triad governs cyber security: Confidentiality (encryption/2FA), Integrity (cryptographic hashing/signatures), and Availability (redundant systems/backups).",
      "Malware Taxonomy: Virus (attaches to host file; 1st = Creeper 1971, 1st PC = Brain 1986), Worm (standalone self-replicating network parasite), Trojan (fake useful software), Ransomware (encrypts files for ransom: WannaCry), Spyware (stealth surveillance: Keylogger).",
      "A Firewall acts as a barrier inspecting and filtering incoming and outgoing network traffic packets.",
      "The Information Technology (IT) Act 2000 came into effect on 17 October 2000. Key provisions: Sec 65 (source code), Sec 66 (hacking 3 yrs), Sec 66C (identity theft), Sec 66F (Cyber Terrorism = LIFE IMPRISONMENT). CERT-In is India's cyber response agency."
    ],
    keyTerms: [
      { term: "IoT", fullForm: "Internet of Things", desc: "Network of physical devices embedded with sensors and actuators." },
      { term: "MQTT", fullForm: "Message Queuing Telemetry Transport", desc: "Lightweight messaging protocol commonly used in IoT devices." },
      { term: "SaaS", fullForm: "Software as a Service", desc: "Cloud computing model delivering finished applications over the web." },
      { term: "PaaS", fullForm: "Platform as a Service", desc: "Cloud computing model providing developer application runtime environments." },
      { term: "IaaS", fullForm: "Infrastructure as a Service", desc: "Cloud computing model providing raw virtual servers and storage." },
      { term: "NLP", fullForm: "Natural Language Processing", desc: "AI subfield enabling computers to comprehend and generate human language." },
      { term: "RPA", fullForm: "Robotic Process Automation", desc: "Software robots configured to automate repetitive clerical digital tasks." },
      { term: "DDoS", fullForm: "Distributed Denial of Service", desc: "Cyber attack flooding a target server with bogus traffic to cause downtime." },
      { term: "CERT-In", fullForm: "Indian Computer Emergency Response Team", desc: "National nodal agency for cyber incident response in India." }
    ]
  };
}
