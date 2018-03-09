var data = [{title : "hello", content : "간지철철", price : 12000},
    {title : "crong", content : "괜춘한 상품", price : 5500},
    {title : "codesquard", content : "쩌는 상품", price : 1200}];

// data.forEach(v => console.log(v.title, v.content));
var newData = data.map(function(v) {
    return v.price * 1.1;
});

console.log(newData);