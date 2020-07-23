var scores = {
  "松井秀喜" : {
    "投球回": 0,
    "自責点": 0,
  },
  "イチロー" : {
    "投球回": 1,
    "自責点": 1,
  },
  "前田健太" : {
    "投球回": 1509.2,
    "自責点": 401,
  },
};

for (var name in scores) {
  var pitchCount = scores[name]["投球回"];
  var lostPoint = scores[name]["自責点"];

  // 防御率
  var diffenceRate = (lostPoint * 9) / pitchCount;

  if (pitchCount == 0) {
    console.log(name+"選手は、投球したことがありません。");
  } else {
    console.log(name+"選手の防御率は、"+diffenceRate+"です。");
  }
}
