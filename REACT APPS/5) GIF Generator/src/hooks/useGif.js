import  { useState , useEffect} from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif= (tag) => {
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(true);
  
    async function fetchData(tag){
      //phle loading true kro fir false krdo once image is loaded
      setLoading(true);
      // await is used whenever api is called axios in place of fetch used.
     const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
  
     //meme is inside data-> image -> downsized
     const imageSource = data.data.images.downsized_large.url;
     setGif(imageSource);
     setLoading(false);
    }
  
    useEffect(() => {
      fetchData(tag);
    },[])
  
return{ gif,loading,fetchData};
}

export default useGif
