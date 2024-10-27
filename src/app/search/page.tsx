"use client";
import React from 'react';
import {useSearchParams} from 'next/navigation';
import SearchForm from '@/components/SearchForm';
import {useRouter} from 'next/navigation';

export default function SearchResults() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get('q') ?? '';

    const handleSearch = (newQuery: string) => {
        if (newQuery) {
            router.push(`/search?q=${encodeURIComponent(newQuery)}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-md">
                <div className="w-full max-w-6xl mx-auto px-4 py-4">
                    <SearchForm onSearch={handleSearch} />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Search Results for: {query}</h2>
                <div className="space-y-6">
                    {/* Sample search results */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-fade-in">
                            <a href="#" className="block group">
                                <div className="text-sm text-gray-500 mb-1">www.example{i}.com</div>
                                <h3 className="text-xl text-blue-600 group-hover:underline mb-1">
                                    Search Result Title {i}
                                </h3>
                                <p className="text-gray-600">
                                    This is a sample search result description that would appear under each result.
                                    It provides a brief overview of the content found on the linked page.
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
