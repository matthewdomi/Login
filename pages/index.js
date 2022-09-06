import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaFacebook, FaLinkedIn, FaGoogle, FaYoutube, FaTelegram, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md"
import login from './login';


export default function Home() {
  return (
    <login />
  )
}
