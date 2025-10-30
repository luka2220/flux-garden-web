import { atom, useAtom } from "jotai";

interface Feed {
  name: string;
  link: string;
}

const feedAtom = atom<Feed[]>([]);

// Hook for all operations on the feedAtom
export default function useFeedStoreAtom(): [Feed[], (update: Feed[]) => void] {
  const [feed, setFeed] = useAtom(feedAtom);

  return [feed, setFeed];
}
