import bottlez from '../../../assets/absalon/bottlez.jpg'; 
import buzinsz from '../../../assets/absalon/buzinsz.jpg'; 
import disstime1 from '../../../assets/absalon/disstime1.jpg'; 
import disstime2 from '../../../assets/absalon/disstime2.jpg'; 
import dotzhangin from '../../../assets/absalon/dotzhangin.jpg'; 
import logoabs from '../../../assets/absalon/logoabs.jpg'; 
import malvinhangin from '../../../assets/absalon/malvinhangin.jpg'; 
import shirtz2 from '../../../assets/absalon/shirtz2.jpg'; 


export default function Absalon(props){
   return( 
   <div className="content">
        <div className="show-caption">While studying abroad at DIS in Copenhagen, my final project for Graphic 
            Design was to reimagine the visual identity for Absalon, a privately run 
            culturehouse started in 2015. Located in an old church in Vesterbro, Absalon offers meals, 
            dancing, yoga, games, live music, coffee, and over 60 events per week to anybody who is 
            interested. Inside the church is a giant public living room where every surface is painted 
            with vibrant colors. These colors, along with Absalon's architecture and eccentricity, were 
            the inspiration for the visual identity I developed. The logo is an A that is meant to resemble 
            the arches throughout the church architecture. I also developed six patterns based on the church's
             geometry as graphic elements to accompany the logo.</div>

        <div className='show-column'>
               <img alt="hello" src={logoabs}></img>
               <img alt="hello" src={disstime1}></img>
        </div>
        <div className='show-column'>
               <img alt="hello" src={disstime2}></img>
               <img alt="hello" src={malvinhangin}></img>
        </div>
           <div className='show-column'>
               <img alt="hello" src={dotzhangin}></img>
               <img alt="hello" src={shirtz2}></img>
           </div>

        <div className='show-column'>
            <img alt="hello" src={buzinsz}></img>
            <img alt="hello" src={bottlez}></img>
        </div>
        
           
        
        <div className='mobile-show-column'>
               <div>While studying abroad at DIS in Copenhagen, my final project for Graphic
               Design was to reimagine the visual identity for Absalon, a privately run
               culturehouse started in 2015. Located in an old church in Vesterbro, Absalon offers meals,
               dancing, yoga, games, live music, coffee, and over 60 events per week to anybody who is
               interested. Inside the church is a giant public living room where every surface is painted
               with vibrant colors. These colors, along with Absalon's architecture and eccentricity, were
               the inspiration for the visual identity I developed. The logo is an A that is meant to resemble
               the arches throughout the church architecture. I also developed six patterns based on the church's
             geometry as graphic elements to accompany the logo.</div>
               <img alt="hello" src={logoabs}></img>
               <img alt="hello" src={disstime1}></img>
               <img alt="hello" src={disstime2}></img>
               <img alt="hello" src={malvinhangin}></img>
               <img alt="hello" src={dotzhangin}></img>
               <img alt="hello" src={shirtz2}></img>
               <img alt="hello" src={buzinsz}></img>
               <img alt="hello" src={bottlez}></img>
        </div>
    </div>
   )
}