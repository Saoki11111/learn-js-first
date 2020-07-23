use strict;

for(count=10; count>=0; count--){
  console.log(count);
}
console.log("新年おめでとう！");

// 1~100 までを数える
// 3 の倍数と 3のつく数字 = ★
// 10の位のときは？
// 1の位のときは？

for(count=1; count<=100; count++){
  if ( count % 3 == 0){
    console.log("★" + count);
  }
  else if (count % 10 == 3){
    console.log("★" + count);
  }
  else if (count >= 30 && count <=39){
    console.log("★" + count);
  }
  else{
    console.log(count);
  }
}

// -- //
// 8  文字のランダムな pw を作って返す関数
// generatePassword() を作る
// 使う文字「0~9a~z」
// substr(開始位置、長さ)
// 開始位置 = dice
// 長さ "文字列".length
// ランダムな数字 -> サイコロ
// 「ランダムな文字1を追加する」* 8 回

// ここ後で見直す ;;
dice = function(max){
  return Math.floor(Math.random() * (max+1));
}

strings = "012345678abcdefghijklmnopqrstuvwyz";
console.log(dice(strings.length -1));
console.log(strings.substr(dice(strings.length -1), 1));

// 関数
generatePassword = function(){
  var password = "";
  // 使う文字
  var strings = "012345678abcdefghijklmnopqrstuvwyz";
  var diceMax = strings.length - 1;
  for(var count = 0; count < 8; count++){
    var password = password + strings.substr(dice(strings.length-1), 1);
  }
  return password;
};

// 0 と z が出るか
for(count = 0; count < 10; count++){
  console.log(generatePassword());
}
