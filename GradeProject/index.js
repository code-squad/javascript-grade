function run() {
    setTimeout(function() {
        var msg = "hello codesuqard";
        console.log(msg); // 이 메세지는 즉시 실행되지 않습니다
    }, 2000);
}

console.log("start");
run();
console.log("end");

