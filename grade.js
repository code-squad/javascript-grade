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

function props(obj) {
  for (var keys in obj) {
    if (typeof (obj[keys]) !== 'number') {
      for (var val in obj[keys]) {
        if (typeof (obj[keys][val]) === 'number') {
          result.push(val);
        }
      }
    }
  }
  return result
}

console.log(props(widget));