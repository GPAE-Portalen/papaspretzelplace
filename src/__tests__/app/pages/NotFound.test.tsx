import React from "react";
import { render, screen } from '@testing-library/react';
import NotFound from "../../../app/pages/NotFound";

test("render title: 404", () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/404/i);
    expect(linkElement).toBeInTheDocument();
});

test("render text: This page doesn't exist!", () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/This page doesn't exist!/i);
    expect(linkElement).toBeInTheDocument();
});