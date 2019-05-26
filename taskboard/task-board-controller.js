var BoardsNotifier = function(boardsParam) {
    var boards = boardsParam;

    var notifyBoards = function(event) {
        for(let i=0; i<boards.length; i++) {
            boards[i].dispatchEvent(event);    
        }
    }
}

var BoardController = function(elementParam) {
    var element = elementParam;
    var boardSelected = false;
    var that = this;

    element.onmouseover = function() {
        that.boardSelected = true;
    }

    element.onmouseout = function() {
        that.boardSelected = false;
    }

    element.addEventListener('note-dropped', function() {
        if(boardSelected) {
            console.log("attach to this board " + element);
        }
    });

}

