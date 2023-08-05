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
 

 
function sendButton(){
  let ch="your first Message !";
  
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
