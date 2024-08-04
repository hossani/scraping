'use client';

import { useFormStatus } from "react-dom";

const BtnAdd =  () => {
const status=useFormStatus();
  return (
<div>
  <button type="submit"  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 btn-form"
  disabled={status.pending}>
    {status.pending?'creating ...':'submit'}
  </button>
  </div>
  );
}



export default BtnAdd;
