import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { MyButton } from '../stencil-generated';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <MyButton
    color={args.color}
    disabled={args.disabled}
    size={args.size}
    variant={args.variant}
    onClick={args.onClick}
  >
    {args.text}
  </MyButton>
);

export const NyButtonStory = Template.bind({});
NyButtonStory.storyName = 'MyButton';
NyButtonStory.args = {
  text: 'Button',
  color: 'primary',
  disabled: false,
  size: 'medium',
  variant: 'contained',
};

export const MyButtonVariationsStory = () => {
  return (
    <div className="card max-w-3xl p-6">
      <h3 className="">Buttons</h3>

      <h4 className="mt-6">Contained Buttons</h4>
      <div className="mt-2">
        <MyButton>Default</MyButton>
        <MyButton className="ml-2" color="primary">
          Primary
        </MyButton>
        <MyButton className="ml-2" color="secondary">
          Secondary
        </MyButton>
        <MyButton className="ml-2" disabled>
          Disabled
        </MyButton>
      </div>

      <h4 className="mt-6">Outlined Buttons</h4>
      <div className="mt-2">
        <MyButton variant="outlined">Default</MyButton>
        <MyButton className="ml-2" variant="outlined" color="primary">
          Primary
        </MyButton>
        <MyButton className="ml-2" variant="outlined" color="secondary">
          Secondary
        </MyButton>
        <MyButton className="ml-2" variant="outlined" disabled>
          Disabled
        </MyButton>
      </div>

      <h4 className="mt-6">Sizes</h4>
      <div className="mt-2">
        <MyButton variant="contained" color="primary" size="small">
          Small
        </MyButton>
        <MyButton
          className="ml-2"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </MyButton>
        <MyButton
          className="ml-2"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </MyButton>
      </div>
      <div className="mt-2">
        <MyButton variant="outlined" color="primary" size="small">
          Small
        </MyButton>
        <MyButton
          className="ml-2"
          variant="outlined"
          color="primary"
          size="medium"
        >
          Medium
        </MyButton>
        <MyButton
          className="ml-2"
          variant="outlined"
          color="primary"
          size="large"
        >
          Large
        </MyButton>
      </div>
    </div>
  );
};
MyButtonVariationsStory.storyName = 'MyButton Variations';
