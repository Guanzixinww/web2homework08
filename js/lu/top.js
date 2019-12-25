window.onload = function () {
    function adsorption() {
        var top = document.getElementById('top');
        var scrollTop = 0;
        window.onscroll = function () {
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > 50 && scrollTop < 1250 || scrollTop > 1900) {
                top.className = 'fixed';
            } else {
                top.className = 'top';
            }
        }
    }
    adsorption();
}