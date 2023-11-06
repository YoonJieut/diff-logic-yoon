// ESM 방식으로 fs/promises와 path 모듈 가져오기
import { readFile } from 'fs/promises';
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






  return result;
};

//process.cwd()가 __dirname과 같다. esm 방식에선__dirname은 지원하지 않는다.

const jsonFilePath = path.join(process.cwd(),'data', 'fromDB-data.json'); // JSON 파일 경로
console.log(jsonFilePath);
// 비동기 함수에서 await를 사용하여 파일 읽기
async function readJsonFile() {
  try {
    const jsonString = await readFile(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonString);
    console.log('JSON data:', data); // JSON 데이터 출력
  } catch (err) {
    console.error('Error reading or parsing JSON file:', err);
  }
}

readJsonFile();


