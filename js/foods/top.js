window.onload = function () {
    function adsorption() {
        var top = document.getElementById('top');
        var scrollTop = 0;
        window.onscroll = function () {
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                top.className = 'fixed';
            } else {
                top.className = 'top';
            }
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementsByClassName("myBtn")[0].style.display = "block";
            } else {
                document.getElementsByClassName("myBtn")[0].style.display = "none";
            }
        }
    }
    adsorption();
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
