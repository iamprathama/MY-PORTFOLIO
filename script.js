
//     const texts = [
//         'Pratham Agrawal',
//         'A Web Developer',
//         'A Graphic Designer',
//         'A Creative Coder',
//         'A Problem Solver'
//     ];

//     let textIndex = 0;

//     function changeText() {
//         const textElement = document.getElementById('name');

      
//         textElement.classList.add('fade');

//         setTimeout(() => {
//             textElement.textContent = texts[textIndex];
//             textElement.classList.remove('fade');
//             textElement.classList.add('show');

//             textIndex = (textIndex + 1) % texts.length;
//         }, 200); 
//     }

  
//     setInterval(changeText, 3000);
//     changeText();
//     const menuIcon = document.getElementById('menu-icon');
//     const navbar = document.querySelector('.navbar');
    
  
//     menuIcon.onclick=()=>{
//         menuIcon.classList.toggle('fa-xmark');
//         navbar.classList.toggle('active');
//     };
//     let sections =document.querySelectorAll('section');
//     let navlinks=document.querySelectorAll('header nav a');
//     window.onscroll=()=>{
//         sections.forEach(sec=>{
//             let top=window.scrollY;
//             let offset=sec.offsetTop-150;
//             let height=sec.offsetHeight;
//             let id=sec.getAttribute("id");
//             if(top>=offset && top<offset+height){
//                 navlinks.forEach(links=>{
//                     links.classList.remove('active');
//                     document.querySelector('header nav a[href*='+ id +']').classList.add('active');
//                 });
//             };
//         });
// let headers=document.querySelector('header');
// headers.classList.toggle('sticky',window.scrollY > 100);
// menuIcon.classList.remove('fa-xmark');
// navbar.classList.remove('active');
//     }
// Array of texts for dynamic change
const texts = [
    'Pratham Agrawal',
    'A Web Developer',
    'A Graphic Designer',
    'A Creative Coder',
    'A Problem Solver'
];

let textIndex = 0; // To track the current text in the array

function changeText() {
    const textElement = document.getElementById('name');

    // Apply the fade-out effect first
    textElement.classList.add('fade');

    // Change the text after the fade-out effect
    setTimeout(() => {
        textElement.textContent = texts[textIndex];
        textElement.classList.remove('fade');
        textElement.classList.add('show');

        // Update the index for the next text change
        textIndex = (textIndex + 1) % texts.length;
    }, 200); // 0.6 second for the fade-out effect
}

// Change the text every 4 seconds
setInterval(changeText, 3000); // Change text every 4 seconds (adjustable)

// Call the changeText function initially when the page loads
changeText();

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove the 'fa-xmark' class and 'active' class when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});


