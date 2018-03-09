
var data = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-2786-9902",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-3923-1333",
        "type": "kt",
        "childnode": [{
            "id": 115,
            "name": "hary",
            "phone": "010-2786-9302",
            "type": "sk",
            "childnode": [{
                "id": 1159,
                "name": "pobi",
                "phone": "010-9302-0009",
                "type": "kt",
                "childnode": [{
                    "id": 11592,
                    "name": "cherry",
                    "phone": "010-1223-9932",
                    "type": "lg",
                    "childnode": []
                },
                    {
                        "id": 11595,
                        "name": "solvin",
                        "phone": "010-534-7843",
                        "type": "sk",
                        "childnode": []
                    }
                ]
            }]
        },
            {
                "id": 116,
                "name": "kim",
                "phone": "010-3796-1102",
                "type": "kt",
                "childnode": [{
                    "id": 1168,
                    "name": "hani",
                    "phone": "010-1223-6713",
                    "type": "sk",
                    "childnode": [{
                        "id": 11689,
                        "name": "ho",
                        "phone": "010-4434-4534",
                        "type": "kt",
                        "childnode": [{
                            "id": 116890,
                            "name": "wonsuk",
                            "phone": "010-3434-1302",
                            "type": "kt",
                            "childnode": []
                        },
                            {
                                "id": 1168901,
                                "name": "chulsu",
                                "phone": "010-3100-9841",
                                "type": "sk",
                                "childnode": []
                            }
                        ]
                    }]
                }]
            },
            {
                "id": 117,
                "name": "hong",
                "phone": "010-2786-9902",
                "type": "lg",
                "childnode": []
            }
        ]
    }]
}];

var arrays = [];

function checkChildNode(array) {
    // console.log("HELLO FUNCTION");
    let type, name;
    // for (index in array) {
    //     console.log(array[index].type);
    //     type = array[index].type;
    //     name = array[index].name;
    // }
    var obj = {type : array.type, name : array.name};
    arrays.push(obj);
}

// for (index in data) {
//     console.log(data[index].type);
//     if(data[index].type === "sk") {
//         checkChildNode(data[index]);
//     } else {
//         console.log(data[index].childnode);
//     }
// }

checkChildNode(data[0]);
var childnode = data[0].childnode;

while (true) {
    for (var i=0; i < childnode.length; i++) {
        if (childnode[0].type === "sk") {
            checkChildNode(childnode[0]);
        } else {
            continue;
        }
    }

    console.log(childnode[0]);
    childnode = childnode[0].childnode;
}

// console.log(data.length);
// console.log(data[0], data[1]);
// var childnode = data[0].childnode;
// console.log("---");
// console.log(childnode);
// console.log("---");
// console.log(childnode[0].childnode);
// console.log(childnode[0].childnode.length);

console.log(arrays);
























