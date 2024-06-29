import { Meta, StoryFn } from '@storybook/react';
import DownloadButton from './DownloadButton';

export default {
  title: 'Components/DownloadButton',
  component: DownloadButton,
} as Meta;

const Template: StoryFn = args => <DownloadButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
