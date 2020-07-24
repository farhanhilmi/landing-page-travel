// subscribe
var subsBtn = document.querySelector(".subsBtn");

subsBtn.addEventListener('click', function(){
    var subscribing = document.querySelector(".subscribing");
    var message = document.querySelector(".message");
    var email = document.querySelector(".email");

    subscribing.classList.add("subscribing_active");
    subsBtn.classList.add("subsBtn_active");
    setTimeout(function(){
        email.classList.add("email_active");
    }, 1200);
    setTimeout(function(){
        message.classList.add("message_active");
    }, 1400);

    setTimeout(function(){
        message.classList.remove("message_active");
        email.classList.remove("email_active");
        subscribing.classList.remove("subscribing_active");
        subsBtn.classList.remove("subsBtn_active");
    }, 4000);
});


// Scroll back
var mybutton = document.getElementById("backBtn");
        
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


