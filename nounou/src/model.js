import {action} from 'easy-peasy';


export default {
    page: '',
    setPage: action((state, string) => {
        state.page = string;
    })
};
