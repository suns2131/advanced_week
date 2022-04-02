import {Route, Switch} from 'react-router-dom'
import schedule_save from './componets/Schedule_save'
import Main from './componets/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Main}/>
        <Route path={'/schedule_save'} exact component={schedule_save}/>
      </Switch>
    </div>
  );
}

export default App;
