var Body = {
  setcolor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}


function night_Dayhandler(self){

if(self.value === 'night'){
  Body.setBackgroundColor('gray');
  Body.setcolor('white');
  self.value = 'day';
}
else{
  Body.setBackgroundColor('white');
  Body.setcolor('black');
  self.value = 'night';
}
}

document.addEventListener("DOMContentLoaded", function() {



        // 시간을 딜레이 없이 나타내기위한 선 실행

        realTimer();



        // 이후 0.5초에 한번씩 시간을 갱신한다.

        setInterval(realTimer, 500);

    });



    // 시간을 출력

    function realTimer() {

		const nowDate = new Date();

		const year = nowDate.getFullYear();

		const month= nowDate.getMonth() + 1;

		const date = nowDate.getDate();

		const hour = nowDate.getHours();

		const min = nowDate.getMinutes();

		const sec = nowDate.getSeconds();



//nowTimes라는 아이디를 갖은 아래 수식을 HTML로 출력하겠다는 의

  document.getElementById("normal_Times").innerHTML =

              "■ 현재시간 :"+year + "-" + addzero(month) + "-" + addzero(date) + "&nbsp;" + hour + ":" + addzero(min) + ":" + addzero(sec);}


// 55초 이상일때 초만 바뀌게 하는방법 어떻게 해야할까
// 검정색으로 주다가 시간이 되면 if문을 통해서 초단위만 바꿔주

        // 1자리수의 숫자인 경우 앞에 0을 붙여준다.

	function addzero(num) {

		if(num < 10) { num = "0" + num; }

 		return num;

	}
