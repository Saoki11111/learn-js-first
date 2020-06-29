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
