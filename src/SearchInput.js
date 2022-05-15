import React from 'react'

export default function SearchInput({searchTermChanged}) {
  
  const handleChange = event => {
      let v = event.target.value;
      searchTermChanged(v);
  }

  return (
    <div class="flex justify-end">
      <div class="relative  text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <div type="submit" class="p-1 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" 
            strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" 
            class="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            </div>
        </span>
              <input type="text" name="q" onChange={handleChange} class="py-2 text-sm text-white bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..."/>
      </div>
    </div>
  )
}
