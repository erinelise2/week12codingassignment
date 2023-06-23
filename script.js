// CRUD = Create, Read, Update, Delete (Post, Get, Put, Delete) Declaring a URL endpoint. Can be an API (using AJAX) or local db.json. Command to install json: npm i -g json-server If you use local, *** type: json-server --watch db.json into terminal. **** had to add an npx to the beginning of the command.**** Then use that url below.  //

const taskDatabase_URL = 'http://localhost:3000/taskList/'

// Create a code that loops over data and adds information to DOM. Want to figure out how to move the lines so that the soonest deadline moves to the top //
$.get(taskDatabase_URL).then((data) =>
  data.map((task) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${task.id}</td>
      <td>${task.toDoTask}</td>
      <td>${task.toDoStatus}</td>
      <td>${task.toDoAssign}</td>
      <td>${task.toDoDeadline}</td> 
    //   ternary for complete date. If the task is complete, show the date. If not, show nothing. //
      <td>${task.toDoCompleteDate}</td>
      <td>
        <button onclick="deleteTask(${task.id})"}>🗑</button>
      </td>
    </tr>
    `)
    )
  })
)

//Post/Adding new tasks //
function addTask(){
  const newTask = {
    "toDoTask": $('#newTask').val(),
    "toDoStatus": $("[name='optradio']:checked").val(),
    "toDoAssign": $('#newAssign').val(),
    "toDoDeadline": $('#newDeadline').val(),
    "toDoCompleteDate": " ",
  }  
  console.log(newTask)
  $.ajax({
    url: `http://localhost:3000/taskList/`,
    type: 'POST',
    data: JSON.stringify(newTask),
    contentType: 'application/json'
  });
console.log("this worked")
}

//Deleting existing task ASCII trash bin: 🗑 from lab.   "let del = confirm("Do you want to permanently delete task?");" is from the Thursday evening class. It is not pretty, but a great thing to remember for future things.//
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
        toDoStatus: $("[name='updateOptRadio']:checked").val(),
        toDoAssign: $('#updateAssign').val(),
        toDoDeadline: $('#updateDeadline').val(),
        toDoCompleteDate: $('#updateCompleteDate').val(),
      },
    })
  }

//Table on screen when refresh //
// $(document).ready(function () {
//     
//     })


  // event listener to update task when button is clicked or? $("#updateTaskButton").on("click", (e) => updateTask(e)) //
  $('#updateTaskButton').click(updateTask)

  // something fun I found on a youtube https://www.youtube.com/watch?v=fPew9OI2PnA and used for tic tac toe game. Found a sound that works for my page https://mixkit.co/free-sound-effects/applause/ and want to play it when a task is marked as complete... https://foolishdeveloper.com/how-to-play-sound-on-click-using-javascript/#:~:text=You%20can%20create%20this%20kind,by%20clicking%20on%20the%20button. //

//   const taskCompleteSound = new Audio("sounds/mixkit-small-crowd-ovation-437.wav");
//   const updateButtonSound = document.querySelectorAll("updateTaskButton" && "radioButton3");
//   updateButtonSound.forEach(button => {
//     button.addEventListener("click", () => {
//         taskCompleteSound.play();
//     });
//   });

//original post/add method from lab//
// ORIGINAL METHOD
// $('#submitTask').click(function () {
//     $.post(`${taskDatabase_URL}`, {
//       toDoTask: $('#toDoTask').val(),
//       toDoStatus: $("[name='optradio']:checked").val(),
//       toDoAssign: $('#toDoAssign').val(),
//       toDoDeadline: $('#toDoDeadline').val()
//     })
//   }).then(console.log($('#toDoTask').val()))