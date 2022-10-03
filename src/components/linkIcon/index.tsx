import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'link-app',
  styleUrl: '../../global/app.css',
  shadow: true,
})
export class LinkIcon {
  @Prop() title: string;
  @Prop() name: string;
  @Prop() href: string;
  @Prop() src: string;
  @Prop() alt: string;

  render() {
    return (
      <div class="flex justify-center items-center pt-9">
        <img src={this.src} alt={this.name} />
        <a class="text-blue-700 transition-all underline text-base leading-normal cursor-pointer hover:text-blue-700" title={this.title} href={this.href}>
          {this.name}
        </a>
      </div>
    );
  }
}
