document.addEventListener('DOMContentLoaded', function () { //①

  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); //②

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () { //③

        var target = $el.dataset.target; //④
        var $target = document.getElementById(target); //④

        $el.classList.toggle('is-active'); //⑤
        $target.classList.toggle('is-active'); //⑤

      });
    });
  }
});
