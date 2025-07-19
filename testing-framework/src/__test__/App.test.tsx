import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from "../App"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)

    const h1 = screen.findAllByText('fucking')
    expect(h1).toBeInTheDocument
})
