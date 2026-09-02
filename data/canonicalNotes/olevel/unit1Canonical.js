// Unit 1: Introduction to Web Design - Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
export function getUnit1Canonical() {
  return {
    unitNumber: 1,
    title: "Introduction to Web Design",
    officialSection: "16.6 (i)",
    totalHours: 5,
    theoryHours: 2,
    practicalHours: 3,
    introduction: "Web design is the discipline of planning, conceptualizing, and creating visual digital interfaces and interactive hypermedia documents distributed across the global Internet. This foundational unit covers core internetworking architectures: the fundamental distinction between the Internet and the World Wide Web (WWW), website and webpage hierarchies, the client-server request-response lifecycle, front-end presentation layers versus back-end server architectures, client-side versus server-side scripting paradigms, responsive design principles across mobile and desktop viewports, and structural differences between static and dynamic websites.",
    whatYouWillLearn: [
      "The architectural difference between the physical Internet and the application-layer World Wide Web (WWW).",
      "Anatomy of websites and webpages: Home page conventions, URL pathing, asset directories, and hypertext documents.",
      "The client-server communication mechanism: DNS resolution, TCP 3-way handshake, and HTTP/HTTPS request-response cycles.",
      "Front-End engineering (HTML, CSS, JavaScript) versus Back-End server logic and database systems.",
      "Execution models: Client-Side scripting (browser engine execution) versus Server-Side scripting (server pre-processing).",
      "Responsive Web Design (RWD) fundamentals: Flexible layouts, fluid grid mathematics, and CSS media queries.",
      "Static websites versus Dynamic database-driven web applications."
    ],
    topics: [
      {
        code: "1.1",
        title: "Introduction of Internet",
        whatIsIt: "The Internet is a global network of interconnected computer networks that communicate using the standardized TCP/IP (Transmission Control Protocol / Internet Protocol) communications suite.",
        whyImportant: "The Internet is the foundational physical communications backbone that enables global data exchange, digital commerce, cloud hosting, and real-time electronic communication.",
        howItWorks: "Millions of local, regional, national, and international networks are physically linked through terrestrial fiber-optic backbones, submarine undersea cables, microwave links, and communications satellites. Autonomous digital devices identify each other using unique IP addresses.",
        componentsTitle: "INTERNET INFRASTRUCTURE & ARCHITECTURAL TIERS",
        componentsOrTypes: [
          "Physical Layer: Undersea fiber-optic cables, terrestrial trunk lines, routing hardware, and network switches.",
          "Protocol Layer: The TCP/IP model governing packet routing (IP) and reliable delivery (TCP).",
          "Tier-1 ISPs: Global telecommunication backbones (e.g., Tata Communications, AT&T, Lumen) carrying international traffic across continents.",
          "Tier-2 & Tier-3 ISPs: National and local service providers (e.g., BSNL, Jio, Airtel) delivering last-mile broadband connectivity to end-user homes and institutions."
        ],
        practicalExample: "When a developer in New Delhi tests a website hosted on a server in London: Their laptop sends data packets through their local ISP (Tier-3), into the national fiber backbone (Tier-2), across transoceanic undersea fiber cables (Tier-1), reaching the London data center in under 120 milliseconds.",
        importantPoints: [
          "The Internet originated from ARPANET (Advanced Research Projects Agency Network) in 1969.",
          "The Internet is a global network of networks running on the TCP/IP protocol suite.",
          "Every connected device is assigned a unique IP address (IPv4 32-bit or IPv6 128-bit) for network routing."
        ],
        quickRevision: "The Internet is the global physical infrastructure of interconnected networks communicating via TCP/IP. It acts as the digital highway over which all web services travel."
      },
      {
        code: "1.2",
        title: "WWW (World Wide Web)",
        whatIsIt: "The World Wide Web (WWW or the Web) is a global distributed information system of interlinked hypertext and multimedia documents accessed over the Internet via the Hypertext Transfer Protocol (HTTP).",
        whyImportant: "The Web made the complex technical Internet accessible to the general public by introducing point-and-click graphical browsing and clickable hyperlinks between documents.",
        howItWorks: "Invented by Sir Tim Berners-Lee in 1989 at CERN (Switzerland). Documents are formatted in HTML (Hypertext Markup Language), uniquely addressed with URLs (Uniform Resource Locators), transferred via HTTP/HTTPS, and displayed inside Web Browsers.",
        tableTitle: "THE INTERNET VS. THE WORLD WIDE WEB (WWW)",
        table: {
          headers: ["Attribute / Parameter", "The Internet (Physical Infrastructure)", "The World Wide Web (Information Service)"],
          rows: [
            ["Definition", "A global network of interconnected computer hardware and cables", "A collection of hyperlinked web documents and multimedia"],
            ["Nature / Layer", "Physical hardware and transport network infrastructure", "Software application service operating on top of the Internet"],
            ["Origin / Pioneer", "ARPANET (1969, US DoD, Vint Cerf & Bob Kahn)", "Invented by Sir Tim Berners-Lee in 1989 at CERN"],
            ["Core Protocols", "TCP, IP, UDP, BGP, ICMP, ARP", "HTTP, HTTPS, HTML, CSS, JavaScript, WebSocket"],
            ["Identifier / Addressing", "Numeric IP Addresses (e.g. 192.168.1.1, 2405:200::)", "Uniform Resource Locators (URLs: https://example.com/page.html)"]
          ],
          colWidths: [100, 200, 206]
        },
        practicalExample: "Think of the Internet as physical train tracks connecting cities across a country. The World Wide Web is one specific type of high-speed passenger train running on those tracks. Other services (like Email via SMTP, or File Transfers via FTP) are different trains running on the same tracks.",
        importantPoints: [
          "The World Wide Web was invented by Sir Tim Berners-Lee in 1989 at CERN (Switzerland).",
          "The Internet is the physical network; the WWW is an application service running ON TOP of the Internet.",
          "W3C (World Wide Web Consortium) is the international standards body that maintains HTML and CSS web standards."
        ],
        quickRevision: "WWW is the system of hyperlinked web documents running on top of the Internet. Invented by Tim Berners-Lee (1989). Standardized by W3C."
      },
      {
        code: "1.3",
        title: "Website",
        whatIsIt: "A website is a structured collection of related, interlinked web pages, multimedia files (images, audio, video), and digital assets hosted on a web server under a single unique registered domain name.",
        whyImportant: "Websites provide businesses, government ministries, educational institutions, and individuals with a 24x7 globally accessible digital presence to publish information and deliver services.",
        howItWorks: "All files forming a website are stored in a dedicated directory on a web server (typically named `public_html` or `wwwroot`). When a user types the domain name, the server serves the default entry page (`index.html`).",
        componentsTitle: "ESSENTIAL STRUCTURAL COMPONENTS OF A WEBSITE",
        componentsOrTypes: [
          "Domain Name: The unique human-readable address of the website (e.g., `nielit.gov.in`).",
          "Web Hosting Space: Server storage hardware where website HTML, CSS, JavaScript, and media files are stored.",
          "Home Page (`index.html`): The default primary landing page loaded when users visit the root domain.",
          "Internal Pages: Topic-specific sub-pages linked hierarchically from the navigation menu.",
          "Global Navigation Bar: Standardized menu header allowing visitors to navigate across sections.",
          "Footer: Standardized bottom section containing copyright notices, privacy policies, and contact information."
        ],
        practicalExample: "The NIELIT website (`nielit.gov.in`) is an educational portal. Its root page is `index.html`. It contains hundreds of linked sub-pages for student registrations, syllabus downloads, admit cards, and examination results, all organized under a unified domain.",
        importantPoints: [
          "A website is a collection of related web pages hosted under a single domain name.",
          "The default entry page of any website directory is universally named `index.html` (or `index.php`, `default.htm`).",
          "Domain names are mapped to server IP addresses through DNS (Domain Name System)."
        ],
        quickRevision: "A website is a collection of related web pages under one domain. The default landing page is `index.html`. Hosted on web servers in root folders like `public_html`."
      },
      {
        code: "1.4",
        title: "Working of Websites",
        whatIsIt: "The working of websites describes the full end-to-end client-server lifecycle: from a user typing a URL in a browser to the browser rendering the finished HTML/CSS/JS page.",
        whyImportant: "Understanding website mechanics enables web developers to write efficient code, diagnose 404/500 errors, optimize page load speeds, and build secure web applications.",
        howItWorks: "The process follows 5 distinct sequential phases: 1. DNS Lookup, 2. TCP 3-Way Handshake, 3. HTTP Request Transmission, 4. Server Processing, 5. Browser Rendering Engine Execution.",
        componentsTitle: "THE 5-STEP LIFECYCLE OF A WEB REQUEST",
        componentsOrTypes: [
          "Step 1 - DNS Lookup: The browser queries a DNS server to translate the human-readable domain name (`example.com`) into its corresponding server IP address (`93.184.216.34`).",
          "Step 2 - TCP Connection (3-Way Handshake): Browser and server establish a reliable connection using SYN, SYN-ACK, and ACK packets (and SSL/TLS certificate handshake for HTTPS on Port 443).",
          "Step 3 - HTTP Request: The browser transmits an HTTP `GET /index.html` request header containing user-agent, cookies, and accepted encodings.",
          "Step 4 - Server Response: The web server (Apache, Nginx, or Node.js) processes the request, locates or generates the file, and returns an HTTP `200 OK` response payload containing the HTML code.",
          "Step 5 - Browser Rendering (DOM Construction): The browser engine parses HTML to build the DOM (Document Object Model), parses CSS to build the CSSOM, combines them into a Render Tree, calculates Layout, and Paints pixels onto the screen."
        ],
        practicalExample: "When you type `https://nielit.gov.in`: (1) DNS finds the IP address, (2) Port 443 opens an encrypted TLS connection, (3) Browser requests `GET /index.html`, (4) NIELIT server responds with HTML bytes, and (5) Your browser executes CSS and renders the official page within 1.2 seconds.",
        importantPoints: [
          "Web communication operates on the Client-Server Architecture.",
          "DNS (Domain Name System) translates domain names into numerical IP addresses over Port 53.",
          "The browser constructs the DOM (Document Object Model) tree to render HTML elements on screen."
        ],
        quickRevision: "Website flow: User types URL -> DNS resolves IP -> TCP/TLS handshake -> HTTP GET request -> Server returns 200 OK HTML -> Browser parses DOM/CSSOM and paints pixels."
      },
      {
        code: "1.5",
        title: "Webpages",
        whatIsIt: "A webpage is a single digital hypertext document accessible via a unique URL on the World Wide Web, written in HTML and styled with CSS.",
        whyImportant: "Webpages are the fundamental atomic units that constitute websites. Every article, registration form, video player, and shopping cart is an individual webpage.",
        howItWorks: "A webpage contains structural HTML tags that embed text, raster/vector images, stylesheets, scripts, and hyperlinks. Browsers parse these tags sequentially from top to bottom.",
        tableTitle: "ANATOMY & CLASSIFICATION OF WEBPAGES",
        table: {
          headers: ["Webpage Dimension", "Structural Specification", "Practical Purpose & Implementation"],
          rows: [
            ["Document Format", "HTML / HTML5 text files (`.html` or `.htm`)", "Standardized markup language interpreted by all browser engines"],
            ["File Extension", "`.html`, `.htm`, `.php`, `.jsp`, `.aspx`", "Informs the operating system and server of the document format"],
            ["Character Encoding", "UTF-8 (Unicode Transformation Format)", "Ensures correct display of English, Hindi, mathematical symbols, and emojis"],
            ["Internal Links", "Hyperlinks pointing to other pages within same domain", "Guides user navigation through site hierarchy"],
            ["External Links", "Hyperlinks pointing to third-party domains", "References external authorities, citations, and portals"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "When browsing an online store: The homepage (`index.html`) is one webpage. Clicking 'Laptops' loads a catalog webpage (`products.html`). Clicking 'Shopping Cart' loads a checkout webpage (`cart.html`). Each has a distinct URL but shares common navigation bars.",
        importantPoints: [
          "A webpage is a single HTML document with a unique URL.",
          "The UTF-8 encoding standard represents over 1.1 million characters across all human languages.",
          "Webpages are linked together via HTML Anchor (`<a>`) tags."
        ],
        quickRevision: "A webpage is an individual HTML document identified by a URL. Websites are collections of interconnected webpages sharing common styling and navigation."
      },
      {
        code: "1.6",
        title: "Front End",
        whatIsIt: "The Front End (also called the Client Side) refers to everything a user visually sees, hears, and directly interacts with inside their web browser window.",
        whyImportant: "Front-end design determines user experience (UX), visual aesthetics, accessibility, responsiveness across mobile devices, and conversion rates.",
        howItWorks: "Front-end code runs entirely inside the user's browser engine using three foundational technologies: HTML (structure), CSS (presentation), and JavaScript (behavior).",
        tableTitle: "THE 3 PILLARS OF FRONT-END WEB DEVELOPMENT",
        table: {
          headers: ["Technology", "Role in Web Development", "Analogy (Human Body Model)", "Standard File Extension"],
          rows: [
            ["HTML (Hypertext Markup Language)", "Defines structural skeleton, headings, paragraphs, images, forms", "Skeletal Bones & Organs", "`.html` / `.htm`"],
            ["CSS (Cascading Style Sheets)", "Defines visual presentation, colors, fonts, margins, layouts, animations", "Skin, Clothing & Appearance", "`.css`"],
            ["JavaScript (JS)", "Defines interactive behavior, form validation, animations, data fetching", "Muscles & Nervous System", "`.js`"]
          ],
          colWidths: [120, 180, 110, 96]
        },
        practicalExample: "On a login screen: (1) HTML creates the username input box and 'Submit' button. (2) CSS colors the button blue with rounded corners and centered typography. (3) JavaScript validates that the password field is not empty when clicked before sending data.",
        importantPoints: [
          "Front End is executed by the client's web browser, not the server.",
          "The three core building blocks of Front End are HTML, CSS, and JavaScript.",
          "Front-end frameworks taught in O-Level include W3.CSS and AngularJS."
        ],
        quickRevision: "Front End is the visual client-side interface rendered by the browser: HTML provides structure, CSS provides styling, and JavaScript provides interactive behavior."
      },
      {
        code: "1.7",
        title: "Back End",
        whatIsIt: "The Back End (also called the Server Side) consists of the web server, application software logic, and database systems that operate behind the scenes to process data, authenticate users, and manage databases.",
        whyImportant: "Without a back end, websites cannot securely authenticate passwords, process online debit card payments, store user profiles, or dynamically query databases.",
        howItWorks: "When the front end submits a form or API request, the back-end application server receives data, verifies credentials against a database (e.g. MySQL, PostgreSQL), executes business logic, and returns a response.",
        componentsTitle: "THE 3-TIER BACK-END ARCHITECTURAL STACK",
        componentsOrTypes: [
          "1. Web Server (HTTP Listener): Software that listens for incoming network requests on Port 80/443 (e.g. Apache HTTP Server, Nginx, Microsoft IIS).",
          "2. Application Server (Business Logic): The programming engine that runs server-side code (e.g. Node.js, Python, PHP, Java, Ruby).",
          "3. Database Server (Data Persistence): Persistent relational or NoSQL data storage engines (e.g. MySQL, PostgreSQL, MongoDB, SQLite) executing SQL queries to store and retrieve records."
        ],
        practicalExample: "When a student checks their O-Level exam result: The student enters their Roll Number on the front-end webpage and clicks 'Submit'. The Back End receives the roll number, executes a SQL query `SELECT marks FROM results WHERE roll='12345'`, and dynamically generates an HTML result slip sent back to the student's browser.",
        importantPoints: [
          "Back End operates on remote servers and is completely invisible to end-users.",
          "Back End is responsible for business logic, database queries, security authentication, and data persistence.",
          "Common server-side languages include PHP, Python, Node.js, and Java."
        ],
        quickRevision: "Back End is the server-side engine comprising the web server, application logic, and databases (MySQL/PostgreSQL) handling authentication, data processing, and persistence."
      },
      {
        code: "1.8",
        title: "Client Side Scripting Languages",
        whatIsIt: "Client-side scripting refers to program code that is downloaded from a web server and executed locally inside the user's web browser engine on their device.",
        whyImportant: "Client-side scripts provide instantaneous UI feedback, validate form inputs before network transmission, and create interactive animations without reloading the webpage from the server.",
        howItWorks: "The browser's built-in JavaScript engine (like Google V8 or Mozilla SpiderMonkey) parses and executes the script within a secure sandboxed environment.",
        componentsTitle: "CLIENT-SIDE SCRIPTING CHARACTERISTICS & LANGUAGES",
        componentsOrTypes: [
          "Primary Standard: **JavaScript (JS)** is the undisputed global standard client-side scripting language supported natively by all web browsers.",
          "Execution Location: Runs locally inside the client's browser CPU memory.",
          "Zero Server Load: Validations and UI calculations occur entirely on the client's laptop or mobile phone.",
          "Source Visibility: Client-side source code is fully visible and readable by end-users via 'View Page Source' (`Ctrl + U`) or Developer Tools (`F12`).",
          "Security Sandbox: Browser security prevents client-side scripts from reading local hard drive files without explicit user permission."
        ],
        practicalExample: "When filling an online admission form: If a user types an invalid email address (e.g. `saurabh@`), a client-side JavaScript function triggers instantly with a red warning: 'Invalid Email Format'. This check takes 0 milliseconds because no data was sent to the server.",
        importantPoints: [
          "JavaScript is the universal client-side scripting language for modern web browsers.",
          "Client-side scripts execute locally in the user's browser, reducing server load.",
          "Client-side source code is visible in the browser via 'View Page Source' (`Ctrl + U`)."
        ],
        quickRevision: "Client-side scripting (JavaScript) executes locally in the user's browser. It enables instant validation and dynamic UI updates with zero server round-trips."
      },
      {
        code: "1.9",
        title: "Server Side Scripting Languages",
        whatIsIt: "Server-side scripting refers to program code that executes entirely on the web server before the resulting HTML output is transmitted across the network to the client browser.",
        whyImportant: "Server-side scripting is essential for querying secure databases, processing financial transactions, hashing passwords, and keeping sensitive business algorithms confidential.",
        howItWorks: "When a request arrives, the web server executes the script file. The script processes calculations, talks to databases, compiles a clean plain HTML document, and transmits it to the browser. The original source code never leaves the server.",
        tableTitle: "CLIENT-SIDE SCRIPTING VS. SERVER-SIDE SCRIPTING",
        table: {
          headers: ["Evaluation Parameter", "Client-Side Scripting (e.g. JavaScript)", "Server-Side Scripting (e.g. PHP, Python, Node.js)"],
          rows: [
            ["Execution Location", "Executes locally on user's device inside browser engine", "Executes remotely on high-performance web servers"],
            ["Source Code Visibility", "Publicly visible to anyone via 'View Page Source'", "Strictly hidden; only the generated HTML output is sent"],
            ["Database Access", "Cannot connect directly to backend databases (security)", "Direct, full read/write access to MySQL, PostgreSQL databases"],
            ["Primary Use Cases", "Form validations, UI animations, DOM manipulations, UI events", "User authentication, payment processing, database CRUD logic"],
            ["Prominent Languages", "JavaScript, VBScript (legacy)", "PHP, Python, Node.js (JavaScript on server), Java, Ruby"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "When you log in to an internet banking portal: The server-side script takes your password, computes a cryptographic SHA-256 hash, compares it with the database record, creates an encrypted session token, and sends back your account summary page.",
        importantPoints: [
          "Server-side code executes on the web server and its source code is never sent to the browser.",
          "Server-side scripts have direct access to server file systems and databases.",
          "Prominent server-side languages include PHP, Python, Java, Node.js, and Ruby."
        ],
        quickRevision: "Server-side scripts execute on the server to process databases and secure business logic. The browser receives only the rendered HTML output."
      },
      {
        code: "1.10",
        title: "Responsive Web Designing",
        whatIsIt: "Responsive Web Design (RWD) is an approach to web development where a single website automatically adjusts, scales, rearranges, and optimizes its layout across all screen sizes and devices (desktops, laptops, tablets, smartphones).",
        whyImportant: "With over 60% of global web traffic originating from mobile devices, non-responsive websites suffer high bounce rates, poor user readability, and lower search engine rankings.",
        howItWorks: "RWD relies on three core technical pillars introduced by Ethan Marcotte: 1. Fluid Proportion-Based Grids, 2. Flexible Images, and 3. CSS3 Media Queries.",
        componentsTitle: "THE 3 CORE PILLARS OF RESPONSIVE WEB DESIGN",
        componentsOrTypes: [
          "1. Fluid Grid Layouts: Defining container widths using relative percentages (`%`, `vw`, `vh`) or CSS Grid/Flexbox rather than fixed rigid pixels (`px`).",
          "2. Flexible Images & Media: Setting `max-width: 100%; height: auto;` on all image elements so they scale down fluidly without overflowing small mobile viewports.",
          "3. CSS3 Media Queries: Using `@media (max-width: 768px)` breakpoints in CSS to apply different styling rules (e.g. switching a 4-column desktop grid into a 1-column mobile stack).",
          "Viewport Meta Tag: The mandatory HTML tag `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` required in every HTML `<head>` to enable proper mobile scaling."
        ],
        practicalExample: "A 4-column product grid on a 27-inch desktop monitor automatically adapts: On an iPad tablet (768px wide), media queries rearrange it into a 2-column grid. On an iPhone smartphone (375px wide), it rearranges into a comfortable single-column vertical stack.",
        importantPoints: [
          "Ethan Marcotte coined the term 'Responsive Web Design' in 2010.",
          "The three core ingredients of RWD are: Fluid Grids, Flexible Media, and Media Queries.",
          "The Viewport meta tag is mandatory for mobile responsive rendering."
        ],
        quickRevision: "Responsive Web Design allows a single website to adapt seamlessly to all screen sizes using fluid grids, flexible images, and CSS3 media queries."
      },
      {
        code: "1.11",
        title: "Types of Websites (Static and Dynamic)",
        whatIsIt: "Websites are fundamentally categorized into two operational architectures based on how their content is generated and served: **Static Websites** (pre-built fixed files) and **Dynamic Websites** (database-driven, generated on-the-fly).",
        whyImportant: "Choosing between static and dynamic architecture dictates development cost, server hosting requirements, maintenance complexity, and page performance.",
        howItWorks: "A static website serves the exact same pre-written HTML file to every visitor. A dynamic website executes server-side scripts to query databases and generate customized HTML for each individual request.",
        tableTitle: "STATIC WEBSITES VS. DYNAMIC WEBSITES",
        table: {
          headers: ["Attribute / Parameter", "Static Websites", "Dynamic Websites"],
          rows: [
            ["Content Generation", "Pre-written HTML/CSS files stored statically on server", "Generated dynamically on-the-fly by server scripts and databases"],
            ["Visitor Experience", "Every visitor sees the exact same identical content", "Content customizes based on user login, location, search inputs"],
            ["Database Dependency", "Zero database required; simple file storage", "Requires backend database management systems (MySQL, etc.)"],
            ["Page Load Speed", "Ultra-fast (served directly from cache or CDN)", "Slightly slower (requires database query and processing time)"],
            ["Development Complexity", "Simple to build; low hosting and maintenance costs", "Higher complexity; requires backend developers and database admins"],
            ["Practical Examples", "Portfolio websites, brochure sites, restaurant menus", "E-commerce portals (Amazon), social networks (Facebook), banking"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "A doctor's static clinic profile (`about.html`) displays the same address and visiting hours to every visitor. In contrast, the hospital's dynamic appointment booking portal checks doctor availability in real time from a database and books slots for authenticated patients.",
        importantPoints: [
          "Static websites deliver pre-written HTML files with identical content to all users.",
          "Dynamic websites generate customized web pages on-the-fly using databases and server scripts.",
          "Static sites are faster and cheaper to host, while dynamic sites provide personalized interactive features."
        ],
        quickRevision: "Static websites serve fixed pre-written HTML files to all users. Dynamic websites generate customized pages on-the-fly from database records (e-commerce, portals)."
      }
    ],
    unitRevision: [
      "The Internet is the global physical network of interconnected computers (TCP/IP, 1969 ARPANET).",
      "The World Wide Web (WWW, Tim Berners-Lee 1989 at CERN) is the hyperlinked multimedia service running on top of the Internet.",
      "A Website is a collection of related web pages under a domain name; the default landing page is `index.html`.",
      "The Working of Websites follows 5 phases: DNS Lookup -> TCP Handshake -> HTTP Request -> Server Processing -> Browser DOM Rendering.",
      "Front End is the client-side presentation layer (HTML structure, CSS styling, JavaScript behavior).",
      "Back End is the server-side infrastructure (Web Server, Application Logic, Database Server).",
      "Client-Side Scripting (JavaScript) executes locally in the browser with public source code; Server-Side Scripting (PHP, Python, Node.js) executes on the server with private code and direct database access.",
      "Responsive Web Design (RWD) uses fluid grids, flexible images, and CSS media queries to adapt to all screen sizes.",
      "Static Websites serve pre-written HTML files with identical content; Dynamic Websites generate pages on-the-fly from databases."
    ],
    keyTerms: [
      { term: "WWW", fullForm: "World Wide Web", desc: "Global system of hyperlinked documents accessed via HTTP." },
      { term: "HTTP", fullForm: "Hypertext Transfer Protocol", desc: "Application protocol for transmitting web pages over Port 80." },
      { term: "HTTPS", fullForm: "Hypertext Transfer Protocol Secure", desc: "Encrypted web protocol using SSL/TLS encryption over Port 443." },
      { term: "URL", fullForm: "Uniform Resource Locator", desc: "Unique global address identifying a web resource on the Internet." },
      { term: "DNS", fullForm: "Domain Name System", desc: "Internet directory translating human domain names into numerical IP addresses." },
      { term: "DOM", fullForm: "Document Object Model", desc: "Hierarchical tree representation of HTML elements constructed in browser memory." },
      { term: "RWD", fullForm: "Responsive Web Design", desc: "Web design methodology adapting layouts across diverse screen viewports." },
      { term: "W3C", fullForm: "World Wide Web Consortium", desc: "International standards organization governing HTML and CSS web standards." }
    ]
  };
}
