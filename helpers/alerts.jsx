import Swal from 'sweetalert2';

//Alerta reutilizable (actions):
export const errorMsg = (icon, title) => {
  Swal.fire({
    icon,
    title,
  });
};


//Alertas que se muestran en las validaciones de los formularios:
export const alertAddUser = (icon,title) => {
  Swal.fire({
    icon,
    title,
    showConfirmButton: false,
    timer: 2000,
  });

}

export const confirmChanges = () => {
  Swal.fire({
    icon: 'success',
    title: 'Update successfully',
    showConfirmButton: false,
    timer: 1500,
  });
}