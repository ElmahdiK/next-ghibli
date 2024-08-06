'use client';

// interface HeaderProps {
// mangas: [];
// setMangaIndex: () => void;
// }
export default function Header() {
  // props: HeaderProps
  // const { mangas, setMangaIndex } = props;

  return (
    <header className='flex flex-col items-center justify-center bg-white p-4 sm:flex-row md:flex-row '>
      {/* <p className='text-center'>
        <select
          className='text-center text-2xl font-semibold outline-0'
          onChange={(e) => setMangaIndex(e.target.value)}
        >
          {mangas.map((e, index) => (
            <option key={e.id} value={index}>
              {e.name}
            </option>
          ))}
        </select>
        <br />
        <span className='text-sm'>
          {'{ '} imagined by the Ghibli studio {' }'}{' '}
        </span>
      </p> */}
    </header>
  );
}
