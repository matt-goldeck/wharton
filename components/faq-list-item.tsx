import { FAQItem } from "@/types/faq";
import React from "react";

export interface FAQListItemProps {
  item: FAQItem;
}

export function FAQListItem({ item }: FAQListItemProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // Prevent collapse from closing if a link is clicked
  };

  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border-base-300 bg-base-300 border max-w-96">
      <div className="collapse-title text-xl font-vt323 text-center">
        {item.question}
      </div>
      <div className="collapse-content font-vt323 text-center">
        <div>
          {typeof item.answer === "string"
            ? item.answer
            : React.cloneElement(item.answer as React.ReactElement, {
                onClick: handleLinkClick,
              })}
        </div>
      </div>
    </div>
  );
}
