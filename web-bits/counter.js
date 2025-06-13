//assignment (week 1)

let count = 0;
function counter() {
  count += 1;
  process.stdout.write(`Counter: ${count}\r`);
}
setInterval(counter, 1000);
