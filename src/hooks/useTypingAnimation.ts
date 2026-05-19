import { useState, useEffect } from "react";

/**
 * Cycles through `words`, typing and deleting each one.
 * Returns the current display string + a boolean `isDeleting`.
 */
export function useTypingAnimation(
  words: string[],
  {
    typeSpeed = 80,
    deleteSpeed = 45,
    pauseAfterType = 1800,
    pauseAfterDelete = 400,
  }: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseAfterType?: number;
    pauseAfterDelete?: number;
  } = {},
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Still typing
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            // Done typing — pause then start deleting
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pauseAfterType);
          }
        } else {
          // Still deleting
          if (displayed.length > 0) {
            setDisplayed(current.slice(0, displayed.length - 1));
          } else {
            // Done deleting — pause then move to next word
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(false);
              setWordIndex((i) => (i + 1) % words.length);
            }, pauseAfterDelete);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, wordIndex, words, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return { displayed, isDeleting };
}
