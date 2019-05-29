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
    this.sms.send('662793549', 'Sms z aplikacji! Daj znac Albkowi jak dojdzie', options).then(() => {
      alert('doszlo');
    }).catch((error) => {
      alert(error);
    });
  }

}
