import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Clock from '@/components/Clock/Clock';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main>
        <div>
          <h2>Задания</h2>
          <ul className="container">
            <ol>
              <a href="/clockPage" className="container__link">
                Часы
              </a>
            </ol>
            <ol>
              <a href="/halfCirclePage" className="container__link">
                Полукруг
              </a>
            </ol>
          </ul>
        </div>
      </main>
    </>
  );
}
