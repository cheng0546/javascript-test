const obj = {a: 100, b: 200, c: 300};
let map = new Map(Object.entries(obj));
console.log(map);
map.set("d", 200);

if (map.has("e")) {
    map.forEach((value, key) =>{
        console.log(value);
    });
} else {
    console.log("no that key");
}

for (let [key, value] of Object.entries(obj)) {
    console.log(key + " -> " + value);
}
