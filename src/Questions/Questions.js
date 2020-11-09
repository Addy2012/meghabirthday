import React,{useEffect} from 'react'
import TextScramble from '../scramble.js'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AnalogClock from 'analog-clock-react';
import { useHistory } from "react-router";
import './Question.css';

let options = {
  height: "25vh",
  width: "15rem",
  border: true,
  borderColor: "#2e2e2e",
  baseColor: "#17a2b8",
  centerColor: "#459cff",
  centerBorderColor: "#fff",
  handColors: {
    second: "#d81c7a",
    minute: "#fff",
    hour: "#fff"
  }
};
const selectPapa = [
  'None',
  'Aruna Sinha',
  'Navin Sinha',
  'Nitesh Sinha',
  'Niharika Sinha',
  'Rahul Sinha',
  'Lee Min Ho',
  'Shah Rukh Khan'
];
const singers = [
  'None',
  'Atif Aslam',
  'Arijit Singh',
  'Shreya Ghosal',
  'Dhvani Bhanushali',
  'Gurmeet Ram Rahim Singh Insaan',
];
const vacationPlan = [
  'None',
  'Eiffel Tower(Paris)',
  'South Korea',
  'Hyderabad Film City',
  'House of KRK',
  'Burj Khalifa(Dubai)',
]
const actors = [
  'None',
  'RajKumar Rao',
  'Akshay Kumar',
  'Hritik Roshan',
  'Gurmeet Ram Rahim Singh Insaan',
  'Kamal Rashid Khan',
]
const friends = [
  'None',
  'Priyanka Rajput',
  'Sweta Tiwari',
  'Neha Shaw',
  'Sushmita Saha'
]

function ConfirmationDialogRaw4(props) {
  const { onClose4, value4: valueProp4, open4, ...other } = props;
  const [value4, setValue4] = React.useState(valueProp4);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open4) {
      setValue4(valueProp4);
    }
  }, [valueProp4, open4]);

  const handleEntering4 = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel4 = () => {
    onClose4();
  };

  const handleOk4 = () => {
    onClose4(value4);
  };

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering4}
      aria-labelledby="confirmation-dialog-title"
      open={open4}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Who is your best roommate ?</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value4}
          onChange={handleChange4}
        >
          {friends.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel4} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk4} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
function ConfirmationDialogRaw3(props) {
  const { onClose3, value3: valueProp3, open3, ...other } = props;
  const [value3, setValue3] = React.useState(valueProp3);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open3) {
      setValue3(valueProp3);
    }
  }, [valueProp3, open3]);

  const handleEntering3 = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel3 = () => {
    onClose3();
  };

  const handleOk3 = () => {
    onClose3(value3);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering3}
      aria-labelledby="confirmation-dialog-title"
      open={open3}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Who is your favorite actor ?</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value3}
          onChange={handleChange3}
        >
          {actors.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel3} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk3} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
function ConfirmationDialogRaw2(props) {
  const { onClose2, value2: valueProp2, open2, ...other } = props;
  const [value2, setValue2] = React.useState(valueProp2);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open2) {
      setValue2(valueProp2);
    }
  }, [valueProp2, open2]);

  const handleEntering2 = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel2 = () => {
    onClose2();
  };

  const handleOk2 = () => {
    onClose2(value2);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering2}
      aria-labelledby="confirmation-dialog-title"
      open={open2}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Who is your dream place to visit ?</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="3rd"
          name="3rd"
          value={value2}
          onChange={handleChange2}
        >
          {vacationPlan.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel2} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk2} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ConfirmationDialogRaw1(props) {
  const { onClose1, value1: valueProp1, open1, ...other } = props;
  const [value1, setValue1] = React.useState(valueProp1);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open1) {
      setValue1(valueProp1);
    }
  }, [valueProp1, open1]);

  const handleEntering1 = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel1 = () => {
    onClose1();
  };

  const handleOk1 = () => {
    onClose1(value1);
  };

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering1}
      aria-labelledby="confirmation-dialog-title"
      open={open1}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Who is your favorite singer ?</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value1}
          onChange={handleChange1}
        >
          {singers.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel1} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk1} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    // }
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Who is your first crush ?</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {selectPapa.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw4.propTypes = {
  onClose4: PropTypes.func.isRequired,
  open4: PropTypes.bool.isRequired,
  value4: PropTypes.string.isRequired,
};
ConfirmationDialogRaw3.propTypes = {
  onClose3: PropTypes.func.isRequired,
  open3: PropTypes.bool.isRequired,
  value3: PropTypes.string.isRequired,
};
ConfirmationDialogRaw2.propTypes = {
  onClose2: PropTypes.func.isRequired,
  open2: PropTypes.bool.isRequired,
  value2: PropTypes.string.isRequired,
};
ConfirmationDialogRaw1.propTypes = {
  onClose1: PropTypes.func.isRequired,
  open1: PropTypes.bool.isRequired,
  value1: PropTypes.string.isRequired,
};
ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
    backgroundColor: '#c2a8d1'
  },
  buttonStyle :{
    margin: '0',
    top: 'auto',
    right: '10%',
    bottom: '34px',
    left: 'auto',
    position: 'absolute'
  },
  muiListItemDivider :{
    backgroundColor: '#737b52',
    border: '1px solid #c6c6c6',
    borderRadius: '16px',
    width: '25vw',
    backgroundClip: 'padding-box',
    marginLeft: '15%'
}
}));

export const Questions=(props)=> {
      useEffect(() => {
        const phrases = [props.questionData.message1,props.questionData.message2,props.questionData.message3,props.questionData.message4,props.questionData.message5,props.questionData.message6,props.questionData.message7,props.questionData.message8];
        // const phrases = ['Welcome Guys to this Javascript Course','Where you will get','a complete guide','for javascript','from basic to advance'];
        const el = document.querySelector('.glow');
        const fx = new TextScramble(el);
        let counter = 0;
        const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
        };
        next();
        // animate();
    },[props.questionData.message1,props.questionData.message2,props.questionData.message3,props.questionData.message4,props.questionData.message5,props.questionData.message6,props.questionData.message7,props.questionData.message8]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('selectPapa');
  const [open1, setOpen1] = React.useState(false);
  const [value1, setValue1] = React.useState('selectAtif');
  const [open2, setOpen2] = React.useState(false);
  const [value2, setValue2] = React.useState('selectSouthKorea');
  const [open3, setOpen3] = React.useState(false);
  const [value3, setValue3] = React.useState('noHint');
  const [open4, setOpen4] = React.useState(false);
  const [value4, setValue4] = React.useState('noHint');
  const [flagFirst, setFlagFirst] = React.useState(true);
  const [flagSecond, setFlagSecond] = React.useState(true);
  const [flagThird, setFlagThird] = React.useState(true);
  const [flagFourth, setFlagFourth] = React.useState(true);
  const [flagFifth, setFlagFifth] = React.useState(true);
  const history = useHistory();
  const buttonClick = () => {
    history.push("/greeting");
    window.location = '/greeting'
  };
  const handleClickListItem = () => {
    setOpen(true);
  };
  const handleClose = (newValue) => {
    console.log(props)
    setOpen(false);
    if (newValue && props.questionData.a1===newValue && flagFirst) {
      setFlagFirst(false);
      props.pointChange();
      setValue(newValue);
    }
  };
  const handleClickListItem1 = () => {
    setOpen1(true);
  };
  const handleClose1 = (newValue) => {
    setOpen1(false);
    if (newValue && props.questionData.a2===newValue && flagSecond) {
      setFlagSecond(false);
      props.pointChange();
      setValue1(newValue);
    }
  };
  const handleClickListItem2 = () => {
    setOpen2(true);
  };
  const handleClose2 = (newValue) => {
    setOpen2(false);
    if (newValue && props.questionData.a3===newValue && flagThird) {
      setFlagThird(false);
      props.pointChange();
      setValue2(newValue);
    }
  };
  const handleClickListItem3 = () => {
    setOpen3(true);
  };
  const handleClose3 = (newValue) => {
    setOpen3(false);
    if (newValue && props.questionData.a4===newValue && flagFourth) {
      setFlagFourth(false);
      props.pointChange();
      setValue3(newValue);
    }
  };
  const handleClickListItem4 = () => {
    setOpen4(true);
  };
  const handleClose4 = (newValue) => {
    setOpen4(false);
    if (newValue && props.questionData.a5===newValue && flagFifth) {
      setFlagFifth(false);
      props.pointChange();
      setValue4(newValue);
    }
  };
  return (
    <Grid container justify="space-between" className={classes.root}>
    <Grid className="glow" item lg={12} md={12} sm={12} xs={12}/>  
    <Grid>
      <List component="div" role="list">
        <ListItem 
          className={classes.muiListItemDivider}
          button
          divider 
          aria-haspopup="true"
          aria-controls="singer-menu"
          aria-label="5rd option list"
          onClick={handleClickListItem4}
          role="listItem" >
          <ListItemText primary="Best roommate" secondary={value4} />
        </ListItem>
        <ConfirmationDialogRaw4
          classes={{
            paper: classes.paper
          }}
          id="singer-menu"
          keepMounted
          open4={open4}
          onClose4={handleClose4}
          value4={value4}
        />
      </List>
      <List component="div" role="list">
        <ListItem 
          className={classes.muiListItemDivider}
          button
          divider 
          aria-haspopup="true"
          aria-controls="singer-menu"
          aria-label="4rd option list"
          onClick={handleClickListItem3}
          role="listItem" >
          <ListItemText primary="Favorite Actor" secondary={value3} />
        </ListItem>
        <ConfirmationDialogRaw3
          classes={{
            paper: classes.paper
          }}
          id="singer-menu"
          keepMounted
          open3={open3}
          onClose3={handleClose3}
          value3={value3}
        />
      </List>
      <List component="div" role="list">
        <ListItem 
          className={classes.muiListItemDivider}
          button
          divider 
          aria-haspopup="true"
          aria-controls="singer-menu"
          aria-label="3rd option list"
          onClick={handleClickListItem2}
          role="listItem" >
            <ListItemText primary="Dream place to visit" secondary={value2} />
        </ListItem>
        <ConfirmationDialogRaw2
          classes={{
            paper: classes.paper
          }}
          id="singer-menu"
          keepMounted
          open2={open2}
          onClose2={handleClose2}
          value2={value2}
        />
      </List>
      <List component="div" role="list">
      <ListItem 
        className={classes.muiListItemDivider}
        button
        divider 
        aria-haspopup="true"
        aria-controls="singer-menu"
        aria-label="singer list"
        onClick={handleClickListItem1}
        role="listItem" >
          <ListItemText primary="Favourite singer" secondary={value1} />
      </ListItem>
      <ConfirmationDialogRaw1
      classes={{
        paper: classes.paper
      }}
      id="singer-menu"
      keepMounted
      open1={open1}
      onClose1={handleClose1}
      value1={value1}
      />
      </List>
      <List component="div" role="list">
        <ListItem
          className={classes.muiListItemDivider}
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="Who is your first crush ?"
          onClick={handleClickListItem}
          role="listitem"
        >
          <ListItemText primary="First crush" secondary={value} />
        </ListItem>
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper,
          }}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
      </Grid>
      <Grid>
      <Box m={2} pt={3} >
        <AnalogClock {...options} />
      </Box>
    </Grid>
      <Grid container justify="flex-end" alignItems="flex-end">
      <Button disabled={!(props.pointMark===5)} onClick={buttonClick} className={classes.buttonStyle} variant="contained" color="primary">
        Proceed
      </Button>
      </Grid>
    </Grid>
  );
}