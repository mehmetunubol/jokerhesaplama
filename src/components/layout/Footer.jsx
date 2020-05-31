import React from 'react';

export default function Footer() {

  return (
    <footer className="page-footer red darken-4 footer ">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Joker Hesaplama</h5>
                <p className="grey-text text-lighten-4"></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3" href="/">Anasayfa</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright center">
            <div className="container">
               ©Copyright 2020 mnbl
            </div>
          </div>
        </footer>
  );
}