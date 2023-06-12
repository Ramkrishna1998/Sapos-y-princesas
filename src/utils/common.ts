/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * Deep clone an array/object, beware it will remove all bindings
 * & functions
 * @param item Array|Object
 * @returns Array|Object
 */
export const deepClone = (obj: object) => JSON.parse(JSON.stringify(obj));

/**
 * Get extraclassnames from combination of className added to the
 * component
 * @param styles
 * @param className
 */
export const getExtraClasses = (styles: any, className?: string) => {
  if (!className) return '';
  const extraClasses = (className || '')
    .split(/\s/g)
    .filter(c => !!c)
    .map((c) => {
      if (typeof styles[c] !== 'undefined') {
        return styles[c];
      }
      return c;
    }).join(' ');
  return extraClasses;
};
