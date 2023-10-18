import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Contact() {
  const initialFormdata = {
    email: '',
    password: '',
  };

  const passwordRef = useRef(null);

  const [formData, setFormData] = useState({ ...initialFormdata });
  const [error, setError] = useState({ email: null, password: null });
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Add state variable for success modal

  const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const changeHandler = (e) => {
    if (e.target.name === 'email' && !emailRegx.test(e.target.value)) {
      setError({ ...error, email: `should have format like this 'username@gmail.com'` });
    } else if (e.target.name === 'password' && e.target.value.length <= 8) {
      setError({ ...error, [e.target.name]: `${e.target.name} should be more than 8 characters` });
    } else {
      setError({ ...error, [e.target.name]: null });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !error.email &&
      !error.password &&
      emailRegx.test(formData.email) &&
      formData.password.length > 8
    ) {
      setFormData({ ...initialFormdata });
      setShowSuccessModal(true); // Show success modal if form data is valid
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowSuccessModal(false);
  };

  return (
    <>
      <div id="contact" className="container">
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img src='assets/images/contact-03.png' width="100%" height="100%"></img>

          </div>
          <div className='col-12 col-md-6'>

            <Form
              id='form'
              className="customHeight shadow-lg text-light text-center d-flex flex-column justify-content-center align-items-center p-5"
              onSubmit={submitHandler}
            >

              <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                <h2 id='h2'>contact us</h2>

                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name='email'
                  onChange={changeHandler}
                  value={formData.email}
                />
                <Form.Text className={error.email ? "p-2 text-danger w-75" : "text-muted"}>
                  {
                    error.email ? error.email : " We'll never share your email with anyone else."
                  }

                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 w-100" ref={passwordRef} controlId="formBasicPassword">

                <Form.Control
                  type="password"
                  placeholder="Password"
                  name='password'
                  onChange={changeHandler}
                  value={formData.password}

                />
                <Form.Text className={error.password ? "p-2 text-danger w-75" : "text-muted"}>
                  {
                    error.password ? error.password : " password should be more than 8 characters"
                  }

                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 w-100" ref={passwordRef} controlId="formBasicPassword">

                <Form.Control
                  type="text"
                  placeholder="message"
                  name='message'

                />

              </Form.Group>

              <Button id='form_btn' class="button-56" role="button" type="submit">
                Submit
              </Button>

            </Form>
          </div>

        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Invalid email or password. Please try again.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSuccessModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Data submitted successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}