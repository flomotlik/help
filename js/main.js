$(function() {
  var enabled = Math.round($("li.disable").parent().prevAll().length / 2) - 1;
  $(".accordion").accordion({active : enabled, collapsible : true});
});