import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from './QuestionsTabPanel';
import QuestionsList from './QuestionsList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(6),
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function QuestionsTabs(props) {
  const classes = useStyles();

  const { answeredQuestions, unansweredQuestions } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Answered Questions" {...a11yProps(0)} />
        <Tab label="Unanswered Questions" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <QuestionsList key={0} questions={answeredQuestions}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuestionsList key={1} questions={unansweredQuestions}/>
      </TabPanel>
    </Paper>
  );
}
