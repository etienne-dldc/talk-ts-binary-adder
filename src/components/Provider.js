import React, { useMemo, useEffect, useState } from 'react';
import DeckCtx, { modes } from '../utils/DeckCtx';
import Footer from './Footer';

const Provider = ({ children, index, length, mode, metadata, step, update }) => {
  const [isPrint, setIsPrint] = useState(false);

  useEffect(() => {
    window.onbeforeprint = function() {
      setIsPrint(true);
    };
    window.onafterprint = function() {
      setIsPrint(false);
    };
  }, []);

  const ctxObj = useMemo(() => ({ index, length, mode, metadata, step, update, isPrint }), [
    index,
    length,
    mode,
    step,
    isPrint,
  ]);

  return (
    <DeckCtx.Provider value={ctxObj}>
      {children}
      <Footer />
    </DeckCtx.Provider>
  );
};

export default Provider;
