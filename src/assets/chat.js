

function c() {
  var coll = document.getElementById("s1");
  var coll2 = document.getElementById("s2");
  var coll3 = document.getElementById("s3");
  var coll4 = document.getElementById("s4");
  var coll5 = document.getElementById("s5");
  var isChecked = document.getElementById("star1").checked;
  if (isChecked) {
    coll.addEventListener("click", function() {

 
 

    document.getElementById("s1").style.color = "yellow";
    
  
});}  
coll2.addEventListener("click", function() {
 
  var isChecked1 = document.getElementById("star2").checked;
 
  if (isChecked1) {
    document.getElementById("s1").style.color = "yellow";
    document.getElementById("s2").style.color = "yellow";
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
  
 
  function heartButton(){
  
    let UserHtml='<p class="fas fa-heart" style="color:red;"></p>';
  $("#chatbox").append(UserHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
 
 

  }
  
 
function sendButton(){
  let ch="";
  
let val= $("#textInput").val(); 
if(val=="hello")
{
 ch= "Hiiiiiiii!";
}
else if(val=="cv"){
  ch="vous etes les bienvenue!!!"

}
let UserHtml='<p class="botText"><span>'+val+'</span></p>';
 

 
$("#chatbox").append(UserHtml);
$("#chatbox").append(ch); 
$("#textInput").val(""); 
 //document.getElementById("chat-bar-bottom").scrollIntoView(true);

 

    
  
  
// document.getElementById("chat-bar-bottom").scrollIntoView(true);

 //document.getElementById("userInput").scrollIntoView(true);
}



}
