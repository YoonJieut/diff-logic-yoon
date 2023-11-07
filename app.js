console.log('app.js')

// built-in modules
// import fs from "fs";

// custom modules
import diffLogic from "./model/diff-logic.js";

<<<<<<< HEAD
// json files path
const inputJSONPath = "./data/fromDB-data.json";
const outputJSONPath = "./data/differences.json";



=======
// json files name
// * 이름 작성 하고, data안에 json만 넣으면 작동하는 함수
const inputJSONName = "fromDB-data.json";
const outputJSONName = "differences.json";
>>>>>>> 8c5f3ad3e417be62c49a21495ec61a48b293db01

// controller

const resultObject = diffLogic(inputJSONName, outputJSONName);
console.log(resultObject);