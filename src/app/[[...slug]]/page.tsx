import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';
import HomeSearch from '@/components/HomeSearch';

interface PageProps {
    params: {
        slug?: string[];
    };
}

export default function Page({ params }: PageProps) {
    // If no slug, render the home page
    if (!params.slug || params.slug.length === 0) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <HomeSearch />
            </main>
        );
    }

    // Check if the URL matches the pattern username/repo-name
    if (params.slug.length === 2) {
        const [username, repoName] = params.slug;
        const query = `${username}/${repoName}`;
        
        // Redirect to search page with the repo path as the query
        redirect(`/search?q=${encodeURIComponent(query)}`);
    }

    // If the pattern doesn't match, return 404
    return notFound();
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
    if (!params.slug || params.slug.length === 0) {
        return {
            title: 'LLM Github - Home',
            description: 'Search and analyze GitHub repositories with LLM',
        };
    }

    if (params.slug.length === 2) {
        const [username, repoName] = params.slug;
        return {
            title: `${username}/${repoName} - LLM Github`,
            description: `Analyzing ${username}/${repoName} repository with LLM`,
        };
    }

    return {
        title: 'Not Found - LLM Github',
        description: 'Page not found',
    };
}
