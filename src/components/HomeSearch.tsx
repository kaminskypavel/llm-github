"use client";

import React from 'react';
import {useRouter} from 'next/navigation';
import SearchForm from './SearchForm';

interface HomeSearchProps {
    initialQuery?: string;
}

export default function HomeSearch({ initialQuery }: HomeSearchProps) {
    const router = useRouter();

    const handleSearch = (query: string) => {
        if (query) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return <SearchForm onSearch={handleSearch} initialValue={initialQuery} />;
}
