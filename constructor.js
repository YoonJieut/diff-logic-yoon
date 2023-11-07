const fs = require('fs');
const path = require('path');

// fileCompare 클래스 정의

class fileCompare {
  constructor(operator,operand){
    this.operator = operator;
    this.operand = operand;
  }

  // 파일이 .txt인지 확인하는 메서드
  isTxtFile(fileName){
    return path.extname(fileName).toLowerCase() ==='.txt';
  }

  // 두 txt파일의 내용을 비교하는 메서드
  compare(){
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

      const dataOperator = fs.readFileSync(filePathOperator, 'utf8');
      const dataOperand = fs.readFileSync(filePathOperand, 'utf8');

      // 파일 내용을 비교하여 결과를 반환한다.
      return dataOperator === dataOperand;
    }catch(err){
      console.error('에러 리딩 파일 : ', err);
      return false;
    }
  }

}


