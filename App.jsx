import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import Navigation from './src/navigation';
import {store} from './src/app/store';
import {AuthProvider} from '~/common/AppContext';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
