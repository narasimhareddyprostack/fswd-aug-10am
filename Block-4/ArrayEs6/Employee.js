let employees = [
  {
    id: 1,
    first_name: "Adolph",
    last_name: "Waith",
    email: "awaith0@cnbc.com",
    gender: "Polygender",
  },
  {
    id: 2,
    first_name: "Lorianne",
    last_name: "Jedrzejczyk",
    email: "ljedrzejczyk1@scribd.com",
    gender: "Genderfluid",
  },
  {
    id: 3,
    first_name: "Tye",
    last_name: "Blader",
    email: "tblader2@bing.com",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Leta",
    last_name: "Kaman",
    email: "lkaman3@hibu.com",
    gender: "Bigender",
  },
  {
    id: 5,
    first_name: "Ulrike",
    last_name: "Flahive",
    email: "uflahive4@independent.co.uk",
    gender: "Polygender",
  },
  {
    id: 6,
    first_name: "Padraig",
    last_name: "Harding",
    email: "pharding5@cafepress.com",
    gender: "Non-binary",
  },
  {
    id: 7,
    first_name: "Elvera",
    last_name: "Satcher",
    email: "esatcher6@i2i.jp",
    gender: "Non-binary",
  },
  {
    id: 8,
    first_name: "Dal",
    last_name: "Alday",
    email: "dalday7@bloomberg.com",
    gender: "Bigender",
  },
  {
    id: 9,
    first_name: "Camala",
    last_name: "Collcutt",
    email: "ccollcutt8@wordpress.org",
    gender: "Genderfluid",
  },
  {
    id: 10,
    first_name: "Marchall",
    last_name: "Goley",
    email: "mgoley9@cornell.edu",
    gender: "Genderqueer",
  },
];

let email_Array = employees.map((emp) => {
  return emp.email;
});
console.log(email_Array);
