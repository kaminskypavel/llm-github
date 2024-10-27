import {expect, test, describe} from "bun:test";
import {SearchSchema} from './search';

describe('SearchSchema', () => {
    test('validates correct GitHub URLs', () => {
        const validUrls = [
            'https://github.com/facebook/react',
            'https://github.com/vercel/next.js',
            'https://github.com/microsoft/TypeScript',
            'https://github.com/user-name/repo-name',
            'https://github.com/user_name/repo_name',
        ];

        validUrls.forEach(url => {
            const result = SearchSchema.safeParse({query: url});
            expect(result.success).toBe(true);
        });
    });

    test('rejects invalid GitHub URLs', () => {
        const invalidUrls = [
            'not a url',
            'http://github.com/facebook/react',
            'https://gitlab.com/gitlab-org/gitlab',
            'https://github.com/facebook',
            'https://github.com/facebook/react/tree/main',
            'https://github.com/user name/repo-name',
            'https://github.com/user@name/repo-name',
        ];

        invalidUrls.forEach(url => {
            const result = SearchSchema.safeParse({query: url});
            expect(result.success).toBe(false);
        });
    });

    test('rejects empty string', () => {
        const result = SearchSchema.safeParse({query: ''});
        expect(result.success).toBe(false);
    });

    test('rejects non-string values', () => {
        const nonStringValues = [null, undefined, 123, true, {}, []];
        nonStringValues.forEach(value => {
            const result = SearchSchema.safeParse({query: value});
            expect(result.success).toBe(false);
        });
    });
});
