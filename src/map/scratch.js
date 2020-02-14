const correctForOutOfBounds = (value, axis) => {
  if (axis === 'x') {
    if (value > window.innerWidth) {
      return 2 * window.innerWidth - value;
    } else if (value < 0) {
      return -value;
    }
  } else if (axis === 'y') {
    if (value > window.innerHeight) {
      return 2 * window.innerHeight - value;
    } else if (value < 0) {
      return -value;
    }
  };
};

correctForOutOfBounds(-2, 'x');
