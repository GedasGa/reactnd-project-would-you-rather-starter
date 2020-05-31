import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import QuestionsTabPanel from './QuestionsTabPanel';
import QuestionsList from './QuestionsList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(6),
  },
  tabPanel: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
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
        textColor="primary"
        centered
      >
        <Tab label="Unanswered Questions" {...a11yProps(0)} />
        <Tab label="Answered Questions" {...a11yProps(1)} />
      </Tabs>
      <QuestionsTabPanel value={value} index={0} className={classes.tabPanel}>
        <QuestionsList questions={unansweredQuestions}/>
      </QuestionsTabPanel>
      <QuestionsTabPanel value={value} index={1} className={classes.tabPanel}>
        <QuestionsList questions={answeredQuestions}/>
      </QuestionsTabPanel>
    </Paper>
  );
}
