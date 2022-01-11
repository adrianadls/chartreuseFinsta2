import React from "react";

function Followers(props) {
  return (
    <div className="Followers">
      <div>
        <button onClick={() => props.clickHandler()}>
          <span role="img" aria-label="up">
            ⬆️
          </span>
        </button>
      </div>
    </div>
  );
}

export default Followers;
