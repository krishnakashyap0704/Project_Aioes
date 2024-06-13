import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                All in One Engineering Solution
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms & Conditions
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>

    // <MDBFooter className='bg-light text-center text-white'>
    //   <MDBContainer className='p-4 pb-0'>
    //     <section className='mb-4'>
    //       <MDBBtn
    //         floating
    //         className='m-1'
    //         style={{ backgroundColor: '#3b5998' }}
    //         href='#!'
    //         role='button'
    //       >
    //         <MDBIcon fab icon='facebook-f' />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className='m-1'
    //         style={{ backgroundColor: '#55acee' }}
    //         href='#!'
    //         role='button'
    //       >
    //         <MDBIcon fab icon='twitter' />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className='m-1'
    //         style={{ backgroundColor: '#dd4b39' }}
    //         href='#!'
    //         role='button'
    //       >
    //         <MDBIcon fab icon='google' />
    //       </MDBBtn>
    //       <MDBBtn
    //         floating
    //         className='m-1'
    //         style={{ backgroundColor: '#ac2bac' }}
    //         href='#!'
    //         role='button'
    //       >
    //         <MDBIcon fab icon='instagram' />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className='m-1'
    //         style={{ backgroundColor: '#0082ca' }}
    //         href='#!'
    //         role='button'
    //       >
    //         <MDBIcon fab icon='linkedin-in' />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className='m-1'
    //         style={{ backgroundColor: '#333333' }}
    //         href='#!'
    //         role='button'
    //       >
    //         <MDBIcon fab icon='github' />
    //       </MDBBtn>
    //     </section>
    //   </MDBContainer>

    //   <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    //     © 2020 Copyright:
    //     <a className='text-white' href='https://mdbootstrap.com/'>
    //       MDBootstrap.com
    //     </a>
    //   </div>
    // </MDBFooter>
  );
}
