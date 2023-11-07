const fs = require('fs');
const path = require('path');

const isTextFile = (fileName) => {
  // 경로의 확장자를 변환
  let result = path.extname(fileName).toLowerCase() === ".txt";
  return result // 문자열로 반환
}

// console.log(isTextFile("hi.txt"));
// console.log(isTextFile("hello.txt"));

const compareFiles = (operator, operand) => {
  try{
    // 파일 확장자 검사
    if(!isTextFile(operator) || !isTextFile(operand)){
      console.error('폴더가 .txt 파일이 아닙니다.');
      return false;
    }

    // 파일 전체 경로를 생성
    // __dirname은 현재 파일의 위치를 나타낸다.
    const filePathOperator = path.join(__dirname,'data',operator);
    const filePathOperand = path.join(__dirname,'data', operand);
    console.log(filePathOperand, filePathOperator);

    // 순서대로, 동기적으로 파일을 읽게 접미사인 Sync를 붙였다.
    // node.js에서 sync는 동기적으로 실행한다는 의미

    const dataOperator = fs.readFileSync(filePathOperator, 'utf8');
    const dataOperand = fs.readFileSync(filePathOperand, 'utf8');

    let isResult = dataOperator === dataOperand;
    // 파일 내용을 비교하여 결과를 반환한다.
    return isResult;
  }catch(err){
    console.error('에러 리딩 파일 : ', err);
    return false;
  }
}

// 함수 사용 예
const areFilesEqual = compareFiles("formDBdata.txt", "differences.txt");
console.log(areFilesEqual) // 내용이 같다면 true 다르다면 false;

