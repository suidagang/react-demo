import { useHistory } from 'react-router';

const Compnent = () => {
  const history = useHistory();
  
  return (
    <button onClick={() => history.push('/home')}>go home</buttn>
  )
}