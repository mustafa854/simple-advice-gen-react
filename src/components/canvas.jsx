import React from "react";
import QuoteCard from "./quoteCard";

const Canvas = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(
            "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          )`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <QuoteCard />
      </div>
    </>
  );
};

export default Canvas;
