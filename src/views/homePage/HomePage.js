import React from 'react';
import {Card, Form, Input} from "components";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

function HomePage() {
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      symbolName: '',
    },
    mode: 'onTouched'
  })

  const onSubmit = (payload) => {
    router.push(`/coin/${payload.symbolName?.toLowerCase()}`)
  }

  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <Card title="Crypto">
        <Form methods={methods} onSubmit={onSubmit}>
          <Input
            name="symbolName"
            label="Enter symbol name and search:"
            placeholder="Symbol name"
            required/>
          <button type='submit' className="bg-blue-600 text-white w-full py-2 rounded">
            search
          </button>
        </Form>
      </Card>
    </div>
  );
}

export default HomePage;