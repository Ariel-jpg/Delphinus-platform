import React from 'react';

const HomeScreen = (props) => {
    console.log(props)
    
    return <>
    <div onClick={() => props.disptach_a()}>
        AAAAAAA <br /> 
        number: {props.a}
    </div>
</>

}

export default HomeScreen;