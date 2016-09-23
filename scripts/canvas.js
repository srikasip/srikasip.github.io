function handleDefaultText(){
  $(".txt_coder_interaction").val($(".txt_coder_interaction").attr("default_text"));
}

$(document).ready(function(){
  handleDefaultText();
  $('.txt_coder_interaction').focus(function(){
    if ($(this).val() == $(this).attr("default_text")){
      $(this).val("");
    }
  });
  $('.txt_coder_interaction').focusout(function(){
    if ($.trim($(this).val()) == ""){
      $(this).val($(this).attr("default_text"));
    }
  });

});