// import MemoryGame from '../data/MemoryGame.js';
import { gameTitleComponent, cardListComponent, cardComponent, playerListComponent } from './components.js';
import { store } from '../store/store.js';

console.log('creating app');
const vm = new Vue({
    el: '#app',
    store,
    components: {
        'game-title': gameTitleComponent,
        'card-list': cardListComponent,
        'player-list': playerListComponent,
    },
    computed: {
        currentPlayerIndex() {
            return this.$store.state.currentPlayerIndex;
        },

        cards() {
            return this.$store.state.cards;
        },

        players() {
            return this.$store.state.players;
        },

        currentPlayer() {
            return this.$store.getters.currentPlayer;
        },
    }
});