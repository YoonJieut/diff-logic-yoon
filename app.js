// built-in modules
// import fs from "fs";

// custom modules
import diffLogic from "./model/diff-logic.js";

// json files name
// * 이름 작성 하고, data안에 json만 넣으면 작동하는 함수
const inputJSONName = "fromDB-data.json";
const outputJSONName = "differences.json";

// controller

const resultObject = diffLogic(inputJSONName, outputJSONName);
console.log(resultObject);