import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Lab Fisika, SMAN 9 Malang</strong>
                </a>{' '}
                <br />
                Jl. Puncak Borobudur No.1, Mojolangu,
                <br />
                Kec. Lowokwaru, Kota Malang, Jawa Timur 65142
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15806.426580913192!2d112.6252336!3d-7.9360854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8cf2474af4e8c8b!2sSMA%20Negeri%209%20Malang!5e0!3m2!1sid!2sid!4v1667312195261!5m2!1sid!2sid" 
                width="100%"
                height="450"
                frameborder="0" 
                style={{ border: '0' }}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Dinda & Indra Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
