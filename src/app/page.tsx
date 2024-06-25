import Button from '@/components/Button';
import Cards from '@/components/Cards';

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-rose-200 items-center justify-center">
      <button className="btn">Button</button>
      <Button />
      <Cards />
    </div>
  );
}
