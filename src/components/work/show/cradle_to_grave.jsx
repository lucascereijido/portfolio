import brambiepic from '../../../assets/cradle/brambiepic.jpg'; 
import brambigif from '../../../assets/cradle/brambigif.gif'; 
import brambishinysquare from '../../../assets/cradle/brambishinysquare.jpg'; 
import cereal from '../../../assets/cradle/cereal.jpg'; 


export default function Cradle(props) {
  
    
    return (
        <div className="content">
            <div className="show-caption">
                Cradle to Grave is an explorative visual critique of the tropes and
                 tactics of child consumerism. Brambi is an imaginary company that
                  draws from the vast new world of online algorithm-driven media 
                  targeted at children. Cradle to Grave compiles and remixes visual 
                  content to create an incoherent clutter of children’s themes and beloved
                   characters stripped of narrative context. Brambi’s visual identity 
                   focuses on the infinite faces staring into children’s eyes — mouths 
                   widened with appetite, eyes enlarged with madness. In this world there 
                   is no story, no lesson, only senseless stimulation and the indifferent
                algorithmic deconstruction and recomposition of recognizable figures.
            </div>
            <a id='thesis' className ="show-caption" href="https://indd.adobe.com/view/668d2055-9223-49c7-83da-d8738f251813">View Online Thesis Presentation</a>
            <div className='show-column'>
                <img alt="hello" src={brambiepic}></img>
                <img alt="hello" src={brambigif}></img>
            </div>
            <div className='show-column'>
                <img alt="hello" src={brambishinysquare}></img>
                <img alt="hello" src={cereal}></img>
            </div>
            <div className="mobile-show-column">
                <div>
                    Cradle to Grave is an explorative visual critique of the tropes and
                    tactics of child consumerism. Brambi is an imaginary company that
                    draws from the vast new world of online algorithm-driven media
                    targeted at children. Cradle to Grave compiles and remixes visual
                    content to create an incoherent clutter of children’s themes and beloved
                    characters stripped of narrative context. Brambi’s visual identity
                    focuses on the infinite faces staring into children’s eyes — mouths
                    widened with appetite, eyes enlarged with madness. In this world there
                    is no story, no lesson, only senseless stimulation and the indifferent
                    algorithmic deconstruction and recomposition of recognizable figures.
            </div>
                <a  id='thesis' href="https://indd.adobe.com/view/668d2055-9223-49c7-83da-d8738f251813">View Online Thesis Presentation</a>
                <img alt="hello" src={brambiepic}></img>
                <img alt="hello" src={brambigif}></img>
                <img alt="hello" src={brambishinysquare}></img>
                <img alt="hello" src={cereal}></img>
            </div>
          
        </div>)
}