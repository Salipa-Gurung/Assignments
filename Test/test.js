const jsonData = [
  {
    name: "humidity sensor1",
    location: "Pokhara Airport",
    humidity: "80% RH",
  },
  {
    name: "light sensor1",
    location: "Mahendrapool",
    illuminance: "12344 lux",
  },
  {
    name: "humidity sensor13",
    location: "Kathmandu Airport",
    humidity: "80% RH",
  },
  {
    name: "office temperature",
    temperature: "23°C",
  },
  {
    name: "multi purpose sensor",
    location: "New Road",
    temperature: "26°C",
    humidity: "80% RH",
    illuminance: "3444 lux",
  },
];

const th = tableHeading(jsonData);
console.log(th);

function tableHeading(jsonDatas) {
  var tableHeadings = [];
  var objKeys = [];
  for (let i = 0; i < jsonDatas.length; i++) {
    objKeys = Object.keys(jsonDatas[i]);
    tableHeadings = objKeys.concat(tableHeadings);
  }
  return [...new Set(tableHeadings)];
}

createTableObj(th, jsonData);

function createTableObj(th, jsonDatas) {
  var objArr = [];
  console.log(jsonDatas[0]);

  for (let i = 0; i < th.length; i++) {}
  if (th[i] in jsonDatas[0]) {
    console.log(Object.values(jsonDatas[0]));
  }

  //   for (let i = 0; i < jsonDatas.length; i++) {
  //     console.log(jsonDatas[i]);
  //     // if(th[0])
  //     // objKeys = Object.keys(jsonDatas[i]);
  //     // tableHeadings = objKeys.concat(tableHeadings);
  //   }
}
function createTable(th) {
  for (let i = 0; i < th.length; i++) {
    console.log("|" + " " + th[i] + " " + "|");
  }
}
