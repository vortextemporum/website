import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../css/header.css"




class Header extends Component {
    render() {
        return(
        <header className="bg-black-60 ph2 pv2 pv3-ns ph4-m ph5-l flex justify-between items-center">
            <span id='isim' className='pressstart2p f2 fw6 lh-title'>berkozdemir.com</span>
            <nav  className="nunito f6 fw6 ttu tracked">
                <Link id="headerlink" className="link dim blue dib mr3"  to="/" title="Home">Home</Link> 
                <Link id="headerlink" className="link dim red dib mr3"  to="/about" title="About">About</Link>
                <Link id="headerlink" className="link dim orange dib mr3"  to="/works" title="Works">Works</Link>
                <Link id="headerlink" className="link dim yellow dib mr3"  to="/contact" title="Contact">Contact</Link>
                <Link id="headerlink" className="link dim green dib mr3"  to="/cv" title="CV">Resume</Link>
            </nav>
        </header>
        )
    }
}

// const randomColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

// function animateisim(){
//     let title = document.getElementById("isim");
//     let text = title.innerText;
//     let newText = "";
    
//     for (let char = 0; char < text.length; char++) {
//         let letter = text[char];
//         newText += letter.fontcolor(randomColor());
//     }
    
//     return title.innerHTML = newText;
// }

// setInterval(animateisim, 400)

export default Header;