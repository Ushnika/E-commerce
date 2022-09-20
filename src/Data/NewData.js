import React from "react";

export default function NewData() {
  for (var i = 0; i < CardData.length; i++) {
    if (CardData[i].onSale == true) {
      saleItem = CardData.push([i]);
    }
  }
  return <div></div>;
}
