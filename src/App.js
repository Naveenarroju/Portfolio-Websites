import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [active, setActive] = useState(null);

  function handleClick(index) {
    setActive(index);
  }
  const panels = [
    {
      image:
        'https://c4.wallpaperflare.com/wallpaper/804/999/633/flag-india-artistic-1920x1080-wallpaper-preview.jpg',
      title: 'Explore India',
    },
    {
      image:
        'https://images.news18.com/ibnlive/uploads/2023/04/world-heritage-day-2023-history-significance-theme-16817273463x2.jpg',
      title: 'Rich Cultural Heritage',
    },
    {
      image:
        'https://dharmakshethra.com/wp-content/uploads/2019/01/Make-in-India-Pharmacy-products-Economy-Dharmakshethra.jpg',
      title: 'Emerging India',
    },
    {
      image:
        'https://www.orfonline.org/wp-content/uploads/2017/08/Unity-in-Diversity-1280x720.jpg',
      title: 'Unity in diversity',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2017/08/15/16/04/indian-flag-2644512_960_720.jpg',
      title: 'Honoring the Sacrifices',
    },
  ];

  return (
    <>
      <div className="container">
        {panels.map((panel, index) => (
          <div
            key={index}
            className={`panel ${active === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${panel.image}')`,
            }}
            onClick={() => {
              handleClick(index);
            }}
          >
            <h3>{panel.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
