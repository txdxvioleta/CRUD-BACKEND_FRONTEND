import { useState } from 'react';
import { addUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from '../../components/Form';
import { v4 } from 'uuid';
import { alertAddUser } from '../../helpers/alerts';
import { useEffect } from 'react';
import { initialState } from '../../helpers/initialState';
import { validator } from '../../helpers/validator';

const AddUser = () => {
  //* Hooks:
  const [state, setState] = useState(initialState);
  const { jobId } = state; //Extraigo el campo para poder modificarlo de forma independiente
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Inserto el campo jobId en el state:
  useEffect(() => {
    setState({ ...state, jobId: v4() });
  }, []);

  //? Función que maneja los cambios de estado de los inputs:
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator(state) === true) {
      dispatch(addUser(state));
      alertAddUser('success', 'Added successfully');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <Form
      state={state}
      title={'Add user'}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddUser;
