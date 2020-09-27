import React from 'react';

export default class AutocompleteInput extends React.Component {
    
    render() {
        return(
            <div>
                <input type="text" onKeyUp={this.handleInputKeyUp}>
                </input>
                { this.state.autocompleteItems ? this.renderAutocompleteElements() : null }
            </div>
        );
    }

    renderAutocompleteElements() {
        return (
            <ul>
                {this.state.autocompleteItems.map(this.renderAutocompleteItem)}
            </ul>
        )
    }

    renderAutocompleteItem(autocompleteItem)  {
        return (
            <li key={autocompleteItem.id} onClick={this.handleAutocompleteClick.bind(this, autocompleteItem)}>
                {autocompleteItem.text}
            </li>
        )
    }

    handleAutocompleteClick(autocompletionItem) {
        console.log(`clicked  = ${autocompletionItem}`);
    }

    handleInputKeyUp(e) {
        const inputValue = e.target.value;
        
    }
    
}