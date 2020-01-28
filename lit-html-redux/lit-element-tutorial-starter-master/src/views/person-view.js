import {LitElement, html} from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';


const VisibilityFilters = {
    SHOW_ALL:'All',
    SHOW_DEVELOPERS: 'Developer',
    SHOW_TESTERS: 'Tester'
}


class PersonView extends LitElement {

    render() {
        return html`
            <p> ${this.model.name} ${this.model.lastName} </p>
        `;
    }

    static get properties() {
        return {
            model: { type: Object },
            persons: {type: Array},
            filter: {type: String },
            personName: {type: String }
        };
    }

    constructor() {
        super();
        this.persons = [];
        this.filter = VisibilityFilters.SHOW_ALL;
        this.personName = '';

        this.model = {};
        this.model.lastName = 'Januszewski';
        this.model.name = 'Andrzej';
    }

    render() { 
        return html`
            <div class="input-layout">
                <vaadin-text-field placeholder="Person" value=${this.personName} @change=${this.updatePersonName}></vaadin-text-field>
                <vaadin-button theme="primary" @click="${this.addPerson}">Add</vaadin-button>
            </div>

            <div class="person-list">
                ${this.persons.map(p => html `
                    <div class="person-item">
                        <vaadin-checkbox
                         ?checked="${p.title === 'Developer'}"
                         @change="${this.updatePerson(person, e.target.checked)}"
                         >${todo.task}</vaadin-button>
                    <div>
                `)}
            </div>
            
        `;
    }

    updatePerson(updatedPerson, developer) {
        this.persons = this.persons.map( p => {
            return updatedPerson === p ? {...p, title: develper ? 'Developer' : 'Tester'} : p;
        });
    }

    updatePersonName(e) {
        this.personName = e.target.value;
    }

    addPerson() {
        if(this.personName) {
            this.persons = [... this.persons, {
                person: this.personName,
                job: 'Developer'
            }];
        }
        this.personName = '';   
    }
}

customElements.define('person-view', PersonView);