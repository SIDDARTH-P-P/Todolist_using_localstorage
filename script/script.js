let inner_value = document.getElementById("in");
let list = document.getElementById("list")

function adding(){
        let todos = localStorage.getItem("todos")
        let array = todos ? JSON.parse(todos) : [];
        array.push(inner_value.value)
        inner_value.value = null;
        localStorage.setItem("todos", JSON.stringify(array));
        print()
}

function print() {
    let todos = localStorage.getItem("todos")
    let array = todos ? JSON.parse(todos) : [];
    list.innerHTML = null;
    array.forEach((element,index)=> {
        let li = `<li>${element} <button onclick="del(${index})">Delet</button> <button onclick="edit(${index})">Edit</button> </li>`
        list.innerHTML += li
    });
}

let del = (ind) =>{
    let todos = localStorage.getItem("todos")
    let array = JSON.parse(todos);
   array = array.filter((item,index) => ind !== index)
   localStorage.setItem("todos", JSON.stringify(array));
    print();
} 

let edit=(index) =>{
    let todos = localStorage.getItem("todos")
    let array = JSON.parse(todos);
    inner_value.value = array[index];
    del(index); 
}
print()