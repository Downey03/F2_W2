/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

  let ans = [];
    arr.map(x => {
        if(x["profession"]=="developer")  ans.push(x);
    })
    console.log(ans)
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {

  let ans = []
    arr.forEach(x => {
      if(x["profession"]=="developer")  ans.push(x);
    })
    console.log(ans)
  //Write your code here , just console.log
}

function addData() {

    let obj = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(obj);
    console.log(arr)
  //Write your code here, just console.log
}

function removeAdmin() {

  
  console.log(arr.filter(x => x["profession"]!="admin"))
  //Write your code here, just console.log
}

function concatenateArray() {

  let arr1 = [
    { id: 4, name: "karthick", age: "22", profession: "tester" },
    { id: 5, name: "jero", age: "30", profession: "designer" },
    { id: 6, name: "mani", age: "25", profession: "UI" },
  ];

  for( x of arr1) arr.push(x)

  console.log(arr)
  //Write your code here, just console.log
}
