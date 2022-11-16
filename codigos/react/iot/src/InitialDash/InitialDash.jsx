import React from 'react';
import Styles from './InitialDash.module.css';
import { Menu } from '../components/Menu';
import { Navbar } from '../components/Navbar';

export default function InitialDash() {
  return (
    <div>
      <Navbar />
      <Menu />
    </div>
  );
}

