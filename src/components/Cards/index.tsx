'use client';

import React from 'react';

import { useStore } from '@/store/useStore';

function Cards() {
  const { bears } = useStore();
  return <div className="px-4 py-2 mx-2 text-3xl text-purple-950">{bears}</div>;
}

export default Cards;
