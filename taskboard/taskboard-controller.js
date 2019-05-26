
var BoardsNotifier = function(boardsParam) {
    var boards = boardsParam;

    var notifyBoards = function(event) {
        for(let i=0; i<boards.length; i++) {
            boards[i].dispatchEvent(event);    
        }
    }
}
var TaskBoardController = function(taskBoardElementParam) {
    var taskBoardElement = taskBoardElementParam;

    var handleDrop = function() {
        console.log('drop handled! ' + taskBoardElement.id);
        taskBoardElement.innerHTML += '<p>HAAAAA !!!</p>';
    }

    taskBoardElement.onmouseover = function() {
        console.log('on mouse ovaa!');
        selectedBoardId = taskBoardElement.id;
        //document.addEventListener('sticky-note-drop', handleDrop);
    }

    taskBoardElement.onmouseout = function() {
        console.log('on mouse out!');
        selectedBoardId = null;
        //document.removeEventListener('sticky-note-drop', handleDrop);
    }
}

var taskBoardControllers = [];

var initTaskboards = function() {
    console.log('init taskboards');
    var boards = document.getElementsByClassName('column');
    for(let i=0; i<boards.length; i++) {
        console.log('board element ' + i);
        taskBoardControllers.push(new TaskBoardController(boards[i]));
    }
}

initTaskboards();

