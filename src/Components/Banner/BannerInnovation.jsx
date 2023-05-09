import React from "react";
import Card from "react-bootstrap/Card";

const BannerInnovation = () => {
  return (
    <div className="banner-ino mx-5 mb-5">
      <div className="card mt-5 w-50 h-75 ms-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h1 className="card-title">Announcing the next wave of AI innovation</h1>

          <p className="card-text">
            The new Microsoft Bing and Edge will soon feature more visual search
            responses, chat history, and persistent chat within Edge. We’re also
            adding actions to help people complete tasks. Learn more about it
          </p>
          <button className="btn-book text-white">Learn more about it</button>
        </div>
      </div>
    </div>
  );
};

export default BannerInnovation;
