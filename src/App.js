import './App.css';
import ImageGallery from './Components/ImageGallery';
import Header from './Components/Header';
import { useEffect, useState } from 'react';

function App() {

  const [image, setImage] = useState(null);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        setImage(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header title='Image Gallery' />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}>
        {image && image.map(item => (
          <ImageGallery key={item.id} image={item.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
