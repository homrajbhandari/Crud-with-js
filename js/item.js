import { createSingleItem } from "./single-item.js";

export function createItems(itemsArray, onToggleCompleted) {
  const container = document.createElement("div");
  container.className = "items";

  itemsArray.forEach((item) => {
    const itemElement = createSingleItem(item, onToggleCompleted);
    container.appendChild(itemElement);
  });

  return container;
}