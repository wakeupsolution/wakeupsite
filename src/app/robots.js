export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: ['Claude-SearchBot', 'Claude-User'],
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
        ],
        sitemap: 'https://www.wakeupsolution.in/sitemap.xml',
    };
}