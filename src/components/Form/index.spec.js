import React from 'react';
import {shallow} from 'enzyme'
import Form from '.';

describe('Form component', () => {
    let props;
    let sut;

    beforeEach(() => {

        jest.spyOn(global,'Date')
            .mockImplementation(() => ({
                toISOString: () => '2022-11-12T21:03:07.642Z'
            }));

        props = {
            onChange: jest.fn()
        };

        sut = shallow(<Form {...props}/>);
    });

    describe('When edit Form', () => {
        it('should change value input', () => {
            let input = sut.find('Input[name=value]').at(0);
            input.simulate('change', {target: {
                value: '1111',
                name: 'value'
            }});
            sut.update();
            let {value} = input.props();
            expect(value).toBe('1111');
        })

        it('should change comment input', () => {
            let input = sut.find('Comment[name=comment]').at(0);
            input.simulate('change', {target: {
                value: 'New Comment',
                name: 'comment'
            }});
            sut.update();
            let {value} = input.props();
            expect(value).toBe('New Comment');
        })
    })

    describe('When user submit form', () => {
        it('should call onChange from props', () => {
            const form = sut.find('form');
            form.simulate('submit', {
                preventDefault: jest.fn()
            })
            expect(props.onChange).toHaveBeenCalled(1);
        })

        it('should send form data', () => {
            let input1 = sut.find('Input[name=value]').at(0);
            input1.simulate('change', {target: {
                value: '1111',
                name: 'value'
            }});

            let input2 = sut.find('Comment[name=comment]').at(0);
            input2.simulate('change', {target: {
                value: 'New Comment',
                name: 'comment'
            }});

            sut.update();
            const form = sut.find('form');

            form.simulate('submit', {
                preventDefault: jest.fn()
            });

            expect(props.onChange).toHaveBeenCalledWith({
                value: '1111',
                date: '2022-11-12',
                comment: 'New Comment'
            });

        })
    })

})