import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';

import PlipItem from './PlipItem';
import PLIPMOCK from '../../mocks/plipsMockStatic';
import AUTHORS_LIST_MOCK from '../../mocks/authorsMockStatic';

configure({ adapter: new Adapter() });
const renderer = new ShallowRenderer();

const defaultProps = {
  plip: PLIPMOCK[0],
  unplipHandler: jest.fn(),
  author: AUTHORS_LIST_MOCK[3]
};

const fakeProps = {
  plip: PLIPMOCK[1],
  unplipHandler: jest.fn(),
  author: AUTHORS_LIST_MOCK[2]
};

function setup(props = defaultProps) {
  const component = shallow(<PlipItem {...props} />);

  return {
    component,
    deleteButton: component.find('button.plip-delete')
  };
}

describe('PlipItem Component --- Snapshot testing', () => {
  it('Default value (empty array)', () => {
    const renderedValue = renderer.render(<PlipItem {...defaultProps} />);
    expect(renderedValue).toMatchSnapshot();
  });

  it('Component with custom data', () => {
    const renderedValue = renderer.render(<PlipItem {...fakeProps} />);
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('PlipItem Component ---- Pure testing', () => {
  const { component, deleteButton } = setup();

  it('Render Component as is', () => {
    expect(component.length).toEqual(1);
  });

  it('Test unplipHandler function', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    deleteButton.simulate('click', fakeEvent);
    expect(defaultProps.unplipHandler).toBeCalled();
    expect(defaultProps.unplipHandler.mock.calls[0][0]).toEqual(defaultProps.plip.id);
  });

  it('Check default state', () => {
    expect(component.find('.plip-item-content .text').text()).toEqual(defaultProps.plip.content);
    expect(component.find('.plip-item-avatar .title').text()).toEqual(`${defaultProps.author.firstName} ${defaultProps.author.lastName}`);
  });

  it('Check custom state display', () => {
    const {component: componentWithData} = setup(fakeProps);
    expect(componentWithData.find('.plip-item-content .text').text()).toEqual(fakeProps.plip.content);
    expect(componentWithData.find('.plip-item-avatar .title').text()).toEqual(`${fakeProps.author.firstName} ${fakeProps.author.lastName}`);
  });
});
