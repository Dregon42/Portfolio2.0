import React, {useState} from 'react';
import { Modal, Box, Fade, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function FigmaModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <div className="inline-flex flex-col h-[369px] items-center justify-center gap-[26px] px-[37px] py-[31px] relative flex-[.5] bg-[#d9d9d9dd] rounded-[100px] shadow-[5px_-8px_40px_#000000]">
        <img
            className="relative self-stretch w-full h-[234px] ml-[-8.50px] mr-[-16.50px] object-cover"
            alt="Box champy"
            src="assets/Untitled.png"
            onClick={handleOpen}
        />
        <div className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-variable-collection-slate text-[20px] text-center tracking-[0] leading-[normal]">
            <h3>Created with Figma</h3>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
        >
            <Fade in={open}>
                <Box sx={style}>

                        <img
                            className="modal-image object-center h-[100%] w-[100%]"
                            alt="Box champy"
                            src="assets/Untitled.png"
                        />
                        <Button onClick={handleClose}>Close</Button>
                
                </Box>
            </Fade>
        </Modal>
    </div>
  )
}
