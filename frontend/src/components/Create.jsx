import React, { useState, useRef } from 'react';
import '../styles/Create.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateForm = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Title, setTitle] = useState('');
  const [Issue, setIssue] = useState('');
  const [Location, setLocation] = useState('');
  const [Solution, setSolution] = useState('');
  const [Keywords, setKeywords] = useState('');
  const [IsAnonymous, setIsAnonymous] = useState(false);
  const [Caution, setCaution] = useState('');
  const [createdDate, setCreatedDate] = useState(new Date().toLocaleString());
  const isSubmitting = useRef(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Construct the post object with correct API field names
    const post = {
        ...(Title && { Title }),
        ...(Issue && { Issue }),
        ...(Location && { Location }),
        ...(Solution && { Solution }),
        ...(Keywords && { Keywords }),
        ...(IsAnonymous !== undefined && { IsAnonymous }),
        ...(Caution && { Caution }),
        ...(Name && { Name }),
        ...(Email && { Email }),
        createdDate
    };

    try {
        const response = await fetch('/api/routes', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            toast.error(`Error: ${json.error}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            // Clear the form fields and reset state on success
            setTitle('');
            setIssue('');
            setLocation('');
            setSolution('');
            setKeywords('');
            setIsAnonymous(false);
            setCaution('');
            setName('');
            setEmail('');
            toast.success('Post created successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            console.log("New post added:", json);
        }
    } catch (error) {
        toast.error(`Network error: ${error.message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
};

  return (
    <div className="create-container" id='create'>
      <h1 className="form-title">CREATE A POST</h1>
      <form className="create-form" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="Title">Post Title:</label>
          <input
            type="text"
            id="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the post title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Name">Your Name:</label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required={!IsAnonymous}
            disabled={IsAnonymous}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email">Your Email:</label>
          <input
            type="email"
            id="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Issue">Issue Description:</label>
          <textarea
            id="Issue"
            value={Issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Describe the issue in detail"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Location">Location:</label>
          <input
            type="text"
            id="Location"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the location related to the issue"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Solution">Suggested Solution (Optional):</label>
          <textarea
            id="Solution"
            value={Solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="Suggest a solution if you have any"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Keywords">Keywords:</label>
          <input
            type="text"
            id="Keywords"
            value={Keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Enter keywords (comma-separated)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="Caution">Caution Advice (Optional):</label>
          <textarea
            id="Caution"
            value={Caution}
            onChange={(e) => setCaution(e.target.value)}
            placeholder="Any advice or caution related to this issue"
          />
        </div>

        <div className="form-group">
          <label htmlFor="createdDate">Date Created:</label>
          <input
            type="text"
            id="createdDate"
            value={createdDate}
            readOnly
            disabled
          />
        </div>

        <div className="form-group">
          <label>Post Anonymously</label>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                name="IsAnonymous"
                value="yes"
                checked={IsAnonymous === true}
                onChange={() => setIsAnonymous(true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="IsAnonymous"
                value="no"
                checked={IsAnonymous === false}
                onChange={() => setIsAnonymous(false)}
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">Submit Post</button>
      </form>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default CreateForm;
