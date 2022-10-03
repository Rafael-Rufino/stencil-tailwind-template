import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'checktext-app',
  styleUrl: '../../global/app.css',
  shadow: true,
})
export class CheckText {
  @Prop() id: string;
  @Prop() name: string;
  @Prop() value?: string;
  @Prop() onChange: (event: CustomEvent<HTMLInputElement>) => void;

  render() {
    return (
      <div class="flex justify-start items-center mt-6 mb-8">
        <input type="checkbox" id={this.id} value={this.value} onChange={this.onChange} />
        <label class="font-base pl-4 leading-tight text-gray-600" id={this.id}>
          {this.name}
        </label>
      </div>
    );
  }
}
