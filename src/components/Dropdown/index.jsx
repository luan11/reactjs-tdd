import useToggle from './../../hooks/useToggle';

const Dropdown = ({ title, children }) => {
  const [opened, toggleOpened] = useToggle();

  return (
    <div aria-label="dropdown">
      <header>
        <h2 aria-label="dropdown-title">{title}</h2>
        <button data-testid="toggle" onClick={toggleOpened}>
          {opened ? '-' : '+'}
        </button>
      </header>

      {opened && <div aria-label="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
