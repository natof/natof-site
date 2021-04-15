$('.m-nav-toggle').click(function(e){
    e.preventDefault();
    $(".m-right").toggleClass("is-open");
    $(".m-nav-toggle").toggleClass("is-open");
});

const nav = document.querySelector('.skill-image')
window.addEventListener('scroll', () =>{
    if(window.scrollY > 424){
        nav.classList.add('scroll');
    }
})