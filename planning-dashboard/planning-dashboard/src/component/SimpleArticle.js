import React from 'react';

export default class SimpleArticle extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </div>
        );
    }
}