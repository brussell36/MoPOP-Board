$(document).ready(function() {
  $(".member-card").click(function() {

    // Grab all relevent information from member-card
    const profileName = $(this).find(".profile-name").text();
    const profileTitle = $(this).find(".profile-title").text();
    const profileText = $(this).find(".profile-text").html();
    const profileImg = $(this).find("img").attr("src");

    // Update contents of main card with selected member-card info
    $("#main-card").find("#name").text(profileName);
    $("#main-card").find("#title").text(profileTitle);
    $("#main-card").find("#bio").html(profileText);
    $("#main-card").find("img").attr("src", profileImg);

    $(".hidden-card").show();

    // Scroll user up to main-card
    $('html, body').animate({
      scrollTop: $("#main-card").offset().top
    })
  });

  // Hides the top selected card
  $(".closebtn").click(function() {
    $(".hidden-card").hide();
  });
  
});