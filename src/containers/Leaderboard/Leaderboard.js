import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

import LeaderboardEntry from './LeaderboardEntry';

const getSortedUserIdsByScore = ((users) => 
  Object.keys(users)
    .sort((a,b) => 
      (Object.keys(users[b].answers).length + Object.keys(users[b].questions).length) -
      (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length)
    )
);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
  },
}));

const Leaderboard = () => {
  const classes = useStyles();

  const users = useSelector(state => state.users);

  const sortedUserIds = getSortedUserIdsByScore(users);

  return (
    <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Question</TableCell>
            <TableCell>Answers</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUserIds.map((userId, index) => (
            <LeaderboardEntry key={userId} userId={userId} place={index + 1} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
};

export default Leaderboard;
