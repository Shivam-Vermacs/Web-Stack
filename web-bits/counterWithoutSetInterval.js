let count = 0;
function updateCounter() {
  count += 1;
  process.stdout.write(`Counter:${count}\r`);
  setTimeout(updateCounter, 1000);
}
updateCounter();
