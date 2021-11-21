document.addEventListener('DOMContentLoaded', function() {
    function changeBg() {
        var navbar = document.querySelector('header');
        var scrollValue = window.scrollY;
        if(scrollValue < 55){
            navbar.classList.remove('changeB');
        }else{
            navbar.classList.add('changeB');
        }
    }
    window.addEventListener('scroll', changeBg)
});