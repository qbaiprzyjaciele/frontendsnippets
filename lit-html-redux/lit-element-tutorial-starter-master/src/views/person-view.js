import {LitElement, html} from 'lit-element';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
import { VisibilityFilters } from '../redux/reducer.js';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store.js';
import { addPerson } from '../redux/actions.js';


 class PersonView extends connect(store)(LitElement) {

    static get properties() {
        return {
            model: { type: Object },
            persons: {type: Array},
            filter: {type: String },
            personName: {type: String }
        };
    }

    stateChanged(state) {
        console.log(`state = ${JSON.stringify(state)}`);
        this.persons = state.persons;
        this.filter = state.filter;
        console.log('this.persons = ' + JSON.stringify(this.persons));
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
            <div class="input-layout" @keyup="${this.shortcutListener}">
                <vaadin-text-field 
                    placeholder="Person" 
                    value=${this.personName} 
                    @change=${this.updatePersonName}
                ></vaadin-text-field>
                <vaadin-button theme="primary" @click="${this.addPerson}"
                >Add</vaadin-button>
            </div>

            <div class="person-list">
                ${this.applyFilter(this.persons).map(p => html`
                    <div class="person-item">
                        <vaadin-checkbox
                         ?checked="${p.job === 'Developer'}"
                         @change="${e => this.updatePerson(p, e.target.checked)}"
                         >${p.person} - ${p.job}</vaadin-button>
                    <div>
                `)}
            </div>

            <vaadin-radio-group
                class="visibility-filters"
                value="${this.filter}"
                @value-changed="${this.filterChanged}"
            >
                ${Object.values(VisibilityFilters).map(filter => html`
                    <vaadin-radio-button value="${filter}">${filter}</vaadin-radio-button>
                `)}
            </vaadin-radio-group>      
            <vaadin-button @click="${this.clearDevelopers}">
                Clear Developers
            </vaadin-buttom>
        `;
    }

    clearDevelopers(e) {
        this.persons = this.persons.filter(person => person.job !== 'Developer');
    }

    filterChanged(e) {
        this.filter = e.target.value;
    }

    applyFilter(persons) {
        console.log(`applyFilter-persons = ${JSON.stringify(persons)}`)
        switch(this.filter) {
            case VisibilityFilters.SHOW_DEVELOPERS:
                return persons.filter(person => person.job === 'Developer');
            case VisibilityFilters.SHOW_TESTERS:
                return persons.filter(person => person.job === 'Tester');
            default:
                return persons;
        }
    }

    updatePerson(updatedPerson, developer) {
        this.persons = this.persons.map( p => {
            return updatedPerson === p ? {...p, job: developer ? 'Developer' : 'Tester'} : p;
        });
    }

    updatePersonName(e) {
        this.personName = e.target.value;
    }

    addPerson() {
        store.dispatch(addPerson({
            person: this.personName,
            job: 'Developer'
        }));
        this.personName = '';   
    }

    shortcutListener(e) {
        if(e.key === 'Enter') {
            this.addPerson();
        }
    }
}

customElements.define('person-view', PersonView);