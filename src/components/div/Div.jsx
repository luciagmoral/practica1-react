import StyledDiv from "./styles";
import Tittle from "../tittle/Tittle";

const Div = ({color}) =>{
console.log(color)
return (
    <>
        <StyledDiv color={color}><Tittle text = "Hola">

</Tittle>
</StyledDiv>

    {/* <StyledDiv color='#549EF2'>
    
    </StyledDiv>
    <StyledDiv color='#FCAE4A'>
    
    </StyledDiv>
    <StyledDiv color='#44D3D2'>
    
    </StyledDiv> */}

    </>
);
};
export default Div;