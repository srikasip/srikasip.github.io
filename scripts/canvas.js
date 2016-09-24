function handleDefaultText(){
  $(".txt_coder_interaction").val($(".txt_coder_interaction").attr("default_text"));
}

function all_object_types()
{
  objectList = ["pointer", "button", "label", "textbox", "list", "area", "image", "line", "circle", "square"]
  return objectList;
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

  all_objects = all_object_types();
  for (obj in all_objects)
  {
    $("#toolkit").append($("<button value='"+all_objects[obj]+"'>"+all_objects[obj]+"</button>"));
  }

  $("#toolkit button").click(function(){
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).toggleClass("selectedMenu");
  });
});