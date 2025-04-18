import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../components/Footer';

const HomePage = () => {
    const images = [
        'https://www.wisdomislam.org/source/Files/HOME%20GALLERY/W1.jpg',
        'https://www.wisdomislam.org/source/Files/HOME%20GALLERY/W2.jpg',
        'https://www.wisdomislam.org/source/Files/HOME%20GALLERY/W3.jpg',
        'https://www.wisdomislam.org/source/Files/HOME%20GALLERY/W4.jpg',
        'https://www.wisdomislam.org/source/Files/HOME%20GALLERY/W5.jpg',
      ];
    
  return (
    <div >
        <Header></Header>
        <section className='home' id='home'>
            <div className='hero'>
                <h1 className='hero__main__head text-center'>
                Uplift Life Through Faith and Action
                </h1>
                <h4 className='hero__sub__head text-center'>Nurturing Stronger Communities with Purpose</h4>
                <div className="row hero__content p-3 p-md-4  ">
                    <div className=" col-md-6">
                        <h5 className='about__us__head' >ABOUT US</h5>
                        
                        <p className='hero__para ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aspernatur, saepe neque, eos nulla eligendi eum optio illum, at voluptatum laborum perspiciatis? Impedit harum esse similique magnam maiores eligendi ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore mollitia vitae reprehenderit quo modi cum, illum qui deserunt nisi dicta aliquid, ab officiis. Ea modi est voluptas non aut!    </p>

                    </div>
                    <div className=" col-md-6">
                        <p className='hero__para pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi officiis, eveniet, omnis repellat ipsa, iusto voluptates doloremque neque nobis quibusdam reprehenderit magnam! Eligendi voluptas deleniti corrupti incidunt laudantium autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, exercitationem deserunt ipsam aliquid amet at explicabo consequatur nesciunt itaque, sint vitae nam totam voluptatem, ad soluta voluptas nemo quisquam! Praesentium?</p>
                    </div>
                    <div className='text-center'><button style={{width:"fit-content"}} className='join__btn__green'> READ MORE  <i class='bx bx-chevron-right'></i></button></div>
                </div>
            </div>
        </section>
        <section id='who_we_are'>
            <div className='pt-5'>
                <h3 className='text-center'>WHO ARE WE?</h3>
                <div className="row p-3 p-md-5 m-0">

  <div className="col-12 mb-5">
      <h5 className="mission__heading">OUR MISSION</h5>
    <img
      src="https://breaking-barriers.co.uk/wp-content/uploads/2024/02/hero-image-for-supporting-muslim-employees-page-1920x1080.jpeg"
      alt="Our mission"
      className="img-fluid mission__img float-md-start me-md-4 mb-3"
      
    />

    <p className="mission__para">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci maiores velit provident, libero autem possimus aliquam doloremque hic, maxime doloribus eaque recusandae omnis odit molestiae ducimus obcaecati veritatis. Sint?
      Tempore, optio voluptates nisi saepe facere quos accusantium eos ullam inventore quasi error. Accusantium, ex, amet, quas vel quam molestiae officiis veniam tenetur enim quibusdam nihil aliquid modi. Pariatur, sapiente.
      Fuga obcaecati a praesentium nihil quaerat, quae sint aspernatur animi totam minus porro qui iure, enim, dolorum excepturi dignissimos laboriosam quos quo hic. Aspernatur blanditiis odit voluptatem, facere beatae dolorem.
      Quas nobis necessitatibus vel blanditiis neque exercitationem architecto fugiat! Itaque autem consectetur laudantium. Fugiat animi modi molestiae, dolore, cum vel voluptatum quos dicta mollitia doloremque nulla molestias, enim itaque velit.
      Non modi quos natus perferendis eveniet labore, molestias cupiditate cum, quibusdam rerum dolore ratione veritatis in nihil nostrum reiciendis mollitia, harum ea illum! Ea necessitatibus officia veniam odio aperiam illo?
    
    </p>
  </div>


  <div className="col-12">
    <h5 className="mission__heading">OUR VISION</h5>
    <img
      src="https://www.wisdomislam.org/source/Files/institutions/jamia%20al%20hind.jpg"
      alt="Our vision"
      className="img-fluid mission__img  float-md-end ms-md-4 mb-3"
     
    />
    <p className="mission__para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos repellendus obcaecati, omnis et rem doloremque. Repudiandae, nihil doloremque? Fugiat ipsum sit voluptas tenetur explicabo sequi ullam placeat dolorum magni.
      Ducimus cum inventore vitae incidunt non quasi veniam fuga dignissimos similique nostrum fugiat ipsa pariatur quibusdam, voluptatum facilis dicta qui alias perferendis praesentium laboriosam? Dignissimos corrupti reprehenderit iste eum rem!
      Molestias, cumque ad hic, blanditiis distinctio nemo minima perspiciatis ab quos, sequi explicabo mollitia debitis facere consequatur excepturi nihil inventore omnis. Debitis eveniet ipsum possimus ipsa alias perspiciatis, praesentium sit?
      Velit, esse nostrum repellat iure non illo accusamus vitae eius voluptates culpa dolores exercitationem illum ipsum veritatis beatae consequuntur nemo distinctio fuga deleniti enim numquam blanditiis? Saepe eveniet alias iste.
      Dolores voluptatum, voluptatem sapiente quidem facere ducimus minus culpa aliquid cumque itaque temporibus beatae dolorum. Deserunt dolore, blanditiis cupiditate fuga, nobis sit dignissimos explicabo assumenda cum mollitia eius ullam natus?
   
    </p>
  </div>
</div>

            </div>
        </section>
        <hr style={{color:"#c7c7c7"}} />
        <section id='wing'>
            <div className='p-3'>
                <div className='p-2 p-md-5 join__wing__head p-3 p-md-5 text-center color-green '>
                    <h2 className=''>Join Our Wing and Soar with Purpose </h2>
                    <h6 className=''>Step into a community where faith meets action,and every effort contributes to positive change.</h6>

                    <h1 className='huge__number' >238,343+</h1>
                    <button className='light__green__btn'>Join us now</button>
                </div>

                <div className='row'>
                    <div className="col-lg-3 d-flex justify-content-center">
                    <Card style={{ width: '90%' }} className='mb-4 border-0 custom__card'>
      
      <Card.Body>
        <Card.Title > 🎓 Student wing</Card.Title>
        <Card.Text>
        Empowering the next generation through education, mentorship, and spiritual growth.
        Join vibrant youth circles, skill-building workshops, and initiatives that shape confident, value-driven leaders of tomorrow.
        </Card.Text>
       <button className='join__btn__green   '> Join Now</button>
      </Card.Body>
    </Card>
                    </div>
                    <div className="col-lg-3  d-flex justify-content-center">
                   <Card style={{ width: '90%' }}  className='mb-4 border-0 custom__card'> 
      <Card.Body>
        <Card.Title>🧕 Women Wing</Card.Title>
        <Card.Text>
        A space for women to connect, grow, and lead with strength and compassion.
From educational programs to community outreach, we support women in nurturing families and building Communities .


        </Card.Text>
        <button className='join__btn__green'> Join Now</button>

      </Card.Body>
    </Card>
                    </div>
                
                    <div className="col-lg-3 d-flex justify-content-center">
                    <Card style={{ width: '90%' }}  className='mb-4 border-0 custom__card'>
      <Card.Body>
        <Card.Title>🌟 Youth Wing</Card.Title>
        <Card.Text>
        Channeling youthful energy into meaningful action.
We engage young minds through leadership programs, social initiatives, and interactive sessions that foster responsibility, creativity, and connection.


        </Card.Text>
        <button className='join__btn__green  '> Join Now</button>

      </Card.Body>
    </Card>
                    </div>
                
                    <div className="col-lg-3 d-flex justify-content-center">
                    <Card style={{ width: '90%' }}  className='mb-4 border-0 custom__card'>
      <Card.Body>
        <Card.Title>🪽 Another Wing</Card.Title>
        <Card.Text>
        Channeling youthful energy into meaningful action.
We engage young minds through leadership programs, social initiatives, and interactive sessions that foster responsibility, creativity, and connection.


        </Card.Text>
        <button className='join__btn__green  '> Join Now</button>

      </Card.Body>
    </Card>
                    </div>
                </div>

            </div>
        </section>
       
        <section id='events'>
            <div className='mt-5 p-5 bg__light__red'>
            <h3 className='section__head'>Events and News</h3>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className='card  bg__light__green rounded '>
                        <img className='rounded event__img  ' src="https://www.wisdomislam.org/source/alappuzaha%20family%20conference.jpg" alt="" />
                        <div className='p-4 d-flex flex-column'>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Quae impedit amet atque assumenda rerum totam eius nemo soluta voluptates, sequi, recusandae, illo veritatis tempora asperiores beatae il</p>
                            <span  className='text-center read__more__green__span'>Read more  </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className='card  bg__light__green rounded '>
                        <img className='rounded event__img ' src="https://www.wisdomislam.org/source/WhatsApp%20Image%202024-05-19%20at%203.22.54%20PM.jpeg" alt="" />
                        <div className='p-4 d-flex flex-column'>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Quae impedit amet atque assumenda rerum totam eius nemo soluta voluptates, sequi, recusandae, illo veritatis tempora asperiores beatae il</p>
                            <span  className='text-center read__more__green__span'>Read more  </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className='card  bg__light__green rounded '>
                        <img className='rounded event__img  ' src="https://www.wisdomislam.org/source/result%208th%20std.jpeg" alt="" />
                        <div className='p-4 d-flex flex-column'>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Quae impedit amet atque assumenda rerum totam eius nemo soluta voluptates, sequi, recusandae, illo veritatis tempora asperiores beatae il</p>
                            <span  className='text-center read__more__green__span'>Read more </span>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-4'><button style={{width:"fit-content"}} className='join__btn__brown'> VIEW ALL  <i class='bx bx-chevron-right'></i></button></div>
            </div>
            </div>
        </section>
        <section id='gallery'>
   <div className='p-3 p-md-5'>
    <h3 className='section__head'>Featured Gallery</h3>
    <div className="p-md-4 p-0 pt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="  h-100 pb-5 px-1 ">
              <img src={img} className="rounded card-img-top" alt={`Slide ${index + 1}`} />
              <div className="card-body mt-3">
                <h5 className="card-title">Slide {index + 1}</h5>
                <p className="card-text">A brief description goes here.</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </div>
        </section>
  
        <Footer></Footer>
    </div>
  )
}

export default HomePage