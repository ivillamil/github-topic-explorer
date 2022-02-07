/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import TopicsList from './TopicsList'
import userEvent from '@testing-library/user-event'

describe('Topics List Component', () => {
  const topicsListMock = [
    { id: 0, name: 'topic', stargazerCount: 12 }
  ]
  it('displays a list of topics', () => {
    render(<TopicsList topics={topicsListMock} />)
    const topicItems = screen.getAllByTestId('topic-item')
    expect(topicItems).toHaveLength(1)
    const itemNode = topicItems[0]
    const itemName = itemNode.querySelector('h3')
    const itemStars = itemNode.querySelector('p')
    expect(itemName.innerHTML).toBe(topicsListMock[0].name)
    expect(itemStars.innerHTML).toBe(`stars: ${topicsListMock[0].stargazerCount.toString()}`)
  })

  it('calls onSelected callback when clicking on a topic element', () => {
    const onSelectedMock = jest.fn()
    render(
      <TopicsList
        onSelected={onSelectedMock}
        topics={topicsListMock}
      />
    )
    const topicItems = screen.getAllByTestId('topic-item')
    expect(topicItems).toHaveLength(1)
    userEvent.click(topicItems[0])
    expect(onSelectedMock).toHaveBeenCalledWith(topicsListMock[0].name)
  })

  it('returns null when no topics list is provided', () => {
    const {container} = render(<TopicsList />)
    expect(container.firstChild).toBeNull()
  })
})
