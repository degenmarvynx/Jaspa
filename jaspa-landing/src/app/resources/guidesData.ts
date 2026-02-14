export type GuideStep = {
  step: number
  text: string
}

export type GuideTopic = {
  id: string
  title: string
  description: string
  steps: GuideStep[]
}

export const GUIDES: GuideTopic[] = [
  {
    id: 'open-account',
    title: 'How to Open an Account Online',
    description: 'Get answers to some common queries and frequently asked questions.',
    steps: [
      { step: 1, text: 'Open the Jaspa mobile app and select “Create Account”.' },
      { step: 2, text: 'Enter your phone number, and verify with the OTP sent via SMS.' },
      { step: 3, text: 'Fill in your basic information (full name, date of birth, gender, etc.).' },
      { step: 4, text: 'Confirm your BVN to unlock full account access.' },
      { step: 5, text: 'Take a quick selfie for identity verification.' },
      { step: 6, text: 'Create your 4‑digit PIN to secure your account.' },
      { step: 7, text: 'Your Jaspa account dashboard will appear — you’re ready to bank.' },
    ],
  },
  {
    id: 'multi-layered',
    title: 'How to use Multi‑Layered Jaspa Accounts',
    description: 'Get answers to some common queries and frequently asked questions.',
    steps: [
      { step: 1, text: 'Log into the Jaspa app and open the “Accounts” tab.' },
      { step: 2, text: 'Select “Add New Account Layer”.' },
      { step: 3, text: 'Select your account type (Kids, Students, Expenses, Locked Savings, etc.).' },
      { step: 4, text: 'Name the layer according to your preference (example: “Fuel Money” or “December Trip”).' },
      { step: 5, text: 'Set rules: spending limit, auto‑deposit, or lock duration.' },
      { step: 6, text: 'Confirm and save — your new layer appears instantly.' },
      { step: 7, text: 'Move money between layers anytime through “Transfer Between Accounts”.' },
    ],
  },
  {
    id: 'international-transfer',
    title: 'How to Transfer Money to International Accounts',
    description: 'Get answers to some common queries and frequently asked questions.',
    steps: [
      { step: 1, text: 'Go to “Transfers” on your Jaspa dashboard.' },
      { step: 2, text: 'Select “International Transfer”.' },
      { step: 3, text: 'Choose the country and currency you want to send money to.' },
      { step: 4, text: 'Enter recipient bank or wallet details.' },
      { step: 5, text: 'Input transfer amount — Jaspa shows FX rate and fees instantly.' },
      { step: 6, text: 'Review details and confirm with your transaction PIN.' },
      { step: 7, text: 'Select “Send Money” — you get confirmation immediately.' },
    ],
  },
  {
    id: 'pos-terminal',
    title: 'How to request for and get a Jaspa POS Terminal',
    description: 'Get answers to some common queries and frequently asked questions.',
    steps: [
      { step: 1, text: 'Log in to the Jaspa mobile app and go to “Business Tools”.' },
      { step: 2, text: 'Select “Request POS Terminal”.' },
      { step: 3, text: 'Fill in your business information (business name, location, average monthly turnover, etc.).' },
      { step: 4, text: 'Choose POS model and preferred delivery method.' },
      { step: 5, text: 'Submit request — you’ll see your application status immediately.' },
      { step: 6, text: 'A Jaspa representative will contact you for final onboarding and device activation.' },
    ],
  },
  {
    id: 'payroll-system',
    title: 'How to set up a Payroll System',
    description: 'Get answers to some common queries and frequently asked questions.',
    steps: [
      { step: 1, text: 'Open the Jaspa app and go to “Business Tools”.' },
      { step: 2, text: 'Select “Payroll Manager”.' },
      { step: 3, text: 'Add your employees and verify their bank details.' },
      { step: 4, text: 'Enter salary amounts and frequency (weekly, monthly, custom).' },
      { step: 5, text: 'Review the payroll summary and funding source.' },
      { step: 6, text: 'Select “Approve & Run Payroll” to process payments instantly.' },
      { step: 7, text: 'View payroll history anytime under “Payroll Reports”.' },
    ],
  },
]
