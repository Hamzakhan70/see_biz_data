let obj = {
  counter: 0,
  increment: function () {
    this.counter++;
  },

  decrement: function () {
    this.counter--;
  },

  reset: function () {
    this.counter = 0;
  },
};

function inc() {
  obj.increment();
  document.getElementById("para").innerHTML = obj.counter;
}
function dec() {
  obj.decrement();
  document.getElementById("para").innerHTML = obj.counter;
}
function res() {
  obj.reset();
  document.getElementById("para").innerHTML = obj.counter;
}
