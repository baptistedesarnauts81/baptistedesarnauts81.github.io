import moment from "moment";
import cpgeImg from "../resources/cpge.png";
import eclImg from "../resources/ecl.png";
import ucbImg from "../resources/ucb.png";

export const cities = {
  strasbourg: {
    title: "Strasbourg",
    coord: [7.7507127, 48.584614],
  },
  albi: {
    title: "Albi",
    coord: [2.147899, 43.9277552],
  },
  toulouse: {
    title: "Toulouse",
    coord: [1.4442469, 43.6044622],
    imgUrl:
      "https://www.toulouse-tourisme.com/sites/www.toulouse-tourisme.com/files/styles/incontournable_hp/public/thumbnails/image/incontournables_toulouse.jpg?itok=VikdpWQ_",
  },
  lyon: {
    title: "Lyon",
    coord: [4.8320114, 45.7578137],
  },
  montreal: {
    title: "Montreal",
    coord: [-73.5698065, 45.5031824],
    imgUrl:
      "https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx",
  },
};

export const experiencesTypes = {
  job: "Job",
  education: "Education",
};

export const possibleCountries = {
  france: "France",
  canada: "Canada",
  usa: "United States",
  mexico: "Mexico",
};
export const dateReference = "2017-09-01";

export const experiences = [
  {
    type: "education",
    country: possibleCountries.france,
    ts_beg: moment("2015-09-01"),
    ts_end: moment("2017-06-01"),
    title: "Preparatory class",
    school: "Lycee Bellevue",
    city: cities.toulouse,
    img: cpgeImg,
    details:
      "Two years of study which act as an intensive preparatory course with the main goal of training students for enrolment in one of the 'grandes écoles'. The workload is one of the highest in Europe (29 to 45 contact hours a week, with up to 10 hours of guided tutorials and oral exam sessions).",
  },
  {
    type: "education",
    country: possibleCountries.france,
    ts_beg: moment("2017-09-01"),
    ts_end: moment("2021-11-01"),
    title: "Engineering degree",
    school: "Ecole Centrale de Lyon",
    city: cities.lyon,
    img: eclImg,
    details:
      "École Centrale de Lyon, one of the leading engineering French university. I did a master's degree with a major in Mathematics and Computer science. Following courses in Algorithms, Web Development, Machine Learning, Image Processing and general engineering principles.",
  },
  {
    type: "education",
    country: possibleCountries.france,
    ts_beg: moment("2020-09-01"),
    ts_end: moment("2021-11-01"),
    title: "Master degree",
    school: "Claude Bernard Lyon 1",
    city: cities.lyon,
    img: ucbImg,
    details:
      "Claude Bernard University Lyon 1 is one of the three public universities of Lyon. I did a mater's degree with a major in Data Science and in depth courses in machine learning and statistics",
  },
  {
    type: "job",
    company: "Airbus",
    country: possibleCountries.france,
    ts_beg: moment("2019-05-01"),
    ts_end: moment("2019-11-01"),
    title: "Data scientist intern",
    city: cities.toulouse,
    stack: ["Python", "MongoDB"],
    details: [
      "Designed, developed and deployed a management dashboard to allow managers and project leaders to identify quality issues and delivery delays",
      "Researched, defined and prioritized key user requirements",
      "Built data integration module to synchronize 3 data sources into a common repository",
    ],
  },
  {
    type: "job",
    company: "Kogniz",
    country: possibleCountries.canada,
    ts_beg: moment("2020-02-01"),
    ts_end: moment("2020-08-01"),
    title: "ML developer intern",
    city: cities.montreal,
    stack: ["Python"],
    details: [
      "Created and deployed object detection models and image classifiers.",
      "Created datasets from images gathered on the internet, hand-annotated images and augmented data.",
    ],
  },
  {
    type: "job",
    company: "Kogniz",
    country: possibleCountries.canada,
    ts_beg: moment("2021-04-01"),
    ts_end: moment(),
    title: "Software engineer",
    city: cities.montreal,
    stack: ["React.js", "Redux", "Python"],
    details: [
      "Designed and developed scalable and testable React modules from scratch like a 3D-model viewer or a package marketplace to allow users to customize their experience on the app",
      "Collaborated with the Back-End team for API calls implementation",
      "Assessed UX and UI designs for technical feasibility",
      "Implemented unit tests (jest) and end-to-end tests (cypress)",
      "Fixed dozens of bugs and migrated legacy code to React components",
      "Trained, evaluated and deployed object detection models",
      "Developed and implemented a hand recognition system based on the geometry of the hand.",
    ],
  },
];

export const countryPosition = {
  [possibleCountries.france]: { position: [2, 47], scale: 1300 },
  [possibleCountries.canada]: { position: [-90, 47], scale: 300 },
};
