/* TODO: 
  - add two dancer classes
  - add links for them in top bar
  - add tests for said dancers
  
  - add color for unique dancers
  - make them move in different ways
  - make them different sizes
  - not circles
  - maybe rotation?
  - make dancers react to mouseover


*/

$(document).ready(function() {
  window.dancers = [];

  $('.makeALine').on('click', function(event) {
    // let makeALine = $(this).data('makeALine');
    
    var setPositionAsLine = function() {
      window.dancers.forEach(function(dancer, index) {
        dancer.setPosition((index * 10) + 50, 50);
      });
    };
    
    setPositionAsLine();
  });
  
  $('.letsDoTheSplits').on('click', function(event) {
    // take all objects and split
    // loop through window.dancers
    //    if index is even
    //      set position to right side
    //.   else put it on left side
    var border = 50;
    
    var doingTheSplits = function() {
      window.dancers.forEach(function(dancer, index) {
        dancer.split(index);
      });
    };
    
    doingTheSplits();
  });
  
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

