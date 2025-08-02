import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ListItem } from '../types/ListItem';
import FormComponentTest from '../components/FormTest';
import ListComponent from '../components/ListComponent';
import { useState } from 'react';

const mockedFunction = jest.fn()

// Parent component to manage shared state
function TestWrapper() {
  const [data, setData] = useState<ListItem[]>([
    { index: 1, value: 'Number' },
    { index: 2, value: 'Number two' },
    { index: 3, value: 'Number three' },
    { index: 4, value: 'Number four' },
  ]);

  const addFunction = (item: string) => {
    setData((prev) => [...prev, { index: prev.length + 1, value: item }]);
  };

  return (
    <>
      <FormComponentTest item="" onItemAdd={mockedFunction} />
      <ListComponent items={data} onDelete={() => {}} />
    </>
  );
}

describe('test unit', () => {
  test('list', async () => {
    // Render both components in a single render
    render(<TestWrapper />);

    // Verify list exists
    const list = await screen.findAllByRole('list');
    expect(list[0]).toBeInTheDocument(); // Check the first <ul> element

    // Verify input and button exist
    const inputField = screen.getByTestId('addItem');
    expect(inputField).toBeInTheDocument();

    const buttonSubmit = screen.getByTestId('addButton');
    expect(buttonSubmit).toBeInTheDocument();

    // Simulate user input and submission
    await userEvent.type(inputField, 'HolyCrap');
    expect(inputField).toHaveValue('HolyCrap');
    await userEvent.click(buttonSubmit);

    const listItemsInDom = screen.getAllByRole('listitem');
    //expect(listItemsInDom).toHaveLength(5); 
    expect(mockedFunction).toHaveBeenCalledWith('HolyCrap');

    // Debug DOM state
    screen.debug();
  });
});