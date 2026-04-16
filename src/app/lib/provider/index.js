import InstallContextProvider from '@/app/context/InstallContextProvider';
import React from 'react';

const Provider = ({children}) => {
    return (
     <InstallContextProvider>
        {children}
     </InstallContextProvider>
    );
};

export default Provider;