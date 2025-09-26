import React from 'react';
import { render, screen } from '@testing-library/react';
import FunctionalToggle from './FunctionalToggle';
import { expect, test, describe } from 'vitest';

describe('FunctionalToggle', () => {
  test('should update when the initialState prop changes', () => {
    const { rerender } = render(<FunctionalToggle initialState={false} />);
    expect(screen.getByRole('switch')).not.toBeChecked();

    rerender(<FunctionalToggle initialState={true} />);
    expect(screen.getByRole('switch')).toBeChecked();
  });
});