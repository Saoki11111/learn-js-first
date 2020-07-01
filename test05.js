a = ["test", "最", "低"];

// push pop unshift, shift

// a.pop();
// a.pop();
// a.pop();
//
// a.push("hoge");
// a.push("最");
// a.push("高");

a.shift();
a.pop();
a.unshift("hoge");
a.push("高");

// a を順番にくっつけたら「hoge最高」になるか
if (a.join("") == "hoge最高"){
  console.log("★★★正解★★★")
}else{
  console.log("★★★間違い★★★")
}

// --- //
// 同じ意味のデータは配列

// od△ のサイコロ
// diceCount はサイコロの数 diceMax はサイコロの面の数
// xdy はそれぞれの出目、合計値を表示する関数
// diceEx(diceCount, diceMax) を作る
// sum(array) の関数を作る
// dice(diceMax) の関数を作る

sum = function(ary) {
  var index = 0;
  var total = 0;
  // ary の長さまでループ
  while (index < ary.length){
    // total に ary の中身を足す
    total = total + ary[index];
    index++;
  }
  // 合計
  return total;
}

dice = function(diceMax){
  return Math.ceil(Math.random()*diceMax) + 1;
};

diceEx = function(diceCount, diceMax){
  var ary = [];
  var count = 0;
  while(count < diceCount){
    ary.push(dice(diceMax));
    count++;
    }

  console.log(ary);
  console.log("" + diceCount + "d" + diceMax + "の結果は" + sum(ary) + "です！");
}

diceEx(3, 6);
