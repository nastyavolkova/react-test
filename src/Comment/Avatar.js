import React from 'react'
import Avatar from '@mui/material/Avatar';


function Photo({url}) {
    return (
        <Avatar
            src={url}
            alt='Аватар'
            sx= {{ width: 80, height: 80 }}
        />
    );
};
export default Photo;
