import bannerzz from '../../../assets/conspiracy/bannerzz.png'; 
import brochureinside from '../../../assets/conspiracy/brochureinside.png'; 
import cnsprcy from '../../../assets/conspiracy/cnsprcy.gif'; 
import conspiracymoodboard from '../../../assets/conspiracy/conspiracymoodboard.png'
import conspirbookletsweb from '../../../assets/conspiracy/conspirbookletsweb.jpg'
import howdouuuu from '../../../assets/conspiracy/howdouuuu.gif'; 
import symbols from '../../../assets/conspiracy/symbols.gif'



export default function Conspiracy(props) {
   return( 
   <div className="content">
       <div>
        The task for this assignment in Graphic Design at Wesleyan 
        University was to create a visual identity for an abstract concept. 
        I chose the concept of conspiracy, developing a logo system based on how 
        conspiracies "connect the dots" in astonishing ways.
       </div>
        <div className='show-column'>
            <img alt="hello" src={bannerzz}></img>
            <img alt="hello" src={brochureinside}></img>
        </div>
        <div className='show-column'>
            <img alt="hello" src={conspiracymoodboard}></img>
            <img alt="hello" src={conspirbookletsweb}></img>
        </div>
        <div className='show-column'>
            <img alt="hello" src={symbols}></img>
            <img alt="hello" src={howdouuuu}></img>
        </div>
           <div className='show-column'>
               <img alt="hello" src={cnsprcy}></img>
           </div>
    </div>)
}