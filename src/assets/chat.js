 
 
   var mainImg = document.getElementById('main');
   var smallImgs = document.getElementsByClassName('smal-img');

   for (var i = 0; i < smallImgs.length; i++) {
       smallImgs[i].addEventListener("click",function(event){

        
           mainImg.src = event.target.src;
           this.classList.toggle('active');
           //this.classList.toggle('opaque');

       });
   }
  function heartButton(){
  
    let UserHtml='<p class="fas fa-heart" style="color:red;"></p>';
  $("#chatbox").append(UserHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
 
 

  }
  

 
function sendButton(){
  let ch="";
  
let val= $("#textInput").val(); 
if(val=="bonjour")
{
 ch= "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
}
else if(val=="cv"){
  ch="Je vais bien, merci ! Comment puis-je vous assister dans la recherche, la vente ou l'échange de votre voiture ?"

}
else if (val.toLowerCase().includes("recherche") || val.toLowerCase().includes("trouver")) {
  ch = "Bien sûr, je peux vous aider à trouver la voiture parfaite. Pourriez-vous me donner plus de détails sur le modèle, l'année ou la marque que vous recherchez ?";
} else if (val.toLowerCase().includes("vendre") ||  val.toLowerCase().includes("mettre en vente")) {
  ch = "Si vous souhaitez vendre votre voiture, je peux vous fournir des conseils sur la mise en vente et vous aider à trouver des acheteurs potentiels.";
} else if (val.toLowerCase().includes("échange") || val.toLowerCase().includes("changer")) {
  ch = "L'échange de voiture peut être une excellente option. Pourriez-vous me donner plus d'informations sur le type de voiture que vous avez et celle que vous recherchez ?";
} else {
  ch = "Je suis désolé, je n'ai pas compris. Pouvez-vous reformuler votre question ?";
}
let value='<p style="background-color:blue; color:black;border-radius:2px  5px 5px 5px;"><span>'+val+'</span></p>';
let ch1='<p style="background-color:gray; color:white;border-radius:2px  5px 5px 5px;"><span>'+ch+'<span></span></p>';
let load='<p class="spinner-border text-danger me-2">load </p>';
 
 

$("#chatbox").append(value); 
  setTimeout(() => {
   $("#chatbox").append(load);
  
 }, 1000);
setTimeout(() => {
  $("#chatbox").find('.spinner-border').remove();
   $("#chatbox").append(ch1);

}, 2000);



 

 
$("#textInput").val(""); 
  
 

    
 
  
// document.getElementById("chat-bar-bottom").scrollIntoView(true);

 //document.getElementById("userInput").scrollIntoView(true);
}
var coll=document.getElementsByClassName("col2");

for (let i=0;i<coll.length;i++)
{
  coll[i].addEventListener("click",function(){
    this.classList.toggle("active");
    const content = document.querySelector('.content2');
    if (content.style.maxHeight) {
    content.style.maxHeight = null;   
     }
    else  {  
       
content.style.maxHeight = content.scrollHeight + 'px';
 



var coll1=document.getElementsByClassName("textInput");

for (let i=0;i<coll1.length;i++)
{
  coll1[i].addEventListener("keypress",function(e){
    this.classList.toggle("active");
    const content = document.querySelector('.content');
  
   
    if(e.key=="Enter")
    { 
   sendButton();
    }
  })}






 const day=new Date();
 const hours=day.getHours();
 const minutes=day.getMinutes();
 const secondes=day.getSeconds();
 if(hours<10)
 {
  hours="0"+hours;
 }if(minutes<10)
 {
  minutes="0"+minutes;
 }
  
let times=hours+":"+minutes;


$("#chat-timestamp").append(times);
document.getElementById("userInput").scrollIntoView(false);
     
    
 
 

}
  
  })
}


var coll=document.getElementsByClassName("collapsible");

for (let i=0;i<coll.length;i++)
{
  coll[i].addEventListener("click",function(){
    this.classList.toggle("active");
    const content = document.querySelector('.content');
    if (content.style.maxHeight) {
    content.style.maxHeight = null;   
     }
    else  {  
       
content.style.maxHeight = content.scrollHeight + 'px';
 



var coll1=document.getElementsByClassName("textInput");

for (let i=0;i<coll1.length;i++)
{
  coll1[i].addEventListener("keypress",function(e){
    this.classList.toggle("active");
    const content = document.querySelector('.content');
  
   
    if(e.key=="Enter")
    { 
   sendButton();
    }
  })}






 const day=new Date();
 const hours=day.getHours();
 const minutes=day.getMinutes();
 const secondes=day.getSeconds();
 if(hours<10)
 {
  hours="0"+hours;
 }if(minutes<10)
 {
  minutes="0"+minutes;
 }
  
let times=hours+":"+minutes;


$("#chat-timestamp").append(times);
document.getElementById("userInput").scrollIntoView(false);
     
    
 
 

}
  
  })
}

function c() {
  var coll = document.getElementById("s1");
  var coll2 = document.getElementById("s2");
  var coll3 = document.getElementById("s3");
  var coll4 = document.getElementById("s4");
  var coll5 = document.getElementById("s5");

 
  
    coll.addEventListener("click", function() {

  var isChecked1 = document.getElementById("star1").checked;
 
 if (isChecked1) {
   
    document.getElementById("s1").style.color = "yellow";

    }
  
});
coll2.addEventListener("click", function() {
 
  var isChecked1 = document.getElementById("star2").checked;
 
  if (isChecked1) {
    
    document.getElementById("s2").style.color = "yellow";
   document.getElementById("s1").style.color = "yellow";
}
});

coll3.addEventListener("click", function() {
 
  var isChecked3 = document.getElementById("star3").checked;
 
  if (isChecked3) {
    document.getElementById("s1").style.color = "yellow";
    document.getElementById("s2").style.color = "yellow";
    document.getElementById("s3").style.color = "yellow";
  }  
});
coll4.addEventListener("click", function() {
 
  var isChecked4 = document.getElementById("star4").checked;
 
  if (isChecked4) {
    document.getElementById("s1").style.color = "yellow";
    document.getElementById("s2").style.color = "yellow";
    document.getElementById("s3").style.color = "yellow";
    document.getElementById("s4").style.color = "yellow";
  }  
});
 
 
coll5.addEventListener("click", function() {
 
  var isChecked5 = document.getElementById("star5").checked;
 
  if (isChecked5) {
    document.getElementById("s1").style.color = "yellow";
    document.getElementById("s2").style.color = "yellow";
    document.getElementById("s3").style.color = "yellow";
    document.getElementById("s4").style.color = "yellow";
document.getElementById("s5").style.color = "yellow";
  }  
});
 
 }
 
document.getElementsByClassName("carousel").hidden=true;


function load() {
 
  var searching = document.getElementById("search");
  var searchItems = document.getElementsByClassName("progress-bar");
  searching.addEventListener("click", function() {
    for (var i = 0; i < searchItems.length; i++) {
      searchItems[i].style.width = "1200px";
      searchItems[i].style.secondes = "2s";
      document.getElementsByClassName("carousel").hidden=false;

      // Crée un nouvel intervalle et stocke son ID dans un attribut de données
   
  setTimeout(function(){
 
        document.getElementById("bar").hidden=true;
        document.getElementById("carousel").hidden=false;
        searchItems.style.width = "300px";

    

   },1000);

   
     }
  });
  

function load() {

  var searching = document.getElementById("search");
  var searchItems = document.getElementsByClassName("progress-bar");
  searching.addEventListener("click", function() {
    for (var i = 0; i < searchItems.length; i++) {
      searchItems[i].style.width = "1200px";
      searchItems[i].style.secondes = "3s";
      document.getElementById("ng").hidden=true;

      // Crée un nouvel intervalle et stocke son ID dans un attribut de données
 

      
     }
  });
  
 
  
   
}



 

}