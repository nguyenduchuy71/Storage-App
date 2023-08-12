import React from 'react'
import styled from 'styled-components'

function HomeScreen () {
  return (
    <HomeScreenContainer>
      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
              <h1 data-aos='fade-up'>Grow your team</h1>
              <h2 data-aos='fade-up' data-aos-delay='400'>
                This website supports your research and data storage using many
                popular hosting services like Amazon, Firebase, ...
              </h2>
              <div data-aos='fade-up' data-aos-delay='800'>
                <a href='/projects' className='btn-get-started scrollto'>
                  Get Started
                </a>
              </div>
            </div>
            <div
              className='col-lg-6 order-1 order-lg-2 hero-img'
              data-aos='fade-left'
              data-aos-delay='200'
            >
              <img
                src='assets/img/hero-img.png'
                className='img-fluid animated'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
      <section id='clients' class='clients clients'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-2 col-md-4 col-6'>
              <img
                src='assets/img/clients/client-1.png'
                class='img-fluid'
                alt=''
                data-aos='zoom-in'
              />
            </div>

            <div class='col-lg-2 col-md-4 col-6'>
              <img
                src='assets/img/clients/client-2.png'
                class='img-fluid'
                alt=''
                data-aos='zoom-in'
                data-aos-delay='100'
              />
            </div>

            <div class='col-lg-2 col-md-4 col-6'>
              <img
                src='assets/img/clients/client-3.png'
                class='img-fluid'
                alt=''
                data-aos='zoom-in'
                data-aos-delay='200'
              />
            </div>

            <div class='col-lg-2 col-md-4 col-6'>
              <img
                src='assets/img/clients/client-4.png'
                class='img-fluid'
                alt=''
                data-aos='zoom-in'
                data-aos-delay='300'
              />
            </div>

            <div class='col-lg-2 col-md-4 col-6'>
              <img
                src='assets/img/clients/client-5.png'
                class='img-fluid'
                alt=''
                data-aos='zoom-in'
                data-aos-delay='400'
              />
            </div>

            <div class='col-lg-2 col-md-4 col-6'>
              <img
                src='assets/img/clients/client-6.png'
                class='img-fluid'
                alt=''
                data-aos='zoom-in'
                data-aos-delay='500'
              />
            </div>
          </div>
        </div>
      </section>
      <section id='contact' class='contact'>
        <div class='container'>
          <div class='section-title' data-aos='fade-up'>
            <h2>Contact Us</h2>
          </div>

          <div class='row'>
            <div
              class='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div class='contact-about'>
                <h3>Huy Nguyen</h3>
                <p>Python Developer</p>
                <div class='social-links'>
                  <a
                    href='https://www.facebook.com/profile.php?id=100034499171734'
                    target='blank'
                    class='facebook'
                  >
                    <i class='bi bi-facebook'></i>
                  </a>
                  <a
                    href='https://github.com/nguyenduchuy71?tab=repositories'
                    target='blank'
                    class='github'
                  >
                    <i class='bi bi-github'></i>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/nguyen-huy-26146a14a/'
                    target='blank'
                    class='linkedin'
                  >
                    <i class='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              class='col-lg-3 col-md-6 mt-4 mt-md-0'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div class='info'>
                <div>
                  <i class='ri-map-pin-line'></i>
                  <p>
                    Hiep Binh Chanh, Thu Duc<br></br>TP.Ho Chi Minh
                  </p>
                </div>

                <div>
                  <i class='ri-mail-send-line'></i>
                  <p>wtfomg3650@gmail.com</p>
                </div>

                <div>
                  <i class='ri-phone-line'></i>
                  <p>+84 349360265</p>
                </div>
              </div>
            </div>

            <div
              class='col-lg-5 col-md-12'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <form
                action='forms/contact.php'
                method='post'
                role='form'
                class='php-email-form'
              >
                <div class='form-group'>
                  <input
                    type='text'
                    name='name'
                    class='form-control'
                    id='name'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div class='form-group'>
                  <input
                    type='email'
                    class='form-control'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div class='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div class='form-group'>
                  <textarea
                    class='form-control'
                    name='message'
                    rows='5'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
                <div class='my-3'>
                  <div class='loading'>Loading</div>
                  <div class='error-message'></div>
                  <div class='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </HomeScreenContainer>
  )
}

export default HomeScreen
const HomeScreenContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100vh;
`
