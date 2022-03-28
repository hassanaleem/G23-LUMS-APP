import { Provider } from "react-redux";
import store from "./store";
import { Dashboard } from "./react-redux/components/Dashboard";
import { Adduser } from "./react-redux/components/admin/Adduser";
import {Login_screen} from "./react-redux/components/Login_screen";
export default function App() {
  return (
    <Provider store={store}>
      <Login_screen/>
      {/* <Dashboard /> */}
      {/* <Adduser /> */}
    </Provider>
  );
}
