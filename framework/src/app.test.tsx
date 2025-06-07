import { render, screen } from '@testing-library/react';
import App from './app';

test('App рендерит заголовок и кнопки', () => {
  render(<App />);
  expect(screen.getByText(/Добро пожаловать/i)).toBeInTheDocument();
  const buttons = screen.getAllByRole('button', { name: /Войти/i });
  expect(buttons.length).toBe(2);
  expect(screen.getByText(/Форма авторизации/i)).toBeInTheDocument();
});
