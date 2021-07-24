import axios from 'axios';

const instance = axios.create({
    headers: {
        "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3100.0 Safari/537.36'
    }
})

instance.interceptors.response.use(res => {
    if (res.status === 200) {
        return Promise.resolve(res.data?.data)
    }
}, err => {
    console.error(JSON.stringify(err, null, 2))
    return Promise.reject(err);
})

export { instance }