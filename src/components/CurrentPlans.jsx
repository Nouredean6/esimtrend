
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useAuth } from '../UserContext';
import fetchAPI from '../utils';
import settings from '../assets/settings.svg';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Consuption from '../pages/Consuption';

const CurrentPlans = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

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
    const response = await axios.get(`/api/api/orders/getorders/${user._id}`);
    return response.data.data.orders;
  };

  const openModal = async (orderId, bundleName) => {
      setSelectedOrderId(orderId); 
      setSelectedBundleName(bundleName)
      setOpen(true)

  };

  const { mutate: getOrdersMutate, isLoading } = useMutation(getOrders, {
    onSuccess: (data) => {
      console.log(data);
      setOrders(data); // Set orders in state
    },
  });

  useEffect(() => {
    if(user){
      getOrdersMutate();
    }
  }, [user]);


  return (
    // w-1/2
    <div className='min-h-min mb-[40px] min-w-min flex flex-col items-center justify-start pt-[50px]'>
          {isLoading && <div className=" flex justify-center items-center  overflow-hidden "><div className="border-gray-300 justify-self-center col-span-3 	  h-40 w-40 animate-spin rounded-full border-8 border-t-emerald-500" /></div>
}
      {orders.length > 0 &&
       <table className='border-solid border-emerald-300 border-2 p-[5px] w-full overflow-auto border-collapse	text-2xl'>
<thead className=''>
  <tr className='border-solid   border-black border-2' >
    <th className='border-4  py-2  border-solid border-black'>Bundle Name</th>
    <th className='border-4 py-2  border-solid border-black hidden'>Bundle Mark</th>
    <th className='border-4  py-2 border-solid border-black'>Action</th>
  </tr>
</thead>
<tbody className='bg-blue-100 '>
  {orders.map((order) => (
    
    <tr className='border-2 even:bg-blue-300  border-solid border-black' key={order._id}>
      <td className='text-center py-2  border-4 border-solid border-black'>{order.bundleName}</td>
      <td className='text-center py-2 border-4 border-solid border-black hidden'>{order.bundleMark}</td>
      <td className='text-center py-2 border-4 border-solid border-black'>
        <button onClick={() => {
          openModal(order.orderId, order.bundleName)
          
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

{/* <h2>Order ID: {selectedOrderId}</h2>
<h2>Order ID: {selectedBundleName}</h2> */}

    <Consuption orderId={selectedOrderId} bundleName={selectedBundleName}/>
    </Modal>
)}
</tbody>
</table>
      }
      {
        !isLoading && orders.length ==0 && <><img className='h-[80px] w-[80px]' src={settings} alt="Settings"/>
        <p className='text-black text-2xl font-semibold mt-[25px]'>No active eSIM</p>
        <p className='text-lg text-text-clr-grey px-[25%] mt-[25px] text-center font-medium '>
          You currently do not have any active eSIM. Select one from our plans to enjoy a seamless experience!
        </p>
        <button onClick={() => navigate('/plans')} className="text-2xl rounded-[25px] mt-[25px] text-white  px-[40px] pb-[15px] pt-[15px] font-medium bg-custom-pink hover:bg-custom-blue">
          Go to eSIM shop
        </button></>
      }
      
    
  
 

      
    </div>
  );
};

export default CurrentPlans;
