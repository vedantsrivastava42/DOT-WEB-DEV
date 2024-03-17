import React, { useState , useEffect} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  //tag for giving input for the GIF
  const [tag,setTag]=useState('car');
  const {loading,gif,fetchData} = useGif(tag);

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className='flex flex-col items-center bg-blue-500 md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5'>
      <h1 className='uppercase font-bold text-2xl underline '> Random {tag} GIF</h1>
     
      {
        loading ? (<Spinner/>) :  (<img src ={gif} width ="450"/>)
      }
        <input 
      className='w-10/12 rounded-lg font-normal py-2 text-xl text-center ' 
    //  directly implementing changeHandler without creating a function outside
    //yaha pe tag dalega toh setTag me wo value chal jaega
      onChange={(event) => setTag(event.target.value)}
        value={tag}>
      </input>

      <button onClick={() => fetchData(tag)} 
      className="uppercase bg-[#F0F0F0] w-10/12 rounded-lg font-normal py-2 text-xl">Generate</button>
    </div>
  )
}

export default Tag
