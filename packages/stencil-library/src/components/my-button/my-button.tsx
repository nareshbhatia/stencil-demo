import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() color?: 'default' | 'primary' | 'secondary' = 'default';
  @Prop() disabled? = false;
  @Prop() size?: 'small' | 'medium' | 'large' = 'medium';
  @Prop() variant?: 'contained' | 'outlined' = 'contained';

  render() {
    const classes = [];

    classes.push('button');

    switch (this.variant) {
      case 'contained':
        classes.push('button--contained');
        if (this.disabled) {
          classes.push('button--disabled');
          classes.push('button--disabled-contained');
        } else {
          switch (this.color) {
            case 'default': {
              classes.push('button--contained-default');
              break;
            }
            case 'primary': {
              classes.push('button--contained-primary');
              break;
            }
            case 'secondary': {
              classes.push('button--contained-secondary');
              break;
            }
          }
        }
        break;
      case 'outlined':
        classes.push('button--outlined');
        if (this.disabled) {
          classes.push('button--disabled');
          classes.push('button--disabled-outlined');
        } else {
          switch (this.color) {
            case 'default': {
              classes.push('button--outlined-default');
              break;
            }
            case 'primary': {
              classes.push('button--outlined-primary');
              break;
            }
            case 'secondary': {
              classes.push('button--outlined-secondary');
              break;
            }
          }
        }
        break;
    }

    switch (this.size) {
      case 'small': {
        classes.push('button--small');
        break;
      }
      case 'medium': {
        classes.push('button--medium');
        break;
      }
      case 'large': {
        classes.push('button--large');
        break;
      }
    }

    return (
      <button class={classes.join(' ')} type="button">
        <slot />
      </button>
    );
  }
}
