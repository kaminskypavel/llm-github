import {z} from 'zod';

export const SearchSchema = z.object({
    query: z.string().refine((url) => {
        const githubUrlPattern = /^(https:\/\/github\.com\/|git@github\.com:)([a-zA-Z0-9-_.]+\/[a-zA-Z0-9-_.]+)(\.git)?$/;
        return githubUrlPattern.test(url);
    }, "Must be a valid GitHub repository URL (HTTPS or SSH)")
});

export type SearchFormData = z.infer<typeof SearchSchema>;
