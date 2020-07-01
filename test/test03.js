// 無限ループ（count がずっと 0 のため）
count = 0;
while(count<3){
  conslole.log(count);
}

// --- //

// count の中身を while 命令で変化させながら
// console.log を使って
// 0 1 2 ... 10 を表示させる

count = 0;
while(count <= 10){
  console.log(count);
  count++;
}

// -- //

// 文字列の連結 + while
month = 1;
while(month <= 12){
  day = 1;
  while(day <= 31){
    console.log(month+"月"+day+"日");
    day++;
  }
  month++;
}

// 2 つの数の間の合計値を求めるプログラム
// ex: 1~100 = 1 + 2 + 3 + ... 99 + 100 = 5050
// 2 つの数は = で変えられるようにする
// 「1 から 100 までの合計は 5050 です！」
// と表示する
// start = 1;
// end = 100;

start = 1;
end = 100;
current = start;
total = 0;
while(current <= end){
  total = total + current;
  current++;
}
console.log(start + "から" + end + "までの合計は" + total + "です！");
