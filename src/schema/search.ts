import {z} from 'zod';

export const SearchSchema = z.object({
    query: z.string().url().refine((url) => {
        const githubUrlPattern = /^https:\/\/github\.com\/[a-zA-Z0-9-_.]+\/[a-zA-Z0-9-_.]+\/?$/;
        return githubUrlPattern.test(url);
    }, "Must be a valid GitHub repository URL")
});

export type SearchFormData = z.infer<typeof SearchSchema>;

