 let toastBox = document.getElementById('toastBox');
 let sucessmsg = ' <i class="fa-solid fa-circle-check"></i> Sucessfully submit';
 let errorsmsg = ' <i class="fa-solid fa-circle-xmark"></i>Please FIx the error';
 let invalidmsg = ' <i class="fa-solid fa-circle-exclamation"></i>Invalid input';
 

 let imgbox = document.getElementById('imgbox');
 function Showtoast(msg){
     let toast = document.createElement('div');
     toast.classList.add('toast');
     toast.innerHTML = msg;
     toastBox.appendChild(toast);

     if(msg.includes('error')){
        toast.classList.add('error');
     }
     if(msg.includes('Invalid')){
        toast.classList.add('invalid');
     }
     
 }
//  function ShowImage(){
//     let img = document.createElement('img');
//     img.classList.add('img');
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s';
//     imgbox.appendChild(img);
// }



