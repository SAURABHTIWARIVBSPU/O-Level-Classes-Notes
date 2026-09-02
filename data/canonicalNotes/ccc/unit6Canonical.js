// Unit 6: Introduction to Internet and WWW - Tutorial & Textbook Grade Content
export function getUnit6Canonical() {
  return {
    unitNumber: 6,
    title: "Introduction to Internet and WWW",
    officialSection: "6.0 - 6.7",
    totalHours: 7,
    theoryHours: 3,
    practicalHours: 4,
    introduction: "The Internet is the global interconnected network of computer networks, while the World Wide Web (WWW) is the vast information space of hyperlinked multimedia documents accessed across the Internet. This unit covers foundational networking concepts: network scales (PAN, LAN, MAN, WAN), network topologies (Star, Bus, Ring, Mesh, Tree), Internet history (ARPANET, Vint Cerf, VSNL in India), URL structure, IP addressing (IPv4 vs IPv6), MAC physical addresses, IMEI numbers, standard protocols and port numbers, broadband access modes, web browsers, and search engines.",
    whatYouWillLearn: [
      "Network classifications by geographical scale: PAN (<10m, Bluetooth), LAN (Office/Lab), MAN (City), and WAN (Global Internet).",
      "Network topologies: Star (central hub/switch), Bus (single backbone cable), Ring (token loop), Mesh (point-to-point redundant links), and Tree.",
      "The historical genesis of the Internet: ARPANET (1969), Vinton Cerf & Bob Kahn, and VSNL public launch in India (15 August 1995).",
      "The World Wide Web (Tim Berners-Lee, 1989 at CERN), the difference between Internet and WWW, and URL anatomy (Protocol, Domain, Port, Path, Query).",
      "Device identification: IPv4 (32-bit dotted-decimal) versus IPv6 (128-bit hexadecimal colons), 48-bit MAC physical address, and 15-digit IMEI (*#06#).",
      "Core Internet protocols and standard port numbers: TCP/IP, HTTP (80), HTTPS (443), FTP (21), DNS (53), SMTP (25), POP3 (110), IMAP (143).",
      "Internet connection modes: FTTH optical fiber, Wi-Fi 802.11, mobile Wi-Fi Hotspots, and USB/Bluetooth tethering.",
      "Web Browsers (Mosaic 1993, Chrome, Firefox, Lynx text-only) and Search Engines (Google, DuckDuckGo, Web Crawlers, Indexing, SERP)."
    ],
    topics: [
      {
        code: "6.1",
        title: "Basics of Computer Networks",
        whatIsIt: "A computer network is an interconnected group of autonomous digital devices (computers, servers, printers) linked via physical cables or wireless signals to share data, files, software, and hardware resources.",
        whyImportant: "Stand-alone computers cannot communicate or share peripherals. Networking enables instantaneous global file transfers, centralized database access, hardware cost reduction, and internet access.",
        howItWorks: "Network Interface Cards (NICs) convert computer data into physical signals (electrical voltages, light pulses, radio waves). The signals travel across media to receiving devices that reconstruct the data packets.",
        tableTitle: "CLASSIFICATION OF NETWORKS BY GEOGRAPHICAL SPAN",
        table: {
          headers: ["Network Type", "Geographical Coverage Range", "Common Physical Technologies", "Real-World Deployment Example"],
          rows: [
            ["PAN (Personal Area Network)", "Under 10 meters (Personal workspace)", "Bluetooth (IEEE 802.15), USB, Zigbee", "Connecting wireless earbuds, smartwatches, or wireless mice to a phone"],
            ["LAN (Local Area Network)", "Up to 1 kilometer (Single room, building, lab)", "Ethernet twisted-pair cables (RJ-45), Wi-Fi (802.11)", "A university computer lab, hospital building, or corporate office network"],
            ["MAN (Metropolitan Area Network)", "10 to 50 kilometers (Entire town or city)", "Fiber-optic backbone, high-speed microwave links", "City-wide cable television networks or municipal police camera networks"],
            ["WAN (Wide Area Network)", "Country, continent, or entire globe", "Submarine optical cables, communication satellites", "The global Internet, national banking networks (RBI CBS, ATM grid)"]
          ],
          colWidths: [120, 140, 120, 131]
        },
        componentsTitle: "PRIMARY BENEFITS OF COMPUTER NETWORKING",
        componentsOrTypes: [
          "Hardware Resource Sharing: Multiple office computers share a single high-speed laser printer, scanner, or central storage server.",
          "Centralized Data Management: Company databases reside on secure central servers rather than scattered across individual desktops.",
          "Rapid Communication: Instant transmission of emails, messages, video conferences, and file synchronization.",
          "Cost Efficiency: Eliminates purchasing redundant individual software licenses and peripheral devices."
        ],
        practicalExample: "In an educational computer lab with 40 PCs: Instead of buying 40 separate printers, all 40 PCs are connected to a single Local Area Network (LAN). Any student can send their assignment to the single shared network printer in the room.",
        importantPoints: [
          "PAN covers personal workspace distances under 10 meters (Bluetooth).",
          "LAN covers a single room, school lab, or building.",
          "MAN covers a city or metropolitan area.",
          "WAN covers entire countries or continents; the Internet is the largest WAN in existence."
        ],
        quickRevision: "Networks connect devices to share resources: PAN (<10m, Bluetooth), LAN (building/lab), MAN (city), WAN (global internet). The Internet is the largest WAN."
      },
      {
        code: "6.2",
        title: "Network Topologies: Star, Bus, Ring, Mesh, Tree",
        whatIsIt: "Network topology refers to the geometric physical or logical arrangement of nodes, workstations, and connecting cables in a computer network.",
        whyImportant: "Topology choice directly impacts network installation costs, data transfer reliability, ease of troubleshooting, and fault tolerance against cable breaks.",
        howItWorks: "Different topologies route data according to different geometric patterns: centralized hubs, shared continuous cables, closed circular loops, or redundant point-to-point meshes.",
        tableTitle: "COMPARISON OF THE 5 MAJOR NETWORK TOPOLOGIES",
        table: {
          headers: ["Topology Name", "Physical Architecture / Layout", "Key Advantages", "Critical Disadvantages / Vulnerabilities"],
          rows: [
            ["Star Topology", "Every node connects individually to a central Hub or Switch", "Easy to add nodes; failure of one cable does not affect others", "If the central Hub/Switch fails, the entire network collapses"],
            ["Bus Topology", "All nodes connect to a single shared backbone cable with terminators", "Inexpensive, minimal cabling required; easy to set up for small labs", "Backbone cable break halts entire network; heavy data collisions"],
            ["Ring Topology", "Nodes connected in a closed circle; data passes as a token in 1 direction", "No packet collisions; predictable equal access time for all nodes", "Break in the physical ring cable breaks the entire network token loop"],
            ["Mesh Topology", "Every single node connects directly to every other node (Point-to-point)", "Maximum fault tolerance; failure of one link does not stop traffic", "Extremely expensive; complex cabling requiring n(n-1)/2 physical links"],
            ["Tree Topology", "Hierarchical tree structure combining multiple star networks along a bus", "Highly scalable; easily segments large corporate departments", "Heavily dependent on the main root trunk cable backbone"]
          ],
          colWidths: [95, 140, 135, 141]
        },
        componentsTitle: "TOPOLOGY CALCULATIONS & CONCEPTS",
        componentsOrTypes: [
          "Star Topology Dominance: Modern Ethernet LANs exclusively use Star topology powered by intelligent central network switches.",
          "Bus Terminators: Bus networks require electrical terminators at both ends of the main backbone cable to prevent signal reflection bounces.",
          "Mesh Formula: In a full mesh network with `n` computers, the total number of physical cables required is calculated as: `n(n - 1) / 2` (e.g. 6 computers require 15 cables)."
        ],
        practicalExample: "In a modern school computer lab: Every desktop is plugged with an Ethernet cable into a central 24-port network switch on the wall (Star Topology). If a student accidentally unplugs computer 5, the remaining 39 computers continue browsing the internet with zero interruption.",
        importantPoints: [
          "Star topology is the most widely used topology in modern LANs.",
          "In Star topology, all computers connect to a central Hub or Switch.",
          "In Bus topology, all computers share a single central backbone cable.",
          "Total physical links in a fully connected Mesh topology with `n` nodes: `n(n - 1) / 2`.",
          "Ring topology uses unidirectional token passing."
        ],
        quickRevision: "Topologies: Star (central hub/switch, most popular), Bus (single cable with terminators), Ring (circular token loop), Mesh (point-to-point, max redundancy), Tree (hierarchical)."
      },
      {
        code: "6.3",
        title: "Internet Architecture, History, and Applications",
        whatIsIt: "The Internet is a global system of interconnected computer networks that communicate using the standard TCP/IP (Transmission Control Protocol / Internet Protocol) suite.",
        whyImportant: "The Internet is the foundational communications backbone supporting international commerce, financial transactions, news broadcasting, governance, and research.",
        howItWorks: "Computers connect to local Internet Service Providers (ISPs), which connect to regional Tier-2 networks, which route traffic across ultra-high-speed transcontinental Tier-1 submarine optical fiber cables spanning the oceans.",
        componentsTitle: "HISTORICAL MILESTONES OF THE INTERNET",
        componentsOrTypes: [
          "ARPANET (1969): Advanced Research Projects Agency Network, funded by the US Department of Defense; the world's first operational packet-switching network connecting four universities.",
          "Fathers of the Internet: Vinton Gray Cerf and Robert Elliot Kahn (designed the TCP/IP protocol suite in the 1970s).",
          "Public Launch in India (15 August 1995): Videsh Sanchar Nigam Limited (VSNL) officially launched public commercial Internet access in India under Chairman Brijendra K. Syngal.",
          "Internet Service Provider (ISP): Commercial entities (BSNL, Jio, Airtel) providing internet connectivity to homes, colleges, and enterprises."
        ],
        tableTitle: "MAJOR PRACTICAL APPLICATIONS OF THE INTERNET",
        table: {
          headers: ["Application Domain", "Core Online Services", "Everyday Citizen Impact"],
          rows: [
            ["Communication", "Email, Instant Messaging, Video Calling (VoIP)", "Instant global communication at virtually zero cost"],
            ["Digital Banking & Finance", "UPI, NEFT, RTGS, IMPS, Net Banking", "24x7 cashless fund transfers and automated bill payments"],
            ["E-Commerce", "Online Shopping, Ticket Booking (IRCTC), Food Delivery", "Buying goods and reserving train tickets directly from home"],
            ["E-Governance", "DigiLocker, Passport Seva, Income Tax e-filing, UMANG", "Direct, transparent citizen government services without office queues"]
          ],
          colWidths: [110, 160, 241]
        },
        practicalExample: "When you book a railway ticket on IRCTC: Your phone connects via your ISP (Jio/Airtel) to IRCTC servers in New Delhi, verifies seat availability via central railway databases, routes payment through your bank gateway, and issues an SMS/QR ticket in seconds.",
        importantPoints: [
          "The precursor to the modern Internet was ARPANET, established in 1969.",
          "Vinton Cerf and Bob Kahn are recognized as the Fathers of the Internet.",
          "Public Internet was officially launched in India on 15 August 1995 by VSNL.",
          "The fundamental communication protocol suite of the Internet is TCP/IP."
        ],
        quickRevision: "The Internet originated from ARPANET (1969). Vint Cerf and Bob Kahn are Fathers of the Internet. VSNL launched public internet in India on 15 August 1995. Built on TCP/IP."
      },
      {
        code: "6.4",
        title: "World Wide Web (WWW) and URL Anatomy",
        whatIsIt: "The World Wide Web (WWW or Web) is a global collection of interlinked multimedia hypertext documents (web pages) accessed via the Internet using web browsers.",
        whyImportant: "The Web is often confused with the Internet. Understanding their distinction and mastering URL anatomy is critical for web literacy and internet security.",
        howItWorks: "The Internet is the physical networking infrastructure (cables, routers, computers), while the WWW is an application service that runs ON TOP OF the Internet using Hypertext Transfer Protocol (HTTP).",
        componentsTitle: "CRITICAL DISTINCTION: INTERNET VS. WORLD WIDE WEB",
        componentsOrTypes: [
          "Internet = Physical Highway: The physical infrastructure of wires, routers, fiber optics, satellites, and computers.",
          "World Wide Web = Traffic on Highway: The service of hyperlinked web pages, text, and images created by Sir Tim Berners-Lee in 1989 at CERN (Switzerland).",
          "W3C (World Wide Web Consortium): The international standards organization founded by Tim Berners-Lee that develops open web standards (HTML, CSS)."
        ],
        tableTitle: "ANATOMY OF A UNIFORM RESOURCE LOCATOR (URL)",
        table: {
          headers: ["URL Component", "Example in URL: https://www.nielit.gov.in:443/student/index.html", "Function & Technical Meaning"],
          rows: [
            ["Protocol / Scheme", "https://", "Hypertext Transfer Protocol Secure; encrypts transmission using SSL/TLS"],
            ["Subdomain", "www", "World Wide Web host designation or specific service name"],
            ["Domain Name", "nielit.gov.in", "Unique human-readable registered address of the web server"],
            ["Port Number", ":443 (Default for HTTPS; 80 for HTTP)", "Designates the specific network service communication port"],
            ["Directory Path", "/student/", "Sub-folder directory path on the server where the web page is stored"],
            ["Resource File", "index.html", "Specific target web document file rendered by the browser"]
          ],
          colWidths: [110, 180, 221]
        },
        practicalExample: "Top-Level Domains (TLDs) indicate the category or geographical origin of a website:\n- `.com`: Commercial business entities (e.g. google.com)\n- `.gov` / `.gov.in`: Official government entities (e.g. nielit.gov.in)\n- `.edu` / `.ac.in`: Accredited educational colleges and universities\n- `.org`: Non-profit organizations\n- `.in`: Country-code top-level domain (ccTLD) for India.",
        importantPoints: [
          "Sir Tim Berners-Lee invented the World Wide Web in 1989 at CERN.",
          "The Internet and the World Wide Web are NOT the same thing; WWW runs on top of the Internet.",
          "URL stands for Uniform Resource Locator.",
          "HTTPS uses port 443; HTTP uses port 80.",
          "`.in` is the country code top-level domain for India; `.gov` represents government websites."
        ],
        quickRevision: "WWW was invented by Tim Berners-Lee (1989 at CERN). Internet is the physical network; WWW is the web pages on it. URL = Protocol + Domain + Port + Path + File."
      },
      {
        code: "6.5",
        title: "IP Addressing, MAC Address, and IMEI",
        whatIsIt: "Digital devices rely on three distinct numbering standards for identification: IP Addresses (logical network routing), MAC Addresses (physical hardware identification), and IMEI Numbers (mobile cellular hardware identification).",
        whyImportant: "Network routers cannot deliver web pages or emails without precise numeric addresses, and cellular networks cannot authenticate phones without hardware IDs.",
        howItWorks: "An IP address identifies a device's current logical position on a network. A MAC address is permanently burned into the device's NIC silicon. An IMEI identifies a phone to cellular telecom towers.",
        tableTitle: "COMPARISON: IPv4 VS. IPv6 VS. MAC ADDRESS",
        table: {
          headers: ["Attribute", "IPv4 (IP Version 4)", "IPv6 (IP Version 6)", "MAC Address (Media Access Control)"],
          rows: [
            ["Address Length", "32 Bits (4 Bytes)", "128 Bits (16 Bytes)", "48 Bits (6 Bytes)"],
            ["Format & Notation", "Dotted Decimal notation (e.g. 192.168.1.1)", "Hexadecimal separated by Colons (e.g. 2001:db8::1)", "Hexadecimal separated by colons or hyphens (00:1A:2B:3C:4D:5E)"],
            ["Number of Parts", "4 Octets (each 0 to 255)", "8 Hexadecimal groups (each 16 bits)", "6 Hexadecimal byte octets (First 3 = Vendor ID, Last 3 = Device ID)"],
            ["Nature & Persistence", "Logical address; changes when connecting to different networks", "Logical address; massive address space (2^128 addresses)", "Physical hardware address; permanently hardcoded into the network card"],
            ["Total Address Space", "~4.3 Billion (2^32 addresses; exhausted)", "~340 Undecillion (Virtually unlimited)", "2^48 unique physical network interface cards"]
          ],
          colWidths: [85, 140, 140, 146]
        },
        componentsTitle: "IMEI (INTERNATIONAL MOBILE EQUIPMENT IDENTITY)",
        componentsOrTypes: [
          "Structure: Exactly 15 decimal digits unique to every physical SIM slot on mobile phones.",
          "Check Code: Dialing `*#06#` on any mobile phone keypad immediately displays its IMEI numbers on screen.",
          "Purpose: Telecom operators use IMEI numbers to blacklist and block stolen phones from accessing cellular networks."
        ],
        practicalExample: "When you buy a smartphone: It has a permanent 15-digit IMEI printed on the box. When it connects to home Wi-Fi, its Wi-Fi chip uses its 48-bit MAC address. The Wi-Fi router assigns it a temporary 32-bit IPv4 address (like `192.168.1.15`) to browse the internet.",
        importantPoints: [
          "IPv4 addresses are 32 bits (4 bytes) long and written in dotted-decimal format.",
          "IPv6 addresses are 128 bits (16 bytes) long and written in hexadecimal colon format.",
          "MAC address is 48 bits (6 bytes) long and represents the physical hardware address of the NIC.",
          "IMEI stands for International Mobile Equipment Identity and contains exactly 15 digits.",
          "The universal USSD code to check a phone's IMEI number is `*#06#`."
        ],
        quickRevision: "IPv4 = 32-bit (dots), IPv6 = 128-bit (colons), MAC = 48-bit physical hardware address. IMEI = 15-digit mobile identity checked via *#06#."
      },
      {
        code: "6.6",
        title: "Network Protocols and Standard Port Numbers",
        whatIsIt: "A network protocol is a formal, standardized set of rules and conventions governing how computers format, transmit, verify, and receive data across networks.",
        whyImportant: "Computers built by different manufacturers using different operating systems could never communicate without standardized protocols and port numbers.",
        howItWorks: "Protocols operate at different layers: TCP breaks messages into numbered packets and guarantees delivery; IP addresses packets; and application protocols (HTTP, FTP, SMTP) deliver specific services through dedicated communication port numbers.",
        tableTitle: "CORE INTERNET PROTOCOLS & DEFAULT PORT NUMBERS",
        table: {
          headers: ["Protocol Acronym", "Full Protocol Name", "Default Port Number", "Primary Functional Purpose in Networking"],
          rows: [
            ["HTTP", "Hypertext Transfer Protocol", "Port 80", "Transmits unencrypted web pages across the World Wide Web"],
            ["HTTPS", "Hypertext Transfer Protocol Secure", "Port 443", "Transmits encrypted, secure web pages using SSL/TLS encryption"],
            ["FTP", "File Transfer Protocol", "Port 20 / 21", "Transfers, uploads, and downloads files between client and server"],
            ["DNS", "Domain Name System", "Port 53", "Translates human-readable domain names (nielit.gov.in) into IP addresses"],
            ["SMTP", "Simple Mail Transfer Protocol", "Port 25", "Sends and relays outgoing emails from email clients to mail servers"],
            ["POP3", "Post Office Protocol version 3", "Port 110", "Downloads incoming emails from mail server to local device"],
            ["IMAP", "Internet Message Access Protocol", "Port 143", "Synchronizes incoming emails across multiple devices in real time"],
            ["SSH", "Secure Shell", "Port 22", "Secure encrypted remote command-line login and server administration"],
            ["DHCP", "Dynamic Host Configuration Protocol", "Port 67 / 68", "Automatically assigns IP addresses to devices connecting to a network"]
          ],
          colWidths: [80, 140, 95, 196]
        },
        practicalExample: "When you type `https://nielit.gov.in` into your browser: The browser contacts a DNS server (Port 53) to find the server's numeric IP address. It then establishes a secure encrypted HTTPS connection (Port 443) using SSL/TLS certificates to load the official page safely.",
        importantPoints: [
          "HTTP uses Port 80; HTTPS uses Port 443.",
          "DNS (Port 53) translates domain names into numerical IP addresses.",
          "SMTP (Port 25) is used for SENDING outgoing emails.",
          "POP3 (Port 110) and IMAP (Port 143) are used for RECEIVING incoming emails.",
          "FTP uses Port 20 and 21 for file transfers."
        ],
        quickRevision: "Protocols govern communication. Key ports: HTTP = 80, HTTPS = 443, FTP = 21, DNS = 53, SMTP = 25 (send mail), POP3 = 110 (receive mail), IMAP = 143 (sync mail)."
      },
      {
        code: "6.7",
        title: "Internet Access Modes: FTTH, Wi-Fi, Hotspot, Tethering",
        whatIsIt: "Internet access modes are the physical and wireless transmission channels through which end-user devices connect to an Internet Service Provider (ISP).",
        whyImportant: "Choosing the correct access mode balances bandwidth speed, installation cost, mobility, and signal reliability.",
        howItWorks: "Access modes range from fixed physical guided media (optical fiber carrying light pulses) to unguided wireless radio frequency bands (Wi-Fi and cellular modems).",
        tableTitle: "OVERVIEW OF INTERNET ACCESS MODES",
        table: {
          headers: ["Access Mode", "Transmission Medium", "Speed & Coverage", "Typical Practical Use Case"],
          rows: [
            ["FTTH (Fiber to the Home)", "Glass / Silica Optical Fiber cables", "Ultra-fast (100 Mbps to 1 Gbps+); unlimited data", "Broadband internet for homes, offices, schools, and computer labs"],
            ["Wi-Fi (Wireless Fidelity)", "Radio Waves (2.4 GHz & 5 GHz bands, IEEE 802.11)", "High speed (50 to 500+ Mbps); range ~30-50 meters", "Wireless local networking for laptops, phones, and smart TVs"],
            ["Mobile Wi-Fi Hotspot", "4G/5G Cellular data converted to Wi-Fi", "Moderate to High speed; range ~10 meters around phone", "Sharing a smartphone's internet connection with a nearby laptop"],
            ["USB Tethering", "Physical USB cable connecting phone to PC", "High speed; charges phone simultaneously; zero Wi-Fi radiation", "Connecting a desktop PC that lacks a Wi-Fi card to mobile internet"],
            ["Bluetooth Tethering", "Low-power 2.4 GHz Bluetooth radio signals", "Lower speed (<2 Mbps); low battery drain; range ~10 meters", "Sharing low-bandwidth mobile internet between handheld devices"]
          ],
          colWidths: [110, 140, 120, 141]
        },
        practicalExample: "If a desktop PC in an exam room loses broadband internet because a fiber cable was cut outside: The proctor connects their smartphone to the PC using a USB charging cable and enables 'USB Tethering' in phone settings. The desktop instantly resumes internet access through the phone's mobile data.",
        importantPoints: [
          "FTTH stands for Fiber to the Home.",
          "Wi-Fi operates on 2.4 GHz and 5 GHz radio frequency bands (IEEE 802.11 standards).",
          "USB Tethering allows sharing a smartphone's mobile data via a physical USB cable.",
          "Mobile Hotspot allows sharing mobile data wirelessly with multiple devices over Wi-Fi."
        ],
        quickRevision: "Access modes: FTTH (fastest fiber), Wi-Fi (wireless local network), Mobile Hotspot (wireless phone sharing), USB Tethering (wired phone sharing), Bluetooth Tethering (low-power sharing)."
      },
      {
        code: "6.8",
        title: "Web Browsers and Search Engines",
        whatIsIt: "A **Web Browser** is an application software program used to locate, retrieve, and render web pages from the WWW. A **Search Engine** is a specialized web service that indexes billions of web pages and helps users discover relevant information by searching keywords.",
        whyImportant: "Without a web browser, users cannot view HTML/CSS web documents. Without a search engine, navigating the billions of websites on the internet would be impossible.",
        howItWorks: "A user types a search query into a search engine (like Google). The search engine queries its massive database of indexed pages (gathered by automated **Web Crawlers / Spiders**) and displays a Search Engine Results Page (SERP). The user clicks a link, and their web browser connects to the target server to render the page.",
        tableTitle: "WEB BROWSERS VS. SEARCH ENGINES COMPARISON",
        table: {
          headers: ["Parameter", "Web Browser (Application Software)", "Search Engine (Online Web Service)"],
          rows: [
            ["Core Nature", "Software program installed locally on your computer or phone", "Web-based online software database hosted on remote server clusters"],
            ["Primary Purpose", "Renders HTML code, executes JavaScript, and displays web pages", "Discovers, catalogs, indexes, and ranks web page addresses by topic keywords"],
            ["Installation Required", "Yes: Must be installed (or pre-installed with the OS)", "No: Accessed by visiting its website address inside any browser"],
            ["Prominent Examples", "Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera, Lynx", "Google, Microsoft Bing, Yahoo Search, DuckDuckGo (privacy-focused)"]
          ],
          colWidths: [110, 200, 201]
        },
        componentsTitle: "ESSENTIAL BROWSER SHORTCUTS & HISTORY",
        componentsOrTypes: [
          "Mosaic (1993): The world's first widely popular graphical web browser (developed by Marc Andreessen at NCSA).",
          "Lynx: A popular text-only web browser that runs inside terminal command-line consoles without rendering images.",
          "Add Bookmark: Press `Ctrl + D` to save the active web page to your favorites bar.",
          "View Browsing History: Press `Ctrl + H` to view previously visited websites.",
          "View Downloads: Press `Ctrl + J` to inspect downloaded files.",
          "New Incognito / Private Window: Press `Ctrl + Shift + N` in Chrome/Edge (or `Ctrl + Shift + P` in Firefox) to browse without saving history or cookies.",
          "Save Current Web Page: Press `Ctrl + S` to save an offline copy of the active web page."
        ],
        practicalExample: "Google Chrome is the Web Browser software installed on your laptop. When you open Chrome and type 'NIELIT CCC exam syllabus', Google is the Search Engine that processes your words, scans its index, and displays links to official NIELIT web pages.",
        importantPoints: [
          "Google Chrome is a Web Browser; Google is a Search Engine.",
          "Mosaic was the first widely used graphical web browser (1993).",
          "Lynx is a famous text-only web browser.",
          "Shortcut to Bookmark a web page: `Ctrl + D`.",
          "Shortcut to view Browsing History: `Ctrl + H` | Downloads: `Ctrl + J`.",
          "Search engines use automated software programs called 'Web Crawlers' or 'Spiders' to index web pages."
        ],
        quickRevision: "Browser = software to view web pages (Chrome, Firefox, Lynx text-only). Search Engine = online service to search the web (Google, DuckDuckGo). Bookmarks = Ctrl+D, History = Ctrl+H."
      }
    ],
    unitRevision: [
      "Networks connect autonomous devices to share data and peripherals: PAN (<10m, Bluetooth), LAN (building/lab), MAN (city), WAN (global Internet).",
      "Network Topologies: Star (central switch, most reliable/popular), Bus (single cable with terminators), Ring (token loop), Mesh (point-to-point, n(n-1)/2 links), Tree (hierarchical).",
      "The Internet originated from ARPANET (1969). Vinton Cerf and Bob Kahn are the Fathers of the Internet. VSNL launched public internet in India on 15 August 1995.",
      "The World Wide Web (WWW) was invented by Sir Tim Berners-Lee in 1989 at CERN. Internet is the physical network; WWW is the multimedia service running on it.",
      "URL (Uniform Resource Locator) structure: Protocol (https) + Domain (nielit.gov.in) + Port (443) + Path + File.",
      "Device Identification: IPv4 is 32-bit (dotted-decimal, 4 bytes); IPv6 is 128-bit (hexadecimal colons, 16 bytes); MAC is 48-bit physical NIC address; IMEI is 15-digit mobile ID (*#06#).",
      "Core Protocols: HTTP (Port 80), HTTPS (Port 443), FTP (Port 20/21), DNS (Port 53), SMTP (Port 25 - send mail), POP3 (Port 110 - receive mail), IMAP (Port 143 - sync mail).",
      "Internet Access: FTTH (optical fiber broadband), Wi-Fi (802.11 2.4/5GHz), Mobile Hotspot, USB Tethering, Bluetooth Tethering.",
      "Web Browsers (Chrome, Firefox, Lynx text browser) render web pages. Search engines (Google, DuckDuckGo) index pages using Web Crawlers / Spiders.",
      "Browser Shortcuts: Bookmark = `Ctrl + D`, History = `Ctrl + H`, Downloads = `Ctrl + J`, Incognito = `Ctrl + Shift + N`."
    ],
    keyTerms: [
      { term: "WAN", fullForm: "Wide Area Network", desc: "Telecommunications network spanning vast geographic areas (the Internet)." },
      { term: "URL", fullForm: "Uniform Resource Locator", desc: "Standardized web address pointing to a unique resource on the WWW." },
      { term: "HTTP", fullForm: "Hypertext Transfer Protocol", desc: "Communication protocol for transferring web pages over Port 80." },
      { term: "HTTPS", fullForm: "Hypertext Transfer Protocol Secure", desc: "Encrypted web protocol using SSL/TLS certificates over Port 443." },
      { term: "FTP", fullForm: "File Transfer Protocol", desc: "Network protocol for transferring digital files over Port 21." },
      { term: "DNS", fullForm: "Domain Name System", desc: "Internet directory service translating domain names into IP addresses." },
      { term: "SMTP", fullForm: "Simple Mail Transfer Protocol", desc: "Protocol for sending outgoing email messages over Port 25." },
      { term: "POP3", fullForm: "Post Office Protocol version 3", desc: "Protocol for retrieving incoming email messages over Port 110." },
      { term: "IMAP", fullForm: "Internet Message Access Protocol", desc: "Modern protocol synchronizing email messages across multiple devices over Port 143." },
      { term: "MAC", fullForm: "Media Access Control", desc: "Permanent 48-bit physical hardware address burned into network cards." },
      { term: "IMEI", fullForm: "International Mobile Equipment Identity", desc: "15-digit unique serial number identifying physical cellular handsets." },
      { term: "FTTH", fullForm: "Fiber To The Home", desc: "High-speed broadband delivered via optical fiber cables directly to residences." }
    ]
  };
}
