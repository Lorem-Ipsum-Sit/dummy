'use client';

import React from 'react';

import { useStore } from '@/store/useStore';

function Button() {
  const { increasePopulation } = useStore();
  return (
    <button className="btn" onClick={increasePopulation}>
      increase
    </button>
  );
}

export default Button;
