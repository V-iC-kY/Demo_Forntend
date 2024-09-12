import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
    providedIn: "root",
})
export class PushNotificationService {

    token: any


    constructor(private firebaseX: FirebaseX, private http: HttpClient, private push: Push,
        private platform: Platform, private api: ApiService) { }

    async getToken() {
        console.log('Called');
        if (this.platform.IOS) {
            const options: PushOptions = {
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                }
            }
            this.push.hasPermission()
                .then((res: any) => {
                    if (res.isEnabled) {
                        const pushObject: PushObject = this.push.init(options);
                        pushObject.on('registration').subscribe((registration: any) => (
                            console.log(registration)
                        ));
                    } else {

                    }
                });
        }
        if (this.platform.ANDROID) {
            this.token = await this.firebaseX.getToken();
            console.log('Deveice Token', this.token)
            localStorage.setItem("fcmToken", this.token);
            // this.sendTokenToServer(token);
        }
    }

    // sendTokenToServer(deviceToken: any) {
    //     const UserId = localStorage.getItem('userId');
    //     let post = {
    //         userId: UserId,
    //         token: deviceToken
    //     }
    //     this.api.GetOtp(post).subscribe({
    //         next: (res => {
    //             console.log('notification Sent');
    //         }), error: (err => {
    //             console.log('Error while Sent');
    //         })
    //     })
    // }

}