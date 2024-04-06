"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";


async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCategory1(){
  const res2 = await fetch("https://fakestoreapi.com/products/category/jewelery")
  if (!res2.ok) {
    throw new Error("Failed to fetch data");
  }
  return res2.json();
}

async function getCategory2(){
  const res3 = await fetch("https://fakestoreapi.com/products/category/men's clothing")
  if (!res3.ok) {
    throw new Error("Failed to fetch data");
  }
  return res3.json();
}

async function getCategory3(){
  const res4 = await fetch("https://fakestoreapi.com/products/category/electronics")
  if (!res4.ok) {
    throw new Error("Failed to fetch data");
  }
  return res4.json();
}

async function getCategory4(){
  const res5 = await fetch("https://fakestoreapi.com/products/category/women's clothing")
  if (!res5.ok) {
    throw new Error("Failed to fetch data");
  }
  return res5.json();
}

export default async function Home() {
  const data = await getData();
    
  return (
    <>

      <main className="max-w-screen-xl flex flex-wrap  mx-auto p-2 mt-8 gap-6 ">
       
        {data.slice(2, 50).map((product) => (
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
