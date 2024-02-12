
let obj1 = {
    a: 10,
    b: 20,
    c: 30,
}

let obj2 = {
    x:10,
    y:20,
}

let obj3 = {} 

for(let t in obj1){
    obj3[t] = obj1[t] 
}
for(let t in obj2){
    obj3[t] = obj2[t] 
}

console.log(obj3)









// delete a key from an object 
// delete obj.c

// console.log(obj)
