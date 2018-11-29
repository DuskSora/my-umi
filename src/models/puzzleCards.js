export default {
    namespace: "puzzlecards",
    state: {
        cardList: [
            {
                id: 1,
                setup: 'Did you hear about the two silk worms in a race?',
                punchline: 'It ended in a tie',
            },
            {
                id: 2,
                setup: 'What happens to a frog\'s car when it breaks down?',
                punchline: 'It gets toad away',
            }
        ],
        counter: 100
    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const counter = state.counter + 1;
            const newCardWithId = {
                ...newCard,
                id: counter
            };
            const cardList = state.cardList.concat(newCardWithId);
            return {
                cardList,
                counter
            }
        }
    }
};