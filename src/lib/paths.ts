/** Site path that respects Astro's `base` (always leading, with trailing slash). */
export function pageUrl(path = ''): string {
  const base = import.meta.env.BASE_URL || '/';
  if (!path || path === '/') return base;
  return `${base}${path.replace(/^\/+/, '')}`;
}

/** Public file URL. Absolute http(s) values are returned unchanged. */
export function publicUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return pageUrl(path);
}

/**
 * Pathname with the configured base and a trailing slash removed.
 * Root is always `/`, so nav matching does not depend on `base`.
 */
export function normalizedPath(pathname: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let path = pathname.replace(/\/index\.html$/, '');
  if (base && path.startsWith(base)) path = path.slice(base.length) || '/';
  if (path.length > 1) path = path.replace(/\/$/, '');
  return path || '/';
}
