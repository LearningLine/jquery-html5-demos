
onmessage = function (e) {
    if (e.data.command === "start") {
        var result = 0;

        for (var i = 0; i < 9999999; i++) {
            result += i;
        }

        postMessage({ status: "done", result: result });
    }
}
