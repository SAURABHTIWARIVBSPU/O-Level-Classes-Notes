# NIELIT O Level (IT) — Module M2-R5.1: Web Designing & Publishing
# UNIT 1: Introduction to Web Design — Complete Master Notes

---

## 📌 Syllabus Overview & Exam Weightage
- **Module Code:** M2-R5.1 (Web Designing & Publishing)
- **Unit 1 Name:** Introduction to Web Design
- **Exam Weightage:** Combined with Editors & HTML Basics = **25 Marks** in written examination.
- **Key Focus Areas:** Internet vs WWW architecture, DNS resolution, Client-Server model, Front-end vs Back-end, Client-side vs Server-side scripting, Responsive Web Design concepts (Viewport, Media queries), Static vs Dynamic websites.

---

# 1. Introduction of Internet (इंटरनेट का परिचय)

### 1.1 What is the Internet? (इंटरनेट क्या है?)
- The **Internet** (*Interconnected Network*) is a massive, decentralized global network of interconnected computer networks that communicate using the standard Internet Protocol Suite (**TCP/IP**).
- It connects billions of devices (computers, smartphones, IoT devices, servers, routers) worldwide across private, public, academic, business, and government networks.
- **Father of the Internet:** **Vinton Cerf** and **Bob Kahn** (co-designers of the TCP/IP protocol suite).

```
+-------------+         +-------------+         +-------------+
|   Client    | <=====> |   Router /  | <=====> | Web Server  |
|  (Browser)  | TCP/IP  |     ISP     | TCP/IP  | (Host Data) |
+-------------+         +-------------+         +-------------+
```

### 1.2 Historical Milestones of the Internet
1. **1969 — ARPANET (Advanced Research Projects Agency Network):**
   - Funded by the US Department of Defense (DoD).
   - Considered the **first operational packet-switching network** and ancestor of the modern Internet.
   - Connected 4 university nodes (UCLA, Stanford Research Institute, UC Santa Barbara, University of Utah).
2. **1974 — TCP/IP Protocol:** Vint Cerf & Bob Kahn published the specifications of TCP (Transmission Control Protocol).
3. **1983 — January 1, 1983 ("Flag Day"):** ARPANET officially adopted **TCP/IP** as its standard communications protocol, marking the official birth of the modern Internet.
4. **1989-1991 — Birth of WWW:** Tim Berners-Lee invented the World Wide Web at CERN (Switzerland).
5. **1995 — NSFNET Commercialization & Launch in India:** 
   - Public internet was launched in India on **15th August 1995** by **VSNL** (Videsh Sanchar Nigam Limited).

---

### 1.3 Key Architectural Concepts of Internet Communication

#### A. Packet Switching vs. Circuit Switching
- **Circuit Switching:** A dedicated physical communication channel is established between sender and receiver for the entire duration of the session (e.g., traditional landline telephone network). Inefficient for bursty data.
- **Packet Switching (Used by Internet):** Data is divided into smaller chunks called **packets**. Each packet carries a header (source IP, destination IP, sequence number) and payload. Packets travel independently across multiple optimal routes and are reassembled at the destination.

#### B. The TCP/IP Protocol Suite (Four-Layer Model)
The internet relies on standard protocols organized in a 4-layer model:

| Layer No. | TCP/IP Layer | Key Protocols | Primary Function |
|:---:|:---|:---|:---|
| **4** | **Application Layer** | HTTP, HTTPS, FTP, SMTP, DNS, SSH, Telnet | Provides network services directly to user applications/browsers. |
| **3** | **Transport Layer** | **TCP** (Reliable, connection-oriented), **UDP** (Fast, connectionless) | End-to-end communication, segmentation, flow and error control. |
| **2** | **Internet Layer** | **IP** (IPv4, IPv6), ICMP, ARP, RARP | Logical addressing and packet routing across networks. |
| **1** | **Network Access / Link Layer** | Ethernet, Wi-Fi (802.11), PPP, MAC | Physical transmission of raw bits/frames over physical media. |

#### C. IP Addressing (IPv4 vs. IPv6)
An **IP Address** (Internet Protocol Address) is a unique numeric identifier assigned to every device connected to a computer network.

| Feature | IPv4 (Internet Protocol v4) | IPv6 (Internet Protocol v6) |
|:---|:---|:---|
| **Address Size** | **32 bits** (4 bytes) | **128 bits** (16 bytes) |
| **Total Addresses** | ~4.29 Billion ($2^{32}$) | $2^{128}$ (virtually inexhaustible: $3.4 \times 10^{38}$) |
| **Notation / Format** | Dotted decimal (e.g., `192.168.1.1`) | Hexadecimal with colons (e.g., `2001:0db8:85a3::8a2e:0370:7334`) |
| **Sections** | 4 octets (8 bits each), separated by dots | 8 groups (16 bits each), separated by colons |
| **Header Checksum** | Present | Removed (processed at higher layers) |

#### D. ISP (Internet Service Provider)
- An entity or company that provides access to the Internet to individuals and organizations (e.g., Jio, Airtel, BSNL).
- **Hierarchy:** Tier 1 (Global backbone), Tier 2 (National/Regional ISPs), Tier 3 (Local access providers to consumers).

---

# 2. WWW — World Wide Web (वर्ल्ड वाइड वेब)

### 2.1 What is WWW?
- The **World Wide Web (WWW or W3 or the Web)** is an information system where documents and other web resources are identified by **Uniform Resource Locators (URLs)**, interlinked by hypertext links (**Hyperlinks**), and accessible over the Internet.
- **Invented by:** **Sir Tim Berners-Lee** in **1989** while working at **CERN** (European Organization for Nuclear Research) in Switzerland.
- He created:
  1. The first Web Browser & Editor (**WorldWideWeb**, later renamed *Nexus*).
  2. **HTML** (HyperText Markup Language).
  3. **HTTP** (HyperText Transfer Protocol).
  4. **URL** (Uniform Resource Locator).
  5. The first web server (**CERN httpd**) and the first website (`http://info.cern.ch` published on August 6, 1991).

> 💡 **CRITICAL EXAM DISTINCTION:**  
> - **Internet** is the *underlying global network infrastructure* (the physical hardware, cables, routers, and protocols).  
> - **WWW** is an *application-layer service* built on top of the Internet that allows sharing of hypertext documents.  
> - *Analogy:* Internet is the highway network; WWW is the traffic/cars driving on that highway.

---

### 2.2 W3C (World Wide Web Consortium)
- Founded in **October 1994** by **Tim Berners-Lee** at MIT.
- The main international standards organization for the World Wide Web.
- Formulates web specifications such as HTML, CSS, XML, SVG, WAI (Web Accessibility Initiative), etc.
- Web standards ensure cross-browser compatibility and open accessibility across devices.

---

### 2.3 URI, URL, and URN
- **URI (Uniform Resource Identifier):** A compact sequence of characters that identifies an abstract or physical resource. URI is the umbrella term.
  - **Formula:** $\text{URI} = \text{URL} \cup \text{URN}$
- **URL (Uniform Resource Locator):** Identifies a resource and specifies the *mechanism/protocol for accessing it* (where it is located).
  - *Example:* `https://www.example.com:443/courses/web-design.html?id=101#section2`
- **URN (Uniform Resource Name):** Identifies a resource *by name in a particular namespace*, without specifying how to locate it.
  - *Example:* `urn:isbn:978-0-13-407642-3`

#### Complete Anatomy of a URL:
```
https://www.nielit.gov.in:443/student/courses.php?unit=1&lang=en#syllabus
|---|   |--------------| |--| |----------------| |-------------| |------|
Protocol     Domain      Port   Path to resource   Query String   Fragment
(Scheme)    (Host Name) (HTTPS)                    (Parameters)   (Anchor)
```

1. **Protocol / Scheme (`https://`):** Rules used to retrieve the resource (`http`, `https`, `ftp`, `mailto`).
2. **Subdomain (`www`):** Specific section of the domain.
3. **Domain Name / Host (`nielit.gov.in`):** Human-friendly name of the web server.
4. **Port Number (`:443` for HTTPS, `:80` for HTTP):** Communication endpoint (usually implicit).
5. **Path (`/student/courses.php`):** Exact directory and file path on the server.
6. **Query String (`?unit=1&lang=en`):** Key-value parameters passed to the server script.
7. **Fragment Identifier / Anchor (`#syllabus`):** Bookmark pointing to an exact element `id` within the page.

---

### 2.4 HTTP vs. HTTPS
| Parameter | HTTP (HyperText Transfer Protocol) | HTTPS (HyperText Transfer Protocol Secure) |
|:---|:---|:---|
| **Security** | Plain text (vulnerable to eavesdropping & MITM attacks). | Encrypted using **TLS / SSL** (Transport Layer Security). |
| **Default Port** | **Port 80** | **Port 443** |
| **Data Integrity** | No encryption / data can be tampered. | Authenticated, encrypted, and tamper-proof. |
| **Certificate** | No SSL certificate required. | Requires SSL/TLS Certificate issued by a Certificate Authority (CA). |
| **SEO & Trust** | Marked "Not Secure" by modern browsers. | Displays padlock icon, preferred ranking on search engines. |

---

# 3. Website & Webpages (वेबसाइट और वेबपेज)

### 3.1 Definitions & Comparison

#### A. Webpage (वेबपेज)
- A single digital document accessible via a web browser on the World Wide Web.
- Written in **HTML** and styled with **CSS**, with optional interactivity powered by **JavaScript**.
- Identified by a unique individual URL.

#### B. Website (वेबसाइट)
- A collection of related, interlinked webpages, multimedia assets, and documents hosted under a single domain name.
- Accessed through a default entry page called the **Home Page** (typically `index.html` or `default.aspx` or `index.php`).

#### C. Web Server (वेब सर्वर)
- **Hardware:** A dedicated physical/cloud computer that stores website files (HTML documents, stylesheets, JavaScript files, images, videos) and database records.
- **Software:** An application (such as **Apache HTTP Server**, **Nginx**, **Microsoft IIS**, **LiteSpeed**) that listens for HTTP/HTTPS requests from clients and delivers requested files.

| Entity | Definition | Example |
|:---|:---|:---|
| **Webpage** | Single document | `https://www.example.com/about.html` |
| **Website** | Group of linked webpages under one domain | `https://www.example.com` |
| **Web Server** | Computer + Software hosting the website files | Apache / Nginx running on a cloud host |
| **Web Browser** | Client software used to view & render webpages | Google Chrome, Mozilla Firefox, Apple Safari |

---

### 3.2 Anatomy of a Webpage Structure
A standard modern webpage comprises three structural layers:
1. **Header Area (`<header>`):** Logo, navigation menu (`<nav>`), search bar.
2. **Main Content Area (`<main>`):** Articles (`<article>`), sections (`<section>`), sidebars (`<aside>`).
3. **Footer Area (`<footer>`):** Copyright notices, privacy policies, contact info, social links.

---

# 4. Working of Websites (वेबसाइट कैसे काम करती है?)

Understanding how a website functions from the moment a user types a URL to when the webpage renders on screen is a core NIELIT examination topic.

```
+-----------------------------------------------------------------------------------+
|                           STEP-BY-STEP WEBSITE WORKFLOW                           |
+-----------------------------------------------------------------------------------+

[User enters URL: https://example.com]
                │
                ▼
      1. DNS Resolution (Domain Name -> IP Address)
         Browser Cache -> OS Cache -> Router Cache -> ISP Resolver -> DNS Hierarchy
                │
                ▼
      2. TCP 3-Way Handshake & TLS Negotiation
         Client <── SYN ──> Server | Client <── SYN-ACK ──> Server | Client <── ACK ──>
         (Secure TLS encryption keys exchanged on Port 443)
                │
                ▼
      3. HTTP Request Sent by Browser
         GET /index.html HTTP/1.1
         Host: example.com
         User-Agent: Mozilla/5.0...
                │
                ▼
      4. Web Server Processing
         Web Server (Apache/Nginx) handles request -> executes Server Script (PHP/Node) -> queries Database -> generates HTML response.
                │
                ▼
      5. HTTP Response Received by Browser
         HTTP/1.1 200 OK
         Content-Type: text/html
         [Payload: HTML, CSS links, JS scripts]
                │
                ▼
      6. Client-Side Browser Rendering Pipeline
         - Parses HTML -> Creates DOM Tree (Document Object Model)
         - Parses CSS -> Creates CSSOM Tree (CSS Object Model)
         - Combines DOM + CSSOM -> Render Tree
         - Layout Stage (Calculates positions & geometry)
         - Paint & Composite Stage (Renders pixels onto screen)
```

---

### 4.1 Step 1: DNS Resolution (Domain Name System)
- Computers communicate via numerical IP addresses (`93.184.216.34`), but humans remember alphanumeric domain names (`example.com`).
- **DNS** acts as the **"Phonebook of the Internet"**, resolving human-friendly domain names to machine-readable IP addresses.
- **Resolution Order:**
  1. **Browser DNS Cache**
  2. **Operating System DNS Cache / `hosts` file**
  3. **Router DNS Cache**
  4. **ISP DNS Resolver (Recursive Resolver)**
  5. **Root Name Servers (`.` root)**
  6. **TLD Name Servers (`.com`, `.in`, `.org`)**
  7. **Authoritative Name Server** (Returns final IP).

---

### 4.2 Step 2: TCP 3-Way Handshake
Before data transmission, TCP creates a reliable connection using three packets:
1. **SYN (Synchronize):** Client sends a SYN packet with an initial sequence number.
2. **SYN-ACK (Synchronize-Acknowledge):** Server acknowledges receipt and sends its own SYN packet.
3. **ACK (Acknowledge):** Client acknowledges the server's SYN packet. Connection is established!

---

### 4.3 Step 3 & 4: HTTP Request & Response Cycle
- **HTTP Methods:**
  - `GET`: Requests data from a specified resource (cached, visible in URL parameters).
  - `POST`: Submits data to be processed to a specified resource (secure form submissions, payload in request body).
  - `PUT`: Replaces all current representations of the target resource with the uploaded content.
  - `DELETE`: Deletes the specified resource.
  - `HEAD`: Same as GET, but transfers only HTTP headers without the response body.

- **Standard HTTP Response Status Codes:**
  - **`1xx` (Informational):** Request received, continuing process (e.g., `100 Continue`).
  - **`2xx` (Success):** Action successfully received and processed (e.g., `200 OK`, `201 Created`).
  - **`3xx` (Redirection):** Further action required to complete request (e.g., `301 Moved Permanently`, `302 Found / Temporary Redirect`, `304 Not Modified`).
  - **`4xx` (Client Error):** Request contains bad syntax or cannot be fulfilled (e.g., `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `408 Request Timeout`).
  - **`5xx` (Server Error):** Server failed to fulfill an apparently valid request (e.g., `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout`).

---

# 5. Front End vs. Back End (फ्रंट एंड बनाम बैक एंड)

Modern web development is divided into two core disciplines:

```
┌─────────────────────────────────────────────────────────────┐
│                       THE WEB STACK                         │
├──────────────────────────────┬──────────────────────────────┤
│          FRONT END           │           BACK END           │
│        (Client-Side)         │        (Server-Side)         │
│  "What the user sees & acts" │ "What happens behind scene"  │
├──────────────────────────────┼──────────────────────────────┤
│ • HTML5 (Structure)          │ • Programming: Node.js,      │
│ • CSS3 (Design & Layout)     │   PHP, Python, Java, C#      │
│ • JavaScript (Interactivity) │ • Databases: MySQL, MongoDB, │
│ • Frameworks: React, Angular,│   PostgreSQL, Oracle         │
│   Vue, W3.CSS, Bootstrap     │ • Server: Apache, Nginx, IIS │
│ • Runs inside user's Browser │ • Business Logic & Security  │
└──────────────────────────────┴──────────────────────────────┘
```

### Detailed Comparison Table:

| Feature / Criteria | Front End (Client-Side) | Back End (Server-Side) |
|:---|:---|:---|
| **Definition** | The graphical user interface (UI) and user experience (UX) that users interact with directly. | The data access layer, server logic, database manipulation, and application authentication. |
| **Execution Environment**| Executes locally on the user's client machine inside the **Web Browser**. | Executes remotely on the **Web / Application Server**. |
| **Core Technologies** | **HTML5**, **CSS3**, **JavaScript**, WebAssembly. | **Node.js, PHP, Python, Java, Ruby, ASP.NET**. |
| **Databases Interaction** | Cannot securely query databases directly. | Connects directly to databases (**MySQL, PostgreSQL, MongoDB, SQLite**). |
| **Primary Goal** | Visual aesthetics, responsive design, fast UI feedback, accessibility. | Business logic processing, secure data storage, API endpoints, scalability. |
| **Visibility of Code** | Source code is public and viewable via browser (*Right Click -> View Page Source*). | Source code is private and protected on the server; client only sees generated output. |

---

# 6. Client-Side and Server-Side Scripting Languages

### 6.1 What is a Scripting Language?
- A scripting language is a programming language that is interpreted at runtime rather than compiled into standalone machine code binaries beforehand.
- In web development, scripts are used to create dynamic features, validate inputs, and process user requests.

```
       CLIENT-SIDE SCRIPTING                       SERVER-SIDE SCRIPTING
 [Browser executes JS locally]             [Server executes PHP/Python/Node]
               │                                           │
  - Validates form instantly                  - Verifies credentials in Database
  - Dynamic UI animations / sliders           - Processes credit card payments
  - Manipulates DOM elements                  - Generates custom HTML for user
  - Lightens server load                      - Keeps business algorithms secret
```

### 6.2 Comparison: Client-Side vs Server-Side Scripting

| Criteria | Client-Side Scripting | Server-Side Scripting |
|:---|:---|:---|
| **Where Code Runs** | User's Web Browser (Client machine). | Central Web Server (Host machine). |
| **Popular Languages** | **JavaScript (ECMAScript)**, TypeScript, VBScript (obsolete). | **PHP, Python (Django/Flask), Node.js, Java (JSP/Spring), Ruby on Rails, C# (ASP.NET)**. |
| **Processing Speed** | Extremely fast for UI/validation (zero network round-trip). | Depends on network latency, database query speed, and server load. |
| **Security** | Low: Source code is visible to anyone; data can be modified on client. | High: Code and algorithms remain confidential on server. |
| **Database Access** | Cannot directly and safely connect to backend databases. | Can connect directly to SQL/NoSQL databases to perform CRUD operations. |
| **Server Load** | Reduces server workload by offloading execution to client. | Increases server CPU/RAM usage for every incoming client request. |
| **Browser Dependency**| Depends on browser compatibility and JavaScript being enabled. | Independent of client browser capabilities (delivers plain HTML). |

---

# 7. Responsive Web Designing (RWD - रिस्पॉन्सिव वेब डिज़ाइन)

### 7.1 What is Responsive Web Design?
- **Responsive Web Design (RWD)** is an approach to web design that makes web pages render well and adapt automatically to a variety of devices, screen sizes, orientations (portrait/landscape), and resolutions (desktops, laptops, tablets, smartphones, smart TVs).
- **Term Coined By:** **Ethan Marcotte** in May **2010** in an article on *A List Apart*.

### 7.2 The Three Fundamental Pillars of RWD (Ethan Marcotte)
1. **Fluid / Flexible Grids:** Using proportional units (**percentages `%`**, **`vw`**, **`vh`**, **`fr`**) instead of fixed units (**pixels `px`**) for layouts.
2. **Flexible / Fluid Images & Media:** Images that scale within their containing element using CSS rule:
   ```css
   img {
       max-width: 100%;
       height: auto;
   }
   ```
3. **CSS3 Media Queries:** Applying conditional CSS rules based on device characteristics (screen width, resolution, aspect ratio).

---

### 7.3 The Essential Viewport Meta Tag
Without the viewport meta tag, mobile browsers assume a default desktop screen width (typically `980px`) and scale the entire page down, making text microscopic.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: Sets the width of the page to follow the physical screen-width of the device.
- `initial-scale=1.0`: Sets the initial zoom level when the page is first loaded by the browser (1:1 pixel scale).

---

### 7.4 CSS3 Media Queries Syntax & Breakpoints

```css
/* Base styles (Mobile-first default) */
body {
    font-size: 14px;
}

/* Tablet screens (Min-width: 768px) */
@media screen and (min-width: 768px) {
    body {
        font-size: 16px;
    }
    .container {
        width: 720px;
    }
}

/* Desktop screens (Min-width: 1024px) */
@media screen and (min-width: 1024px) {
    body {
        font-size: 18px;
    }
    .container {
        width: 960px;
    }
}
```

#### Mobile-First vs. Desktop-First Approach:
- **Mobile-First (Recommended Standard):** Write default CSS for smallest mobile screens first, then progressively enhance layout using `min-width` media queries for larger displays.
- **Desktop-First:** Write styles for full desktop screens first, then scale down using `max-width` media queries for smaller devices.

---

# 8. Types of Websites: Static vs. Dynamic Websites (स्टैटिक बनाम डायनामिक वेबसाइट)

Websites are broadly categorized into two fundamental architectures:

```
┌──────────────────────────────────────┐     ┌────────────────────────────────────────────────────────┐
│            STATIC WEBSITE            │     │                    DYNAMIC WEBSITE                     │
├──────────────────────────────────────┤     ├────────────────────────────────────────────────────────┤
│ Client sends GET request             │     │ Client sends GET/POST request                          │
│               │                      │     │               │                                        │
│               ▼                      │     │               ▼                                        │
│ Server finds pre-written .html file  │     │ Server executes script (PHP/Node/Python)               │
│               │                      │     │               │                                        │
│               ▼                      │     │               ▼                                        │
│ Returns SAME file directly to client │     │ Script queries Database (MySQL/Mongo)                  │
│                                      │     │               │                                        │
│                                      │     │               ▼                                        │
│                                      │     │ Generates CUSTOM HTML on-the-fly & sends to client     │
└──────────────────────────────────────┘     └────────────────────────────────────────────────────────┘
```

### Comprehensive Comparison Matrix:

| Feature / Parameter | Static Website | Dynamic Website |
|:---|:---|:---|
| **Content Delivery** | Fixed, pre-built content. Every visitor receives the exact same HTML/CSS file. | Personalized, interactive content generated on-the-fly based on user input, time, or session. |
| **File Extensions** | `.html`, `.htm`, `.css`, `.js` | `.php`, `.jsp`, `.asp`, `.aspx`, `.py`, `.js` |
| **Database Requirement** | No database needed. All data is hardcoded in HTML. | Requires database integration (**MySQL, PostgreSQL, MongoDB**) to store and retrieve content. |
| **Server Requirements** | Minimal server capabilities (simple static file host like GitHub Pages, Netlify, Apache). | Requires server-side runtime environments (PHP interpreter, Node.js, Python runtime) + Database servers. |
| **Development Complexity** | Very simple to create and host; ideal for beginners. | Complex; requires programming logic, database modeling, and security measures. |
| **Speed & Performance** | Extremely fast because pre-rendered HTML files are served directly without server computation. | Slightly slower due to script execution, database queries, and dynamic rendering. |
| **Cost to Host & Maintain**| Very low / Often free. | Higher hosting cost due to server resources and database maintenance. |
| **Updating Content** | Difficult for non-technical users; requires editing code and re-uploading HTML files. | Easy for non-technical users through a **CMS (Content Management System)** like WordPress. |
| **Best Used For** | Portfolios, brochure sites, resume sites, landing pages, static documentation. | E-commerce (Amazon), social networks (Facebook), banking portals, news portals, web applications. |

---

# 9. Summary & Quick Revision Formula Sheet for Unit 1

| Term / Concept | Creator / Year / Protocol / Key Fact |
|:---|:---|
| **Internet Founded** | ARPANET (1969) $\rightarrow$ TCP/IP Flag Day (January 1, 1983) by Vint Cerf & Bob Kahn |
| **WWW Invented** | 1989 by Sir Tim Berners-Lee at CERN (Switzerland) |
| **W3C Founded** | October 1994 by Tim Berners-Lee at MIT |
| **Public Internet in India**| August 15, 1995 by VSNL |
| **HTTP Default Port** | Port 80 (Unencrypted) |
| **HTTPS Default Port** | Port 443 (Encrypted with SSL/TLS) |
| **IPv4 Address Size** | 32 bits (4 octets, e.g., 192.168.1.1) |
| **IPv6 Address Size** | 128 bits (8 groups of 4 hex digits) |
| **RWD Term Coined By** | Ethan Marcotte (2010) — Grids + Images + Media Queries |
| **Standard Viewport Tag** | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| **HTTP Status 200** | Success / OK |
| **HTTP Status 404** | Page Not Found (Client Error) |
| **HTTP Status 500** | Internal Server Error |
| **Front End Core Trio** | HTML (Structure), CSS (Presentation), JavaScript (Behavior) |

---
