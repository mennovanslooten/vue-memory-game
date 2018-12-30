export const mutations = {
    openCard(state, index) {
        state.cards[index].open = true;
    },

    incrementCurrentPlayerScore(state) {
        state.players[state.currentPlayerIndex].score += 1;
    },

    assignOpenCardsToCurrentPlayer(state) {
        state.cards.filter((card) => card.open).forEach((card) => {
            card.open = false;
            card.owner = state.currentPlayerIndex;
        });
    },

    nextPlayer(state) {
        let nextPlayerIndex = state.currentPlayerIndex + 1;
        if (nextPlayerIndex === state.players.length) {
            nextPlayerIndex = 0;
        }
        // Switch to next player
        state.currentPlayerIndex = nextPlayerIndex;
        // Close open cards
        state.cards.forEach((card) => card.open = false);
    },
};