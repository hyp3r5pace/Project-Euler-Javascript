function processData(input) {
    input = input.split("\n");
    var sum=0;
    for(var i=1;i<input.length;i++){
        sum+=Number(input[i]);
    }
    let result = Number(String(sum).replace(/\./g, "").slice(0, 10));
    console.log(result);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});