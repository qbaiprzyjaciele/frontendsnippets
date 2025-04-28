/**
 * Basic orthographic/perpective projection of 3D lines
 * and rotation of 3D lines around X and Y axis.
 * @author: Jakub Smorąg
 */

window.onload = () => {

    const cnv = document.getElementById("cnv");
    const ctx = cnv.getContext('2d');

    const drawLine = (sx,sy, ex, ey, color) => {
        ctx.beginPath();
        ctx.moveTo(sx,sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    const orthoProjection = (x, y, z) => {
        return [x, y];
    }

    let focalLn = 150;
    const perspectiveProjection = (x, y, z) => { 
        const scale = focalLn / (focalLn + z);
        return [
            x * scale + 320,
            y * scale + 240,
        ];
    }

    let position  = [0, 0, 0];

    const draw3DLine = (sx, sy, sz, ex, ey, ez, projFn) => {
        ctx.beginPath();
        const [psx, psy] = projFn(sx, sy, sz);
        ctx.moveTo(psx, psy);
        const [pex, pey] = projFn(ex, ey, ez);
        ctx.lineTo(pex, pey);
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }

    const rotationXMatrix = (angle, x, y, z) => {
    const rad = angle * (Math.PI / 180);
    return [
        x,
        Math.cos(rad)*y - Math.sin(rad)*z,
        Math.sin(rad)*y + Math.cos(rad)*z,
    ]
    }

    const rotationYMatrix = (angle, x, y, z) => {
        const rad = angle *  (Math.PI / 180);
        return [
            Math.cos(rad)*x + Math.sin(rad)*z,
            y,
            -Math.sin(rad)*x + Math.cos(rad)*z  
        ];
    }

    // cube vertices
    const vertices = [
        [0, 0, 0],
        [0, 0, 10],
        [0, 10, 0],
        [0, 10, 10],
        [10, 0, 0],
        [10, 0, 10],
        [10, 10, 0],
        [10, 10, 10],
    ];

    const generateGridVertices = (x, y, z) => {
        const vertices = [];
        for(let i=0; i<x; i++) {
            for(let j=0; j<y; j++) {
                for(let k=0; k<z; k++) {
                    vertices.push([i, j, k]);
                }
            }
        }
        return vertices;
    }

    const shape = [
        [...vertices[0], ...vertices[1]],
        [...vertices[0], ...vertices[2]],
        [...vertices[0], ...vertices[4]],
        [...vertices[1], ...vertices[3]], 
        [...vertices[1], ...vertices[5]],
        [...vertices[2], ...vertices[3]],
        [...vertices[2], ...vertices[6]],
        [...vertices[3], ...vertices[7]], 
        [...vertices[4], ...vertices[5]],
        [...vertices[4], ...vertices[6]], 
        [...vertices[5], ...vertices[7]],
        [...vertices[6], ...vertices[7]],
    ];

    drawLine(0,0, 640, 480 , 'red');

    const clear = () => {
        ctx.clearRect(0,0,640,480);
    }

    let rotation = 0;
    const TRANS_X = 100;
    const TRANS_Y = 100;

    const drawShape = (ln, projFn, position) => {
        const  { length } = ln;
        let [posX, posY, posZ] = position; 
        posX = posX ? posX : 0;
        posY = posY ? posY : 0;
        posZ = posZ ? posZ : 0;
        let i = 0;
        for(i=0; i<length; i++) {
            const [sx, sy, sz, ex, ey, ez] = ln[i];
            draw3DLine(
                sx + TRANS_X + posX, 
                sy + TRANS_Y + posY,  
                sz + posZ, 
                ex + TRANS_X + posX, 
                ey + TRANS_Y + posY, 
                ez + posZ, 
                projFn
            );
        }
    }

    const updateFn = (shape) => {
        const newShape = [];
        let i=0;
        for(i = 0; i<shape.length; i++) {
            const line = shape[i];
            const rotatedLine = [
            ...rotationXMatrix(rotation, line[0], line[1], line[2]),
            ...rotationXMatrix(rotation, line[3], line[4], line[5]),
            ];
            newShape.push(rotatedLine);
        }
        return newShape;
    }

    const rotate = (shape, angle, rotFn) => {
        const newShape = [];
        let i=0;
        for(i = 0; i<shape.length; i++) {
            const line = shape[i];
            const rotatedLine = [
            ...rotFn(angle, line[0], line[1], line[2]),
            ...rotFn(angle, line[3], line[4], line[5]),
            ];
            newShape.push(rotatedLine);
        }
        return newShape;
    }
    let direction = [1, 1, 0];
    const animate = () => {
        clear();
        rotation += 0.3;
        const transformedShape = rotate(shape,  rotation, rotationXMatrix);
        const transformedShape2 = rotate(transformedShape,  rotation/10, rotationYMatrix);
        position[0] += 0.2
        position[1] += -0.005;
        position[2] -= 0.001;
        drawShape(
            transformedShape2, 
            perspectiveProjection, 
            [4*Math.cos(position[0]), 10*Math.sin(position[1]), 20*Math.sin(position[2])]);
    }

    setInterval(animate, 10);
}
