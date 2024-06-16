import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "../ui/button";

describe('Button tests', () => {
  test('should be clickable and the cail the onClick function', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Test</Button>)

    const button = getByText('Test')
    fireEvent.click(button)


    expect(handleClick).toHaveBeenCalled()
  })
})
