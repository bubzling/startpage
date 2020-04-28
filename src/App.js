import React from 'react';

import UrlLists from './components/UrlLists';
import SearchBar from './components/SearchBar';

/*
  Main container for launchpad
*/

function App() {
  return (
    <div>
      Main div
      <UrlLists />
      <SearchBar />
    </div>
  );
}

export default App;
