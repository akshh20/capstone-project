export const DOCTORS = [
  { id: 1, name: "Dr. Priya Sharma", spec: "Cardiologist", avatar: "PS", color: "#0F6E56", rating: 4.9, reviews: 312, fee: 800, avail: "today", exp: 12, featured: true, hospital: "Apollo Delhi", slots: ["09:00","09:30","10:00","11:30","14:00","15:30","16:00"], about: "Specialist in interventional cardiology with 12 years of experience treating complex cardiac conditions." },
  { id: 2, name: "Dr. Arjun Mehta", spec: "Neurologist", avatar: "AM", color: "#185FA5", rating: 4.7, reviews: 198, fee: 1000, avail: "today", exp: 9, featured: false, hospital: "Fortis Hospital", slots: ["09:00","11:00","12:00","14:30","16:30"], about: "Expert in treating migraines, epilepsy, and movement disorders." },
  { id: 3, name: "Dr. Sunita Rao", spec: "Dermatologist", avatar: "SR", color: "#D85A30", rating: 4.8, reviews: 441, fee: 600, avail: "tomorrow", exp: 15, featured: false, hospital: "Max Hospital", slots: ["10:00","10:30","11:00","13:00","15:00","15:30","17:00"], about: "Renowned dermatologist specializing in cosmetic procedures and skin disorders." },
  { id: 4, name: "Dr. Kabir Nair", spec: "Orthopedist", avatar: "KN", color: "#BA7517", rating: 4.6, reviews: 157, fee: 900, avail: "today", exp: 8, featured: false, hospital: "AIIMS Delhi", slots: ["09:30","10:00","12:30","14:00","16:00"], about: "Specializes in sports injuries, joint replacements, and spine surgeries." },
  { id: 5, name: "Dr. Meera Pillai", spec: "Pediatrician", avatar: "MP", color: "#993556", rating: 4.9, reviews: 523, fee: 700, avail: "today", exp: 11, featured: false, hospital: "Rainbow Children", slots: ["09:00","09:30","10:30","11:00","14:00","14:30","16:00"], about: "Dedicated to child healthcare from newborns to adolescents." },
  { id: 6, name: "Dr. Rajan Iyer", spec: "Psychiatrist", avatar: "RI", color: "#534AB7", rating: 4.7, reviews: 89, fee: 1200, avail: "tomorrow", exp: 14, featured: false, hospital: "NIMHANS", slots: ["10:00","11:00","13:00","14:00","15:00"], about: "Specializes in anxiety, depression, and cognitive behavioral therapy." },
  { id: 7, name: "Dr. Ananya Das", spec: "Gynecologist", avatar: "AD", color: "#993556", rating: 4.8, reviews: 367, fee: 850, avail: "today", exp: 10, featured: false, hospital: "Cloudnine Hospital", slots: ["09:00","10:00","11:30","14:00","15:30"], about: "Expert in women's health, pregnancy care, and laparoscopic surgery." },
  { id: 8, name: "Dr. Vikram Joshi", spec: "Ophthalmologist", avatar: "VJ", color: "#0F6E56", rating: 4.6, reviews: 203, fee: 750, avail: "today", exp: 7, featured: false, hospital: "Sankara Eye", slots: ["09:00","10:30","11:00","14:00","16:00","17:00"], about: "Specializes in LASIK, cataract surgery, and retinal disorders." },
];

export const SPECIALTIES = ["All","Cardiologist","Neurologist","Dermatologist","Orthopedist","Pediatrician","Psychiatrist","Gynecologist","Ophthalmologist"];

export const TAKEN_SLOTS = ["09:30","11:00","15:30"];

export const DATES = [
  { day: "Sun", num: "04", month: "May" },
  { day: "Mon", num: "05", month: "May" },
  { day: "Tue", num: "06", month: "May" },
  { day: "Wed", num: "07", month: "May" },
  { day: "Thu", num: "08", month: "May" },
  { day: "Fri", num: "09", month: "May" },
];

export const INITIAL_APPTS = [
  { id: "a1", doc: DOCTORS[0], date: "Sun, 04 May", time: "09:00", status: "upcoming", reason: "Regular heart checkup" },
  { id: "a2", doc: DOCTORS[2], date: "Mon, 13 Apr", time: "10:30", status: "completed", reason: "Skin rash consultation" },
  { id: "a3", doc: DOCTORS[1], date: "Wed, 19 Mar", time: "11:00", status: "cancelled", reason: "Migraine consultation" },
];

export const HEALTH_TIPS = [
  { icon: "💧", title: "Stay Hydrated", desc: "Drink 8+ glasses daily" },
  { icon: "🏃", title: "Daily Walk", desc: "30 mins of walking" },
  { icon: "😴", title: "Sleep Well", desc: "7–8 hours is ideal" },
  { icon: "🥗", title: "Eat Clean", desc: "More greens, less sugar" },
];
