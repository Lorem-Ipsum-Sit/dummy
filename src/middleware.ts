import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['fa'],

    defaultLocale: 'fa'
});

export const config = {
    matcher: ['/', '/(fa)/:path*']
};