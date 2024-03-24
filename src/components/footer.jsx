
// 'use client';
import { Footer } from 'flowbite-react';

export function Foooter() {
  return (
    <Footer container>
      <Footer.Copyright href="/osa/" by="OSA™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="/osa/about">O nas</Footer.Link>
        <Footer.Link href="#">Rodo</Footer.Link>
        <Footer.Link href="#">Sponsorzy</Footer.Link>
        <Footer.Link href="#">Kontact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
