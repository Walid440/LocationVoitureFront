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
  let ch="your first Message !";
  document.getElementById("msgStart").innerHTML='<p class="botText"><span>'+ch+'</span><p>';
 

 
$("#chat-timestamp").append(times);
document.getElementById("userInput").scrollIntoView(false);
       
    }
  
  })

  
}


