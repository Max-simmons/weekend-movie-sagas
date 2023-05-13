import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';



function DetailsPage() {
    const history = useHistory();
    
    
    const backToHome = () => {
       history.push('/');
    }
    return (
        <>
        <button onClick = {backToHome} >Back to Home</button>
        </>
    );
}

export default DetailsPage;








