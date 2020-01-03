"use strict";

$(document).ready(function() {
  $(".view-details").click(function(a) {
    var b = a.target,
      c = $(b)
        .parent()
        .parent()
        .children(".details");
    $(c).is(":visible") === !0 ? ($(c).hide(), $(b).text("Backstory	»")) : ($(c).show(), $(b).text("Hide details »"));
  });
});
