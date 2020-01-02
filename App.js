import React from 'react';
import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/TodoState'
import { ScreenState } from './src/context/screen/ScreenState'

export default function App() {
  return <ScreenState><TodoState><MainLayout /></TodoState></ScreenState>
}


