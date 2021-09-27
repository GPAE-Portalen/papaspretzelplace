import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders text: Loading...', () => {
    render(<App />);
    const linkElement = screen.getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
});
