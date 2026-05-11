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
  },

  {
    id: "bangladesh",
    name: "Bangladesh",
    image: bangladeshImg,
    flag: bangladeshFlag,
    universities: 12,
    students: "850+",
    tuition: "$4000 / year",
    courses: ["MBBS", "Nursing"],
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
  },
];