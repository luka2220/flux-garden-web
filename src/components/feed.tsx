import { useQuery } from '@tanstack/react-query';
import useFeedStoreAtom from '../store/feed-store';
import axiosInstance, { endpoints } from '../config/axios-config';

interface Feed {
  name: string;
  link: string;
}

export default function Feed() {
  const [feed, setFeed] = useFeedStoreAtom();

  const { isError, error, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoints.rss.root);
      console.info(data);

      const fetchedFeed = feed as Feed[];
      setFeed(fetchedFeed);

      return data;
    },
  });

  const renderFeed = () => {
    return feed.length === 0 ? (
      <div>No feeds subscribed to</div>
    ) : (
      <div>
        {feed.map((f) => (
          <div>
            <p>{f.name}</p>
            <p>{f.link}</p>
          </div>
        ))}
      </div>
    );
  };

  if (isError) {
    console.error(error);
    return <div>Error fetching feed</div>;
  }

  return (
    <div>
      <p className="text-xl text-flux-dark-blue">Feed</p>

      {isLoading ? <p>Fetching data</p> : renderFeed()}
    </div>
  );
}
