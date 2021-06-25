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
    <DropdownContainer aria-label="dropdown">
      <DropdownHeader>
        <DropdownHeaderTitle aria-label="dropdown-title">
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

      <DropdownContentContainer aria-hidden={opened} isOpened={opened}>
        {children}
      </DropdownContentContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
