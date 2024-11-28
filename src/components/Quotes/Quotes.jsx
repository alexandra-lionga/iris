import "./Quotes.scss";
import quotes from "../../data/quotes";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let pauseQuote = null;

  function nextQuoteHandler() {
    const isLastQuote = currentQuoteIndex === quotes.length - 1;
    const newQuoteIndex = isLastQuote ? 0 : currentQuoteIndex + 1;
    setCurrentQuoteIndex(newQuoteIndex);
  }

  useEffect(() => {
    pauseQuote =
      autoPlay &&
      setTimeout(() => {
        nextQuoteHandler();
      }, 2500);
  });

  return (
      <div className="quotes">
        <div className="quotes__slider">
          <div
            onMouseEnter={() => {
              setAutoPlay(false);
              clearTimeout(pauseQuote);
            }}
            onMouseLeave={() => {
              setAutoPlay(true);
            }}
            className={
              currentQuoteIndex === 0
                ? "quotes__slider-item"
                : "quotes__slider-item--active"
            }
          >
            <h1 className="quotes__slider-quote">
              {quotes[currentQuoteIndex].quote}
            </h1>
            <p className="quotes__slider-author">{quotes[currentQuoteIndex].author}</p>
          </div>
        </div>
      </div>
  );
};
export default Quotes;
