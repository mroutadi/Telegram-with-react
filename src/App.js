import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Chats from './pages/chats'
import Conversation from './pages/conversation'
import Contacts from './pages/contacts'
import { ContextProvider } from './context';

function App() {
  const [mobileSize, setMobileSize] = useState(null)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 537) {
        setMobileSize(false);
      } else setMobileSize(true)
    })
  })
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/:username">
              {mobileSize && <Chats />}
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
