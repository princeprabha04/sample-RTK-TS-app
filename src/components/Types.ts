const config = {
  userInfo: {
    firstname: "Mohamed",
    lastname: "Ismail",
  },
  address: {
    city: "Chennai",
    state: "TN",
    pincode: 685509,
  },
  test: "123",
  name:"valor",
};

type T = typeof config;
type Keys = keyof typeof config;
type Values = T[Keys];

export{}

interface Employee { 
  name: string; 
  code: number; 
} 

let employee = { } as Employee; 
employee.name = "John"; // OK
employee.code = 123; // OK