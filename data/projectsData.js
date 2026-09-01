// Guided Progressive Projects for O-Level M2-R5.1

export const projectsData = [
  {
    id: "project-1",
    number: 1,
    title: "Personal Profile / Portfolio Webpage",
    hindiTitle: "प्रोजेक्ट 1: व्यक्तिगत प्रोफाइल एवं पोर्टफोलियो वेबपेज",
    level: "Beginner",
    technologies: ["HTML5", "Semantic Elements"],
    duration: "3 Hours",
    description: "Build a semantic personal portfolio page with bio, education table, skills list, profile image, and contact hyperlinks.",
    learningOutcomes: [
      "Structuring content using <header>, <section>, <article>, and <footer>",
      "Embedding profile pictures using <img> with proper alt and dimension attributes",
      "Displaying educational qualifications using HTML <table> with border, th, and td",
      "Organizing technical skills using nested <ol> and <ul> lists",
      "Adding email and phone links with mailto: and tel: protocols"
    ]
  },
  {
    id: "project-2",
    number: 2,
    title: "Student Admission & Registration Portal",
    hindiTitle: "प्रोजेक्ट 2: छात्र प्रवेश एवं पंजीकरण पोर्टल",
    level: "Beginner-Intermediate",
    technologies: ["HTML5 Forms", "CSS3 Styling"],
    duration: "4 Hours",
    description: "A complete responsive registration form with text inputs, radio buttons, checkboxes, dropdown select, file upload, and HTML5 validations.",
    learningOutcomes: [
      "Using <fieldset> and <legend> to group student personal details, address, and course selections",
      "Configuring radio buttons for gender and course categories with synchronized name attributes",
      "Applying CSS styling: border-radius, box-shadow, focus rings, and hover button transitions",
      "Validating input lengths, required fields, and pattern matching for mobile numbers"
    ]
  },
  {
    id: "project-3",
    number: 3,
    title: "Responsive Institute / College Portal",
    hindiTitle: "प्रोजेक्ट 3: W3.CSS ग्रिड युक्त रिस्पॉन्सिव कॉलेज पोर्टल",
    level: "Intermediate",
    technologies: ["W3.CSS Framework", "Responsive Grid", "HTML5"],
    duration: "5 Hours",
    description: "Develop a modern 3-column responsive educational institute homepage using W3.CSS panels, cards, buttons, and navigation bar.",
    learningOutcomes: [
      "Building a top navigation bar using w3-bar and w3-bar-item classes",
      "Creating hero promotional banners with w3-container and w3-teal background",
      "Implementing 12-column responsive layout using w3-row and w3-col (s12, m4, l4)",
      "Designing course highlight cards with w3-card-4 and rounded hover buttons"
    ]
  },
  {
    id: "project-4",
    number: 4,
    title: "Interactive CSS Image Gallery & Lightbox",
    hindiTitle: "प्रोजेक्ट 4: इंटरएक्टिव CSS इमेज गैलरी एवं होवर इफेक्ट्स",
    level: "Intermediate",
    technologies: ["CSS3 Flexbox/Grid", "CSS Transforms", "Transitions"],
    duration: "4 Hours",
    description: "A visually striking photo gallery with responsive grid layout, card elevation shadows, scale-on-hover zoom animations, and captions.",
    learningOutcomes: [
      "Using CSS Grid with grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))",
      "Applying smooth transform: scale(1.06) with cubic-bezier transition curves",
      "Designing gradient overlay captions on hover",
      "Building pure CSS modal popups using the :target pseudo-class"
    ]
  },
  {
    id: "project-5",
    number: 5,
    title: "Interactive JavaScript Quiz & Calculator",
    hindiTitle: "प्रोजेक्ट 5: जावास्क्रिप्ट इंटरएक्टिव क्विज एवं कैलकुलेटर",
    level: "Intermediate-Advanced",
    technologies: ["JavaScript", "DOM Manipulation", "Events"],
    duration: "5 Hours",
    description: "Create an interactive mini quiz that scores student answers on the fly and a basic web calculator handling arithmetic operations.",
    learningOutcomes: [
      "Handling DOM events: onclick, onchange, and keyboard events",
      "Evaluating arithmetic expressions and managing state in JavaScript variables",
      "Conditionally manipulating the DOM (document.getElementById, innerHTML, classList)",
      "Displaying popup feedback using alert() and confirm() dialogs"
    ]
  },
  {
    id: "project-6",
    number: 6,
    title: "AngularJS Dynamic Filter & Data Table",
    hindiTitle: "प्रोजेक्ट 6: AngularJS लाइव सर्च एवं फिल्टर डेटा टेबल",
    level: "Advanced",
    technologies: ["AngularJS 1.x", "Two-Way Binding", "Directives"],
    duration: "4 Hours",
    description: "Build a searchable directory of courses and student records using AngularJS expressions, ng-model, and ng-repeat filters.",
    learningOutcomes: [
      "Initializing an application with ng-app and ng-init",
      "Binding input box search text with ng-model for real-time instant table filtering",
      "Iterating collections using ng-repeat='student in students | filter:searchText'",
      "Formatting currency and uppercase text using AngularJS built-in pipes/filters"
    ]
  },
  {
    id: "project-7",
    number: 7,
    title: "Photo Editing Web Asset Optimization Showcase",
    hindiTitle: "प्रोजेक्ट 7: वेब इमेज ऑप्टिमाइजेशन एवं फिल्टर शोकेस",
    level: "Intermediate",
    technologies: ["Photo Editing Concepts", "CSS Filters", "WebP/PNG"],
    duration: "3 Hours",
    description: "A hands-on demonstration of web asset preparation: cropping, transparent PNGs, 72 PPI resolution, and simulating GIMP/Photoshop filters via CSS.",
    learningOutcomes: [
      "Comparing image sizes and visual clarity across JPEG, PNG-24, and WebP",
      "Simulating blur, brightness, contrast, grayscale, and invert filters in the browser",
      "Understanding DPI vs PPI and pixel density for high-resolution displays",
      "Optimizing banner graphics for fast LCP (Largest Contentful Paint) web performance"
    ]
  },
  {
    id: "project-8",
    number: 8,
    title: "Complete O-Level Web Designing Capstone Website",
    hindiTitle: "प्रोजेक्ट 8: संपूर्ण O-Level वेब डिजाइनिंग कैपस्टोन वेबसाइट",
    level: "Capstone (Master Project)",
    technologies: ["HTML5", "CSS3", "W3.CSS", "JavaScript", "AngularJS", "Web Publishing"],
    duration: "8 Hours",
    description: "An end-to-end multi-page web platform combining all 8 units: structured semantic HTML5, responsive layout, W3.CSS components, interactive JS forms, and FTP hosting readiness.",
    learningOutcomes: [
      "Synthesizing all 8 syllabus units into a unified, coherent real-world project",
      "Testing cross-browser compatibility across Chrome, Firefox, and Edge",
      "Validating HTML5 markup against official W3C Validator standards",
      "Preparing site directory hierarchy, metadata tags, and robots.txt for production hosting"
    ]
  }
];

export const masterProjects = projectsData;
