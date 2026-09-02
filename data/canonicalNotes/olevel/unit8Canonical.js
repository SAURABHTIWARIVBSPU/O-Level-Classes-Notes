// Unit 8: Web Publishing and Browsing - Tutorial & Textbook Grade Content for NIELIT O-Level M2-R5.1
export function getUnit8Canonical() {
  return {
    unitNumber: 8,
    title: "Web Publishing and Browsing",
    officialSection: "16.6 (viii)",
    totalHours: 5,
    theoryHours: 2,
    practicalHours: 3,
    introduction: "Web Publishing and Browsing represents the final capstone phase of web engineering: taking locally developed web documents and making them globally accessible to billions of internet users. This unit teaches the end-to-end Web Publishing lifecycle, user-centric web design principles, the SGML heritage of markup languages, web hosting architectures (Shared, VPS, Dedicated, Cloud), international document interchange standards (ASCII, UTF-8, MIME, XML), essential server-side publishing components (Domain registrars, DNS records, Apache/Nginx web servers), site document directory management, search engine architectures (crawlers, indexing, PageRank, SEO), meta search engine aggregators (Dogpile), WWW architecture and URL anatomy, web browser internal architecture and rendering engines (Blink, Gecko, WebKit), the stateless HTTP protocol (methods GET/POST and status code ranges 200/404/500), and modern publishing tools including FileZilla FTP and cPanel.",
    whatYouWillLearn: [
      "The complete 7-stage Web Publishing Lifecycle: Planning, UI/UX Design, Development, Testing, Domain & Hosting, Launch, and Maintenance.",
      "Core Web Design Principles: Visual hierarchy, intuitive navigation, F-shaped scanning pattern, mobile responsiveness, and page load optimization.",
      "SGML (Standard Generalized Markup Language ISO 8879:1986): Relationship to HTML and XML.",
      "Web Hosting models compared: Shared Hosting, VPS (Virtual Private Server), Dedicated Server, and Cloud Hosting.",
      "Document Interchange Standards: 7-bit ASCII, universal UTF-8 Unicode, MIME types, and XML data interchange.",
      "Components of Web Publishing: Domain Registrars, DNS name servers, Web Servers (Apache, Nginx, IIS), and Database Servers.",
      "Document Management: `public_html` root directory conventions, absolute versus relative linking, and clean naming rules.",
      "Search Engine mechanics: Automated Web Crawlers/Spiders, indexing databases, ranking algorithms, and On-Page/Off-Page SEO.",
      "Meta Search Engines: How aggregators (like Dogpile) query multiple search engines simultaneously.",
      "WWW Architecture & URL Anatomy: Scheme protocol, subdomain, domain name, port numbers (80/443), path, query strings, and hash fragments.",
      "Browser Architecture: The 7-layer browser internal model and rendering engines (Blink in Chrome/Edge, Gecko in Firefox, WebKit in Safari).",
      "HTTP / HTTPS Protocol: Stateless communication, Request-Response cycle, HTTP Methods (GET, POST, PUT, DELETE), and Status Codes (200 OK, 301, 403, 404, 500).",
      "Publishing Tools: Deploying websites using FileZilla FTP/SFTP client over Port 21/22 and cPanel hosting administration."
    ],
    topics: [
      {
        code: "8.1",
        title: "Overview of Web Publishing",
        whatIsIt: "Web Publishing (also called Online Publishing) is the complete end-to-end process of designing, developing, testing, uploading, and maintaining a website on an Internet-connected web server so it is publicly accessible via a registered domain name.",
        whyImportant: "Writing HTML/CSS files on a local laptop is useless until they are published to a public web server where users worldwide can access them 24 hours a day, 365 days a year.",
        howItWorks: "Web publishing follows a disciplined 7-stage engineering lifecycle from initial client concept to post-launch maintenance.",
        componentsTitle: "THE 7 PHASES OF THE WEB PUBLISHING LIFECYCLE",
        componentsOrTypes: [
          "1. Project Planning & Strategy: Defining target audience, site goals, sitemap architecture, and required technical stack.",
          "2. Wireframing & UI/UX Design: Creating visual mockups, color palettes, and interactive prototypes in tools like Figma or Photoshop.",
          "3. Front-End & Back-End Development: Coding structured HTML, CSS, JavaScript, server APIs, and relational databases.",
          "4. Quality Assurance & Testing: Cross-browser testing, mobile viewport verification, broken link checks, and accessibility audits.",
          "5. Domain Registration & Web Hosting: Purchasing a unique domain name (`.com`, `.in`) and leasing server space with an ISP/Host.",
          "6. Deployment (Publishing): Uploading code and assets to the server's `public_html` directory using FTP/SFTP or Git.",
          "7. Maintenance & SEO Optimization: Monitoring uptime, renewing SSL certificates, fixing bugs, updating content, and improving search engine ranking."
        ],
        practicalExample: "A local college wants a web presence: (1) Plan pages: Home, Courses, Admission. (2) Design layout in Photoshop. (3) Code HTML/CSS/JS. (4) Test on mobile and laptop. (5) Register `mycollege.edu.in`. (6) Upload files using FileZilla to server. (7) Website is live globally!",
        importantPoints: [
          "Web Publishing encompasses the entire lifecycle from planning to continuous maintenance.",
          "Websites are published by uploading files to a public web server.",
          "Testing across different browsers and mobile devices is mandatory before public launch."
        ],
        quickRevision: "Web publishing is the process of creating, deploying, and maintaining websites on public web servers across 7 phases: Planning -> Design -> Development -> Testing -> Hosting -> Deployment -> Maintenance."
      },
      {
        code: "8.2",
        title: "Web Page Design Considerations and Principles",
        whatIsIt: "Web design principles are established usability guidelines, visual hierarchies, and cognitive ergonomics that dictate how information should be organized on a webpage to maximize readability, accessibility, and user retention.",
        whyImportant: "Visitors decide within 3 seconds whether to stay on a website or bounce away. Poor color contrast, cluttered navigation, or slow loading instantly drives users to competitors.",
        howItWorks: "Designers employ visual psychology, color theory, standardized typography scales, and eye-tracking patterns to guide user attention smoothly down the page.",
        tableTitle: "CORE WEB DESIGN PRINCIPLES REFERENCE",
        table: {
          headers: ["Design Principle", "Core Concept / Rule", "Why It Matters & User Impact"],
          rows: [
            ["Simplicity (KISS Principle)", "'Keep It Simple, Stupid': Eliminate unnecessary visual clutter, excessive popups, and gratuitous animations", "Keeps users focused on core content and primary calls-to-action (CTA)"],
            ["Visual Hierarchy", "Arrange elements in order of visual importance using font size, color weight, and spacing", "Guides reader's eyes naturally from main H1 headlines down to supporting body text"],
            ["F-Shaped Scanning Pattern", "Web users scan screens in an 'F' shape: reading across top, across middle, then scanning left edge down", "Crucial for placing logos, headlines, and key navigational links where eyes naturally look first"],
            ["Mobile Responsiveness", "Layout must adapt gracefully to smartphones, tablets, and wide desktop screens", "Ensures high mobile conversion rates and prevents mobile bounce penalties from Google"],
            ["Page Load Speed", "Optimize images, minify code, and leverage browser caching to load pages under 2 seconds", "Every 1-second delay in page load time reduces visitor satisfaction by 16%"],
            ["Accessible Contrast", "Maintain high contrast between text and background (e.g. dark text on light background)", "Ensures readability for elderly users, people in bright sunlight, and visually impaired users"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "Applying the F-Pattern: Place the university logo in the top-left corner (first glance). Place the main navigation bar across the top horizontal band. Place high-yield news headlines down the left column where eye tracking is strongest.",
        importantPoints: [
          "Web users scan content in an F-shaped reading pattern rather than reading every word.",
          "Visual hierarchy uses size, contrast, and spacing to indicate importance.",
          "Websites should ideally load in under 2 seconds to retain visitors.",
          "High contrast between text and background is mandatory for web accessibility."
        ],
        quickRevision: "Design principles: Simplicity (declutter), Visual Hierarchy (size indicates priority), F-Pattern (place key content along top and left), Mobile Responsiveness, and Fast Load Speed."
      },
      {
        code: "8.3",
        title: "SGML (Standard Generalized Markup Language)",
        whatIsIt: "SGML (Standard Generalized Markup Language, ISO 8879:1986) is an international standard metalanguage used for defining structured generalized markup languages for electronic documents.",
        whyImportant: "SGML is the historical parent of both **HTML** and **XML**. Understanding SGML clarifies why HTML uses tags, doctypes, and document type definitions (DTDs).",
        howItWorks: "SGML provides a formalized grammar to create markup languages. A Document Type Definition (DTD) specifies which tags exist, which attributes they accept, and how they can be nested.",
        componentsTitle: "THE FAMILY TREE: SGML, HTML, AND XML",
        componentsOrTypes: [
          "SGML (ISO 8879, 1986): The complex parent metalanguage. Powerful, highly generalized, but too large and complicated to run natively inside web browsers.",
          "HTML (Application of SGML): Sir Tim Berners-Lee took a small, specialized subset of SGML tags specifically optimized for hyperlinked academic and web documents (HTML 2.0 to HTML 4.01 were formal SGML applications).",
          "XML (Extensible Markup Language): Created in 1998 by W3C as a simplified, strict, lightweight subset of SGML designed for structured data interchange across the Internet.",
          "HTML5 Independence: HTML5 formally broke away from SGML restrictions, abandoning strict DTD requirements in favor of a modern DOM-based Living Standard (`<!DOCTYPE html>`)."
        ],
        practicalExample: "In HTML 4.01, the doctype was a massive SGML reference: `<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">`. In HTML5, because it is no longer bound to SGML DTDs, it simplified to just `<!DOCTYPE html>`.",
        importantPoints: [
          "SGML stands for Standard Generalized Markup Language (ISO 8879:1986).",
          "HTML (up to version 4.01) is a specialized application of SGML.",
          "XML is a simplified, lightweight subset of SGML designed for data exchange.",
          "HTML5 is no longer based on SGML DTDs."
        ],
        quickRevision: "SGML is the parent metalanguage of markup. HTML is a specialized application of SGML for web documents; XML is a simplified subset of SGML for data interchange."
      },
      {
        code: "8.4",
        title: "Web Hosting Basics (Shared, VPS, Dedicated, Cloud)",
        whatIsIt: "Web Hosting is an internet service that leases physical server storage space, network bandwidth, and compute power to individuals and organizations, allowing their websites to be accessed 24x7 over the Internet.",
        whyImportant: "A website cannot be viewed online unless its files reside on a permanently powered, high-speed Internet-connected computer (a Web Server).",
        howItWorks: "Web hosting companies (e.g. Hostinger, AWS, Bluehost, GoDaddy) operate massive data centers containing racks of server blades with redundant power (UPS) and gigabit fiber connections.",
        tableTitle: "THE 4 MAJOR WEB HOSTING MODELS COMPARED",
        table: {
          headers: ["Hosting Category", "Physical Architecture / Isolation", "Pros & Performance", "Cons & Typical Use Case"],
          rows: [
            ["Shared Hosting", "Hundreds of websites share the exact same physical CPU, RAM, and storage", "Extremely cheap (~₹100/mo); easy cPanel admin; zero technical setup needed", "Slow; 'bad neighbor effect' (one site's traffic surge slows all other sites); beginner blogs"],
            ["VPS (Virtual Private Server)", "One physical server partitioned into isolated virtual servers using a Hypervisor", "Guaranteed dedicated CPU/RAM slices; root access; higher reliability and security", "Moderate cost; requires some server administration knowledge; medium-traffic e-commerce"],
            ["Dedicated Server", "An entire physical computer leased exclusively to a single client organization", "100% maximum performance, total hardware control, enterprise-grade security", "Very expensive; requires full-time system administration team; banks, universities, portals"],
            ["Cloud Hosting", "Website runs across a clustered network of interconnected virtual servers (AWS, Azure)", "**Elastic scalability** (scales resources automatically); pay-as-you-go; 99.99% uptime", "Variable monthly billing costs; modern high-traffic startups, streaming, SaaS platforms"]
          ],
          colWidths: [110, 160, 140, 96]
        },
        practicalExample: "A student creating an O-Level project uses **Shared Hosting** (costs ₹99/month, simple). A growing startup getting 50,000 visitors uses **VPS**. An airline booking system or university portal uses **Cloud Hosting** to scale up 50 servers during festival sales.",
        importantPoints: [
          "Shared hosting shares CPU, RAM, and disk with hundreds of other websites.",
          "VPS (Virtual Private Server) uses virtualization to give dedicated slices of resources.",
          "Dedicated hosting provides an entire physical server dedicated to one customer.",
          "Cloud hosting distributes website load across a cluster of interconnected virtual servers."
        ],
        quickRevision: "Hosting models: Shared (cheapest, shared resources), VPS (virtual isolation), Dedicated (full physical server for one client), Cloud (elastic clustering, pay-as-you-go)."
      },
      {
        code: "8.5",
        title: "Documents Interchange Standards (ASCII, UTF-8, MIME, XML)",
        whatIsIt: "Document interchange standards are universally agreed-upon technical formats and character encodings that enable heterogeneous computer operating systems (Windows, Linux, macOS, Android) to exchange data and documents without corrupting characters or file structures.",
        whyImportant: "Without standardized character sets and MIME headers, an English text file sent from a Linux server to a Windows browser would display unreadable garbled characters (Mojibake).",
        howItWorks: "Standard protocols specify character mapping tables (ASCII, Unicode) and content type declarations (MIME) that all browsers decode identically.",
        tableTitle: "INTERCHANGE STANDARDS SPECIFICATION",
        table: {
          headers: ["Standard / Acronym", "Full Name & Architecture", "Key Technical Specification", "Primary Role in Web Computing"],
          rows: [
            ["ASCII", "American Standard Code for Information Interchange (1963)", "7-bit encoding representing exactly **128 characters** (0-127: English letters, numbers, symbols)", "Foundational standard; limited strictly to basic English characters"],
            ["UTF-8", "Unicode Transformation Format (8-bit variable width)", "Variable length (1 to 4 bytes per character); encodes all **1,112,064 Unicode code points**", "**Universal Web Standard**: Supports English, Hindi, Arabic, Chinese, emojis, math symbols"],
            ["MIME", "Multipurpose Internet Mail Extensions", "Header standard categorizing digital media types (`Content-Type: text/html`)", "Informs browsers whether an incoming file is HTML, a JPEG image, a PDF, or a video"],
            ["XML", "Extensible Markup Language (W3C Standard)", "Text-based structured markup format with user-defined semantic tags (`<student><name>...`)", "Standard data exchange format used in web services, RSS feeds, and configuration files"]
          ],
          colWidths: [100, 160, 140, 106]
        },
        practicalExample: "When an Indian e-commerce receipt displays `₹` (Indian Rupee symbol) and Hindi text 'धन्यवाद': **UTF-8** ensures both characters render accurately. The server transmits `Content-Type: text/html; charset=UTF-8` (using **MIME**), instructing the browser how to decode the bytes.",
        importantPoints: [
          "ASCII is a 7-bit character encoding standard supporting 128 characters.",
          "UTF-8 is the universal variable-width encoding used across more than 98% of all websites.",
          "MIME types identify the file format sent over HTTP (e.g. `text/html`, `image/png`, `application/pdf`).",
          "XML is a hardware- and software-independent markup language designed to transport and store data."
        ],
        quickRevision: "Interchange standards: ASCII (7-bit, 128 English chars), UTF-8 (universal variable 1-4 bytes for all world languages/emojis), MIME (file format headers), XML (data transport)."
      },
      {
        code: "8.6",
        title: "Components of Web Publishing",
        whatIsIt: "Components of Web Publishing refer to the complete technical ecosystem of hardware, software, network protocols, and third-party services required to take web files from a local computer and publish them online.",
        whyImportant: "A web developer must understand every component in the publishing pipeline to properly configure domains, connect DNS name servers, manage databases, and troubleshoot deployment failures.",
        howItWorks: "The publishing infrastructure connects five distinct architectural components: Registrars, DNS Servers, Web Server Software, FTP/SSH Services, and Database Servers.",
        componentsTitle: "THE 5 CORE HARDWARE & SOFTWARE PUBLISHING COMPONENTS",
        componentsOrTypes: [
          "1. Domain Name Registrar: ICANN-accredited commercial agencies (e.g. GoDaddy, Namecheap, BigRock) where users register and renew human-readable domain names (e.g. `nielit.gov.in`).",
          "2. DNS Name Servers: Specialized server computers storing DNS zone files that map registered domain names to the hosting server's numeric IP address (`A Records`).",
          "3. Web Server Software: Server-side application software running on port 80/443 that accepts incoming HTTP requests and serves web documents (e.g. **Apache HTTP Server**, **Nginx**, **Microsoft IIS**).",
          "4. FTP / SFTP Server: File Transfer Protocol service (running on port 21/22) allowing developers to securely upload files from their local laptop directly into the server's storage.",
          "5. Database Server: Dedicated Relational Database Management System (RDBMS) software (e.g. **MySQL**, **MariaDB**, **PostgreSQL**) storing dynamic customer accounts, articles, and product catalogs."
        ],
        practicalExample: "You buy the domain `myschool.org` from a Registrar. You point its DNS Name Servers to your hosting account. You launch FileZilla (FTP) and upload `index.html`. Your web server (Apache) listens on Port 80 and serves your page to the world.",
        importantPoints: [
          "ICANN (Internet Corporation for Assigned Names and Numbers) oversees global domain registration.",
          "Popular web server software includes Apache, Nginx, and Microsoft IIS.",
          "FTP (File Transfer Protocol, Port 21) or SFTP (Port 22) is used to upload files to web servers.",
          "MySQL is the most popular open-source database server used in web publishing."
        ],
        quickRevision: "Web publishing requires 5 components: Domain Registrar (buys name), DNS (maps name to IP), Web Server (Apache/Nginx serves HTML), FTP/SFTP (uploads files), and Database (MySQL)."
      },
      {
        code: "8.7",
        title: "Document Management & Site Architecture",
        whatIsIt: "Document Management is the systematic organization of web project files, asset folders, directory paths, and file permissions on a web server's storage drive.",
        whyImportant: "Unorganized files with broken links, incorrect relative paths, or wrong server permissions cause 404 Not Found errors, broken styling, and security vulnerabilities.",
        howItWorks: "Web servers designate a specific root folder-conventionally named **`public_html`**, **`www`**, or **`htdocs`**-as the public-facing directory. Any file placed inside this folder is visible to the public internet.",
        tableTitle: "STANDARD WEB DIRECTORY STRUCTURE HIERARCHY",
        table: {
          headers: ["Directory / Path", "Folder Purpose", "Standard Content Stored Inside"],
          rows: [
            ["`/public_html/` (Root)", "The primary public root directory of the website", "`index.html` (homepage), `robots.txt`, `.htaccess`"],
            ["`/public_html/css/`", "Dedicated subfolder for Cascading Style Sheets", "`style.css`, `w3.css`, `responsive.css`"],
            ["`/public_html/js/`", "Dedicated subfolder for JavaScript client scripts", "`app.js`, `validation.js`, `angular.min.js`"],
            ["`/public_html/images/`", "Dedicated subfolder for graphics and photographs", "`logo.svg`, `banner.jpg`, `icons/`"],
            ["`/public_html/docs/`", "Dedicated subfolder for downloadable public assets", "`syllabus.pdf`, `admit-card-instructions.pdf`"]
          ],
          colWidths: [120, 180, 206]
        },
        componentsTitle: "ABSOLUTE VS. RELATIVE FILE PATHING",
        componentsOrTypes: [
          "Relative Path (Best Practice): Points to files relative to current folder (e.g. `images/logo.png` or `../css/style.css`). Highly portable: works identically on local laptop and live server.",
          "Absolute Path: Specifies full URL (e.g. `https://nielit.gov.in/images/logo.png`). Breaks if domain name changes.",
          "Index Page Rule: Web servers automatically look for `index.html` (or `index.php`) when a user visits a directory root without specifying a file name.",
          "File Permissions (Linux/Unix): Web files should have permission **`644`** (read/write for owner, read-only for public); directories should have permission **`755`**."
        ],
        practicalExample: "If `contact.html` needs to display an image stored in the `images` folder: Write `<img src=\"images/phone.png\">`. The relative path tells the browser to look inside the sibling `images` directory.",
        importantPoints: [
          "The public root directory on standard web servers is named `public_html` or `htdocs`.",
          "Relative file paths (e.g. `css/style.css`) are best practice for portable web development.",
          "Standard Linux server file permissions are 644 for files and 755 for directories."
        ],
        quickRevision: "Organize files in `public_html`: store CSS in `css/`, scripts in `js/`, images in `images/`. Always use relative paths (`css/style.css`) and name the homepage `index.html`."
      },
      {
        code: "8.8",
        title: "Search Engines (Crawlers, Indexing, Ranking, SEO)",
        whatIsIt: "A Search Engine is a specialized online software system (such as Google, Microsoft Bing, or Yahoo) that continuously discovers, crawls, indexes, and ranks billions of web pages across the World Wide Web so users can find information using keyword queries.",
        whyImportant: "Publishing a website is pointless if nobody can find it. Over 70% of all website traffic originates from search engines. Search Engine Optimization (SEO) ensures high search visibility.",
        howItWorks: "Search engines operate through three continuous automated stages: 1. **Crawling** (discovering pages), 2. **Indexing** (storing and cataloging content in massive databases), and 3. **Ranking** (sorting results by relevance when a user searches).",
        componentsTitle: "THE 3 PILLARS OF SEARCH ENGINE ARCHITECTURE",
        componentsOrTypes: [
          "1. Web Crawlers (Spiders / Bots): Automated software robots (e.g. Googlebot) that continuously traverse the Internet by following hyperlinks from one webpage to another, downloading page content.",
          "2. The Index: A colossal, distributed database containing trillions of cataloged web pages, inverted word lists, and metadata.",
          "3. Ranking Algorithms (e.g. PageRank): Complex mathematical models evaluating over 200 ranking signals (content relevance, backlinks, mobile speed, SSL security) to display the most helpful results on the Search Engine Results Page (SERP).",
          "robots.txt: A plain text file placed in the website root instructing crawlers which directories they are permitted or forbidden to scan.",
          "sitemap.xml: An XML file listing all public page URLs on a website to help search crawlers discover new content quickly."
        ],
        tableTitle: "ON-PAGE SEO VS. OFF-PAGE SEO",
        table: {
          headers: ["SEO Category", "Core Focus & Responsibility", "Practical Techniques Applied by Web Designers"],
          rows: [
            ["On-Page SEO", "Optimizations made directly on the website's HTML code and content", "Descriptive `<title>` tags, meta descriptions, semantic `<h1>` to `<h6>` hierarchy, `alt` text on images, clean URLs, mobile responsive design, fast page load speeds"],
            ["Off-Page SEO", "Actions taken outside the website to build external authority and trust", "Acquiring high-quality external backlinks from authoritative websites, social media shares, institutional citations, brand mentions"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "To rank an O-Level course page on Google: Add `<title>NIELIT O-Level M2-R5.1 Notes - Web Designing</title>`, use semantic `<h1>` tags, add `alt=\"Syllabus diagram\"` to images, and create a `sitemap.xml`. Googlebot crawls the page and ranks it at the top of search results.",
        importantPoints: [
          "Search engines operate in 3 stages: Crawling (discovery), Indexing (storage), and Ranking (ordering).",
          "Automated software programs that discover web pages are called Web Crawlers, Spiders, or Bots.",
          "SEO stands for Search Engine Optimization.",
          "`robots.txt` controls crawler access; `sitemap.xml` lists pages for fast crawler discovery."
        ],
        quickRevision: "Search engines discover pages via Crawlers (spiders), catalog them in an Index, and order results using Ranking algorithms. On-page SEO optimizes HTML tags, titles, and speed."
      },
      {
        code: "8.9",
        title: "Meta Search Engines",
        whatIsIt: "A Meta Search Engine is an information retrieval aggregator that does not maintain its own database of web pages or web crawlers; instead, it simultaneously queries multiple independent search engines (such as Google, Bing, and Yahoo), aggregates their results, removes duplicates, and presents a consolidated results list to the user.",
        whyImportant: "No single search engine indexes 100% of the World Wide Web. Meta search engines provide broader coverage, comparative perspectives, and eliminate single-engine bias.",
        howItWorks: "When a user types a query, the meta search engine contacts multiple search engine APIs simultaneously, receives raw result feeds, strips duplicate URLs, computes an aggregated relevance score, and displays the unified list.",
        tableTitle: "SEARCH ENGINES VS. META SEARCH ENGINES",
        table: {
          headers: ["Attribute / Parameter", "Standard Search Engine (e.g. Google, Bing)", "Meta Search Engine (e.g. Dogpile, Metacrawler)"],
          rows: [
            ["Underlying Database", "Maintains its own massive multi-petabyte database index", "**Has NO database of its own**; queries external engines"],
            ["Web Crawlers / Spiders", "Builds and operates fleets of automated web crawlers", "**Has NO web crawlers**; relies entirely on third-party crawlers"],
            ["Result Generation", "Queries its internal database index directly", "Queries multiple external search engines simultaneously via API"],
            ["Coverage Scope", "Limited strictly to what its own crawlers have discovered", "Combines coverage from multiple search engine indexes"],
            ["Prominent Examples", "Google, Microsoft Bing, Yahoo, DuckDuckGo, Baidu", "**Dogpile**, **Metacrawler**, **Info.com**, **WebCrawler** (historical)"]
          ],
          colWidths: [110, 195, 201]
        },
        practicalExample: "When you search 'NIELIT Web Design Syllabus' on **Dogpile**: Dogpile submits the query to Google and Bing simultaneously. It finds that both engines return the official NIELIT portal as #1. Dogpile eliminates the duplicate and shows the verified official link at the top.",
        importantPoints: [
          "A Meta Search Engine does NOT maintain its own database index and does NOT operate web crawlers.",
          "Meta search engines submit user queries to multiple individual search engines simultaneously.",
          "Prominent examples of meta search engines include Dogpile, Metacrawler, and Info.com."
        ],
        quickRevision: "Meta search engines (e.g. Dogpile, Metacrawler) have no database or crawlers of their own; they query multiple search engines simultaneously and aggregate results."
      },
      {
        code: "8.10",
        title: "WWW Architecture & URL Anatomy",
        whatIsIt: "WWW Architecture is the structural framework of protocols, naming systems, and hyperlinked media that powers the Web. A **Uniform Resource Locator (URL)** is the standardized global address used to pinpoint the exact location of any digital resource (webpage, image, video, file) on the World Wide Web.",
        whyImportant: "URLs are the fundamental navigational coordinate system of the Web. Understanding URL anatomy enables developers to structure RESTful routing, pass query parameters, and configure secure HTTPS connections.",
        howItWorks: "A complete URL consists of 6 standardized segments: 1. Protocol Scheme, 2. Subdomain, 3. Domain Name, 4. Port Number, 5. Directory Path, 6. Resource Filename, and optional 7. Query String / Fragment.",
        tableTitle: "ANATOMY OF A COMPLETE URL BREAKDOWN",
        table: {
          headers: ["URL Segment", "Example from: `https://www.nielit.gov.in:443/student/courses.php?id=101#unit3`", "Technical Role & Functional Meaning"],
          rows: [
            ["Protocol / Scheme", "`https://`", "Hypertext Transfer Protocol Secure; specifies the encrypted communication protocol"],
            ["Subdomain", "`www`", "Host machine designation within the parent domain namespace"],
            ["Domain Name", "`nielit.gov.in`", "Unique human-readable registered address of the hosting server"],
            ["Port Number", "`:443` (Default for HTTPS; `:80` for HTTP)", "Network socket communications port on the target server"],
            ["Directory Path", "`/student/`", "Folder hierarchy path on the server file system"],
            ["Resource File", "`courses.php`", "Specific file or script being requested and executed"],
            ["Query String", "`?id=101`", "Key-value parameters passed to the server script (starts with `?`)"],
            ["Fragment Identifier", "`#unit3`", "Bookmark anchor pointing to element with `id=\"unit3\"` on the page"]
          ],
          colWidths: [110, 180, 216]
        },
        practicalExample: "When you click a link with `?course=m2&batch=2026`: The web server reads `course=m2` from the URL query string, queries the database for the M2-R5.1 batch, and returns customized course notes dynamically.",
        importantPoints: [
          "URL stands for Uniform Resource Locator.",
          "Default port for HTTP is 80; default port for HTTPS is 443.",
          "The query string begins with a question mark `?` and separates parameters with `&`.",
          "The hash symbol `#` denotes an in-page bookmark fragment identifier."
        ],
        quickRevision: "URL anatomy: `Protocol` (https://) + `Domain` (nielit.gov.in) + `Port` (:443) + `Path` (/folder/) + `File` (index.html) + `Query` (?id=1) + `Fragment` (#sec)."
      },
      {
        code: "8.11",
        title: "Browser Architecture and Rendering Engines",
        whatIsIt: "Web Browser Architecture refers to the internal modular software subsystems that coordinate to download, parse, execute, and render web documents onto a computer display. The **Rendering Engine** is the core component responsible for transforming HTML and CSS code into visible pixels.",
        whyImportant: "Understanding browser architecture helps developers write performant code that avoids layout thrashing, minimizes repaints, and works consistently across different browser rendering engines.",
        howItWorks: "Modern web browsers are structured into a 7-layer modular architecture, processing HTML to construct the DOM, CSS to build the CSSOM, combining them into a Render Tree, calculating Layout, and Painting pixels.",
        componentsTitle: "THE 7 MODULAR LAYERS OF BROWSER ARCHITECTURE",
        componentsOrTypes: [
          "1. User Interface (UI): The address bar, back/forward buttons, bookmarking menu, refresh button, and developer tools.",
          "2. Browser Engine: Marshals actions and coordinates communication between the User Interface and the Rendering Engine.",
          "3. Rendering Engine: Parses HTML and CSS to render content on screen (e.g. **Blink**, **Gecko**, **WebKit**).",
          "4. Networking: Handles HTTP/HTTPS network requests, SSL certificates, cookies, and DNS socket connections.",
          "5. JavaScript Engine (Interpreter): Parses, compiles (JIT), and executes JavaScript code (e.g. **V8** in Chrome/Edge, **SpiderMonkey** in Firefox, **JavaScriptCore** in Safari).",
          "6. UI Backend: Draws basic interface widgets like select dropdowns and windows using host operating system primitives.",
          "7. Data Persistence: Client-side storage mechanisms including `LocalStorage`, `SessionStorage`, `IndexedDB`, and Cookies."
        ],
        tableTitle: "MAJOR WEB BROWSERS & THEIR RENDERING ENGINES",
        table: {
          headers: ["Web Browser", "Primary Rendering Engine", "JavaScript Engine", "Governing Organization"],
          rows: [
            ["Google Chrome", "**Blink** (fork of WebKit)", "**V8** Engine", "Google / Chromium Project"],
            ["Microsoft Edge", "**Blink** (Chromium-based)", "**V8** Engine", "Microsoft"],
            ["Mozilla Firefox", "**Gecko**", "**SpiderMonkey**", "Mozilla Foundation"],
            ["Apple Safari", "**WebKit**", "**JavaScriptCore** (Nitro)", "Apple Inc."],
            ["Opera", "**Blink**", "**V8** Engine", "Opera Software"]
          ],
          colWidths: [110, 150, 120, 126]
        },
        practicalExample: "When Chrome renders a page: (1) Networking downloads the HTML bytes. (2) The **Blink Rendering Engine** parses HTML into the DOM tree and CSS into the CSSOM. (3) The **V8 Engine** executes JavaScript scripts. (4) Blink paints the final styled layout on screen.",
        importantPoints: [
          "The core component that converts HTML and CSS into visible pixels is the Rendering Engine.",
          "Google Chrome and Microsoft Edge use the Blink rendering engine and V8 JavaScript engine.",
          "Mozilla Firefox uses the Gecko rendering engine and SpiderMonkey JavaScript engine.",
          "Apple Safari uses the WebKit rendering engine."
        ],
        quickRevision: "Browser architecture: 7 layers including Networking, JS Engine (V8, SpiderMonkey), and Rendering Engine: Blink (Chrome/Edge), Gecko (Firefox), WebKit (Safari)."
      },
      {
        code: "8.12",
        title: "HTTP Protocol (Methods, Status Codes, HTTP vs. HTTPS)",
        whatIsIt: "HTTP (Hypertext Transfer Protocol) is the foundational application-layer communications protocol of the World Wide Web, operating on a client-server request-response model to exchange web pages, images, and data.",
        whyImportant: "Every browser action relies on HTTP. Understanding HTTP request methods and status codes is essential for debugging web applications, handling form submissions, and securing communications.",
        howItWorks: "HTTP is **Stateless** (the server retains no memory of past requests). Clients send an HTTP Request containing a Method, URL, and Headers; servers reply with an HTTP Response containing a Status Code and Body.",
        tableTitle: "CORE HTTP REQUEST METHODS",
        table: {
          headers: ["HTTP Method", "CRUD Operation Equivalent", "Safe / Idempotent", "Primary Practical Web Purpose"],
          rows: [
            ["`GET`", "Read", "Safe & Idempotent", "Requests and retrieves data from server (used when opening links or browsing pages)"],
            ["`POST`", "Create", "Unsafe & Non-Idempotent", "Submits data to server to create a new record (used in login, registration forms)"],
            ["`PUT`", "Update / Replace", "Idempotent", "Replaces or updates an existing server resource entirely"],
            ["`DELETE`", "Delete", "Idempotent", "Deletes a specified resource from the server"]
          ],
          colWidths: [90, 130, 130, 156]
        },
        tableTitle: "STANDARD HTTP STATUS CODES REFERENCE",
        table: {
          headers: ["Status Code Range", "Category Meaning", "Representative Code Examples & Technical Meanings"],
          rows: [
            ["1xx", "Informational", "100 Continue (server received initial headers)"],
            ["**2xx**", "**Success**", "**200 OK** (request succeeded, page delivered); 201 Created (resource created)"],
            ["**3xx**", "**Redirection**", "**301 Moved Permanently** (permanent redirect); 302 Found (temporary redirect); 304 Not Modified"],
            ["**4xx**", "**Client Error**", "**400 Bad Request**; **401 Unauthorized**; **403 Forbidden** (access denied); **404 Not Found** (file missing)"],
            ["**5xx**", "**Server Error**", "**500 Internal Server Error** (crash in PHP/Node code); 502 Bad Gateway; 503 Service Unavailable"]
          ],
          colWidths: [110, 130, 266]
        },
        componentsTitle: "HTTP VS. HTTPS SECURITY COMPARISON",
        componentsOrTypes: [
          "HTTP (Port 80): Plain text transmission. Data packets (passwords, credit cards) can be intercepted and read by anyone on the network (packet sniffing).",
          "HTTPS (Port 443): Hypertext Transfer Protocol Secure. Encrypts all traffic using **SSL / TLS (Transport Layer Security)** certificates, preventing eavesdropping and tampering.",
          "Visual Indicator: Browsers display a padlock icon in the address bar for valid HTTPS connections."
        ],
        practicalExample: "When you click a broken link, the server responds with **`404 Not Found`** (Client error: the file doesn't exist). When a database server crashes, the server responds with **`500 Internal Server Error`**.",
        importantPoints: [
          "HTTP is a stateless protocol operating on a client-server model.",
          "HTTP uses Port 80; HTTPS uses Port 443 with SSL/TLS encryption.",
          "`200 OK` indicates success; `301` indicates permanent redirect.",
          "`404 Not Found` is a client error indicating the requested resource does not exist.",
          "`500 Internal Server Error` indicates server-side code failure."
        ],
        quickRevision: "HTTP runs the web (stateless). Methods: GET (fetch), POST (submit). Status codes: 200 (OK), 301 (redirect), 403 (forbidden), 404 (not found), 500 (server crash). HTTPS (port 443) encrypts via SSL/TLS."
      },
      {
        code: "8.13",
        title: "Publishing Tools (FileZilla, cPanel, GitHub)",
        whatIsIt: "Web publishing tools are software applications and hosting management interfaces used by web designers to upload, manage, configure, and maintain website files on remote web servers.",
        whyImportant: "Manually copying files to remote servers without specialized tools is complex. Publishing tools provide visual drag-and-drop file transfers, database management, and automated deployments.",
        howItWorks: "Developers connect to servers using FileZilla via FTP/SFTP, manage server databases using cPanel, or deploy code automatically using GitHub Pages.",
        tableTitle: "CORE WEB PUBLISHING TOOLS COMPARED",
        table: {
          headers: ["Publishing Tool", "Software Category", "Primary Protocol / Mechanism", "Practical Web Developer Workflow"],
          rows: [
            ["**FileZilla**", "Desktop FTP Client (Free Open Source)", "FTP (Port 21) & SFTP (Port 22)", "Drag-and-drop files from local computer (left panel) to remote server `public_html` (right panel)"],
            ["**cPanel**", "Web-Based Hosting Control Panel", "HTTPS web interface (Port 2083)", "Managing databases (phpMyAdmin), email accounts, SSL certificates, DNS, and File Manager directly in browser"],
            ["**GitHub Pages**", "Git-Based Cloud Hosting Service", "Git version control / HTTPS", "Free static website hosting directly from a GitHub repository branch; ideal for student portfolios"]
          ],
          colWidths: [110, 160, 120, 116]
        },
        componentsTitle: "CONNECTING TO A WEB SERVER WITH FILEZILLA",
        componentsOrTypes: [
          "Host: The server IP address or domain name (e.g. `ftp.mywebsite.com` or `192.168.1.100`).",
          "Username: The FTP account username provided by the web hosting service.",
          "Password: The secret FTP account password.",
          "Port: `21` for standard unencrypted FTP; `22` for encrypted **SFTP (SSH File Transfer Protocol)**.",
          "Quickconnect: Button that establishes the connection and displays server directories."
        ],
        practicalExample: "You finished building an 8-unit O-Level website on your laptop: You open FileZilla, enter your server Host, Username, and Password, click 'Quickconnect', select all files from your desktop folder on the left, and drag them into `public_html` on the right. Your website is live in 60 seconds!",
        importantPoints: [
          "FileZilla is a free, cross-platform FTP client used to transfer files to web servers.",
          "FTP uses Port 21; SFTP (Secure FTP) uses Port 22.",
          "cPanel is a web-based control panel for managing hosting accounts, databases, and emails.",
          "GitHub Pages provides free static web hosting directly from Git repositories."
        ],
        quickRevision: "Publishing tools: FileZilla (drag-and-drop FTP over port 21 / SFTP port 22), cPanel (web-based server admin and database tools), GitHub Pages (free git-based static hosting)."
      }
    ],
    unitRevision: [
      "Web Publishing is the 7-phase process of deploying websites: Planning -> Design -> Development -> Testing -> Hosting -> Deployment -> Maintenance.",
      "Design principles: Simplicity (KISS), Visual Hierarchy, F-shaped scanning pattern, Mobile Responsiveness, and Fast Load Speed (<2 sec).",
      "SGML (ISO 8879:1986) is the parent metalanguage; HTML is an application of SGML, XML is a lightweight subset of SGML for data interchange.",
      "Hosting models: Shared (cheapest, shared resources), VPS (virtual isolation), Dedicated (full physical server), Cloud (elastic clustering).",
      "Interchange standards: 7-bit ASCII (128 chars), universal variable UTF-8 (1-4 bytes for all languages/emojis), MIME headers (`Content-Type`), XML.",
      "Publishing components: Domain Registrar, DNS name servers, Web Server software (Apache, Nginx, IIS), and Database servers (MySQL).",
      "Site architecture: Root folder is `public_html` (or `htdocs`); use relative paths (`images/pic.jpg`); set file permissions to 644 and directories to 755.",
      "Search engines operate in 3 stages: Crawling (spiders/bots), Indexing (database catalog), and Ranking (algorithms/PageRank). On-page SEO optimizes HTML.",
      "Meta Search Engines (Dogpile, Metacrawler) have no crawlers or database of their own; they query multiple search engines simultaneously and aggregate results.",
      "URL anatomy: Protocol (https://) + Domain (nielit.gov.in) + Port (443/80) + Path (/folder/) + File (index.html) + Query (?id=1) + Fragment (#sec).",
      "Browser architecture has 7 layers including Networking, JS Engine (V8, SpiderMonkey), and Rendering Engine: Blink (Chrome/Edge), Gecko (Firefox), WebKit (Safari).",
      "HTTP is stateless. Methods: GET (retrieve), POST (submit). Status codes: 200 (OK), 301 (redirect), 403 (forbidden), 404 (not found), 500 (server crash). HTTPS (port 443) encrypts via SSL/TLS.",
      "Publishing tools: FileZilla (FTP port 21, SFTP port 22), cPanel (web-based hosting control panel), GitHub Pages (git-based free static hosting)."
    ],
    keyTerms: [
      { term: "SEO", fullForm: "Search Engine Optimization", desc: "Process of optimizing web pages to rank higher in search engines." },
      { term: "SGML", fullForm: "Standard Generalized Markup Language", desc: "ISO standard metalanguage defining structured document markup." },
      { term: "VPS", fullForm: "Virtual Private Server", desc: "Virtual machine running isolated server software on shared physical hardware." },
      { term: "ASCII", fullForm: "American Standard Code for Information Interchange", desc: "7-bit character encoding standard representing 128 characters." },
      { term: "UTF-8", fullForm: "Unicode Transformation Format (8-bit)", desc: "Universal variable-width encoding for all world languages and symbols." },
      { term: "MIME", fullForm: "Multipurpose Internet Mail Extensions", desc: "Internet standard formatting media type headers." },
      { term: "SERP", fullForm: "Search Engine Results Page", desc: "Page displayed by search engines in response to a user's search query." },
      { term: "FTP", fullForm: "File Transfer Protocol", desc: "Network protocol used for transferring files to web servers over Port 21." },
      { term: "SFTP", fullForm: "SSH File Transfer Protocol", desc: "Encrypted file transfer protocol operating securely over SSH Port 22." }
    ]
  };
}
