// CRUD = Create, Read, Update, Delete (Post, Get, Put, Delete) Declaring a URL endpoint. Can be an API (using AJAX) or local db.json. If you use local, *** type: json-server --watch db.json into terminal. Then use that url below.  NOT SURE HOW TO GET THIS TO WORK //
const taskdatabase_URL = 'http://localhost:3000/taskList'

// Create a code that loops over data and adds information to DOM //
$.get(taskdatabase_URL).then((data) =>
  data.map((task) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${task.id}</td>
      <td>${task.toDoTask}</td>
      <td>${task.toDoStatus}</td>
      <td>${task.toDoNote}</td>
      <td>${task.toDoDeadline}</td> //a way to rank by closest date at the top? //
      <td>${task.toDoComplete}</td>
    //   could also make this a button... need to create the function to mark off? could this include a date //
      <td>
        <button onclick="deleteTask(${task.id})"}>🗑</button>
      </td>
    </tr>`)
    )
  })
);

//Post/Adding new tasks //
$('#task').click(function () {
    $.post(taskdatabase_URL, {
      toDoTask: $('#newTask').val(),
      toDoTask: $('#newStatus').val,
      toDoNote: $('#newNote').val(),
      toDoDeadline: $('#newDeadline').val(),
    })
  });

//Deleting existing task ASCII trash bin: 🗑 from lab //

function deleteTask(id) {
    $.ajax(`${taskDatabase_URL}/${id}`, {
      type: 'DELETE',
    })
  };

//Updating information //
function updateTask() {
    id = $('#updateId').val()
  
    $.ajax(`${taskdatabase_URL}/${id}`, {
      method: 'PUT',
      data: {
        toDoTask: $('#updateTask').val(),
        toDoStatus: $('#updateStatus').val,
        toDoNote: $('#updateNote').val(),
        toDoDeadline: $('#updateDeadline').val(),
        toDoStatus: $('#updateComplete').val(),
      },
    })
  };
  
  // event listener to update task when button is clicked //
  $('#updateTask').click(updateTask)