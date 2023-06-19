// CRUD = Create, Read, Update, Delete (Post, Get, Put, Delete) Declaring a URL endpoint. Can be an API (using AJAX) or local db.json. Command to install json: npm i -g json-server If you use local, *** type: json-server --watch db.json into terminal. **** had to add an npx to the beginning of the command.**** Then use that url below.  //
const taskDatabase_URL = 'http://localhost:3000/taskList'

// Create a code that loops over data and adds information to DOM. Want to figure out how to move the lines so that the soonest deadline moves to the top //
$.get(taskDatabase_URL).then((data) =>
  data.map((task) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${task.id}</td>
      <td>${task.toDoTask}</td>
      <td>${task.toDoStatus}</td>
      <td>${task.toDoNotes}</td>
      <td>${task.toDoDeadline}</td> 
      <td>${task.toDoCompleteDate}</td>
      <td>
        <button onclick="deleteTask(${task.id})"}>🗑</button>
      </td>
    </tr>`)
    )
  })
)

//Post/Adding new tasks //
$('#submitTask').click(function () {
    $.post(taskDatabase_URL, {
      toDoTask: $('#newTask').val(),
      toDoStatus: $("[name='optradio']:checked").val(),
      toDoNote: $('#newNote').val(),
      toDoDeadline: $('#newDeadline').val(),
    })
  })

//Deleting existing task ASCII trash bin: 🗑 from lab //

function deleteTask(id) {
    $.ajax(`${taskDatabase_URL}/${id}`, {
      type: 'DELETE',
    })
  }

//Updating information //
function updateTask() {
    let id = $('#updateId').val()
  
    $.ajax(`${taskDatabase_URL}/${id}`, {
      method: 'PUT',
      data: {
        toDoTask: $('#updateToDoTask').val(),
        toDoStatus: $("[name='optradio']:checked").val(),
        toDoNote: $('#updateNote').val(),
        toDoDeadline: $('#updateDeadline').val(),
        toDoCompleteDate: $('#updateCompleteDate').val(),
      },
    })
  }
  
  // event listener to update task when button is clicked //
  $('#updateTaskButton').click(updateTask)

  // something fun I found on a youtube https://www.youtube.com/watch?v=fPew9OI2PnA and used for tic tac toe game. Found a sound that works for my page https://mixkit.co/free-sound-effects/applause/ and want to play it when a task is marked as complete... https://foolishdeveloper.com/how-to-play-sound-on-click-using-javascript/#:~:text=You%20can%20create%20this%20kind,by%20clicking%20on%20the%20button. //
  
//   const taskCompleteSound = new Audio("sounds/mixkit-small-crowd-ovation-437.wav");
//   const updateButtonSound = document.querySelectorAll("updateTaskButton" && "radioButton3");
//   updateButtonSound.forEach(button => {
//     button.addEventListener("click", () => {
//         taskCompleteSound.play();
//     });
//   });