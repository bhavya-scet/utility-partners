import { Link } from 'react-router-dom';
import Scroll3D from '../components/Scroll3D';

type LegalPageProps = {
  title: string;
  description: string;
};

export default function LegalPage({ title, description }: LegalPageProps) {
  return (
    <main className="min-h-screen text-white px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <Scroll3D className="text-4xl md:text-5xl font-bold mb-6 fx-text-depth">{title}</Scroll3D>

        <Scroll3D className="text-lg text-white mb-10" delay={0.15}>{description}</Scroll3D>

        <Scroll3D delay={0.25}>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-brand-blue text-white font-normal hover:brightness-110 transition-all fx-3d"
          >
            Back to Homepage
          </Link>
        </Scroll3D>
      </div>
    </main>
  );
}
