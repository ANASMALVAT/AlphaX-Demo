import React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import "./styles/componentExploreDetail.css"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ComponentAlphaAlgo =  ({isOpen}) => {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return(
    <div>
      <button onClick={handleClickOpen} className={`what-button overflow-hidden mt-8 mb-4 flex flex-row items-center text-center align-middle  rounded-sm px-6  font-mono font-normal justify-center text-white border bg-[#4C5ADF] hover:duration-300 border-b-8 border-[#4C5ADF]`}>
          Explore 
        <h1 className="ml-2 logo-com-3 font-bold antialiased text-[#2D33CA] hover:duration-300 hover:scale-125"> X </h1>
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className='closeIcon'
          sx={{
            color: "red",
            fontWeight:"bold",
            border:"none",
            
          }}
        >
        <CloseIcon/>
        </IconButton>
        <DialogContent dividers className='mt-6 border-none bg-algoXcolor text-white rounded-md overflow-hidden'>
          <Typography sx={{textAlignLast:"center"}} gutterBottom className=' text-justify  explore-text'>
            I'm Anas, 24 years old software Engineer and from early on I understood that to do well in these interviews, I needed to be great at solving coding problems. So I started practicing and learning how to solve coding problems. It was hard because I was doing it on my own with just the internet to help me.
          </Typography>
          <br></br>
          <Typography sx={{textAlignLast:"center"}} gutterBottom className=' text-justify  explore-text'>
            But with time and practice, I got really good at problem-solving. I even became one of the top 20 problem-solvers in the world on GeeksForGeeks. I solved more than 1400 coding problems in 2 years Then it hit me – we don't learn things just to show off how good we are. We learn things to help others avoid the mistakes we made. This realization inspired me to develop Alpha Algo. I wanted to show them that you don't need to spend years learning – with a few months of practice and a smart approach, you can get really good at handling any coding interview.
          </Typography>
          <br></br>
          <Typography sx={{textAlignLast:"center"}} gutterBottom className=' text-justify explore-text'>
            I discussed with people who conduct interviews at Tech giants like Meta, Microsoft & Google. I got to help students prepare for coding interviews and guide them. I spent around 20,000 hours building  and understanding this skill. And now, here we are with a platform that will help you become a problem-solving master. It's a place where you can learn, practice, and become really skilled at solving problems. It's not just about getting good at problems; it's about sharing what I've learned and helping you succeed. Welcome to Alpha Algo – the place where you can become a problem-solving pro!
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  )
};


export default ComponentAlphaAlgo;
