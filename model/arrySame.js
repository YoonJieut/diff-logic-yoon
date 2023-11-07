/**
 * 문장 하나를 받아서 온점과 쉼점을 제거하고 
 * 소문자로 반환하는 함수를 제작
 * 
 * @param {String} input
 * @return {Array} 
 */


  export function arrySame(text) {
    // 온점, 쉼표를 제거하고 문자열 끝의 온점도 제거합니다.
    const cleanedText = text.replace(/[.,](?=\s|$)/g, '').toLowerCase();
    // 결과 문자열을 공백으로 분할하여 단어의 배열을 생성합니다.
    const wordsArray = cleanedText.split(/\s+/);
    return wordsArray;
  }
