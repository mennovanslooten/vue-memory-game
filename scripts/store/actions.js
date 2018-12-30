export const actions = {
    openCard({ getters, commit }, index) {
        if (getters.openCards.length >= 2) {
            return;
        }
        commit('openCard', index);
    },

    checkOpenCards({ getters, commit }) {
        const isMatching = getters.openCards[0].face === getters.openCards[1].face;
        if (isMatching) {
            setTimeout(() => {
                commit('assignOpenCardsToCurrentPlayer');
                commit('incrementCurrentPlayerScore');
            }, 1000);
            return;
        }

        setTimeout(() => {
            commit('nextPlayer');
        }, 2000);
    }
};