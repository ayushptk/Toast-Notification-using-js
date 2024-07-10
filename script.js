 let toastBox = document.getElementById('toastBox');
 let sucessmsg = 'Sucessfully submit';
 let errorsmsg = 'Please FIx the error';
 let invalidmsg = 'Invalid input';
 

 let imgbox = document.getElementById('imgbox');
 function Showtoast(msg){
     let toast = document.createElement('div');
     toast.classList.add('toast');
     toast.innerHTML = msg;
     toastBox.appendChild(toast);
 }
//  function ShowImage(){
//     let img = document.createElement('img');
//     img.classList.add('img');
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s';
//     imgbox.appendChild(img);
// }



