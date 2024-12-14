import NewsList from '../../features/news/NewsList';

export default function NewsPage() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Latest News</h1>
      <NewsList query="" params={{ country: 'us', page: 1, pageSize: 10 }} />
    </div>
  );
}
