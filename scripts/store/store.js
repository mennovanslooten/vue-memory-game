import { createInitialState } from "./createInitialState.js";
import { getters } from "./getters.js";
import { mutations } from "./mutations.js";
import { actions } from "./actions.js";
import { memoryGameLogic } from "./plugins.js";

export const store = new Vuex.Store({
    plugins: [ memoryGameLogic ],
    state: createInitialState(2, 8),
    getters,
    mutations,
    actions,
});

