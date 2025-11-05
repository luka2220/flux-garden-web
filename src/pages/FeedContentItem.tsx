import { useNavigate, useParams } from 'react-router';

export default function FeedContentItem({ decoded }: { decoded: string }) {
  //   const { id, title } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-4xl px-4 pb-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mt-6 mb-4 text-flux-light-blue hover:text-flux-beige transition-colors duration-200"
        >
          ← Back to Feeds
        </button>

        <div
          className="prose prose-invert max-w-none text-flux-beige/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: decoded }}
          style={{
            color: 'var(--color-flux-beige)',
          }}
        />
      </div>
    </div>
  );
}
