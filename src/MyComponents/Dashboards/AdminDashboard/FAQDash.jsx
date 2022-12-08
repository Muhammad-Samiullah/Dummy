import React, { useState, useEffect } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import Sidebar from './Sidebar';
import Modal from "react-bootstrap/Modal";
import {useFormik} from 'formik';
import TextField from '@material-ui/core/TextField';

const FAQDash = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editId, setId] = useState("");
  const [editQuestion, setQuestion] = useState("");
  const [editAnswer, setAnswer] = useState("");

  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);

  const handleEditShow = (id, question, answer) => {
    setId(id);
    setQuestion(question);
    setAnswer(answer);
    setEditShow(true);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    let obj = {'id': editId, 'question': editQuestion, 'answer': editAnswer};
    const res = await fetch("http://127.0.0.1:5000/editfaq", {
        method: "POST",
        body: JSON.stringify(obj),
      });
      console.log(res);
      data();
  }

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  }

  

  const [d, setd] = useState([]);
  const [user, setuser] = useState("");
  const data = async () => {
    const da = await fetch("http://127.0.0.1:5000/faqdashboard", {
      method: "POST",
    });
    let dat = await da.json();
    setd(dat.list);
  };
  useEffect(() => {
    data();
  }, []);

  let loc = useLocation();

  const deleteFaq = async (id) => {
    let obj = { id: id };
    let hasConfirmed = window.confirm("Are You Sure?");
    if (hasConfirmed) {
      const res = await fetch("http://127.0.0.1:5000/deletefaq", {
        method: "POST",
        body: JSON.stringify(obj),
      });
      console.log(res);
      data();
    }
  };

  const addFaq = async () => {
    let dat = {"question": formik.values.question, "answer": formik.values.answer}
    const da = await fetch('http://127.0.0.1:5000/addfaq',{
        method: 'POST',
        body: JSON.stringify(dat)
    })
    let res = await da.text();
    if (res === 'Success') {
        let jso = {...dat, 'success': 'success'};
        data();
    }
    else {
        alert('Failed to Signup. Try with another email.')
    }
  }

  const formik = useFormik({
    initialValues: {
        question: "",
        answer: ""
    },
    onSubmit: ()=>{
        addFaq()
    }
});

  return (
    <div>
     <Sidebar />
      <main style={{minHeight: '100vh'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4>Admin Dashboard/Add FAQ</h4>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleShow}>
            Add FAQ
          </button>
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card">
                <div className="card-header">
                  <span>
                    <i className="bi bi-table me-2"></i>
                  </span>{" "}
                  FAQs
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="example"
                      className="table table-striped data-table"
                    >
                      <thead>
                        <tr>
                          <th>Question</th>
                          <th>Answer</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {d.map((e, i) =>
                          e.map((t, p) => (
                            <tr key={p}>
                              <td>{t.question}</td>
                              <td>{t.answer}</td>
                              <td style={{ width: "200px" }}>
                                <button
                                  className="btn btn-primary"
                                  onClick={() => handleEditShow(t.id, t.question, t.answer)}
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => deleteFaq(t.id)}
                                  className="ms-md-2 btn btn-danger"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} style={{height: 'auto', top: '20%'}}>
          <Modal.Header closeButton>
            <Modal.Title>Add FAQ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <TextField
                id="question"
                name="question"
                label="Enter Question"
                className="w-100"
                margin="normal"
                value={formik.values.question}
                onChange={formik.handleChange}
                required
            />
            <br />
            <label for="answer">Enter Answer</label>
            <textarea
                id="answer"
                type="answer"
                name="answer"
                label="Enter Answer"
                className="ma w-100"
                margin="normal"
                value={formik.values.answer}
                onChange={formik.handleChange}
                required
            >
            </textarea>
            <br />
            <button type="submit" className="mt-5 w-100 btn btn-success" onClick={handleClose}>Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <Modal show={editShow} onHide={handleEditClose} style={{height: 'auto', top: '20%'}}>
          <Modal.Header closeButton>
            <center>
              <Modal.Title>Edit FAQ</Modal.Title>
            </center>
          </Modal.Header>
          <Modal.Body>
          <form 
            onSubmit={handleEditSubmit}
            method="POST"
          >
            <TextField
                id="question"
                name="question"
                label="Enter Question"
                className="w-100"
                margin="normal"
                value={editQuestion}
                onChange={handleQuestionChange}
                required
            />
            <br />
            <label for="answer">Enter Answer</label>
            <textarea
                id="answer"
                type="answer"
                name="answer"
                label="Enter Answer"
                className="ma w-100"
                margin="normal"
                value={editAnswer}
                onChange={handleAnswerChange}
                required
            >
            </textarea>
            <br />
            <button type="submit" className="mt-5 w-100 btn btn-success" onClick={handleEditClose}>Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={handleEditClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

      </main>
    </div>
  );
};

export default FAQDash;
