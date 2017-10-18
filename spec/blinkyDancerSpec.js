describe('Pacman', function() {

  var pacman, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pacman = new Pacman(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pacman.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node travel to left', function() {
    sinon.spy(pacman.$node, 'css');
    pacman.step();
    expect(pacman.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pacman, 'step');
      expect(pacman.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pacman.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pacman.step.callCount).to.be.equal(2);
    });
  });
});
