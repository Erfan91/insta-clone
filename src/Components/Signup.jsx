import React, { useEffect, useState } from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs"
const Signup = () => {
  const [display, setDisplay] = useState('none');
  const [displayD, setDisplayD] = useState('none')
  const [dayList, setDayList] = useState([]);
  const monthList = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
  const [displayM, setDisplayM] = useState('none')
  const [displayY, setDisplayY] = useState('none')
  const [yearsList, setYearsList] = useState([]);
  const date = new Date();
  const day = date.getDay()
  const month = date.getMonth();
  const [monthName, setMonthName] = useState('')

  const yearDropdown = () => {
    const date = new Date()
    const year = date.getFullYear();
    var years = [];
    for (var i = 1919; i <= year; i++) {
      years.push(i)
    }
    if (yearsList.length == 0) {
      setYearsList(yearsList => [...yearsList, years])
      setDisplayY('flex')
    } else {
      setYearsList([])
      setDisplayY('none')
    }
    console.log(yearsList, "Content", yearsList.length, "Length")
  }

  const monthDropdown = () => {
    if (displayM == "none") {
      setDisplayM('flex')
    } else {
      setDisplayM('none')
    }
  }

  const dayDropdown = () => {
    var arr = []
    for (var i = 1; i <= 31; i++) {
      arr.push(i)
    }
    arr.map((day) => {
      if (dayList.length == 0) {
        setDayList(dayList => [...dayList, day])
        setDisplayD('flex')

      } else {
        setDayList([])
        setDisplayD('none')
      }
    })
  }
  const languageDis = () => {
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  return (
    <div className='signup-main-div'>
      <div className="signup-form-main-div" style={{ display: "none" }}>
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
      <div className='signup-bd-form'>
        <div className='bd-head-img'>
        </div>
        <div>
          <span className='add-bd-span'>Ajoutez votre date de naissannce</span>
        </div>
        <div className='bd-info-container'>
          <span className='bd-info-span1'>Elle ne sera pas affichée sur votre profil public.</span>
          <span className='bd-info-span2'>Pourquoi dois-je indiquer ma date de <br />naissance ?</span>
        </div>
        <div className="bDate-input-container">
          <div className='month-input-div bd-child-div' onClick={monthDropdown}>
            <div className='bd-month-selector selector-div' >
              <span>{monthList[month]}</span>
              <BsChevronDown />
            </div>
            <div className='day-dropdown month-dropdown' style={{ display: displayM }}>
              {
                monthList.map((month, index) => {
                  return (
                    // <ul key={index} className='date-list'>
                      <li className='date-list'>{month}</li>
                    // </ul>
                  )
                })
              }
            </div>
          </div>
          <div className='day-input-div bd-child-div' onClick={dayDropdown}>
            <div className='bd-day-selector selector-div'>
              <span>{date.getDate()}</span>
              <BsChevronDown />
            </div>
            <div className="day-dropdown" style={{ display: displayD }}>
              {
                dayList.map((day, index) => {
                  return (
                    // <ul key={index} className='date-list'>
                      <li className='date-list'>{day}</li>
                    // </ul>
                  )
                })
              }
            </div>
          </div>
          <div className="year-input-div bd-child-div" onClick={yearDropdown}>
            <div className='bd-year-selector selector-div'>
              <span>{date.getFullYear()}</span>
              <BsChevronDown />
            </div>
            <div className="year-dropdown day-dropdown" style={{display: displayY}}>
              {
                yearsList.map((year, index) => {
                  return (
                    <>
                      {
                        year.map((yr, indx) => {
                          return (
                            // <ul key={indx} className='date-list'>
                              <li className='date-list'>{yr}</li>
                            // </ul>
                          )
                        })
                      }
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
        <span className='bd-form-bottom-span'>Vous devez entrer votre date de naissance</span>
        <div className='bd-form-btn-container'>
          <span className="bd-form-bottom-span">
            Utilisez votre propre date de naissance, même si ce compte est destiné à une entreprise, à un animal de compagnie ou à autre chose
          </span>
          <button className='ssru signup-next-btn'>Suivant</button>
          <span className='return-span'>Retour</span>
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
          <div className='language-list-container' style={{ display: display }}>
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
          <span className='footer-span language-span' onClick={languageDis}>Française <BsChevronDown /></span>
          <span className='footer-span'>2023 Instagram par Meta</span>
        </div>
      </footer>
    </div>
  )
}

export default Signup