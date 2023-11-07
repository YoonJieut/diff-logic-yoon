import { readFileSync } from 'fs';
import path from 'path';
import { arrySame } from './arrySame.js';


/**
 * 
 * @param {JSON, Path} inputJSONdata 
 * @param {JSON, Path} outputJSONdata 
 * @returns Object
 */

export default function A (inputJSONName, outputJSONName) {
  if (!inputJSONName.endsWith('.json') || !outputJSONName.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONName}, ${outputJSONName}는 json 파일이 아닙니다.`);
  }
  let result = {};
  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   * 
   * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
   * * 2. inputJSONdata, outputJSONdata의 value를 비교
   * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
   * * 4. diffences.json 파일에 필요한 상태값
   * * 5. 같은 단어가 무엇인지 저장
   * * 6. 다른 단어가 무엇인지 저장
   * * 7. 리턴을 통해 결과값을 전달
   */

  // step1. 파일을 읽어옵니다.
  // 경로 설정 변수 세팅 
  // * 상대경로와 절대경로 방식 2가지 방식
  // * 절대경로가 다른 컴퓨터에서도 오류가 나지 않을 확률이 높다.
  // const inputJSONPath = `data/${inputJSONName}`
  const inputJSONPath = path.join(process.cwd(), 'data', inputJSONName)
  const outputJSONPath = path.join(process.cwd(), 'data', outputJSONName)

  // json 파일로 parse한다.
  const fromDBData = JSON.parse(readFileSync(inputJSONPath, { encoding: 'utf8' }));
  const diffDBData = JSON.parse(readFileSync(outputJSONPath, { encoding: 'utf8' }));

  // 띄워쓰기를 구분하여 파일을 나눈다.
  const operatorWord = arrySame(fromDBData.operator);
  const operandWord = arrySame(fromDBData.operand);

  console.log(operandWord, '-----',operatorWord);

  // 비교하기 후 각 결과에 저장하기
  // 동일 단어와 차이 나는 단어들을 찾습니다.
  const sameWord = operatorWord.filter(word => operandWord.includes(word))

  // 차이나는 단어들을 찾습니다. Set을 사용하여 중복을 제거하고 새로운 배열을 생성합니다. 그리고 같은 것과 다른 것을 제거합니다.
const allWords = new Set(operandWord.concat(operandWord));
const differenceWord = Array.from(allWords).filter(word => !sameWord.includes(word));

  result = {
    "sameWords" : sameWord,
    "differenceWords" : differenceWord
  };

  // 저장한 값 writefile로 덮어쓰기

  
  return result
}
A("fromDB-data.json", "differences.json");