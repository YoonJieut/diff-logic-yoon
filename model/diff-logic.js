import { readFileSync } from 'fs';
import path from 'path';


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
  // const inputJSONPath = `data/${inputJSONName}`
  const fromDBData = JSON.parse(readFileSync(inputJSONPath, { encoding: 'utf8' }));


result = fromDBData;

  return console.log(result);
}
A("fromDB-data.json", "differences.json");