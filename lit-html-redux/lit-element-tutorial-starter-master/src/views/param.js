import {LitElement, html} from 'lit-element';

class Param extends LitElement {

    render() {
        return html`
            
        `;
    }

    renderElementByMetadata(metadata) {
        if(metadata.type === 'string') {
            return html`<param-string .maxLength=${this.paramMetadata.maxLength} .paramValue=${this.paramValue} >`;
1       } else if(metadata.type === 'number') {
            return html`<param-number .precision=${this.paramMetadata.precision} .scale=${this.paramMetadata.scale} .maxValue=${this.paramMetadata.maxValue} >`;
        }else if(metadata.type === 'date') {
            return html`<param-date >`;
        }
    }

    static get properties() {
        return {
            paramMetadata: { type: Object },
            paramValue: String,
            paramName: String,
        };
    }

}