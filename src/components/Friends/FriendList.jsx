import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types';
import s from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <ul className={s.list}>
            {friends.map(({id, isOnline, avatar, name}) => (                
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />                
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
    ),
};

export default FriendList;