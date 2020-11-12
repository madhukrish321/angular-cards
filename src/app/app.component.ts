import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      subtitle: '@nature',
      content: 'Saw this awesome tree during my hike today.',
      imgUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      subtitle: '@mounatinlover',
      content: 'I love to do skiing on a Snowy Mountain.',
      imgUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Mountain Biking',
      subtitle: '@biking321',
      content: 'Mountain Biking is one of my hobby.',
      imgUrl: 'assets/biking.jpeg',
    },
  ];
}
