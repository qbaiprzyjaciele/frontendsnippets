function DraggableElment(element) {
    this.element = element;
    this.clicked = false;
    this.element.onmousedown = this.onmousedown;
}

DraggableElment.prototype.onmousedown = function() {
    this.clicked = true;
    this.element.style.backgroundColor = "red";
}

DraggableElment.prototype.onmouseup = function() {
    this.clicked = false;
    this.element.style.backgroundColor = "white";

}

DraggableElment.prototype.onmousemove = function() {
    
}