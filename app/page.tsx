'use client';

import Link from 'next/link';
import Image from 'next/image';
import { fishData } from '../data/fish';
import { trace, context } from '@opentelemetry/api';
import React from 'react';

export default function Home() {
  const tracer = trace.getTracer('bwca-fish-app');

  return tracer.startActiveSpan('homePage', span => {
    try {
      return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
            <h1 className="text-4xl font-bold text-center text-gray-800">Fish of the Boundary Waters and Quetico</h1>
          </div>

          <div className="mb-8">
            <a href="/api/pdf" download="bwca-fish.pdf" className="text-blue-500 hover:underline">
              Download as PDF
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fishData.map((fish) => (
              <Link key={fish.slug} href={`/fish/${fish.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 ease-in-out group-hover:shadow-xl">
                  <div className="relative h-56 w-full">
                    <Image
                      src={fish.image}
                      alt={fish.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{fish.name}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      );
    } finally {
      span.end();
    }
  });
}