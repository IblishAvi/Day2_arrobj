// 1. Array in JS.
let arrNum   = [ 11,14,15,20,25,30];
let arrStr   = ['Avi','rishu','Ananya','Bulbul', 'Samiksha' ,"Diksha","Bhaskar"];
let arrBool  = ['True','False','True','False','True','False'];
let arrList  = ['Avi',21,'Priya',16,'Rishu',24,'Ananya',22];
// console.log(arrNum);
// console.log(arrStr);
// console.log(arrBool);
// console.log(arrList);

// console.table(arrNum,arrStr,arrBool,arrList);
// 2. Insertion in Array.
// At begining.

// arrNum.unshift(8);
// arrStr.unshift(8);
// arrBool.unshift(8);
// arrList.unshift(8);
// console.log(arrNum);
// console.log(arrStr);
// console.log(arrBool);
// console.log(arrList);

// At middle.

// arrStr.splice(1,0,"Prerna");
// arrBool.splice(1,0,"Prachi");
// arrList.splice(1,0,"Pragya");
// console.log(arrStr);
// console.log(arrBool);
// console.log(arrList);


// At end.

// arrStr.push('Shanky');
// arrBool.push('Leo');
// arrList.push('Kaduva');
// console.log(arrStr);
// console.log(arrBool);
// console.log(arrList);

// 
// 3. deletion in Array.
// console.log(arrStr);

// arrStr.pop();
// console.log(arrStr);

// arrStr.shift();
// console.log(arrStr);

// arrStr.splice(2,1);
// console.log(arrStr);




// 4. searching in array.
// let a = arrNum.includes(25);
// let b = arrNum.indexOf(50);
// let c = arrList.includes('Ananya')
// console.log(a,b,c)


// 5. filtering in array.
let filtered  = arrNum.filter((value) =>{
    if(value>20)
        console.log(value);
        
})

// 6. map function .

// 7. arrow function.
// let filtering  = arrStr.filter((value) =>{
//     if(value.includes('Ananya'))
//     console.log(value);
        
// })
// 8. sorting in array.
// arrList.sort()
// console.log(arrList);
// arrNum.sort()
// console.log(arrNum);
// arrStr.sort()
// console.log(arrStr);
// arrList.reverse()
// console.log(arrList);



// 9. Combining and slicing  arrays.
// let combine = arrList.concat(arrStr)
// console.log(combine);
// console.table(combine)
// let sliced = arrStr.slice(1,3);
// console.log(sliced);

// let ar = arrNum.slice(3,7);
// console.log(ar);




//10. emptying an array.

// arrStr =[]
// console.log(arrStr);
// arrBool.length =0;
// console.log(arrBool);
// arrList.splice(0,arrList.length)
// console.log(arrList);



//11. join two arrays.

//12. spread operator.

//13. Reducing an array.
//14. chaining in array

//15. inbuild method in Array  for data manupulation.

// Inbuilt-Object String:-String is a primitive type as well as  inbuilt object type it depends on syntax so Various method in string is 
// used to manupulate data whenever required .

//String obj manipulation

// let Newstring = new String("Avi")

//date object

let mydates = new Date();
// console.log(mydates.toDateString());
// console.log(mydates.toLocaleDateString());
// console.log(mydates.toLocaleTimeString());
// console.log(mydates.toLocaleString());
// console.log(mydates.toString());
// console.log(mydates.toISOString());
// console.log(mydates.toJSON());
// console.log(mydates.toTimeString());
// console.log(mydates.getDate());
// console.log(mydates.getDay()+1);
// console.log(mydates.getFullYear());
// console.log(mydates.getMilliseconds());
// console.log(mydates.getTime());









