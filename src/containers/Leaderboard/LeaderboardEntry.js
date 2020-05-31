import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';

const LeaderboardEntry = ({userId, place}) => {

  const user = useSelector(state => state.users[userId]);

  const answersCount = Object.keys(user.answers).length;
  const questionsCount = Object.keys(user.questions).length;

  return (
    <TableRow key={user.id} hover={true}>
      <TableCell>{place}</TableCell>
      <TableCell>
        <Avatar alt={`avatar of ${user.name}`} src={ user.avatarURL } />
        {user.name}
      </TableCell>
      <TableCell>{answersCount}</TableCell>
      <TableCell>{questionsCount}</TableCell>
      <TableCell>{answersCount + questionsCount}</TableCell>
    </TableRow>
  )
};

export default LeaderboardEntry;