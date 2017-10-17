// class GumpyDancer extends Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     super(top, left, timeBetweenSteps);
//     }
//   // step 1: be veggie
//   // veggie methods go below
//   // they can be green
  
// }

var GrumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.$node.addClass('veggies'); 
};

GrumpyDancer.prototype = Object.create(Dancer.prototype);
GrumpyDancer.prototype.constructor = GrumpyDancer;

GrumpyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle('bounce');
};