import Navigation from "./Navigation";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
  );
}

export default App;
