import Feeds from './pages/Feed';
import FeedContent from './pages/FeedContent';
import FeedContentItem from './pages/FeedContentItem';
import Nav from './components/ui/nav';
import { BrowserRouter, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Nav />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Feeds />} />

          {/* Feed Content */}
          <Route path="/feed/:id" element={<FeedContent />} />

          {/* Feed Content Item */}
          <Route path="/feed/:id/:title" element={<FeedContentItem />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
