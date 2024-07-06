 let toastBox = document.getElementById('toastBox');
 let imgbox = document.getElementById('imgbox');
 function Showtoast(){
     let toast = document.createElement('div');
     toast.classList.add('toast');
     toast.innerHTML = 'You have successfully logged in!';
     toastBox.appendChild(toast);

 }
//  function ShowImage(){
//     let img = document.createElement('img');
//     img.classList.add('img');
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s';
//     imgbox.appendChild(img);
// }
