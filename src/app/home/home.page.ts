import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private sms: SMS) {}

  sendSMS() {
    var options = {
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send('792036750', 'Sms z aplikacji! Daj znac jak dojdzie').then(() => {
      alert('doszlo');
    }).catch((error) => {
      alert(error);
    });
  }

}
