$(document).foundation();
$(function() {
   $('#questionTicker').vTicker();
   var skipQuestions = Math.floor((Math.random() * 189));
   for (var i = 0; i < skipQuestions; i++) {
      $('#questionTicker').vTicker('next', {animate:false});
   };
   $('#questionTickerContainer').addClass('qtcAnchor');
   FastClick.attach(document.body);
});
