"use client";
import React from "react";

interface Props {
  title: string;
  price: number;
  size: string;
  address: string;
  number: string;
  img: string;
}

const Cards: React.FC<Props> = ({
  title,
  price,
  size,
  number,
  address,
  img,
}) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h4>
          <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ₹{price}
          </h6>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {address}
        </p>
        <div className="flex flex-row">
          <h6 className="font-normal text-gray-700 dark:text-gray-400">
            {size}
          </h6>
          <p className="ml-2 font-normal text-gray-700 dark:text-gray-400">
            {number}
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Cards;
