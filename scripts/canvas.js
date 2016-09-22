function handleDefaultText(sentTxt){
  alert("stuff");
}

$(document).ready(function(){
  $(".txt_coder_interaction").focus(function(){
    handleDefaultText($(this));
  });
});