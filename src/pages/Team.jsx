import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// === Team Data ===
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

const Team = () => {
  const [activeTab, setActiveTab] = useState("Core");

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 py-16 pt-25">
      {/* Shader Background */}
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={8}
          uSpeed={0.3}
          uStrength={1.5}
          uDensity={1.5}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          color1="#242880"
          color2="#8d7dca"
          color3="#212121"
          reflection={0.1}
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={2.8}
          cameraZoom={9.1}
          lightType="3d"
          brightness={1}
          envPreset="city"
          grain="on"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={false}
        />
      </ShaderGradientCanvas>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-10"
      >
        <h2 className="text-5xl font-bold">
          Meet the <span className="text-cyan-400">Team</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          A special thanks to all the wonderful people who contributed to the
          event! Words can’t express our appreciation for you!
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="relative z-10 flex justify-center space-x-6 mb-12">
        {Object.keys(teamData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold transition-all ${
              activeTab === tab
                ? "border-b-2 border-cyan-400 text-cyan-400"
                : "text-gray-400 hover:text-cyan-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Team Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamData[activeTab].map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border"
            style={{ borderColor: member.borderColor }}
          >
            <img
              src={member.image}
              alt={member.title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-bold">{member.title}</h3>
              <p className="text-sm text-gray-300">{member.subtitle}</p>
              <span className="text-cyan-400">{member.handle}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
