$(document).ready(function(){

  $("#typed").typed({
      // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
      stringsElement: $('#typed-strings'),
      typeSpeed: 30,
      backDelay: 500,
      loop: false,
      contentType: 'html', // or text
      // defaults to false for infinite loop
      loopCount: false,
      callback: function(){ foo(); },
      resetCallback: function() { newTyped(); }
  });

  $(".reset").click(function(){
      $("#typed").typed('reset');
  });

  $(".nextpage_link").click(function(){
    alert("clicked next page")
    $(".nextpage").css("background-color", "#dfdfdf");
    $(".nextpage").css("display", "block");
    $(".nextpage").animate({
      left: "0px"
    }, "slow");

    window.location = "canvas.html";
  });

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }


$("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });