import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL; // REACT.APP.API_URL goes to a different location (globals.d.ts)

// POST/message
export const createMessageInApi = async (message) => {
    console.log("CREATE, newMessage");
    const response = await axios.post(`${apiUrl}/messages/message`, message);
    /* await imageUploadToApi(response.data._id, image)*/
    alert("New Preshift created")
    return response;
}

// GET/coffees
export const getAllMessages = async () => {
    const response = await axios.get(`${apiUrl}/messages`);
    return response;
}

// GET/singleMessage
export const getSingleMessageFromApi = async (id) => {
    const response = await axios.get(`${apiUrl}/messages/message/${id}`);
    return response;
}

// Put/messages/message/id
export const updateMessageInApi = async (obj) => {
    /* const{ image, ...message} = obj */
    const response = await axios.put(`${apiUrl}/messages/message/${obj._id}`, obj);
    alert ("Preshift Updated")
    return response;
}

// DELETE/messages/message/id
export const deleteMessageInApi = async (id) => {
    const response = await axios.delete(`${apiUrl}/messages/message/${id}`);
    alert("Preshift Deleted")
    return response;
}

// POST/image
export const imageUploadToApi = async (id, img) => {
    const formData = new FormData();
    formData.append('image', img);
    const response = await axios.post(`${apiUrl}/messages/message/imageUpload/${id}`, formData);
    return response;
}


