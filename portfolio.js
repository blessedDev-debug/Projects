const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200){
        backToTop.style.display = 'block';
    }
    else{
        backToTop.style.display = "none";
    };
});
backToTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


//-\\  sideNavigationSlider
const menuBtn = document.querySelector(".list")
const sidebar = document.querySelector(".side-nav")
const exit = document.querySelector('.exit')
const sidenavLinks = document.querySelectorAll('.side-links')


menuBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('close')
    menuBtn.classList.add('lst-btn')
    exit.classList.remove('ext')

})
exit.addEventListener('click', ()=>{
    sidebar.classList.add('close')
    menuBtn.classList.remove('lst-btn')
    exit.classList.add('ext')
    sidebar.display = 'none'
})
sidenavLinks.forEach(e =>(e.addEventListener('click', ()=> {
    sidebar.classList.add('close')
    menuBtn.classList.remove('lst-btn')
    exit.classList.add('ext')
})))