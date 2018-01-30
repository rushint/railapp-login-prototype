import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'pages-home',
    templateUrl: 'home.html',
})
export class HomePage {
    cards: any;
    category: string = 'option1';

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.cards = new Array(
            {avatar: 'http://i.pravatar.cc/150?img=', name: 'rushint', descr: 'This is my choice of movie theaters because of the great food places surrounding it and the overall new-ness of the theaters', numLikes: 17, numComments: 2, hoursAgo: 4},
            {avatar: 'http://i.pravatar.cc/150?img=', name: 'tommy83', descr: 'I love this theatre!!!!!! This theatre knocks any AMC out of the park, but it is more expensive', numLikes: 24, numComments: 7, hoursAgo: 12},
            {avatar: 'http://i.pravatar.cc/150?img=', name: 'rushint', descr: 'This is my choice of movie theaters because of the great food places surrounding it and the overall new-ness of the theaters', numLikes: 17, numComments: 2, hoursAgo: 4},
            {avatar: 'http://i.pravatar.cc/150?img=', name: 'tommy83', descr: 'I love this theatre!!!!!! This theatre knocks any AMC out of the park, but it is more expensive', numLikes: 24, numComments: 7, hoursAgo: 12},
            {avatar: 'http://i.pravatar.cc/150?img=', name: 'rushint', descr: 'This is my choice of movie theaters because of the great food places surrounding it and the overall new-ness of the theaters', numLikes: 17, numComments: 2, hoursAgo: 4},
            {avatar: 'http://i.pravatar.cc/150?img=', name: 'tommy83', descr: 'I love this theatre!!!!!! This theatre knocks any AMC out of the park, but it is more expensive', numLikes: 24, numComments: 7, hoursAgo: 12}
        );
    }

    ionViewDidLoad() {
    }
}
