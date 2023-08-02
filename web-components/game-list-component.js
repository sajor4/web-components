class GamesListComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.gamesArray = [];
    }

    connectedCallback(){
        fetch('./games-data.json')
        .then(resp => resp.json())
        .then(res => {
            this.gamesArray = res;
            this.render(this.gamesArray)
        })
    }

    disconnectedCallback(){

    }



    render(games){

        // this.shadowRoot.innerHTML = '';
        // const ul = document.createElement('ul');
        // this.shadowRoot.appendChild(ul);

        // for (let i = 0; i < games.length; i++) {
        //     const game = games[i];
            
        //     const li = document.createElement('li');
        //     li.appendChild(document.createTextNode(game.title));

        //     ul.appendChild(li);
        // }

        this.shadowRoot.innerHTML = '';
        const mainContainer = document.createElement('div');
        this.shadowRoot.appendChild(mainContainer);

        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            
            const cardComponent = document.createElement('game-card');

            cardComponent.addEventListener('card-clicked', (e) => this.removeGame(e.detail));

            cardComponent.game = game;

            mainContainer.appendChild(cardComponent);
        }
        
    }

    removeGame(title){
        this.gamesArray = this.gamesArray.filter(game => game.title !== title);
        this.render(this.gamesArray);
    }



}


customElements.define('games-list', GamesListComponent);