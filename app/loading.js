"use client"

import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <RotatingLines
        strokeColor='grey'
        strokeWidth='2'
        width='96'
        visible={true}
      />
    </>
  );
}
