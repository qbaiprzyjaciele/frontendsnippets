import React from 'react';
import AutocompleteList from './AutocompleteList.js';

export default class AutocompleteInput extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            autocompleteItems: null,
        };
        this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    }

    render() {
        return(
            <div>
                <input type="text" onKeyUp={this.handleInputKeyUp}>
                </input>
                { this.state.autocompleteItems ? <AutocompleteList items={this.state.autocompleteItems}></AutocompleteList> : null }
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

    clearAutocompleteItems() {
        this.setState({
            autocompleteItems: null,
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
            autocompleteItems: newItems,
        });
    }
}