import { useQuery } from '@tanstack/react-query';
import useFeedStoreAtom from '../store/feed-store';
import axiosInstance, { endpoints } from '../config/axios-config';
import type { Feed } from '../types/feed';
import FeedCard from './feed-card';
import InputForm from './input';

export default function Feed() {
  const [feed, setFeed] = useFeedStoreAtom();

  const { isError, error, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: async () => {
      const { data } = await axiosInstance.get(endpoints.feed);
      // const { data } = await axios.get('http://localhost:8000/feed/');
      console.info('ServerData:', data);

      const feedData = data as Feed[];
      setFeed(feedData);

      return feedData;
    },
  });

  const renderFeed = () => {
    return feed.length === 0 ? (
      <div>No feeds subscribed to</div>
    ) : (
      <div>
        {feed.map((f) => (
          <FeedCard feed={f} key={f.id} />
        ))}
      </div>
    );
  };

  if (isError) {
    console.error(error);
    return <div>Error fetching feed</div>;
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-3xl px-4">
        <InputForm />
        {isLoading ? <p>Fetching data</p> : renderFeed()}
      </div>
    </div>
  );
}
