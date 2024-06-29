import { Meta, StoryFn } from '@storybook/react';
import IconButton from './IconButton';
export default {
  title: 'Example/IconButton',
  component: IconButton,
} as Meta;

const Template: StoryFn = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
