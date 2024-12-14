import { fetchNewsAPI } from '@/lib/api/news';
import slugify from 'slugify';

const NewsDetail = async ({ params }) => {
  const { id: slug } = params;
  const articles = await fetchNewsAPI();
  const article = articles.find(
    (item) => slugify(item.title, { lower: true, strict: true }) === slug
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">{article.title}</h1>
      <p className="text-gray-700">{article.content}</p>
    </div>
  );
};

export default NewsDetail;
