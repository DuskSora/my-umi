const cardList = [
    {
        setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },
    {
        setup: 'To understand what recursion is...',
        punchline: "You must first understand what recursion is",
    },
    {
        setup: 'What do you call a factory that sells passable products?',
        punchline: 'A satisfactory',
    }
];

let call_count = 0;

export default {
    "get /test/cardList": (req, res) => {
        const card = cardList[call_count % cardList.length];
        call_count += 1;
        setTimeout(() => {
            res.json(card);
        }, 3000);
    }
};