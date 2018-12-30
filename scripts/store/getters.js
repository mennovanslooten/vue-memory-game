export const getters = {
    leftCards(state) {
        return state.cards.filter((card) => card.owner === -1);
    },

    openCards(state) {
        return state.cards.filter((card) => card.open);
    },

    currentPlayer(state) {
        return state.players[state.currentPlayerIndex];
    },
};