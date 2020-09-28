import React from 'react';
import './AutocompleteItem.css';

export default class AutocompleteItem extends React.Component {

    render() {
        return (
            <div className={this.props.selected ? 'item-selected' : ''} >
                {this.props.content}
            </div>
        );
    }

}