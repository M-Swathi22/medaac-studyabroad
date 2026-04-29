import {
  Stethoscope, Smile, Leaf, HeartPulse, Brain,
  FlaskConical, Dna, PawPrint, GraduationCap, Microscope,
  HeartHandshake, Syringe, Activity, Hospital,
  Dumbbell, Ear, Pill,
  Cpu, Settings, Wrench, Factory, CircuitBoard, Car, Ship, Atom
} from "lucide-react";

/* ================= MEDICAL ================= */
const medical = [
  { id: "mbbs", title: "MBBS", duration: "5.5 Years", desc: "Bachelor of Medicine & Surgery", icon: Stethoscope },
  { id: "bds", title: "BDS", duration: "5 Years", desc: "Dental Surgery", icon: Smile },
  { id: "bams", title: "BAMS", duration: "5.5 Years", desc: "Ayurvedic Medicine", icon: Leaf },
  { id: "bhms", title: "BHMS", duration: "5.5 Years", desc: "Homeopathy Medicine", icon: HeartPulse },
  { id: "bnys", title: "BNYS", duration: "5.5 Years", desc: "Naturopathy & Yogic Science", icon: Brain },
  { id: "bums", title: "BUMS", duration: "5.5 Years", desc: "Unani Medicine", icon: FlaskConical },
  { id: "bsms", title: "BSMS", duration: "5.5 Years", desc: "Siddha Medicine", icon: Dna },
  { id: "veterinary", title: "Veterinary", duration: "5 Years", desc: "Animal Healthcare", icon: PawPrint },
  { id: "md", title: "MD", duration: "3 Years", desc: "Doctor of Medicine", icon: GraduationCap },
  { id: "ms", title: "MS", duration: "3 Years", desc: "Master of Surgery", icon: Microscope },
];

/* ================= NURSING ================= */
const nursing = [
  { id: "bsc-nursing", title: "B.Sc Nursing", duration: "4 Years", desc: "Professional nursing program", icon: HeartHandshake },
  { id: "gnm", title: "GNM", duration: "3 Years", desc: "General Nursing & Midwifery", icon: Syringe },
  { id: "anm", title: "ANM", duration: "2 Years", desc: "Auxiliary Nursing Midwifery", icon: Activity },
  { id: "post-basic", title: "Post Basic Nursing", duration: "2 Years", desc: "Advanced nursing education", icon: Hospital },
];

/* ================= PARAMEDICAL ================= */
const paramedical = [
  { id: "bpt", title: "BPT", duration: "4.5 Years", desc: "Physiotherapy & Rehabilitation", icon: Dumbbell },
  { id: "baslp", title: "BASLP", duration: "4 Years", desc: "Speech & Hearing Sciences", icon: Ear },
  { id: "bpharm", title: "B.Pharm", duration: "4 Years", desc: "Pharmaceutical Sciences", icon: Pill },
  { id: "dpharm", title: "D.Pharm", duration: "2 Years", desc: "Diploma in Pharmacy", icon: Pill },
];

/* ================= ENGINEERING (ALL COURSES) ================= */
const engineering = [
  { id: "aeronautical", title: "Aeronautical Engineering", duration: "4 Years", desc: "Aircraft design & aviation systems", icon: Cpu },
  { id: "applied-electronics", title: "Applied Electronics", duration: "4 Years", desc: "Electronics applications", icon: CircuitBoard },
  { id: "civil", title: "Civil Engineering", duration: "4 Years", desc: "Infrastructure & construction", icon: Factory },
  { id: "petroleum", title: "Petroleum Engineering", duration: "4 Years", desc: "Oil & gas extraction", icon: Atom },
  { id: "petrochemical", title: "Petrochemical Engineering", duration: "4 Years", desc: "Chemical fuel processing", icon: FlaskConical },
  { id: "chemical", title: "Chemical Engineering", duration: "4 Years", desc: "Industrial chemical processes", icon: FlaskConical },
  { id: "biomedical", title: "Biomedical Engineering", duration: "4 Years", desc: "Medical technology systems", icon: HeartPulse },
  { id: "food-tech", title: "Food Technology Engineering", duration: "4 Years", desc: "Food processing & safety", icon: Activity },
  { id: "nano", title: "Nano Technology Engineering", duration: "4 Years", desc: "Nanotechnology systems", icon: Atom },
  { id: "marine", title: "Marine Engineering", duration: "4 Years", desc: "Ship & ocean engineering", icon: Ship },
  { id: "agriculture", title: "Agriculture Engineering", duration: "4 Years", desc: "Agricultural systems & machinery", icon: Leaf },
  { id: "mechatronics", title: "Mechatronics Engineering", duration: "4 Years", desc: "Automation & robotics", icon: Wrench },
  { id: "automobile", title: "Automobile Engineering", duration: "4 Years", desc: "Vehicle design & manufacturing", icon: Car },
  { id: "mechanical", title: "Mechanical Engineering", duration: "4 Years", desc: "Machines & thermal systems", icon: Settings },
  { id: "ece", title: "Electronics & Communication Engineering", duration: "4 Years", desc: "Communication systems", icon: CircuitBoard },
  { id: "eee", title: "Electrical & Electronics Engineering", duration: "4 Years", desc: "Power systems", icon: Activity },
  { id: "cse", title: "Computer Science Engineering", duration: "4 Years", desc: "Software & computing", icon: Cpu },
  { id: "genetic", title: "Genetic Engineering", duration: "4 Years", desc: "Genetic modification & research", icon: Dna },
  { id: "bioinformatics", title: "Bio-Informatics Engineering", duration: "4 Years", desc: "Biological data analysis", icon: Dna },
  { id: "biotech", title: "Bio-Technology Engineering", duration: "4 Years", desc: "Biological innovations", icon: Dna },
  { id: "textile", title: "Textile Engineering", duration: "4 Years", desc: "Fabric & textile production", icon: Activity },
  { id: "vlsi", title: "VLSI Design", duration: "4 Years", desc: "Chip design & microelectronics", icon: CircuitBoard },
  { id: "communication-system", title: "Communication System", duration: "4 Years", desc: "Signal transmission systems", icon: CircuitBoard },
  { id: "embedded", title: "Embedded System", duration: "4 Years", desc: "Embedded hardware & software", icon: Cpu },
  { id: "structural", title: "Structural Engineering", duration: "4 Years", desc: "Building structures", icon: Factory },
  { id: "construction", title: "Construction Engineering", duration: "4 Years", desc: "Construction management", icon: Factory },
  { id: "thermal", title: "Thermal Engineering", duration: "4 Years", desc: "Heat & energy systems", icon: Settings },
  { id: "hydraulic", title: "Hydraulic Engineering", duration: "4 Years", desc: "Water resource engineering", icon: Activity },
  { id: "power-system", title: "Power System Engineering", duration: "4 Years", desc: "Electrical power systems", icon: Activity },
];

/* ================= ALLIED COURSES ================= */
const allied = [
  { id: "cardiac-care", title: "B.Sc Cardiac Care Technology", duration: "3-4 Years", desc: "Heart care & diagnostics", icon: HeartPulse },
  { id: "forensic", title: "B.Sc Forensic Science", duration: "3 Years", desc: "Crime investigation science", icon: Microscope },
  { id: "dialysis", title: "B.Sc Dialysis", duration: "3-4 Years", desc: "Dialysis treatment support", icon: Activity },
  { id: "dental-mechanism", title: "B.Sc Dental Mechanism", duration: "3 Years", desc: "Dental prosthetics", icon: Smile },
  { id: "radiology", title: "B.Sc Radiology", duration: "3-4 Years", desc: "Medical imaging technology", icon: Activity },
  { id: "physician-assistant", title: "B.Sc Physician Assistant", duration: "3-4 Years", desc: "Clinical support role", icon: Hospital },
  { id: "renal-dialysis", title: "B.Sc Renal Dialysis", duration: "3-4 Years", desc: "Kidney dialysis specialization", icon: Activity },
  { id: "anaesthesia", title: "B.Sc Anaesthesia Technology", duration: "3-4 Years", desc: "Anesthesia support systems", icon: Syringe },
  { id: "neuroscience", title: "B.Sc Neuroscience", duration: "3 Years", desc: "Brain & nervous system", icon: Brain },
  { id: "operation-theatre", title: "B.Sc Operation Theatre Technology", duration: "3-4 Years", desc: "Surgical room management", icon: Hospital },
  { id: "perfusion", title: "B.Sc Perfusion", duration: "3-4 Years", desc: "Heart-lung machine handling", icon: HeartPulse },
  { id: "respiratory", title: "B.Sc Respiratory Therapy", duration: "3-4 Years", desc: "Lung & breathing care", icon: Activity },
  { id: "emergency", title: "B.Sc Emergency Medicine", duration: "3-4 Years", desc: "Emergency healthcare", icon: Activity },
  { id: "imaging", title: "B.Sc Imaging Technology", duration: "3-4 Years", desc: "Advanced imaging systems", icon: Activity },
  { id: "mlt", title: "B.Sc Medical Lab Technology", duration: "3-4 Years", desc: "Laboratory diagnostics", icon: FlaskConical },
  { id: "nuclear", title: "B.Sc Nuclear Medicine Technology", duration: "3-4 Years", desc: "Nuclear imaging systems", icon: Atom },
  { id: "critical-care", title: "B.Sc Critical Care Technology", duration: "3-4 Years", desc: "ICU & critical care", icon: Activity },
  { id: "nutrition", title: "B.Sc Clinical Nutrition & Dietetics", duration: "3 Years", desc: "Diet & nutrition science", icon: Leaf },
  { id: "sports-med", title: "B.Sc Sports Medicine", duration: "3 Years", desc: "Sports injury & rehab", icon: Dumbbell },
  { id: "ophthalmology", title: "B.Sc Ophthalmology", duration: "3 Years", desc: "Eye care science", icon: Activity },
  { id: "optometry", title: "B.Sc Optometry", duration: "3 Years", desc: "Vision & eye testing", icon: Activity },
  { id: "medical-record", title: "B.Sc Medical Record Science", duration: "3 Years", desc: "Healthcare data management", icon: Activity },
];

/* ================= B.SC COURSES ================= */
const bsc = [
  { id: "bsc-agriculture", title: "B.Sc Agriculture", duration: "3 Years", desc: "Agricultural science & farming technology", icon: Leaf },
  { id: "bsc-horticulture", title: "B.Sc Horticulture", duration: "3 Years", desc: "Plant cultivation & gardening science", icon: Leaf },
  { id: "bsc-psychology", title: "B.Sc Psychology", duration: "3 Years", desc: "Human behavior & mental processes", icon: Brain },
  { id: "bsc-food-tech", title: "B.Sc Food Technology", duration: "3 Years", desc: "Food processing & safety", icon: Activity },
  { id: "bsc-biotech", title: "B.Sc Bio Technology", duration: "3 Years", desc: "Biological systems & innovations", icon: Dna },
  { id: "bsc-microbiology", title: "B.Sc Microbiology", duration: "3 Years", desc: "Microorganisms & lab research", icon: FlaskConical },
];

/* ================= MANAGEMENT COURSES ================= */
const management = [
  { id: "bca-digital-forensic", title: "BCA Digital Forensic", duration: "3 Years", desc: "Cyber crime investigation & digital evidence", icon: Cpu },
  { id: "bcom-dm-gd", title: "B.Com Computer Application + Digital Marketing & Graphic Design", duration: "3 Years", desc: "Commerce with marketing & design skills", icon: Activity },
  { id: "bcom-cma", title: "B.Com with CMA", duration: "3 Years", desc: "Certified Management Accountant integrated", icon: Activity },
  { id: "bcom-bfsi", title: "B.Com with Banking And Financial Services (BFSI)", duration: "3 Years", desc: "Banking & finance specialization", icon: Activity },
  { id: "bsc-cs-data", title: "B.Sc Computer Science + Data Science & Business Intelligence", duration: "3 Years", desc: "Data analytics & business intelligence", icon: Cpu },
  { id: "bca-ai-ml", title: "BCA Artificial Intelligence & Machine Learning", duration: "3 Years", desc: "AI & ML technologies", icon: Cpu },
  { id: "bca-sap", title: "BCA SAP", duration: "3 Years", desc: "Enterprise resource planning with SAP", icon: Settings },
  { id: "bcom-acca", title: "B.Com with ACCA", duration: "3 Years", desc: "International accounting qualification", icon: Activity },
  { id: "bba-aeronautical", title: "BBA Aeronautical", duration: "3 Years", desc: "Aviation business management", icon: Cpu },
  { id: "bba-cargo", title: "BBA Cargo Management", duration: "3 Years", desc: "Cargo & logistics operations", icon: Factory },
  { id: "bba-aviation", title: "BBA Aviation And Travel Tourism", duration: "3 Years", desc: "Airline & tourism management", icon: Activity },
  { id: "bba-logistics", title: "BBA Logistics", duration: "3 Years", desc: "Supply chain & logistics", icon: Factory },
  { id: "bcom-logistics", title: "B.Com Logistics & Supply Chain Management", duration: "3 Years", desc: "Commerce with logistics specialization", icon: Factory },
  { id: "bca-cloud", title: "BCA Cloud Computing", duration: "3 Years", desc: "Cloud infrastructure & services", icon: Cpu },
  { id: "bca-cyber", title: "BCA Cyber Security & Ethical Hacking", duration: "3 Years", desc: "Cyber security & ethical hacking", icon: Cpu },
];


/* ================= EXPORT ================= */
export const COURSE_DATA = {
  medical,
  nursing,
  paramedical,
  engineering,
  allied,
  bsc, 
  management, 
};