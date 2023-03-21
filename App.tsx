import * as React from 'react';
import './style.css';
import { useIntervalHook } from './useIntervalHook';

export default function App() {
  const count = useIntervalHook();
  return (
    <div>
      <h1>{count}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
