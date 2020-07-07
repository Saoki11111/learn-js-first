$().ready(function(){
  $('button').on('click', buttonClicked);
});

buttonClicked = function(){
  $('#message').html('ボタンが押されました');
};
