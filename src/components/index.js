import dynamic from "next/dynamic";

const Form = dynamic(() => (import('components/reactHookForm/Form')), {ssr: false})
const Input = dynamic(() => (import('components/input/Input')), {ssr: false})
const Card = dynamic(() => (import('components/card/Card')), {ssr: false})

export {
  Form,
  Input,
  Card
}