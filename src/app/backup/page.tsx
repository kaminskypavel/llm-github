import React from 'react';
import {Globe} from 'lucide-react';
import HomeSearch from '@/components/HomeSearch';
import {HydrateClient} from '../../trpc/server';

export default function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen bg-gray-50 flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center mt-[-120px]">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <Globe className="w-12 h-12 text-blue-500" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                LLM github
              </h1>
            </div>

            {/* Search Form */}
            <HomeSearch />

            {/* Quick Links */}
            <div className="mt-8 flex gap-4">
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Quick Search
              </button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </button>
          </div>
        </div>
      </div>
      </main>
    </HydrateClient>

  );
}
