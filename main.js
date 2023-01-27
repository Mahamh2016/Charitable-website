// let userInput=document.querySelector("[name='username']");
// let IDInput=document.querySelector("[name='ID']");
// let phoneInput=document.querySelector("[name='Phone']");

// $(document).on('click','#navbarToggler',function(e) {
//     if( $(e.target).is('a') ) {
//         $(this).collapse('hide');
//     }
// });

// document.body.addEventListener('click', (() => {        
//     let toggle = document.getElementById('navbarToggler')
//       if (!toggle.classList.contains('collapsed')) {
//         const bsCollapse = new bootstrap.Collapse(menuToggle)
//         bsCollapse.toggle()            
//       }
//     }), true)

// const $navbarNav = $("#navbarNavDropdown");
// if ($navbarNav) {
//   const navbarNavCollapse = (event) => {
//     if (!$navbarNav.is(event.target) && $navbarNav.has(event.target).length === 0) {
//       $navbarNav.collapse('hide');
//       document.removeEventListener("mouseup", navbarNavCollapse);
//     }
//   }

//   $navbarNav.on("shown.bs.collapse", () => {
//     document.addEventListener("mouseup", navbarNavCollapse);
//   });
// }
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

// document.addEventListener("DOMContentLoaded",function() {
//     document.querySelector(".navbar-toggler").addEventListener("blur", function (event) {
//         var screenWidth = window.innerWidth;
//         if (screenWidth < 768) {
//             document.querySelector(".navbar-nav").collapse;
//         }
//     });
// });


// $(function(){
//         $("#navbarToggler").blur(function(event){
//                 var screenwidth = window.innerWidth;
//                 if(screenwidth < 768){
//                     $("navbarSupportedContent").collapse('hide');
//                 }
//         });
// });


// function manage(textt) {
//     var bt = document.getElementById('submitBtn');
//     if (textt.value ==='') {
//         bt.disabled = true;
//     }
//     else {
//         bt.disabled = false;
//     }
// }   

// let manage = (textt) => { 
//         	let bt = document.getElementById('submitBtn');
//             if (textt.value != '') {
//                 bt.disabled = false;
//             }
//             else {
//                 bt.disabled = true;
//             }
//         }
// function manage(txt) {
//     var bt = document.getElementById('submit');
//     var ele = document.getElementsByTagName('input'); 

//     // Loop through each element.
//     for (i = 0; i < ele.length; i++) {

//         // Check the element type.
//         if (ele[i].type == 'text' && ele[i].value == '') {
//             bt.disabled == true;    // Disable the button.
//             return false;
//         }
//         else {
//             bt.disabled == false;
//                // Enable the button.
//         }
//     }
// }

// window.onload=function(){
// userInput.focus();
// };
//  document.forms[0].onsubmit=function(e){
   
//         let uservalidate=false;
//         let IDvalidate=false;
//         let phonevalidate=false;
//     console.log(userInput.value.length);
//      if(userInput.value ==="" ){
    
//         uservalidate=true;

//     }
//     else if(IDInput.value.length ===14) {
   
//         IDvalidate=true;
//     }
//     else if(phoneInput.value.length ===11){
    
//         phonevalidate=true;
//     }
//     else if(uservalidate===true && IDvalidate===true && phonevalidate===true){
//     console.log(phoneInput);
   
        
//     }
//     else if(uservalidate===false || IDvalidate===false || phonevalidate===false){
    
//         e.preventDefault();
//     }
// };
// document.querySelector(".btn").onclick=function(e)
// {
//     window.open("home.html","_self");
// }
