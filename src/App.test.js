import React from 'react';
import App from './App';

import {create,act} from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('render App without crashing',()=>{
    let rootApp
    act(()=>{
        rootApp = create(<App/>);
    })
    
    expect(rootApp.toJSON()).toMatchSnapshot();
})