import {
    ContentButton
} from './styled';

const Button = ({label, addNumberInput }) =>{
    return(
        <ContentButton onClick={()=>addNumberInput(label)}>
            {label}
        </ContentButton>
    )
}

export default Button