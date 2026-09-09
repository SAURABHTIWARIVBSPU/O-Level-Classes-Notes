// CCC Chapter 1: Introduction to Computer — topic notes
// Written to CONTENT_STYLE.md. Beginner level: the reader may be using a
// computer seriously for the first time. Each fact lives in one topic.

const q = (question, options, correctAnswer, explanation) => ({
  question,
  options: options.map((text, i) => ({ id: 'ABCD'[i], text })),
  correctAnswer,
  explanation,
});

export const chapter1Topics = [
  /* ============================================ 1. What a computer is ==== */
  {
    chapterNumber: 1,
    topicNumber: 1,
    slug: 'introduction-to-computer-and-gadgets',
    title: 'Computer and Latest IT Gadgets',
    hindiTitle: 'कंप्यूटर एवं नवीनतम आईटी गैजेट्स',
    definitionEnglish:
      'A computer is an electronic machine that takes in data (input), processes it according to instructions, and gives out useful information (output), which it can also store.',
    definitionHindi:
      'कंप्यूटर एक electronic मशीन है जो data लेती है (input), दिए गए निर्देशों के अनुसार उसे process करती है, और उपयोगी जानकारी देती है (output), जिसे वह store भी कर सकती है।',
    simpleWords:
      'Calculator में आप 25 × 4 दबाते हैं (input), वह हिसाब लगाता है (process), और 100 दिखाता है (output)। कंप्यूटर यही काम हर तरह के data — text, photo, video, आवाज़ — के साथ करता है, और नतीजा याद भी रखता है।',
    examImportance: 'Very high (3–4 questions in every paper on the IPO cycle and characteristics)',
    detailedExplanation: `### Input → Process → Output

Everything a computer does follows one pattern, called the **IPO cycle**:

1. **Input** — data goes in. You type on a keyboard, click a mouse, speak into a microphone, or scan a document.
2. **Process** — the CPU works on the data as the program instructs: adds, compares, sorts, converts.
3. **Output** — the result comes out on the screen, from a printer, or through speakers.

Modern books add a fourth step, **Storage**: the computer keeps data and results in memory so they are not lost and can be used again. Remember the order — Input, Process, Output, Storage — because the exam asks for it.

### Data and information — not the same thing

**Data** is raw facts with no meaning by themselves: 72, 85, 91. **Information** is data after processing, arranged so it means something: "Average marks: 82.6". The computer's whole job is turning data into information.

### Why a computer is worth using — the characteristics

The exam asks for these by name, so learn the names:

| Characteristic | What it means |
|---|---|
| **Speed** | Millions of instructions in a second. A task that takes you an hour takes it a fraction of a second. |
| **Accuracy** | It does not make calculation mistakes. If the answer is wrong, the input or the program was wrong — **GIGO: Garbage In, Garbage Out**. |
| **Diligence** | It does not get tired or bored. The ten-thousandth calculation is as accurate as the first. |
| **Versatility** | The same machine can play music, type a letter, do accounts and make a video call. |
| **Storage** | It keeps huge amounts of data in a small space and finds any of it in an instant. |
| **No intelligence** | It cannot think or decide on its own. It only follows instructions — a computer has *zero IQ*. |

### Where you meet computers today

A desktop or laptop is the obvious computer. But a smartphone, a smartwatch, an ATM, a ticket machine at the metro station and the box behind a shop's billing counter are all computers too — the same IPO cycle in a different shape. The next two topics look at these gadgets and at how computers got here.`,
    realWorldAnalogy:
      'Juicer में संतरे डालना input है, blade का घूमना process, और glass में जूस आना output — कंप्यूटर भी बिल्कुल इसी तरह data से information बनाता है।',
    importantPoints: [
      'Computer का हर काम IPO cycle पर चलता है: Input → Process → Output (→ Storage)।',
      'Data = raw facts; Information = process किया हुआ, meaningful data।',
      'GIGO = Garbage In, Garbage Out — गलत input देंगे तो गलत output मिलेगा।',
      'Characteristics: Speed, Accuracy, Diligence, Versatility, Storage, No IQ।',
      'Diligence = बिना थके, बिना बोर हुए लगातार एक जैसा काम।',
    ],
    commonMistakes: [
      'Data और information को एक ही चीज़ समझना — data raw है, information उसका process किया हुआ रूप।',
      'GIGO का full form "General In General Out" लिख देना — सही है Garbage In, Garbage Out।',
      '"Computer खुद सोच सकता है" — नहीं। वह सिर्फ instructions मानता है; इसीलिए कहा जाता है कि उसका IQ zero है।',
    ],
    examTips: [
      '"Computer की किस विशेषता के कारण वह बिना थके लगातार काम करता है?" → Diligence।',
      '"GIGO का full form" → Garbage In, Garbage Out।',
      '"Computer operations का सही क्रम" → Input, Process, Output, Storage।',
    ],
    quickRevision:
      'Computer = input लेकर process करके output देने वाली electronic मशीन (IPO)। Data raw है, information processed। Characteristics: Speed, Accuracy (GIGO), Diligence, Versatility, Storage, zero IQ।',
    practiceAssignment:
      'अपने घर की तीन machines चुनें — जैसे phone, washing machine, TV remote — और हर एक के लिए लिखें: input क्या है, process क्या है, output क्या है। इनमें से कौन-सी असल में computer है?',
    microQuiz: [
      q(
        'What is the correct order of computer operations?',
        ['Process → Input → Output', 'Input → Process → Output', 'Output → Input → Process', 'Input → Output → Process'],
        'B',
        'Data goes in, is processed, and the result comes out — the IPO cycle.',
      ),
      q(
        'A computer produced a wrong total because the clerk typed a wrong figure. Which principle does this show?',
        ['Versatility', 'Diligence', 'GIGO', 'Storage'],
        'C',
        'Garbage In, Garbage Out: the computer was accurate, the input was not.',
      ),
    ],
  },

  /* ============================================ 2. Evolution ============= */
  {
    chapterNumber: 1,
    topicNumber: 2,
    slug: 'evolution-of-computers-and-applications',
    title: 'Evolution of Computers & Applications',
    hindiTitle: 'कंप्यूटर का विकास एवं अनुप्रयोग',
    definitionEnglish:
      'The evolution of computers is the story of how computing moved from mechanical counting devices to today\'s electronic machines, usually described as five generations, each defined by the technology inside it.',
    definitionHindi:
      'कंप्यूटर का विकास वह कहानी है जिसमें गिनती की mechanical मशीनों से आज के electronic कंप्यूटर तक का सफर पांच generations में बांटा जाता है — हर generation की पहचान उसके अंदर की technology से होती है।',
    simpleWords:
      'पहले कंप्यूटर एक पूरे कमरे जितने बड़े थे और सिर्फ जोड़-घटाव कर पाते थे। हर बार जब अंदर की technology बदली — vacuum tube से transistor, transistor से chip — कंप्यूटर छोटा, सस्ता और तेज़ हो गया। इन्हीं बदलावों को generations कहते हैं।',
    examImportance: 'High (2–3 questions on generations and inventors)',
    detailedExplanation: `### Before electronics

- **Abacus** — the oldest counting device, beads on rods; still used to teach arithmetic.
- **Pascaline (1642)** — Blaise Pascal's mechanical adding machine, worked with gears.
- **Analytical Engine (1837)** — designed by **Charles Babbage**. It had a part for calculating and a part for storing numbers — the same idea as a modern CPU and memory. This is why Babbage is called the **father of the computer**.
- **Ada Lovelace** wrote instructions for the Analytical Engine and is remembered as the **first programmer**.

### The five generations

The exam almost always asks "which technology belonged to which generation". This table is the whole topic:

| Generation | Years | Main technology | What it meant |
|---|---|---|---|
| **First** | 1940–56 | **Vacuum tubes** | Room-sized, very hot, programmed in machine language (0s and 1s). Example: ENIAC, UNIVAC. |
| **Second** | 1956–63 | **Transistors** | Much smaller and more reliable. Assembly language and early high-level languages (FORTRAN, COBOL). |
| **Third** | 1964–71 | **Integrated circuits (ICs)** | Many transistors on one chip. Keyboards and monitors appear; operating systems appear. Example: IBM 360. |
| **Fourth** | 1971–now | **Microprocessors** | The whole CPU on one chip (Intel 4004, 1971). Personal computers, laptops, GUI, the Internet. |
| **Fifth** | now and ahead | **Artificial intelligence** | Machines that understand speech, recognise faces, learn from data. Also very fast parallel processing. |

A few names go with the table: **ENIAC (1946)** was the first general-purpose electronic computer; the **IC** was invented by **Jack Kilby** (1958); the **Intel 4004 (1971)** was the first microprocessor.

### What computers are used for

The syllabus lists the main fields. One line each is enough:

- **Banking** — ATMs, UPI, net banking, NEFT/RTGS transfers.
- **Education** — online classes, digital notes, computer-based exams (like the CCC exam itself).
- **Healthcare** — CT and MRI scans, patient records, telemedicine.
- **Government** — Aadhaar, passport and PAN portals, income-tax e-filing, land records.
- **Business and shopping** — billing, inventory, online stores.
- **Science and weather** — supercomputers that forecast the monsoon or design aircraft.
- **Entertainment and communication** — video calls, streaming, games, social media.`,
    realWorldAnalogy:
      'Generations को गाड़ियों की तरह सोचें: भाप का इंजन (1st), diesel (2nd), electric (3rd), bullet train (4th), और self-driving car (5th)। हर बार सवारी वही, तकनीक नई।',
    importantPoints: [
      '1st: vacuum tubes | 2nd: transistors | 3rd: ICs | 4th: microprocessors | 5th: AI।',
      'Charles Babbage = father of the computer (Analytical Engine, 1837); Ada Lovelace = first programmer।',
      'ENIAC (1946) = पहला general-purpose electronic computer।',
      'IC का आविष्कार Jack Kilby ने किया (1958); Intel 4004 (1971) पहला microprocessor।',
    ],
    commonMistakes: [
      'Transistor को first generation में लिख देना — first generation में vacuum tubes थे, transistor second में आए।',
      'Babbage को "first programmer" कहना — programmer Ada Lovelace थीं; Babbage ने मशीन design की।',
    ],
    examTips: [
      '"First generation computers में कौन-सी technology थी?" → Vacuum tubes।',
      '"IC का आविष्कार किसने किया?" → Jack Kilby।',
      '"Father of the computer" → Charles Babbage; "first computer programmer" → Ada Lovelace।',
    ],
    quickRevision:
      'Abacus → Pascaline (1642) → Babbage का Analytical Engine (1837) → ENIAC (1946)। पांच generations: vacuum tubes, transistors, ICs, microprocessors, AI। Kilby = IC, Intel 4004 = पहला microprocessor।',
    practiceAssignment:
      'बिना देखे एक table बनाएं: पांच generations, हर एक की technology और एक example। फिर ऊपर की table से मिलाकर गलतियां ठीक करें — exam में यही table काम आएगी।',
    microQuiz: [
      q(
        'Which technology was used in first-generation computers?',
        ['Transistors', 'Vacuum tubes', 'Integrated circuits', 'Microprocessors'],
        'B',
        'Vacuum tubes came first (1940–56); transistors replaced them in the second generation.',
      ),
      q(
        'Who is known as the first computer programmer?',
        ['Charles Babbage', 'Ada Lovelace', 'Blaise Pascal', 'Jack Kilby'],
        'B',
        'Ada Lovelace wrote instructions for Babbage\'s Analytical Engine.',
      ),
    ],
  },

  /* ============================================ 3. IT gadgets ============ */
  {
    chapterNumber: 1,
    topicNumber: 3,
    slug: 'it-gadgets-and-their-applications',
    title: 'IT Gadgets and Their Applications',
    hindiTitle: 'आईटी गैजेट्स और उनके उपयोग',
    definitionEnglish:
      'An IT gadget is a small electronic device with a built-in processor that does a specific job — such as a smartphone, tablet, smartwatch, e-reader or drone.',
    definitionHindi:
      'IT gadget एक छोटा electronic device है जिसके अंदर processor होता है और जो कोई खास काम करता है — जैसे smartphone, tablet, smartwatch, e-reader या drone।',
    simpleWords:
      'आपके हाथ का phone एक camera, calculator, map, TV, bank और computer — सब एक साथ है। ऐसे छोटे, काम-के-हिसाब-से बने computer ही IT gadgets हैं।',
    examImportance: 'Medium (1–2 questions, mostly full forms and "which device is used for what")',
    detailedExplanation: `### The main gadgets and what each is for

| Gadget | What it is | Everyday use |
|---|---|---|
| **Smartphone** | A pocket computer with a touch screen and mobile connection | Calls, WhatsApp, UPI payments, photos, maps, learning apps |
| **Tablet** | A larger touch-screen device, between a phone and a laptop | Reading, online classes, drawing with a stylus |
| **Laptop** | A portable computer with keyboard and battery | Office work, programming, exams like this one |
| **Smartwatch / fitness band** | A small computer worn on the wrist | Shows notifications, counts steps, measures heart rate |
| **E-reader** (e.g. Kindle) | A device only for reading books | Uses an **e-ink** screen that looks like paper — no glare, battery lasts weeks |
| **Smart speaker** (Alexa, Google Nest) | A speaker that listens for voice commands | Plays music, sets alarms, answers questions, controls smart lights |
| **Drone (UAV)** | A small flying machine controlled remotely | Photography, spraying crops, surveying land, delivering medicines |
| **Smart TV / streaming stick** | A TV that connects to the Internet | YouTube, OTT apps, screen-mirroring from a phone |

### Two ideas behind all of them

**Sensors.** Gadgets collect data about the world through sensors: a camera, a microphone, GPS for location, an accelerometer that knows when you tilt or shake the phone, a fingerprint sensor. Sensors are the *input* side of the IPO cycle.

**Connectivity.** Gadgets talk to each other and to the Internet through **Wi-Fi**, **Bluetooth** (short range, e.g. earphones) and **mobile data (4G/5G)**. When ordinary objects — a bulb, a fan, a fridge — get sensors and connectivity, we call them **IoT (Internet of Things)** devices.

### Full forms the exam asks

- **GPS** — Global Positioning System
- **UAV** — Unmanned Aerial Vehicle (a drone)
- **IoT** — Internet of Things
- **VR / AR** — Virtual Reality (a fully computer-made world you see through a headset) / Augmented Reality (digital things added to the real world, like Snapchat filters)`,
    realWorldAnalogy:
      'Swiss army knife में चाकू, कैंची और opener एक साथ होते हैं; smartphone में camera, computer, map और wallet — एक जेब में पूरा IT department।',
    importantPoints: [
      'Smartphone, tablet, smartwatch, e-reader, smart speaker, drone — ये सब IT gadgets हैं।',
      'E-reader में e-ink screen होती है — कागज़ जैसी, बिना चमक, हफ्तों की battery।',
      'Drone का दूसरा नाम UAV = Unmanned Aerial Vehicle।',
      'IoT = Internet of Things: रोज़मर्रा की चीज़ें जो sensor और इंटरनेट से जुड़ी हों।',
      'Connectivity: Wi-Fi, Bluetooth (short range), 4G/5G।',
    ],
    commonMistakes: [
      'E-ink screen को phone जैसी चमकदार screen समझना — e-ink कागज़ की तरह रोशनी reflect करती है, खुद चमकती नहीं।',
      'VR और AR को एक ही समझना — VR पूरी दुनिया बनावटी दिखाता है; AR असली दुनिया पर digital चीज़ें जोड़ता है।',
    ],
    examTips: [
      '"UAV का full form" → Unmanned Aerial Vehicle।',
      '"GPS का full form" → Global Positioning System।',
      '"Kindle जैसे e-reader में कौन-सी screen होती है?" → E-ink।',
    ],
    quickRevision:
      'IT gadgets = processor वाले छोटे devices: smartphone, tablet, smartwatch, e-reader (e-ink), smart speaker, drone (UAV)। Sensors input देते हैं; Wi-Fi/Bluetooth/5G जोड़ते हैं। IoT = चीज़ें जो इंटरनेट से जुड़ी हों।',
    practiceAssignment:
      'अपने phone की Settings में जाकर पता करें कि उसमें कौन-कौन से sensors हैं (कई phones में "Sensors" या "About phone" में दिखता है)। कम से कम तीन के नाम और उनका काम लिखें।',
    microQuiz: [
      q(
        'Which screen technology do e-readers such as Kindle use?',
        ['LCD', 'E-ink', 'Plasma', 'CRT'],
        'B',
        'E-ink reflects light like paper, so there is no glare and very little battery use.',
      ),
      q(
        'UAV stands for',
        ['Universal Audio Video', 'Unmanned Aerial Vehicle', 'User Access Verification', 'Ultra Advanced Version'],
        'B',
        'A UAV is a drone — an aircraft with no pilot on board.',
      ),
    ],
  },

  /* ============================================ 4. Hardware ============== */
  {
    chapterNumber: 1,
    topicNumber: 4,
    slug: 'hardware-cpu-input-output-devices',
    title: 'Hardware: CPU, Input & Output Devices',
    hindiTitle: 'हार्डवेयर: CPU, इनपुट और आउटपुट डिवाइस',
    definitionEnglish:
      'Hardware is every physical part of a computer that you can touch — the CPU that processes, the input devices that send data in, and the output devices that show results.',
    definitionHindi:
      'Hardware कंप्यूटर का हर वह भौतिक हिस्सा है जिसे छुआ जा सकता है — CPU जो process करता है, input devices जो data अंदर भेजते हैं, और output devices जो नतीजा दिखाते हैं।',
    simpleWords:
      'Keyboard, mouse, monitor, printer, और CPU वाला डिब्बा — जो कुछ भी आप हाथ में ले सकते हैं, वह hardware है। जो दिखता नहीं पर चलता है (Windows, WhatsApp), वह software है — अगले topic में।',
    examImportance: 'Very high (4–5 questions in every paper on CPU parts, printers and input devices)',
    detailedExplanation: `### The CPU — the brain

The **CPU (Central Processing Unit)** does the *process* step of the IPO cycle. It has two working parts, and the exam asks for both by name:

- **ALU (Arithmetic Logic Unit)** — does the maths (+ − × ÷) and the comparisons (is A bigger than B? are they equal?).
- **CU (Control Unit)** — the manager. It fetches each instruction, decodes it, and tells the ALU, memory and devices what to do and when.

A third part, **registers**, are tiny, very fast storage spaces inside the CPU where the ALU keeps the numbers it is working on right now.

### Input devices — data goes in

| Device | Notes |
|---|---|
| **Keyboard** | Standard layout is **QWERTY** (look at the first six letters on the top row). |
| **Mouse** | Pointing device; invented by **Douglas Engelbart** (1964). Touchpad and trackball do the same job. |
| **Scanner** | Converts a paper page or photo into a digital image. |
| **Microphone, webcam** | Bring in sound and video. |
| **Touch screen** | Both input and output — you touch what you see. |

Four special readers turn up in the exam every year because they are used in exams and banks:

- **OMR (Optical Mark Recognition)** — reads the dark circles on an answer sheet. This is how CCC and competitive exams are checked.
- **OCR (Optical Character Recognition)** — reads printed text from a scanned page and turns it into editable text.
- **MICR (Magnetic Ink Character Recognition)** — reads the **9-digit** code printed in magnetic ink at the bottom of a bank cheque (3 digits city, 3 bank, 3 branch).
- **Barcode / QR code reader** — reads the stripes on a product or the square code you scan for UPI.

### Output devices — results come out

**Monitor** — the screen. Types by technology: CRT (the old, heavy box), LCD, LED, OLED. Size is measured **diagonally** in inches; sharpness is the **resolution** (e.g. 1920 × 1080 pixels).

**Printer** — the exam's favourite output device. There are two families:

| | Impact printer | Non-impact printer |
|---|---|---|
| How it prints | A head physically strikes an ink ribbon against the paper | No striking — ink is sprayed or toner is fused with heat |
| Noise | Loud | Quiet |
| Speed | Slow, measured in CPS (characters per second) | Fast, measured in PPM (pages per minute) |
| Can print carbon copies | Yes | No |
| Examples | **Dot-matrix**, daisy-wheel, line printer | **Inkjet**, **laser**, thermal |

Print quality for any printer is measured in **DPI (dots per inch)** — more dots, sharper print.

**Plotter** — draws large engineering drawings and banners with pens; used by architects and for flex printing. **Speakers / headphones** — sound output.`,
    realWorldAnalogy:
      'आपकी आंखें और कान input devices हैं, दिमाग CPU है, और मुंह-हाथ output devices — देखा, सोचा, बोला/लिखा।',
    importantPoints: [
      'CPU के दो मुख्य भाग: ALU (हिसाब और तुलना) और CU (control); registers CPU के अंदर की छोटी तेज़ memory।',
      'Keyboard का layout QWERTY; mouse के आविष्कारक Douglas Engelbart (1964)।',
      'OMR = answer sheet के गोले पढ़ता है; OCR = छपा text पढ़ता है; MICR = cheque का 9-digit code पढ़ता है।',
      'Impact printer (dot-matrix) ribbon पर चोट करता है, शोर करता है; non-impact (inkjet, laser) चुप और तेज़।',
      'Printer की quality DPI में, speed PPM में; monitor का size तिरछा (diagonal) नापते हैं।',
    ],
    commonMistakes: [
      'Laser printer को impact printer लिख देना — laser और inkjet दोनों non-impact हैं; impact सिर्फ dot-matrix जैसे printers हैं।',
      'OMR और OCR में उलझना — OMR गोले (marks) पढ़ता है, OCR अक्षर (characters)।',
      'Monitor का size चौड़ाई से नापना — size हमेशा एक कोने से विपरीत कोने तक (diagonal) inches में होता है।',
    ],
    examTips: [
      '"कौन-सा printer ribbon इस्तेमाल करता है और शोर करता है?" → Dot-matrix (impact)।',
      '"MICR code में कितने अंक होते हैं?" → 9।',
      '"DPI का full form" → Dots Per Inch; "PPM" → Pages Per Minute।',
      '"CPU का कौन-सा भाग arithmetic करता है?" → ALU।',
    ],
    quickRevision:
      'CPU = ALU + CU (+ registers)। Input: keyboard (QWERTY), mouse (Engelbart), scanner, OMR (गोले), OCR (text), MICR (cheque, 9 digits)। Output: monitor (diagonal size), printer — impact (dot-matrix, noisy, CPS) vs non-impact (inkjet/laser, PPM, DPI), plotter।',
    practiceAssignment:
      'किसी cheque की photo (या bank की website का sample) देखकर नीचे छपे 9 अंक ढूंढें और उन्हें 3-3 के तीन हिस्सों में बांटकर लिखें: city, bank, branch।',
    microQuiz: [
      q(
        'Which of these is an impact printer?',
        ['Laser printer', 'Inkjet printer', 'Dot-matrix printer', 'Thermal printer'],
        'C',
        'A dot-matrix printer strikes an ink ribbon with pins; laser, inkjet and thermal printers do not strike the paper.',
      ),
      q(
        'The part of the CPU that performs calculations and comparisons is the',
        ['Control Unit', 'Arithmetic Logic Unit', 'Register', 'Hard disk'],
        'B',
        'The ALU does arithmetic and logic; the CU directs the work; the hard disk is not part of the CPU.',
      ),
    ],
  },

  /* ============================================ 5. Memory ================ */
  {
    chapterNumber: 1,
    topicNumber: 5,
    slug: 'computer-memory-and-storage',
    title: 'Computer Memory and Storage Devices',
    hindiTitle: 'कंप्यूटर मेमोरी और स्टोरेज डिवाइस',
    definitionEnglish:
      'Computer memory is where data and instructions are kept — temporarily in primary memory (RAM, ROM) while the CPU works, and permanently in secondary storage (hard disk, SSD, pen drive).',
    definitionHindi:
      'Computer memory वह जगह है जहां data और instructions रखे जाते हैं — primary memory (RAM, ROM) में अस्थायी रूप से जब CPU काम कर रहा हो, और secondary storage (hard disk, SSD, pen drive) में स्थायी रूप से।',
    simpleWords:
      'RAM आपकी study table है — जो किताबें अभी पढ़ रहे हैं वे यहां खुली हैं, पर table छोटी है और रात को (power off) सब समेट लिया जाता है। Hard disk आपकी अलमारी है — बड़ी, और चीज़ें सालों रखी रहती हैं।',
    examImportance: 'Very high (4–5 questions on RAM vs ROM, units (KB/MB/GB) and storage devices)',
    detailedExplanation: `### How data is measured

Computers store everything as **bits** — a bit is a single 0 or 1. Eight bits make a **byte**, which holds one character such as the letter A. From there, each unit is **1024** times the previous one, not 1000, because computers count in powers of 2:

| Unit | Equals |
|---|---|
| 1 nibble | 4 bits |
| 1 byte (B) | 8 bits |
| 1 kilobyte (KB) | 1024 bytes |
| 1 megabyte (MB) | 1024 KB |
| 1 gigabyte (GB) | 1024 MB |
| 1 terabyte (TB) | 1024 GB |
| 1 petabyte (PB) | 1024 TB |

A rough feel: a text message is a few hundred bytes, a photo a few MB, a movie a few GB, a laptop hard disk 512 GB to 1 TB.

### Primary memory — where the CPU works

The CPU can only work on data that is in primary memory. There are two kinds:

**RAM (Random Access Memory)** holds the programs and files you are using *right now*. It is fast, it can be read and written, and it is **volatile** — switch the power off and everything in it is gone. That is why you lose an unsaved document when the power fails. More RAM lets you keep more programs open without the computer slowing down.

**ROM (Read Only Memory)** holds the small program the computer needs to start up — the **BIOS**, which checks the hardware (a step called **POST, Power-On Self-Test**) and then loads the operating system. ROM is **non-volatile**: its contents stay when the power is off, and normally they cannot be changed.

| | RAM | ROM |
|---|---|---|
| Full form | Random Access Memory | Read Only Memory |
| Volatile? | Yes — lost when power goes off | No — permanent |
| Read / write | Both | Read only |
| Holds | Running programs and open files | Start-up program (BIOS) |

**Cache memory** is a very small, very fast memory placed between the CPU and RAM. It keeps the data the CPU used most recently so the CPU does not have to wait for RAM.

### Secondary storage — where data lives permanently

Secondary storage is slower than RAM but much larger, cheaper per GB, and non-volatile. The CPU does not use it directly — files are copied from it into RAM when you open them.

- **Hard disk drive (HDD)** — spinning magnetic platters. Large and cheap; the usual 500 GB–2 TB drive.
- **Solid-state drive (SSD)** — memory chips, no moving parts. Much faster and quieter than an HDD; most new laptops use one.
- **Pen drive and memory card** — small flash memory you carry around.
- **Optical discs** — read by laser. **CD ≈ 700 MB**, **DVD ≈ 4.7 GB**, **Blu-ray ≈ 25 GB**. Rarely used now, but the capacities are asked.
- **Cloud storage** (Google Drive, DigiLocker) — your files kept on a company's servers and reached over the Internet.`,
    realWorldAnalogy:
      'Study table (RAM) पर सिर्फ वही किताबें जो अभी पढ़ रहे हैं; अलमारी (hard disk) में बाकी सब सालों तक। Table पर रखी किताब जल्दी मिलती है, पर table छोटी है और रोज़ खाली हो जाती है।',
    importantPoints: [
      '4 bits = 1 nibble; 8 bits = 1 byte; 1 KB = 1024 B; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB।',
      'RAM volatile है (power जाते ही खाली), read-write; ROM non-volatile, read-only, इसमें BIOS रहता है।',
      'BIOS शुरू होते ही POST (Power-On Self-Test) करता है।',
      'Cache = CPU और RAM के बीच की सबसे तेज़ memory।',
      'CD 700 MB, DVD 4.7 GB, Blu-ray 25 GB; SSD, HDD से तेज़ (moving parts नहीं)।',
    ],
    commonMistakes: [
      '1 KB = 1000 bytes लिखना — computer में 1 KB = 1024 bytes (2 की घात)।',
      'Nibble और byte में उलझना — nibble 4 bits, byte 8 bits।',
      'Hard disk को primary memory कहना — hard disk secondary storage है; primary सिर्फ RAM और ROM।',
    ],
    examTips: [
      '"1 nibble में कितने bits?" → 4।',
      '"कौन-सी memory volatile है?" → RAM।',
      '"BIOS कौन-सा test चलाता है?" → POST।',
      '"1 GB में कितने MB?" → 1024।',
    ],
    quickRevision:
      'Bit → nibble (4) → byte (8) → KB → MB → GB → TB, हर बार ×1024। Primary: RAM (volatile, काम की जगह), ROM (BIOS, permanent), cache (सबसे तेज़)। Secondary: HDD, SSD, pen drive, CD 700 MB / DVD 4.7 GB / Blu-ray 25 GB, cloud।',
    practiceAssignment:
      'Windows में This PC खोलें: C: drive का कुल size GB में देखें और उसे MB में बदलें (×1024)। फिर Task Manager (Ctrl+Shift+Esc) → Performance में देखें कि RAM कितनी है और अभी कितनी use हो रही है।',
    microQuiz: [
      q(
        'How many bits make one byte?',
        ['4', '8', '16', '1024'],
        'B',
        '8 bits = 1 byte; 4 bits = 1 nibble; 1024 bytes = 1 KB.',
      ),
      q(
        'Which memory loses its contents when the power is switched off?',
        ['ROM', 'Hard disk', 'RAM', 'Pen drive'],
        'C',
        'RAM is volatile. ROM, hard disks and pen drives keep their data without power.',
      ),
    ],
  },

  /* ============================================ 6. Software ============== */
  {
    chapterNumber: 1,
    topicNumber: 6,
    slug: 'software-system-application-utility',
    title: 'Software: System, Application & Utility Software',
    hindiTitle: 'सॉफ्टवेयर: सिस्टम, एप्लीकेशन और यूटिलिटी',
    definitionEnglish:
      'Software is the set of programs and instructions that tell the hardware what to do. It is grouped into system software, application software and utility software.',
    definitionHindi:
      'Software programs और instructions का वह समूह है जो hardware को बताता है कि क्या करना है। इसे तीन भागों में बांटा जाता है: system software, application software और utility software।',
    simpleWords:
      'Hardware शरीर है, software उसकी जान। Windows phone को चलाता है (system), WhatsApp आपका काम करता है (application), और antivirus सफाई-सुरक्षा करता है (utility)। तीनों software हैं, काम अलग-अलग।',
    examImportance: 'High (3–4 questions on software types and compiler vs interpreter)',
    detailedExplanation: `### System software — runs the machine

System software works between the hardware and everything else. Without it the computer cannot even start.

- **Operating system (OS)** — the most important program on any computer. It starts the machine, runs other programs, manages memory and files, and gives you the screen you click on. Windows, Linux (Ubuntu), macOS, Android and iOS are all operating systems. Chapter 2 covers the OS in detail.
- **Device drivers** — small programs that let the OS talk to a particular piece of hardware: the printer driver, the graphics driver.
- **Language translators** — programs that turn the code a programmer writes into the 0s and 1s the CPU understands. There are three, and the exam asks the difference:

| Translator | What it does |
|---|---|
| **Compiler** | Translates the *whole* program at once, then the translated program runs. Errors are reported together after translation. Used by C, C++, Java. |
| **Interpreter** | Translates and runs the program *one line at a time*. Stops at the first error. Used by Python, JavaScript. |
| **Assembler** | Translates assembly language (short codes like ADD, MOV) into machine code. |

### Application software — does your work

Application software is what you actually open to get something done. It runs on top of the OS.

- **General purpose** — useful to everyone: word processor (LibreOffice Writer, MS Word), spreadsheet (LibreOffice Calc, Excel), presentation (LibreOffice Impress, PowerPoint), browser (Chrome), media player (VLC).
- **Special purpose** — built for one job or one organisation: railway reservation system, hospital management software, Tally for accounts, a school's fee software.

Chapters 3 to 5 of this course are entirely about the LibreOffice applications.

### Utility software — keeps the computer healthy

Utilities do maintenance. They are not the reason you bought the computer, but you would miss them:

- **Antivirus** (Windows Defender, Quick Heal) — finds and removes viruses.
- **Disk cleanup / disk defragmenter** — frees space and tidies the hard disk so it works faster.
- **File compression** (WinRAR, 7-Zip) — squeezes files into a .zip to save space or send them.
- **Backup tools** — copy your files somewhere safe.

### Firmware

One more word you will meet: **firmware** is software stored permanently in a chip inside a device — the BIOS on a motherboard, the program inside a washing machine or a TV remote. It sits between hardware and software.`,
    realWorldAnalogy:
      'Theatre में stage, lights और बिजली (system software) पहले चाहिए; उस पर होने वाला नाटक (application) असली मकसद है; और सफाई कर्मचारी (utility) सब कुछ चलता रखते हैं।',
    importantPoints: [
      'तीन प्रकार: system (OS, drivers, translators), application (Writer, Calc, browser), utility (antivirus, compression, disk cleanup)।',
      'Operating system सबसे जरूरी system software है — इसके बिना कंप्यूटर शुरू नहीं होता।',
      'Compiler पूरा program एक साथ translate करता है; interpreter एक-एक line; assembler assembly language को machine code में बदलता है।',
      'Antivirus और WinRAR utility software हैं, application नहीं।',
      'Firmware = chip में स्थायी रूप से रखा software (जैसे BIOS)।',
    ],
    commonMistakes: [
      'Compiler और interpreter उलट देना — याद रखें: compiler = complete (पूरा एक बार में), interpreter = line by line।',
      'Antivirus को application software लिखना — यह maintenance का काम करता है, इसलिए utility है।',
      'MS Word या LibreOffice को system software कहना — ये application हैं; system software OS है।',
    ],
    examTips: [
      '"कौन-सा translator program को line-by-line चलाता है?" → Interpreter।',
      '"Disk defragmenter किस प्रकार का software है?" → Utility।',
      '"सबसे महत्वपूर्ण system software" → Operating system।',
    ],
    quickRevision:
      'Software = system (OS, drivers, compiler/interpreter/assembler) + application (Writer, Calc, Impress, browser; general या special purpose) + utility (antivirus, 7-Zip, disk cleanup)। Firmware chip में रहता है।',
    practiceAssignment:
      'अपने computer या phone में installed 10 programs की list बनाएं और हर एक के आगे लिखें: system, application या utility। फिर application वालों को general-purpose और special-purpose में बांटें।',
    microQuiz: [
      q(
        'Which translator converts and runs a program one line at a time?',
        ['Compiler', 'Interpreter', 'Assembler', 'Linker'],
        'B',
        'An interpreter works line by line and stops at the first error; a compiler translates the whole program first.',
      ),
      q(
        'Antivirus software is an example of',
        ['System software', 'Application software', 'Utility software', 'Firmware'],
        'C',
        'Utilities maintain and protect the computer; antivirus, disk cleanup and compression tools are utilities.',
      ),
    ],
  },

  /* ============================================ 7. Open source =========== */
  {
    chapterNumber: 1,
    topicNumber: 7,
    slug: 'open-source-and-proprietary-software',
    title: 'Open Source and Proprietary Software',
    hindiTitle: 'ओपन सोर्स और प्रोप्राइटरी सॉफ्टवेयर',
    definitionEnglish:
      'Open-source software makes its source code public so anyone can study, change and share it, usually free of cost; proprietary software keeps its source code secret and is owned and sold by a company.',
    definitionHindi:
      'Open-source software अपना source code सबके लिए खुला रखता है ताकि कोई भी उसे पढ़, बदल और बांट सके, आमतौर पर मुफ्त; proprietary software का source code गुप्त रहता है और उसे एक company बेचती है।',
    simpleWords:
      'Linux और LibreOffice की recipe (code) सबके सामने रखी है — कोई भी देखे, सुधारे, बांटे: open source। Windows और MS Office की recipe Microsoft के पास बंद है और आप उसे खरीदकर इस्तेमाल करते हैं: proprietary।',
    examImportance: 'High (2–3 questions; LibreOffice and Linux are the standard examples)',
    detailedExplanation: `### Source code — the recipe

Every program starts as text written by programmers, called **source code**. Whether that text is shared or hidden is the whole difference between the two kinds of software.

### Open source vs proprietary

| | Open-source software | Proprietary software |
|---|---|---|
| Source code | Public — anyone can read and modify it | Secret — only the owner can see it |
| Cost | Usually free | Bought, or paid by subscription |
| Who improves it | A worldwide community of volunteers and companies | The company that owns it |
| Licence | Open licences such as **GNU GPL**, MIT, Apache | A **EULA** (End User Licence Agreement) that restricts copying |
| Examples | **Linux, Ubuntu, LibreOffice, VLC, Firefox, Python, Android** | **Windows, MS Office, macOS, Adobe Photoshop** |

Both kinds can be good software. Government of India actively promotes open source because it saves licence fees and keeps control of the code — which is why the CCC practical uses LibreOffice rather than MS Office.

### People and dates the exam likes

- **Richard Stallman** started the free-software movement and the **Free Software Foundation (FSF)** in 1985; the **GNU GPL** licence comes from there.
- **Linus Torvalds** wrote the **Linux** kernel in **1991**.
- **Android** is built on the Linux kernel and is open source, even though most phones add Google's proprietary apps on top.

### Free of cost is not the same as open source

Students mix these up, so keep them apart:

- **Freeware** — free to use, but the code is closed. Google Chrome, Adobe Acrobat Reader, WhatsApp. Free, *not* open source.
- **Shareware / trial** — free for a limited time or with limited features, then you pay. WinRAR's 40-day trial.
- **Open source** — the code itself is free and open, whatever the price.`,
    realWorldAnalogy:
      'दादी की recipe जो पूरा मोहल्ला जानता है और हर घर अपने हिसाब से बनाता है — open source। Coca-Cola का formula जो तिजोरी में बंद है और सिर्फ bottle बिकती है — proprietary।',
    importantPoints: [
      'Open source = source code खुला, आमतौर पर मुफ्त: Linux, LibreOffice, VLC, Firefox, Android।',
      'Proprietary = code गुप्त, company बेचती है: Windows, MS Office, Photoshop।',
      'Open-source licence: GNU GPL; proprietary licence: EULA।',
      'Richard Stallman = FSF (1985); Linus Torvalds = Linux (1991)।',
      'Freeware (Chrome, Acrobat Reader) मुफ्त है पर open source नहीं।',
    ],
    commonMistakes: [
      'Freeware और open source को एक समझना — Chrome मुफ्त है पर उसका code बंद है, इसलिए open source नहीं।',
      'Android को proprietary लिखना — Android Linux पर बना open-source OS है।',
      'GPL का full form गलत लिखना — General Public License।',
    ],
    examTips: [
      '"LibreOffice open-source software है — सही या गलत?" → सही।',
      '"Linux kernel किसने बनाया?" → Linus Torvalds (1991)।',
      '"GPL का full form" → General Public License।',
    ],
    quickRevision:
      'Open source: code खुला, मुफ्त, GNU GPL — Linux, LibreOffice, VLC, Android (Torvalds 1991, Stallman FSF 1985)। Proprietary: code बंद, EULA — Windows, MS Office। Freeware मुफ्त पर बंद code।',
    practiceAssignment:
      'libreoffice.org खोलें और Download page पर देखें कि कोई कीमत नहीं मांगी जाती। फिर अपने computer के 5 programs को open source / proprietary / freeware में बांटें।',
    microQuiz: [
      q(
        'Which of these is open-source software?',
        ['Microsoft Windows', 'Adobe Photoshop', 'LibreOffice Writer', 'MS Excel'],
        'C',
        'LibreOffice is free and its source code is public; the others are proprietary.',
      ),
      q(
        'Google Chrome is free to download but its full source code is not public. It is best described as',
        ['Open source', 'Freeware', 'Shareware', 'Firmware'],
        'B',
        'Free to use with closed code is freeware. Open source means the code itself is open.',
      ),
    ],
  },

  /* ============================================ 8. Mobile apps =========== */
  {
    chapterNumber: 1,
    topicNumber: 8,
    slug: 'mobile-apps-and-ecosystem',
    title: 'Mobile Apps and Mobile Operating Systems',
    hindiTitle: 'मोबाइल ऐप्स और मोबाइल ऑपरेटिंग सिस्टम',
    definitionEnglish:
      'A mobile app is a program made to run on a smartphone or tablet. Apps run on a mobile operating system — mainly Android or iOS — and are installed from an app store.',
    definitionHindi:
      'Mobile app वह program है जो smartphone या tablet पर चलने के लिए बना है। Apps mobile operating system — मुख्यतः Android या iOS — पर चलते हैं और app store से install किए जाते हैं।',
    simpleWords:
      'WhatsApp, Paytm, YouTube — ये apps हैं। Phone में जो चीज़ इन सबको चलाती है वह mobile OS है: ज़्यादातर phones में Android, iPhone में iOS। Play Store वह दुकान है जहां से apps मिलते हैं।',
    examImportance: 'Medium (1–2 questions on Android, iOS and app file types)',
    detailedExplanation: `### Two operating systems run almost every phone

| | Android | iOS |
|---|---|---|
| Made by | Google | Apple |
| Runs on | Phones from many companies — Samsung, Xiaomi, Vivo, OnePlus and others | Only Apple's iPhone and iPad |
| Open or closed | Open source, built on the Linux kernel | Proprietary |
| App store | Google Play Store | Apple App Store |
| App file type | **.apk** (Android Package) | **.ipa** |

Because Android is open source and runs on cheap phones from many makers, it is by far the most common mobile OS in India.

### Kinds of apps

- **Native apps** are built for one OS and installed on the phone — WhatsApp, Google Pay. They are fast and can use everything the phone has: camera, GPS, contacts.
- **Web apps** are websites designed to work like an app in the phone's browser — nothing to install. IRCTC's site on your phone, for example.
- **Hybrid apps** are built once with web technology and packaged to run on both Android and iOS.

### Permissions — what an app is allowed to touch

An app cannot use your camera, microphone, location or contacts unless you allow it. The phone asks the first time, and you can change your answer later in Settings → Apps → Permissions. Check this occasionally: a torch app does not need your contacts.

### Installing safely

Install apps only from the official store. An **.apk** file downloaded from a random website can carry malware — this is the most common way phones get infected. Keep the OS and apps updated; updates fix security holes.`,
    realWorldAnalogy:
      'Mobile OS घर की नींव और बिजली-पानी है; apps उसमें रखे उपकरण — mixer, TV, fridge। App store वह भरोसेमंद दुकान है जहां से उपकरण खरीदते हैं; सड़क से उठाया उपकरण (unknown .apk) खतरनाक हो सकता है।',
    importantPoints: [
      'Android Google का है, open source, Linux kernel पर बना; iOS Apple का है, proprietary।',
      'Android apps .apk file होते हैं और Google Play Store से मिलते हैं; iOS apps .ipa, App Store से।',
      'App के प्रकार: native (install होता है), web app (browser में चलता है), hybrid (दोनों OS पर एक code)।',
      'Camera, location, contacts जैसी चीज़ें app को permission देने पर ही मिलती हैं।',
      'Official store के बाहर से .apk install करना virus का सबसे आम रास्ता है।',
    ],
    commonMistakes: [
      'Android को Apple का और iOS को Google का बता देना — Android = Google, iOS = Apple।',
      'यह सोचना कि .exe file phone पर install हो जाएगी — .exe Windows की है; Android .apk लेता है।',
    ],
    examTips: [
      '"Android किस kernel पर आधारित है?" → Linux।',
      '"Android app की file extension" → .apk।',
      '"iPhone का operating system" → iOS।',
    ],
    quickRevision:
      'Mobile OS: Android (Google, open source, Linux, .apk, Play Store) और iOS (Apple, proprietary, .ipa, App Store)। Apps native / web / hybrid। Permissions से app की पहुंच तय होती है; apps सिर्फ official store से।',
    practiceAssignment:
      'Phone में Settings → Apps में जाकर कोई तीन apps खोलें और उनकी Permissions देखें। जिस app को उसके काम के लिए ज़रूरत न हो ऐसी कोई permission (जैसे torch को contacts) मिली हो तो बंद करें।',
    microQuiz: [
      q(
        'The file extension of an Android app package is',
        ['.exe', '.apk', '.ipa', '.docx'],
        'B',
        'Android uses .apk; iOS uses .ipa; .exe is a Windows program.',
      ),
      q(
        'Which statement about Android is correct?',
        ['It is made by Apple', 'It runs only on Samsung phones', 'It is open source and based on the Linux kernel', 'Its apps come from the Apple App Store'],
        'C',
        'Android is Google\'s open-source OS built on Linux; it runs on phones from many manufacturers.',
      ),
    ],
  },
];
