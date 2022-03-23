const getConstrastingColor = (color, level) => {
  //Write your code here.
  // feel free to use console.log() for debugging purposes
};

const calculateRelativeLuminance = (red, green, blue) => {
  const colors = [red / 255, green / 255, blue / 255];
  let [R, G, B] = colors.map((color) => {
    if (color <= 0.03928) {
      return color / 12.92;
    } else {
      return Math.pow((color + 0.055) / 1.055, 2.4);
    }
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

module.exports = getConstrastingColor;
