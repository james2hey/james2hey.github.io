import {useEffect, useState} from 'react';

/**
 * https://medium.com/@ttennant/react-inline-styles-and-media-queries-using-a-custom-react-hook-e76fa9ec89f6
 * @param query
 */
export const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);
  console.log(matches)

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};