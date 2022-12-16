import React from 'react';
import Styles from './InitialDash.module.css';
import { Sidebar } from '../components/Sidebar';
import { MainScreen } from '../components/MainScreen';


export default function InitialDash() {
  return (
    <div>
      <Sidebar>
        <MainScreen/>
      </Sidebar>
    </div>
  );
}

