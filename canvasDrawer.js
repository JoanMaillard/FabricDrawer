var canvas = this.__canvas = new fabric.Canvas('context', {isDrawingMode: true});
var chosenShape = "circle";
var chosenStroke = "Black";
var chosenFill = "Black";
var chosenColor = "rgba(250,0,0,0.5)";



function choosingShape(figure)
{
    chosenShape = figure;
    if (chosenShape == "freeDrawing")
        {
            canvas.isDrawingMode = true;
        }
    else
        {
            canvas.isDrawingMode = false;
        }
}

function choosingStroke(color)
{
    chosenStroke = color;
}
function choosingFill(color)
{
    chosenFill = color;   
}

function drawShape()
{

    
    var originX = mouseX;
    var originY = mouseY;
    
    var shape;
    if (canvas.isDrawingMode == false)
        {
        if (chosenShape == "triangle")
            {
            shape = new fabric.Triangle({width:60,height:50, left: mouseX-30, top: mouseY-25, angle: 0, stroke:chosenStroke, fill:chosenFill});
            }
        if (chosenShape == "rectangle")
            {
                shape = new fabric.Rect({width: 100, height: 100, left: mouseX-50, top: mouseY-50, angle: 0, stroke:chosenStroke, fill:chosenFill});
            }   
        if (chosenShape == "circle")
            {
                shape = new fabric.Circle(
                {
                radius: 100, 
                left: mouseX-100, 
                top: mouseY-100, 
                angle: 0, 
                stroke:chosenStroke, 
                fill:chosenFill
                } );
            }
        if (chosenShape == "etoile")
            {
            var points = polygonStarPoints(6,70,35);
            shape = new fabric.Polygon(points, 
                {left: mouseX-70, top: mouseY-70, strokeWidth: 2, strokeLineJoin: 'bevil', angle:0, stroke:chosenStroke, fill:chosenFill},false);
            }
        if (chosenShape == "polygon")
            {
            var points = polygonPoints(6,70);
            shape = new fabric.Polygon(points, 
                {left: mouseX-70, top: mouseY-70, strokeWidth: 2, strokeLineJoin: 'bevil', angle:0, stroke:chosenStroke, fill:chosenFill},false);
            }       
        canvas.add(shape);
        }
}







function polygonStarPoints(numberVertex, externRadius, innerRadius) 
    {
    var rotation = Math.PI / 2 * 3;
    var cx = externRadius;
    var cy = externRadius;
    var angleEach = Math.PI / numberVertex;  // instead of using 2*Pi and dividing by 2 afterwards
    var points = [];
    var angle = 3*Math.PI/2;

    for (var i = 0; i < numberVertex; i++) 
        {
        // external point
        var vertexX = cx + Math.cos(angle) * cx;
        var vertexY = cy + Math.sin(angle) * cy;
        points.push({x: vertexX, y: vertexY});
        angle += angleEach; 
                    
        // internal point
        vertexX = cx + Math.cos(angle) * innerRadius;
        vertexY = cy + Math.sin(angle) * innerRadius;
        points.push({x: vertexX, y: vertexY});
        angle += angleEach;
        }
    return (points);
    }

function polygonPoints(numberVertex, outerRadius) 
    {
    var rotation = Math.PI / 2 * 3;
    var cx = outerRadius;
    var cy = outerRadius;
    var angleEach = 2*Math.PI / numberVertex;  // instead of using 2*Pi and dividing by 2 afterwards
    var points = [];
    var angle = 3*Math.PI/2;

    for (var i = 0; i < numberVertex; i++) 
        {
        // external point only
        var vertexX = cx + Math.cos(angle) * outerRadius;
        var vertexY = cy + Math.sin(angle) * outerRadius;
        points.push({x: vertexX, y: vertexY});
        angle += angleEach; 
        }
    return (points);
    }
 

// line 6 : var fieldPos = {
//    X: document.getElementById("context").offsetLeft, 
//    Y: document.getElementById("context").offsetTop,
//};













// https://groups.google.com/forum/#!topic/fabricjs/KnBs8VApqQo
// http://stackoverflow.com/questions/41979255/draw-rectangle-with-fabric-js
// http://jsfiddle.net/a7mad24/aPLq5/
// http://stackoverflow.com/questions/29319677/fabric-js-geometric-shapes