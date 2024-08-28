'use client';

import { Modal } from 'flowbite-react';
import OverviewFlow from './react-flow/reactFlow';
import ReactLoading from 'react-loading';


const ProblemVisualization = ({open,setOpen,questionVisualizationData}) => {

    const handleClose = () => {
        setOpen(false);
    }

    if(questionVisualizationData === null || !questionVisualizationData){
      return (
        <Modal show={open} onClose={() => handleClose()} >
        <Modal.Header className='flex items-center  justify-evenly custom-scrollbar! '>
            <h1 className=' text-2xl font-semibold leading-10 line-clamp-2 text-algoblack ml-2'>Alpha Visualizer</h1>
        </Modal.Header>
        <Modal.Body>
        <div className=' flex w-full h-full items-center justify-center'>
          <ReactLoading type={'cylon'} color={'gray'} height={667} width={375} />
        </div>
        </Modal.Body>
      </Modal>
      )
    }

    if(questionVisualizationData === 'Unauthorized'){
      return (
        <Modal show={open} onClose={() => handleClose()} >
        <Modal.Header className='flex items-center  justify-evenly custom-scrollbar! '>
            <h1 className=' text-2xl font-semibold leading-10 line-clamp-2 text-algoblack ml-2'>Alpha Visualizer</h1>
        </Modal.Header>
        <Modal.Body>
        <div className=' flex w-full h-full items-center justify-center'>
          <h1 className=' text-xl text-algoblack flex'><a href='/purchase' className=' text-[#4C5ADF] mr-1'>Purchase </a> to access Alpha Visualizer.</h1>
        </div>
        </Modal.Body>
      </Modal>
      )
    }

    return (
        <Modal show={open} onClose={() => handleClose()} >
        <Modal.Header className='flex items-center  justify-evenly custom-scrollbar! '>
            <h1 className=' text-3xl font-semibold leading-10 line-clamp-2 text-algoblack ml-2'>Alpha Visualizer</h1>
        </Modal.Header>
        <Modal.Body>
          <div className=" !custom-scrollbar flex justify-center items-center relative over">
            <OverviewFlow questionVisualizationData={questionVisualizationData} />
          </div>
        </Modal.Body>
      </Modal>
    )
}

export default ProblemVisualization;