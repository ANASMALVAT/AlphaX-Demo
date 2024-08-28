import React,{useState} from 'react'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';

const SuccessfulPurchase = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => {
        setOpen(open => false)
    }
    return(
        <>
            <AlphaNavbar/>
            <Modal
            open={open}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
            <ModalDialog
                color="success"
                variant="soft"
                layout='center'
            >
            <ModalClose onClick={closeModal} />
            <Typography color='success' level='h3'  >Purchase Successful</Typography>
            <Typography color='success' level='h5' sx={{marginTop:"20px"}}  >Welcome To Team AlpaAlgo, where cracking interview is our promise.</Typography>
        </ModalDialog>
        </Modal>
        </>
    )
}

export default SuccessfulPurchase;