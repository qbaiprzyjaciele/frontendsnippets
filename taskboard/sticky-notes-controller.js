

var StickyController = function(element, boardsNotifier) {
    this.element = element;
    this.grabbed = false;
    var that = this;
    this.posX = 0;
    this.posY = 0;
    this.initialZIndex = ""+element.style.zindex;
    this.boardsNotifier = boardsNotifier;

    this.drag = function(e) {
        console.log('>>> draaag...');
        that.element.style.position ="absolute";
        that.element.style.top =  e.clientY - 50 + "px";
        that.element.style.left = e.clientX - 50 + "px";
        that.posY = e.clientY;
        that.posX = e.clientX;
    }

    this.drop = function(e) {
        console.log('drop');
        document.onmousemove = null;
        document.onmouseup = null;
        that.element.style.position = "";
        var event = new Event('sticky-note-drop');
        //that.boardsNotifier = 
        //that.element.style.zindex = that.initialZIndex;
    }

    this.element.addEventListener('mousedown', function() {
        console.log('mousedown!');
        console.log('this = ' + this);
        that.grabbed = true;
        that.element.style.zindex = "1";
        document.onmousemove = that.drag;
        document.onmouseup = that.drop;
    });

    this.element.addEventListener('mouseup', function() {
        console.log('this = ' + that);
        console.log('mouseup! ' +  that.element.innerHTML);
        that.grabbed = false;
    });

}

var stickyControllers = [];

var init = function() {
    console.log('sticky controller !');
    var stickyNoteElements = document.getElementsByClassName("sticky-note");
    for(let i=0; i<stickyNoteElements.length; i++) {
        console.log(' stickyNoteElement ' + i);
        stickyControllers.push(new StickyController(stickyNoteElements[i]));
    }
}

init();

