$(document).ready(function() {

  $('.card').click(function () {

    let selectedName = $(this).find(".profile-name").html();
    let selectedTitle = $(this).find(".profile-title").html();
    let selectedText = $(this).find(".text-container").html();
    let selectedImage = $(this).find(".head-shot").html();

    $(".modal-profile-name").html(selectedName);
    $(".modal-profile-title").html(selectedTitle);
    $(".modal-text-container").html(selectedText);
    $(".modal-head-shot").html(selectedImage);

    $(".modal").css({"display": "block"});
    $("body").css({"overflow": "hidden"});
  });

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("card");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var body = document.getElementsByTagName("body")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.style.overflow = "";
    }
  }
});
