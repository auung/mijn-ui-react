import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertProps,
  AlertTitle,
} from "./alert"
import { IconSvgProps } from "@mijn-ui/shared-icons"

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  args: {
    color: "default",
    variant: "subtle",
    unstyled: false,
  },
  argTypes: {
    color: {
      control: "select",
      options: ["default", "success", "info", "warning", "danger"],
    },
    variant: {
      control: "select",
      options: ["subtle", "filled", "outlined"],
    },
  },
}

export default meta

const AlertTemplate = (args: AlertProps) => {
  return (
    <Alert className=" md:w-xl w-60" {...args}>
      <AlertIcon>
        <RocketIcon />
      </AlertIcon>
      <AlertTitle>New Feature Added</AlertTitle>
      <AlertDescription>
        A new feature has been added to the project.
      </AlertDescription>
    </Alert>
  )
}

export const Default = {
  render: AlertTemplate,
}

export const Colors = {
  render: (args: AlertProps) => (
    <div className="flex flex-col items-center gap-8">
      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Success
        </h3>
        <AlertTemplate {...args} />
      </div>
      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Info
        </h3>
        <AlertTemplate {...args} color="info" />
      </div>
      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Warning
        </h3>
        <AlertTemplate {...args} color="warning" />
      </div>
      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Danger
        </h3>
        <AlertTemplate {...args} color="danger" />
      </div>
      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Default
        </h3>
        <AlertTemplate {...args} color="default" />
      </div>
    </div>
  ),
  args: {
    color: "success",
  },
}

export const Variants = {
  render: (args: AlertProps) => (
    <div className="flex flex-col items-center gap-8">
      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Filled
        </h3>
        <AlertTemplate {...args} />
      </div>

      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Subtle / Default
        </h3>
        <AlertTemplate {...args} variant="subtle" />
      </div>

      <div className="space-y-2">
        <h3 className="text-muted-text w-full text-start font-semibold">
          Outlined
        </h3>
        <AlertTemplate {...args} variant="outlined" />
      </div>
    </div>
  ),
  args: {
    color: "info",
    variant: "filled",
  },
}

function RocketIcon(props: IconSvgProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32"
      />
    </svg>
  )
}
