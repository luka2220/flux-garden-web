import type { Feed } from '../types/feed';

interface FeedCardProps {
  feed: Feed;
}

export default function FeedCard({ feed }: FeedCardProps) {
  const { name, link } = feed;

  return (
    <div>
      <div className="text-gray-300 bg-flux-burgandy my-5 border-flux-burgandy rounded-2xl px-6 py-6 flex justify-between hover:bg-flux-light-burgandy hover:border-flux-light-burgandy">
        <p className="text-xl">{name}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name} link`}
          className="ml-4"
        >
          <img
            src="/link-svgrepo-com.svg"
            alt=""
            className="w-6 h-6"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
