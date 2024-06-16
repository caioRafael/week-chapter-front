import { expect, test } from 'vitest'
import Home from "./page"
import { render, screen } from "@testing-library/react"

test('Page', () => {
  render(<Home />)

  expect(screen.getByRole('heading', ({ level: 1, name: 'olá mundo' }))).toBeDefined()
})
