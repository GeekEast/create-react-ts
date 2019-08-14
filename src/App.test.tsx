import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  it('should render withouth errors', () => {
    const component = shallow(<App></App>)
    console.log(component.debug())
    const wrapper = component.find('.jest')
    expect(wrapper.length).toBe(1)
  })
})
