import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './pages/chats'
import Conversation from './pages/conversation'
import Contacts from './pages/contacts'
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/:username">
              <Conversation />
            </Route>
            <Route path="/">
              <Chats />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
