import type { Meta, StoryObj } from "@storybook/react";
import VisitCard from "../components/VisitCard/VisitCard";

const meta: Meta<typeof VisitCard> = {
    title: 'Page/VisitCard',
    component: VisitCard,
};

export default meta;

type Story = StoryObj<typeof VisitCard>;

export const Primary: Story = {};