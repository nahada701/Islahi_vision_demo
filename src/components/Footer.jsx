import React from 'react'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div  className='footer__bg py-5'>
      <section id='contact'>
            <div className="row px-5 m-0">
                <div className="col-lg-4">
                    <h3 className='footer__head'>Contact us</h3>
                    <ul className='px-0 py-3'>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-current-location fs-3'></i>  
                         <span>
                             Wisdom Islamic Organization
                            C V.Complex, P.V.Swami Road, Kozhikode Kerala, India 673 002
                         </span>
                        </li>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-phone fs-3'></i>  
                         <span>
                             893298834
                         </span>
                        </li>
                      
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-phone fs-3'></i>  
                         <span>
                             info@jiic.org
                         </span>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h3 className='footer__head'>Quick Links</h3>
                    <ul className='px-0 py-3'>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-chevron-right fs-3'></i>  
                         <span>
                             Home
                         </span>
                        </li>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-chevron-right fs-3'></i>  
                         <span>
                            Who are we
                         </span>
                        </li>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-chevron-right fs-3'></i>  
                         <span>
                             Featured Gallery
                         </span>
                        </li>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-chevron-right fs-3'></i>  
                         <span>
                             Join us
                         </span>
                        </li>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-chevron-right fs-3'></i>  
                         <span>
                             Terma & Conditions
                         </span>
                        </li>
                        <li className='d-flex pb-3 align-items-start gap-3'>
                        <i class='bx bx-chevron-right fs-3'></i>  
                         <span>
                             Refund Policy
                         </span>
                        </li>
    
                   
                    </ul>
                </div>
                <div className='col-lg-4 d-flex flex-column '>
                <h3 className='footer__head'>Get in Touch</h3>
                <div className='d-flex gap-4'>
                    <input type="text" className='form-control '  placeholder='Phone number'  name="" id="" />
                    <button className='join__btn__green'>SUBSCRIBE</button>    
                </div>    
                <div className='social__media__links '>
                <i class='bx bxl-facebook link__item'></i>
                <i class='bx bxl-whatsapp link__item'></i>
                <i class='bx bxl-twitter link__item'></i>
                <i class='bx bxl-instagram link__item'></i>
                <i class='bx bxl-youtube link__item'></i>
                </div>
                </div>
            </div>
            <p className='copy__text py-4'> Jubail India Islahi Center © 2025 . All rights reserved.</p>
            <div className='text-center'><img  width={'100px'} src={logo} alt="" /></div>
      </section>
    </div>
  )
}

export default Footer