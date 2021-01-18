import frankenprocessweb from '../../../assets/frankenstein/frankenprocessweb.jpg';
import frankenwebsite from '../../../assets/frankenstein/frankenwebsite.jpg';


export default function Frankenstein(props) {
    return (
        <div className="content">
            <div className="show-caption">
                For this project in Graphic Design at Wesleyan University, 
                I redesigned the book jacket for Mary Shelley’s Frankenstein. 
                After researching and sketching, I decided to focus on the idea of amalgamation.
                 While the monster is a combination of human parts, the novel itself is a sort 
                 of Frankenstein’s monster, as Shelley incorporates many different voices and
                 texts to tell the story. My book jacket communicates this typographically 
                 through a jarring combination of Bodoni and Futura.
            </div>
            <div className='show-column'>
                <img alt="hello" src={frankenprocessweb}></img>
                <img alt="hello" src={frankenwebsite}></img>
            </div>
            <div className="mobile-show-column">
                <div>
                    For this project in Graphic Design at Wesleyan University,
                    I redesigned the book jacket for Mary Shelley’s Frankenstein.
                    After researching and sketching, I decided to focus on the idea of amalgamation.
                    While the monster is a combination of human parts, the novel itself is a sort
                    of Frankenstein’s monster, as Shelley incorporates many different voices and
                    texts to tell the story. My book jacket communicates this typographically
                    through a jarring combination of Bodoni and Futura.
                 </div>
                <img alt="hello" src={frankenprocessweb}></img>
                <img alt="hello" src={frankenwebsite}></img>
            </div>
        </div>)
}