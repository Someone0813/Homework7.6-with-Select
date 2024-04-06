"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";


async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/category/electronics");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ThirdCategory() {
  const data = await getData();
    
  return (
    <>

      <main className="max-w-screen-xl flex flex-wrap  mx-auto p-2 mt-8 gap-6 ">
       
        {data.slice(0, 10 ).map((product) => (
          <>
            <div
              key={product.id}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <Link href={`${product.id}`}>
                <div className="border border-gray-200 rounded-lg p-4">
                  <img
                    src={product.image}
                    width={150}
                    height={100}
                    alt={product.title}
                    className="imagesss"
                  />
                  <h2 className="text-lg font-semibold mt-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-800 font-bold mt-2">
                    ${product.price}
                  </p>
                  <span>
                    {product.category}
                  </span>
                </div>
              </Link>
            </div>
          </>
        ))}
      </main>
    </>
  );
}
