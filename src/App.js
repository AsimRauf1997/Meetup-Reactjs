import {Route, Switch} from 'react-router-dom'
import { Layout } from './components/layout/Layout';
import { Favourites } from './views/Favourites';
import { MeetUps } from './views/Meetups';
import { NewMeetup } from './views/NewMeetups';
function App() {
  return (
    <Layout>
     
      <Switch>
      <Route path='/' exact>
       <MeetUps/>
     </Route>
      <Route path='/new/meetup'>
      <NewMeetup/>
      </Route>
     <Route path='/favourites'>
     <Favourites/>
     </Route>
      </Switch>
      
     
     
    </Layout>
  );
}

export default App;
