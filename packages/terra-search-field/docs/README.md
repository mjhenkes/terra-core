# Terra Search Field

A search component with a field that automatically performs a search callback after user input.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-search-field`

## Usage

```jsx
import React from 'react';
import SearchField from 'terra-search-field';

// Search Field with placeholder
<SearchField placeholder="Search" />

// Search Field with callback function and delay
<SearchField searchDelay={500} onSearch={(searchText) => { console.log(searchText); }} />

// Search Field with callback function and minimum search text length
<SearchField minimumSearchTextLength={5} onSearch={(searchText) => { console.log(searchText); }} />

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
