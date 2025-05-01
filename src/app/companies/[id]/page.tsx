import Header from '@/app/components/header';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
