import {
    ContentInput
} from './styled';


const Input = ({number}) =>{
    
    return(
        <ContentInput disabled value={number}/>
    )
}

export default Input;