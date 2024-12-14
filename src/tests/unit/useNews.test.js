import { renderHook } from '@testing-library/react-hooks';
import { useNews } from '../../../src/features/news/hooks/useNews';

test('should fetch news articles', async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useNews('', { page: 1, pageSize: 5 })
  );

  await waitForNextUpdate();

  expect(result.current.data.length).toBeGreaterThan(0);
});
