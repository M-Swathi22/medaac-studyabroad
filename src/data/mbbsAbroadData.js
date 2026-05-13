import georgiaHero from "../assets/images/countries/georgia.webp";
import tajikistanHero from "../assets/images/countries/tajikistan.webp";
import uzbekistanHero from "../assets/images/countries/uzbekistan.jpg";

import georgiaLife from "../assets/images/countries/georgia.webp";
import tajikistanLife from "../assets/images/countries/tajikistan.webp";
import uzbekistanLife from "../assets/images/countries/uzbekistan.jpg";

import georgiaFlag from "../assets/images/flags/georgia.png";
import uzbekistanFlag from "../assets/images/flags/uzbekistan.webp";
import tajikistanFlag from "../assets/images/flags/tajikistan.png";

const alteUniversityImg = georgiaHero;
const tsmuImg = georgiaHero;
const ugImg = georgiaHero;
const eeuImg = georgiaHero;
const seuImg = georgiaHero;
const ciuImg = georgiaHero;
const dtmuImg = georgiaHero;
const batumiImg = georgiaHero;

const andijanImg = uzbekistanHero;
const samarkandImg = uzbekistanHero;
const ferganaImg = uzbekistanHero;
const tashkentImg = uzbekistanHero;
const tashkentDentalImg = uzbekistanHero;
const bukharaImg = uzbekistanHero;

const tajikMedicalImg = tajikistanHero;
const avicennaImg = tajikistanHero;
const medicalSocialImg = tajikistanHero;
const khatlonImg = tajikistanHero;

export const COUNTRY_DATA = {
  /* =========================================================
     GEORGIA
  ========================================================= */
  georgia: {
    country: "Georgia",

    heroImage: georgiaHero,

    description:
      "Georgia is one of the most preferred destinations for MBBS abroad because of globally recognized universities, affordable tuition fees, and modern medical infrastructure.",

    stats: [
      {
        value: "6 Years",
        label: "Course Duration",
      },

      {
        value: "$4000+",
        label: "Starting Tuition",
      },

      {
        value: "English",
        label: "Medium",
      },

      {
        value: "NMC + WHO",
        label: "Recognition",
      },
    ],

    whyTitle: "Why Study MBBS in Georgia?",

    whyDescription:
      "Georgia offers globally recognized medical education with modern infrastructure, experienced faculty, and affordable tuition fees for international students.",

    benefits: [
      {
        title: "Globally Recognized Universities",
        desc: "Medical universities are approved by NMC, WHO, and other international bodies.",
      },

      {
        title: "Affordable Tuition Fees",
        desc: "Students can complete MBBS at lower costs compared to private colleges.",
      },

      {
        title: "English Medium Programs",
        desc: "Complete MBBS programs are available in English medium.",
      },

      {
        title: "Advanced Clinical Exposure",
        desc: "Students gain practical experience in modern hospitals and labs.",
      },
    ],

    universities: [
  {
    name: "Alte University",
    image: alteUniversityImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#7912",
    duration: "6 Years",
    fees: "$5000 / year",
    food: "Indian Food",
    students: "2500+",
    accommodation: "Hostel",
  },

  {
    name: "Tbilisi State Medical University (TSMU)",
    image: tsmuImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#3870",
    duration: "6 Years",
    fees: "$8000 / year",
    food: "Indian Food",
    students: "7000+",
    accommodation: "Hostel",
  },

  {
    name: "The University of Georgia",
    image: ugImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#6012",
    duration: "6 Years",
    fees: "$6000 / year",
    food: "Indian Food",
    students: "4000+",
    accommodation: "Hostel",
  },

  {
    name: "East European University",
    image: eeuImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#8950",
    duration: "6 Years",
    fees: "$5500 / year",
    food: "Indian Food",
    students: "2000+",
    accommodation: "Hostel",
  },

  {
    name: "Georgian National University SEU",
    image: seuImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#7200",
    duration: "6 Years",
    fees: "$5000 / year",
    food: "Indian Food",
    students: "3500+",
    accommodation: "Hostel",
  },

  {
    name: "Caucasus International University",
    image: ciuImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#8300",
    duration: "6 Years",
    fees: "$5000 / year",
    food: "Indian Food",
    students: "3000+",
    accommodation: "Hostel",
  },

  {
    name: "David Tvildiani Medical University",
    image: dtmuImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#9500",
    duration: "6 Years",
    fees: "$8000 / year",
    food: "Indian Food",
    students: "1500+",
    accommodation: "Hostel",
  },

  {
    name: "Batumi Shota Rustaveli State University",
    image: batumiImg,
    flag: georgiaFlag,
    country: "Georgia",
    worldRank: "#6400",
    duration: "6 Years",
    fees: "$4000 / year",
    food: "Indian Food",
    students: "5000+",
    accommodation: "Hostel",
  },
],

    studentLifeImage: georgiaLife,

    studentLifeTitle: "Student Life in Georgia",

    studentLifeDescription:
      "Georgia provides safe campuses, affordable living costs, modern hostels, and excellent international student communities.",

    studentLifePoints: [
      {
        title: "Modern Hostel Facilities",
        desc: "Students get comfortable and secure accommodation with modern amenities.",
      },

      {
        title: "Affordable Living",
        desc: "Food, transportation, and accommodation are budget-friendly.",
      },

      {
        title: "Safe Environment",
        desc: "Georgia is considered one of the safest countries for students.",
      },

      {
        title: "Multicultural Exposure",
        desc: "Students interact with peers from multiple countries and cultures.",
      },
    ],
  },

  /* =========================================================
     UZBEKISTAN
  ========================================================= */
  uzbekistan: {
    country: "Uzbekistan",

    heroImage: uzbekistanHero,

    description:
      "Uzbekistan provides quality medical education with modern campuses, affordable tuition fees, and internationally recognized medical universities.",

    stats: [
      {
        value: "6 Years",
        label: "Course Duration",
      },

      {
        value: "$3500+",
        label: "Starting Tuition",
      },

      {
        value: "English",
        label: "Medium",
      },

      {
        value: "NMC + WHO",
        label: "Recognition",
      },
    ],

    whyTitle: "Why Study MBBS in Uzbekistan?",

    whyDescription:
      "Uzbekistan is becoming a fast-growing MBBS destination because of affordable education, modern infrastructure, and experienced faculty.",

    benefits: [
      {
        title: "Affordable MBBS Programs",
        desc: "Students can study medicine at affordable tuition fees.",
      },

      {
        title: "Modern Medical Universities",
        desc: "Universities offer advanced labs and modern infrastructure.",
      },

      {
        title: "English Medium Education",
        desc: "Most universities offer MBBS courses fully in English.",
      },

      {
        title: "Global Recognition",
        desc: "Universities are approved by NMC, WHO, and international organizations.",
      },
    ],

   universities: [
  {
    name: "Andijan State Medical Institute",
    image: andijanImg,
    flag: uzbekistanFlag,
    country: "Uzbekistan",
    worldRank: "#6200",
    duration: "6 Years",
    fees: "$3500 / year",
    food: "Indian Food",
    students: "4000+",
    accommodation: "Hostel",
  },

  {
    name: "Samarkand State Medical Institute",
    image: samarkandImg,
    flag: uzbekistanFlag,
    country: "Uzbekistan",
    worldRank: "#5100",
    duration: "6 Years",
    fees: "$4000 / year",
    food: "Indian Food",
    students: "6000+",
    accommodation: "Hostel",
  },

  {
    name: "Fergana State University Medical Centre",
    image: ferganaImg,
    flag: uzbekistanFlag,
    country: "Uzbekistan",
    worldRank: "#8400",
    duration: "6 Years",
    fees: "$3200 / year",
    food: "Indian Food",
    students: "3000+",
    accommodation: "Hostel",
  },

  {
    name: "Tashkent Medical Academy",
    image: tashkentImg,
    flag: uzbekistanFlag,
    country: "Uzbekistan",
    worldRank: "#4200",
    duration: "6 Years",
    fees: "$4500 / year",
    food: "Indian Food",
    students: "8000+",
    accommodation: "Hostel",
  },

  {
    name: "Tashkent Dental and Faculty of Medicine",
    image: tashkentDentalImg,
    flag: uzbekistanFlag,
    country: "Uzbekistan",
    worldRank: "#7000",
    duration: "6 Years",
    fees: "$4200 / year",
    food: "Indian Food",
    students: "3500+",
    accommodation: "Hostel",
  },

  {
    name: "Bukhara State Medical Institute",
    image: bukharaImg,
    flag: uzbekistanFlag,
    country: "Uzbekistan",
    worldRank: "#5900",
    duration: "6 Years",
    fees: "$3800 / year",
    food: "Indian Food",
    students: "5000+",
    accommodation: "Hostel",
  },
],

    studentLifeImage: uzbekistanLife,

    studentLifeTitle: "Student Life in Uzbekistan",

    studentLifeDescription:
      "Uzbekistan offers modern hostels, affordable living expenses, safe campuses, and welcoming international student communities.",

    studentLifePoints: [
      {
        title: "Affordable Accommodation",
        desc: "Students can stay in secure and affordable university hostels.",
      },

      {
        title: "Budget-Friendly Lifestyle",
        desc: "Living expenses are lower compared to many other countries.",
      },

      {
        title: "Safe Student Environment",
        desc: "Universities maintain secure and student-friendly campuses.",
      },

      {
        title: "International Exposure",
        desc: "Students interact with multicultural communities and peers.",
      },
    ],
  },

  /* =========================================================
     TAJIKISTAN
  ========================================================= */
  tajikistan: {
    country: "Tajikistan",

    heroImage: tajikistanHero,

    description:
      "Tajikistan offers affordable and quality medical education with recognized universities and simplified admission procedures for international students.",

    stats: [
      {
        value: "6 Years",
        label: "Course Duration",
      },

      {
        value: "$3000+",
        label: "Starting Tuition",
      },

      {
        value: "English",
        label: "Medium",
      },

      {
        value: "NMC + WHO",
        label: "Recognition",
      },
    ],

    whyTitle: "Why Study MBBS in Tajikistan?",

    whyDescription:
      "Tajikistan is becoming popular for MBBS because of affordable fees, recognized universities, and quality education.",

    benefits: [
      {
        title: "Low Tuition Fees",
        desc: "Students can study MBBS at affordable costs.",
      },

      {
        title: "Recognized Universities",
        desc: "Universities are approved by NMC and WHO.",
      },

      {
        title: "English Medium Programs",
        desc: "Medical programs are available fully in English medium.",
      },

      {
        title: "Clinical Training",
        desc: "Students receive practical exposure through hospitals and labs.",
      },
    ],

   universities: [
  {
    name: "Tajik National Medical University",
    image: tajikMedicalImg,
    flag: tajikistanFlag,
    country: "Tajikistan",
    worldRank: "#7600",
    duration: "6 Years",
    fees: "$3500 / year",
    food: "Indian Food",
    students: "3500+",
    accommodation: "Hostel",
  },

  {
    name: "Avicenna Tajik State Medical University",
    image: avicennaImg,
    flag: tajikistanFlag,
    country: "Tajikistan",
    worldRank: "#6800",
    duration: "6 Years",
    fees: "$3200 / year",
    food: "Indian Food",
    students: "3000+",
    accommodation: "Hostel",
  },

  {
    name: "Medical Social Institute of Tajikistan",
    image: medicalSocialImg,
    flag: tajikistanFlag,
    country: "Tajikistan",
    worldRank: "#9100",
    duration: "6 Years",
    fees: "$3000 / year",
    food: "Indian Food",
    students: "1800+",
    accommodation: "Hostel",
  },

  {
    name: "Khatlon State Medical University",
    image: khatlonImg,
    flag: tajikistanFlag,
    country: "Tajikistan",
    worldRank: "#9800",
    duration: "6 Years",
    fees: "$2800 / year",
    food: "Indian Food",
    students: "1500+",
    accommodation: "Hostel",
  },
],
    studentLifeImage: tajikistanLife,

    studentLifeTitle: "Student Life in Tajikistan",

    studentLifeDescription:
      "Students in Tajikistan experience affordable living, supportive environments, secure hostels, and quality medical education.",

    studentLifePoints: [
      {
        title: "Affordable Hostels",
        desc: "Universities provide budget-friendly hostel facilities.",
      },

      {
        title: "Indian Food Availability",
        desc: "Students can access Indian food and restaurants easily.",
      },

      {
        title: "Secure Campuses",
        desc: "Universities maintain safe and student-friendly campuses.",
      },

      {
        title: "International Student Community",
        desc: "Students interact with peers from different countries.",
      },
    ],
  },
};