import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-app',
  styleUrl: '../../global/app.css',
  shadow: true,
})
export class Input {
  @Prop() id: string;
  @Prop() label?: string;
  @Prop() type: 'text' | 'number' | 'date' | 'email' | 'password' | 'checkbox';
  @Prop() placeholder?: string;
  @Prop() onChange: (event: CustomEvent<HTMLInputElement>) => void;
  @Prop() value?: string;

  render() {
    return (
      <div class="container">
        <label class="tetx-base  text-left mb-1" htmlFor={this.id}>
          {this.label && this.label}
        </label>
        <input
          class="flex  w-full h-14 rounded text-base border-2 border-gray-100 mb-6 pl-3  text-gray-500"
          type={this.type}
          onChange={this.onChange}
          placeholder={this.placeholder}
          value={this.value}
        />
      </div>
    );
  }
}
