(function() {
  var body, nav_toggles;

  body = $("body");

  nav_toggles = $(".open-nav, .close-nav");

  nav_toggles.click(function() {
    if (body.is(".nav-visible")) {
      body.removeClass("nav-visible");
    } else {
      body.addClass("nav-visible");
    }
    return false;
  });

}).call(this);
