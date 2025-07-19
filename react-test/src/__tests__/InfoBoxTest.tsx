import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import InfoBox from "../components/InfoBox";

describe ('this is my vagina', () => {
    test('testing', ()=> {
        render(<InfoBox type="warning" level="severity" />)

        const component = screen.findAllByText('level')

        expect(component).toBeInTheDocument
    });
});




