$(document).ready(function() {
  // const text = $(".profile-text").text();
  // const newText = text.length < 401 ? text : text.slice(0, 400)  + '...';
  // $(".profile-text").text(newText);
  
  $(".member-card").click(function() {
    $(this).addClass("main-card");
    $(this).removeClass("member-card");
    $(this).find(".head-shot").addClass("main-card-head-shot");
    $(this).find(".head-shot").removeClass("head-shot");
    $(this).find(".card-content").addClass("main-card-content");
    $(this).find(".card-content").removeClass("card-content");
    $(this).find(".profile-text").addClass("scrollable");
    $(this).css({'width': '95%', 'height': '33em'});
    
  });

  // Hides the top selected card
  $(".closebtn").click(function(event) {
    console.log("Close Button Registered");
    let parent = $(this).parent()[0];
    
    $(parent).removeAttr("style");
    $(parent).addClass("member-card");
    $(parent).removeClass("main-card");
    $(parent).find(".main-card-head-shot").addClass("head-shot");
    $(parent).find(".main-card-head-shot").removeClass("main-card-head-shot");
    $(parent).find(".main-card-content").addClass("card-content");
    $(parent).find(".main-card-content").removeClass("main-card-content");
    
    event.stopPropagation();
    console.log(parent);
  });
});