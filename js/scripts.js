$(document).ready(function(){
  $("#pets").submit(function(){
    event.preventDefault();
    function pets () {
      //var admissions = parseInt($("#admissions").val());
      var animal =  $("#animal").val();

      //var food = parseInt($("#food").val());
      var total = animal;
      console.log(total);
      if (total == 2){
         $('.mufasa').show();
         $('.rabbit').hide();
         $('.cheetah').hide();
         $('.panther').hide();
      } else if (total == 4){
        $('.panther').show();
        $('.mufasa').hide();
        $('.rabbit').hide();
        $('.cheetah').hide();
      } else if (total == 6){
        $('.rabbit').show();
        $('.panther').hide();
        $('.mufasa').hide();
        $('.cheetah').hide();
      } else {
        $('.cheetah').show();
        $('.panther').hide();
        $('.mufasa').hide();
        $('.rabbit').hide();
      }
      return
    }

    pets();

  });

});
