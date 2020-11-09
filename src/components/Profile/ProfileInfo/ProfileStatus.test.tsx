import { create } from 'react-test-renderer'
import React from 'react'
const { default: ProfileStatus } = require("./ProfileStatus")




describe('Profile status component', () => {
  test('Status in props should be in the state', () => {
    const component = create(<ProfileStatus status={'New status'} />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('New status')
  })
  test('After ProfileStatus created, span should be displayed', () => {
    const component = create(<ProfileStatus status={'New status'} />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children.length).not.toBeNull()
  })
  test('After ProfileStatus created, input should not be displayed', () => {
    const component = create(<ProfileStatus status={'New status'} />)
    const root = component.root

    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })
  test('After ProfileStatus created status should be correct', () => {
    const component = create(<ProfileStatus status={'New status'} />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('New status')
  })
  test('Input should be displayed in edit mode instead of span', () => {
    const component = create(<ProfileStatus status={'New status'} />)
    const root = component.root
    let span = root.findByType('span')
    span.props.onClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('New status')
  })
  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status={'New status'} updateUserStatus={mockCallback} />)
    const instance = component.getInstance()
    instance.deActivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})