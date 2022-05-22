import Profile from 'components/Profile/User'
import user from './jsons/user.json'
import Statistics from 'components/Data/Statistics'
import data from './jsons/data.json'
import FriendList from 'components/Friends/FriendList'
import friends from './jsons/friends.json'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'
import transactions from './jsons/transactions.json'

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;