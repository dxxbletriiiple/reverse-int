module.exports = function reverse(n) {
    if (n < 0) n = -n;
    n += "";
    n = n.split("").reverse().join("");
    return n - 0;
};
