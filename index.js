console.log("Hello World ");

let i = 5;

for (i; i >= 1; i--) {
  let line = "";
  for (let j = i; j >= 1; j--) {
    line += j + " ";
  }
  console.log(line);
}
