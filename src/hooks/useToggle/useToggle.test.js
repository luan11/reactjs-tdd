import { renderHook, act } from '@testing-library/react-hooks';

import useToggle from '.';

describe('useToggle Hook', () => {
  it('should return the default value as initial state', () => {
    const { result } = renderHook(useToggle);

    const [value] = result.current;

    expect(value).toBeFalsy();
  });

  it('should toggle the value when the toggle function is called', () => {
    const { result } = renderHook(useToggle);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBeTruthy();

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBeFalsy();
  });
});
