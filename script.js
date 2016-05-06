$(document).ready();

/* Defining variables, div sizes and calling the function to make default grid */
var x = 4;
var z = x*x+x-1;
var $divSize = 100/x;

for (x; x<=z; x++) {
  makeGrid();
  highlight();
}

/* Button events */
$('#reset').click(function() {
  newGrid();
  highlight();
});
$('#color').click(function() {
  newGrid();
  color();
});
$('#trail').click(function() {
  newGrid();
  trail();
});
$('#reveal').click(function() {
  newGrid();
  reveal();
});
$('#fade').click(function() {
  newGrid();
  fade();
})

/* Create a new grid after button click function */
function newGrid () {
  $('.divGrid').remove();
  $('#container').css('background-image','none');
  x = parseInt(prompt("How many squares per row?"));
  z = x*x+x-1;
  $divSize = 100/x;
    for (x; x<=z; x++) {
    makeGrid();
  }
}

/* Change color on hover function */
function highlight() {
  $('.divGrid').hover(function() {
    $(this).addClass('divHover');
  })
}

/* Change multicolor on hover function
Random color code from
http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript */
function color() {
  $('.divGrid').hover(function() {
    $(this).css('background-color', '#'+Math.random().toString(16).substr(-6));
  })
}

/* Fade color on hover function */
function trail() {
  $('.divGrid').hover(function() {
    $(this).fadeToggle('slow');
  })
}

/* Reveal image underneath on hover function */
function reveal() {
  $('.divGrid').hover(function() {
    $(this).css('opacity',0.01);
    $('#container').css('background-image','url(doge.jpg)');
  })
}

/* Gradually fade on multiple hover passes function */
function fade() {
  $('.divGrid').hover(function() {
    var opacity = ($(this).css('opacity'));
    if (opacity > 0) {
      $(this).fadeTo('fast', opacity - 0.10)
    }
  })
}

/* Make initial grid function */
function makeGrid() {
  $('<div/>', {
    class: 'divGrid',
  }).appendTo('#container');
  $('.divGrid').width($divSize + '%').height($divSize + '%');
}
