function stringifyMethod()
{
var book = {name: "Foreign Park", author: "Jeff Steudel", totalPageNumbers: 90,
publisher: "Anvil Press", ISBN: "978-1-77214-015-6"}
var bookJSON = JSON.stringify(book);
console.log(bookJSON);
}

function parseEmployee()
{
    var employee = JSON.parse('{"firstName":"Allison", "lastName": "Kreiner",  "ID":7,"address":"14244 Atwater Ave NE", "jobTitle": "Manager"}')
    console.log(employee);
}