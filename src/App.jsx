import Profile from './components/Profile/User'
import user from './jsons/user.json'
import Statistics from './components/Data/Statistics'
import data from './jsons/data.json'

const App = () => {
  return (
    <div>    
        <Profile
        key={user.tag}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}        
        />         
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};

export default App;