import React from "react";
import { Button, Modal } from 'flowbite-react';

function EnquiryPopup(props) {

  function closeModal() {
    props.setOpenModal(false);
  }

 return (
  <>
  <Modal show={props.openModal === true} onClose={() => closeModal()} className="bg-opacity-[0.36]">
    <Modal.Header className="font-mono border-slate-400 divide-transparent">
      Contact Information
    </Modal.Header>
    <Modal.Body className="overflow-none">
      <div>
        <p className="leading-loose text-base text-violet-950">
          Person In Charge: {props.advisor}
        </p>
        <p className="leading-loose text-base text-violet-950">
          Email: {props.email}
        </p>
      </div>
    </Modal.Body>
    <Modal.Footer className="border-slate-400">
      <Button onClick={() => {navigator.clipboard.writeText(props.email)}}>Copy Email</Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default EnquiryPopup;