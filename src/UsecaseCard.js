import React from "react";
import { Link } from "react-router-dom";
import bookIcon from "./book-icon.png";

export default function UsecaseCard({ name, description, tags }) {
  return (
    <Link to={`/detail/${name}`}>
      <div class="w-full h-96 p-6 flex flex-col hover:drop-shadow-md">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow relative">
            <div class="flex items-center mt-8">  
              <img class="h-10 w-12 ml-4" src={bookIcon} /> 
              <div class="font-bold text-xl text-gray-800 px-3">{name}</div>
            </div>
          <div class="text-gray-800 text-sm px-6 mb-5 text-left">
            {description}
          </div>
          {/* <div class="absolute top-2 right-2">
            {tags.map((tag) => (
                <span key={tag} class="bg-gray-300 rounded-full uppercase text-xs p-1">
                <span>#{tag}</span>
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </Link>
  );
}
