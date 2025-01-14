import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { ConfirmButton } from './confirm-button';

test('button text', () => {
  render(<ConfirmButton buttonText="confirm" />);
  expect(screen.getByText('confirm')).toBeInTheDocument();
});
