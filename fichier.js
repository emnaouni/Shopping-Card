
 let pl= document.getElementsByClassName('fa-plus');
 let mn=document.getElementsByClassName('fa-minus');
 let del=document.querySelectorAll('.fa-times');
 let hearts=document.querySelectorAll('.fa-heart');

// S7iiiiiiiiiiiiiiiiiiiiiiiiiii7
// del.forEach( element => {
//   element.addEventListener("click" ,e=> {
//     // var row = element.parentNode.parentNode;
//     // row.parentNode.removeChild(row);
//     element.parentElement.parentElement.remove()
//   })
// })

for(let i =0; i < del.length; i++){
  del[i].addEventListener('click', function(){

    if(hearts[i].className === 'fas fa-heart red-heart'){
      alert("You can not delete this product, unless you dislike it!")
    }else{
      del[i].parentElement.parentElement.remove()
    }
  })

}

hearts.forEach(heart => {
  heart.addEventListener('click', function(e){
    e.target.classList.toggle('red-heart')
  })
})


    

    Array.from(pl).forEach(element => {
       element.addEventListener("click", e => {
         element.nextElementSibling.innerHTML++;
        let x= element.parentNode.nextSibling.nextSibling.innerHTML;
        console.log(x);
        let price=x.replace('$','');
        console.log(price);
        let y=  document.querySelector("#total").innerHTML.replace('$','');
        console.log(y);
        z=parseInt(y)+parseInt(price);
        console.log(z);
        document.querySelector("#total").innerHTML=z +"$";
       });
     });
     Array.from(mn).forEach(element => {
       element.addEventListener("click" , e => {
         if(element.previousElementSibling.innerHTML <= 0){
          element.previousElementSibling.innerHTML = 0
         }else{
           element.previousElementSibling.innerHTML--;
           let x= element.parentNode.nextSibling.nextSibling.innerHTML;
           console.log(x);
           let price=x.replace('$','');
           console.log(price);
           let y=  document.querySelector("#total").innerHTML.replace('$','') ;
           console.log(y);
           z=parseInt(y)-parseInt(price);
           console.log(z);
           document.querySelector("#total").innerHTML=z +"$";
          }
           
       });
     });