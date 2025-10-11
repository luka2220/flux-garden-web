type RssType = {
  name: string;
  link: `https://${string}`;
};

type RssFeed = Array<RssType>;

export const RssFeedMock: RssFeed = [
  {
    name: "Stackoverflow Blog",
    link: "https://stackoverflow.blog/feed",
  },
  {
    name: "Dev.to",
    link: "https://dev.to/feed",
  },
  {
    name: "Freecodecamp",
    link: "https://freecodecamp.org/news/rss",
  },
  {
    name: "r/experienced devs",
    link: "https://www.reddit.com/r/ExperiencedDevs.rss",
  },
  {
    name: "Gitlab Blog",
    link: "https://about.gitlab.com/atom.xml",
  },
  {
    name: "Spotify Engineering",
    link: "https://engineering.atspotify.com/feed",
  },
  {
    name: "r/programming",
    link: "https://www.reddit.com/r/programming/.rss",
  },
  {
    name: "Airbnb Engineering",
    link: "https://medium.com/feed/airbnb-engineering",
  },
];
