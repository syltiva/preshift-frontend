import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { createMessageInApi } from "../services/messageService"

function AddMessageView() {
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
        setMessage({
            ...message,
            image: imageFile,
        });
        setPreview(URL.createObjectURL(imageFile));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ", message);
        createMessageInApi(message);
        navigate('/')
        setMessage({})  
    }

    return (
    <div className="">

        <form style={{width: 500, margin: '20px auto', textAlign: 'left', border: '1px solid lightgrey', padding: 10}} onSubmit={handleSubmit}>
        <h4>Add Preshift</h4>
                <label>Image:</label>
                <input 
                    className="form-control"
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    placeholder="image"

                /> 

                <label>Date: </label>
                <input
                    className="form-control" 
                    type="text"
                    name="date"
                    value={message.date}
                    onChange={handleChange}
                    placeholder= "Saturday, 01/01/2050"
                />

                <label>Covers: </label>
                <input
                    className="form-control" 
                    type="number"
                    name="covers"
                    value={message.covers}
                    onChange={handleChange}
                />

                <label>86s: </label>
                <input
                    className="form-control" 
                    type="text"
                    name="eightySix"
                    value={message.eightySix}
                    onChange={handleChange}
                />

                <label>Service Notes: </label>
                <textarea
                    className="form-control" 
                    type="text"
                    name="serviceNote"
                    value={message.serviceNote}
                    onChange={handleChange}
                />

                <label>Food&Bev Update: </label>
                <textarea
                    className="form-control" 
                    type="text"
                    name="foodBev"
                    value={message.foodBev}
                    onChange={handleChange}
                />

                <label>Misc: </label>
                <textarea
                    className="form-control" 
                    type="text"
                    name="misc"
                    value={message.misc}
                    onChange={handleChange}
                />

                <button onClick={handleSubmit} type="submit">Add Preshift</button>

                
        </form>

        <img style={{height: 300, width: 'auto', margin: "20px 0 40px 0"}} src={preview} />
    </div>
)};

export default AddMessageView;
