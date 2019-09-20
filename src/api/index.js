import axios from 'axios';

async function get() {
    let { data } = await axios.get('')
    return data;
}

export default {
    get
};