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

// 赤点の人数を探す
// -> 平均点の半分の点数以下

// 平均点を算出する avarage の関数
average = function(ary){
  // 合計を宣言
  var total = 0;
  // 配列の最大数回す -> 合計に配列の値(value)を追加する -> 合計を配列の数で割る 
  for (var index = 0; index < ary.length; index++){
    // 合計に配列の値(value)を追加する
    total += ary[index];
  }
  // 合計を配列の数で割る
  return total / ary.length;
}

getRedStudentCount = function(ary){
  // 平均点
  var avg = average(ary);
  // 平均点は半分以下の点数
  var count = 0;
  // index(配列の数の最大まで回す)
  for (var index = 0; index < ary.length; index++){
    if (ary[index] <= avg / 2){
      count++;
    }
  }
  // count 数を返す
  return count;
}
console.log(getRedStudentCount([67, 23, 70]));
