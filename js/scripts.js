function pets () {
  //var admissions = parseInt($("#admissions").val());
  var animal =  parseInt($("#animal").val());
  //var food = parseInt($("#food").val());
  var total = animal;
  if (total === 2){
     $('#hidden','#mufasa').show();
     $('#panther','#rabbit', '#cheetah').hide();
     console.log(2);
  }else if (total === 4){
     $('#hidden');
  }else if (total === 6){
     $('#hidden');
  }else if(total === 8){
     $('#hidden');
  }
  return
}
$(document).ready(function(){
  $("#pets").submit(function(){
     event.preventDefault();

pets();

  });

});
