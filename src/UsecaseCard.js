import React from "react";
import { Link } from "react-router-dom";

export default function UsecaseCard({ name, description, tags }) {
  return (
    <div class="w-full h-96 p-6 flex flex-col">
      <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow relative">
        <Link
          to={`/detail/${name}`}
          class="flex flex-wrap no-underline hover:no-underline mt-5"
        >
          <img
            class="h-12 w-12 mt-2"
            src="https://cdn-icons.flaticon.com/png/128/2838/premium/2838912.png?token=exp=1652328464~hmac=dbf27736ae4df5e285f7bf1acde9bbe3"
          />
          <div class="font-bold text-xl text-gray-800 px-6 mt-4">{name}</div>
        </Link>
        <div class="text-gray-800 text-sm px-6 mb-5 text-left">
          {description}
        </div>
        <div class="absolute top-2 right-2">
          {tags.map((tag) => (
            <span class="bg-gray-300 rounded-full uppercase text-xs p-1">
              <span>#{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
