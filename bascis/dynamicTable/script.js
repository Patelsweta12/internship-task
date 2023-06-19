const url = "http://localhost:3000/students"
fetch(url)
.then(res=>
    res.json()
)
.then(data=>{
    document.getElementById("table")
    let tableData='';
    tableData +=`<thead>`
    tableData +=`<tr>`
    for(let key in data[0]){
        tableData +=`<th> ${[key]} </th>`
        
    }
    tableData +=`</tr>`
    tableData +=`</thead>`
    tableData +=`<tbody>`
    data.forEach(element => {
        tableData +=`<tr>`
        for(let value in element){
           
            tableData += `<th> ${element[value]}</th>`
           
        }
        tableData +=`</tr>`
        
    });
    tableData +=`</tbody>`



    table.innerHTML = tableData;
}).catch(err=>{console.log("error",err)})


