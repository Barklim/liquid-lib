/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonEx } from './ButtonEx';

describe('Button', () => {
  it('applies default type of button', () => {
    render(<ButtonEx>hello</ButtonEx>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies specific type if provided', () => {
    render(<ButtonEx type="submit">hello</ButtonEx>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies valid attribute to element', () => {
    render(<ButtonEx aria-label="Test">Hello</ButtonEx>);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
  });
});
