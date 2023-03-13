import { createContext } from 'react';

const ListContext = createContext({
    // logged: false,
    // loginout: () => {},
    update: ()=>{ console.log('call context 00') },
});

export default ListContext;