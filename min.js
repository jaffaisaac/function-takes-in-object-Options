function createObj(name ,value ,options){
    let obj ={};
    obj.x =options.a;
    obj.y = options.b;
    obj.z =options.c;

    obj[name] =value;

    return obj

}

let options ={ 
    a :1 ,
    b:2,
    c:3
}
let testValue = createObj('text', 9 ,options);

console.log(testValue);