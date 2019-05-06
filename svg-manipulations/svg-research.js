
function SvgElement(svgElement, canvas) {
    this.svgElement = svgElment;
    this.canvas = canvas;
    this.x;
    this.y;
}

SvgElement.prototype.setPosition = function(x,y) {
    
}

function SvgMoveManipulator(svgElement) {
    this.svgElement = svgElement;
}

SvgMoveManipulator.prototype.move = function(x,y) {
    this.svgElement.setPosition(svgElement.x+x, svgElement.y+y);
}

function SvgMagneticMoveDecorator(svgMoveManipulator, magneticGrid) {
    this.svgMoveManipulator = svgMoveManipulator;
    this.magneticGrid = magneticGrid;
}

SvgMagneticMoveDecorator.prototype.move = function(x,y) {
    this.svgMoveManipulator = svgMoveManipulator;
    var closestPoint  = this.magneticGrid.closestPoint(x,y);
    this.setPosition(closestPoint.x, closestPoint.y);
}

function MagneticGrid(hieght,width, canvas) {
    this.canvas;
}

MagneticGrid.prototype.generateInterexectPoints = function() {
    //draw
}

MagneticGrid.prototype.closestPoint = function(x,y) {
    var min = Math.abs(gridX - x);
    for(var i = 1; i<this.xArray; i++) {
        var thisPoint = Math.abs(gridX - x);
        if(thisPoint < min) {
            min = thisPoint;
        }
        else {

        }
    }
}


MagneticGrid.prototype.closestPointBinary = function(x,y) {
    var mid  = this.xArray.length/2;
    if(this.xArray[mid] == x) {
        return x;
    }
}

function binaryClosest(x, left, right, array) {
    var halfLength = Math.floor((right-left) / 2);
    var mid  = left + halfLength;
    console.log( 'left = ' + left + ' right = ' + right + ' mid =' + mid);
    if(array[mid] == x) { 
        return x;
    }
    if(mid <= 0 || halfLength == 0) {
        if(Math.abs(array[left] - x) > Math.abs(array[right] - x)) {
            return array[right];
        }
        else {
            return array[left];
        }
    }
    else if(array[mid] > x) {
        return binaryClosest(x, left,mid, array)
    }
    else if(array[mid] < x) {
        return binaryClosest(x, mid, right, array);
    }
}

MagneticGrid.prototype.draw  = function() {
//    this.canvas
}



function SvgResizeManipulator(svgElement, canvas) {
    this.svgElement = svgElement;
    this.canvas = canvas;
}

function SvgManipulator() {

}

SvgManipulator.prototype.onMouseDown = function() {
    this.clicked = true;
}

SvgManipulator.prototype.onMouseUp = function() {
    this.clicked = false;
}


function SvgEditor(svgElement) {
    this.svgElement = svgElement;
}

