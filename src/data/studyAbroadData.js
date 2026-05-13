// src/data/studyAbroadData.js

/* ─────────────────────────────────────────────
   COUNTRY IMAGES
───────────────────────────────────────────── */

import uzbekistanImg from "../assets/images/countries/uzbekistan.jpg";
import georgiaImg from "../assets/images/countries/georgia.webp";
import russiaImg from "../assets/images/countries/russia.webp";
import egyptImg from "../assets/images/countries/egypt.jpg";
import tajikistanImg from "../assets/images/countries/tajikistan.webp";
import kazakhstanImg from "../assets/images/countries/kazakhstan.jpg";
import hungaryImg from "../assets/images/countries/hungary.jpg";
import ukImg from "../assets/images/countries/uk.jpg";
import canadaImg from "../assets/images/countries/canada.jpg";
import germanyImg from "../assets/images/countries/germany.jpg";
import irelandImg from "../assets/images/countries/ireland.jpg";
import chinaImg from "../assets/images/countries/china.jpg";
import polandImg from "../assets/images/countries/poland.jpg";
import kyrgyzstanImg from "../assets/images/countries/kyrgyzstan.jpg";
import bangladeshImg from "../assets/images/countries/bangladesh.jpg";
import belarusImg from "../assets/images/countries/belarus.jpg";
import nepalImg from "../assets/images/countries/nepal.jpg";
import bulgariaImg from "../assets/images/countries/bulgaria.jpg";
import philippinesImg from "../assets/images/countries/philippines.jpg";
import azerbaijanImg from "../assets/images/countries/azerbaijan.jpg";
import malaysiaImg from "../assets/images/countries/malaysia.jpg";
import franceImg from "../assets/images/countries/france.jpg";
import swedenImg from "../assets/images/countries/sweden.jpg";
import armeniaImg from "../assets/images/countries/armenia.jpg";
import finlandImg from "../assets/images/countries/finland.jpg";
import romaniaImg from "../assets/images/countries/romania.jpg";
import maltaImg from "../assets/images/countries/malta.jpg";
import latviaImg from "../assets/images/countries/latvia.jpg";
import lithuaniaImg from "../assets/images/countries/lithuania.jpg";
import moldovaImg from "../assets/images/countries/moldova.jpg";

/* ─────────────────────────────────────────────
   FLAGS
───────────────────────────────────────────── */

import uzbekistanFlag from "../assets/images/flags/uzbekistan.webp";
import georgiaFlag from "../assets/images/flags/georgia.png";
import russiaFlag from "../assets/images/flags/russia.png";
import egyptFlag from "../assets/images/flags/egypt.png";
import tajikistanFlag from "../assets/images/flags/tajikistan.png";
import kazakhstanFlag from "../assets/images/flags/kazakhstan.png";
import hungaryFlag from "../assets/images/flags/hungary.webp";
import ukFlag from "../assets/images/flags/uk.webp";
import canadaFlag from "../assets/images/flags/canada.png";
import germanyFlag from "../assets/images/flags/germany.png";
import irelandFlag from "../assets/images/flags/ireland.webp";
import chinaFlag from "../assets/images/flags/china.webp";
import polandFlag from "../assets/images/flags/poland.png";
import kyrgyzstanFlag from "../assets/images/flags/kyrgyzstan.png";
import bangladeshFlag from "../assets/images/flags/bangladesh.webp";
import belarusFlag from "../assets/images/flags/belarus.jpg";
import nepalFlag from "../assets/images/flags/nepal.avif";
import bulgariaFlag from "../assets/images/flags/bulgaria.png";
import philippinesFlag from "../assets/images/flags/philippines.webp";
import azerbaijanFlag from "../assets/images/flags/azerbaijan.webp";
import malaysiaFlag from "../assets/images/flags/malaysia.png";
import franceFlag from "../assets/images/flags/france.webp";
import swedenFlag from "../assets/images/flags/sweden.png";
import armeniaFlag from "../assets/images/flags/armenia.png";
import finlandFlag from "../assets/images/flags/finland.avif";
import romaniaFlag from "../assets/images/flags/romania.webp";
import maltaFlag from "../assets/images/flags/malta.png";
import latviaFlag from "../assets/images/flags/latvia.webp";
import lithuaniaFlag from "../assets/images/flags/lithuania.webp";
import moldovaFlag from "../assets/images/flags/moldova.webp";

/* ─────────────────────────────────────────────
   COUNTRIES DATA
───────────────────────────────────────────── */

export const COUNTRIES = [
  {
  id: "uzbekistan",
  name: "Uzbekistan",
  image: uzbekistanImg,
  flag: uzbekistanFlag,
  universities: 18,
  students: "1200+",
  tuition: "$3000 / year",
  courses: ["MBBS", "Dentistry", "Pharmacy"],

  universityList: [
    {
      name: "Andijan State Medical Institute",
      image: uzbekistanImg,
      worldRank: "6150",
      duration: "6 Years",
      fees: "$3500 / year",
      food: "$120 / month",
      accommodation: "$180 / month",
      students: "1400+",
    },

    {
      name: "Samarkand State Medical Institute",
      image: uzbekistanImg,
      worldRank: "5400",
      duration: "6 Years",
      fees: "$4200 / year",
      food: "$150 / month",
      accommodation: "$220 / month",
      students: "1800+",
    },

    {
      name: "Fergana State University Medical Centre",
      image: uzbekistanImg,
      worldRank: "6900",
      duration: "6 Years",
      fees: "$3000 / year",
      food: "$110 / month",
      accommodation: "$170 / month",
      students: "1000+",
    },

    {
      name: "Tashkent Medical Academy",
      image: uzbekistanImg,
      worldRank: "4100",
      duration: "6 Years",
      fees: "$3800 / year",
      food: "$130 / month",
      accommodation: "$210 / month",
      students: "2200+",
    },

    {
      name: "Tashkent Dental and Faculty of Medicine",
      image: uzbekistanImg,
      worldRank: "5200",
      duration: "5 Years",
      fees: "$3600 / year",
      food: "$120 / month",
      accommodation: "$190 / month",
      students: "1300+",
    },

    {
      name: "Bukhara State Medical Institute",
      image: uzbekistanImg,
      worldRank: "4700",
      duration: "6 Years",
      fees: "$4000 / year",
      food: "$140 / month",
      accommodation: "$200 / month",
      students: "1700+",
    },
  ],
},

  {
  id: "georgia",
  name: "Georgia",
  image: georgiaImg,
  flag: georgiaFlag,
  universities: 20,
  students: "1600+",
  tuition: "$4500 / year",
  courses: ["MBBS", "Engineering", "Business"],

  universityList: [
    {
      name: "Alte University",
      image: georgiaImg,
      worldRank: "4800",
      duration: "6 Years",
      fees: "$5500 / year",
      food: "$180 / month",
      accommodation: "$300 / month",
      students: "2500+",
    },

    {
      name: "Tbilisi State Medical University (TSMU)",
      image: georgiaImg,
      worldRank: "3900",
      duration: "6 Years",
      fees: "$8000 / year",
      food: "$220 / month",
      accommodation: "$350 / month",
      students: "7500+",
    },

    {
      name: "The University of Georgia",
      image: georgiaImg,
      worldRank: "4200",
      duration: "6 Years",
      fees: "$6000 / year",
      food: "$200 / month",
      accommodation: "$320 / month",
      students: "5000+",
    },

    {
      name: "East European University",
      image: georgiaImg,
      worldRank: "6700",
      duration: "6 Years",
      fees: "$5000 / year",
      food: "$170 / month",
      accommodation: "$280 / month",
      students: "1800+",
    },

    {
      name: "Georgian National University SEU",
      image: georgiaImg,
      worldRank: "5300",
      duration: "6 Years",
      fees: "$5500 / year",
      food: "$190 / month",
      accommodation: "$300 / month",
      students: "3200+",
    },

    {
      name: "Caucasus International University",
      image: georgiaImg,
      worldRank: "5900",
      duration: "6 Years",
      fees: "$5000 / year",
      food: "$180 / month",
      accommodation: "$290 / month",
      students: "2700+",
    },

    {
      name: "David Tvildiani Medical University",
      image: georgiaImg,
      worldRank: "4500",
      duration: "6 Years",
      fees: "$8000 / year",
      food: "$230 / month",
      accommodation: "$360 / month",
      students: "1500+",
    },

    {
      name: "Batumi Shota Rustaveli State University",
      image: georgiaImg,
      worldRank: "6100",
      duration: "6 Years",
      fees: "$4500 / year",
      food: "$170 / month",
      accommodation: "$260 / month",
      students: "2100+",
    },
  ],
},

  {
  id: "russia",
  name: "Russia",
  image: russiaImg,
  flag: russiaFlag,
  universities: 35,
  students: "2500+",
  tuition: "$3500 / year",
  courses: ["MBBS", "Engineering", "Nursing"],

  universityList: [
    {
      name: "Kuban State Medical University",
      image: russiaImg,
      worldRank: "4300",
      duration: "6 Years",
      fees: "$4200 / year",
      food: "$170 / month",
      accommodation: "$250 / month",
      students: "3500+",
    },

    {
      name: "Ivanovo State Medical University",
      image: russiaImg,
      worldRank: "5200",
      duration: "6 Years",
      fees: "$3800 / year",
      food: "$150 / month",
      accommodation: "$220 / month",
      students: "2400+",
    },

    {
      name: "Pacific State Medical University",
      image: russiaImg,
      worldRank: "4700",
      duration: "6 Years",
      fees: "$4500 / year",
      food: "$180 / month",
      accommodation: "$280 / month",
      students: "3200+",
    },

    {
      name: "Northern State Medical University",
      image: russiaImg,
      worldRank: "5900",
      duration: "6 Years",
      fees: "$3600 / year",
      food: "$140 / month",
      accommodation: "$210 / month",
      students: "1900+",
    },

    {
      name: "Orenburg State Medical University",
      image: russiaImg,
      worldRank: "4100",
      duration: "6 Years",
      fees: "$4000 / year",
      food: "$160 / month",
      accommodation: "$240 / month",
      students: "4200+",
    },

    {
      name: "Perm State Medical University",
      image: russiaImg,
      worldRank: "5000",
      duration: "6 Years",
      fees: "$3900 / year",
      food: "$150 / month",
      accommodation: "$230 / month",
      students: "2800+",
    },
  ],
},
  {
  id: "egypt",
  name: "Egypt",
  image: egyptImg,
  flag: egyptFlag,
  universities: 16,
  students: "900+",
  tuition: "$4000 / year",
  courses: ["MBBS", "Pharmacy", "Dentistry"],

  universityList: [
    {
      name: "Cairo University",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "371",
      duration: "6 Years",
      fees: "₹5.8 Lakhs/year",
      food: "₹11,000/month",
      accommodation: "₹16,000/month",
      students: "1200+",
    },

    {
      name: "Nahda University",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "4810",
      duration: "5 Years",
      fees: "₹6 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹15,000/month",
      students: "700+",
    },

    {
      name: "Alexandria University",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "901",
      duration: "6 Years",
      fees: "₹5.5 Lakhs/year",
      food: "₹10,500/month",
      accommodation: "₹15,500/month",
      students: "1000+",
    },

    {
      name: "The American University in Cairo",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "415",
      duration: "5 Years",
      fees: "₹9 Lakhs/year",
      food: "₹15,000/month",
      accommodation: "₹24,000/month",
      students: "1500+",
    },

    {
      name: "Mansoura University",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "1201",
      duration: "6 Years",
      fees: "₹5 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹14,000/month",
      students: "950+",
    },

    {
      name: "Zagazig University",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "1505",
      duration: "6 Years",
      fees: "₹4.8 Lakhs/year",
      food: "₹9,500/month",
      accommodation: "₹13,500/month",
      students: "850+",
    },

    {
      name: "Al Azhar University",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "1020",
      duration: "6 Years",
      fees: "₹4.5 Lakhs/year",
      food: "₹9,000/month",
      accommodation: "₹13,000/month",
      students: "1100+",
    },

    {
      name: "Ain Shams University",
      image: egyptImg,
      flag: egyptFlag,
      worldRank: "721",
      duration: "6 Years",
      fees: "₹5.3 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹15,000/month",
      students: "980+",
    },
  ],
},
  {
  id: "tajikistan",
  name: "Tajikistan",
  image: tajikistanImg,
  flag: tajikistanFlag,
  universities: 8,
  students: "500+",
  tuition: "$2500 / year",
  courses: ["MBBS", "Nursing"],

  universityList: [
    {
      name: "Tajik National Medical University",
      image: tajikistanImg,
      flag: tajikistanFlag,
      worldRank: "5890",
      duration: "6 Years",
      fees: "₹2.8 Lakhs/year",
      food: "₹8,000/month",
      accommodation: "₹10,000/month",
      students: "600+",
    },

    {
      name: "Avicenna Tajik State Medical University",
      image: tajikistanImg,
      flag: tajikistanFlag,
      worldRank: "6120",
      duration: "6 Years",
      fees: "₹3 Lakhs/year",
      food: "₹8,500/month",
      accommodation: "₹11,000/month",
      students: "550+",
    },

    {
      name: "Medical Social Institute of Tajikistan",
      image: tajikistanImg,
      flag: tajikistanFlag,
      worldRank: "7015",
      duration: "5 Years",
      fees: "₹2.5 Lakhs/year",
      food: "₹7,500/month",
      accommodation: "₹9,000/month",
      students: "350+",
    },

    {
      name: "Khatlon State Medical University",
      image: tajikistanImg,
      flag: tajikistanFlag,
      worldRank: "6580",
      duration: "6 Years",
      fees: "₹2.7 Lakhs/year",
      food: "₹8,000/month",
      accommodation: "₹10,000/month",
      students: "400+",
    },
  ],
},

 {
  id: "kazakhstan",
  name: "Kazakhstan",
  image: kazakhstanImg,
  flag: kazakhstanFlag,
  universities: 22,
  students: "1800+",
  tuition: "$3200 / year",
  courses: ["MBBS", "Engineering", "Business"],

  universityList: [
    {
      name: "Al Farabi Kazakh National University",
      image: kazakhstanImg,
      flag: kazakhstanFlag,
      worldRank: "165",
      duration: "5 Years",
      fees: "₹4 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹14,000/month",
      students: "1500+",
    },

    {
      name: "Kazakh National Medical University",
      image: kazakhstanImg,
      flag: kazakhstanFlag,
      worldRank: "3875",
      duration: "6 Years",
      fees: "₹3.5 Lakhs/year",
      food: "₹9,000/month",
      accommodation: "₹12,000/month",
      students: "1200+",
    },

    {
      name: "South Kazakh Medical Academy",
      image: kazakhstanImg,
      flag: kazakhstanFlag,
      worldRank: "5120",
      duration: "5 Years",
      fees: "₹3 Lakhs/year",
      food: "₹8,500/month",
      accommodation: "₹11,000/month",
      students: "850+",
    },

    {
      name: "Astana Medical University",
      image: kazakhstanImg,
      flag: kazakhstanFlag,
      worldRank: "4260",
      duration: "5 Years",
      fees: "₹3.8 Lakhs/year",
      food: "₹9,500/month",
      accommodation: "₹13,000/month",
      students: "950+",
    },
  ],
},

 {
  id: "hungary",
  name: "Hungary",
  image: hungaryImg,
  flag: hungaryFlag,
  universities: 14,
  students: "950+",
  tuition: "$7000 / year",
  courses: ["Medicine", "Engineering", "Architecture"],

  universityList: [
    {
      name: "University of Pécs",
      image: hungaryImg,
      flag: hungaryFlag,
      worldRank: "651",
      duration: "6 Years",
      fees: "₹8 Lakhs/year",
      food: "₹18,000/month",
      accommodation: "₹28,000/month",
      students: "1300+",
    },

    {
      name: "University of Szeged",
      image: hungaryImg,
      flag: hungaryFlag,
      worldRank: "570",
      duration: "6 Years",
      fees: "₹8.5 Lakhs/year",
      food: "₹17,000/month",
      accommodation: "₹26,000/month",
      students: "1200+",
    },

    {
      name: "University of Miskolc",
      image: hungaryImg,
      flag: hungaryFlag,
      worldRank: "1201",
      duration: "5 Years",
      fees: "₹7 Lakhs/year",
      food: "₹15,000/month",
      accommodation: "₹24,000/month",
      students: "850+",
    },

    {
      name: "University of Debrecen",
      image: hungaryImg,
      flag: hungaryFlag,
      worldRank: "671",
      duration: "6 Years",
      fees: "₹9 Lakhs/year",
      food: "₹18,500/month",
      accommodation: "₹30,000/month",
      students: "1400+",
    },

    {
      name: "Budapest University of Technology and Economics",
      image: hungaryImg,
      flag: hungaryFlag,
      worldRank: "801",
      duration: "5 Years",
      fees: "₹7.5 Lakhs/year",
      food: "₹16,000/month",
      accommodation: "₹25,000/month",
      students: "1100+",
    },
  ],
},
  {
  id: "uk",
  name: "United Kingdom",
  image: ukImg,
  flag: ukFlag,
  universities: 40,
  students: "5000+",
  tuition: "$15000 / year",
  courses: ["MBA", "Engineering", "Law"],

  universityList: [
    {
      name: "University of Greenwich",
      image: ukImg,
      flag: ukFlag,
      worldRank: "691",
      duration: "3 Years",
      fees: "₹16 Lakhs/year",
      food: "₹28,000/month",
      accommodation: "₹55,000/month",
      students: "2500+",
    },

    {
      name: "University of Bedfordshire",
      image: ukImg,
      flag: ukFlag,
      worldRank: "1201",
      duration: "3 Years",
      fees: "₹14 Lakhs/year",
      food: "₹25,000/month",
      accommodation: "₹50,000/month",
      students: "1800+",
    },

    {
      name: "Anglia Ruskin University",
      image: ukImg,
      flag: ukFlag,
      worldRank: "501",
      duration: "3 Years",
      fees: "₹15 Lakhs/year",
      food: "₹26,000/month",
      accommodation: "₹52,000/month",
      students: "2200+",
    },

    {
      name: "Birkbeck University of London",
      image: ukImg,
      flag: ukFlag,
      worldRank: "408",
      duration: "3 Years",
      fees: "₹17 Lakhs/year",
      food: "₹30,000/month",
      accommodation: "₹60,000/month",
      students: "2400+",
    },

    {
      name: "University of Bristol",
      image: ukImg,
      flag: ukFlag,
      worldRank: "55",
      duration: "3 Years",
      fees: "₹22 Lakhs/year",
      food: "₹32,000/month",
      accommodation: "₹68,000/month",
      students: "3500+",
    },

    {
      name: "Birmingham City University",
      image: ukImg,
      flag: ukFlag,
      worldRank: "1001",
      duration: "3 Years",
      fees: "₹15 Lakhs/year",
      food: "₹25,000/month",
      accommodation: "₹48,000/month",
      students: "2100+",
    },

    {
      name: "University of Buckingham",
      image: ukImg,
      flag: ukFlag,
      worldRank: "1300",
      duration: "3 Years",
      fees: "₹18 Lakhs/year",
      food: "₹27,000/month",
      accommodation: "₹54,000/month",
      students: "1700+",
    },

    {
      name: "University of Bolton",
      image: ukImg,
      flag: ukFlag,
      worldRank: "1500",
      duration: "3 Years",
      fees: "₹13 Lakhs/year",
      food: "₹24,000/month",
      accommodation: "₹45,000/month",
      students: "1600+",
    },

    {
      name: "University of Derby",
      image: ukImg,
      flag: ukFlag,
      worldRank: "1001",
      duration: "3 Years",
      fees: "₹14 Lakhs/year",
      food: "₹24,000/month",
      accommodation: "₹46,000/month",
      students: "1800+",
    },

    {
      name: "University of East London",
      image: ukImg,
      flag: ukFlag,
      worldRank: "901",
      duration: "3 Years",
      fees: "₹15 Lakhs/year",
      food: "₹29,000/month",
      accommodation: "₹58,000/month",
      students: "2300+",
    },

    {
      name: "University of West London",
      image: ukImg,
      flag: ukFlag,
      worldRank: "1001",
      duration: "3 Years",
      fees: "₹14.5 Lakhs/year",
      food: "₹27,000/month",
      accommodation: "₹52,000/month",
      students: "2000+",
    },
  ],
},

 {
  id: "canada",
  name: "Canada",
  image: canadaImg,
  flag: canadaFlag,
  universities: 30,
  students: "4200+",
  tuition: "$12000 / year",
  courses: ["MBA", "IT", "Nursing"],

  universityList: [
    {
      name: "Okanagan College",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "2850",
      duration: "2 Years",
      fees: "₹11 Lakhs/year",
      food: "₹26,000/month",
      accommodation: "₹48,000/month",
      students: "1800+",
    },

    {
      name: "College of the Rockies",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "3200",
      duration: "2 Years",
      fees: "₹10 Lakhs/year",
      food: "₹24,000/month",
      accommodation: "₹45,000/month",
      students: "1500+",
    },

    {
      name: "University of British Columbia",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "34",
      duration: "4 Years",
      fees: "₹24 Lakhs/year",
      food: "₹35,000/month",
      accommodation: "₹75,000/month",
      students: "5000+",
    },

    {
      name: "Cape Breton University",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "2500",
      duration: "2 Years",
      fees: "₹12 Lakhs/year",
      food: "₹25,000/month",
      accommodation: "₹50,000/month",
      students: "2200+",
    },

    {
      name: "Sheridan College",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "2100",
      duration: "2 Years",
      fees: "₹13 Lakhs/year",
      food: "₹28,000/month",
      accommodation: "₹55,000/month",
      students: "2600+",
    },

    {
      name: "Capilano University",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "2900",
      duration: "2 Years",
      fees: "₹12 Lakhs/year",
      food: "₹27,000/month",
      accommodation: "₹52,000/month",
      students: "2000+",
    },

    {
      name: "Northern Lights College",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "3600",
      duration: "2 Years",
      fees: "₹9 Lakhs/year",
      food: "₹22,000/month",
      accommodation: "₹42,000/month",
      students: "1400+",
    },

    {
      name: "Northern Community College",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "3900",
      duration: "2 Years",
      fees: "₹8.5 Lakhs/year",
      food: "₹21,000/month",
      accommodation: "₹40,000/month",
      students: "1300+",
    },

    {
      name: "Yukon College",
      image: canadaImg,
      flag: canadaFlag,
      worldRank: "4100",
      duration: "2 Years",
      fees: "₹8 Lakhs/year",
      food: "₹20,000/month",
      accommodation: "₹38,000/month",
      students: "1200+",
    },
  ],
},

  {
  id: "germany",
  name: "Germany",
  image: germanyImg,
  flag: germanyFlag,
  universities: 28,
  students: "3100+",
  tuition: "$2000 / year",
  courses: ["Engineering", "MBA", "AI"],

  universityList: [
    {
      name: "Heidelberg University",
      image: germanyImg,
      flag: germanyFlag,
      worldRank: "87",
      duration: "4 Years",
      fees: "₹3 Lakhs/year",
      food: "₹24,000/month",
      accommodation: "₹42,000/month",
      students: "3200+",
    },

    {
      name: "University of Munich",
      image: germanyImg,
      flag: germanyFlag,
      worldRank: "59",
      duration: "4 Years",
      fees: "₹2.8 Lakhs/year",
      food: "₹26,000/month",
      accommodation: "₹45,000/month",
      students: "3500+",
    },

    {
      name: "Technical University of Munich",
      image: germanyImg,
      flag: germanyFlag,
      worldRank: "37",
      duration: "4 Years",
      fees: "₹3.5 Lakhs/year",
      food: "₹27,000/month",
      accommodation: "₹48,000/month",
      students: "4000+",
    },

    {
      name: "University of Hamburg",
      image: germanyImg,
      flag: germanyFlag,
      worldRank: "191",
      duration: "3 Years",
      fees: "₹2.5 Lakhs/year",
      food: "₹23,000/month",
      accommodation: "₹40,000/month",
      students: "2800+",
    },

    {
      name: "University of Bonn",
      image: germanyImg,
      flag: germanyFlag,
      worldRank: "239",
      duration: "3 Years",
      fees: "₹2.7 Lakhs/year",
      food: "₹22,000/month",
      accommodation: "₹39,000/month",
      students: "2600+",
    },
  ],
},
  {
  id: "ireland",
  name: "Ireland",
  image: irelandImg,
  flag: irelandFlag,
  universities: 10,
  students: "800+",
  tuition: "$9000 / year",
  courses: ["IT", "Business", "Data Science"],

  universityList: [
    {
      name: "Dublin City University",
      image: irelandImg,
      flag: irelandFlag,
      worldRank: "421",
      duration: "3 Years",
      fees: "₹11 Lakhs/year",
      food: "₹24,000/month",
      accommodation: "₹45,000/month",
      students: "1800+",
    },

    {
      name: "Trinity College Dublin",
      image: irelandImg,
      flag: irelandFlag,
      worldRank: "81",
      duration: "4 Years",
      fees: "₹18 Lakhs/year",
      food: "₹30,000/month",
      accommodation: "₹65,000/month",
      students: "3500+",
    },

    {
      name: "University College Cork",
      image: irelandImg,
      flag: irelandFlag,
      worldRank: "273",
      duration: "3 Years",
      fees: "₹13 Lakhs/year",
      food: "₹25,000/month",
      accommodation: "₹48,000/month",
      students: "2200+",
    },

    {
      name: "University College Dublin",
      image: irelandImg,
      flag: irelandFlag,
      worldRank: "171",
      duration: "4 Years",
      fees: "₹15 Lakhs/year",
      food: "₹28,000/month",
      accommodation: "₹58,000/month",
      students: "3000+",
    },
  ],
},

  {
  id: "china",
  name: "China",
  image: chinaImg,
  flag: chinaFlag,
  universities: 32,
  students: "2800+",
  tuition: "$3500 / year",
  courses: ["MBBS", "Engineering", "AI"],

  universityList: [
    {
      name: "Ningbo University",
      image: chinaImg,
      flag: chinaFlag,
      worldRank: "701",
      duration: "5 Years",
      fees: "₹3.8 Lakhs/year",
      food: "₹11,000/month",
      accommodation: "₹16,000/month",
      students: "1800+",
    },

    {
      name: "China Medical University",
      image: chinaImg,
      flag: chinaFlag,
      worldRank: "524",
      duration: "6 Years",
      fees: "₹4.2 Lakhs/year",
      food: "₹12,000/month",
      accommodation: "₹18,000/month",
      students: "2200+",
    },

    {
      name: "Wuhan University",
      image: chinaImg,
      flag: chinaFlag,
      worldRank: "194",
      duration: "5 Years",
      fees: "₹5 Lakhs/year",
      food: "₹13,000/month",
      accommodation: "₹20,000/month",
      students: "3500+",
    },

    {
      name: "Jiangsu University",
      image: chinaImg,
      flag: chinaFlag,
      worldRank: "651",
      duration: "5 Years",
      fees: "₹3.5 Lakhs/year",
      food: "₹10,500/month",
      accommodation: "₹15,000/month",
      students: "1700+",
    },

    {
      name: "China Three Gorges University",
      image: chinaImg,
      flag: chinaFlag,
      worldRank: "1190",
      duration: "5 Years",
      fees: "₹3.2 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹14,000/month",
      students: "1500+",
    },

    {
      name: "Dalian Medical University",
      image: chinaImg,
      flag: chinaFlag,
      worldRank: "980",
      duration: "6 Years",
      fees: "₹4 Lakhs/year",
      food: "₹11,500/month",
      accommodation: "₹17,000/month",
      students: "2000+",
    },

    {
      name: "Southeast University",
      image: chinaImg,
      flag: chinaFlag,
      worldRank: "428",
      duration: "5 Years",
      fees: "₹4.8 Lakhs/year",
      food: "₹12,500/month",
      accommodation: "₹19,000/month",
      students: "2800+",
    },
  ],
},

  {
  id: "poland",
  name: "Poland",
  image: polandImg,
  flag: polandFlag,
  universities: 15,
  students: "1200+",
  tuition: "$4500 / year",
  courses: ["Medicine", "Business", "IT"],

  universityList: [
    {
      name: "Medical University of Warsaw",
      image: polandImg,
      flag: polandFlag,
      worldRank: "845",
      duration: "6 Years",
      fees: "₹6 Lakhs/year",
      food: "₹14,000/month",
      accommodation: "₹22,000/month",
      students: "1800+",
    },

    {
      name: "University of Rzeszow",
      image: polandImg,
      flag: polandFlag,
      worldRank: "1201",
      duration: "5 Years",
      fees: "₹5 Lakhs/year",
      food: "₹12,000/month",
      accommodation: "₹20,000/month",
      students: "1200+",
    },

    {
      name: "Medical University of Bialystok",
      image: polandImg,
      flag: polandFlag,
      worldRank: "1105",
      duration: "6 Years",
      fees: "₹5.8 Lakhs/year",
      food: "₹13,000/month",
      accommodation: "₹21,000/month",
      students: "1400+",
    },

    {
      name: "Medical University of Gdańsk",
      image: polandImg,
      flag: polandFlag,
      worldRank: "980",
      duration: "6 Years",
      fees: "₹6.2 Lakhs/year",
      food: "₹14,500/month",
      accommodation: "₹23,000/month",
      students: "1700+",
    },

    {
      name: "Nicolaus Copernicus University",
      image: polandImg,
      flag: polandFlag,
      worldRank: "901",
      duration: "5 Years",
      fees: "₹5.5 Lakhs/year",
      food: "₹13,500/month",
      accommodation: "₹22,000/month",
      students: "1600+",
    },
  ],
},

  {
  id: "kyrgyzstan",
  name: "Kyrgyzstan",
  image: kyrgyzstanImg,
  flag: kyrgyzstanFlag,
  universities: 11,
  students: "1700+",
  tuition: "$2800 / year",
  courses: ["MBBS", "Dentistry"],

  universityList: [
    {
      name: "International School of Medicine",
      image: kyrgyzstanImg,
      flag: kyrgyzstanFlag,
      worldRank: "6350",
      duration: "6 Years",
      fees: "₹3 Lakhs/year",
      food: "₹8,500/month",
      accommodation: "₹10,000/month",
      students: "1400+",
    },

    {
      name: "Kyrgyz State Medical Academy",
      image: kyrgyzstanImg,
      flag: kyrgyzstanFlag,
      worldRank: "4890",
      duration: "6 Years",
      fees: "₹3.2 Lakhs/year",
      food: "₹9,000/month",
      accommodation: "₹11,000/month",
      students: "1600+",
    },
  ],
},

  /* REMAINING COUNTRIES
     Add universityList later when you send data */

  {
  id: "bangladesh",
  name: "Bangladesh",
  image: bangladeshImg,
  flag: bangladeshFlag,
  universities: 12,
  students: "850+",
  tuition: "$4000 / year",
  courses: ["MBBS", "Nursing"],

  universityList: [
    {
      name: "Bangladesh University of Professionals",
      image: bangladeshImg,
      flag: bangladeshFlag,
      worldRank: "2850",
      duration: "5 Years",
      fees: "₹4.5 Lakhs/year",
      food: "₹9,000/month",
      accommodation: "₹12,000/month",
      students: "1500+",
    },

    {
      name: "Gono Bishwabidyalay",
      image: bangladeshImg,
      flag: bangladeshFlag,
      worldRank: "4900",
      duration: "5 Years",
      fees: "₹4 Lakhs/year",
      food: "₹8,500/month",
      accommodation: "₹11,000/month",
      students: "1100+",
    },

    {
      name: "University of Dhaka",
      image: bangladeshImg,
      flag: bangladeshFlag,
      worldRank: "554",
      duration: "5 Years",
      fees: "₹5 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹14,000/month",
      students: "3000+",
    },

    {
      name: "Southern Medical College & Hospital (SMCH)",
      image: bangladeshImg,
      flag: bangladeshFlag,
      worldRank: "6100",
      duration: "5 Years",
      fees: "₹4.2 Lakhs/year",
      food: "₹8,000/month",
      accommodation: "₹10,500/month",
      students: "900+",
    },

    {
      name: "Khwaja Yunus Ali Medical College",
      image: bangladeshImg,
      flag: bangladeshFlag,
      worldRank: "5750",
      duration: "5 Years",
      fees: "₹4.3 Lakhs/year",
      food: "₹8,500/month",
      accommodation: "₹11,500/month",
      students: "950+",
    },
  ],
},

  {
  id: "belarus",
  name: "Belarus",
  image: belarusImg,
  flag: belarusFlag,
  universities: 13,
  students: "1000+",
  tuition: "$3500 / year",
  courses: ["MBBS", "Engineering"],

  universityList: [
    {
      name: "Vitebsk State Medical University",
      image: belarusImg,
      flag: belarusFlag,
      worldRank: "4650",
      duration: "6 Years",
      fees: "₹3.8 Lakhs/year",
      food: "₹9,000/month",
      accommodation: "₹12,000/month",
      students: "1400+",
    },

    {
      name: "Gomel State Medical University",
      image: belarusImg,
      flag: belarusFlag,
      worldRank: "5200",
      duration: "6 Years",
      fees: "₹3.5 Lakhs/year",
      food: "₹8,500/month",
      accommodation: "₹11,000/month",
      students: "1200+",
    },

    {
      name: "Belarusian State Medical University",
      image: belarusImg,
      flag: belarusFlag,
      worldRank: "3100",
      duration: "6 Years",
      fees: "₹4 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹14,000/month",
      students: "2000+",
    },

    {
      name: "Grodno State Medical University",
      image: belarusImg,
      flag: belarusFlag,
      worldRank: "4980",
      duration: "6 Years",
      fees: "₹3.6 Lakhs/year",
      food: "₹8,500/month",
      accommodation: "₹11,500/month",
      students: "1300+",
    },
  ],
},

  {
  id: "nepal",
  name: "Nepal",
  image: nepalImg,
  flag: nepalFlag,
  universities: 9,
  students: "650+",
  tuition: "$5000 / year",
  courses: ["MBBS", "Pharmacy"],

  universityList: [
    {
      name: "Manipal College Of Medical Sciences",
      image: nepalImg,
      flag: nepalFlag,
      worldRank: "3890",
      duration: "5.5 Years",
      fees: "₹6 Lakhs/year",
      food: "₹11,000/month",
      accommodation: "₹15,000/month",
      students: "1200+",
    },

    {
      name: "Nobel Medical College",
      image: nepalImg,
      flag: nepalFlag,
      worldRank: "5200",
      duration: "5.5 Years",
      fees: "₹5.5 Lakhs/year",
      food: "₹10,000/month",
      accommodation: "₹14,000/month",
      students: "950+",
    },

    {
      name: "Biratnagar Medical College",
      image: nepalImg,
      flag: nepalFlag,
      worldRank: "6100",
      duration: "5.5 Years",
      fees: "₹5.2 Lakhs/year",
      food: "₹9,500/month",
      accommodation: "₹13,000/month",
      students: "850+",
    },

    {
      name: "Chitwan Medical College",
      image: nepalImg,
      flag: nepalFlag,
      worldRank: "5450",
      duration: "5.5 Years",
      fees: "₹5.8 Lakhs/year",
      food: "₹10,500/month",
      accommodation: "₹14,500/month",
      students: "1000+",
    },
  ],
},
  {
  id: "bulgaria",
  name: "Bulgaria",
  image: bulgariaImg,
  flag: bulgariaFlag,
  universities: 10,
  students: "750+",
  tuition: "$6000 / year",
  courses: ["Medicine", "Dentistry"],

  universityList: [
    {
      name: "Agricultural University, Plovdiv",
      worldRank: "6201",
      duration: "5 Years",
      fees: "$5,800 / year",
      food: "$170 / month",
      accommodation: "$260 / month",
      students: "900+",
    },

    {
      name: "American University in Bulgaria",
      worldRank: "1800",
      duration: "4 Years",
      fees: "$8,500 / year",
      food: "$220 / month",
      accommodation: "$340 / month",
      students: "1500+",
    },

    {
      name: "Bulgarian Virtual University",
      worldRank: "6900",
      duration: "4 Years",
      fees: "$4,500 / year",
      food: "$150 / month",
      accommodation: "$230 / month",
      students: "700+",
    },

    {
      name: "Academy of the Ministry of Interior",
      worldRank: "5400",
      duration: "4 Years",
      fees: "$5,000 / year",
      food: "$160 / month",
      accommodation: "$250 / month",
      students: "800+",
    },

    {
      name: "D. A. Tsenov Academy of Economics",
      worldRank: "4100",
      duration: "4 Years",
      fees: "$5,600 / year",
      food: "$180 / month",
      accommodation: "$270 / month",
      students: "2000+",
    },
  ],
},

 {
  id: "philippines",
  name: "Philippines",
  image: philippinesImg,
  flag: philippinesFlag,
  universities: 20,
  students: "2200+",
  tuition: "$4200 / year",
  courses: ["MBBS", "Nursing"],

  universityList: [
    {
      name: "Our Lady of Fatima University",
      worldRank: "4200",
      duration: "5.5 Years",
      fees: "$4,200 / year",
      food: "$160 / month",
      accommodation: "$240 / month",
      students: "9000+",
    },

    {
      name: "Davao Medical School Foundation Inc",
      worldRank: "5100",
      duration: "5.5 Years",
      fees: "$3,800 / year",
      food: "$150 / month",
      accommodation: "$220 / month",
      students: "3500+",
    },

    {
      name: "AMEC Bicol Christian College of Medicine",
      worldRank: "6400",
      duration: "5.5 Years",
      fees: "$3,500 / year",
      food: "$140 / month",
      accommodation: "$210 / month",
      students: "2500+",
    },

    {
      name: "AMA School of Medicine",
      worldRank: "5900",
      duration: "5.5 Years",
      fees: "$4,000 / year",
      food: "$155 / month",
      accommodation: "$230 / month",
      students: "3000+",
    },
  ],
},
  {
  id: "azerbaijan",
  name: "Azerbaijan",
  image: azerbaijanImg,
  flag: azerbaijanFlag,
  universities: 7,
  students: "500+",
  tuition: "$3200 / year",
  courses: ["Medicine", "Engineering"],

  universityList: [
    {
      name: "Azerbaijan Medical University",
      worldRank: "3900",
      duration: "6 Years",
      fees: "$3,200 / year",
      food: "$170 / month",
      accommodation: "$260 / month",
      students: "8000+",
    },
  ],
},

  {
  id: "malaysia",
  name: "Malaysia",
  image: malaysiaImg,
  flag: malaysiaFlag,
  universities: 18,
  students: "1600+",
  tuition: "$5000 / year",
  courses: ["MBA", "IT", "Medicine"],

  universityList: [
    {
      name: "MSU Management & Science University",
      worldRank: "3200",
      duration: "5 Years",
      fees: "$5,200 / year",
      food: "$190 / month",
      accommodation: "$320 / month",
      students: "18000+",
    },

    {
      name: "Quest International University",
      worldRank: "4700",
      duration: "5 Years",
      fees: "$4,800 / year",
      food: "$170 / month",
      accommodation: "$290 / month",
      students: "6000+",
    },

    {
      name: "SEGi University & Colleges",
      worldRank: "3500",
      duration: "5 Years",
      fees: "$5,500 / year",
      food: "$200 / month",
      accommodation: "$340 / month",
      students: "16000+",
    },

    {
      name: "MAHSA University",
      worldRank: "4100",
      duration: "5 Years",
      fees: "$5,000 / year",
      food: "$180 / month",
      accommodation: "$300 / month",
      students: "12000+",
    },

    {
      name: "Newcastle University",
      worldRank: "110",
      duration: "5 Years",
      fees: "$9,500 / year",
      food: "$240 / month",
      accommodation: "$420 / month",
      students: "28000+",
    },

    {
      name: "Medicine",
      worldRank: "—",
      duration: "5 Years",
      fees: "$5,000 / year",
      food: "$180 / month",
      accommodation: "$300 / month",
      students: "—",
    },
  ],
},

  {
  id: "france",
  name: "France",
  image: franceImg,
  flag: franceFlag,
  universities: 24,
  students: "2100+",
  tuition: "$7000 / year",
  courses: ["Fashion", "Business", "Engineering"],

  universityList: [
    {
      name: "Skema Business School",
      worldRank: "420",
      duration: "4 Years",
      fees: "$9,000 / year",
      food: "$280 / month",
      accommodation: "$520 / month",
      students: "10000+",
    },

    {
      name: "ISTEC-School of Management and Marketing",
      worldRank: "3100",
      duration: "4 Years",
      fees: "$7,500 / year",
      food: "$260 / month",
      accommodation: "$500 / month",
      students: "2500+",
    },

    {
      name: "Aura International School of Management",
      worldRank: "4800",
      duration: "4 Years",
      fees: "$6,800 / year",
      food: "$240 / month",
      accommodation: "$470 / month",
      students: "1800+",
    },

    {
      name: "Berlin School of Business and Innovation FR",
      worldRank: "2900",
      duration: "4 Years",
      fees: "$8,200 / year",
      food: "$270 / month",
      accommodation: "$510 / month",
      students: "7000+",
    },

    {
      name: "Eslsca Business School Paris- School De Commerce",
      worldRank: "2200",
      duration: "4 Years",
      fees: "$8,500 / year",
      food: "$290 / month",
      accommodation: "$540 / month",
      students: "3500+",
    },

    {
      name: "ECE Paris",
      worldRank: "1700",
      duration: "5 Years",
      fees: "$9,200 / year",
      food: "$300 / month",
      accommodation: "$560 / month",
      students: "3200+",
    },

    {
      name: "Emlyon Business School",
      worldRank: "180",
      duration: "4 Years",
      fees: "$12,000 / year",
      food: "$320 / month",
      accommodation: "$600 / month",
      students: "9000+",
    },

    {
      name: "EDHEC Business School",
      worldRank: "210",
      duration: "4 Years",
      fees: "$11,500 / year",
      food: "$310 / month",
      accommodation: "$590 / month",
      students: "8500+",
    },
  ],
},

  {
    id: "sweden",
    name: "Sweden",
    image: swedenImg,
    flag: swedenFlag,
    universities: 12,
    students: "900+",
    tuition: "$8500 / year",
    courses: ["AI", "Engineering", "Design"],

    universityList: [],
  },

  {
  id: "armenia",
  name: "Armenia",
  image: armeniaImg,
  flag: armeniaFlag,
  universities: 8,
  students: "600+",
  tuition: "$3000 / year",
  courses: ["MBBS", "Business"],

  universityList: [
    {
      name: "Karolinska Institute",
      worldRank: "55",
      duration: "6 Years",
      fees: "$9,500 / year",
      food: "$280 / month",
      accommodation: "$520 / month",
      students: "7000+",
    },

    {
      name: "Lund Institute",
      worldRank: "95",
      duration: "5 Years",
      fees: "$8,800 / year",
      food: "$260 / month",
      accommodation: "$500 / month",
      students: "12000+",
    },

    {
      name: "University of Gothenburg",
      worldRank: "185",
      duration: "5 Years",
      fees: "$8,200 / year",
      food: "$250 / month",
      accommodation: "$480 / month",
      students: "18000+",
    },
  ],
},
 {
  id: "finland",
  name: "Finland",
  image: finlandImg,
  flag: finlandFlag,
  universities: 11,
  students: "700+",
  tuition: "$8000 / year",
  courses: ["IT", "Engineering", "Data Science"],

  universityList: [
    {
      name: "University of Helsinki",
      worldRank: "115",
      duration: "4 Years",
      fees: "$8,500 / year",
      food: "$300 / month",
      accommodation: "$560 / month",
      students: "31000+",
    },

    {
      name: "University of Eastern Finland",
      worldRank: "520",
      duration: "4 Years",
      fees: "$7,800 / year",
      food: "$260 / month",
      accommodation: "$500 / month",
      students: "15000+",
    },

    {
      name: "Tampere University",
      worldRank: "430",
      duration: "4 Years",
      fees: "$8,200 / year",
      food: "$270 / month",
      accommodation: "$520 / month",
      students: "20000+",
    },
  ],
},
  {
  id: "romania",
  name: "Romania",
  image: romaniaImg,
  flag: romaniaFlag,
  universities: 14,
  students: "1000+",
  tuition: "$5500 / year",
  courses: ["Medicine", "Dentistry"],

  universityList: [
    {
      name: "GRIGORE T POPA University of Medicine and Pharmacy",
      worldRank: "1400",
      duration: "6 Years",
      fees: "$5,800 / year",
      food: "$190 / month",
      accommodation: "$300 / month",
      students: "11000+",
    },

    {
      name: "Carol Davila University",
      worldRank: "1250",
      duration: "6 Years",
      fees: "$6,200 / year",
      food: "$210 / month",
      accommodation: "$320 / month",
      students: "13000+",
    },

    {
      name: "Bucharest",
      worldRank: "—",
      duration: "5 Years",
      fees: "$5,000 / year",
      food: "$180 / month",
      accommodation: "$290 / month",
      students: "—",
    },

    {
      name: "University of Oradea",
      worldRank: "2400",
      duration: "6 Years",
      fees: "$5,400 / year",
      food: "$185 / month",
      accommodation: "$280 / month",
      students: "15000+",
    },
  ],
},
  {
  id: "malta",
  name: "Malta",
  image: maltaImg,
  flag: maltaFlag,
  universities: 5,
  students: "300+",
  tuition: "$6500 / year",
  courses: ["Business", "Hospitality"],

  universityList: [
    {
      name: "University of Malta",
      worldRank: "850",
      duration: "4 Years",
      fees: "$6,500 / year",
      food: "$260 / month",
      accommodation: "$480 / month",
      students: "11500+",
    },

    {
      name: "American University of Malta",
      worldRank: "3200",
      duration: "4 Years",
      fees: "$7,200 / year",
      food: "$270 / month",
      accommodation: "$500 / month",
      students: "1200+",
    },

    {
      name: "London School of Commerce",
      worldRank: "2900",
      duration: "3 Years",
      fees: "$6,000 / year",
      food: "$240 / month",
      accommodation: "$460 / month",
      students: "3500+",
    },

    {
      name: "St Martin's Institute of Higher Education",
      worldRank: "4100",
      duration: "3 Years",
      fees: "$5,800 / year",
      food: "$230 / month",
      accommodation: "$430 / month",
      students: "900+",
    },

    {
      name: "Malta College of Arts, Science and Technology",
      worldRank: "2600",
      duration: "4 Years",
      fees: "$5,500 / year",
      food: "$220 / month",
      accommodation: "$420 / month",
      students: "6000+",
    },
  ],
},

  {
  id: "latvia",
  name: "Latvia",
  image: latviaImg,
  flag: latviaFlag,
  universities: 7,
  students: "450+",
  tuition: "$5000 / year",
  courses: ["Medicine", "IT"],

  universityList: [
    {
      name: "University of Latvia",
      worldRank: "780",
      duration: "5 Years",
      fees: "$5,200 / year",
      food: "$210 / month",
      accommodation: "$340 / month",
      students: "15000+",
    },

    {
      name: "Turiba University",
      worldRank: "3500",
      duration: "4 Years",
      fees: "$4,800 / year",
      food: "$190 / month",
      accommodation: "$320 / month",
      students: "4000+",
    },

    {
      name: "University of Daugavpils",
      worldRank: "4200",
      duration: "4 Years",
      fees: "$4,500 / year",
      food: "$180 / month",
      accommodation: "$300 / month",
      students: "2500+",
    },

    {
      name: "Art Academy of Latvia",
      worldRank: "5100",
      duration: "4 Years",
      fees: "$5,000 / year",
      food: "$200 / month",
      accommodation: "$330 / month",
      students: "1200+",
    },
  ],
},

  {
  id: "lithuania",
  name: "Lithuania",
  image: lithuaniaImg,
  flag: lithuaniaFlag,
  universities: 9,
  students: "600+",
  tuition: "$4800 / year",
  courses: ["Engineering", "Medicine"],

  universityList: [
    {
      name: "Graiciunas School",
      worldRank: "5200",
      duration: "4 Years",
      fees: "$4,200 / year",
      food: "$180 / month",
      accommodation: "$290 / month",
      students: "1000+",
    },

    {
      name: "Siauliai University",
      worldRank: "3100",
      duration: "4 Years",
      fees: "$4,600 / year",
      food: "$190 / month",
      accommodation: "$300 / month",
      students: "3500+",
    },

    {
      name: "Vilnius University",
      worldRank: "450",
      duration: "5 Years",
      fees: "$5,500 / year",
      food: "$220 / month",
      accommodation: "$360 / month",
      students: "24000+",
    },

    {
      name: "Mykolas Romeris University",
      worldRank: "1800",
      duration: "4 Years",
      fees: "$4,800 / year",
      food: "$200 / month",
      accommodation: "$330 / month",
      students: "7000+",
    },
  ],
},


 {
  id: "russia",
  name: "Russia",
  image: russiaImg,
  flag: russiaFlag,
  universities: 35,
  students: "2500+",
  tuition: "$3500 / year",
  courses: ["MBBS", "Engineering", "Nursing"],

  universityList: [
    {
      name: "Alte University",
      worldRank: "4200",
      duration: "6 Years",
      fees: "$5,500 / year",
      food: "$190 / month",
      accommodation: "$320 / month",
      students: "2500+",
    },

    {
      name: "Georgian National University",
      worldRank: "3900",
      duration: "6 Years",
      fees: "$5,000 / year",
      food: "$180 / month",
      accommodation: "$300 / month",
      students: "4000+",
    },

    {
      name: "Seu University Of Georgia [Ug]",
      worldRank: "4500",
      duration: "6 Years",
      fees: "$4,800 / year",
      food: "$170 / month",
      accommodation: "$290 / month",
      students: "3500+",
    },

    {
      name: "Caucasus University [Cu]",
      worldRank: "3100",
      duration: "6 Years",
      fees: "$5,200 / year",
      food: "$185 / month",
      accommodation: "$310 / month",
      students: "5000+",
    },

    {
      name: "David Tvildiani Medical University [Dtmu]",
      worldRank: "3600",
      duration: "6 Years",
      fees: "$6,000 / year",
      food: "$200 / month",
      accommodation: "$340 / month",
      students: "2200+",
    },

    {
      name: "Tbilisi State Medical University [Tsmu]",
      worldRank: "2800",
      duration: "6 Years",
      fees: "$5,800 / year",
      food: "$190 / month",
      accommodation: "$320 / month",
      students: "7000+",
    },

    {
      name: "Batumi Shota Rustaveli State University",
      worldRank: "4100",
      duration: "6 Years",
      fees: "$4,600 / year",
      food: "$175 / month",
      accommodation: "$280 / month",
      students: "6000+",
    },

    {
      name: "Grigol Robakidze University",
      worldRank: "4700",
      duration: "6 Years",
      fees: "$4,500 / year",
      food: "$170 / month",
      accommodation: "$270 / month",
      students: "3000+",
    },

    {
      name: "Bau International Medical University",
      worldRank: "3300",
      duration: "6 Years",
      fees: "$6,200 / year",
      food: "$210 / month",
      accommodation: "$350 / month",
      students: "1800+",
    },
  ],
},
  {
  id: "moldova",
  name: "Moldova",
  image: moldovaImg,
  flag: moldovaFlag,
  universities: 6,
  students: "350+",
  tuition: "$3000 / year",
  courses: ["MBBS", "Dentistry"],

  universityList: [
    {
      name: "Nicolae Testemitanu State University",
      worldRank: "3700",
      duration: "6 Years",
      fees: "$3,200 / year",
      food: "$160 / month",
      accommodation: "$250 / month",
      students: "6500+",
    },
  ],
},
];