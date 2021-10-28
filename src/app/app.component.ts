import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from "@angular/router";

import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Escalas',
      url: '/escala',
      icon: 'list'
    },
    {
      title: 'Cifras',
      url: '/cifras',
      icon: 'musical-notes'
    },
    {
      title: 'Estudos',
      url: '/estudos',
      icon: 'book'
    },
    {
      title: 'Videos',
      url: '/videos',
      icon: 'play'
    },
    {
      title: 'Notificações',
      url: '/notificacoes',
      icon: 'notifications'
    }
  ];
  public links = [
     {
      title: 'Site',
      url: 'https://open.spotify.com/artist/7LgG4hhRRMVrDnctClnvea?si=qTca0kb8RCes986KAAWbCA',
      icon: 'logo-wordpress'
    },
    {
      title: 'CrossWords - Spotify',
      url: 'https://open.spotify.com/user/12161693345/playlist/144gZVQ8oDu2FxCtPZ0fBZ?si=dXytFmCPSPG10SyT5Vq5wQ',
      icon: 'musical-notes'
    },
    {
      title: 'Playlist Spotify',
      url: 'https://open.spotify.com/user/12161693345/playlist/144gZVQ8oDu2FxCtPZ0fBZ?si=dXytFmCPSPG10SyT5Vq5wQ',
      icon: 'musical-notes'
    },
    {
      title: 'Facebook',
      url: 'http://facebook.com/icbiblica',
      icon: 'logo-facebook'
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/icbiblica',
      icon: 'logo-instagram'
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/channel/UC8h3jT4_KyhvOcFBdIWKIew',
      icon: 'logo-youtube'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/icbiblica',
      icon: 'logo-twitter'
    },
    {
      title: 'Aplicativo',
      url: 'http:///icbiblica.com/applicativo',
      icon: 'cloud-download'
    }
  ];
  public tabs = [
    {
      title: 'Escalas',
      url: '/escala',
      icon: 'list'
    },
    {
      title: 'Cifras',
      url: '/cifras',
      icon: 'musical-notes'
    },
    {
      title: 'Estudos',
      url: '/estudos',
      icon: 'book'
    }
  ];

  options: InAppBrowserOptions = {
    location : 'yes', // Or 'no'
    hidden : 'no', // Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes', // Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', // Android only
    closebuttoncaption : 'Close', // iOS only
    disallowoverscroll : 'no', // iOS only
    toolbar : 'yes', // iOS only
    enableViewportScale : 'no', // iOS only
    allowInlineMediaPlayback : 'no', // iOS only
    presentationstyle : 'pagesheet', // iOS only
    fullscreen : 'yes', // Windows only
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  goToUrl(url) {
    this.router.navigateByUrl(url);
  }

  openWithInAppBrowser(url : string){
    const target = '_system';
    InAppBrowser.create(url, target);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
