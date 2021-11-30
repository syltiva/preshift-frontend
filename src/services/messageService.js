import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL; 

// POST/message
export const createMessageInApi = async (message) => {
    const {image, ...newMessage} = message;
    console.log("message service, newMessage", newMessage);
    console.log("message service, message", message);

    const response = await axios.post(`${apiUrl}/messages/message`, newMessage);
    await imageUploadToApi(response.data._id, message.image)
    console.log("picture uploaded after message")
    await alert("New Preshift created")
    return response;
}

// POST/image
export const imageUploadToApi = async (id, img) => {
    console.log(id)
    console.log(img)
    const formData = new FormData();
    formData.append('image', img);
    const response = await axios.post(`${apiUrl}/messages/message/imageUpload/${id}`, formData);
    console.log('UPLOADING IMAGE')
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
