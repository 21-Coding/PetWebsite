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
         $('.panther','.rabbit', '.cheetah').hide();
      } else if (total == 4){
        $('.panther').show();
        $('.cheetah','.rabbit','.mufasa').hide();
      } else if (total == 6){
         $('#hidden');
      } else {
         $('#hidden');
      }
      return
    }

    pets();

  });

});
