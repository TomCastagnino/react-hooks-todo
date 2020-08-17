import { shallow, mount } from 'enzyme';
import React from 'react';
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {

    it('renders a list of todos', () => {
        const wrapper = mount(<TodoApp />);
        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

});