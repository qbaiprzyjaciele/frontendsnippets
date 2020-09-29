import React from 'react';
import AutocompleteItem from './AutocompleteItem.js';
import './AutocompleteInput.css';

export default class AutocompleteInput extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: null,
            selectedItemIndex: -1,
        }
        this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.Keys = {
            UP: 38,
            DOWN: 40,
        }
    }

    render() {
        return(
            <div>
                <input type="text" onKeyUp={this.handleInputKeyUp} onKeyDown={this.keyDownHandler}>
                </input>
                { this.state.items ? 
                <div className="autocomplete-items-container">
                    {
                        this.state.items.map((value, index) => {
                            return (
                                <div key={value} onMouseOver={this.selectItem.bind(this, index)} >
                                    <AutocompleteItem  content={value} selected={this.state.selectedItemIndex === index}></AutocompleteItem>
                                </div>
                            );
                        })
                    } 
                </div>
                 : null }
            </div>
        );
    }

    handleInputKeyUp(e) {
        const inputValue = e.target.value;
        if(inputValue.length > 3) {
            this.autocomplete(inputValue);
        }
        else {
            this.clearAutocompleteItems();
        }
    }

    keyDownHandler(e) {
        console.log(`keyDownHandler = ${e.which}`);
        if(e.which === this.Keys.UP && this.state.selectedItemIndex > 0) {
            this.selectItem(this.state.selectedItemIndex - 1);
        }
        else if(e.which === this.Keys.DOWN && this.state.selectedItemIndex < this.state.items.length) {
            this.selectItem(this.state.selectedItemIndex + 1);
        }
    }

    selectItem(index) {
        this.setState( {
            selectedItemIndex: index,
        });
    }

    clearAutocompleteItems() {
        this.setState({
            items: null,
            selectedItemIndex:-1,
        });
    }
    
    autocomplete(inputValue) {
        console.log(`inputValue = ${inputValue}`);
        const items = [
            'A Study in Scarlet - Doyle, A. C.', 
            'The Sign of the Four - Doyle, A. C.', 
            'The Hound of the Baskervilles - Doyle, A. C.',
            'The Hobbit - Tolkien, J. R. R.',
            'The Lord of the Rings: The Fellowship of the Ring - Tolkien, J. R. R.',
            'The Lord of the Rings: The Return of the King - Tolkien, J. R. R.',
            'The Lord of the Rings: The Two Towers - Tolkien, J. R. R.',
        ];
        const newItems = items.filter(item => item.includes(inputValue));
        this.setState({
            items: newItems,
        });
    }
}