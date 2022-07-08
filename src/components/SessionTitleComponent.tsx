import React from "react";

// CSS
import "./styles/SessionTitle.scss";

export function SessionTitleComponent({
  countNumber,
  title,
}: {
  countNumber: string;
  title: string;
}) {
  return (
    <h2 className="title">
      <div className="title__contentArea">
        <span className="title__contentArea__count_number">
          {countNumber}.{" "}
        </span>
        <span className="title__contentArea__title">{title}</span>
      </div>

      <div className="title__after"></div>
    </h2>
  );
}
