// 클래스영역을 가져온 numbers는 .으로 가져왔다
// id영역을 가져온 draw,reset은 # 으로 가져옴

const totalDiv = document.querySelector('.lotto')
const drawButton = document.querySelector("#draw")
const f_drawButton = document.querySelector("#five_draw")
const resetButton = document.querySelector("#reset")

// 6개의 숫자를 필요할때 마다 관리하기 위함
const lottoNumbers = []
// 로또번호를 색깔로 구분하기 위함
const colors = ['red','navy','gray','skyblue','coral']
// reset을 위한 count 변수 생성
var cnt = 0

function paintNumber(number,a){

  const eachNumDiv = document.createElement("div")
  // 각 구간에 따른 색 구분하기
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.classList.add('eachnum')
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  a.append(eachNumDiv)

}



drawButton.addEventListener("click",function() {
  //숫자 6개를 만들어야한다.
  while(lottoNumbers.length < 6){
    //Math.random은 소수점을 가지고 나오기때문에 floor 을 이용해 내림한다.
    let ran = Math.floor(Math.random() * 45) + 1
    // random 중복 숫자 생성 방지하기
    // indexOf이용하기
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(Number(ran))
      lottoNumbers.sort(function(a,b){
        return a - b;
      })
    }
  }
  // 각각 조합의 라인 구분을위한 태그 생성
  const eachLine = document.createElement("div")
  eachLine.classList.add('numbers')
  totalDiv.append(eachLine)
  // 오름차순 정렬을 for loop
  for (j = 0; j < 6 ; j++){
    paintNumber(lottoNumbers[j],eachLine)
  }
  lottoNumbers.splice(0,6);
  cnt += 1;
} )

f_drawButton.addEventListener("click", function(){
  for(i =0; i < 5; i++){
  // reset을 위한 변수 cnt
  cnt += 1;
  //숫자 6개를 만들어야한다.
  while(lottoNumbers.length < 6){
    //Math.random은 소수점을 가지고 나오기때문에 floor 을 이용해 내림한다.
    let ran = Math.floor(Math.random() * 45) + 1
    // random 중복 숫자 생성 방지하기
    // indexOf이용하기
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(Number(ran))
      lottoNumbers.sort(function(a,b){
        return a - b;
      })
    }
  }
  // 각각 조합의 라인 구분을위한 태그 생성
  const eachLine = document.createElement("div")
  eachLine.classList.add('numbers')
  totalDiv.append(eachLine)
  // 오름차순 정렬을 for loop
  for (j = 0; j < 6 ; j++){
    paintNumber(lottoNumbers[j],eachLine)
  }
  lottoNumbers.splice(0,6);}

})

resetButton.addEventListener('click', function(){

  //splice(a,b) 는 a번째 인덱스부터 b개 지우겠다는 배열 메소드
  lottoNumbers.splice(0,6)
  // numbersDiv를 없는것으로 만듬 ""를 이용해서
  for(i=0; i < cnt; i++){
  document.querySelector(".numbers").remove()
  }
  cnt = 0
})
