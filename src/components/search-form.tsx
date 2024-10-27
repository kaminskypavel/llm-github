import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ArrowRight} from 'lucide-react';
import {type SearchFormData, SearchSchema} from '../schema/search';

interface SearchFormProps {
    onSearch: (query: string) => void;
    initialValue?: string;
}

export default function SearchForm({onSearch, initialValue = ""}: SearchFormProps) {
    const {register, handleSubmit, formState: {errors}} = useForm<SearchFormData>({
        resolver: zodResolver(SearchSchema),
        defaultValues: {
            query: initialValue ?? ""
        }
    });

    const onSubmit = (data: SearchFormData) => {
        onSearch(data.query);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
            <div className="relative group">
                <input
                    type="text"
                    {...register('query')}
                    placeholder="https://github.com/kaminskypavel/llm-github"
                    className={`w-full px-6 py-4 pr-12 text-lg rounded-full border 
                     focus:outline-none focus:ring-2 focus:ring-blue-200
                     shadow-sm hover:shadow-md transition-shadow
                     ${errors.query ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
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
            {errors.query && (
                <p className="mt-2 text-sm text-red-600">{errors.query.message}</p>
            )}
        </form>
    );
}
