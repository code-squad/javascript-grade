const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

var result = [];

for (key in widget) {
    // console.log(widget[key]);
    for (key2 in widget[key]) {
        // console.log(key2);
        // console.log(widget[key][key2]);
        if(typeof(widget[key][key2]) === "number") {
            result.push(key2);
            // console.log(key2);
        }
    }
    // console.log("---");
}

// console.log(result);

console.log(result);

// for (index in result) {
//     console.log(result[index]);
// }