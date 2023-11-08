// import React, {useState} from "react";
// import axios from "axios";
// import { Dispatch } from 'redux';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/dist/client/router';
// import { Button } from 'antd';
// import { message, Upload } from 'antd';
// const { Dragger } = Upload;


  

// const Choosen : React.FC<>= ({statepass}) => {
//     const dispatch: Dispatch = useDispatch();
//     const router = useRouter();
//     const [messageApi, contextHolder] = message.useMessage();
//     const [state, setState] = useState<state>({silther:false,mythril:false});

//     // Handle the onChange event of the select


    



//     return (
//         <div className="h-auto p-8 border border-gray-200 rounded shadow-md md:mx-20 animate__animated animate__delay-fast animate__fadeInUp">
//             <div className='grid grid-cols-2'>
//                 <h2 className='mb-8 text-xl font-bold '>
//                     Choosen Tool
//                 </h2>
//             </div>
//             <div className="flex justify-end mt-4">
//                 <div
//                     className={`w-full px-8 py-4 mb-4 font-bold text-white rounded-md focus:shadow-outline bg-blue-500  focus:outline-none ${state.silther ?  "bg-blue-800": "bg-blue-400" } `}
//                     onClick={handleSubmit1}
//                 >
//                     Slither
//                 </div>
//             </div>
//             <div className="flex justify-end mt-4">
//                 <div
//                     className={`w-full px-8 py-4 mb-4 font-bold text-white rounded-md focus:shadow-outline bg-blue-500  focus:outline-none ${state.mythril ?  "bg-blue-800": "bg-blue-400"  } `}
//                     onClick={handleSubmit2}
                    
//                 >
//                     Mythril
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Choosen
