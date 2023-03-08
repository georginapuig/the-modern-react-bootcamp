import { useState } from 'react';

export default function useToggleState(initialVal) {
  const [state, setState] = useState(initialVal);
  const toggle = () => setState(!state);

  return [state, toggle];
}
