let count = 0;
function fun() {
  count++;
  console.log(count);
}
fun();
fun();
fun();

// Actually React work state and with variable it does not know how and when to rerender
// rerender will work same like call of the function is working call again and again but it depends upon the state not variable
