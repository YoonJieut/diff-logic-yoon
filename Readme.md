### app.js

컨트롤러에 해당하는 app.js
몇 가지 조건으로 문자열을 비교하고 나누는 작업을 한다.

2가지 항목이 완료되야 잘 작동한다.

1. 안쪽의 json name을 작성할 것
2. json name과 같은 이름으로 data 안에 "json"파일 형식으로 추가할 것

주의 : 덮어씌우는 형식이라 여러 개가 저장되진 않는다.

### 구성 목록
#### model
- diff-logic.js : 메인 함수에 해당하며 같은 폴더 안의 arrySame.js와 모듈화를 통해 연동되어있다.
- arrySame.js : diff-logic.js와 연결되어 있다.

##### diff-logic.js 
메인 로직, 
1. json 파일의 경로를 읽어온다. 
2. json 안에 value 값을 arrySame에 전달한다.
3. 결과 값으로 받은 배열을 비교를 통해 문자열을 나눈다.
4. json 작성을 통해 json에 저장한다.

입력값 : json 원본 파일명 과 저장할 json 파일명
결과값 : json 저장할 파일명에 저장

##### arrySame.js
서브 로직
1. 문장을 공백 나눠 단어 별로 배열로 나눈다.
2. 특수 문자와 소문자로 나눈 후 리턴한다.

입력값 : json 원본 파일의 문장
결과값 : 배열



