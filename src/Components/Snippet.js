import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../App.css';

export default function Snippet(props) {
  const {item = {}} = props;
  const {bot, person} = item;
  const text = bot || person;
  return (
    <div>
      <Paper
        className="snippetBox"
        style={
          (bot)
            ? { float: 'left', backgroundColor: '#6accc3' }
            : { float: 'right' }
        }
      >
        <Typography component="p">{text}</Typography>
      </Paper>
    </div>
  );
}
