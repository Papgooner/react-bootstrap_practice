import './App.css';
import { Button, Alert, Breadcrumb, Cart, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={({color: "#000"})}>
          <Card.Img />
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
          </Card>
      <Button>Button</Button>
      <Alert variant="success">Success</Alert>
      <Alert variant="secondary">Secondary</Alert>
      <Breadcrumb>
        <Breadcrumb.Item>One</Breadcrumb.Item>
        <Breadcrumb.Item>Two</Breadcrumb.Item>
        <Breadcrumb.Item active>Three</Breadcrumb.Item>
      </Breadcrumb>
      </header>
    </div>
  );
}

export default App;
