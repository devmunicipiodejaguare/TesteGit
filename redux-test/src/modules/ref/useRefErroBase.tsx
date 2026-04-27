import { useEffect, useState } from 'react';

export default function useRefErroBase(refBase: any, mouse: boolean) {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  useEffect(() => {
    if (!mouse) return;

    function updatePosition() {
      if (refBase?.current) {
        const rect = refBase.current.getBoundingClientRect();

        setPos({
          top: rect.bottom + 2,
          left: rect.left,
        });
      }
    }

    updatePosition();

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [mouse]);
  return pos;
}
