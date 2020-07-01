money = 100;
price = 300;

// if で money が price 以上なら 「変えます」 
// それ以外なら「変えません」を表示
if (money >= price ) {
  message = "買えます";
} else {
  message = "買えません";
}

console.log(message);

// --- //

// または "買えません" を先に入れておく
money = 100;
price = 300;
message = "買えません";

// if で money が price 以上なら 「変えます」 
// それ以外なら「変えません」を表示
if (money >= price ) {
  message = "買えます";
}

console.log(message);
