"use client";

import React, { useState, useEffect } from 'react';

interface SearchFormProps {
    onSearch: (query: string) => void;
    initialValue?: string;
}

export default function SearchForm({ onSearch, initialValue = '' }: SearchFormProps) {
    const [query, setQuery] = useState(initialValue);

    useEffect(() => {
        if (initialValue) {
            setQuery(initialValue);
        }
    }, [initialValue]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter GitHub repository URL or search term..."
                className="w-full px-4 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
        </form>
    );
}
