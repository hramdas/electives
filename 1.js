function runProgram(input) {
    input = input.trim().split(' ');
    a = Number(input[0])
    b = Number(input[1])

    console.log(a**b)


    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2 4`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  