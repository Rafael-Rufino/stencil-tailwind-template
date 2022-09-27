import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'heading-app',
  styleUrl: '../../global/app.css',
  shadow: true,
})
export class Heading {
  @Prop() title: string;

  @Prop() description: string;

  render() {
    return (
      <div class="w-full text-center relative">
        <h1 class="text-2xl leading-normal font-bold text-gray-300">{this.title}</h1>
        <p class="text-base text-gray-400 leading-normal pb-6 pt-4"> {this.description ? this.description : ''} </p>
      </div>
    );
  }
}
