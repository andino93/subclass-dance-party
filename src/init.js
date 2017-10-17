$(document).ready(function() {
  window.dancers = [];

  $('.makeALine').on('click', function(event) {
    // let makeALine = $(this).data('makeALine');
    
    let setPositionAsLine = function() {
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
    let border = 50;
    
    let doingTheSplits = function() {
      window.dancers.forEach(function(dancer, index) {
        
        if (index % 2 === 0) {
          dancer.makeALine(index);
          // dancer.setPosition(((index + 1) * 10) + border, 1000);
        } else {
          dancer.setPosition((index * 10) + border, 150);
        }
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
    let dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    let dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    let dancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

