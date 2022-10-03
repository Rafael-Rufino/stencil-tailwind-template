import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-app',
  styleUrl: '../../global/app.css',
  shadow: true,
})
export class Button {
  @Prop() name: string;

  @Prop() onClick: (event: MouseEvent) => void;

  @Prop() type?: 'button' | 'submit' | 'reset';

  render() {
    return (
      <button
        onClick={this.onClick}
        type={this.type}
        class="bg-blue-500 flex w-full justify-center items-center text-center text-white h-14 cursor-pointer px-4  rounded text-base font-bold hover:bg-blue-600 transition-all"
      >
        {this.name}
      </button>
    );
  }
}
