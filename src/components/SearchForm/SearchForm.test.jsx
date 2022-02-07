/**
 * @jest-environment jsdom
 */

import React from 'react'
import SearchForm from './SearchForm'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Search Form Component', () => {
  it('returns onSearch callback for valid term', () => {
    const onSubmitMock = jest.fn()
    render(<SearchForm onSearch={onSubmitMock} />)
    const input = screen.getByTestId('search-input')
    const button = screen.getByTestId('search-button')
    expect(input.value).toBe('')
    userEvent.click(button)
    expect(onSubmitMock).not.toHaveBeenCalled()
    userEvent.type(input, 'react')
    expect(input.value).toBe('react')
    userEvent.click(button)
    expect(onSubmitMock).toHaveBeenCalledWith('react')
  })
})
