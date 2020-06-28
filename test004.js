// 1 から 100 までの整数のどれかが ランダムで表示される
// Math.ceil = 切り上げ(1.1 = 2, 1.2 = 2)
// Math.random() = 0~1 までの数値を返す * ほしい数

random = Math.ceil(Math.random()*100);
console.log("サイコロの結果は" + random + "です！");
