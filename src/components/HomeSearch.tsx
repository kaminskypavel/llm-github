"use client";

import React from 'react';
import {useRouter} from 'next/navigation';
import SearchForm from './SearchForm';

export default function HomeSearch() {
    const router = useRouter();

    const handleSearch = (query: string) => {
        if (query) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return <SearchForm onSearch={handleSearch} />;
}
