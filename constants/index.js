// 🔹 Navbar links
const navLinks = [
  { id: "home", title: "Home" },
  { id: "events", title: "Events" },
  { id: "team", title: "Team" },
  { id: "buy-merch", title: "Buy Merch" },
];

const events = [
  // Coding Event
  {
    title: "Hackathon",
    slug: "hackathon",
    category: "Coding",
    img: "/events/coding/hackathon.jpg",
    desc: "Get ready for an adrenaline-filled coding marathon with our Hackathon, where creativity meets technology! This is your chance to transform innovative ideas into real-world solutions within a limited time frame.Participants will collaborate in teams to brainstorm, design, and develop projects that tackle real-life problems. Whether it’s web development, AI, IoT, or app building — this hackathon is all about pushing boundaries and bringing ideas to life.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Prem Kumar Gupta - b22cs026@nitm.ac.in",
      "Shashank Umar Vaishy - b23cs019@nitm.ac.in",
      "Charity Rymbai - b23me010@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/rhgru4aRH8CCC7519",
    rulebookLink:
      "https://drive.google.com/file/d/1pN0ynway3Z3e7fRLHoA6CVTN8BPnxxoQ/view?usp=drive_link",
  },
  {
    title: "Coding Contest",
    slug: "coding-contest",
    category: "Coding",
    img: "/events/coding/codeconquest.png",
    desc: "Step into the battlefield of logic and algorithms with Code Conquest, the ultimate coding challenge designed to test your problem-solving skills, speed, and precision. Whether you’re a beginner or a seasoned programmer, this event pushes you to think critically and code efficiently under pressure.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Mrinmoy Maji - b22cs036@nitm.ac.in",
      "Ankit Raj - b23ec012@nitm.ac.in",
      "Abhay Kumar - b23ec022@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/Mcjd2Mpw6KTSDeKi9",
    rulebookLink:
      "https://drive.google.com/file/d/1m6zcpyZD0qpcx4FU2cGzIF53ky2mGsk0/view?usp=drive_link",
  },
  {
    title: "Capture The Flag",
    slug: "capture-the-flag",
    category: "Coding",
    img: "/events/coding/capturetheflag.jpg",
    desc: "Step into the world of cybersecurity with Capture The Flag (CTF) — an intense, challenge-based competition where participants solve security puzzles, uncover hidden vulnerabilities, and capture digital “flags” to score points.From cryptography and web exploitation to reverse engineering and forensics, this event is designed to test your hacking mindset, analytical thinking, and technical skills in a fun and competitive environment.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Manish Prasad Gupta - b22cs007@nitm.ac.in",
      "Austin Joel Dympep - b23cs035@nitm.ac.in",
      "Arunoday Tiwari - b23ec009@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/pToTjhjDgCyP3fHf9",
    rulebookLink:
      "https://drive.google.com/file/d/13lWHAieu5P3LlopPQeKtAtAdgwEEuJkm/view?usp=drive_link",
  },
  {
    title: "Blind Folded Coding",
    slug: "blind-folded-coding",
    category: "Coding",
    img: "/events/coding/blindfoldedcoding.webp",
    desc: "Think you truly know coding? Put your skills to the ultimate test in Blindfolded Coding — a thrilling challenge where participants must write code without seeing their screens!.This event pushes your logical thinking, syntax mastery, and memory to the limit. With vision taken away, only your understanding of programming concepts and keyboard familiarity will guide you to victory.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Mrinmoy Maji - b22cs036@nitm.ac.in",
      "Ankit Raj - b23ec012@nitm.ac.in",
      "Abhay Kumar - b23ec022@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/Vub72ZYazdhDb6ao7",
    rulebookLink:
      "https://drive.google.com/file/d/1golCFEnH6a12TGjKlS5cD6CTsYw-Y53d/view?usp=drive_link",
  },
  {
    title: "Relay Typing Competition",
    slug: "relay-typing-competition",
    category: "Coding",
    img: "/events/coding/relaytyping.webp",
    desc: "Speed meets teamwork in the Relay Typing Competition! Participants compete in teams where each member contributes sequentially to complete a given typing or coding task. Accuracy, coordination, and speed are the keys to victory in this fun yet competitive event.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Prem Kumar Gupta - Convenor",
      "Aryan Raj - Coordinator",
      "Khushi Kumari - Coordinator",
    ],
    registerLink: "https://forms.gle/rpzRCiwccHiBNuSo7",
    rulebookLink:
      "https://drive.google.com/file/d/1ByM22JZVa3gbX8eGVMjNlx6VNRWQ0p1g/view?usp=drive_link",
  },

  {
    title: "Tech Dumb Charades",
    slug: "tech-dumb-charades",
    category: "Coding",
    img: "/events/coding/techcharades.jpg",
    desc: "A fun twist on the classic game! Tech Dumb Charades challenges participants to guess technical terms, technologies, or concepts through gestures and acting — no words allowed. It's a perfect blend of tech knowledge, creativity, and entertainment.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Karipireddy Surya Teja Gopal Reddy - b22cs022@nitm.ac.in",
      "Jishnu Duhan - b23cs037@nitm.ac.in",
      "Shashank Umar Vaishy - b23cs019@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/bjokzKeJ85oBde3n6",
    rulebookLink:
      "https://drive.google.com/file/d/1HmEzD4GZKSFfKSp7VDifUtYwDU-3ztOj/view?usp=drive_link",
  },

  {
    title: "Game of Codes",
    slug: "game-of-codes",
    category: "Coding",
    img: "/events/coding/gameofcodes.webp",
    desc: "Enter the ultimate coding arena with Game of Codes! Participants will battle through multiple rounds of coding challenges, debugging tasks, and logic puzzles. Only the sharpest minds will survive till the end and claim the throne.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Prem Kumar Gupta - b22cs026@nitm.ac.in",
      "Charity Rymbai - b23me010@nitm.ac.in",
      "Aryan Raj - b23ec042@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/HQU5fYqXP83v9ncW8",
    rulebookLink:
      "https://drive.google.com/file/d/1UkUeoQbWAIGY_vyTbpvkwqTKNMCFHlmS/view?usp=drive_link",
  },

  {
    title: "404 Killer Not Found",
    slug: "404-killer-not-found",
    category: "Coding",
    img: "/events/coding/404killer.jpeg",
    desc: "Errors are everywhere — can you eliminate them? 404 Killer Not Found is a debugging-focused event where participants must identify and fix bugs in given code snippets. Speed, precision, and deep understanding of programming concepts will determine the ultimate bug slayer.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "T Vikram Rathod - b22cs033@nitm.ac.in",
      "Jishnu Duhan - b23cs037@nitm.ac.in",
      "Austin Joel Dympep - b23cs035@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/Cik9URfnm93c726o7",
    rulebookLink:
      "https://drive.google.com/file/d/1zYEDwQOF8Epa_mluQY75aHi_3UB5HKLj/view?usp=drive_link",
  },

  {
    title: "Treasure Hunt",
    slug: "treasure-hunt",
    category: "Coding",
    img: "/events/coding/treasurehunt.jpg",
    desc: "Embark on an exciting journey of clues, puzzles, and hidden challenges in the Treasure Hunt! Participants must solve technical riddles and coding-based hints to progress through stages and uncover the final treasure.",
    prize: "Exciting Prizes",
    venue: "Campus Wide",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Prem Kumar Gupta - b22cs026@nitm.ac.in",
      "Shashank Umar Vaishy - b23cs019@nitm.ac.in",
      "Khushi Kumari - b23ec008@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/tALHtmmHLtvNTT5g9",
    rulebookLink:
      "https://drive.google.com/file/d/1FbKqeor9yAdPxQY10yGBSY6uMJZwfjuZ/view?usp=drive_link",
  },

  {
    title: "Smart Machine",
    slug: "smart-machine",
    category: "Coding",
    img: "/events/coding/smartmachine.jpeg",
    desc: "Dive into the world of intelligent systems with Smart Machine! This event focuses on building or conceptualizing smart solutions using AI, ML, or automation. Participants will showcase innovative ideas that simulate real-world intelligent behavior.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Satyajeet Rai - b22ec021@nitm.ac.in",
      "Ayush Kumar Singh - b23ec003@nitm.ac.in",
      "Chuncha Hemchand - b23cs020@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/NthY1Ev8sAs8vh6U7",
    rulebookLink:
      "https://drive.google.com/file/d/1Fg9LBAIzNhZLIi5oEigc7UJwwjIxHOn2/view?usp=drive_link",
  },

  {
    title: "Neural Quest",
    slug: "neural-quest",
    category: "Coding",
    img: "/events/coding/neuralquest.jpg",
    desc: "Challenge your knowledge of artificial intelligence and neural networks in Neural Quest! This event includes quizzes, problem-solving, and practical tasks related to AI/ML concepts, testing both theoretical understanding and application skills.",
    prize: "Exciting Prizes",
    venue: "CS Lab, A Block",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "T Vikram Rathore - b22cs033@nitm.ac.in",
      "Jishnu Duhan - b23cs037@nitm.ac.in",
      "Ayush Kumar Singh - b23ec003@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/HrZxoS4MGMHpijgLA",
    rulebookLink:
      "https://drive.google.com/file/d/1qGDf0jo2VM6fNQQ-yGNq7FshBrORZv5G/view?usp=drive_link",
  },

  // Robotics Events
  {
    title: "Robo Rumble",
    slug: "robo-rumble",
    category: "Robotics",
    img: "/events/robotics/roborumble.jpeg",
    desc: "Gear up for Robo Rumble — an electrifying battle of bots where machines clash in an arena of destruction and strategy. Design and control your robot to outmaneuver and outlast your opponents in this ultimate test of engineering and combat skills.",
    prize: "Exciting Prizes",
    venue: "Between C & D Block || Lecture Hall Complex",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Shivam Kumar - b22me011@nitm.ac.in",
      "Rahul Kumar - Convenor",
      "Akash Shah - b23me008@nitm.ac.in",
      "Sachin Chaurasia - b23ee010@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/aRTdqwu7fgUGXgKK9",
    rulebookLink:
      "https://drive.google.com/file/d/1A2HTeTnLjj5S_KsPOodj4n1Pu_yvfKIM/view?usp=drive_link",
  },

  {
    title: "Goal Against Time",
    slug: "goal-against-time",
    category: "Robotics",
    img: "/events/robotics/goalagainsttime.jpg",
    desc: "Precision meets speed in Goal Against Time! Participants must design robots capable of completing specific tasks within a limited time frame. Efficiency, accuracy, and quick thinking are the keys to winning.",
    prize: "Exciting Prizes",
    venue: "Robotics Arena",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Aditya Kumar Pandey - b22me018@nitm.ac.in",
      "Himanshu Kumar Jha - b22me027@nitm.ac.in",
      "Vishnu Kumar - b23ee014@nitm.ac.in",
      "Akshaj Sunil - b23me020@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/B2Gqw9UkGrqDwWAY7",
    rulebookLink:
      "https://drive.google.com/file/d/1N12oqlPEpnqmzlds9Io0XBuDcPo3tVqV/view?usp=drive_link",
  },

  {
    title: "Humanoid",
    slug: "humanoid",
    category: "Robotics",
    img: "/events/robotics/humanoid.jpeg",
    desc: "Experience the future with Humanoid — an event focused on designing and showcasing human-like robots. Participants will demonstrate innovation in movement, balance, and interaction, pushing the boundaries of robotics.",
    prize: "Exciting Prizes",
    venue: "Robotics Arena",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Debashish Nayak - b22ec030@nitm.ac.in",
      "Sanapala Rahul - b22ee010@nitm.ac.in",
      "Adharsh Barman - b23ee005@nitm.ac.in",
      "Saksham Singhania - b23ce026@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/dJc4yfxEqprjy2vp6",
    rulebookLink:
      "https://drive.google.com/file/d/1-i1wxi5NPTZ8ghdhJvsO2pKzsWM4phw2/view?usp=drive_link",
  },

  {
    title: "Roborush",
    slug: "roborush",
    category: "Robotics",
    img: "/events/robotics/roborush.jpeg",
    desc: "Test the speed and agility of your robot in Roborush! Navigate through obstacles, race against time, and outperform competitors in this high-speed robotics challenge.",
    prize: "Exciting Prizes",
    venue: "Robotics Arena",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Rohit Aryan - b22ee017@nitm.ac.in",
      "Raunak Prabhakar - b23cs041@nitm.ac.in",
      "Parag Das - b23ee013@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/sxpV4RZj7V4FYKBU9",
    rulebookLink:
      "https://drive.google.com/file/d/1yQg0r_hFR-umltuEAkL_ZgkliSkWWQIt/view?usp=drive_link",
  },

  {
    title: "Drone Racing",
    slug: "drone-racing",
    category: "Robotics",
    img: "/events/robotics/droneracing.jpeg",
    desc: "Take flight in Drone Racing! Compete in an adrenaline-pumping race where precision flying and speed determine the winner. Navigate through challenging tracks and prove your piloting skills.",
    prize: "Exciting Prizes",
    venue: "Open Ground Arena",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Avinash Kumar Singh - b22cs012@nitm.ac.in",
      "Sanapala Rahul - b22ee010@nitm.ac.in",
      "Abhinav Hajong - b23ec006@nitm.ac.in",
      "Aastha Mishra - b23me005@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/oMmiF9nRAHffsH339",
    rulebookLink:
      "https://drive.google.com/file/d/1ECqsCr7cpqMxQM28zMgSod-QohICUxub/view?usp=drive_link",
  },

  {
    title: "Robodiction",
    slug: "robodiction",
    category: "Robotics",
    img: "/events/robotics/robodiction.jpg",
    desc: "A creative blend of robotics and communication, Robodiction challenges participants to interpret, build, or explain robotic concepts in an engaging way. Think fast, build smart, and communicate effectively!",
    prize: "Exciting Prizes",
    venue: "Robotics Arena",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Ankit Raj - b22ee005@nitm.ac.in",
      "B Palguna Rao - b22ee026@nitm.ac.in",
      "Gaurav Kumar Singh - b23ce006@nitm.ac.in",
      "Vignesh Patil - b23cs005@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/r4Y69TpQx38c99z38",
    rulebookLink:
      "https://drive.google.com/file/d/1PBs4oOepjEG_paH2FLmaFp44CViLoNpx/view?usp=drive_link",
  },

  {
    title: "Techstorm",
    slug: "techstorm",
    category: "Robotics",
    img: "/events/robotics/techstorm.jpeg",
    desc: "Enter Techstorm — a dynamic robotics event combining innovation, design, and technical challenges. Participants will tackle multiple problem statements, showcasing their engineering and problem-solving abilities.",
    prize: "Exciting Prizes",
    venue: "Robotics Arena",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Avinash Kumar Singh - b22cs012@nitm.ac.in",
      "Sanapala Rahul - b22ee010@nitm.ac.in",
      "Aman Kumar - b23cs038@nitm.ac.in",
      "Pradip Kumar Mondal - b23ec034@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/jbZKnAji7Kb5bqdU7",
    rulebookLink:
      "https://drive.google.com/file/d/1tkpUeQ8Mu5WX1SiwolJktvhTw1PYxMPO/view?usp=drive_link",
  },

  {
    title: "Autonomous Bot",
    slug: "autonomous-bot",
    category: "Robotics",
    img: "/events/robotics/autonomousbot.jpeg",
    desc: "Build intelligent machines in Autonomous Bot! Design robots capable of navigating and performing tasks without human intervention. This event tests your skills in automation, sensors, and AI integration.",
    prize: "Exciting Prizes",
    venue: "Robotics Arena",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Pankaj Saraswat - b22ec040@nitm.ac.in",
      "Purushottam Thakur - b23cs014@nitm.ac.in",
      "Chinagudaba Nikhil - b23me027@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/DNXHAvz7aTRiSsqy5",
    rulebookLink:
      "https://drive.google.com/file/d/1cTM_2d-QL0hBh3bRK02jOdRLFICalHLV/view?usp=drive_link",
  },

  {
    title: "Art Battle",
    slug: "art-battle",
    category: "Photography and Fine Arts",
    img: "/events/fine-arts/artbattle.jpeg",
    desc: "Unleash your creativity in Art Battle — a live art competition where imagination meets speed. Participants will create stunning artworks within a limited time based on surprise themes. It’s a battle of creativity, expression, and artistic skill where every stroke counts.",
    prize: "Exciting Prizes",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Satyam Singh - b23ce020@nitm.ac.in",
      "Md. Syed Ashraf Rafi - b23ec001@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/Z2URVYsRDUkdZWZT7",
    rulebookLink:
      "https://drive.google.com/file/d/1XDFC5izcnTcNwWpf9CtMUUFtq1T9POPX/view?usp=drive_link",
  },

  {
    title: "Photo Exhibition",
    slug: "photo-exhibition",
    category: "Photography and Fine Arts",
    img: "/events/fine-arts/photoexhibition.jpg",
    desc: "Capture moments, tell stories, and showcase your perspective through the Photo Exhibition. Participants can submit their best photographs based on given themes. From nature to urban life, every frame should reflect creativity, emotion, and storytelling.",
    prize: "Exciting Prizes",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Satyam Singh - b23ce020@nitm.ac.in",
      "Md. Syed Ashraf Rafi - b23ec001@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/JioRGRsd869p1v1B8",
    rulebookLink:
      "https://drive.google.com/file/d/1cNibOgyFf2xbmxrNQd-wI_iNT_aL0RBB/view?usp=drive_link",
  },
  {
    title: "Challenge on Green Technology",
    slug: "challenge-on-green-technology",
    category: "E-Cell",
    img: "/events/ecell/cogt.png",
    desc: "Innovate for a sustainable future in the Challenge on Green Technology! Participants are invited to propose and develop eco-friendly solutions that address environmental issues such as renewable energy, waste management, and sustainable living. Turn your ideas into impactful innovations that can shape a greener tomorrow.",
    prize: "Exciting Prizes",
    deadline: "15th September 2025",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Swarnim Suman - b24cs046@nitm.ac.in",
      " Nazia Sheikh - b23ce029@nitm.ac.in",
      "Anjali - b23me033@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/bQiRMVCT3yHMKKzm6",
    rulebookLink:
      "https://drive.google.com/file/d/1cNibOgyFf2xbmxrNQd-wI_iNT_aL0RBB/view?usp=drive_link",
  },

  {
    title: "Tech Challenge on Agriculture",
    slug: "tech-challenge-on-agriculture",
    category: "E-Cell",
    img: "/events/ecell/tcoa.jpg",
    desc: "Revolutionize agriculture with technology in the Tech Challenge on Agriculture! Participants will develop innovative solutions to improve farming efficiency, crop monitoring, irrigation systems, and supply chain management using modern technologies like IoT, AI, and data analytics.",
    prize: "Exciting Prizes",
    deadline: "15th September 2025",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Swarnim Suman - b24cs046@nitm.ac.in",
      " Nazia Sheikh - b23ce029@nitm.ac.in",
      "Anjali - b23me033@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/Aj5qier6oxJd4u5S8",
    rulebookLink:
      "https://drive.google.com/file/d/1cNibOgyFf2xbmxrNQd-wI_iNT_aL0RBB/view?usp=drive_link",
  },
  {
    title: "Doodle Art",
    slug: "doodle-art",
    category: "Design Club",
    img: "/events/design/doodle.jpg",
    desc: "Let your imagination flow freely in Doodle Art! This event challenges participants to create expressive and creative doodles based on given themes. Whether abstract or structured, your artwork should reflect originality, storytelling, and artistic flair.",
    prize: "Exciting Prizes",
    deadline: "15th September 2025",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Satyam Singh - b23ce020@nitm.ac.in",
      "Nazia Hasan Sheikh - b23ce029@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/BTK23XfNnwy3JFHC9",
    rulebookLink:
      "https://drive.google.com/file/d/1LEhtTnaiZMBZPWFlPB643qv0-y8ynAYX/view?usp=drive_link",
  },

  {
    title: "Canva Design Battle",
    slug: "canva-design-battle",
    category: "Design Club",
    img: "/events/design/canva.webp",
    desc: "Showcase your creativity in the Canva Design Battle! Participants will compete to create visually stunning designs using Canva within a limited time. From posters to social media creatives, design skills, aesthetics, and originality will decide the winner.",
    prize: "Exciting Prizes",
    deadline: "15th September 2025",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Satyam Singh - b23ce020@nitm.ac.in",
      "Nazia Hasan Sheikh - b23ce029@nitm.ac.in",
    ],
    registerLink: "https://forms.gle/9pxgzoriT9REaqvV9",
    rulebookLink:
      "https://drive.google.com/file/d/16lQsRYKRrk0PD-rlIDmJHOn8T0sfLvLd/view?usp=drive_link",
  },
  {
    title: "Star Gazing",
    slug: "star-gazing",
    category: "Astronomy Club",
    img: "/events/astro/stargazing.webp",
    desc: "Explore the wonders of the night sky in Star Gazing! Participants will get a chance to observe celestial objects like planets, stars, and galaxies using telescopes. Guided by experts, this event offers a mesmerizing experience into the vast universe.",
    prize: "Exciting Prizes",
    deadline: "15th September 2025",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Ujjawal Jhajharia - b22ee007@nitm.ac.in",
      "Rounak Saha - b22cs008@nitm.ac.in",
      "Vishnu Kumar - b23ee014@nitm.ac.in",
    ],
    registerLink: "",
    rulebookLink:
      "https://drive.google.com/file/d/1ZI9UhXlhg37QRI2OBuHoRzaFtAL7LOUH/view?usp=drive_link",
  },

  {
    title: "Astro Quiz",
    slug: "astro-quiz",
    category: "Astronomy Club",
    img: "/events/astro/astroquiz.jpeg",
    desc: "Test your knowledge of the universe in the Astro Quiz! From planets and stars to black holes and space missions, this quiz will challenge your understanding of astronomy and astrophysics in a fun and competitive format.",
    prize: "Exciting Prizes",
    deadline: "15th September 2025",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Ujjawal Jhajharia - b22ee007@nitm.ac.in",
      "Rounak Saha - b22cs008@nitm.ac.in",
      "Vishnu Kumar - b23ee014@nitm.ac.in",
    ],
    registerLink: "#",
    rulebookLink: "https://drive.google.com/file/d/1VtZ5Q5DdZPGiJ0x7tQU1qzDr037kqO7Y/view?usp=drive_link",
  },

  {
    title: "Telescope Making",
    slug: "telescope-making",
    category: "Astronomy Club",
    img: "/events/astro/telescope.jpg",
    desc: "Build your own window to the universe in Telescope Making! Participants will learn the fundamentals of optics and assemble a working telescope. This hands-on event combines theory with practical skills for an enriching experience.",
    prize: "Exciting Prizes",
    deadline: "15th September 2025",
    venue: "NIT Campus",
    schedule: "9th April 2026 – 11th April 2026",
    contacts: [
      "Ujjawal Jhajharia - b22ee007@nitm.ac.in",
      "Rounak Saha - b22cs008@nitm.ac.in",
      "Vishnu Kumar - b23ee014@nitm.ac.in",
    ],
    registerLink: "#",
    rulebookLink: "#",
  },
  // Existing Dept Event
  {
    title: "The Hiring Panel",
    slug: "the-hiring-panel",
    category: "Dept",
    img: "/events/designsprint.jpg",
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
      {
        q: "What tools can I use?",
        a: "You can use Figma, Adobe XD, Photoshop, or any design tool.",
      },
      {
        q: "Will I get feedback?",
        a: "Yes, judges will provide constructive feedback after results.",
      },
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
      {
        q: "Can I use DSLR or mobile?",
        a: "Yes, any camera device is allowed.",
      },
      {
        q: "Do I need to print photos?",
        a: "Yes, bring printed copies for exhibition.",
      },
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
      {
        q: "Can I use Canva?",
        a: "Yes, but professional tools like Illustrator are preferred.",
      },
      {
        q: "Will the brief be shared early?",
        a: "Brief will be revealed at the event start.",
      },
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
      {
        q: "Can I submit both digital and physical?",
        a: "No, choose one medium per entry.",
      },
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
      {
        q: "Do I need my own setup?",
        a: "Basic PCs will be provided. You may bring your peripherals.",
      },
      {
        q: "Can we register for multiple games?",
        a: "Yes, but schedules may overlap.",
      },
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
      {
        q: "Do I need to bring my laptop?",
        a: "No, systems will be provided.",
      },
      {
        q: "Which games are featured?",
        a: "CS 1.6, NFS Most Wanted, Blur, and more.",
      },
    ],
    contacts: ["Ritika - +91 7766552233", "Aryan - +91 6677889900"],
    registerLink: "https://example.com/lanparty",
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
      image: "/teams/sac/dean-studentwelfare.png",
      title: "Prof. Paonam Sudeep Mangang",
      subtitle: "Dean",
      handle: "Student's Welfare",
      borderColor: "#4F46E5", // Indigo
    },
    {
      image: "/teams/sac/sac-president.png",
      title: "Dr. Atanu Singha Roy",
      subtitle: "SAC",
      handle: "President",
      borderColor: "#10B981", // Emerald
    },
    {
      image: "/teams/sac/vp-technical.png",
      title: "Dr. Md Nur Alom",
      subtitle: "Technical",
      handle: "Vice-President",
      borderColor: "#F59E0B", // Amber
    },
    {
      image: "/teams/sac/gs1.jpg",
      title: "Jitendra Dubey",
      subtitle: "General Secretary 1",
      handle: "Science & Technology",
      borderColor: "#EF4444", // Red
    },
    {
      image: "/teams/sac/gs2.png",
      title: "Arush Raman",
      subtitle: "General Secretary 2",
      handle: "Science & Technology",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image: "/teams/sac/member-1.png",
      title: "T.Bhanuprasad",
      subtitle: "Member 1",
      handle: "Science & Technology",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image: "/teams/sac/member-2.png",
      title: "Raman Kumar Morya",
      subtitle: "Member 2",
      handle: "Science & Technology",
      borderColor: "#06B6D4", // Cyan
    },
  ],
  Dev: [
    {
      image: "/teams/dev/dev.JPG",
      title: "Kuldeep Chaudhary",
      subtitle: "Web Developer Head",
      handle: "b23ec019@nitm.ac.in",
      borderColor: "#F59E0B", // Amber
    },
  ],
  Core: [
    {
      image: "/teams/core/core1.jpg",
      title: "Aman Singh Rathore",
      subtitle: "Head",
      handle: "b22cs017@nitm.ac.in",
      borderColor: "#4F46E5", // Indigo
    },
    {
      image: "/teams/core/core2.jpg",
      title: "Satyam Kumar Singh",
      subtitle: "Head",
      handle: "b22me026@nitm.ac.in",
      borderColor: "#10B981", // Emerald
    },
    {
      image: "/teams/core/core3.jpeg",
      title: "Sanapala Rahul",
      subtitle: "Head",
      handle: "b22ee010@nitm.ac.in",
      borderColor: "#F59E0B", // Amber
    },
    {
      image: "/teams/core/core4.jpg",
      title: "Eshita Bhattacharjee",
      subtitle: "Cordinator",
      handle: "b23ee033@nitm.ac.in",
      borderColor: "#EF4444", // Red
    },
    {
      image: "/teams/core/core5.jpg",
      title: "Austin Joel Dympep",
      subtitle: "Cordinator",
      handle: "b23cs035@nitm.ac.in",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image: "/teams/core/core6.jpg",
      title: "Govindam kumar",
      subtitle: "Cordinator",
      handle: "b23cs035@nitm.ac.in",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image: "/teams/core/core7.jpg",
      title: "Ippili Rupesh",
      subtitle: "Cordinator",
      handle: "b23ee011@nitm.ac.in",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image: "/teams/core/core8.jpg",
      title: "Akshith Reddy",
      subtitle: "Member",
      handle: "b24ec020@nitm.ac.in",
      borderColor: "#06B6D4", // Cyan
    },
  ],
  "Sponsor and Marketing": [
    {
      image: "/teams/core/core1.jpg",
      title: "Aman Singh Rathore",
      subtitle: "Head",
      handle: "b22cs017@nitm.ac.in",
      borderColor: "#4F46E5", // Indigo
    },
    {
      image: "/teams/core/core2.jpg",
      title: "Satyam Kumar Singh",
      subtitle: "Head",
      handle: "b22me026@nitm.ac.in",
      borderColor: "#10B981", // Emerald
    },
    {
      image: "/teams/sponsor/sponsor1.JPG",
      title: "Arko Gupta",
      subtitle: "Co-Cordinator",
      handle: "b23ec031@nitm.ac.in",
      borderColor: "#8B5CF6", // Violet
    },
    {
      image: "/teams/sponsor/sponsor4.jpeg",
      title: "Antonia Charliza Lyngdoh",
      subtitle: "Co-Cordinator",
      handle: "b23ce024@nitm.ac.in",
      borderColor: "#EC4899", // Pink
    },
    {
      image: "/teams/sponsor/sponsor2.jpg",
      title: "Pettam Bhagirath",
      subtitle: "Member",
      handle: "b24ec025@nitm.ac.in",
      borderColor: "#10B981", // Emerald
    },
    {
      image: "/teams/sponsor/sponsor3.jpg",
      title: "Anshu Mohit",
      subtitle: "Member",
      handle: "b24cs045@nitm.ac.in",
      borderColor: "#F59E0B", // Amber
    },
  ],
  "Publicity and Social Media": [
    {
      image: "/teams/publicity/publicity1.jpeg",
      title: "Debashish Nayak",
      subtitle: "Head",
      handle: "b22ec030@nitm.ac.in",
      borderColor: "#06B6D4", // Cyan
    },
    {
      image: "",
      title: "Amar Chaudhary",
      subtitle: "Head",
      handle: "",
      borderColor: "#10B981", // Emerald
    },
    {
      image: "/teams/publicity/publicity3.jpg",
      title: "Iahunlang Kharmynthon",
      subtitle: "Co-Cordinator",
      handle: "b23ce016@nitm.ac.in",
      borderColor: "#EF4444", // Red
    },
    {
      image: "/teams/publicity/publicity4.jpg",
      title: "Kurra Nandini",
      subtitle: "Co-ordinator",
      handle: "b23ec018@nitm.ac.in",
      borderColor: "#8B5CF6", // Violet
    },
    {
      image: "",
      title: "Midasala Bhanu Vardhan Rao",
      subtitle: "Member",
      handle: "",
      borderColor: "#EC4899", // Pink
    },
    {
      image: "",
      title: "Sumit Kumar",
      subtitle: "Member",
      handle: "",
      borderColor: "#14B8A6", // Teal
    },
  ],
  Robotics: [
    {
      image: "/teams/robotics/robotics1.jpg",
      title: "Avinash Kumar Singh",
      subtitle: "Convenor",
      handle: "",
      borderColor: "#F472B6",
    }, // Pink
    {
      image: "/teams/robotics/robotics2.jpg",
      title: "Pankaj Saraswat",
      subtitle: "Convenor",
      handle: "@rohit",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image: "/teams/robotics/robotics3.png",
      title: "Shivam Kumar",
      subtitle: "Head",
      handle: "b22me011@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics4.jpeg",
      title: "Rahul Kumar",
      subtitle: "Head",
      handle: "",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image: "/teams/robotics/robotics5.jpg",
      title: "Aditya Kumar Pandey",
      subtitle: "Head",
      handle: "",
      borderColor: "#EF4444",
    }, // Red
    {
      image: "/teams/robotics/robotics6.jpg",
      title: "Himanshu Kumar Jha",
      subtitle: "Head",
      handle: "b22me027@nitm.ac.in",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image: "/teams/robotics/robotics7.jpeg",
      title: "Debashish Nayak",
      subtitle: "Head",
      handle: "b22ec030@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/robotics/robotics8.jpeg",
      title: "Sanapala Rahul",
      subtitle: "Head",
      handle: "b22ee010@nitm.ac.in",
      borderColor: "#14B8A6",
    }, // Teal
    {
      image: "/teams/robotics/robotics9.jpg",
      title: "Rohit Aryan",
      subtitle: "Head",
      handle: "b22ee017@nitm.ac.in",
      borderColor: "#F97316",
    }, // Orange
    {
      image: "/teams/robotics/robotics10.jpg",
      title: "Ankit Raj",
      subtitle: "Head",
      handle: "",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image: "/teams/robotics/robotics11.jpg",
      title: "B Palguna Rao",
      subtitle: "Head",
      handle: "",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics12.jpg",
      title: "Akash Shah",
      subtitle: "Coordinator",
      handle: "b23me008@nitm.ac.in",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image: "/teams/robotics/robotics13.jpg",
      title: "Sachin Chaurasia",
      subtitle: "Coordinator",
      handle: "b23ee010@nitm.ac.in",
      borderColor: "#EF4444",
    }, // Red
    {
      image: "/teams/robotics/robotics14.jpg",
      title: "Vishnu Kumar",
      subtitle: "Coordinator",
      handle: "b23ee014@nitm.ac.in",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image: "/teams/robotics/robotics15.jpeg",
      title: "Akshaj Sunil",
      subtitle: "Coordinator",
      handle: "b23me020@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/robotics/robotics16.png",
      title: "Adharsh Barman",
      subtitle: "Coordinator",
      handle: "b23ee005@nitm.ac.in",
      borderColor: "#14B8A6",
    }, // Teal
    {
      image: "/teams/robotics/robotics17.webp",
      title: "Saksham Singhania",
      subtitle: "Coordinator",
      handle: "b23ce026@nitm.ac.in",
      borderColor: "#F97316",
    }, // Orange
    {
      image: "/teams/robotics/robotics18.png",
      title: "Rounak Prabhakar",
      subtitle: "Coordinator)",
      handle: "",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image: "/teams/robotics/robotics19.jpeg",
      title: "Parag Das",
      subtitle: "Coordinator",
      handle: "b23ee013@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics20.png",
      title: "Abhinav Hajong",
      subtitle: "Coordinator",
      handle: "b23ec006@nitm.ac.in",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image: "/teams/robotics/robotics21.jpg",
      title: "Aastha Mishra",
      subtitle: "Coordinator",
      handle: "b23me005@nitm.ac.in",
      borderColor: "#EF4444",
    }, // Red
    {
      image: "/teams/robotics/robotics22.jpg",
      title: "Gaurav Kumar Singh",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image: "/teams/robotics/robotics23.JPG",
      title: "Vignesh Patil",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/robotics/robotics24.jpg",
      title: "Aman Kumar",
      subtitle: "Coordinator",
      handle: "b23cs038@nitm.ac.in",
      borderColor: "#14B8A6",
    }, // Teal
    {
      image: "/teams/robotics/robotics25.jpg",
      title: "Pradip Kumar Mondal",
      subtitle: "Coordinator",
      handle: "b23ec034@nitm.ac.in",
      borderColor: "#F97316",
    },
    {
      image: "/teams/robotics/robotics26.jpg",
      title: "Purushottam Thakur",
      subtitle: "Coordinator",
      handle: "b23cs014@nitm.ac.in",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image: "/teams/robotics/robotics27.jpg",
      title: "Chinagudaba Nikhil",
      subtitle: "Coordinator",
      handle: "b23me027@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics28.jpg",
      title: "Shreya Raj",
      subtitle: "Member",
      handle: "b24ce014@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics29.jpg",
      title: "Ankita Singh",
      subtitle: "Member",
      handle: "b24cs018@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics30.jpg",
      title: "Abhishek Jaiswal",
      subtitle: "Member",
      handle: "b24ee001@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics31.jpg",
      title: "Bibhuti Mishra",
      subtitle: "Member",
      handle: "",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics32.jpg",
      title: "Sonam Kumari",
      subtitle: "Member",
      handle: "b24cs047@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics33.jpg",
      title: "Probhos Mandal",
      subtitle: "Member",
      handle: "b24ce010@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics34.jpeg",
      title: "Sanjog Singh",
      subtitle: "Member",
      handle: "b24ec005@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics35.webp",
      title: "Rahul Kumar",
      subtitle: "Member",
      handle: "b24ec023@nitm.ac.in",
      borderColor: "#10B981",
    },
    {
      image: "/teams/robotics/robotics36.JPG",
      title: "Arnab Nandi",
      subtitle: "Member",
      handle: "",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics37.jpg",
      title: "Md Kashif Iqbal",
      subtitle: "Member",
      handle: "b24ec007@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics38.jpg",
      title: "Kunal Das",
      subtitle: "Member",
      handle: "",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics39.jpeg",
      title: "Rahul Prasad",
      subtitle: "Member",
      handle: "b24ee004@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics40.jpg",
      title: "Ayush Kumar",
      subtitle: "Member",
      handle: "b24me030@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics41.jpg",
      title: "Akash Hajong",
      subtitle: "Member",
      handle: "b24me001@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics42.jpg",
      title: "Rohit Das",
      subtitle: "Member",
      handle: "b24cs012@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics43.jpg",
      title: "Anshu Mohit",
      subtitle: "Member",
      handle: "b24cs045@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics44.jpg",
      title: "Divyashakti",
      subtitle: "Member",
      handle: "",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/robotics/robotics45.png",
      title: "Bhabhisya Paudel",
      subtitle: "Member",
      handle: "",
      borderColor: "#10B981",
    }, // Emerald
  ],
  Coding: [
    {
      image: "/teams/coding/coding1.jpg",
      title: "Karipireddy Surya Teja Gopal Reddy",
      subtitle: "Convenor",
      handle: "b22cs022@nitm.ac.in",
      borderColor: "#F472B6",
    }, // Pink
    {
      image: "/teams/coding/coding2.JPG",
      title: "Chuncha Hemchand",
      subtitle: "Co-Convenor",
      handle: "b23cs020@nitm.ac.in",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image: "/teams/coding/coding3.jpeg",
      title: "Mrinmoy Maji",
      subtitle: "Head",
      handle: "b22cs036@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/coding/coding4.jpeg",
      title: "Manish Prasad Gupta",
      subtitle: "Head",
      handle: "b22cs007@nitm.ac.in",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image: "/teams/coding/coding5.jpeg",
      title: "Prem Kumar Gupta",
      subtitle: "Head",
      handle: "",
      borderColor: "#EF4444",
    }, // Red
    {
      image: "/teams/coding/coding6.jpg",
      title: "T Vikram Rathod",
      subtitle: "Head",
      handle: "b22cs033@nitm.ac.in",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image: "/teams/coding/coding7.png",
      title: "Satyajeet Rai",
      subtitle: "Head",
      handle: "b22ec021@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding8.png",
      title: "Ankit Raj",
      subtitle: "Co-ordinator",
      handle: "b23ec012@nitm.ac.in",
      borderColor: "#F97316",
    }, // Orange
    {
      image: "/teams/coding/coding9.png",
      title: "Abhay Kumar",
      subtitle: "Co-ordinator",
      handle: "b23ec022@nitm.ac.in",
      borderColor: "#06B6D4",
    }, // Cyan
    {
      image: "/teams/coding/coding10.jpg",
      title: "Austin Joel Dympep",
      subtitle: "Co-ordinator",
      handle: "b23cs035@nitm.ac.in",
      borderColor: "#10B981",
    }, // Emerald
    {
      image: "/teams/coding/coding11.jpg",
      title: "Arunoday Tiwari",
      subtitle: "Co-ordinator",
      handle: "b23ec009@nitm.ac.in",
      borderColor: "#F59E0B",
    }, // Amber
    {
      image: "/teams/coding/coding12.jpg",
      title: "Shashank Umar Vaishy",
      subtitle: "Co-ordinator",
      handle: "b23cs019@nitm.ac.in",
      borderColor: "#EF4444",
    }, // Red
    {
      image: "/teams/coding/coding13.jpg",
      title: "Charity Rymbai",
      subtitle: "Co-ordinator",
      handle: "b23me010@nitm.ac.in",
      borderColor: "#8B5CF6",
    }, // Violet
    {
      image: "/teams/coding/coding14.png",
      title: "Aryan Raj",
      subtitle: "Co-ordinator",
      handle: "b23ec042@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding15.jpeg",
      title: "Khushi Kumari",
      subtitle: "Co-ordinator",
      handle: "b23ec008@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding16.png",
      title: "Jishnu Duhan",
      subtitle: "Co-ordinator",
      handle: "b23cs037@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding17.jpeg",
      title: "Ayush Kumar Singh",
      subtitle: "Co-ordinator",
      handle: "b23ec003@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding18.jpg",
      title: "Rohit Das",
      subtitle: "Member",
      handle: "b24cs012@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding19.png",
      title: "Rishab Mankotia Synjri",
      subtitle: "Member",
      handle: "b24cs006@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding20.jpeg",
      title: "Shaik Thanveer",
      subtitle: "Member",
      handle: "",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding21.jpeg",
      title: "Kurva Hemanth",
      subtitle: "Member",
      handle: "",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding22.jpg",
      title: "Sonam Kumari",
      subtitle: "Member",
      handle: "b24cs047@gmail.com",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding23.jpeg",
      title: "Mohit Kumar",
      subtitle: "Member",
      handle: "b23ec003@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding24.jpeg",
      title: "Avishek Sah",
      subtitle: "Member",
      handle: "b24cs031@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding25.jpg",
      title: "Kunjana Panthy",
      subtitle: "Member",
      handle: "b24cs036@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding26.jpg",
      title: "Kunal",
      subtitle: "Member",
      handle: "b24cs020@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding27.jpeg",
      title: "Pasupureddy Shyameswar",
      subtitle: "Member",
      handle: "",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding28.jpeg",
      title: "Prathipati Dhanush",
      subtitle: "Member",
      handle: "b24cs048@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding29.png",
      title: "Rahul Das",
      subtitle: "Member",
      handle: "b24cs044@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding30.jpeg",
      title: "Nathaniel Kharsynniang",
      subtitle: "Member",
      handle: "b24cs027@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding31.jpg",
      title: "Rhythm Bhetwal",
      subtitle: "Member",
      handle: "b24cs038@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding32.jpeg",
      title: "Akash Malaker",
      subtitle: "Member",
      handle: "b24cs042@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding32.jpg",
      title: "Dharavath Drushyanth",
      subtitle: "Member",
      handle: "b24cs026@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/coding/coding33.jpg",
      title: "Anshu Mohit",
      subtitle: "Member",
      handle: "b24cs045@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
  ],
  "Task Force Club": [
    {
      image: "/teams/taskforce/taskforce1.jpg",
      title: "Jitta Chandra Sekhar",
      subtitle: "Convenor",
      handle: "b23me045@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/taskforce/taskforce2.jpg",
      title: "Podugu Ashrith",
      subtitle: "Convenor",
      handle: "b23ec045@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/taskforce/taskforce3.jpg",
      title: "Charagundla Sai Laxman",
      subtitle: "Head",
      handle: "b24cs045@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/taskforce/taskforce4.jpg",
      title: "Gourav Kumar",
      subtitle: "Co-ordinator",
      handle: "b23me018@nitm.ac.in",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/taskforce/taskforce5.jpg",
      title: "Nishu Lamba",
      subtitle: "Member",
      handle: "",
      borderColor: "#EC4899",
    }, // Pink
    {
      image: "/teams/taskforce/taskforce6.jpg",
      title: "Adittya Kumar Thakur",
      subtitle: "Member",
      handle: "",
      borderColor: "#EC4899",
    }, // Pink
  ],
  "Dance & Drama": [
    {
      image: "/teams/dance/dance1.jpg",
      title: "Sravani",
      subtitle: "Convenor",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/dance/dance2.jpg",
      title: "B Palguna Rao",
      subtitle: "Convenor",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/dance/dance3.jpg",
      title: "T Sanjana",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/dance/dance4.jpg",
      title: "M Sreekar Prasad",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#EC4899",
    },
  ],
  "Photography and fine arts": [
    {
      image: "/teams/art/art1.png",
      title: "Satyam Singh",
      subtitle: "Convenor",
      handle: "b23ce020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/art/art2.jpeg",
      title: "Md. Syed Ashraf Rafi",
      subtitle: "Convenor",
      handle: "b23ec001@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/art/art3.jpg",
      title: "Aditya Tripathi",
      subtitle: "Member",
      handle: "b24ce028@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/art/art4.png",
      title: "Harish Meena",
      subtitle: "Member",
      handle: "b24ce027@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  "E-Cell": [
    {
      image: "/teams/ecell/ecell1.jpeg",
      title: "Swarnim Suman",
      subtitle: "Convenor",
      handle: "b24cs046@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/ecell/ecell2.jpg",
      title: "Nazia Sheikh",
      subtitle: "Coordinator",
      handle: "b23ce029@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/ecell/ecell3.jpeg",
      title: "Anjali",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/ecell/ecell4.jpg",
      title: "Ledonki Bevan Laloo",
      subtitle: "Coordinator",
      handle: "b23me030@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/ecell/ecell5.jpeg",
      title: "Alfred L. Pautu",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/ecell/ecell6.jpeg",
      title: "Abhay Mishra",
      subtitle: "Member",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/ecell/ecell7.jpg",
      title: "Akshith Reddy",
      subtitle: "Member",
      handle: "b24ec020@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  "Energy and Sustainability Club": [
    {
      image: "/teams/energy/energy1.jpg",
      title: "Md Shams Tabrez Ansari",
      subtitle: "Convenor",
      handle: "b22ee033@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy2.jpeg",
      title: "Diya Silvana Ritchil",
      subtitle: "Coordinator",
      handle: "b22ee001@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy3.png",
      title: "Imon Shahriar",
      subtitle: "Coordinator",
      handle: "b22ec001@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy4.jpg",
      title: "Aman Mina",
      subtitle: "Coordinator",
      handle: "b23me031@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy5.jpg",
      title: "Manish Kumar",
      subtitle: "Coordinator",
      handle: "b23ce017@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy6.jpeg",
      title: "Swarnim Suman",
      subtitle: "Member",
      handle: "b24cs046@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy7.jpeg",
      title: "Sanjog Singh",
      subtitle: "Member",
      handle: "b24ec005@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy9.jpg",
      title: "Ayush Kumar",
      subtitle: "Member",
      handle: "b24me030@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/energy/energy8.webp",
      title: "Rahul Kumar",
      subtitle: "Member",
      handle: "b24ec023@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  "Design Club": [
    {
      image: "/teams/design/design1.png",
      title: "Satyam Singh",
      subtitle: "Convenor",
      handle: "b23ce020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/design/design2.jpg",
      title: "Nazia Hasan Sheikh",
      subtitle: "Convenor",
      handle: "b23ce029@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/design/design3.jpeg",
      title: "Poulomi Das",
      subtitle: "Member",
      handle: "b24me004@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/design/design4.jpg",
      title: "Bhawani Shankar",
      subtitle: "Member",
      handle: "b24ee020@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  "Astronomy Club": [
    {
      image: "/teams/astronomy/astronomy1.jpg",
      title: "Ujjawal Jhajharia",
      subtitle: "Convenor",
      handle: "b22ee007@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/astronomy/astronomy2.png",
      title: "Rounak Saha",
      subtitle: "Convenor",
      handle: "b22cs008@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/astronomy/astronomy3.jpg",
      title: "Vishnu Kumar",
      subtitle: "Coordinator",
      handle: "b23ee014@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  Departmental: [
    {
      image: "/teams/departmental/departmental1.png",
      title: "Rounak Saha",
      subtitle: "Head(CSE)",
      handle: "b22cs008@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental2.jpeg",
      title: "Medagam Manikanta Reddy",
      subtitle: "Head(ECE)",
      handle: "b22ec013@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental3.jpg",
      title: "Mayank Mishra",
      subtitle: "Head(EEE)",
      handle: "b22ee030@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental4.jpeg",
      title: "Tinku Debbarma",
      subtitle: "Head(EEE)",
      handle: "b22ee020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental5.jpg",
      title: "Manisha Kumari",
      subtitle: "Head(ME)",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental6.jpg",
      title: "Saismruti sabat",
      subtitle: "Head(Math)",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental7.JPG",
      title: "Shivam Thakur",
      subtitle: "Coordinator(CSE)",
      handle: "b23cs021@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental8.jpg",
      title: "Pradip Kumar Mondal",
      subtitle: "Coordinator(ECE)",
      handle: "b23ec034@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental9.jpg",
      title: "Saurav Kumar(ECE)",
      subtitle: "Coordinator",
      handle: "b23ec040@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental10.jpg",
      title: "Surabani Rani",
      subtitle: "Coordinator(EE)",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental11.png",
      title: "Abhishek Kumar Chauhan",
      subtitle: "Coordinator(ME)",
      handle: "b23me026@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental12.jpg",
      title: "John Nelvidson Marwein",
      subtitle: "Coordinator(ME)",
      handle: "b23me025@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental13.png",
      title: "Satyam Singh",
      subtitle: "Coordinator(CE)",
      handle: "b23ce020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental14.jpg",
      title: "Nazia Hasan Sheikh(CE)",
      subtitle: "Coordinator",
      handle: "b23ce029@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental15.jpg",
      title: "Md Kashif",
      subtitle: "Member(ECE)",
      handle: "b24ec007@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/departmental/departmental16.jpg",
      title: "DEISICA MARBANIANG",
      subtitle: "Member(CE)",
      handle: "b23ce008@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  Design: [
    {
      image: "/teams/designteam/designteam1.jpg",
      title: "Botu Varun",
      subtitle: "Head",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam2.jpg",
      title: "L Komune",
      subtitle: "Head",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam3.jpg",
      title: "Tiyangsen Lemtor",
      subtitle: "Head",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam4.jpg",
      title: "Ritik Kumar",
      subtitle: "Coordinator",
      handle: "b23me014@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam5.png",
      title: "Satyam Singh",
      subtitle: "Coordinator",
      handle: "b23ce020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam6.jpg",
      title: "Priya Saha",
      subtitle: "Member",
      handle: "b24cs023@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam7.jpg",
      title: "Bhawani Shankar",
      subtitle: "Member",
      handle: "b24ee020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam8.jpg",
      title: "Probhas Mondal",
      subtitle: "Member",
      handle: "b24ce010@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam9.jpeg",
      title: "Poulomi Das",
      subtitle: "Member",
      handle: "b24me004@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam10.jpg",
      title: "Midasala Bhanu Vardhan Rao",
      subtitle: "Member",
      handle: "b24me022@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam11.jpg",
      title: "Deepak",
      subtitle: "Member",
      handle: "b24ce007@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/designteam/designteam12.jpg",
      title: "Md Kashif",
      subtitle: "Member",
      handle: "b24ec007@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  Volunteer: [
    {
      image: "/teams/volunteer/volunteer1.jpeg",
      title: "Debashish Nayak",
      subtitle: "Head",
      handle: "b22ec030@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer2.jpg",
      title: "Kurra Nandini",
      subtitle: "Coordinator",
      handle: "b23ec018@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer3.png",
      title: "Abhinav Hajong",
      subtitle: "Coordinator",
      handle: "b23ec006@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer4.jpeg",
      title: "Dai",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer5.jpeg",
      title: "Valluri Venkata Mohan",
      subtitle: "Coordinator",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer6.jpg",
      title: "Deepak",
      subtitle: "Member",
      handle: "b24ce007@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer7.jpg",
      title: "Bhawani Shankar",
      subtitle: "Member",
      handle: "b24ee020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer8.jpg",
      title: "Aman Kumar Jaiswal",
      subtitle: "Member",
      handle: "b24ee029@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer9.jpg",
      title: "Shreya Raj",
      subtitle: "Member",
      handle: "b24ce014@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer10.jpg",
      title: "Amit Kuri",
      subtitle: "Member",
      handle: "b24me029@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer11.jpeg",
      title: "Sumit Kumar",
      subtitle: "Member",
      handle: "b24cs049@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer12.jpeg",
      title: "Nathaniel Kharsynniang",
      subtitle: "Member",
      handle: "b24cs027@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/volunteer/volunteer13.png",
      title: "Aditya Kumar Thakur",
      subtitle: "Member",
      handle: "b24ec035@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  Gaming: [
    {
      image: "/teams/gaming/gaming1.jpg",
      title: "Ankit Raj",
      subtitle: "Head",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/gaming/gaming2.jpg",
      title: "Rohit Aryan",
      subtitle: "Head",
      handle: "b22ee017@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/gaming/gaming3.jpg",
      title: "Ledonki Bevan Laloo ",
      subtitle: "Co-Coordinator",
      handle: "b23me030@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/gaming/gaming4.png",
      title: "Abhinav Hajong",
      subtitle: "Co-Coordinator",
      handle: "b23ec006@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/gaming/gaming5.jpg",
      title: "Aibansansame Kharbanni",
      subtitle: "Co-Coordinator",
      handle: "b23cs024@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/gaming/gaming6.jpg",
      title: "Amit Kuri",
      subtitle: "Member",
      handle: "b24me029@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/gaming/gaming7.jpg",
      title: "Rohit Das",
      subtitle: "Member",
      handle: " b24cs012@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  Management: [
    {
      image: "/teams/management/management1.jpeg",
      title: "B Vedant",
      subtitle: "Head(Stage Management)",
      handle: "b22ee012@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management2.jpg",
      title: "Bojha Jaswanth",
      subtitle: "Head(Event Management)",
      handle: "b22me007@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management3.jpg",
      title: "Sheikh Nabeel",
      subtitle: "Head(Event Management)",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management4.jpg",
      title: "Winson Suchiang",
      subtitle: "Head(Public Relations)",
      handle: "b22ec006@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management5.jpg",
      title: "Aman Mina",
      subtitle: "Co-Coordinator(Stage Management)",
      handle: "b23me031@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management6.jpg",
      title: "Nazia Hasan Sheikh",
      subtitle: "Co-Coordinator(Stage Management)",
      handle: "b23ce029@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management4.jpg",
      title: "",
      subtitle: "Co-Coordinator(Public Relations)",
      handle: "b22ec006@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management7.jpg",
      title: "Saurav Kumar",
      subtitle: "Co-Coordinator(Event Management)",
      handle: "b23ec040@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management8.jpg",
      title: "Bandla venkata Bharath chandra",
      subtitle: "Co-Coordinator(Event Management)",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management8.jpg",
      title: "Purushottam Thakur",
      subtitle: "Co-Coordinator(Event Management)",
      handle: "b23cs014@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management9.jpg",
      title: "Manish Kumar",
      subtitle: "Co-Coordinator(Public Relations)",
      handle: "b23ce017@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management10.jpg",
      title: "Kunal",
      subtitle: "Member(Stage Management)",
      handle: "b24cs020@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management11.jpeg",
      title: "Sumit Kumar",
      subtitle: "Member(Stage Management)",
      handle: "b24cs049@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management12.jpg",
      title: "Amit Kumar",
      subtitle: "Member(Event Management)",
      handle: "b24ee025@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/management/management13.jpg",
      title: "Shreyas Sharma",
      subtitle: "Member(Public Relations)",
      handle: "",
      borderColor: "#EC4899",
    },
  ],
  Hospitality: [
    {
      image: "/teams/hospitality/hospitality1.jpg",
      title: "Vanyza Lyngshiang",
      subtitle: "Head",
      handle: "b22ee008@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/hospitality/hospitality2.png",
      title: "Abhishek Kumar Chauhan",
      subtitle: "Co-Coordinator",
      handle: "b23me026@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/hospitality/hospitality3.jpg",
      title: "Sanjeev Gupta",
      subtitle: "Co-Coordinator",
      handle: "b23me004@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/hospitality/hospitality4.jpeg",
      title: "Nathaniel Kharsynniang",
      subtitle: "Member",
      handle: "b24cs027@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/hospitality/hospitality5.png",
      title: "Aditya Kumar Thakur",
      subtitle: "Member",
      handle: "b24ec035@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
  "Food Committee": [
    {
      image: "/teams/food/food1.jpg",
      title: "Ashirbad Raj Arya",
      subtitle: "Head",
      handle: "b22ec009@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/food/food2.jpg",
      title: "B Palguna Rao",
      subtitle: "Head",
      handle: "",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/food/food3.JPG",
      title: "Kuldeep Chaudhary",
      subtitle: "Coordinator",
      handle: "b23ec019@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/food/food4.jpg",
      title: "Ritik Kumar",
      subtitle: "Coordinator",
      handle: "b23me014@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/food/food5.jpg",
      title: "Minalish Hajong",
      subtitle: "Member",
      handle: "b24ec011@nitm.ac.in",
      borderColor: "#EC4899",
    },
    {
      image: "/teams/food/food6.jpg",
      title: "Aman Kumar Jaiswal",
      subtitle: "Member",
      handle: "b24ee029@nitm.ac.in",
      borderColor: "#EC4899",
    },
  ],
};

export { navLinks, eventsData, events, teamData };
