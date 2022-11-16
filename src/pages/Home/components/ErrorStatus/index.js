import { Container } from "./styles";
import sad from "../../../../assets/images/sad.svg";
import PropTypes from "prop-types";
import Button from "../../../../components/Button";

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Container>
      <img src={sad} alt="sad" />

      <div className="details">
        <strong>Ocorreu um erro ao obters os seus contatos!</strong>
        <Button onClick={onTryAgain}>
          Tentar Novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
}
