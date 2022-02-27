import React, { useState } from 'react';

export default function ModalPopup(visible) {
  const [modalVisible, setModalVisible] = useState(false)
  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  return (
    <>
      <div className="pop-modal">
        ㅅㄷㄴㅅ
      </div>
    </>
  )
}

ModalPopup.defaultProps = {
  visible: false
}


// return (
//   <>
//     <button onClick={openModal}>Open Modal</button>
//     {
//       modalVisible && <Modal
//         visible={modalVisible}
//         closable={true}
//         maskClosable={true}
//         onClose={closeModal}>Hello</Modal>
//     }
//   </>
// )