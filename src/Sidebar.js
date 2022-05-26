import React from "react";

//TODO, set all and selected categories as props

const categories = [
  "Ecommerce", "Trading/Exchange", "NFT Marketplace", "CEFI", "DEFI", "Investing/Yield", "Borrow/Lend", "Wallet"
]

export default function Sidebar({category, onSelectionChange}) {
  return (
    <div class="w-60 h-full bg-gray-100 px-1">
          <div class="text-left font-bold text-bold uppercase text-gray-500 ml-4 p-2">Category</div>  
      <hr class="mb-2"/>    
      <ul class="relative">
        {
          categories.map((cat) => (
            <li class="relative" onClick={()=>onSelectionChange(cat)}>
              <span
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                {cat}
              </span>
            </li>
          ))         
        }
      </ul>
    </div>
  );
}
