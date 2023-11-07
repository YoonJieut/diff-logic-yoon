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


/**
 *  * 코드가 다소 길어졌지만
 *  * constructor, "무언가, 특정한 기능을 만드러내겠다" 라는 의도가 명확해진다.
 *  * 사용환경과 작업의 목적에 따라서 코드를 작성하는 방식이
 *  ! js에서는 매우 다양함로, 다양한 어휘로 훈련할 필요가 있다.
 */

// 클래스 사용 예
const comparator = new fileCompare('operator.txt','operand.txt');
const areFilesEqual = comparator.compare();
console.log(areFilesEqual); // 내용이 같다면 true, 다르다면 false

