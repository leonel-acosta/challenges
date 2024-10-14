import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomVolume(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  function handleClick(){
    const randomVolume = getRandomVolume(volumes)
    router.push(`/volumes/${randomVolume.slug}`)
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>
        Random Volume
      </button>
    </>
  );
}
