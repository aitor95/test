import { useState, useEffect } from "preact/hooks";
import Gallery from "./Gallery";

export default function GalleryBase() {

  const [location, setLocation] = useState<string | null>('')

  useEffect(() => {
    const init = async () => {

      const module = await import('photoswipe/lightbox');
      const PhotoSwipeLightbox = module.default;
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();

    };
    init();
  }, []);
  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    const target = event.target as HTMLElement
    const currentLocation = target.textContent
    setLocation(currentLocation)
  }

  return (
    <>
      <header class="flex flex-col justify-start items-start mb-12 md:flex-row md:items-end md:justify-between w-full">
        <div class="flex flex-col gap-2 font-light text-3xl uppercase sm:flex-row">
          <a href="/" class="font-bold">
            Aitor Blesa
          </a>
          <span>Photography</span>
        </div>
        <nav class="flex gap-4 tracking-widest uppercase font-semibold text-gray-500">
          {/* <a href="" class={`transition-colors hover:text-gray-950 ${location === 'Scotland' ? 'text-gray-950' : ''}`} onClick={handleClick}>
            Scotland
          </a> */}
          {/* <a href="" class={`transition-colors hover:text-gray-950 ${location === 'Iceland' ? 'text-gray-950' : ''}`} onClick={handleClick}>
            Iceland
          </a> */}
        </nav>
      </header>
      <Gallery location={location} />
    </>
  );
}