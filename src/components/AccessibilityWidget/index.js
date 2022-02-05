import { React, useState } from "react";
import "./style.css";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";


function AccessibilityWidget() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isOff, setIsOff] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Accessbility Options
      </Button>

      <Modal
      className="modal"
      show={show} 
      onHide={handleClose}
    //   size="lg"
      >
        <Modal.Header className="text-center d-flex align-items-center" closeButton>

            {/* Change Positions Button */}
            <Button variant="secondary" className="positionBtn"><i class="fas fa-arrows-alt-h"></i></Button>

            {/* Question Mark Button */}
            <Button variant="secondary" className="questionBtn"><i class="fas fa-question"></i></Button>

        </Modal.Header>

        <Modal.Header className="text-center">

            {/* Title */}
            
            <Modal.Title className="text-center">Accessibility Adjustments</Modal.Title>
            
            {/* Language Dropdown Selector */}
            <DropdownButton
                className="langBtn float-right"
                key={DropdownButton}
                size="sm"
                variant="warning"
                title="English"
            >
                <Dropdown.Item eventKey="1">French</Dropdown.Item>
                <Dropdown.Item eventKey="2">Spanish</Dropdown.Item>
                <Dropdown.Item eventKey="3">Italian</Dropdown.Item>
                <Dropdown.Item eventKey="4">German</Dropdown.Item>
                <Dropdown.Item eventKey="5">Turkish</Dropdown.Item>
                <Dropdown.Item eventKey="6">Arabic</Dropdown.Item>
                <Dropdown.Item eventKey="7">Portugese</Dropdown.Item>
            </DropdownButton>
        </Modal.Header>
        <Modal.Body>

        {/* Reset Settings */}

        <div className="text-center">

            <Button className="resetBtn" size="sm" variant="secondary">Reset Settings <i class="fas fa-sync-alt"></i></Button>

        </div>

        {/* Search Field */}

        

        <input className="searchBarAccess" type="text" placeholder="Search the online dictionary"/>

        {/* Seizure Safe Profile */}

        <div className='switchProfile custom-control custom-switch'>
            <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitch1'
            readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitch1'>
            Seizure Safe Profile (Eliminates flashes and reduces color)
            </label>
        </div>

        {/* Vision Impaired Profile */}

        <div className='switchProfile custom-control custom-switch'>
            <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitch2'
            readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitch2'>
            Vision Impaired Profile (Enhances the website's visuals)
            </label>
        </div>

        {/* Cognitive Disability Profile */}

        <div className='switchProfile custom-control custom-switch'>
            <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitch3'
            readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitch3'>
            Cognitive Disability Profile (Assists with reading &amp; focusing)
            </label>
        </div>

        {/* ADHD Friendly Profile */}

        <div className='switchProfile custom-control custom-switch'>
            <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitch4'
            readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitch4'>
            ADHD Friendly Profile (More focus and fewer distractions)
            </label>
        </div>

        {/* Blind Users (Screen-reader) */}

        <div className='switchProfile custom-control custom-switch'>
            <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitch5'
            readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitch5'>
            Blind Users (Screen-reader)
            </label>
        </div>

        {/* Keyboard Navigation (Motor) */}

        <div className='switchProfile custom-control custom-switch'>
            <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitch6'
            readOnly
            />
            <label className='custom-control-label' htmlFor='customSwitch6'>
            Keyboard Navigation (Motor)
            </label>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="sm" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AccessibilityWidget;