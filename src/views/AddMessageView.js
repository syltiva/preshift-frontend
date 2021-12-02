import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { createMessageInApi } from "../services/messageService"
import {Spinner} from "react-bootstrap"
import './AddMessageView.css'


function AddMessageView() {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState("")
    const [message, setMessage] = useState({
        image: "",
        date: "",
        covers: 0,
        eightySix: "",
        serviceNote: "",
        foodBev: "",
        misc: ""
    });
    
    const navigate = useNavigate();
   
    useEffect(() => {
    }, []);

    const handleChange = event => {
        setMessage({
            ...message,
            [event.target.name]: event.target.value,
        })
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        console.log("event.target.files[0] from Add:", event.target.files[0])
        setMessage({
            ...message,
            image: imageFile,
        });
        setPreview(URL.createObjectURL(imageFile));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        setLoading(true);
        setTimeout(async() => {
            await createMessageInApi(message);
            await navigate('/')
            setLoading(false);

        }, 2000)
        
        console.log("SUBMITTED!: ", message);
    }

    return (
        <div className="addview-background">
        <div className="container">
        {loading && (
          <div style={{textAlign: 'center', marginTop: 20}}> 
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="secondary" />
          <br/><p style={{color: "white"}}>loading.</p>
        </div>
        )}
        </div>
    <div className="form-card">
    <br/><br/><br/>

        <form className="form-style" >
        <h4>Add Preshift</h4>
                <label>Image:</label>
                <input 
                    className="form-control"
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    placeholder="image"

                /> <br/>

                <label>Date: </label>
                <input
                    className="form-control" 
                    type="text"
                    name="date"
                    value={message.date}
                    onChange={handleChange}
                    placeholder= "Saturday, 01/01/2050"
                /><br/>

                <label>Covers: </label>
                <input
                    className="form-control" 
                    type="number"
                    name="covers"
                    value={message.covers}
                    onChange={handleChange}
                /><br/>

                <label>86s: </label>
                <input
                    className="form-control" 
                    type="text"
                    name="eightySix"
                    value={message.eightySix}
                    onChange={handleChange}
                /><br/>

                <label>Service Notes: </label>
                <textarea
                    className="form-control" 
                    type="text"
                    name="serviceNote"
                    value={message.serviceNote}
                    onChange={handleChange}
                /><br/>

                <label>Food&Bev Update: </label>
                <textarea
                    className="form-control" 
                    type="text"
                    name="foodBev"
                    value={message.foodBev}
                    onChange={handleChange}
                /><br/>

                <label>Misc: </label>
                <textarea
                    className="form-control" 
                    type="text"
                    name="misc"
                    value={message.misc}
                    onChange={handleChange}
                /><br/>
                <button className="btn btn-outline-dark" onClick={handleSubmit} type="submit">Add Preshift</button>
                <img style={{width: 400, height: "auto", margin: "20px 0 40px 0"}} src={preview} />
        </form>
    </div>
    </div>
    
)};

export default AddMessageView;
