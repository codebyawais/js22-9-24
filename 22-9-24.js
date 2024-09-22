let myArray = [ {name : 'awais' ,class : "bscs"} ,
                {name : 'ahmed' ,class : "BBA"}  ,
                {name : 'dawud' ,class : "BSSE"}
              ]

let requiredStudent;
console.log("BEFORE : " , requiredStudent);

myArray.map((item)=>{      if (item.name === "ahmed") {  requiredStudent = item.name      }})
    console.log("AFTER : " , requiredStudent);

