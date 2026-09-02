// Unit 1: Introduction to Computer - Tutorial & Textbook Grade Content
export function getUnit1Canonical() {
  return {
    unitNumber: 1,
    title: "Introduction to Computer",
    officialSection: "1.0 - 1.8",
    totalHours: 7,
    theoryHours: 3,
    practicalHours: 4,
    introduction: "Computers are electronic data processing machines that have transformed modern society, science, and industry. This foundational unit covers the basic anatomy of computer systems, the fundamental Input-Process-Output (IPO) cycle, the technological evolution across five generations, hardware components (CPU, memory, input/output peripherals), software classifications, open-source principles, and modern mobile platforms.",
    whatYouWillLearn: [
      "The working of the IPO (Input-Process-Output) architectural cycle and core computer characteristics (Speed, Accuracy, GIGO, Diligence, Storage).",
      "The historical evolution from early mechanical calculators to the 5 modern electronic generations.",
      "Modern IT gadgets including smartphones, smartwatches, tablet PCs, and drones.",
      "The internal architecture of the CPU (ALU, Control Unit, Registers) and peripheral devices (Keyboards, Mice, OMR, OCR, MICR, Printers, Plotters).",
      "Memory hierarchy: Primary RAM (SRAM/DRAM) vs ROM (PROM/EPROM/EEPROM), Cache memory, and binary measurement units from Bits to Terabytes.",
      "Software classification: System Software (OS, Device Drivers, Compilers vs Interpreters), Application Software, and Utility Software.",
      "Open Source Software (FOSS/GPL) vs Proprietary Software and licensing types.",
      "Mobile operating systems (Android, iOS) and app classifications (Native, Web, Hybrid)."
    ],
    topics: [
      {
        code: "1.1",
        title: "Computer and Latest IT Gadgets",
        whatIsIt: "A computer is an automatic, programmable electronic machine that accepts raw data as input, stores and processes it according to pre-defined instructions (algorithms), and produces meaningful information as output. Modern IT gadgets are miniaturized, portable microcomputers equipped with sensors and wireless communication capabilities designed for specialized personal and commercial tasks.",
        whyImportant: "Computers eliminate human calculation errors, automate repetitive calculations, and handle enormous data volumes at speeds impossible for manual processing. Understanding their fundamental architecture is the first prerequisite for digital literacy.",
        howItWorks: "Every computer system operates on the four-stage IPO (Input-Process-Output-Storage) cycle: Raw data enters through input hardware, the Central Processing Unit (CPU) interprets and calculates data, processed results are displayed via output devices, and data is saved to storage media for future access.",
        diagramType: "ipo-cycle",
        componentsTitle: "CORE CHARACTERISTICS OF MODERN COMPUTERS",
        componentsOrTypes: [
          "High Speed: Computers execute millions of instructions per second, measured in MIPS (Million Instructions Per Second) or FLOPS for scientific supercomputers.",
          "High Accuracy & GIGO: Computers perform calculations with 100% precision. The GIGO (Garbage In, Garbage Out) principle dictates that incorrect output is always due to faulty human input or flawed software logic, not machine error.",
          "Diligence: Free from fatigue, boredom, or loss of concentration, a computer executes millions of operations continuously without degradation in quality.",
          "Versatility: A computer seamlessly switches between diverse tasks, such as word processing, financial accounting, video rendering, and internet communications.",
          "Large Storage Capacity: Stores terabytes of digital data in compact electronic, magnetic, and optical media.",
          "Zero IQ & No Emotions: A computer cannot take independent initiative or feel emotions; it strictly follows programmed human instructions."
        ],
        tableTitle: "OVERVIEW OF MODERN IT GADGETS",
        table: {
          headers: ["IT Gadget Category", "Core Technologies Used", "Primary Practical Applications"],
          rows: [
            ["Smartphones", "ARM Processors, 5G Modems, Touchscreens", "Voice/video communication, mobile banking (UPI), web browsing, GPS navigation"],
            ["Smartwatches & Bands", "Optical PPG Sensors, Accelerometers, Bluetooth", "Heart rate tracking, SpO2 monitoring, step counting, notifications"],
            ["Tablet Computers", "Capacitive Touch, Stylus Digitizers, Flash Storage", "Digital drawing, e-learning, digital document review, multimedia consumption"],
            ["Drones (UAVs)", "Gyroscopes, GPS Autopilots, 4K Camera Gimbals", "Aerial photography, agricultural spraying, bridge inspection, emergency payload delivery"]
          ],
          colWidths: [130, 160, 221]
        },
        practicalExample: "Consider generating a monthly sales invoice in an office:\n1. Input: The cashier enters item codes and quantities using a barcode scanner and keyboard.\n2. Processing: The CPU multiplies price by quantity, applies GST percentage, and calculates the total payable amount.\n3. Output: The laser printer produces a clean physical invoice on paper while the monitor displays the bill.\n4. Storage: The transaction details are saved into the hard drive database for future accounting audits.",
        importantPoints: [
          "The fundamental operational cycle of all computers is IPO (Input -> Process -> Output).",
          "GIGO stands for Garbage In, Garbage Out.",
          "Processing speed is measured in MIPS (Million Instructions Per Second).",
          "Computers possess Zero IQ and rely entirely on programmed instructions.",
          "Smartwatches utilize optical PPG (photoplethysmography) sensors for health telemetry."
        ],
        quickRevision: "Computers follow the Input-Process-Output-Storage sequence. They are fast, accurate (GIGO), diligent, and versatile, but possess Zero IQ. IT gadgets represent miniaturized portable computing power."
      },
      {
        code: "1.2",
        title: "Evolution of Computers & Applications",
        whatIsIt: "The evolution of computers is the continuous historical transition from manual and mechanical calculation aids to electronic, high-speed digital computers classified into five distinct technological generations based on their core switching circuitry.",
        whyImportant: "Tracing computing history helps understand how hardware miniaturization, increased processing speed, and software evolution led from room-sized vacuum tube machines to modern pocket-sized smartphones and artificial intelligence.",
        howItWorks: "Each computer generation is defined by a major hardware breakthrough: Vacuum tubes gave way to solid-state transistors, which were condensed into silicon Integrated Circuits (ICs), then microprocessors (VLSI/ULSI), and finally modern AI-driven parallel architectures.",
        tableTitle: "THE FIVE GENERATIONS OF ELECTRONIC COMPUTERS",
        table: {
          headers: ["Generation & Period", "Primary Switching Component", "Main Memory / Storage", "Programming Languages", "Prominent Machine Examples"],
          rows: [
            ["1st Gen (1940-1956)", "Vacuum Tubes (Thermionic Valves)", "Magnetic Drums, Punched Cards", "Machine Language (Binary 0s & 1s)", "ENIAC, EDVAC, UNIVAC-1, IBM 701"],
            ["2nd Gen (1956-1963)", "Transistors (Bell Labs 1947)", "Magnetic Core, Magnetic Tapes", "Assembly Language, Early FORTRAN, COBOL", "IBM 1401, IBM 1620, CDC 1604"],
            ["3rd Gen (1964-1971)", "Integrated Circuits (ICs) (Jack Kilby)", "Magnetic Core, Semiconductor RAM", "High-Level Languages (BASIC, Pascal, C)", "IBM System/360, PDP-8, CDC 6600"],
            ["4th Gen (1971-Present)", "Microprocessors (VLSI & LSI Chips)", "Semiconductor RAM, ROM, Hard Disks", "C++, Python, Java, SQL, Graphical OS", "Apple Macintosh, IBM PC, Modern Laptops"],
            ["5th Gen (Present & Beyond)", "Ultra Large Scale Integration (ULSI) & AI", "High-Speed SSDs, Cloud, Optical Discs", "Natural Language, AI/ML Frameworks", "Supercomputers (PARAM, Frontier), AI Systems"]
          ],
          colWidths: [95, 125, 105, 95, 91]
        },
        componentsTitle: "HISTORICAL MILESTONES & PIONEERS",
        componentsOrTypes: [
          "Abacus (~3000 BC): Earliest mechanical counting frame with beads on parallel rods used for arithmetic addition and subtraction.",
          "Pascaline (1642): Invented by Blaise Pascal; the first mechanical gear-driven calculator capable of addition and subtraction.",
          "Analytical Engine (1837): Designed by Charles Babbage; featured a processing unit ('Mill') and memory ('Store'). Charles Babbage is recognized as the Father of Computer.",
          "Ada Lovelace: The world's first computer programmer, who created the first mathematical algorithm for Babbage's Analytical Engine.",
          "ENIAC (1946): Electronic Numerical Integrator and Computer, developed by J. Presper Eckert and John Mauchly at UPenn; the first general-purpose electronic digital computer."
        ],
        practicalExample: "In the 1st Generation, programming the ENIAC required engineers to physically rewire huge plugboards and flip thousands of manual switches using binary code. Today in the 4th/5th generation, a student writes simple English-like Python code in a text editor, and the compiler automatically converts it into billions of processor calculations in a fraction of a second.",
        importantPoints: [
          "Father of the Computer: Charles Babbage (designed the Analytical Engine in 1837).",
          "First Computer Programmer: Lady Ada Lovelace.",
          "1st Gen: Vacuum Tubes | 2nd Gen: Transistors | 3rd Gen: Integrated Circuits (ICs) | 4th Gen: VLSI / Microprocessors | 5th Gen: ULSI & AI.",
          "ENIAC (1946) was the first general-purpose electronic digital computer.",
          "Jack Kilby invented the Integrated Circuit (IC) in 1958 at Texas Instruments."
        ],
        quickRevision: "Computing evolved across 5 generations: 1G (Vacuum Tubes), 2G (Transistors), 3G (ICs), 4G (Microprocessors/VLSI), and 5G (ULSI/AI). Charles Babbage is the Father of Computer."
      },
      {
        code: "1.3",
        title: "IT Gadgets and Their Applications",
        whatIsIt: "Information Technology (IT) gadgets are portable, specialized electronic devices containing embedded microcontrollers, firmware, and input/output sensors built to perform dedicated digital tasks such as biometric monitoring, remote communication, media capture, and automation.",
        whyImportant: "IT gadgets bridge the gap between fixed desktop computing and real-world mobile lifestyles, enabling real-time healthcare monitoring, smart agriculture, digital communication, and interactive learning.",
        howItWorks: "An IT gadget uses onboard sensors (e.g., optical PPG heart sensors, GPS receivers, gyroscopes) to capture environmental or physical data, an internal low-power microprocessor to process the signals, and wireless transceivers (Bluetooth, Wi-Fi) to transmit information to mobile apps or cloud platforms.",
        componentsTitle: "FUNCTIONAL DOMAINS OF IT GADGETS",
        componentsOrTypes: [
          "Wearable Health & Fitness Gadgets: Smart fitness bands and smartwatches continuously track resting heart rate, blood oxygen (SpO2), sleep quality, and daily step activity.",
          "E-Book Readers (Amazon Kindle): Use specialized Electronic Ink (E-Ink) reflective displays that simulate real printed paper without emitting backlight glare, extending battery endurance to several weeks.",
          "Smart Home Audio & Voice Assistants: Devices like Amazon Echo (Alexa) and Google Nest receive spoken acoustic requests, process natural language via cloud AI, and trigger smart home lights, switches, and alarms.",
          "Unmanned Aerial Vehicles (Drones): Quadcopters equipped with GPS stabilization and optical cameras used for land surveying, precision agriculture crop spraying, infrastructure inspections, and emergency cargo delivery."
        ],
        practicalExample: "A patient wears a smartwatch with an ECG sensor. While walking, the optical sensor detects an irregular heartbeat rhythm (arrhythmia). The embedded processor immediately sends a vibration alert to the user's wrist and transmits the emergency telemetry to the doctor's phone via Bluetooth and cellular networks.",
        importantPoints: [
          "E-Readers utilize E-Ink (Electronic Ink) technology to eliminate screen glare and maximize battery life.",
          "Drones are technically classified as UAVs (Unmanned Aerial Vehicles).",
          "Smart wearable devices communicate primarily via low-energy Bluetooth (BLE) and Wi-Fi."
        ],
        quickRevision: "IT gadgets include smart wearables, E-Ink readers, voice assistants, and UAV drones. They rely on embedded sensors, low-power processing, and wireless connectivity."
      },
      {
        code: "1.4",
        title: "Hardware: Central Processing Unit, Input & Output Devices",
        whatIsIt: "Computer hardware represents all the tangible, physical machinery, electronic circuits, magnetic storage platters, and electromechanical peripheral devices that comprise a computer system.",
        whyImportant: "Software cannot execute without hardware. The Central Processing Unit (CPU) acts as the brain that directs the entire system, while input and output devices allow humans to communicate and interact with digital programs.",
        howItWorks: "Input devices convert human actions (typing, clicking, voice) into digital binary signals. The CPU processes these signals through its internal ALU, Control Unit, and Registers. Finally, output devices convert binary data back into human-readable text, images, printouts, or sound.",
        diagramType: "cpu-architecture",
        componentsTitle: "1. CENTRAL PROCESSING UNIT (CPU) COMPONENTS",
        componentsOrTypes: [
          "Arithmetic Logic Unit (ALU): Performs arithmetic computations (+, -, *, /) and logical comparison decisions (=, <, >, <=, >=, !=, AND, OR, NOT).",
          "Control Unit (CU): The central nervous system of the CPU. Fetches instructions from memory, decodes operation codes (opcodes), and generates micro-timing electrical signals directing data flow.",
          "Registers: Microscopic, ultra-fast temporary storage locations within the CPU core (e.g., Accumulator AC, Program Counter PC, Instruction Register IR, Memory Address Register MAR)."
        ],
        tableTitle: "INPUT AND OUTPUT PERIPHERALS CLASSIFICATION",
        table: {
          headers: ["Category", "Device Name", "Working Mechanism & Technology", "Key Exam Fact / Specification"],
          rows: [
            ["Input Device", "Keyboard", "Mechanical or membrane switch matrix (QWERTY layout)", "Standard layout contains 104 to 108 keys (Function keys F1-F12)"],
            ["Input Device", "Mouse", "Optical LED/laser tracking sensor with buttons and scroll wheel", "Invented by Douglas Engelbart in 1964 using a wooden casing"],
            ["Input Device", "OMR", "Optical Mark Recognition detects pencil/pen dark marks on sheets", "Used for evaluating objective competitive examination answer sheets"],
            ["Input Device", "OCR", "Optical Character Recognition converts scanned bitmap text into editable text", "Transforms scanned physical books into searchable digital documents"],
            ["Input Device", "MICR", "Magnetic Ink Character Recognition reads iron-oxide magnetized numbers", "Reads the 9-digit code on bank cheques (City + Bank + Branch)"],
            ["Output Device", "Monitor (VDU)", "Visual Display Unit using LCD, LED, or OLED pixel arrays", "Clarity determined by Resolution (e.g. 1920x1080) and Aspect Ratio"],
            ["Output Device", "Impact Printer", "Mechanical hammers strike inked ribbon against paper physically", "Slow, noisy, low resolution, but creates carbon copies (Dot Matrix)"],
            ["Output Device", "Non-Impact Printer", "Electrostatic toner powder (Laser) or heated micro-droplets (Inkjet)", "Fast, silent, high resolution measured in DPI (Laser/Inkjet)"],
            ["Output Device", "Plotter", "Moves mechanical pens across wide-format paper rolls", "Used for vector engineering blueprints, CAD drawings, and flex banners"]
          ],
          colWidths: [75, 80, 190, 166]
        },
        practicalExample: "When you sign and deposit a cheque at a bank counter, the teller runs the cheque through an MICR reader machine. The machine detects the magnetic iron-oxide ink printed at the bottom and reads the 9-digit code in milliseconds without typing errors.",
        importantPoints: [
          "The CPU consists of three primary parts: ALU (Arithmetic Logic Unit), CU (Control Unit), and Registers.",
          "Douglas Engelbart invented the computer mouse in 1964.",
          "Printer resolution and image sharpness are measured in DPI (Dots Per Inch).",
          "Printer printing speed is measured in PPM (Pages Per Minute) or CPS (Characters Per Second).",
          "MICR codes on bank cheques consist of 9 digits (First 3 = City Code, Middle 3 = Bank Code, Last 3 = Branch Code).",
          "Dot Matrix is an Impact printer; Laser and Inkjet are Non-Impact printers."
        ],
        quickRevision: "CPU = ALU + Control Unit + Registers. Input devices capture data (Keyboard, Mouse, OMR, OCR, MICR). Output devices present information (Monitors, Laser/Inkjet Printers measured in DPI, Plotters)."
      },
      {
        code: "1.5",
        title: "Computer Memory and Storage Devices",
        whatIsIt: "Computer memory refers to the electronic semiconductor circuits and physical magnetic/optical/flash media that store binary data (0s and 1s) and software instructions either temporarily during processing or permanently for long-term archival.",
        whyImportant: "Processors execute instructions at nanosecond speeds. Without a structured memory hierarchy ranging from lightning-fast cache to massive secondary hard drives, computer operations would experience severe bottlenecks.",
        howItWorks: "Digital storage operates in a tiered hierarchy: The CPU first searches internal Registers, then ultra-fast SRAM Cache memory, then primary DRAM RAM. If data is not present in RAM, it is retrieved from secondary storage (SSD/HDD) and loaded into RAM.",
        diagramType: "memory-hierarchy",
        tableTitle: "PRIMARY MEMORY VS. SECONDARY STORAGE",
        table: {
          headers: ["Attribute", "Primary Memory (Main RAM / ROM)", "Secondary Memory (Storage: SSD, HDD, Flash)"],
          rows: [
            ["Direct CPU Access", "Directly accessed by the CPU via the memory bus", "Not directly accessed; data must load into RAM first"],
            ["Volatility", "RAM is Volatile (loses contents on power off); ROM is Non-Volatile", "Non-Volatile (retains saved data permanently without power)"],
            ["Speed", "Ultra-fast access time (measured in nanoseconds)", "Slower access time (measured in milliseconds or microseconds)"],
            ["Cost & Capacity", "High cost per gigabyte; smaller capacities (8 GB to 64 GB)", "Low cost per gigabyte; massive capacities (512 GB to 4 TB+)"]
          ],
          colWidths: [95, 208, 208]
        },
        componentsTitle: "MEMORY MEASUREMENT UNITS HIERARCHY",
        componentsOrTypes: [
          "Bit (b): The smallest fundamental unit of computer data, representing a single binary digit (0 or 1).",
          "Nibble: A group of 4 Bits (e.g., 1011).",
          "Byte (B): A group of 8 Bits. A single byte stores exactly one alphanumeric character (e.g., the letter 'A').",
          "1 Kilobyte (KB) = 1,024 Bytes (2^10 Bytes).",
          "1 Megabyte (MB) = 1,024 Kilobytes (2^20 Bytes).",
          "1 Gigabyte (GB) = 1,024 Megabytes (2^30 Bytes).",
          "1 Terabyte (TB) = 1,024 Gigabytes (2^40 Bytes).",
          "1 Petabyte (PB) = 1,024 Terabytes (2^50 Bytes)."
        ],
        practicalExample: "When you open a LibreOffice Writer document, the file is copied from the permanent Hard Disk Drive into primary RAM so the CPU can edit it instantly. If the computer suddenly loses power before you click 'Save', the changes in volatile RAM disappear, but the original file on the non-volatile Hard Drive remains safe.",
        importantPoints: [
          "1 Byte = 8 Bits | 1 Nibble = 4 Bits.",
          "1 KB = 1024 Bytes | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB.",
          "RAM (Random Access Memory) is Volatile; ROM (Read Only Memory) is Non-Volatile.",
          "SRAM is used to build fast CPU Cache memory; DRAM is used for main system memory.",
          "BIOS / UEFI firmware is stored inside ROM and executes the POST (Power-On Self-Test) routine upon startup.",
          "Standard CD capacity is ~700 MB; standard DVD capacity is ~4.7 GB; Blu-ray Disc capacity is ~25 GB (Single Layer)."
        ],
        quickRevision: "Memory is structured hierarchically: Registers > Cache > RAM > SSD/HDD. 8 bits = 1 Byte. 1024 multiplier defines binary units (KB, MB, GB, TB). RAM is volatile; ROM and SSD/HDD are non-volatile."
      },
      {
        code: "1.6",
        title: "Software: System, Application & Utility Software",
        whatIsIt: "Software is the complete collection of organized programs, procedures, rules, algorithms, and documentation that instruct computer hardware on how to execute specific tasks.",
        whyImportant: "Hardware consists only of unguided electronic circuits. Software provides the intelligence and instructions that make computers capable of executing word processing, graphics design, communication, and system operations.",
        howItWorks: "Software operates at different layers: System Software interacts directly with the underlying hardware, providing an operating environment upon which Application Software runs to serve human users, supported by Utility Software for system maintenance.",
        diagramType: "software-tree",
        componentsTitle: "THREE MAJOR SOFTWARE CATEGORIES",
        componentsOrTypes: [
          "1. System Software: Directly manages and operates computer hardware resources while establishing a foundational execution platform for user software. Includes Operating Systems (Ubuntu, Windows, macOS), Device Drivers, and Language Translators.",
          "2. Application Software: End-user productivity programs designed to perform specific business, scientific, or personal tasks. Includes Word Processors (LibreOffice Writer), Spreadsheets (LibreOffice Calc), Presentation tools (LibreOffice Impress), and Web Browsers.",
          "3. Utility Software: Maintenance and housekeeping programs designed to analyze, configure, optimize, protect, and maintain computer stability. Includes Antivirus tools, Disk Defragmenters, File Compression tools (7-Zip, WinRAR), and Backup utilities."
        ],
        tableTitle: "LANGUAGE TRANSLATORS: COMPILER VS. INTERPRETER VS. ASSEMBLER",
        table: {
          headers: ["Translator Type", "Input Source Code", "Translation Methodology", "Error Reporting & Execution Speed"],
          rows: [
            ["Compiler", "High-Level Language (C, C++)", "Scans and translates the entire source code program into machine language object code in a single pass", "Displays all syntax errors together after compilation; produces fast executable .exe files"],
            ["Interpreter", "High-Level Language (Python, JS)", "Translates and executes source code line-by-line sequentially", "Stops immediately upon encountering the first error; slower execution as translation occurs at runtime"],
            ["Assembler", "Low-Level Assembly Language", "Converts mnemonic assembly instructions (MOV, ADD, JMP) into raw binary machine code", "Direct 1-to-1 low-level conversion; highly optimized for specific CPU hardware architectures"]
          ],
          colWidths: [80, 120, 165, 146]
        },
        practicalExample: "When you install an external printer to your PC, the Operating System cannot communicate with it until you install its specific 'Device Driver' (System Software). You then open LibreOffice Writer (Application Software) to type your letter. If your hard drive becomes cluttered over time, you run Disk Cleanup (Utility Software) to remove temporary files.",
        importantPoints: [
          "Operating System is the most fundamental System Software.",
          "Compilers translate the entire source code in a single pass into machine code (.exe).",
          "Interpreters translate and execute source code line-by-line sequentially.",
          "Assemblers convert low-level Assembly mnemonic code into binary machine language.",
          "Disk Defragmenter, Antivirus, and 7-Zip are classic examples of Utility Software."
        ],
        quickRevision: "Software is categorized into System Software (OS, Drivers, Translators), Application Software (LibreOffice Writer, Calc), and Utility Software (Antivirus, Defragmenter, Compression)."
      },
      {
        code: "1.7",
        title: "Open Source and Proprietary Software",
        whatIsIt: "Software distribution models are defined by how their underlying human-readable source code is licensed to the public: Open Source software provides open access to its source code, whereas Proprietary software restricts source code access to the copyright owner.",
        whyImportant: "Understanding software licensing is critical for legal compliance, security evaluation, and educational adoption. NIELIT examinations emphasize Free and Open Source Software (FOSS) such as Ubuntu Linux and LibreOffice.",
        howItWorks: "Open Source developers release their code under public licenses (such as GNU GPL, MIT, Apache) allowing anyone to inspect, modify, enhance, and redistribute the software without paying licensing royalties.",
        tableTitle: "OPEN SOURCE SOFTWARE VS. PROPRIETARY SOFTWARE",
        table: {
          headers: ["Feature", "Open Source Software (FOSS / OSS)", "Proprietary Software (Closed Source)"],
          rows: [
            ["Source Code Availability", "Fully open, publicly accessible, auditable, and modifiable by any user", "Strictly secret and confidential; only compiled binary machine code is distributed"],
            ["Licensing Cost", "Generally free of charge (Zero commercial license fee)", "Requires commercial upfront purchase or recurring paid subscription licenses"],
            ["Modification Rights", "Users are legally free to customize, fix bugs, and create modified distributions", "Modification, decompilation, and reverse engineering are legally prohibited by EULA"],
            ["Prominent Examples", "Linux Kernel, Ubuntu, LibreOffice, VLC Media Player, Python, Android (AOSP)", "Microsoft Windows, macOS, Microsoft 365 / MS Office, Adobe Photoshop, CorelDraw"]
          ],
          colWidths: [110, 200, 201]
        },
        componentsTitle: "SOFTWARE LICENSING CLASSIFICATIONS",
        componentsOrTypes: [
          "FOSS (Free and Open Source Software): Software that respects the user's four essential freedoms: to run the program, study the code, redistribute copies, and distribute modified versions (promoted by the Free Software Foundation - FSF founded by Richard Stallman in 1985).",
          "Freeware: Proprietary software distributed free of monetary cost, but whose source code remains closed and non-modifiable (e.g., Adobe Acrobat Reader, Google Chrome, WhatsApp).",
          "Shareware (Trialware): Commercial software provided free on a temporary evaluation trial basis (e.g., 30-day trial with nag screens or locked advanced features; e.g., WinRAR).",
          "Firmware: Permanent low-level software programmed directly into read-only semiconductor ROM chips on motherboards (e.g., BIOS/UEFI)."
        ],
        practicalExample: "If a government school wants to equip 100 computer lab systems with office productivity software, choosing Proprietary MS Office would require purchasing 100 paid individual licenses. By choosing Free and Open Source LibreOffice, the school legally installs the complete Writer, Calc, and Impress suite on all 100 machines at zero licensing cost.",
        importantPoints: [
          "LibreOffice and Linux are prominent examples of Free and Open Source Software (FOSS).",
          "GNU GPL stands for General Public License.",
          "Freeware is free to use, but its source code remains closed and private (it is NOT open source).",
          "Richard Stallman founded the Free Software Foundation (FSF) in 1985.",
          "Linus Torvalds created the open-source Linux Operating System Kernel in 1991."
        ],
        quickRevision: "Open Source (FOSS/GPL) grants open access to modify and share source code (Linux, LibreOffice). Proprietary software is closed-source and commercially licensed (Windows, MS Office). Freeware is free but closed."
      },
      {
        code: "1.8",
        title: "Mobile Apps and Mobile Operating Systems",
        whatIsIt: "A mobile operating system is a specialized OS tailored for handheld touch devices (smartphones and tablets), and a mobile application (mobile app) is software engineered to execute within that mobile OS environment.",
        whyImportant: "Handheld smartphones have become the primary digital access gateway for internet browsing, digital banking (UPI), e-governance services (UMANG, DigiLocker), and communication across India.",
        howItWorks: "Mobile operating systems manage touchscreen digitizers, cellular modems, GPS chips, and battery power. Mobile apps execute within secure isolated permission sandboxes, requiring user consent before accessing private sensors.",
        tableTitle: "MAJOR MOBILE OPERATING SYSTEMS & APP CATEGORIES",
        table: {
          headers: ["Mobile Category", "Platform / Architecture", "Package File Format", "Key Characteristics & Development"],
          rows: [
            ["Android OS", "Google / Open Handset Alliance (Linux Kernel)", ".apk (Android Package) / .aab", "Open-source foundation, global market leader, distributed via Google Play Store"],
            ["Apple iOS", "Apple Inc. (Darwin / Unix-like Architecture)", ".ipa (iOS App Package)", "Proprietary closed ecosystem, hardware-integrated security, distributed via App Store"],
            ["Native Mobile Apps", "Platform-specific (Java/Kotlin, Swift)", "OS Native Binary", "Direct hardware access, highest graphics performance, operates seamlessly offline"],
            ["Web Apps (PWAs)", "Web standards (HTML5, CSS3, JavaScript)", "Browser-executed", "Platform-independent, runs inside mobile browsers without app store installation"],
            ["Hybrid Apps", "Cross-platform containers (Flutter, React Native)", "Wrapped Native Package", "Single unified codebase compiled and deployed to both Android and iOS platforms"]
          ],
          colWidths: [95, 130, 115, 171]
        },
        componentsTitle: "MOBILE APP SECURITY & PERMISSION ARCHITECTURE",
        componentsOrTypes: [
          "Permission Sandboxing: Mobile apps run inside isolated sandboxes to prevent unauthorized access to other apps' private databases.",
          "Granular Runtime Permissions: Modern mobile operating systems require explicit user authorization before granting access to Location (GPS), Camera, Microphone, Contacts, and File Storage.",
          "Digital Distribution Repositories: Official app stores (Google Play Store, Apple App Store) perform automated security malware scanning before publishing application packages."
        ],
        practicalExample: "When you install the BHIM UPI app on an Android phone from the Google Play Store, the system downloads a verified `.apk` package. Upon opening, the app asks permission to read SMS for phone verification. Once verified, it utilizes the secure mobile hardware enclave to authenticate your banking transactions.",
        importantPoints: [
          "Android is an open-source mobile OS developed by Google and based on the Linux Kernel.",
          "Android application package files use the `.apk` (Android Package Kit) file extension.",
          "iOS is a proprietary mobile operating system developed exclusively by Apple Inc.",
          "Native apps provide the fastest execution performance and direct access to device sensors."
        ],
        quickRevision: "Android (Google, Linux-based, .apk) and iOS (Apple, proprietary, .ipa) dominate mobile OS. Apps are classified into Native, Web (PWA), and Hybrid. Apps execute in permission sandboxes."
      }
    ],
    unitRevision: [
      "The computer operates on the universal 4-stage IPO (Input-Process-Output-Storage) cycle.",
      "Core computer traits include High Speed (MIPS), High Accuracy (GIGO), Diligence, Versatility, and Zero IQ.",
      "The 5 Computer Generations: 1G (Vacuum Tubes), 2G (Transistors), 3G (Integrated Circuits), 4G (Microprocessors/VLSI), 5G (ULSI & Artificial Intelligence).",
      "Charles Babbage is the Father of Computer (Analytical Engine 1837); Ada Lovelace is the First Programmer; Jack Kilby invented the IC (1958).",
      "CPU Architecture comprises ALU (Math/Logic), Control Unit (Timing/Decisions), and high-speed Registers.",
      "Input devices include Keyboards (104-108 keys), Mice (Douglas Engelbart 1964), OMR, OCR, and MICR (9-digit bank code).",
      "Output devices include Visual Display Units (Monitors), Impact Printers (Dot Matrix), Non-Impact Printers (Laser/Inkjet measured in DPI/PPM), and Plotters.",
      "Memory Hierarchy: Registers > Cache > RAM > SSD/HDD. 1 Byte = 8 Bits. 1024 Bytes = 1 KB. RAM is Volatile; ROM is Non-Volatile.",
      "Software Classification: System Software (OS, Drivers, Translators), Application Software (LibreOffice), and Utility Software (Antivirus, Defragmenter, Compression).",
      "Language Translators: Compilers convert entire source code in one pass; Interpreters convert line-by-line; Assemblers convert assembly mnemonics.",
      "Open Source Software (Linux, LibreOffice under GNU GPL) provides accessible source code; Proprietary Software (Windows, MS Office) is closed-source.",
      "Mobile Operating Systems: Android (Google, Linux-based, .apk format) and iOS (Apple, proprietary, .ipa format)."
    ],
    keyTerms: [
      { term: "IPO", fullForm: "Input - Process - Output", desc: "The fundamental operational cycle of computing systems." },
      { term: "GIGO", fullForm: "Garbage In, Garbage Out", desc: "Principle that computational accuracy is strictly determined by input quality." },
      { term: "CPU", fullForm: "Central Processing Unit", desc: "The primary processor containing the ALU, Control Unit, and Registers." },
      { term: "ALU", fullForm: "Arithmetic Logic Unit", desc: "CPU subsystem that performs arithmetic math and logical comparisons." },
      { term: "CU", fullForm: "Control Unit", desc: "CPU subsystem that decodes instructions and manages micro-timing signals." },
      { term: "OMR", fullForm: "Optical Mark Recognition", desc: "Optical input system for evaluating darkened answer sheet bubbles." },
      { term: "OCR", fullForm: "Optical Character Recognition", desc: "Technology that converts scanned document images into editable text." },
      { term: "MICR", fullForm: "Magnetic Ink Character Recognition", desc: "9-digit magnetic recognition system printed on bank cheques." },
      { term: "DPI", fullForm: "Dots Per Inch", desc: "Measurement of printer resolution and scan image sharpness." },
      { term: "PPM", fullForm: "Pages Per Minute", desc: "Standard measurement unit for printer output speed." },
      { term: "RAM", fullForm: "Random Access Memory", desc: "Volatile primary read/write main memory accessed directly by CPU." },
      { term: "ROM", fullForm: "Read Only Memory", desc: "Non-volatile memory storing bootstrap startup firmware (BIOS/UEFI)." },
      { term: "BIOS", fullForm: "Basic Input / Output System", desc: "Firmware in ROM that performs Power-On Self-Test (POST) at startup." },
      { term: "FOSS", fullForm: "Free and Open Source Software", desc: "Software that grants users freedom to inspect, modify, and share code." },
      { term: "GPL", fullForm: "General Public License", desc: "Widely used open-source license created by the Free Software Foundation." },
      { term: "APK", fullForm: "Android Package Kit", desc: "Standard application package file format for the Android OS." }
    ]
  };
}
