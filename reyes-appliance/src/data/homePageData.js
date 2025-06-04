// src/data/homePageData.js

// Import all the image assets needed for the cards
import appliance from "../assets/images/appliance.png";
import appliance3 from "../assets/images/appliance3.png";
import appliance4 from "../assets/images/appliance4.png";
import appliance5 from "../assets/images/appliance5.png";
import appliance6 from "../assets/images/appliance6.png";
import service from "../assets/images/service.png";
import fridge from "../assets/images/fridge.png";
import relationships from "../assets/images/relationships.png";

/**
 * Data for the appliance service cards shown in the services section
 * Each object represents a single appliance card
 */
export const applianceCards = [
  {
    image: appliance,
    title: "Refrigerators",
    content: "We ensure your refrigerator runs efficiently, providing a reliable foundation for everyday convenience and freshness"
  },
  {
    image: appliance3,
    title: "Stove",
    content: "We ensure your stove operates seamlessly and efficiently, fostering a delightful culinary experience"
  },
  {
    image: appliance4,
    title: "Washer",
    content: "We ensure your washing machine operates seamlessly and efficiently, allowing you to enjoy a consistently clean and well-organized home."
  },
  {
    image: appliance5,
    title: "Dryer",
    content: "We ensure your dryer operates seamlessly and efficiently, providing consistently dried clothes for a well-maintained home"
  },
  {
    image: appliance6,
    title: "Dishwasher",
    content: "We ensure your dishwasher stays effortlessly clean and efficient, fostering a hygienic and harmonious home environment"
  },
  {
    image: appliance3,
    title: "Oven",
    content: "We ensure your kitchen runs smoothly by maintaining your oven in top-notch condition, guaranteeing a delightful culinary experience with every use."
  }
];

/**
 * Data for the service features cards displayed in the middle section
 * Each object represents a single service feature
 */
export const serviceFeatures = [
  {
    image: service,
    title: "A Service You Can Trust",
    content: "At Reyes Appliance Repair, our team comprises licensed technicians with extensive expertise in appliance repair. You can trust us to bring a wealth of knowledge to every job, ensuring efficient and effective solutions for your appliances."
  },
  {
    image: fridge,
    title: "Appliance Care",
    content: "Whether it's your kitchen essentials or laundry appliances, we cover a wide range of devices. Our comprehensive service ensures that all your appliance repair needs are met under one roof, saving you time and providing a reliable solution for every situation."
  },
  {
    image: relationships,
    title: "Personal Relationships",
    content: "We prioritize a personal touch in our service. Our commitment to careful handling and transparent communication sets us apart, providing a level of care that goes beyond the standard repair experience."
  }
];

/**
 * You could also add other data objects here as your site grows
 * For example:
 */
export const serviceCoverage = {
  areas: ["Brooklyn", "Queens", "Bronx", "Staten Island", "Manhattan"],
  hours: {
    weekdays: "8AM-7PM",
    saturday: "9AM-5PM",
    sunday: "Closed"
  },
  diagnosticFee: 64.99
};

/**
 * Contact information that could be used across multiple components
 */
export const contactInfo = {
  phone: "347-256-0951",
  email: "reyesappliancerepairs@gmail.com",
  socialMedia: {
    facebook: "https://facebook.com/reyesappliance",
    instagram: "https://instagram.com/reyesappliance",
    // Add other platforms as needed
  }
};