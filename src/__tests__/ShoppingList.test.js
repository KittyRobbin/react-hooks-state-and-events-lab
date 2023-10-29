import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

test("displays all items when initially rendered", () => {
  const { container } = render(<ShoppingList items={testData} />);
  // Ensure that all items are initially displayed
  expect(container.querySelectorAll(".Items li")).toHaveLength(testData.length);
});

test("displays only items that match the selected category", () => {
  const { container } = render(<ShoppingList items={testData} />);

  // Change the category to "Dairy"
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });

  // Ensure that only items with category "Dairy" are displayed
  const dairyItems = testData.filter((item) => item.category === "Dairy");
  expect(container.querySelectorAll(".Items li")).toHaveLength(dairyItems.length);

  // Change the category to "Dessert"
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
  });

  // Ensure that only items with category "Dessert" are displayed
  const dessertItems = testData.filter((item) => item.category === "Dessert");
  expect(container.querySelectorAll(".Items li")).toHaveLength(dessertItems.length);
});
