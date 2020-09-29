import React from 'react';
import AutocompleteItem from './AutocompleteItem.js';

export default class AutocompleteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            selectedItemIndex: -1,
        }
        this.selectItem = this.selectItem.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.Keys = {
            UP: 38,
            DOWN: 40,
        }
    }

    componentWillReceiveProps(props) {
        console.log(`componentWillReceiveProps = ${JSON.stringify(props)}`);
        this.setState({items: props.items, selectedItemIndex:-1});
    }

    render() {
        return (
            <ul onKeyDown={this.keyDownHandler}>
                {this.state.items.map((value, index) => {
                    return (
                        <li key={value} onMouseOver={this.selectItem} ><AutocompleteItem  content={value} selected={this.selectedItemIndex === index}></AutocompleteItem></li>
                    );
                })}
            </ul>
        );
    }

    selectItem(index) {
        this.setState( {
            selectedItemIndex: index,
        })
    }

    keyDownHandler(e) {
        console.log(`keyDownHandler = ${e.which}`);
        if(e.which === this.Keys.UP && this.state.selectedItemIndex > 0) {
            this.selectItem(this.state.selectedItemIndex - 1);
        }
        else if(e.which === this.Keys.DOWN & this.state.selectedItemIndex < this.state.items.length) {
            this.selectItem(this.state.selectedItemIndex + 1);
        }
    }
}