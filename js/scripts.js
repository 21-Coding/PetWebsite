function pets () {
  //var admissions = parseInt($("#admissions").val());
  var animal =  parseInt($("#animal").val());
  //var food = parseInt($("#food").val());
  var total = animal;
  if (total === 2){
    return $('#hidden')
  }else if (total === 4){
    return $('#hidden')
  }else if (total === 6){
    return $('#hidden')
  }else{
    return $('#hidden')
  }
}
$(document).ready(function(){
  $("#pets").submit(function(){
     event.preventDefault();



  });
  console.log(pets());
});
