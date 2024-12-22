import NewsList from '@/features/news/NewsList';

const NewsPage = () => {
  const params = { country: 'us', page: 1, pageSize: 10 };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Latest News</h1>
      <NewsList params={params} />
    </div>
  );
};

export default NewsPage;
