// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.makeALine = function(index) {
  this.setPosition((index * 20) + 50, 50);
};
  
Dancer.prototype.split = function(index) {
  if (index % 2 === 0) {
    this.setPosition((index * 20) + 50, 50);
  } else {
    this.setPosition((index * 20) + 50, $(window).width() - 100);
  }
};

Dancer.prototype.onMouseover = function() {
  // do some animation
  console.log('mouse');
  // this.$node.addClass('rotate');
  
  // set time out => this.step.bind(this)
};

// class Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     this.$node = $('<span class="dancer"></span>');
//     this.top = top > 50 ? top : 50;
//     this.left = left;
//     this.timeBetweenSteps = timeBetweenSteps;
//     this.step();
//     this.setPosition(top, left);
//   }
  
//   step () {
//     setTimeout(this.step.bind(this), this.timeBetweenSteps);
//   }
//   // this.step()
  
//   setPosition(top, left) {
//     let styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   }
  
//   makeALine(index) {
//     this.setPosition((index * 10) + 50, 50);
//   }
  
//   split(index) {
//     if (index % 2 === 0) {
//       this.setPosition((index * 10) + 50, 50);
//     } else {
//       this.setPosition((index * 10) + 50, 500);
//     }
//   }
// }


// let newDancer = new BlinckyDancer(1, 2, 1000);

// {   
//   node: '<span class="dancer"></span>'.
//   top, 1
//   left, 2
//   timeBetweenSteps: 1000,
// }

