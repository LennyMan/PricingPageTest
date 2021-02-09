

const btn = document.querySelector(".switch");

const price1 = document.getElementById("b1");
const price2 = document.getElementById("b2");
const price3 = document.getElementById("b3");

                                       



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
  
});

const box = document.querySelectorAll(".box");
let boxBtn = document.querySelector


box.forEach(function(e){
    e.addEventListener("mouseover", function(){
    
    console.log("aa");
        let boxBtn = e.querySelector("button");
        
        boxBtn.style.background = "white";
        boxBtn.style.color = "black";

    
})   
})
box.forEach(function(e){
    e.addEventListener("mouseout", function(){
    
    console.log("aa");
        let boxBtn = e.querySelector("button");
        
        boxBtn.style.background = "hsl(236, 72%, 79%)";
        boxBtn.style.color = "white";
})   
})

