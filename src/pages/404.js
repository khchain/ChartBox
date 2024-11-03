import React from 'react';
import CloseCircleIcon from "assets/icons/CloseCircleIcon";
import {Card} from "components";

function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card title="Not Found">
        <div className="flex flex-col items-center gap-6 text-sm">
          <CloseCircleIcon className="text-[#EC3737] w-28 h-28"/>
          <p>Symbol not found!</p>
        </div>
      </Card>
    </div>
  );
}

export default NotFound;