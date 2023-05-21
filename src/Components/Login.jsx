import React, { useEffect, useState } from 'react'
import img from "../images/instaClone2.png";
import imgA from '../images/instaClone3.png'
import imgB from '../images/instaClone4.png'
import imgC from '../images/instaClone5.png'
import { AiFillFacebook } from "react-icons/ai";
import {BsChevronDown} from "react-icons/bs"
import img1 from "../images/093c-DX36-y.png"
import img2 from "../images/NtqqucWkedn.png"
import imgInsta from "../images/ATdtiLb2BQ9.png"
const Login = () => {
  const [image, setImage] = useState(null);
  const imagesArr = [img, imgA, imgB, imgC]
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage(imagesArr[Math.floor(Math.random() * imagesArr.length)])
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])

  const languageDis = () =>{
    if(display === 'none'){
      setDisplay('block')
    }else{
      setDisplay('none')
    }
  }
  return (
    <div className='login-main-div'>
      <div className='content-container'>
        <div className='images-div'>
          <div className='image-slider'>
            <img src={image} className='imgs' />
          </div>
        </div>
        <div className='form-div'>
          <div className='form-main-div'>
            <div className='login-instaImg-container'>
              {/* <img src={imgInsta} className='insta-header-img' /> */}
            </div>
            <div className='input-holder'>
              <input type="email" className='login-input' placeholder="Num. téléphone, nom d'utilisateur ou e-mail" />
              <input type="password" className='login-input' placeholder='Mot de passe' />
              <button className='ssru'>Se connecter</button>
            </div>
            <div className='seperator-div'>
              <div className="line"></div>
              <span>OU</span>
              <div className="line"></div>
            </div>
            <div className='oAuth-options'>
              <span><AiFillFacebook className='fbIcon' /> Se connecter avec Facebook</span>
              <p className='pass-p'>Mot de passe oublié ?</p>
            </div>
          </div>
          <div className='create-account-route-div'>
            <span>Vous n'avez pas de compte ? <a href="" className='ca-aTag'>Inscrivez Vous</a></span>
          </div>
          <div className='downloadTheApp-div'>
            <span>Télécharger l'application</span>
            <div className='app-stores'>
              <img src={img1} className='store-img' />
              <img src={img2} className='store-img' />
            </div>
          </div>
        </div>
      </div>
      <footer className='login-footer'>
        <div>
          <span className='footer-span'>Meta</span>
          <span className='footer-span'>à propos</span>
          <span className='footer-span'>blog</span>
          <span className='footer-span'>Emplois</span>
          <span className='footer-span'>Aide</span>
          <span className='footer-span'>API</span>
          <span className='footer-span'>Confidentilalité</span>
          <span className='footer-span'>Conditions</span>
          <span className='footer-span'>Compte principaux</span>
          <span className='footer-span'>Lieux</span>
          <span className='footer-span'>Instagram Lite</span>
          <span className='footer-span'>Importation des contacts et non-utilisateurs</span>
          <span className='footer-span'>Meta verified</span>
        </div>
        <div>
          <div className='language-list-container' style={{display:display}}>
            <ul>
              <li>Afrikaans</li>
              <li>Arabic</li>
              <li>Persian</li>
              <li>Française</li>
              <li>Dutch</li>
              <li>Hindi</li>
              <li>Russian</li>
              <li>Turkish</li>
              <li>English</li>
              <li>Italian</li>
              <li>Chinese</li>
              <li>Japanese</li>
              <li>Pashto</li>
              <li>Mexican</li>
              <li>Spanish</li>
              <li>Serbian</li>
              <li>Uzbik</li>
              <li>Greece</li>
              <li>Armenian</li>
              <li>Hungarian</li>
              <li>Brasilian</li>
              <li>Mali</li>
              <li>Vietnamese</li>
              <li>Tamil</li>
              <li>Bolivi</li>
              <li>Urdu</li>
            </ul>
          </div>
          <span className='footer-span language-span' onClick={languageDis}>Française <BsChevronDown/></span>
          <span className='footer-span'>2023 Instagram par Meta</span>
        </div>
      </footer>
    </div>
  )
}

export default Login