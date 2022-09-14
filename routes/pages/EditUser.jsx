import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleUser, updateUser } from '../../redux/actions';
import { Form } from '../../components/Form';
import { initialState } from '../../helpers/initialState';
import { validator } from '../../helpers/validator';
import { confirmChanges } from '../../helpers/alerts';
import Swal from 'sweetalert2';

const EditUser = () => {
  //Hook: useState
  const [state, setState] = useState({ initialState });

  //Recupero el id mediante el uso de params:
  const { id } = useParams();

  //Desestructuro user del state
  const { user } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Hook: useEffect()
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  //Verifico si está definido user:
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  //Función que se ejecuta cuando se produce un cambio en los inputs:
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //Función que se ejecuta al presionar el botón de 'add':
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator(state) === true) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          confirmChanges();
          dispatch(updateUser(state, id));
          setTimeout(() => {
            navigate('/');
          }, 1500);
        }
      });
    }
  };

  return (
    <>
      <Form
        state={state}
        title={'Edit user'}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditUser;
