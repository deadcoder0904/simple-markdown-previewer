$(document).ready(function () {
  $markdown = $('#markdown');
  $textarea = $('textarea');

  $markdown.html(marked($textarea.val()));

  $textarea.on('keyup',function () {
    $markdown.html(marked($textarea.val()));
  });

});