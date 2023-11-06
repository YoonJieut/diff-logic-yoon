
console.log('diff-logic');
import fs from 'fs';
import path from 'path';
/**
 * 
 * @param {JSON, Path} inputJSONdata 
 * @param {JSON, Path} outputJSONdata 
 * @returns Object
 */


export default function A (inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`);
  }
  let result = { };
  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   * 
   * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
   * * 2. inputJSONdata, outputJSONdata의 value를 비교
   * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
   * * 4. dirrences.json 파일에 필요한 상태값
   * * 5. 같은 단어가 무엇인지 저장
   * * 6. 다른 단어가 무엇인지 저장
   * * 7. 리턴을 통해 결과값을 전달
   */

    // json 객체로 바꾸는 로직
    console.log("readfile 실행");
    fs.readFileSync(inputJSONPath, "utf8", (json)=>{
      try {
        const data = JSON.parse(json);
        console.log("json parse :" +data);
      }catch(err){
        console.error(err)
      }

    })



  return result;
};

const inputJSONPath = "../data/fromDB-data.json";
const outputJSONPath = "../data/differences.json";

A(inputJSONPath, outputJSONPath);

