
const arr = [
    {firstname : "Amy", lastname : "Jackson",age : 25 , city : "Toronto" },
    {firstname : "Ava", lastname : "Adams",age : 36 , city : "New York" },
    {firstname : "Nichole", lastname : "Nelson",age : 29 , city : "New York" },
    {firstname : "Alura", lastname : "Jonshon",age : 35 , city : "Toronto" },
    {firstname : "Eva", lastname : "Notty",age : 27 , city : "London" }
]

const output = arr.reduce((acc , curr)=>{

    if( acc[curr.city] ){
        acc[curr.city] += 1;
    }
    else acc[curr.city] = 1;

    return acc;
},{})

console.log(output);


// output.map(ele=> console.log(ele));
    

// const arr = [23 , 12, -100 , -10 , 100 , 1, 45];

// const output = arr.sort((a,b)=> a - b);

// output.map(ele=> console.log(ele));









































// async function getfact(){
//     try {
//         const url = "https://dog-api.kinduff.com//api/facts";
//         var data = await fetch(url);
//         var res = await data.json();
//         console.log(res.facts[0]);
//         // temp = res.facts[0]; 
//         return res.facts;
        
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// var fact = getfact();
// console.log(fact);
// // var str = fact.status;
// // document.write(str);

