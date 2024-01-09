import { useDispatch } from 'react-redux';
import { deleteContactAPI } from 'store/operations/contactsOpps';

export const Contact = props => {
  const dispatch = useDispatch();

  function handleDelete(e) {
    const idToDelete = e.target.attributes.dataid.value;

    dispatch(deleteContactAPI(idToDelete));
  }

  return (
    <li>
      <p>{props.name}: </p>
      <p>{props.number}</p>
      <button dataid={props.dataid} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
