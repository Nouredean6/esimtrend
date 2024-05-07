import logo from "../assets/logo.png";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useEffect, useState} from 'react'
import { useMutation } from "react-query";
import fetchAPI from '../utils';
import { useParams } from 'react-router-dom';


const Consuption = ({orderId, bundleName}) => {
    // const {orderId} = useParams();
    // console.log(id);
    // const orderId='145874022399607'
    console.log('HERE IS THE FUCKING ORDERID', orderId, bundleName);
    const [isMutated, setIsMutated] = useState(false);
    const [dataAllocated, setDataAllocated] = useState(null);
    const [dataRemaining, setDataRemaining] = useState(null);
    const [dataUnit, setDataUnit] = useState(null);
    const [dataUsed, setDataUsed] = useState(null);
    const [planStatus, setPlanStatus] = useState(null);
    const [policyStatus, setPolicyStatus] = useState(null);
    const [profileExpiryDate, setProfileExpiryDate] = useState(null);
    const [profileStatus, setProfileStatus] = useState(null);
    const [status, setStatus] = useState(null);   
    const [detail, setDetail] = useState(null);   
    const [statusError, setStatusError] = useState(null);   
    const [titleError, setTitleError] = useState(null);   

    const profileExpiryDateFormed = new Date(profileExpiryDate);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Format date components
const year = profileExpiryDateFormed.getFullYear();
const monthIndex = profileExpiryDateFormed.getMonth(); // Month index (0-based)
const month = monthNames[monthIndex]; // Get month name from array
const day = profileExpiryDateFormed.getDate();
const hours = profileExpiryDateFormed.getHours();
const minutes = profileExpiryDateFormed.getMinutes();
const formattedDateString = `${year}-${month}-${day} ${hours}:${minutes}`;

     const accessTok = localStorage.getItem('accessToken');
    const getConsum = async (orderId) => {
        const response = await fetchAPI.get(`/Orders/Consumption?order_reference=${orderId}`);

        return response;
      };
      const { mutate: consumMutate, isLoading, error } = useMutation(getConsum, {
        onSuccess: (data) => {
          console.log(data.data, 'CONSUME CONSUME');
          const {
            data_allocated,
            data_remaining,
            data_unit,
            data_used,
            plan_status,
            policy_status,
            profile_expiry_date,
            profile_status,
            status
        } = data.data;
        // Set state variables with destructure properties
        setDataAllocated(data_allocated);
        setDataRemaining(data_remaining);
        setDataUnit(data_unit);
        setDataUsed(data_used);
        setPlanStatus(plan_status);
        setPolicyStatus(policy_status);
        setProfileExpiryDate(profile_expiry_date);
        setProfileStatus(profile_status);
        setStatus(status);
    

        },
        onError: (data)=>{
            console.log(data.response.data);
           const  {
                detail,
                status,
                title,
            } = data.response.data
            setDetail(detail);
            setStatusError(status);
            setTitleError(title);
        }
      });
      console.log(error)
      const percentage = dataAllocated && dataUsed ? ((dataUsed / dataAllocated) * 100).toFixed(2) : '0';

      useEffect(() => {
        if(accessTok && !isMutated){
            consumMutate(orderId)
        }
      }, [consumMutate, accessTok, isMutated]);

  return (
    <div className="h-full bg-gray-200 rounded-[25px]">
    {/* <div className=" w-full flex bg-gray-200 flex-col justify-center items-center   min-h-min">
        <img src={logo} className="lg:h-[300px] lg:w-[300px] md:h-[200px] md:w-[200px] h-[100px] w-[100px]"/>
        <p className="lg:text-4xl md:text-3xl text-black font-bold lg:mb-[80px] md:mb-[50px] mb-4 ">eSIM Status and Usage by order ID</p>
    </div> */}
    {isLoading && <div className="h-[80vh] flex justify-center items-center  overflow-hidden bg-gray-200"><div className="border-gray-300 justify-self-center col-span-3 bg-gray-200	  h-40 w-40 animate-spin rounded-full border-8 border-t-emerald-500" /></div>
}
{error && <div className="h-[80vh] flex justify-center md:items-start items-start overflow-hidden bg-gray-200 md:text-5xl text-2xl font-bold text-red-600">{'Error'+' ' +statusError + ':'} {detail }</div>}

{!isLoading && !error &&(
        <>
{/* lg:px-10 lg:py-10 md:px-16 md:py-10 px-4 py-4 these styles were bellow i just took them out to fit the consumation compoenent in */}
        <div className="w-full min-h-min     bg-gray-200 rounded-[25px]">
        {/* <div className="md:h-[200px]  min-h-min lg:flex lg:flex-row md:flex md:flex-col  lg:items-center lg:justify-around md:justify-center md:items-start   w-full bg-white rounded-[25px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] lg:pl-[0] md:pl-[25px] py-5 pl-3 md:py-0  ">
            <div className=" lg:h-1/2 md:min-h-min md:mb-4 lg:mb-0 mb-4  flex items-center  ">
                <span className="font-[900] lg:text-3xl md:text-2xl mr-[10px]">Order ID:</span>
                <p className="lg:text-3xl md:text-2xl font-[400] text-[#81838c]">{orderId}</p>
            </div>
            <div className="lg:h-1/2 md:min-h-min md:mb-4 lg:mb-0 mb-4 flex items-center  ">
            <span className="font-[900] lg:text-3xl md:text-2xl mr-[10px] ">ICCID:</span>
                <p className="lg:text-3xl md:text-2xl font-[400] text-[#81838c]">8944501909231370211</p>
            </div>
            <div className="lg:h-1/2 md:min-h-min md:mb-4 lg:mb-0 mb-4 flex items-center  ">
            <span className="font-[900] lg:text-3xl md:text-2xl mr-[10px]">Status:</span>
                <p className="lg:text-3xl md:text-2xl text-[#81838c]">{planStatus}</p>
            </div>

        </div> */}
    </div>
    <div className="w-full min-h-min  lg:px-10 lg:py-10 md:px-16 md:py-10 px-4 py-4 bg-gray-200 rounded-[25px]">
    {/* lg:mb-[70px] mb-[20px] same these styles were bellow */}
        <div className="min-w-min min-h-min lg:pt-[40px] md:pt-[30px] pt-[20px]  bg-white rounded-[25px] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
        <p className='text-center lg:mb-[40px] md:mb-[30px] mb-[20px] font-[900] lg:text-3xl md:text-2xl text-xl mr-[10px] px-8 md:px-0'>{bundleName ? bundleName: 'Order Was Created Without A Bundle Name'}</p>
        <hr className="lg:mb-[20px] md:mb-[15px] mb-[10px]"/>
        <div className=" min-h-min rounded-[25px] flex flex-col justify-center items-center">
            <div className="min-h-min  min-w-min">
        <CircularProgressbar className="lg:w-[250px] md:w-[200px] w-[150px]   lg:mt-[40px] md:mt-[30px] mt-[20px] rounded-[50%] mb-[40px]"
        background='true'
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.5,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            // strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: 'rgb(102, 102, 102)',
            trailColor: 'rgba(53, 174, 255, 0.11)',
            backgroundColor: 'rgba(0, 104, 173, 0.11)',
          })}
        value={percentage} text={`${percentage}%`} />
            </div>
        <p className="mb-[40px] font-[700] lg:text-3xl md:text-2xl text-xl text-[#3b57a6]">Total Data Consumption</p>
        <p className="mb-[40px] font-[600] lg:text-2xl md:text-xl text-base text-[#6f83bd]">{dataUsed +' ' +dataUnit+' ' +'/'+' ' + dataAllocated +' ' +dataUnit}</p>
        <div className="w-full bg-[#f4f5fa]  self-end rounded-b-[25px] lg:py-[30px] md:py-[20px] py-[10px] ">
            <p className="font-bold lg:text-3xl md:text-2xl text-xl text-center lg:mb-[15px] md:mb-[10px] mb-[5px]">PLAN EXPIRY DATE</p>
            <p className="text-center font-semibold lg:text-2xl md:text-xl text-base ">{formattedDateString}</p>
        </div>

        </div>
        </div>
        
    </div>
    </>
    )}
   
    
    </div>
  )
}

export default Consuption