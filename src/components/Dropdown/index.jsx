import P from 'prop-types';

import useToggle from './../../hooks/useToggle';

import {
  DropdownContainer,
  DropdownHeader,
  DropdownHeaderTitle,
  DropdownHeaderButton,
  DropdownContentContainer,
} from './styled';

const Dropdown = ({ title, children }) => {
  const [opened, toggleOpened] = useToggle();

  return (
    <DropdownContainer aria-label="Dropdown">
      <DropdownHeader>
        <DropdownHeaderTitle aria-label="Dropdown Title">
          {title}
        </DropdownHeaderTitle>
        <DropdownHeaderButton
          type="button"
          data-testid="toggle"
          onClick={toggleOpened}
        >
          {opened ? '-' : '+'}
        </DropdownHeaderButton>
      </DropdownHeader>

      <DropdownContentContainer
        aria-label="Dropdown Content"
        aria-hidden={opened}
        isOpened={opened}
      >
        {children}
      </DropdownContentContainer>
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  title: P.string.isRequired,
  children: P.node.isRequired,
};

export default Dropdown;
