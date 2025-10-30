import { useQuery } from '@tanstack/react-query';
import useFeedStoreAtom from '../store/feed-store';
// import axiosInstance, { endpoints } from '../config/axios-config';
import axios from 'axios';

interface Feed {
  name: string;
  link: string;
  id: string;
  createdAt: string;
}

export default function Feed() {
  const [feed, setFeed] = useFeedStoreAtom();

  const { isError, error, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: async () => {
      // const { data } = await axiosInstance.get(endpoints.feed);
      const { data } = await axios.get('http://localhost:8000/feed/');
      console.info('ServerData:', data);

      const feedData = data?.results as Feed[];
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
