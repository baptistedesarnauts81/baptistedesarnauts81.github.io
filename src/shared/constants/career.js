import moment from "moment";

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
  },
  lyon: {
    title: "Lyon",
    coord: [4.8320114, 45.7578137],
  },
  montreal: {
    title: "Montreal",
    coord: [-73.5698065, 45.5031824],
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
  // {
  //   type: "education",
  //   country: possibleCountries.france,
  //   ts_beg: moment("2015-09-01"),
  //   ts_end: moment("2017-07-01"),
  //   title: "Preparatory class",
  //   city: cities.toulouse,
  // },
  {
    type: "education",
    country: possibleCountries.france,
    ts_beg: moment("2017-09-01"),
    ts_end: moment("2021-11-01"),
    title: "Engineering degree",
    city: cities.lyon,
  },
  {
    type: "education",
    country: possibleCountries.france,
    ts_beg: moment("2020-09-01"),
    ts_end: moment("2021-11-01"),
    title: "Master degree",
    city: cities.lyon,
  },
  {
    type: "job",
    country: possibleCountries.france,
    ts_beg: moment("2019-05-01"),
    ts_end: moment("2019-11-01"),
    title: "Data scientist intern",
    city: cities.toulouse,
  },
  {
    type: "job",
    country: possibleCountries.canada,
    ts_beg: moment("2020-02-01"),
    ts_end: moment("2020-08-01"),
    title: "Machine learning intern",
    city: cities.montreal,
  },
  {
    type: "job",
    country: possibleCountries.canada,
    ts_beg: moment("2021-04-01"),
    ts_end: moment(),
    title: "Software engineer",
    city: cities.montreal,
  },
];

export const countryPosition = {
  [possibleCountries.france]: { position: [2, 47], scale: 1300 },
  [possibleCountries.canada]: { position: [-90, 47], scale: 300 },
};
