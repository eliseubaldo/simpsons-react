import React from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
width: 100px;
height: 100px;
border: 1px solid red;
background: firebrick;
color: white;
`

function Character({name}) {
    return (
        <Container>
            <h3>{name}</h3>
        </Container>
    );
}

export default Character;