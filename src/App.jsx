import { useState } from 'react'
import './App.css'
import { WhatsAppOutlined,FacebookOutlined ,GithubOutlined,YoutubeOutlined   } from '@ant-design/icons';
function App() {
  const [count, setCount] = useState(false)

  return (
 <div className='dd'>
  <button className='fol' onClick={()=>setCount(true)}>click me</button>
  
  {count &&(
      <div class="container">
         <button onClick={()=>setCount(false)}>close</button>
      <i class="fa fa-apple" id="apple"><a href="https://www.facebook.com/kutman.orumbekov?mibextid=ZbWKwL"><FacebookOutlined  /></a></i>
      <i class="fa fa-twitter" id="twitter"> <a href="https://wa.me/qr/2JFVU3L2N5IJH1"><WhatsAppOutlined /></a></i>
      <i class="fa fa-github-square github" id="github"><a href="https://github.com/kutman2007"><GithubOutlined /></a></i>
      <i class="fa fa-facebook-square" id="facebook"><a href="https://youtube.com/@dindon9617"><YoutubeOutlined /></a></i>
   
    </div>
  )}

 </div>
  )
}

export default App
