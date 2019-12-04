import { Container } from "react-bootstrap";
import styled from "styled-components";

const MediaContainer = styled(Container)`
  @media (max-width: 1200px) {
    padding: 0 50px;
  }

  @media (max-width: 992px) {
    padding: 0 20px;
  }

  @media (max-width: 576px) {
    paddingTop: 0;
  }
`;

export default MediaContainer;