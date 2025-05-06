'use client';

import PromotionForm from '@/app/components/promotion-form';
import { use } from 'react';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
}
