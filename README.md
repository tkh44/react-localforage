

# react-localforage
Declarative [localForage](https://github.com/localForage/localForage) in React

[![npm version](https://badge.fury.io/js/react-localforage.svg)](https://badge.fury.io/js/react-localforage)
[![Build Status](https://travis-ci.org/tkh44/react-localforage.svg?branch=master)](https://travis-ci.org/tkh44/react-localforage)
[![codecov](https://codecov.io/gh/tkh44/react-localforage/branch/master/graph/badge.svg)](https://codecov.io/gh/tkh44/react-localforage)

-   [Install](#install)
-   [Forage.GetItem](#foragegetitem)
-   [Forage.SetItem](#foragesetitem)

## Install

```bash
npm install -S react-localforage
```

```javascript
import Forage from 'react-localforage'
```

## API

### `Forage.GetItem`

```jsx
<Forage.GetItem
  key='auth-token'
  render={({inProgress, value, error}) => {
    return (
      <div>
        {error &&
        <div>
          {error.message}
        </div>}
        {inProgress && <progress/>}
        {value &&
         <pre>{JSON.stringify(value, null, 2)}</pre>}
      </div>
    )
  }}
/>
```

### `Forage.SetItem`

```jsx
<Forage.SetItem
  itemKey='auth-token'
  itemValue={authToken}
  render={({inProgress, value, error}) => {
    return (
      <div>
        {error &&
        <div>
          {error.message}
        </div>}
        {inProgress && <progress/>}
        {value &&
        <div>
          {value}
        </div>}
      </div>
    )
  }}
/>
```

