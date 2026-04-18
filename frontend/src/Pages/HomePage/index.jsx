import React, { useState } from "react";
import { postWithoutHeaders } from "../../network/networkUtils";
import { chatting } from "../../URLconst";
import Responsing from "../../components/Responsing";
import Loader from "../../components/Loader";

const HomePage = () => {
  const [userInput, setUserInput] = useState("");
  const [messages,setMessages] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setMessages(prev=>[...prev,{
      'role' : 'user',
      'content' : userInput
    }])
    setIsLoading(true)
    const fetchData =async()=> {
      const reqBody = {
        prompt : userInput
      }
      try{
        const res = await postWithoutHeaders(chatting,reqBody)
        if(res?.status === 200){
          setMessages(prev=>[...prev,{
            'role':'ai',
            'content':res?.resObj
          }])
          setIsLoading(false)
        }
        else{
          console.log('No Response from llama3')
          setIsLoading(false)
        }
        
      }catch(err){
        console.log(err)
        setIsLoading(false)
      }


    }
    fetchData()
    setUserInput('')
  }
  return (
    <div className="h-screen flex flex-col bg-linear-to-l from-slate-900 to-blue-900">
      {/* <h1>This is Home Page</h1> */}
      <div className="overflow-y-auto flex-1 p-4">
        {
        messages.map((item,index)=>(
            <div className={`flex my-6 ${item.role == 'user'?'justify-end pr-3':'justify-start pl-3'}`} key={index}>
              <Responsing role={item?.role} content={item?.content}/>
            </div>

        ))
      }

      </div>
         <div className="flex justify-end fixed left-0 bottom-0 w-full pb-4 pr-5">
        <form onSubmit={handleSubmit}>
          <div className="flex-1 flex gap-3 pt-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="rounded-3xl w-3/4 border-2 border-yellow-400 px-15 py-1 text-white"
            />
            <button type="submit" className="text-white bg-green-400 rounded-2xl hover:opacity-40 w-1/4">
              <p className="text-black italic font-extrabold">Ask</p>
            </button>
          </div>
        </form>
      </div>

      {isLoading && <Loader/>}
     
    </div>
  );
};

export default HomePage;
