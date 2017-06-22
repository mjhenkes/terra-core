import React from 'react';

import Collapse from '../../lib/Collapse';

const AnimatedCollapse = () => (
  <Collapse closedButtonText="Custom Text" isAnimated>
    <p>Lorem ipsum dolor sit amet, <a id="link" href="#test">consectetur</a> adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div>
      <label htmlFor="text-input">Text input</label>
      <input id="text-input" type="text" />
    </div>
    <br />
    <div>
      <label htmlFor="select-field">Select field</label>
      <select id="select-field">
        <option selected="selected">Option 01</option>
        <option>Option 02</option>
      </select>
    </div>
    <br />
    <div>
      <label htmlFor="textarea">Textarea</label>
      <textarea id="textarea" cols="30" rows="5">Textarea text</textarea>
    </div>
    <br />
    <div>
      <button id="button">button</button>
    </div>
  </Collapse>
);

export default AnimatedCollapse;