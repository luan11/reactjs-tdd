import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dropdown from '.';

const data = {
  title: 'My Dropdown',
  content: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sequi
      modi possimus doloremque nihil odit consequatur, error necessitatibus
      expedita commodi nam sed, autem ullam quis, quod cumque labore quibusdam
      at?
    </p>
  ),
};

describe('Dropdown Component', () => {
  it('should render correctly', () => {
    render(<Dropdown title={data.title}>{data.content}</Dropdown>);

    expect(
      screen.getByLabelText('Dropdown Title', { name: data.title })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Dropdown Content')).not.toBeEmptyDOMElement();
  });

  it('should start closed', () => {
    render(<Dropdown title={data.title}>{data.content}</Dropdown>);

    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByLabelText('Dropdown Content')).not.toBeVisible();
  });

  it('should toggle dropdown content when toggle button is clicked', () => {
    render(<Dropdown title={data.title}>{data.content}</Dropdown>);

    const toggleButton = screen.getByTestId('toggle');

    userEvent.click(toggleButton);

    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByLabelText('Dropdown Content')).toBeVisible();

    userEvent.click(toggleButton);

    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByLabelText('Dropdown Content')).not.toBeVisible();
  });
});
