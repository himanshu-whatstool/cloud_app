import { Modal } from 'antd';

export const EntryDialog = ({ open, onClose }) => {

  const handlebtnClick = () => {
    console.log('button clicked');
    onClose()
  }

  return (
    <section>
      <Modal title="HurryUp! Sale is live now" open={open} onOk={handlebtnClick} onCancel={() => onClose()}>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </section>
  )
}

