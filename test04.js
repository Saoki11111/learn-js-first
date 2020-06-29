// 1 から 100 までの整数のどれかが ランダムで表示される
// Math.ceil = 切り上げ(1.1 = 2, 1.2 = 2)
// Math.random() = 0~1 までの数値を返す * ほしい数

random = Math.ceil(Math.random()*100);
console.log("サイコロの結果は" + random + "です！");

// --- //

// 1 ~ 5 = サイコロのは 大成功です！
// 96 ~ 100 = サイコロのは 大失敗です！

random = Math.ceil(Math.random()*100);
message = "サイコロの結果は" + random; 
if (random <= 5){
  console.log(message + "成功です！");
} else if (96 <= random && random <= 100){
    console.log(message + "失敗です！");
}

console.log(message + "です！");

// --- //

// 1 ~ 100 までの整数のどれかがランダムで表示される
// 関数を使用する

dice = function(){
  return Math.ceil(Math.random()*100);
};

console.log("サイコロの結果は"+dice()+"です！");

// -- //

// money と price を渡すと
// 購入可能なら true
// 購入不可なら false
// を返す関数 canBuy(money, price) を作成する

canBuy = function(money, price){
  if (money >= price){
    // return true;
    money = money;
    return "買える";
  }else{ 
    // return false;
    price = price;
    return "買えない";
  }
};

console.log(money + "円で" + price + "円のものは" + canBuy(100, 300));
console.log(money + "円で" + price + "円のものは" + canBuy(300, 300));
console.log(money + "円で" + price + "円のものは" + canBuy(100000, 83495));
