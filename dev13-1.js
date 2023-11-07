
const isTextFile = (fileName) => {
  // 경로의 확장자를 변환
  let result = path.extname(fileName).toLowerCase() === ".txt";
  return result // 문자열로 반환
}

const compareFiles = (operator, operand) => {
  try{
    // 파일 확장자 검사
    if(!isTextFile(operator)|| !isTextFile(operand)){
      console.error('폴더가 .tst 파일이 아닙니다.');
      return false;
    }
  }catch(err){
    console.error('에러 리딩 파일 : ', err);
    return false;
  }
}