// 1 から 100 までの整数のどれかが ランダムで表示される
// Math.ceil = 切り上げ(1.1 = 2, 1.2 = 2)
// Math.random() = 0~1 までの数値を返す * ほしい数

random = Math.ceil(Math.random()*100);
console.log("サイコロの結果は" + random + "です！");
<<<<<<< HEAD

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
=======
>>>>>>> ff2503a1d062daeb2a79e09cd59e4ef435bd5d63
