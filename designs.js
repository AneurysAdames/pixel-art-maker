$("document").ready(function() {

  // Select color input
  let color = $('#colorPicker').val();

  // Select size
  let rows = $('#inputHeight').val();
  let cols = $('#inputWidth').val();

  // When size is submitted by the user,
  // the grid is cleared and the function makeGrid() is called
  $('input[type="submit"]').click(function(event) {
    event.preventDefault();
    $('tr').remove();
    makeGrid();
  });

  // Creates a grid
  function makeGrid() {
    let rows = $('#inputHeight').val();
    let cols = $('#inputWidth').val();

    for (let i = 1; i <= rows; i++) {
      $('table').append('<tr></tr>');
      for (let j = 1; j <= cols; j++) {
        $('tr:last').append('<td></td>');
      }
    }
    event.preventDefault();

    // Assigns 'td' the class of 'cells'
    $('td').attr("class", 'cells');

    // Saves color selected by user in var color
    // and allows user to color the cells they click on
    $('.cells').click(function(event) {
      var color = $('#colorPicker').val();
      $(event.target).css('background-color', color);
    });
  }
});
