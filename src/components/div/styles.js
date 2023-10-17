import styled from 'styled-components';

const StyledDiv = styled.div`
width: 350px;
height: 250px;
flex-shrink: 0;
background-color: #fff;
border-radius: 8px;
border-color: 3px;
border-top-style: solid;
border-top-color: ${(props)=>props.color};

`
export default StyledDiv;