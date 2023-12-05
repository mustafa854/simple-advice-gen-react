import React, { useEffect, useState } from "react";
import { getQuote } from "../services/quote";
const QuoteCard = () => {
  const [quote, setQuote] = useState("Getting Quote...");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(true);
    getQuote().then((response) => {
      setQuote(response.slip.advice);
      console.log(response.slip.advice);
      setDisabled(false);
    });
  }, []);

  const handleChange = () => {
    setDisabled(true);
    setQuote("Getting Quote...");
    getQuote().then((response) => {
      setQuote(response.slip.advice);
      console.log(response.slip.advice);
      setDisabled(false);
    });
  };

  return (
    <div className="container quote-card-div">
      <h2>{quote}</h2>
      <button
        disabled={disabled ? true : false}
        className="btn btn-primary btn-lg mt-3"
        onClick={handleChange}
      >
        Change Quote
      </button>
    </div>
  );
};

export default QuoteCard;
