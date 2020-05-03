import axios from 'axios';

const KEY = 'AIzaSyCBBB4vscKI_dd2TRdJX7d_-MFMNb9tioo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});