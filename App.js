import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './FReducers/FIndex';
import ServiceAction from './FActions/FAservicesimpl';

export default class Async_Redux extends Component {
    render() {
        return (
            <Provider store={store}>
                <ServiceAction />
            </Provider>
        );
    }
}