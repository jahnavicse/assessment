h1=document.querySelector("#h")
img=[
    "cat1.jpg",
    "cat2.jpg",
    "dog1.jpg",
    "dog2.jpg",
    "dog3.jpg"
]
img.forEach((index) => {
  img=  Math.random()
});
document.innerHTML=img;
button.addEventListener('click',verify);


button.addEventListener('click',reset);
function verify(){
    package.innerHTML="congrats your picture verifed! you are human"
}