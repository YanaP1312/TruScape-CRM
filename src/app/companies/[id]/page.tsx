import Header from '@/app/components/header';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
