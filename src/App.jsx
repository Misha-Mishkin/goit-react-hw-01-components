import Profile from './components/User'
import user from './jsons/user.json'

const App = () => {
  return (
    <div>
      {
        <Profile
        key={user.tag}        
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      } 
    </div>
  );
};

export default App;


// {users.map(user => (
//         <Profile
//         key={user.tag}
//         avatar={user.avatar}
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//       />
//       ))}

// {
//         <Profile
//         key={user.tag}
//         avatar={user.avatar}
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//       />
//       } 