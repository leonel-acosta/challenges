console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id.startsWith(2)
});

console.log("1:", onlyCardWithIdTwo)

const allCardsWith3Tags = cards.filter((card) => {
  card.tags.length === 3; 
});

console.log("2:", allCardsWith3Tags)


const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked === false
})

console.log("3:", allCardsThatAreNotBookmarked)


const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return card.isBookmarked = true && card.tags.includes("html")
})

console.log("4:", allCardsWithTagsHTMLOrJSThatAreBookmarked)

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
