"use client";
import React from 'react';
import {useSearchParams} from 'next/navigation';
import {useQueryState} from 'nuqs';
import {Globe, ArrowRight} from 'lucide-react';

export default function Home() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useQueryState('q', {defaultValue: ''});

  const isSearchActive = searchParams.has('q');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      void setSearchQuery(searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className={`transition-all duration-500 ease-in-out ${isSearchActive ? 'bg-white shadow-md' : 'h-screen flex items-center'
          }`}
      >
        <div
          className={`w-full max-w-6xl mx-auto px-4 transition-all duration-500 ${isSearchActive ? 'py-4' : 'py-0'
            }`}
        >
          <div className={`flex flex-col items-center ${isSearchActive ? '' : 'mt-[-120px]'}`}>
            {/* Logo */}
            <div className={`flex items-center gap-2 mb-8 ${isSearchActive ? 'hidden' : ''}`}>
              <Globe className="w-12 h-12 text-blue-500" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                LLM github
              </h1>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className={`w-full max-w-2xl transition-all duration-500 ${isSearchActive ? 'max-w-4xl' : ''
                }`}
            >
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="https://github.com/kaminskypavel/llm-github"
                  className="w-full px-6 py-4 pr-12 text-lg rounded-full border border-gray-200 
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                           shadow-sm hover:shadow-md transition-shadow"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2
                           p-2 rounded-full text-gray-400 hover:text-blue-500
                           transition-colors duration-200"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </form>

            {/* Quick Links - Only shown in initial state */}
            {!isSearchActive && (
              <div className="mt-8 flex gap-4">
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Quick Search
                </button>
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Results Area */}
      {isSearchActive && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {/* Sample search results */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-fade-in">
                <a href="#" className="block group">
                  <div className="text-sm text-gray-500 mb-1">www.example{i}.com</div>
                  <h2 className="text-xl text-blue-600 group-hover:underline mb-1">
                    Search Result Title {i}
                  </h2>
                  <p className="text-gray-600">
                    This is a sample search result description that would appear under each result.
                    It provides a brief overview of the content found on the linked page.
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
