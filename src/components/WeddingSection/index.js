import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection() {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Jumat, 04 November 2022" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Syukuran Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {renderGuestInfo()}
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Akad Nikah"
                time="08.00 WIB"
                date="Jumat, 04 November 2022"
                description="Lab Fisika <br/>SMAN 9 Malang, Malang"
              />
              <WeddingInfoBox
                title="Resepsi"
                time="08.30 WIB"
                date="Jumat, 04 November 2022"
                description="Lab Fisika <br/>SMAN 9 Malang, Malang"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(WeddingSection);
