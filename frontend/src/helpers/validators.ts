export function validateNavItems(prop: unknown): boolean {
  if (!Array.isArray(prop)) return false;
  if (prop.length === 0) return true;
  return prop[0].title != null;
}
