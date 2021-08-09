import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { buyCake } from './redux';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import CakeContainer from './components/CakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
import UsersContainer from './components/UsersContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/> */}
      </div>
    </Provider>

  );
}

export default App;
