function todoItem() {
    var todoValue = document.getElementById("todoValues");
    // console.log();
    var todoList = document.getElementById("todoList");
    // console.log()
    var todoItem = `<li><p>${todoValue.value}</p>
    <div>
    <button type="button" class="btn btn-success" onclick="">Edit</button>
    <button type="button" class="btn btn-danger" onclick="">Delete</button>
        </div>
</li>`
    todoList.innerHTML += todoItem;
}