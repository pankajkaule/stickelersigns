import { useEffect, useState } from 'react';

const useDrawerAutoScroll = ({ defaultTop = 240, threshold = 84, id }) => {
  const [drawerTop, setDrawerTop] = useState(defaultTop);

  const handleScrolling = (e) => {
    setDrawerTop(
      e.target.offsetTop - e.target.scrollTop > threshold
        ? e.target.offsetTop - e.target.scrollTop
        : threshold,
    );
  };

  useEffect(() => {
    setTimeout(() => {
      let el = document.getElementById(id);
      if (el) {
        el.children[2].addEventListener('scroll', handleScrolling);
        return () => {
          el.children[2].removeEventListener('scroll', handleScrolling);
        };
      }
    }, 100);
  });
  return { drawerTop };
};

export default useDrawerAutoScroll;
