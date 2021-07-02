import Navigation from "./Navigation";
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {persistor,store} from "./store/store";

function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
        <Navigation/>
          </PersistGate>
      </Provider>
  );
}

export default App;
