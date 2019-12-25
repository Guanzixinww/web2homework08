window.onload = function () {
    function adsorption() {
        var top = document.getElementById('top');
        var scrollTop = 0;
        window.onscroll = function () {
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > 450) {
                top.className = 'fixed';
            } else {
                top.className = 'top';
            }
        }
    }
    adsorption();
}