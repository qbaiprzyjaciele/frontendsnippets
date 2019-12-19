import {LitElement, html} from 'lit-element';

class PersonView extends LitElement {

    render() {
        return html`
            <p> ${this.model.name} ${this.model.lastName} </p>
        `;
    }

    static get properties() {
        return {
            model: { type: Object },
        };
    }

    constructor() {
        super();
        this.model = {};
        this.model.lastName = 'Januszewski';
        this.model.name = 'Andrzej';
    }
}

customElements.define('person-view', PersonView);