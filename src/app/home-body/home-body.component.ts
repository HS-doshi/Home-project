import { Component } from '@angular/core';

@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [],
  template: `
  <section class="listing">
    <img class="listing-photo">
    <h2 class="listing-heading"></h2>
    <p class="listing-location"></p>
</section>
`,
  styleUrl: './home-body.component.css'
})
export class HomeBodyComponent {

}
