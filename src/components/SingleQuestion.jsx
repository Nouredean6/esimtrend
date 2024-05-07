import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article
      className={`${isActive ? "p-4  bg-white mb-4 rounded-2xl shadow-2xl " : "p-4  mb-4 rounded-2xl   "}`}
    >
      <header className="flex justify-start items-center gap-4">
        <button
          className="bg-transparent border-transparent w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-white cursor-pointer"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? (
            <AiOutlineMinus className="text-text-clr-grey" />
          ) : (
            <AiOutlinePlus className="text-text-clr-grey" />
          )}
        </button>
        <h5 className="text-gray-900 text-base lg:text-xl leading-7 lg:leading-9 font-medium ">
          {title}
        </h5>
      </header>
      {isActive && (
        <p className="text-gray-700 text-base lg:text-lg leading-6 lg:leading-8 text-left pl-10">
          {info}
        </p>
      )}
    </article>
  );
};

export default SingleQuestion;
