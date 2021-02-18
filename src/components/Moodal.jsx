import { Modal, Button, Space } from 'antd';



function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}



ReactDOM.render(
  <Space>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>,
  mountNode,
);