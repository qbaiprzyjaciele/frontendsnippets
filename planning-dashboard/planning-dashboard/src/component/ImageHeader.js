import React from 'react';

function ImageHeader(props) {
    return (
        <div>
            Some image: {props.img} title: {props.title}
        </div>
    );
}

export default ImageHeader;
