import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
const Signup = () => {
  return (
    <div className='signup-main-div'>
      <div className="signup-form-main-div">
        <div className='signup-form-header'>
          <div className="login-instaImg-container signup-instaImg-container">
          </div>
          <span className='signup-header-span'>Inscrivez-vous pour voir les<br />photos et vidéos de vos amis</span>
          <span className='connectWith-fb-span'><AiFillFacebook className='fbSIcon' /> Se connecter avec Facebook</span>
        </div>
        <div className='seperator-div signup-sptr-div'>
          <div className="line"></div>
          <span>OU</span>
          <div className="line"></div>
        </div>
        <div className='input-holder'>
          <input type="email" className='login-input' placeholder="Numéro de mobile ou e-mail" />
          <input type="text" className='login-input' placeholder='Nom complet' />
          <input type="text" className='login-input' placeholder="Nom d'utilisateur" />
          <input type="password" className='login-input' placeholder='Mot de passe' />
        </div>
        <div className='signup-from-info-container'>
          <p className='signup-form-info-p'>Les personnes qui utilisent notre service ont pu<br /> importer vos coordonnées sur Instagram. <a href='' className='signup-form-aTag'> En<br /> savoir plus</a></p>
          <p className='signup-form-info-p'>En vous inscrivant, vous acceptez nos <a href='' className='signup-form-aTag'>Conditions générales</a>. Découvrez comment nous recueillons, utilisons et partageons vos données en lisant notre <a href='' className='signup-form-aTag'>Politique de confidentialité</a> et comment nous utilisons les cookies et autres technologies similaires en consultant notre <a href='' className='signup-form-aTag'>Politique d’utilisation des cookies</a>.</p>
        </div>
          <button className='ssru signup-next-btn'>Suivant</button>
      </div>
    </div>
  )
}

export default Signup