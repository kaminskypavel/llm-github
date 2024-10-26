import React, {useState} from 'react';
import {ArrowRight} from 'lucide-react';

interface SearchFormProps {
    onSearch: (query: string) => void;
}

export default function SearchForm({onSearch}: SearchFormProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
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
    );
}
