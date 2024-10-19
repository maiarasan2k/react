import { render } from '@testing-library/react';
import PostPage from './PostPage';

test('should import PostPage component correctly', () => {
  const { getByText } = render(<PostPage />);
  // Add assertions here if necessary
  // Example: expect(getByText('PostPage')).toBeInTheDocument();
});