import axios from 'axios';

const KEY = 'AIzaSyB63CGs7KxaAE0Bru4Dw3xJG07KTDUB9-8';

export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
