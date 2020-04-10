import React from 'react';

export default function Footer() {

  return (
    <footer class="page-footer red darken-4 footer ">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Joker Hesaplama</h5>
                <p class="grey-text text-lighten-4"></p>
              </div>
              <div class="col l4 offset-l2 s12">
                <ul>
                  <li><a class="grey-text text-lighten-3" href="/">Anasayfa</a></li>
                  <li><a class="grey-text text-lighten-3" href="/singup">Kayıl Ol</a></li>
                  <li><a class="grey-text text-lighten-3" href="/signin">Giriş Yap</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright center">
            <div class="container">
               ©Copyright 2020 mnbl
            </div>
          </div>
        </footer>
  );
}