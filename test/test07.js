// 点数 0~100 が入った配列
// 配列を受け取り、最高点を返す getMax(ary) を作る

getMax = function(ary){
  var result = -1;
  for(var count = 0; count < ary.length; count++){
    if(result < ary[count]){
      // もし result より大きい値なら result に入れる
      result = ary[count];
    }
  }
  return result;
}

console.log(getMax([67, 23, 99]))

// -- //

// テストの点数 0 ~ 100 の配列
// min点、max点を受取り、
// min点~max点を受け取った人数を返す
// getRangeCount(ary, min, max) を作る
// min点、max点をとった人数を含む

// min < x < max = count 返す

// 0~50点をとった人数は1人

getRangeCount = function(ary, min, max) {
  var count = 0;
  for(var index = 0; index < ary.length; index++){
    if(min <= ary[index] && ary[index] <= max){
      count++;
    }
  }
  return count;
};

console.log(getRangeCount([67, 23, 70] 0,50))
