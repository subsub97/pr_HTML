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
