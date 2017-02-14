$(document).ready(function() {
    $("form").submit(function(event) {
      var name = $("#name").val();
      $(".name").text(name);

      var address = $("#address").val();
      $(".address").text(address);

      var time =  $("#time").val();
      $(".time").text(time);

      var color = $("#color").val();
      $(".color").text(color);

      var smoke =$("input:radio[name=smoke]:checked").val();
      $(".smoke").text(smoke);

      $("#response").show();

      event.preventDefault();
  });
});
