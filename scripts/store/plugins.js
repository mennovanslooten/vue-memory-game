export function memoryGameLogic(store) {
    // called when the store is initialized
    store.subscribe((mutation, state) => {
        if (store.getters.leftCards.length === 0) {
            console.log('game is done');
            return;
        }

        if (store.getters.openCards.length === 2) {
            store.dispatch('checkOpenCards');
        }
    });
};
