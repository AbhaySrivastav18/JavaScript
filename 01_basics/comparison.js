// while comparing the data types should be the Same. 
// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

// this is because in an equality check == and comparison check >,<,>=,<= work differently.
// comparison convert null to a number, that is 0.
// that's why (3) null >=0 is true and (1) null>0 is false.

// data types
// primitive
    // String,boolean,number,string,bigint,null,undefined,Symbol

// Non-primitive
    // Array,object,functions


// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id===anotherId)