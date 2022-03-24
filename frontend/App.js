import { Provider } from "react-redux";
import store from "./store";
import { Dashboard } from "./react-redux/components/Dashboard";
import { Adduser } from "./react-redux/components/admin/Adduser";
export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
      {/* <Adduser /> */}
    </Provider>
  );
}
