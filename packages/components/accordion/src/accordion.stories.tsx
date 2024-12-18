import { StoryObj } from "@storybook/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionProps,
  AccordionTrigger,
} from "./accordion"
import { ChevronDownIcon, IconSvgProps } from "@mijn-ui/shared-icons"

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  args: {
    type: "single",
    collapsible: true,
    unstyled: false,
    variant: "default",
  },
  argTypes: {
    type: {
      type: "string",
      control: "select",
      options: ["single", "multiple"],
    },
    variant: {
      type: "string",
      control: "select",
      options: ["default", "outlined", "surface"],
    },
  },
}

export default meta

const AccordionTemplate = (args: AccordionProps) => (
  <Accordion className="md:w-xl w-60" {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled</AccordionTrigger>
      <AccordionContent>
        Yes, you can make the components unstyled by setting the{" "}
        <span className="font-semibold">unstyled</span> prop to{" "}
        <span className="font-semibold">true</span> on either a single component
        or a parent component.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

const AccordionWithCustomIcons = (args: AccordionProps) => (
  <Accordion className="md:w-xl w-60" {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger
        icon={
          <>
            <PlusIcon className="duration-400 size-4 shrink-0 transition-transform group-data-[state=open]:hidden" />
            <MinusIcon className="duration-400 size-4 shrink-0 transition-transform group-data-[state=closed]:hidden" />
          </>
        }
      >
        Is it accessible
      </AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger
        icon={
          <>
            <PlusIcon className="duration-400 size-4 shrink-0 transition-transform group-data-[state=open]:hidden" />
            <MinusIcon className="duration-400 size-4 shrink-0 transition-transform group-data-[state=closed]:hidden" />
          </>
        }
      >
        Is it unstyled
      </AccordionTrigger>
      <AccordionContent>
        Yes, you can make the components unstyled by setting the{" "}
        <span className="font-semibold">unstyled</span> prop to{" "}
        <span className="font-semibold">true</span> on either a single component
        or a parent component.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger
        icon={
          <>
            <PlusIcon className="duration-400 size-4 shrink-0 transition-transform group-data-[state=open]:hidden" />
            <MinusIcon className="duration-400 size-4 shrink-0 transition-transform group-data-[state=closed]:hidden" />
          </>
        }
      >
        Is it animated?
      </AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

const AccordionUnstyled = (args: AccordionProps) => (
  <Accordion
    {...args}
    className="md:w-xl w-60 rounded-2xl border border-orange-500 p-4"
  >
    <AccordionItem className="my-2" value="item-1">
      <AccordionTrigger
        className="group flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800"
        icon={
          <ChevronDownIcon className="group-data-[state=open]:rotate-180" />
        }
      >
        Is it accessible
      </AccordionTrigger>
      <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="my-2" value="item-2">
      <AccordionTrigger
        className="group flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800"
        icon={
          <ChevronDownIcon className="group-data-[state=open]:rotate-180" />
        }
      >
        Is it unstyled
      </AccordionTrigger>
      <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
        Yes, you can make the components unstyled by setting the{" "}
        <span className="font-semibold">unstyled</span> prop to{" "}
        <span className="font-semibold">true</span> on either a single component
        or a parent component.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="my-2" value="item-3">
      <AccordionTrigger
        className="group flex w-full items-center justify-between bg-neutral-200 px-4 py-2 text-left dark:bg-neutral-800"
        icon={
          <ChevronDownIcon className="group-data-[state=open]:rotate-180" />
        }
      >
        Is it animated?
      </AccordionTrigger>
      <AccordionContent className="bg-neutral-300 px-4 py-2 text-sm dark:bg-neutral-700">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: AccordionTemplate,
}

export const Variants: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col items-center gap-8">
        <div className="space-y-2">
          <h3 className="text-muted-text w-full text-start font-bold">
            Default
          </h3>
          <AccordionTemplate {...args} />
        </div>
        <div className="space-y-2">
          <h3 className="text-muted-text w-full text-start font-bold">
            Surface
          </h3>
          <AccordionTemplate {...args} variant="surface" />
        </div>
        <div className="space-y-2">
          <h3 className="text-muted-text w-full text-start font-bold">
            Outlined
          </h3>
          <AccordionTemplate {...args} variant="outlined" />
        </div>
      </div>
    )
  },
}

export const SingleExpand: Story = {
  render: AccordionTemplate,
  args: {
    type: "single",
  },
}

export const MultipleExpand: Story = {
  render: AccordionTemplate,
  args: {
    type: "multiple",
  },
}

export const CustomIcon: Story = {
  render: AccordionWithCustomIcons,
}

export const Unstyled: Story = {
  render: AccordionUnstyled,
  args: {
    unstyled: true,
  },
}

function PlusIcon(props: IconSvgProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14M12 5v14" />
    </svg>
  )
}

function MinusIcon(props: IconSvgProps) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  )
}