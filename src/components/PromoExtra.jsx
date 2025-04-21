import React from 'react';
import './PromoExtra.css';

const PromoExtra = () => {
  return (
    <div className="promo-extra">
      <img
        src="/img/promo-unica.png" // Asegúrate de que la imagen esté en public/img/
        alt="Promoción especial"
        className="promo-img"
      />
    </div>
  );
};

export default PromoExtra;
