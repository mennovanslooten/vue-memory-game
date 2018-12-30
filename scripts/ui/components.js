export const gameTitleComponent = {
    props: ['player'],
    template: `<h1 class="game-title">Your move, {{ player.name }}!</h1>`,
};

export const playerListComponent = {
    props: ['players', 'currentPlayer'],
    template: `
        <ol class="game-players">
            <li class="player" v-bind:class="{ current: currentPlayer === player }" v-for="(player, index) in players">
                <span class="player-name">{{ player.name }}</span>
                <span class="player-score">{{ player.score }}</span>
            </li>
        </ol>`,
};


export const cardFaceComponent = {
    props: {
        face: {
            type: Number,
            required: true,
        },
    },
    render: function (createElement) {
        const emoji = [...'🐙🐢🐔🐸🐼🦁🐨🐳🐬🦀🐠🐤🐥🦆🐯'];
        return createElement(
            'span',
            emoji[this.face]
        );
    },
};

export const cardComponent = {
    props: ['card', 'index'],
    components: {
        'card-face': cardFaceComponent,
    },
    methods: {
        openCard(index) {
            this.$store.dispatch('openCard', index);
        }
    },
    template: `
        <li class="card-container" v-bind:class="{ open: card.open, owned: card.owner >= 0 }">
            <div class="card" v-on:click="openCard(index)">
                <div class="back"></div>
                <div class="face">
                    <card-face v-bind:face="card.face"></card-face>
                </div>
            </div>
        </li>`,
};

export const cardListComponent = {
    props: ['cards'],
    components: {
        'card': cardComponent,
    },
    template: `
        <ol class="cards">
            <card v-for="(card, index) in cards" 
                    v-bind:card="card"
                    v-bind:index="index"
                    v-bind:key="index"></card>
            
        </ol>`,
};