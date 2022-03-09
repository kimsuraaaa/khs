import ReactDOM from 'react-dom';

export default function ModalPortal( children ){
// export default function ModalPortal(){
  const el = document.getElementById('modal');
  // const children = '<div>test2</div>';
  return ReactDOM.createPortal(children, el);
}