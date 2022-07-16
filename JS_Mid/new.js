//생성자 함수: 상품 객체를 생성하기

//생성자의 앞글자는 대문자로 하는 관례 함수와 구분하기 위함
function Item(name, price) {
  this.name = name;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은${price}원 입니다.`);
  }

}

const item1 = new Item('전자레인지', 30000);
console.log(item1);
item1.showPrice();