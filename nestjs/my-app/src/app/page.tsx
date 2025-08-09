'use client';

import Link from "next/link";

import csstest from './globals.module.css'
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    name: 'blabla'
  })
  return (
    <>
      <h1>Hello this is how we do it</h1>
      <Link href="/about" className={csstest["linkstyle"]}>ABOUT PAGE</Link><p/>
      <Link href="/contacts/contact-1" className="text-blue-500 hover:text-blue-700 font-semibold underline">Contacts page 1</Link><p/>
      <Link href="/contacts/contact-2" className="text-blue-500 hover:text-blue-700 font-semibold underline">Contacts page 2</Link><p/>
    </>
  );
}
