const fs = require("fs");
let data = `1	
I-1/1
Иван Белески
Зоран
ул.„Крале Марко“ бр.66 Охрид Охрид - Охрид
2	
I-1/2
Никита Војдиноски
Илче
ул. VI бригада 20 Охрид - Охрид
3	
I-1/3
Евгениј Додевски
Антонио
Димитар Влахов 57/А-5 Охрид - Охрид
4	
I-1/4
Илиевски Александар
Васко
Охрид - Охрид
5	
I-1/5
Петар Калков
Илија
Охрид - Охрид
6	
I-1/6
Лука Колевски
Даниел
Охрид - Охрид
7	
I-1/7
Љупчо Костески
Јоцо
Охрид - Охрид
8	
I-1/8
Филип Костески
Драган
Охрид - Охрид
9	
I-1/9
Филип Котоски
Тони
Лескоец - Охрид
10	
I-1/10
Отпишан ученик
Михаил Крстаноски
Љупчо
Ливоишта - Охрид
11	
I-1/11
Никола Митаноски
Благојче
Охрид - Охрид
`;
let filterArr = data.split(/\r?\t?\n/);
// console.log(filterArr);

let newArr = [];

let indexOfOtpisanArr = [];
for (let i = 0; i < filterArr.length; i++) {
  if (filterArr[i] == "Отпишан ученик") {
    indexOfOtpisanArr.push(i);
  }
}
if (indexOfOtpisanArr.length > 0) {
  indexOfOtpisanArr.forEach((index) => {
    filterArr.splice(index - 2, index + 3);
  });
}

for (let i = 2; i < filterArr.length; i = i + 5) {
  newArr.push(filterArr[i]);
}
let newArrObj = newArr.map((name, i) => {
  return { Id: i, Name: name };
});
const jsonData = JSON.stringify(newArrObj, null, 2);

fs.writeFile("names.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log("Data written to file");
  }
});
