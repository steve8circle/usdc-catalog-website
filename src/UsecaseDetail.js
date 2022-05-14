import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsecaseCard from "./UsecaseCard";

export default function () {
  const { name } = useParams();
  const [usecase, setUsecase] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUsecase(json));
  }, []);

  return (
    <div>
      <div>Detail Page - {name}</div>
      <div>Title: {usecase.title}</div>
      <div class="text-left text-2xl mt-10">Similar Use Cases</div>
      <div class="grid grid-cols-3 gap-4">
        <div class="w-full">
          <UsecaseCard
            name="Circle"
            description="what a great app  asfadsfasdf afsdfa "
            tags={["test"]}
          />
        </div>
      </div>
    </div>
  );
}
