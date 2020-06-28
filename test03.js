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
