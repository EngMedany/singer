$('.openNav').click(function(){
    
    $(".openNav").css("padding-left","260px")
    $(".openNav").css("transition","padding-left,600ms")
    $("#leftMenu").animate({width:"250px"},600)
    $("#leftMenu").css("display","block")
    
    
})

$(".btn-close").click(function(){
    $("#leftMenu").css("display","none")
    $(".openNav").css("padding-left","20px")


})

$("#leftMenu a").click(function(){
    
    let section= $(this).attr("href");
    
    
    let positionTop = $(section).offset().top;
    
    $("html , body").animate({scrollTop:positionTop},1000);
    
})


$('#slider .accordian-header').click(function(){
    $('.accordian-body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});



let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


let x = setInterval(function() {


  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("days").innerHTML = days + " d " ;
  document.getElementById("hours").innerHTML=hours+" h "
  document.getElementById("minutes").innerHTML=minutes+" m "
  document.getElementById("seconds").innerHTML=seconds+" s "

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



let counter=100
$('textarea').keyup(function(){
    var length=$(this).val().length;
    var remainChar=counter-length
    if(remainChar<=0){
        $("p.counterr").css("font-size","16px")
        $("#counter").text("your available character finished Characyer Reamining")

    }else{
        $('#counter').text(remainChar)
    }
})


