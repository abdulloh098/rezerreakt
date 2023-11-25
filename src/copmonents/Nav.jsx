import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const options = [
    { value: 'uz', label: 'uzb' },
    { value: 'en', label: 'english' },
  ];
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { totalItems } = useCart();
  return (
    <>
      <div
        className="nav
      "
      >
        <Link to={'/'}>
          <img
            className="rasm"
            src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
            alt=""
          />
        </Link>

        <div className="text">
          <Link to="/store">{t('nav.1')}</Link>
          <Link to="/pc">{t('nav.2')}</Link>
          <Link to="/console">{t('nav.3')}</Link>

          <Link to="/mobile">{t('nav.4')}</Link>

          <Link to="/lifestyle">{t('nav.5')}</Link>
        </div>
        <Link to="/cart" className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-bag-x-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"
            />
          </svg>
          <sub>{totalItems}</sub>
        </Link>
        <Select
          onChange={({ value }) => changeLanguage(value)}
          options={options}
          className="select"
          placeholder={'English'}
        />
      </div>
    </>
  );
};

export default Nav;
