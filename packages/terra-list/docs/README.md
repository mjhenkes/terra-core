# Terra List

The Terra List is a structural component to arrange content within list/listitems.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-list`
  - `yarn add terra-list`

## Usage

```jsx
import React from 'react';
import List from 'terra-list';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import MultiSelectList from 'terra-list/lib/MultiSelectList';

<List.Item
  content={<h1 blurb />}
  isSelected={true}
  isSelectable={true}
  hasChevron={false}
/>

<List isDivided={true}>
  <List.Item content={<h1 blurb />} />
  <List.Item content={<h1 blurb />} />
</List>

<SingleSelectList isDivided={true} hasChevrons={false}>
  <SingleSelectList.Item content={<h1 blurb />} />
  <SingleSelectList.Item content={<h1 blurb />} />
</SingleSelectList>

<MultiSelectList isDivided={true} maxSelectionCount={3}>
  <MultiSelectList.Item content={<h1 blurb />} />
  <MultiSelectList.Item content={<h1 blurb />} />
</MultiSelectList>

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
