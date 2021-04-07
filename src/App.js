import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Chats from './pages/chats'
import Conversation from './pages/conversation'
import Contacts from './pages/contacts'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:username">
            <Conversation />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Chats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
