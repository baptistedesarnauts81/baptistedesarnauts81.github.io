import { useEffect, useState, useCallback } from "react";

export default function useIntersectObserver({ ref, reset }) {
  const [show, setShow] = useState(false);

  const handleShow = useCallback((entries, _) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setShow(true);
      } else if (reset) {
        setShow(false);
      }
    });
  }, []);

  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(handleShow);
      observer.observe(ref.current);
      return () => {
        observer.unobserve(ref.current);
      };
    }
  }, [ref.current]);

  return show;
}
