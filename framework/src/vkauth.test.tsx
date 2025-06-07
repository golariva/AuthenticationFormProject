import { render, screen } from '@testing-library/react';
import VkAuth from './vkauth';

test('VkAuth рендерится', () => {
  render(<VkAuth />);
  const container = screen.getByTestId('vk-auth-container');
  expect(container).toBeInTheDocument();
});
