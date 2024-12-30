import { fetchNewsAPI } from '@/lib/api/news';
import slugify from 'slugify';

const NewsDetail = async ({ params }) => {
  const { id: slug } = params;
  const articles = await fetchNewsAPI();
  const article = articles.find(
    (item) => slugify(item.title, { lower: true, strict: true }) === slug
  );

  if (!article) {
    return <div className="py-12 text-center">Article not found</div>;
  }

  return (
    <div className="max-w-4xl p-4 mx-auto space-y-6">
      <h1 className="text-3xl font-semibold text-justify text-gray-900">
        {article.title}
      </h1>

      <div className="space-x-2 text-sm text-gray-600">
        <span>{article.source?.name || 'Unknown Source'}</span>
        {article.author && <span>• By {article.author}</span>}
        {article.publishedAt && (
          <span>
            • Published on {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        )}
      </div>

      {article.urlToImage && (
        <div className="relative w-full h-auto mb-6 overflow-hidden rounded-lg shadow-md">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="object-cover object-top w-full h-full"
          />
        </div>
      )}

      {article.description && (
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Description:</h3>
          <p className="text-justify">{article.description}</p>
        </div>
      )}

      <div className="prose prose-lg text-gray-800">
        <p className="text-justify">{article.content}</p>
      </div>

      {article.url && (
        <div className="mt-4">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-gray-600 hover:text-black"
          >
            Read more on the original source ....
          </a>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
