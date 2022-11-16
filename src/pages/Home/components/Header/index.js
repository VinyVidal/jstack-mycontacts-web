import { Container } from "./styles";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header({ hasError, contactsLength, filteredContactsLength }) {
  const alignment = hasError
    ? 'flex-end'
    : (
      contactsLength > 0
        ? 'space-between'
        : 'center'
    );

  return (
    <Container
      justifyContent={alignment}
    >
      {(!hasError && contactsLength > 0) && (
        <strong>
          {filteredContactsLength}
          {filteredContactsLength === 1 ? ' contato' : ' contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  contactsLength: PropTypes.number.isRequired,
  filteredContactsLength: PropTypes.number.isRequired,
};
