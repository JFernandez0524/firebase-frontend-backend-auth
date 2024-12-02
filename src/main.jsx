import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container fluid='md'>
      <Row>
        <Col>
          <App />
        </Col>
      </Row>
    </Container>
  </StrictMode>
);
