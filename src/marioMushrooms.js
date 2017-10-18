var MarioMushroom = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('marioMushroom');
};

MarioMushroom.prototype = Object.create(Dancer.prototype);
MarioMushroom.prototype.constructor = MarioMushroom;

MarioMushroom.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle('bounce');
};