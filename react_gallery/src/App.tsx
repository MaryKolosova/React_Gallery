import { ReactGallery } from "./ReactGallery";

import style from './index.module.scss';

function App() {
  return (
    <div className='App'>
      <ReactGallery
      photos={[
        {id: 1, src: "/photos/1.jpg", preview: "/photos/preview/1.jpg", decription: "Norway 1"},
        {id: 1, src: "/photos/2.jpg", preview: "/photos/preview/2.jpg", decription: "Norway 2"},
        {id: 1, src: "/photos/3.jpg", preview: "/photos/preview/3.jpg", decription: "Norway 3"},
        {id: 1, src: "/photos/4.jpg", preview: "/photos/preview/4.jpg", decription: "Norway 4"},
        {id: 1, src: "/photos/5.jpg", preview: "/photos/preview/5.jpg", decription: "Norway 5"},
        {id: 1, src: "/photos/6.jpg", preview: "/photos/preview/6.jpg", decription: "Norway 6"},
        {id: 1, src: "/photos/7.jpg", preview: "/photos/preview/7.jpg", decription: "Norway 7"},
      ]}
      />
    </div>
  )
}

export default App
