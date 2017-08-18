/* eslint-env jest */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Forage from '../index'
import renderer from 'react-test-renderer'
const TestUtils = require('react-dom/test-utils')

describe('Forage.GetItem', () => {
  test('renders', () => {
    const tree = renderer.create(<Forage.GetItem lazy />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders with children', () => {
    const renderCallback = result => {
      return (
        <pre>
          {JSON.stringify(result)}
        </pre>
      )
    }
    const tree = renderer
      .create(
        <Forage.GetItem lazy>
          {renderCallback}
        </Forage.GetItem>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('can render with no children', () => {
    TestUtils.renderIntoDocument(<Forage.GetItem lazy />)
  })
})

describe('Forage.SetItem', () => {
  test('renders', () => {
    const tree = renderer.create(<Forage.SetItem lazy/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders with children', () => {
    const renderCallback = result => {
      return (
        <pre>
          {JSON.stringify(result)}
        </pre>
      )
    }
    const tree = renderer
      .create(
        <Forage.SetItem lazy>
          {renderCallback}
        </Forage.SetItem>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('can render with no children', () => {
    TestUtils.renderIntoDocument(<Forage.SetItem lazy/>)
  })
})
