const url = "http://localhost:3000/employee";
fetch(url)
  .then(res =>
    res.json())
  .then(data => {
    console.log(data);
      document.getElementById("table")
    let tableData = ''
    tableData += `<thead>`
    tableData += `<tr>`
    for (let key in data[0]) {
      tableData += `<th> ${[key]}</th>`
      
    }
    tableData += `<th> Action </th>`
    tableData += `</tr>`
    tableData += `</thead>`
    tableData += `<tbody>`
    data.forEach((element) => {
      tableData += `<tr>`
      for (let value in element) {
        tableData += `<td> ${element[value]}</td>`
       
    }
    tableData += ` <td><button class = "deleteBtn">Delete</button> <button class = "editBtn">edit</button></td>`
      tableData += `</tr>`
    });
    tableData += `</tbody>`
    table.innerHTML = tableData;
  }).catch(err=> {console.log("error",err)});