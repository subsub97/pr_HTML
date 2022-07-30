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

        realTimer();

        // 이후 0.5초에 한번씩 시간을 갱신한다.

        setInterval(realTimer, 100);

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


  document.getElementById("normal_Times").innerHTML =

              "■ 현재시간 :"+year + "-" + addzero(month) + "-" + addzero(date) + "&nbsp;" + hour + ":" + addzero(min) + ":" + addzero(sec);}




        // 1자리수의 숫자인 경우 앞에 0을 붙여준다.

	function addzero(num) {

		if(num < 10) { num = "0" + num; }

 		return num;

	}
