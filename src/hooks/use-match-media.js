import { useState, useLayoutEffect } from "react";

const queries = [
    '(max-width: 420px)',
    '(max-width: 900px) and (min-width: 479px)',
    '(min-width: 901px)',
];

export const useMatchMedia = () => {

    if (typeof window === 'undefined') return {};

    const mediaQueryLists = queries.map(query => matchMedia(query));

    const getValues = () => mediaQueryLists.map(mql => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    }, []);

    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {});
};