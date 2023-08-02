class SuperHeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        // console.log('render', this.getAttribute('title-color'))
        // this.shadowRoot.innerHTML = ''
        // const style = document.createElement('style');
        // style.innerHTML = `h1{color: ${this.getAttribute('title-color') || 'red'}}`;
        // this.shadowRoot.appendChild(style);

        this.shadowRoot.innerHTML = this.createStyle(this.getAttribute('site-theme'))

        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(this.getAttribute('super-title') + ' Platform'));
        this.shadowRoot.appendChild(h1);

        const page2Link = document.createElement('a');
        page2Link.href = './page2.html';
        page2Link.appendChild(document.createTextNode('vai alla pagina 2'));
        this.shadowRoot.appendChild(page2Link);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render()
        }
    }
      
    static get observedAttributes() { 
        return ['title-color', 'super-title', 'site-theme']; 
    }

    createStyle(theme){
        if(theme === 'dark'){
            return `
                <style>
                h1{
                    background-color: #313131;
                    color: white
                }
                </style>
            `
        } else {
            return `
                <style>
                h1{
                    background-color: white;
                    color: #313131
                }
                </style>
            `
        }

    }


}


customElements.define('super-header', SuperHeaderComponent);