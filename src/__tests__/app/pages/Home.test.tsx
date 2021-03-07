import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "../../../app/pages/Home";

test("render title: Papa's Pretzel Place", () => {
    render(<Home />);
    const linkElement = screen.getByText(/Papa's Pretzel Place/i);
    expect(linkElement).toBeInTheDocument();
});

test("render text: This website is under construction!", () => {
    render(<Home />);
    const linkElement = screen.getByText(/This website is under construction!/i);
    expect(linkElement).toBeInTheDocument();
});

test.skip("render text: Visit our Facebook page for more information.", () => {
    render(<Home />);
    const linkElement = screen.getByText(/Visit our Facebook page for more information./i);
    expect(linkElement).toBeInTheDocument();
});