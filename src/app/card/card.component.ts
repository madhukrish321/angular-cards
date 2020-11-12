import { Component, OnInit, Input } from '@angular/core';

interface Post {
  title: string;
  subtitle: string;
  content: string;
  imgUrl: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit(): void {}
}
