import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
  slideIndex = 0;
  slides!: HTMLCollectionOf<HTMLElement>;

  constructor() { }

  ngOnInit() {
    this.slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    this.showSlides(this.slideIndex);
    setTimeout(() => this.showSlides((this.slideIndex + 1) % this.slides.length), 5000);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n: number) {
    let i;
    if (n > this.slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = this.slides.length
    }
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1
    }
    this.slides[this.slideIndex - 1].style.display = "block";
  }
}