document.addEventListener('DOMContentLoaded', () => {
    const todoButton = document.getElementById('createTodo');
    const todoInput = document.getElementById('newTodo');
    const todosList = document.getElementById('todosList');
    const onlyForm = document.querySelector('form');
    const allButtons = document.querySelectorAll('button');
    const searchInput = document.getElementById('searchInput');
    const searchDiv = document.getElementById('searchDiv');
    const searchTodoListBtn = document.getElementById('searchTodoListBtn');

    var todoId = 0;

    onlyForm.addEventListener('submit', (event) => {
        if (todoInput.value.length >= 3) {
                todosList.insertAdjacentHTML("beforeend", 
                `<tr> 
                    <td> ${todoId+=1}. </td>
                    
                    <td class="newTodoValue">${todoInput.value}</td>
                    
                    <td> <button class="completed">&#10003;</button> </td>
                    
                    <td> <button class="editTodo">Edit</button> </td> 
                    
                    <td> <button class="deleteButton">&#10005;</button> </td>
                </tr>`);

                todoInput.value = "";
                event.preventDefault()

                if (todoId >= 7) {
                    searchDiv.style.display = "list-item"
                }
        }
        else if (todoInput.value.length < 22) {
            alert("Please Input a New To-Do!");
            event.preventDefault();
        }
    })

    document.addEventListener('click', (event) => {
        const userChoice = event.target;

        if (userChoice.className === "deleteButton") {
            userChoice.style.backgroundColor = "crimson";

            setTimeout(() => {
                userChoice.parentElement.parentElement.remove()
            }, 400)

            if (todosList.innerText.length >= 100) {
                searchDiv.style.display = "list-item";
            }
        }

        else if (userChoice.className === "completed") {
            userChoice.style.backgroundColor = "limegreen";

            userChoice.insertAdjacentHTML("beforeend", ` 100%`)
        }

        else if (userChoice.className === "editTodo") {
            var editedTodo = prompt("What would you like to Change this To-Do to? ")
            console.log(editedTodo.length)

            if (editedTodo.length > 3) {
                userChoice.parentElement.parentElement.querySelector('.newTodoValue').innerHTML = `${editedTodo}`
            }
            else {return false}
        }
    })

    searchInput.addEventListener('keyup', (event) => {
        const searchWord = searchInput.value.toLowerCase();

        for (let i = 0; i < todosList.children.length; i++) {
            const todo = todosList.children[i].firstElementChild;

            if (todo.innerText.toLowerCase().includes(searchWord)) {
                list()

                function list() {
                todo.parentElement.style.display = "flex";
            }}
            
            else {
                todo.parentElement.style.display = "none";
            }
        }
    })
})