import { atom, useAtom } from 'jotai';
import type { Feed, FeedContent, ParsedFeed } from '../types/feed';

const feedAtom = atom<Feed[]>([]);
const feedContentAtom = atom<FeedContent>();
const feedContentItemAtom = atom<ParsedFeed>();

// Hook for all operations on the feedAtom
export function useFeedStoreAtom(): [Feed[], (update: Feed[]) => void] {
  const [feed, setFeed] = useAtom(feedAtom);

  return [feed, setFeed];
}

// Hook for all operations on the feedContentAtom
export function useFeedContentStoreAtom(): [
  FeedContent | undefined,
  (update: FeedContent) => void,
] {
  const [feedContent, setFeedContent] = useAtom(feedContentAtom);

  return [feedContent, setFeedContent];
}

// Hook for all operations on the feedContentItemAtom
export function useFeedContentItemStoreAtom(): [
  ParsedFeed | undefined,
  (update: ParsedFeed) => void,
] {
  const [feedContentItem, setFeedContentItem] = useAtom(feedContentItemAtom);

  return [feedContentItem, setFeedContentItem];
}
