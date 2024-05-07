import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import fetchAPI from "../utils";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Consuption from './Consuption';

const Test = () => {
  const [modalData, setModalData] = useState(null);
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedBundleName, setSelectedBundleName] = useState(null);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
  setSelectedOrderId(null); 
  }
  


  const getOrders = async () => {
    const response = await axios.get(`/api/api/orders/getorders/65f1d5dfd09fe084db118771`);
    return response.data.data.orders;
  };

  const openModal = async (orderId) => {
    try {
      const response = await fetchAPI.get(`/Orders/Consumption?order_reference=${orderId}`);
      setModalData(response.data); // Store response data for modal
      setSelectedOrderId(orderId); 
      setOpen(true)

      console.log(response);
      // Open modal here (you need to implement modal functionality)
    } catch (error) {
      console.error('Error fetching consumption for order:', orderId, error);
    }
  };

  const { mutate: getOrdersMutate } = useMutation(getOrders, {
    onSuccess: (data) => {
      console.log(data);
      setOrders(data); // Set orders in state
    },
  });

  useEffect(() => {
    getOrdersMutate();
  }, []);

  return (
    <>
      <table className='border-solid border-emerald-300 border-2 p-[5px] w-full overflow-auto border-collapse	text-2xl'>
        <thead className=''>
          <tr className='border-solid   border-black border-2' >
            <th className='border-4  py-2  border-solid border-black'>Bundle Name</th>
            <th className='border-4 py-2  border-solid border-black'>Bundle Mark</th>
            <th className='border-4  py-2 border-solid border-black'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-blue-100 '>
          {orders.map((order) => (
            
            <tr className='border-2 even:bg-blue-300  border-solid border-black' key={order._id}>
              <td className='text-center py-2  border-4 border-solid border-black'>{order.bundleName}</td>
              <td className='text-center py-2 border-4 border-solid border-black'>{order.bundleMark}</td>
              <td className='text-center py-2 border-4 border-solid border-black'>
                <button onClick={() => {
                  openModal(order.orderId)
                  setSelectedBundleName(order.bundleName);
                  }}>View Consumption</button>
              </td>
              {/* <button onClick={onOpenModal}>Open modal</button> */}
      {/* <Modal open={open} onClose={onCloseModal} center>
        <h2>{order.orderId}</h2>
      </Modal> */}
      
            </tr>
            
            
            
          ))}
          {selectedOrderId && (
      <Modal       classNames={{overlay:'bg-overl', modal:' min-h-min rounded-[30px] shadow-none lg:w-[550px] w-full mx-[15px] px-0 py-0'}}
      open={open} onClose={onCloseModal} center>
      {/* <h2>Order ID: {selectedOrderId}</h2> */}
            <Consuption orderId={selectedOrderId} bundleName={selectedBundleName}/>
            </Modal>
        )}
        </tbody>
      </table>
      
    </>
  );
};

export default Test;