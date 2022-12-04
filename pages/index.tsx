import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from './Home';
import Login from './Login';

export default function Index() {
  return (
    <Login />
    // <Home />
  )
}
