import React from 'react';
import User from '../../User';

const userList = [
  { name: 'Yan' },
  { name: 'Vasya' },
  { name: 'Anya' },
  { name: 'Artem' },
];

function Users() {
  return (
    <div>
      {userList.map((item) => (
        <User key={item.name} name={item.name} />
      ))}
    </div>
  );
}

export default Users;
