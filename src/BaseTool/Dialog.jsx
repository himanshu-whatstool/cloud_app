import { Modal } from 'antd';

export const EntryDialog = ({ open, onClose }) => {

  const handlebtnClick = () => {
    console.log('button clicked');
    onClose()
  }

  return (
    <section>
      <Modal style={{ textAlign: 'center' }} title="HurryUp! Sale is live now" open={open} onOk={handlebtnClick} onCancel={() => onClose()}>
        <div className='text-center'>
          <img src="https://img.freepik.com/free-vector/discount-sale-abstract-dark-maroon-gradient-geometric-triangle-pattern-multipurpose-background-banner_1340-17229.jpg" width="280px" alt="cloudsale" className='img-fluid rounded-4 ' />
        </div>
      </Modal>
    </section>
  )
}

