import Image from 'next/image';
import { fishData } from '../../../data/fish';
import Link from 'next/link';

type FishPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function FishPage({ params }: FishPageProps) {
  const { slug } = await params;
  const fish = fishData.find((f) => f.slug === slug);

  if (!fish) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Fish not found</h1>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Back to all fish
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-gray-100">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image src={fish.image} alt={fish.name} width={500} height={500} className="h-96 w-full object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold text-gray-800">{fish.name}</h1>
            <p className="mt-4 text-lg text-gray-600">{fish.description}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Lures</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {fish.lures.map((lure, index) => (
              <li key={index}>{lure}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Bait (BWCAW only)</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {fish.bait.map((b, index) => (
              <li key={index}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Techniques</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {fish.techniques.map((technique, index) => (
              <li key={index}>{technique}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            Back to all fish
          </Link>
        </div>
      </div>
    </div>
  );
}
