export function createInitialState(numPlayers, numFaces) {
    console.log('creating state', numPlayers, numFaces);
    const players = [];
    for (let i = 0; i < numPlayers; i++) {
        players.push({
            name: `Player ${i + 1}`,
            score: 0,
        });
    }
    const cards = [];
    for (let i = 0; i < numFaces; i++) {
        cards.push({
            face: i,
            open: false,
            owner: -1,
        });
        cards.push({
            face: i,
            open: false,
            owner: -1,
        });
    }
    return {
        players,
        cards: shuffle(cards),
        // cards: cards,
        currentPlayerIndex: 0,
    };
}

function shuffle(array) {
    return array
        // Pair each item with a random number
        .map((item) => [ Math.random(), item ])
        // Sort the pairs by the random numbers
        .sort((a, b) => a[0] - b[0])
        // Remove the random number from the pairs
        .map((a) => a[1]);
}