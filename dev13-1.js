
const isTexFile = (fileName) => {
  // 경로의 확장자를 변환
  let result = path.extname(fileName).toLowerCase() === ".txt";
  return result // 문자열로 반환
}

const compareFiles = (operator, operand) => {
  try{

  }catch(err){
    console.error('에러 리딩 파일 : ', err);
    return false
  }
}