function clock() {
  const p = new Date();
  let time = p.toLocaleTimeString();
  process.stdout.write(`${time}\r`);
}

setInterval(clock, 1000);
