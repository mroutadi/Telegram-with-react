import { useState, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Chats from './pages/chats'
import Conversation from './pages/conversation'
import Contacts from './pages/contacts'
import { ConversationContextProvider } from './context/conversations';

function App() {
  return (
    <ConversationContextProvider>
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
    </ConversationContextProvider>
  );
}

export default App;
