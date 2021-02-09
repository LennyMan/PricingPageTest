

const btn = document.querySelector(".switch");
//const priceSize = document.querySelectorAll(".price");
const price1 = document.getElementById("b1");
const price2 = document.getElementById("b2");
const price3 = document.getElementById("b3");

                                       


let pp = 24;
btn.addEventListener("click", function(){
    
    btn.classList.toggle("slide");
    
    if(btn.classList.contains("slide")){
   price1.textContent = "$199.99";
   price2.textContent = "$249.99";
   price3.textContent = "$399.99";
    } else {
   price1.textContent = "$19.99";
   price2.textContent = "$24.99";
   price3.textContent = "$39.99";

    }
  
})
