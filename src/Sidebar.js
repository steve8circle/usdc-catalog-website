import React from "react";

//TODO, set all and selected categories as props

const categories = [
  "Ecommerce",
  "Trading/Exchange",
  "NFT Marketplace",
  "CEFI",
  "DEFI",
  "Investing/Yield",
  "Borrow/Lend",
  "Wallet",
];

export default function Sidebar({ category, onSelectionChange }) {
  return (
    <div class="w-60 h-full bg-gray-100 px-2">
      <div class="text-left font-bold text-bold uppercase text-gray-500 pb-2">
        Category
      </div>
      <hr class="mb-4" />
      <ul class="flex flex-col gap-6 justify-around items-start">
        {categories.map((cat) => (
          <li >
            {cat !== category && (
              <span onClick={() => onSelectionChange(cat)}
                class="text-sm text-gray-500 hover:text-gray-900 hover:cursor-pointer transition duration-300 ease-in-out">
                {cat}
              </span>
            )}
            {cat === category && (
              <span onClick={() => onSelectionChange(null)}
                class="text-sm text-gray-900 hover:text-gray-900 hover:cursor-pointer transition duration-300 ease-in-out border-blue-100">
                <span class="border-b-indigo-500 border-b-4 pb-1">{cat}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
