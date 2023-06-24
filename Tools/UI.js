const isDownPath = "./assets/question-mark.png";
const container = document.getElementById("game");
const twinsCards = [];
const timer = 500;
let timerId;
let winer = 0;

export const createItemUI = (Card, index) => {
  let span = document.createElement("span");
  span.id = `ItemId_${index}`;

  let img = document.createElement("img");
  Card.isUp === false
    ? img.setAttribute("src", isDownPath)
    : img.setAttribute("src", Card.path);
  span.appendChild(img);

  container.appendChild(span);
  span.addEventListener("click", () => {
    ClickHandler(span, Card);
  });

};

const cleartwinsCards = () => {
  twinsCards.length = 0;
};

const setImgsrc = (spanId, path) => {
  const span = document.getElementById(spanId);
  const img = span.firstChild;
  img.src = path;
};

const addTotwinsCards = (span, ClickPath) => {
  const img = span.firstChild;
  img.src = ClickPath;

  timerId = setTimeout(() => {
    img.src = isDownPath;
  }, timer);
  twinsCards.push({
    spanId: span.id,
    path: ClickPath,
    timeout: timerId,
  });
};

const ClickHandler = async (span, Card) => {
  const ClickPath = Card.path;

  if (twinsCards.length >= 2) cleartwinsCards();
  else {
    addTotwinsCards(span, ClickPath);
    if (twinsCards.length === 2) {
      if (
        twinsCards[0].path === twinsCards[1].path &&
        twinsCards[0].spanId != twinsCards[1].spanId
      ) {
        winer++;
        console.log(winer);
        setImgsrc(twinsCards[0].spanId, twinsCards[0].path);
        setImgsrc(twinsCards[1].spanId, twinsCards[0].path);
        clearTimeout(twinsCards[0].timeout);
        clearTimeout(twinsCards[1].timeout);
        cleartwinsCards();
      } else {
        // Clear the timeout if the images don't match
        cleartwinsCards();
      }
    }
  }
  if (winer === 12) {
    renderWiner()
  }
};

const renderWiner = () => {
  container.innerHTML = "";
  container.classList.remove("container")
  container.classList.add('containerWiner')
  let img = document.createElement("img")
  img.src = '../assets/winer.png'
  img.classList.add('winer')
  container.appendChild(img);
};
