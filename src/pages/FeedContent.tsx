import { useNavigate, useParams } from 'react-router';
import axiosInstance, { endpoints } from '../config/axios-config';
import { useQuery } from '@tanstack/react-query';
import type { FeedContent } from '../types/feed';
import { useFeedContentStoreAtom } from '../store/feed-store';

export default function FeedContent() {
  const { id } = useParams();
  const [feedContent, setFeedContent] = useFeedContentStoreAtom();
  const navigate = useNavigate();

  const { isLoading, isError } = useQuery({
    queryKey: ['feed', id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoints.feedContent(id ?? ''));

      const feedContentData = data as FeedContent;
      setFeedContent(feedContentData);

      return feedContentData;
    },
  });

  if (!id) {
    return (
      <div className="flex flex-row justify-center">
        <div className="w-full max-w-3xl px-4">
          <div className="bg-flux-burgandy rounded-2xl px-6 py-8 mt-8 text-center">
            <p className="text-xl text-flux-beige">Invalid feed ID</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center">
        <div className="w-full max-w-3xl px-4">
          <div className="bg-flux-burgandy rounded-2xl px-6 py-8 mt-8 text-center">
            <p className="text-xl text-flux-beige">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-row justify-center">
        <div className="w-full max-w-3xl px-4">
          <div className="bg-flux-burgandy rounded-2xl px-6 py-8 mt-8 text-center">
            <p className="text-xl text-flux-beige">Error loading feed</p>
          </div>
        </div>
      </div>
    );
  }

  if (!feedContent) {
    return (
      <div className="flex flex-row justify-center">
        <div className="w-full max-w-3xl px-4">
          <div className="bg-flux-burgandy rounded-2xl px-6 py-8 mt-8 text-center">
            <p className="text-xl text-flux-beige">No feed content found</p>
          </div>
        </div>
      </div>
    );
  }

  const { item, content } = feedContent;
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper function to decode HTML entities
  const decodeHtmlEntities = (html: string): string => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
  };

  // Helper function to check if a string contains HTML tags
  const containsHtml = (text: string): boolean => {
    const htmlRegex = /<[a-z][\s\S]*>/i;
    return htmlRegex.test(text);
  };

  // Helper function to render content (either HTML or plain text)
  const renderContent = (content: string) => {
    // First, decode any HTML entities
    const decoded = decodeHtmlEntities(content);

    // Check if it's actually HTML
    if (containsHtml(decoded)) {
      return (
        <div
          className="prose prose-invert max-w-none text-flux-beige/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: decoded }}
          style={{
            color: 'var(--color-flux-beige)',
          }}
        />
      );
    } else {
      // Render as plain text
      return (
        <p className="text-flux-beige/90 leading-relaxed whitespace-pre-wrap">
          {decoded}
        </p>
      );
    }
  };

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

        {/* Feed Header */}
        <div className="bg-flux-burgandy rounded-2xl px-6 py-6 mb-6 border border-flux-burgandy hover:bg-flux-light-burgandy hover:border-flux-light-burgandy transition-colors duration-200">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-semibold text-flux-beige pr-4">
              {item.name}
            </h1>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.name} link`}
              className="flex-shrink-0 mt-1 hover:opacity-80 transition-opacity"
            >
              <img
                src="/link-svgrepo-com.svg"
                alt=""
                className="w-6 h-6"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-flux-beige/80">
            <span>Updated: {formatDate(item.updatedAt)}</span>
            <span>Created: {formatDate(item.createdAt)}</span>
          </div>
        </div>

        {/* Content Header */}
        <div className="bg-flux-dark-blue/30 rounded-2xl px-6 py-6 mb-6 border border-flux-dark-blue/50">
          <h2 className="text-2xl font-semibold text-flux-beige mb-3">
            {content.title}
          </h2>
          {content.description && (
            <p className="text-flux-beige/90 mb-4 leading-relaxed">
              {content.description}
            </p>
          )}
          {content.link && (
            <a
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-flux-light-blue hover:text-flux-beige transition-colors duration-200 inline-flex items-center gap-2"
            >
              View Original
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Feed Items List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-flux-beige mb-4">
            Articles ({content.feed.length})
          </h3>
          {content.feed.length === 0 ? (
            <div className="bg-flux-brown/30 rounded-2xl px-6 py-8 text-center border border-flux-brown/50">
              <p className="text-flux-beige/80">No articles found</p>
            </div>
          ) : (
            content.feed.map((feedItem, index) => (
              <article
                key={index}
                className="bg-flux-dark-blue/20 rounded-2xl px-6 py-6 border border-flux-dark-blue/40 hover:bg-flux-dark-blue/30 hover:border-flux-dark-blue/60 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-flux-beige pr-4 flex-1">
                    {feedItem.title}
                  </h4>
                  {feedItem.link && (
                    <a
                      href={feedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${feedItem.title} link`}
                      className="flex-shrink-0 mt-1 hover:opacity-80 transition-opacity"
                    >
                      <img
                        src="/link-svgrepo-com.svg"
                        alt=""
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
                {feedItem.content_html && renderContent(feedItem.content_html)}
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
