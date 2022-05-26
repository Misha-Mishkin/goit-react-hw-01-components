import User from 'components/User/User'
import user from './jsons/user.json'
import Statistics from 'components/Statistics/Statistics'
import data from './jsons/data.json'
import FriendList from 'components/FriendList/FriendList'
import friends from './jsons/friends.json'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'
import transactions from './jsons/transactions.json'

const App = () => {
  return (
    <div>    
        <User        
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