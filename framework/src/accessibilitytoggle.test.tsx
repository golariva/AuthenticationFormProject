import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityToggle from './accessibilitytoggle';

describe('AccessibilityToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.classList.remove('accessible');
  });

  test('начальное состояние соответствует localStorage', () => {
    localStorage.setItem('accessibleMode', 'true');
    render(<AccessibilityToggle />);
    expect(document.body.classList.contains('accessible')).toBe(true);
    expect(screen.getByRole('button')).toHaveTextContent('Обычная версия');
  });

  test('по клику переключает режим и сохраняет в localStorage', () => {
    render(<AccessibilityToggle />);
    const button = screen.getByRole('button');

    expect(document.body.classList.contains('accessible')).toBe(false);
    expect(localStorage.getItem('accessibleMode')).toBe('false');

    fireEvent.click(button);

    expect(document.body.classList.contains('accessible')).toBe(true);
    expect(localStorage.getItem('accessibleMode')).toBe('true');
    expect(button).toHaveTextContent('Обычная версия');

    fireEvent.click(button);

    expect(document.body.classList.contains('accessible')).toBe(false);
    expect(localStorage.getItem('accessibleMode')).toBe('false');
    expect(button).toHaveTextContent('Версия для слабовидящих');
  });
});
