import React from 'react';
import Box from '@material-ui/core/Box';

export default function QuestionsTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>
          {children}
          </div>
        </Box>
      )}
    </div>
  );
}