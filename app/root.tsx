import {cssBundleHref} from '@remix-run/css-bundle';
import type {LinksFunction} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    sizes: '64x64 32x32 24x24 16x16',
    href: '/favicon.ico',
    type: 'image/vnd.microsoft.icon',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '192x192',
    href: '/favicons/laura-griffee-logo-192.png',
    type: 'image/png',
  },
  {
    rel: 'icon',
    sizes: '512x512',
    href: '/favicons/laura-griffee-logo-512.png',
    type: 'image/png',
  },
  {rel: 'manifest', href: '/manifest.json'},
  ...(cssBundleHref ? [{rel: 'stylesheet', href: cssBundleHref}] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      <LiveReload />
    </html>
  );
}
