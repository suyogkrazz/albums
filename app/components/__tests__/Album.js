import ReactNative from 'react-native';
import React, {Component} from 'react';
import renderer from 'react-test-renderer';

import {Album} from '../Album';
describe('Component', ()=> {
 it('Should Render Correctly', ()=> {
 	const props = {
      fetchedAlbums: [],
      fetchAlbums: () => {return Promise.resolve([])}
    };
  const tree = renderer.create(
   <Album { ...props} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
 });
});