module.exports = function reverse(n) {
  return String(n)
    .split('')
    .filter((item) => item !== '-')
    .reverse()
    .join('');
};
