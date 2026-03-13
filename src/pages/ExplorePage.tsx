import { Link } from 'react-router-dom';
import Scroll3D from '../components/Scroll3D';

export default function ExplorePage() {
  return (
    <main className="min-h-screen text-white px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto">
        <Scroll3D className="text-sm uppercase tracking-[0.2em] text-white font-light mb-6">
          Explore
        </Scroll3D>

        <Scroll3D className="text-4xl md:text-6xl font-bold leading-tight mb-8 fx-text-depth" delay={0.1}>
          Welcome to the Brand Exploration Page
        </Scroll3D>

        <Scroll3D className="text-lg md:text-xl text-white max-w-3xl mb-12" delay={0.2}>
          This page gives visitors a dedicated destination after clicking the homepage CTA.
          <br />
          You can extend this area with case studies, portfolio highlights, or service details.
        </Scroll3D>

        <Scroll3D className="flex flex-wrap gap-4" delay={0.3}>
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
