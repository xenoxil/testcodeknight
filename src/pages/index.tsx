import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <section>
          <h2>Задания</h2>
          <ul className="container">
            <ol>
              <Link href="/clockPage" className="link">
                Часы
              </Link>
            </ol>
            <ol>
              <Link href="/halfCirclePage" className="link">
                Полукруг
              </Link>
            </ol>
          </ul>
        </section>
      </main>
    </>
  );
}
