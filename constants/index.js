// 🔹 Navbar links
const navLinks = [
  { id: "home", title: "Home" },
  { id: "events", title: "Events" },
  { id: "team", title: "Team" },
];

const events = [
  // Existing Coding Event
  {
    title: "CodeQuest Hackathon",
    slug: "codequest-hackathon",
    category: "Coding",
    img: "https://i.im.ge/2023/10/22/t5Ggk1.charlesdeluvio-Lks7vei-eAg-unsplash-1.jpg?w=2048&q=10",
    desc: "An overnight hackathon where participants build innovative projects and solve real-world problems using technology.",
    prize: "₹50,000 + Goodies",
    deadline: "15th September 2025",
    venue: "Main Auditorium, Tech Campus",
    schedule: "16th September 2025, 9:00 AM – 17th September 2025, 9:00 AM",
    rules: [
      "Teams of 2-4 participants allowed.",
      "All projects must be built during the hackathon.",
      "Plagiarism will lead to disqualification.",
      "Judges’ decision will be final.",
    ],
    faq: [
      { q: "Do I need prior hackathon experience?", a: "No! Beginners are welcome. Mentors will guide you." },
      { q: "Will food and internet be provided?", a: "Yes, meals, snacks, and Wi-Fi will be available." },
    ],
    contacts: ["Rohan - +91 9876543210", "Aditi - +91 8765432109"],
    registerLink: "https://example.com/codequest",
    time: "To be announced",
  },
  // New Coding Events
  {
    title: "AI Code Clash",
    slug: "ai-code-clash",
    category: "Coding",
    img: "https://i.im.ge/2023/10/22/t5G7fa.max-bender-XIVDN9cxOVc-unsplash-2.jpg?w=2048&q=10",
    desc: "Build AI-driven applications to solve challenges in healthcare, education, or sustainability.",
    prize: "₹60,000 + Internship Opportunities",
    deadline: "13th September 2025",
    venue: "AI Lab, Tech Campus",
    schedule: "14th September 2025, 10:00 AM – 15th September 2025, 10:00 AM",
    rules: [
      "Teams of 2-5 participants.",
      "Use any AI/ML framework (e.g., TensorFlow, PyTorch).",
      "No pre-built solutions allowed.",
      "Presentation to judges required.",
    ],
    faq: [
      { q: "Can we use pre-trained models?", a: "Yes, but significant customization is expected." },
      { q: "Is cloud computing access provided?", a: "Yes, limited cloud credits will be provided." },
    ],
    contacts: ["Vikram - +91 9123456700", "Shalini - +91 8765432190"],
    registerLink: "https://example.com/aicodeclash",
    time: "To be announced",
  },
  {
    title: "Web Dev Showdown",
    slug: "web-dev-showdown",
    category: "Coding",
    img: "https://i.im.ge/2023/10/22/t55uKG.coding1-min.png?w=2048&q=10",
    desc: "Create responsive and innovative web applications under a time crunch.",
    prize: "₹30,000 + Certificates",
    deadline: "10th September 2025",
    venue: "Computer Lab A, Block B",
    schedule: "11th September 2025, 9:00 AM – 6:00 PM",
    rules: [
      "Teams of 1-3 participants.",
      "Use any web framework (React, Angular, etc.).",
      "Apps must be mobile-friendly.",
      "Judging based on functionality and UI.",
    ],
    faq: [
      { q: "Can we use templates?", a: "Basic templates are allowed, but originality is key." },
      { q: "Will hosting be provided?", a: "Yes, temporary hosting will be available." },
    ],
    contacts: ["Anil - +91 8899776644", "Tara - +91 7766554422"],
    registerLink: "https://example.com/webdevshowdown",
    time: "To be announced",
  },
  {
    title: "Code Golf Challenge",
    slug: "code-golf-challenge",
    category: "Coding",
    img: "https://i.im.ge/2023/10/22/t9QZRh.lorenzo-herrera-p0j-mE6mGo4-unsplash-1.jpg?w=2048&q=10",
    desc: "Solve algorithmic problems with the shortest possible code in your favorite programming language.",
    prize: "₹20,000 + Goodies",
    deadline: "17th September 2025",
    venue: "Lecture Hall 3, Block C",
    schedule: "18th September 2025, 1:00 PM – 5:00 PM",
    rules: [
      "Individual participation only.",
      "Solutions judged on code length and correctness.",
      "Any programming language allowed.",
      "No internet access during the event.",
    ],
    faq: [
      { q: "What languages are best for code golf?", a: "Python, C, or GolfScript are popular, but any language works." },
      { q: "Are there practice problems?", a: "Yes, sample problems will be shared post-registration." },
    ],
    contacts: ["Suresh - +91 9988776633", "Lila - +91 7766443311"],
    registerLink: "https://example.com/codegolf",
    time: "To be announced",
  },
  // Existing Robotics Events
  {
    title: "Robo Race",
    slug: "robo-race",
    category: "Robotics",
    img: "https://i.im.ge/2023/10/23/tjfSZ6.apryan-widodo-LVKVvuhq5r4-unsplash-1.jpg?w=2048&q=10",
    desc: "A thrilling race where autonomous robots compete on a challenging obstacle track.",
    prize: "₹30,000 + Trophies",
    deadline: "18th September 2025",
    venue: "Mechanical Workshop Ground",
    schedule: "20th September 2025, 11:00 AM – 4:00 PM",
    rules: [
      "Teams of 2-3 allowed.",
      "Robots must be built prior to the event.",
      "Robots must complete the track within time limit.",
    ],
    faq: [
      { q: "What type of robots are allowed?", a: "Wheeled robots only, no drones." },
      { q: "Can we use ready-made kits?", a: "Yes, but innovation will be rewarded." },
    ],
    contacts: ["Manav - +91 8899776655", "Priya - +91 9988223344"],
    registerLink: "https://example.com/roborace",
    time: "To be announced",
  },
  {
    title: "Line Follower Challenge",
    slug: "line-follower-challenge",
    category: "Robotics",
    img: "https://i.im.ge/2023/10/23/tjfgGG.marilia-castelli-wCVNhNnI-2s-unsplash-1.jpg?w=2048&q=10",
    desc: "Robots must follow a track of black-and-white lines with maximum precision and speed.",
    prize: "₹15,000 + Medals",
    deadline: "14th September 2025",
    venue: "Robotics Lab, Block C",
    schedule: "15th September 2025, 2:00 PM – 6:00 PM",
    rules: [
      "Teams of max 3 participants.",
      "Robots must autonomously follow the line.",
      "Manual control is not allowed.",
    ],
    faq: [
      { q: "Can I use sensors?", a: "Yes, IR or LDR sensors are recommended." },
      { q: "What is the track size?", a: "Track details will be revealed on the event day." },
    ],
    contacts: ["Karan - +91 7766554433", "Simran - +91 8877665544"],
    registerLink: "https://example.com/linefollower",
    time: "To be announced",
  },
  // New Robotics Events
  {
    title: "Drone Obstacle Course",
    slug: "https://i.im.ge/2023/10/23/tjkiEx.aditya-chinchure-GKkm9OXObCM-unsplash-1.jpg?w=2048&q=10",
    category: "Robotics",
    img: "/images/dronecourse.jpg",
    desc: "Navigate drones through a complex obstacle course with precision and speed.",
    prize: "₹35,000 + Certificates",
    deadline: "19th September 2025",
    venue: "Outdoor Arena, Tech Campus",
    schedule: "21st September 2025, 12:00 PM – 5:00 PM",
    rules: [
      "Teams of 1-2 participants.",
      "Drones must be pre-tested for safety.",
      "Manual control allowed, autonomous for bonus points.",
    ],
    faq: [
      { q: "Can we use custom-built drones?", a: "Yes, but they must meet safety standards." },
      { q: "Is there a weight limit?", a: "Max 2 kg for drones." },
    ],
    contacts: ["Vishal - +91 8877663322", "Riya - +91 9988775544"],
    registerLink: "https://example.com/dronecourse",
    time: "To be announced",
  },
  {
    title: "Robo Sumo",
    slug: "robo-sumo",
    category: "Robotics",
    img: "https://i.im.ge/2023/10/23/tjf4DX.Screenshot-2023-10-23-080427-1.png?w=2048&q=10",
    desc: "Build robots to push opponents out of a circular arena in a sumo-style competition.",
    prize: "₹25,000 + Trophies",
    deadline: "16th September 2025",
    venue: "Mechanical Lab, Block A",
    schedule: "17th September 2025, 11:00 AM – 4:00 PM",
    rules: [
      "Teams of 2-3 participants.",
      "Robots must weigh under 3 kg.",
      "No intentional damage to opponent robots.",
    ],
    faq: [
      { q: "Can we modify robots between rounds?", a: "Yes, within 5-minute breaks." },
      { q: "Are there size restrictions?", a: "Max 20x20 cm base." },
    ],
    contacts: ["Nikhil - +91 7766445599", "Anita - +91 8877664433"],
    registerLink: "https://example.com/robosumo",
    time: "To be announced",
  },
  // Existing Astro Events
  {
    title: "Stargazing Night",
    slug: "stargazing-night",
    category: "Astro",
    img: "https://cdn.britannica.com/60/190760-131-F1576E0B/space-background-telescope-silhouette-NASA-image-elements.jpg?w=2048&q=10",
    desc: "An evening with telescopes under the night sky, guided by experts in astronomy.",
    prize: "Participation Certificates",
    deadline: "16th September 2025",
    venue: "Astronomy Club Terrace",
    schedule: "18th September 2025, 8:00 PM – Midnight",
    rules: [
      "Individual and groups allowed.",
      "No flash photography near telescopes.",
    ],
    faq: [
      { q: "Do I need to bring a telescope?", a: "No, telescopes will be provided." },
      { q: "Is prior knowledge required?", a: "No, experts will explain everything." },
    ],
    contacts: ["Rahul - +91 8899776655", "Sneha - +91 7788994455"],
    registerLink: "https://example.com/stargazing",
    time: "To be announced",
  },
  {
    title: "Astro Quiz",
    slug: "astro-quiz",
    category: "Astro",
    img: "https://www.shutterstock.com/image-vector/cosmic-convergence-astronauts-journey-through-600nw-2315587451.jpg?w=2048&q=10",
    desc: "Quiz competition on space science, astronomy, and astrophysics.",
    prize: "₹8,000 + Certificates",
    deadline: "11th September 2025",
    venue: "Physics Lecture Hall",
    schedule: "12th September 2025, 2:00 PM – 5:00 PM",
    rules: [
      "Teams of 2 allowed.",
      "No internet devices during quiz.",
      "Quiz will have MCQs and buzzer round.",
    ],
    faq: [
      { q: "Is the quiz only for science students?", a: "No, open for all participants." },
      { q: "Will there be a negative marking?", a: "Yes, -1 for every wrong answer." },
    ],
    contacts: ["Pooja - +91 6655778899", "Adarsh - +91 7766443322"],
    registerLink: "https://example.com/astroquiz",
    time: "To be announced",
  },
  // New Astro Events
  {
    title: "Rocket Design Challenge",
    slug: "rocket-design-challenge",
    category: "Astro",
    img: "https://i.im.ge/2023/10/23/tjfV2y.hung-nguyen-phi-5Bo6OfopSi0-unsplash-1.jpg?w=2048&q=10",
    desc: "Design and simulate a model rocket for a hypothetical space mission.",
    prize: "₹20,000 + Certificates",
    deadline: "15th September 2025",
    venue: "Aerospace Lab, Block D",
    schedule: "16th September 2025, 10:00 AM – 4:00 PM",
    rules: [
      "Teams of 2-4 participants.",
      "Use simulation software provided.",
      "Designs judged on feasibility and creativity.",
    ],
    faq: [
      { q: "Do we need aerospace knowledge?", a: "Basic guidance will be provided." },
      { q: "Can we use physical models?", a: "Only digital simulations are required." },
    ],
    contacts: ["Siddhant - +91 8877662211", "Kavya - +91 9988773322"],
    registerLink: "https://example.com/rocketdesign",
    time: "To be announced",
  },
  {
    title: "Astro Photography Workshop",
    slug: "astro-photography-workshop",
    category: "Astro",
    img: "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/11/2560x1920/sd-aspect-1489610446-milkyway.jpg?resize=768:*",
    desc: "Learn to capture stunning images of celestial bodies with expert guidance.",
    prize: "Certificates + Feature in Club Magazine",
    deadline: "17th September 2025",
    venue: "Astronomy Club Terrace",
    schedule: "19th September 2025, 7:00 PM – 10:00 PM",
    rules: [
      "Bring your own camera or use provided equipment.",
      "Follow instructor guidelines for telescope use.",
      "Submit one photo for exhibition.",
    ],
    faq: [
      { q: "Do I need a DSLR?", a: "No, mobile cameras with manual settings are fine." },
      { q: "Is prior experience needed?", a: "No, the workshop is beginner-friendly." },
    ],
    contacts: ["Arnav - +91 7766442288", "Tanya - +91 8877663399"],
    registerLink: "https://example.com/astrophotography",
    time: "To be announced",
  },
  // Existing Dept Event
  {
    title: "Design Sprint",
    slug: "design-sprint",
    category: "Dept",
    img: "/images/designsprint.jpg",
    desc: "A fast-paced event focused on UI/UX problem solving and creative design thinking challenges.",
    prize: "₹20,000 + Certificates",
    deadline: "10th September 2025",
    venue: "Innovation Lab, Block B",
    schedule: "12th September 2025, 10:00 AM – 6:00 PM",
    rules: [
      "Individual participation only.",
      "Submit all design assets before the deadline.",
      "Respect the theme provided at the event start.",
    ],
    faq: [
      { q: "What tools can I use?", a: "You can use Figma, Adobe XD, Photoshop, or any design tool." },
      { q: "Will I get feedback?", a: "Yes, judges will provide constructive feedback after results." },
    ],
    contacts: ["Neha - +91 9123456789", "Arjun - +91 9988776655"],
    registerLink: "https://example.com/designsprint",
    time: "To be announced",
  },
  // Reassign Photography Contest to Dept (Creative/Design)
  {
    title: "Photography Contest",
    slug: "photography-contest",
    category: "Dept",
    img: "/images/photography.jpg",
    desc: "Capture and share your best shots around the theme 'Innovation and Nature'.",
    prize: "₹15,000 + Goodies",
    deadline: "12th September 2025",
    venue: "Exhibition Hall",
    schedule: "13th September 2025, 11:00 AM – 3:00 PM",
    rules: [
      "Individual participation only.",
      "Photos must be original and unedited.",
      "Max 3 submissions per participant.",
    ],
    faq: [
      { q: "Can I use DSLR or mobile?", a: "Yes, any camera device is allowed." },
      { q: "Do I need to print photos?", a: "Yes, bring printed copies for exhibition." },
    ],
    contacts: ["Kabir - +91 6655443322", "Ananya - +91 7766889900"],
    registerLink: "https://example.com/photography",
    time: "To be announced",
  },
  // New Dept Events
  {
    title: "Logo Design Battle",
    slug: "logo-design-battle",
    category: "Dept",
    img: "/images/logodesign.jpg",
    desc: "Create a unique logo for a fictional startup based on a given brief.",
    prize: "₹18,000 + Certificates",
    deadline: "14th September 2025",
    venue: "Design Studio, Block B",
    schedule: "15th September 2025, 11:00 AM – 5:00 PM",
    rules: [
      "Individual participation only.",
      "Submit vector files in SVG/PNG format.",
      "Follow the provided brand guidelines.",
    ],
    faq: [
      { q: "Can I use Canva?", a: "Yes, but professional tools like Illustrator are preferred." },
      { q: "Will the brief be shared early?", a: "Brief will be revealed at the event start." },
    ],
    contacts: ["Rhea - +91 7766558877", "Soham - +91 8877661122"],
    registerLink: "https://example.com/logodesign",
    time: "To be announced",
  },
  {
    title: "Poster Making Competition",
    slug: "poster-making-competition",
    category: "Dept",
    img: "/images/postermaking.jpg",
    desc: "Design eye-catching posters for a tech fest theme using digital or traditional media.",
    prize: "₹12,000 + Goodies",
    deadline: "11th September 2025",
    venue: "Art Room, Block E",
    schedule: "12th September 2025, 1:00 PM – 4:00 PM",
    rules: [
      "Individual or teams of 2 allowed.",
      "Digital or hand-drawn posters accepted.",
      "Max size: A3 for physical, 1080p for digital.",
    ],
    faq: [
      { q: "Can I submit both digital and physical?", a: "No, choose one medium per entry." },
      { q: "Is there a theme?", a: "Yes, announced at the event start." },
    ],
    contacts: ["Ishaan - +91 9988774433", "Nidhi - +91 7766445566"],
    registerLink: "https://example.com/postermaking",
    time: "To be announced",
  },
  // Other Hackathons (Reassign Esports Arena and LAN Party, add new ones)
  {
    title: "Esports Arena",
    slug: "esports-arena",
    category: "Other Hackathons",
    img: "/images/esports.jpg",
    desc: "Compete in popular esports titles including Valorant, BGMI, and FIFA in a hackathon-style tournament.",
    prize: "₹40,000 + Gaming Accessories",
    deadline: "19th September 2025",
    venue: "Computer Science Lab, Block D",
    schedule: "21st September 2025, 10:00 AM – 10:00 PM",
    rules: [
      "Team sizes depend on the game.",
      "Cheating or hacks will result in disqualification.",
      "Follow fair play policies.",
    ],
    faq: [
      { q: "Do I need my own setup?", a: "Basic PCs will be provided. You may bring your peripherals." },
      { q: "Can we register for multiple games?", a: "Yes, but schedules may overlap." },
    ],
    contacts: ["Akash - +91 8899221100", "Sanya - +91 7778889990"],
    registerLink: "https://example.com/esports",
    time: "To be announced",
  },
  {
    title: "LAN Party",
    slug: "lan-party",
    category: "Other Hackathons",
    img: "/images/lanparty.jpg",
    desc: "A retro-style LAN gaming hackathon featuring CS 1.6, NFS, and more.",
    prize: "₹10,000 + Certificates",
    deadline: "13th September 2025",
    venue: "Innovation Hub, Block E",
    schedule: "14th September 2025, 4:00 PM – 10:00 PM",
    rules: [
      "Teams of 5 for CS 1.6.",
      "No external hacks or mods allowed.",
      "Respect gaming ethics.",
    ],
    faq: [
      { q: "Do I need to bring my laptop?", a: "No, systems will be provided." },
      { q: "Which games are featured?", a: "CS 1.6, NFS Most Wanted, Blur, and more." },
    ],
    contacts: ["Ritika - +91 7766552233", "Aryan - +91 6677889900"],
    registerLink: "https://example.com/lanparty",
    time: "To be announced",
  },
  {
    title: "IoT Hackathon",
    slug: "iot-hackathon",
    category: "Other Hackathons",
    img: "/images/iothackathon.jpg",
    desc: "Develop innovative IoT solutions for smart homes, cities, or agriculture.",
    prize: "₹45,000 + Hardware Kits",
    deadline: "18th September 2025",
    venue: "Electronics Lab, Block C",
    schedule: "19th September 2025, 9:00 AM – 20th September 2025, 9:00 AM",
    rules: [
      "Teams of 2-4 participants.",
      "Prototypes must include IoT hardware.",
      "Provide a working demo to judges.",
    ],
    faq: [
      { q: "Will hardware be provided?", a: "Basic kits like Raspberry Pi will be available." },
      { q: "Can we use cloud platforms?", a: "Yes, AWS IoT or similar platforms are allowed." },
    ],
    contacts: ["Ravi - +91 8877665544", "Pallavi - +91 9988772211"],
    registerLink: "https://example.com/iothackathon",
    time: "To be announced",
  },
  {
    title: "Blockchain Innovate",
    slug: "blockchain-innovate",
    category: "Other Hackathons",
    img: "/images/blockchain.jpg",
    desc: "Build decentralized applications using blockchain technology for finance, supply chain, or social impact.",
    prize: "₹50,000 + Certificates",
    deadline: "16th September 2025",
    venue: "Computer Lab B, Block D",
    schedule: "17th September 2025, 10:00 AM – 18th September 2025, 10:00 AM",
    rules: [
      "Teams of 2-4 participants.",
      "Use any blockchain platform (Ethereum, Solana, etc.).",
      "Smart contracts must be functional.",
    ],
    faq: [
      { q: "Do we need blockchain experience?", a: "Basic tutorials will be provided pre-event." },
      { q: "Can we use testnets?", a: "Yes, testnets are recommended for demos." },
    ],
    contacts: ["Sameer - +91 7766446677", "Aisha - +91 8877669988"],
    registerLink: "https://example.com/blockchain",
    time: "To be announced",
  },
  {
    title: "AR/VR Hackathon",
    slug: "ar-vr-hackathon",
    category: "Other Hackathons",
    img: "/images/arvrhackathon.jpg",
    desc: "Create immersive augmented or virtual reality experiences for education or entertainment.",
    prize: "₹40,000 + VR Headsets",
    deadline: "14th September 2025",
    venue: "Multimedia Lab, Block E",
    schedule: "15th September 2025, 9:00 AM – 16th September 2025, 9:00 AM",
    rules: [
      "Teams of 2-5 participants.",
      "Use AR/VR tools like Unity or Unreal Engine.",
      "Demos must run on provided hardware.",
    ],
    faq: [
      { q: "Do we need AR/VR devices?", a: "Basic headsets will be provided." },
      { q: "Can we focus on AR only?", a: "Yes, AR or VR projects are both acceptable." },
    ],
    contacts: ["Kunal - +91 9988773344", "Mira - +91 7766448899"],
    registerLink: "https://example.com/arvrhackathon",
    time: "To be announced",
  },
  // Cultural Event (Excluded as it doesn't fit requested categories, but kept for completeness)
  {
    title: "Talent Show",
    slug: "talent-show",
    category: "Cultural",
    img: "/images/talentshow.jpg",
    desc: "Showcase your music, dance, or acting talent on stage in front of a live audience.",
    prize: "₹25,000 + Certificates",
    deadline: "17th September 2025",
    venue: "Open Air Theatre",
    schedule: "19th September 2025, 5:00 PM – 10:00 PM",
    rules: [
      "Individual and group performances allowed.",
      "Time limit: 5 minutes per act.",
      "Offensive content not allowed.",
    ],
    faq: [
      { q: "Can I perform in multiple categories?", a: "Yes, but time slots will be limited." },
      { q: "Are musical instruments provided?", a: "Basic setup will be provided, bring your instruments if needed." },
    ],
    contacts: ["Meera - +91 7788990011", "Dev - +91 8899001122"],
    registerLink: "https://example.com/talentshow",
    time: "To be announced",
  },
];
// 🔹 Grouped by category for tabs in Event.jsx
const eventsData = events.reduce((acc, ev) => {
  if (!acc[ev.category]) acc[ev.category] = [];
  acc[ev.category].push(ev);
  return acc;
}, {});

const teamData = {
  SAC: [
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdsw.e8bda59d.jpg&w=2048&q=75",
      title: "Prof. Paonam Sudeep Mangang",
      subtitle: "Dean",
      handle: "Student's Welfare",
      borderColor: "#4F46E5", // Indigo
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAtanu.991f62a2.jpg&w=2048&q=75",
      title: "Dr. Atanu Singha Roy",
      subtitle: "SAC",
      handle: "President",
      borderColor: "#10B981", // Emerald
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FShuleenda.8d2b0b1b.jpg&w=2048&q=75",
      title: "Dr. Salam Shuleenda Devi",
      subtitle: "Technical",
      handle: "Vice-President",
      borderColor: "#F59E0B", // Amber
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fswarop.dde2bb37.jpeg&w=2048&q=75",
      title: "T. Swaroop Kumar",
      subtitle: "General Secretary 1",
      handle: "Science & Technology",
      borderColor: "#EF4444", // Red
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOmPrakash%20Yadav.a871c807.jpg&w=2048&q=75",
      title: "Om Prakash Yadav",
      subtitle: "General Secretary 2",
      handle: "Science & Technology",
      borderColor: "#06B6D4", // Cyan
    },
  ],
  Dev: [
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGaurav.140cc4c6.png&w=2048&q=75",
      title: "Gaurav",
      subtitle: "Lead Developer",
      handle: "@ganesh",
      borderColor: "#4F46E5", // Indigo
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjishnu.656e8b17.jpg&w=2048&q=75",
      title: "Jishnu",
      subtitle: "Lead Developer",
      handle: "@ganesh",
      borderColor: "#10B981", // Emerald
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcharity.1eca90cc.jpg&w=2048&q=75",
      title: "Charity",
      subtitle: "Lead Developer",
      handle: "@ganesh",
      borderColor: "#F59E0B", // Amber
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faryan.3afb70e6.jpg&w=2048&q=75",
      title: "Aryan",
      subtitle: "Lead Developer",
      handle: "@ganesh",
      borderColor: "#06B6D4", // Cyan
    },
  ],
  Core: [
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBaidi.1acfc385.jpeg&w=2048&q=75",
      title: "Ganesh Reidi",
      subtitle: "Core Member",
      handle: "@ganesh",
      borderColor: "#4F46E5", // Indigo
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAbhijith%20Sai.4bae7019.jpg&w=2048&q=75",
      title: "Ganpu Abhijith Sai",
      subtitle: "Core Member",
      handle: "@abhijith",
      borderColor: "#10B981", // Emerald
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FT%20Vikram%20Rathod.bb31eb40.jpg&w=2048&q=75",
      title: "T Vikram Rathod",
      subtitle: "Core Member",
      handle: "@vikram",
      borderColor: "#F59E0B", // Amber
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNeelkanth.a47789e0.jpg&w=2048&q=75",
      title: "Neelkantha Mandal",
      subtitle: "Core Member",
      handle: "@neelkantha",
      borderColor: "#EF4444", // Red
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJitta%20Chandra%20Sekhar.760cf396.jpg&w=2048&q=75",
      title: "Jitta Chandra Sekhar",
      subtitle: "Member",
      handle: "@neelkantha",
      borderColor: "#06B6D4", // Cyan
    },
  ],
  Design: [
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FParuvada%20Dhanunjay%20Naidu.6d734555.png&w=2048&q=75",
      title: "P Dhanunjay",
      subtitle: "Convener",
      handle: "@rahul",
      borderColor: "#8B5CF6", // Violet
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSUBHADEEP%20SINHA.cf90fae3.jpg&w=2048&q=75",
      title: "Shubhadeep Sinha",
      subtitle: "Convener",
      handle: "@rahul",
      borderColor: "#EC4899", // Pink
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBotu%20Varun%20Kumar.463a0242.jpg&w=2048&q=75",
      title: "Botu Varun",
      subtitle: "Co-ordinator",
      handle: "@rahul",
      borderColor: "#10B981", // Emerald
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FM%20Manikanta%20Reddy.08b20815.jpg&w=2048&q=75",
      title: "M. Manikanta Reddy",
      subtitle: "Co-ordinator",
      handle: "@rahul",
      borderColor: "#F59E0B", // Amber
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKaripireddy%20Surya%20Teja%20Gopal%20Reddy.cb4779af.jpg&w=2048&q=75",
      title: "K. Surya Teja Gopal Reddy",
      subtitle: "Co-ordinator",
      handle: "@rahul",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPankaj%20Saraswat.ed1fdb92.jpg&w=2048&q=75",
      title: "Pankaj Saraswat",
      subtitle: "Co-ordinator",
      handle: "@rahul",
      borderColor: "#EF4444", // Red
    },
  ],
  Marketing: [
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSupriya.37140f4c.jpg&w=2048&q=75",
      title: "Supriya Neogi",
      subtitle: "Co-ordinator(Sponsor & Marketing)",
      handle: "@ananya",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAvinash%20Renukunta.2845fb31.jpeg&w=2048&q=75",
      title: "Avinash Renukunta",
      subtitle: "Co-ordinator(Sponsor & Marketing)",
      handle: "@ananya",
      borderColor: "#10B981", // Emerald
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
      title: "Yongdo Sangma",
      subtitle: "Co-ordinator(Sponsor & Marketing)",
      handle: "@ananya",
      borderColor: "#F59E0B", // Amber
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProtiksha%20Hajong.804347a4.jpg&w=2048&q=75",
      title: "Protiksha Hajong",
      subtitle: "Co-ordinator(Publicity & Social Media)",
      handle: "@ananya",
      borderColor: "#EF4444", // Red
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSaket%20Pratap%20Singh.f1de8960.jpeg&w=2048&q=75",
      title: "Saket Pratap Singh",
      subtitle: "Co-ordinator(Publicity & Social Media)",
      handle: "@ananya",
      borderColor: "#8B5CF6", // Violet
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FB.%20Vedant.3f7fa829.jpg&w=2048&q=75",
      title: "B Vedant",
      subtitle: "Co-ordinator(Sponsor & Marketing)",
      handle: "@ananya",
      borderColor: "#EC4899", // Pink
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBadurgari%20Rasool.2b6ce211.jpeg&w=2048&q=75",
      title: "S. Badurgari Rasool",
      subtitle: "Co-ordinator(Publicity & Social Media)",
      handle: "@ananya",
      borderColor: "#14B8A6", // Teal
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVenu%20Gopala%20Krishna.d8460ddc.jpeg&w=2048&q=75",
      title: "Venu Gopala Krishna",
      subtitle: "Co-ordinator(Publicity & Social Media)",
      handle: "@ananya",
      borderColor: "#F97316", // Orange
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FApratim%20Chatterjee.48773f06.jpg&w=2048&q=75",
      title: "Apratim Chatterjee",
      subtitle: "Member(Sponsor & Marketing)",
      handle: "@ananya",
      borderColor: "#8B5CF6", // Violet
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAlympa%20Deka.21fdbdc7.webp&w=2048&q=75",
      title: "Alympa Deka",
      subtitle: "Member(Sponsor & Marketing)",
      handle: "@ananya",
      borderColor: "#EC4899", // Pink
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSubrata%20Das.c4d8d2b5.jpeg&w=2048&q=75",
      title: "Subrata Das",
      subtitle: "Member(Sponsor & Marketing)",
      handle: "@ananya",
      borderColor: "#10B981", // Emerald
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_20240906_172322_790%20-%20Sachin%20Chaurasia.612f40f3.jpg&w=2048&q=75",
      title: "Sachin Chaurasia",
      subtitle: "Member(Publicity & Social Media)",
      handle: "@ananya",
      borderColor: "#F59E0B", // Amber
    },
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage%20-%20Bekkam%20Manohar%20Sai.4b06376d.jpg&w=2048&q=75",
      title: "Bekkam Manohar Sai",
      subtitle: "Member(Publicity & Social Media)",
      handle: "@ananya",
      borderColor: "#EF4444", // Red
    },
  ],
  Management: [
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%209.c98d5d6a.png&w=2048&q=75",
      title: "Kabesa S Marak",
      subtitle: "Co-ordinator(Hospitality)",
      handle: "@rohit",
      borderColor: "#F472B6",
    }, // Pink
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
      title: "Rahul Deb Rai",
      subtitle: "Co-ordinator(Hospitality)",
      handle: "@rohit",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVanyza%20Lyngshiang.6a540117.jpg&w=2048&q=75",
      title: "Vanyza Lyngshiang",
      subtitle: "Co-ordinator(Hospitality)",
      handle: "@rohit",
      borderColor: "#10B981",
    }, // Emerald
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIbanylla%20M%20Maring.3f20fb74.jpg&w=2048&q=75",
      title: "Ibanylla M Maring",
      subtitle: "Member-1(Hospitality)",
      handle: "@rohit",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKurra%20Nandini.a2eba5aa.jpg&w=2048&q=75",
      title: "Kurra Nandini",
      subtitle: "Member-2(Hospitality)",
      handle: "@rohit",
      borderColor: "#EF4444",
    }, // Red
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
      title: "Nimmakuri Varun Teja",
      subtitle: "Co-ordinator(Food Committee)",
      handle: "@rohit",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FD%20Bhuvanesh.b98e6794.jpeg&w=2048&q=75",
      title: "D Bhuvanesh",
      subtitle: "Co-ordinator(Food Committee)",
      handle: "@rohit",
      borderColor: "#EC4899",
    }, // Pink
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDola%20Raghu.21f9192c.jpg&w=2048&q=75",
      title: "Dola Raghu",
      subtitle: "Member-1(Food Committee)",
      handle: "@rohit",
      borderColor: "#14B8A6",
    }, // Teal
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FShivam%20Kumar%20Manglam.143e0034.jpg&w=2048&q=75",
      title: "Shivam Kumar Manglam",
      subtitle: "Member-2(Food Committee)",
      handle: "@rohit",
      borderColor: "#F97316",
    }, // Orange
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSojib%20Datta.0af14cf4.jpg&w=2048&q=75",
      title: "Sojib Datta",
      subtitle: "Co-ordinator(Stage Management)",
      handle: "@rohit",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
      title: "Penugurthi Dinesh",
      subtitle: "Co-ordinator(Stage Management)",
      handle: "@rohit",
      borderColor: "#10B981",
    }, // Emerald
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish%20Bishnoi.f9a6bd3b.jpg&w=2048&q=75",
      title: "Manish Bishnoi",
      subtitle: "C-oordinator(Stage Management)",
      handle: "@rohit",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FB%20Palguna%20Rao.f52d054e.jpg&w=2048&q=75",
      title: "B Palguna Rao",
      subtitle: "Co-ordinator(Stage Management)",
      handle: "@rohit",
      borderColor: "#EF4444",
    }, // Red
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMushfique%20Ahmed.f2ecbb33.jpg&w=2048&q=75",
      title: "Mushfique Ahmed",
      subtitle: "Co-ordinator(Stage Management)",
      handle: "@rohit",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSyed%20Ashraf%20Rafi.5220e096.png&w=2048&q=75",
      title: "Syed Ashraf Rafi",
      subtitle: "Member-1(Stage Management)",
      handle: "@rohit",
      borderColor: "#EC4899",
    }, // Pink
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPODUGU%20ASHRITH.56eae589.jpg&w=2048&q=75",
      title: "Podugu Ashrith",
      subtitle: "Member-2(Stage Management)",
      handle: "@rohit",
      borderColor: "#14B8A6",
    }, // Teal
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%209.c98d5d6a.png&w=2048&q=75",
      title: "Vasundhra Singh",
      subtitle: "Co-ordinator(Event Management)",
      handle: "@rohit",
      borderColor: "#F97316",
    }, // Orange
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
      title: "Abhishek",
      subtitle: "Co-ordinator(Event Management)",
      handle: "@rohit",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%209.c98d5d6a.png&w=2048&q=75",
      title: "Minakshi",
      subtitle: "Co-ordinator(Event Management)",
      handle: "@rohit",
      borderColor: "#10B981",
    }, // Emerald
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRakesh%20Thumu.578e97e5.jpg&w=2048&q=75",
      title: "Rakesh Thumu",
      subtitle: "Coordinator(Event Management)",
      handle: "@rohit",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
      title: "Rahul Kumar",
      subtitle: "Coordinator(Event Management)",
      handle: "@rohit",
      borderColor: "#EF4444",
    }, // Red
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYashvi%20Arya.1ffff33f.jpg&w=2048&q=75",
      title: "Yashvi Arya",
      subtitle: "Member-1(Event Management)",
      handle: "@rohit",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNazia%20Sheikh.104c4ed2.jpg&w=2048&q=75",
      title: "Nazia Sheikh",
      subtitle: "Member-2(Event Management)",
      handle: "@rohit",
      borderColor: "#EC4899",
    }, // Pink
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
      title: "Varsha",
      subtitle: "Co-ordinator (Public Relations)",
      handle: "@rohit",
      borderColor: "#14B8A6",
    }, // Teal
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMadhulika.c749b440.jpeg&w=2048&q=75",
      title: "Madhulika",
      subtitle: "Co-ordinator(Public Relations)",
      handle: "@rohit",
      borderColor: "#F97316",
    }, // Orange
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSaloni%20Singh.5ab63877.jpg&w=2048&q=75",
      title: "Saloni Singh",
      subtitle: "Member-1(Public Relations)",
      handle: "@rohit",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image:
        "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBinnada%20yamuna.47978fd3.jpg&w=2048&q=75",
      title: "Binnada Yamuna",
      subtitle: "Member-2(Public Relations)",
      handle: "@rohit",
      borderColor: "#10B981",
    }, // Emerald
  ],
  Robotics: [
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Sourabh Paul", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F472B6" }, // Pink
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Sachin Paul", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#06B6D4" }, // Cyan
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Parthiv Das", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#10B981" }, // Emerald
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Narendra Kumar", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F59E0B" }, // Amber
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fameya_patil.d5b74d11.jpg&w=2048&q=75",
    title: "Ameya Patil", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EF4444" }, // Red
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnirupan_jagnekar.5a4d0e45.jpg&w=2048&q=75",
    title: "Nirupan Jagnekar", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#8B5CF6" }, // Violet
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Ankit Singh", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EC4899" }, // Pink
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Avinash Kumar Singh", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#14B8A6" }, // Teal
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Ashvil Nagar", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F97316" }, // Orange
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Rahul Kumar", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#06B6D4" }, // Cyan
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbadurgari_rasool.2b6ce211.jpeg&w=2048&q=75",
    title: "Badurgari Rasool", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#10B981" }, // Emerald
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Aditya Kumar Pandey", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F59E0B" }, // Amber
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchandrani_dalui.bc4db21e.jpg&w=2048&q=75",
    title: "Chandrani Dalui", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EF4444" }, // Red
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fankit_raj.8d50fe9d.jpg&w=2048&q=75",
    title: "Ankit Raj", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#8B5CF6" }, // Violet
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Rohit Aryan", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EC4899" }, // Pink
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshivam%20kumar%203Y.38be9183.jpg&w=2048&q=75",
    title: "Shivam Kumar", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#14B8A6" }, // Teal
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhimanshu_kumar_jha.b3f9e788.jpg&w=2048&q=75",
    title: "Himanshu Kumar Jha", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F97316" }, // Orange
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsumit_kumar.0bc5dae6.jpg&w=2048&q=75",
    title: "Sumit Kumar", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#06B6D4" }, // Cyan
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fangshuman_dey.099cec06.jpg&w=2048&q=75",
    title: "Angshuman Dey", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#10B981" }, // Emerald
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fneelkantha_mandal.a47789e0.jpg&w=2048&q=75",
    title: "Neelkantha Mandal", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F59E0B" }, // Amber
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Sanapala Rahul", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EF4444" }, // Red
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpranav_kumar_dubey.35819e56.jpg&w=2048&q=75",
    title: "Pranav Kumar Dubey", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#8B5CF6" }, // Violet
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpankaj_saraswat.5592b951.jpg&w=2048&q=75",
    title: "Pankaj Saraswat", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EC4899" }, // Pink
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Ashirbad Raj Arya", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#14B8A6" }, // Teal
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdebashish_nayak.65774824.jpeg&w=2048&q=75",
    title: "Debashish Nayak", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F97316" }, // Orange
],
Coding: [
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Raj Kedia", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F472B6" }, // Pink
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Anshu Das", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#06B6D4" }, // Cyan
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%209.c98d5d6a.png&w=2048&q=75",
    title: "Shubhavi Kukreja", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#10B981" }, // Emerald
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Vasundhara Singh", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F59E0B" }, // Amber
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Roshan Kumar Sah", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EF4444" }, // Red
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAvinash%20Renukunta.2845fb31.jpeg&w=2048&q=75",
    title: "Avinash Renukunta", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#8B5CF6" }, // Violet
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSamiksha%20Deb.85730977.jpg&w=2048&q=75",
    title: "Gunnu Lavanya", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EC4899" }, // Pink
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.e8a91478.jpg&w=2048&q=75",
    title: "Manish Prasad Gupta", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#14B8A6" }, // Teal
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHriti%20Chakrabortty.dd2f7a39.jpg&w=2048&q=75",
    title: "Hriti Chakrabortty", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F97316" }, // Orange
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Satyajeet Rai", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#06B6D4" }, // Cyan
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSiddhant%20Purkayastha.f0366cae.jpg&w=2048&q=75",
    title: "Siddhant Purkayastha", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#10B981" }, // Emerald
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Karipireddy Surya Teja", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#F59E0B" }, // Amber
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Ritabrata Pal", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EF4444" }, // Red
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGaurav.140cc4c6.png&w=2048&q=75",
    title: "Gaurav Joshi", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#8B5CF6" }, // Violet
  { image: "https://cognitia.nitm.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload%208.30e4510e.png&w=2048&q=75",
    title: "Rounak Saha", subtitle: "Co-ordinator", handle: "@rohit", borderColor: "#EC4899" }, // Pink
]
};

export { navLinks, eventsData, events, teamData };