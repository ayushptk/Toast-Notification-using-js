 let toastBox = document.getElementById('toastBox');
 let sucessmsg = ' <i class="fa-solid fa-circle-check"></i> Sucessfully submit  <i  class="fa-solid fa-circle-xmark" id="okaycircle"> ';
 let errorsmsg = ' <i class="fa-solid fa-circle-xmark"></i>Please FIx the error  <i  class="fa-solid fa-circle-xmark" id="okaycircle">';
 let invalidmsg = ' <i class="fa-solid fa-circle-exclamation"></i>Invalid input  <i  class="fa-solid fa-circle-xmark" id="okaycircle">';

 let imgbox = document.getElementById('imgbox');
 function Showtoast(msg){
     let toast = document.createElement('div');
     toast.classList.add('toast');
     toast.innerHTML = msg;
     toastBox.appendChild(toast);
   //   let cross = document.createElement('i');
   //   toast.classList.add('cross');
     
     if(msg.includes('error')){
        toast.classList.add('error');
     }
     if(msg.includes('Invalid')){
        toast.classList.add('invalid');
     }
     setTimeout(()=>{
        toast.remove();
     },3000);

     let cross = document.getElementById("okaycircle")
     cross.addEventListener('click',()=>{
      toast.remove();
      });
      let div = document.getElementsByTagName("div");
     
 }

 
//  function ShowImage(){
//     let img = document.createElement('img');
//     img.classList.add('img');
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s';
//     imgbox.appendChild(img);
// }




