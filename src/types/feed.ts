/** Reprenets feed data */
export interface Feed {
  name: string;
  link: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

/** Represents a parsed feed item */
export interface ParsedFeed {
  title: string;
  link: string;
  content_html: string;
}

/** Represents feed content data */
export interface FeedContent {
  item: Feed;
  content: {
    title: string;
    link: string;
    description: string;
    feed: ParsedFeed[];
  };
}
