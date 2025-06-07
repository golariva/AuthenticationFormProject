import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './loginform';

describe('LoginForm', () => {
  const onSuccess = jest.fn();

  beforeEach(() => {
    localStorage.clear();
    onSuccess.mockClear();
  });

  test('успешный вход вызывает onSuccess и сохраняет сессию, если установлен чекбокс', () => {
    render(<LoginForm onSuccess={onSuccess} />);
    
    fireEvent.change(screen.getByLabelText(/логин/i), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText(/пароль/i), { target: { value: '1234' } });
    fireEvent.click(screen.getByLabelText(/сохранять сессию/i));
    fireEvent.click(screen.getByRole('button', { name: /^войти$/i }));


    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem('session')).toBe('active');
  });

  test('неуспешный вход показывает ошибку', () => {
    render(<LoginForm onSuccess={onSuccess} />);
    
    fireEvent.change(screen.getByLabelText(/логин/i), { target: { value: 'wrong' } });
    fireEvent.change(screen.getByLabelText(/пароль/i), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByRole('button', { name: /^войти$/i }));

    expect(onSuccess).not.toHaveBeenCalled();
    expect(screen.getByText(/неверный логин или пароль/i)).toBeInTheDocument();
  });

  test('при активной сессии вызывает onSuccess сразу', () => {
    localStorage.setItem('session', 'active');
    render(<LoginForm onSuccess={onSuccess} />);
    expect(onSuccess).toHaveBeenCalledTimes(1);
  });
});
