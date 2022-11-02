import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-rere.jpeg';
import Groom from '@assets/images/p-reza.jpeg';

import { styWrapper } from './styles';

function HelloSection() {

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
              <h3 className="sub-title hs">04 November 2022, Lab Fisika SMAN 9 Malang, Malang</h3>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">dr. Selena Amira Qudsiyah, Sp.PD.</h3>
                <p className="parent-name parent-name__top">
                  Putri Bapak Samuel Alexander Pieter <br />& Ibu Karin Novilda
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">dr. Abdiel Justin Gilbert, Sp.A.</h3>
                <p className="parent-name">
                  Putra Bapak Muhammad Rizky Billar <br />& Ibu Lesti Andryani
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
