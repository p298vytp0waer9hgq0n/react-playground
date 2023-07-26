import type { Meta, StoryObj } from "@storybook/react";
import Contact from "../components/Contacts/Contact";

import genasi from "../images/portrait01.png";

const meta: Meta<typeof Contact> = {
    title: 'Page/Contact',
    tags: ['autodocs'],
    component: Contact,
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const Primary: Story = {
    args: {
        img: genasi,
        name: "R.A. Cousteau",
        phone: "(777) 67598-2327",
        email: "prometheus@shanshiracademy.edu",
    }
};