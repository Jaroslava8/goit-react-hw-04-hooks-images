import './App.css';
import React, { useState } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';


export default function App() {
  const [openModal, setOpenModal] = useState(null);
  const [searchImage, setSearchImage] = useState('');
  const [page, setPage] = useState(1);

  const onSubmit = search => {
    setSearchImage(search);
    setPage(1);
  };

  const onModal = url => {
    setOpenModal(url);
  };

  const setNextPage = nextPage => {
    setPage(page => page + nextPage);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      
      <ImageGallery
        search={searchImage}
        onClickToModal={onModal}
        page={page}
        setPage={setNextPage}
      />
      {openModal && <Modal largeImgURL={openModal} closeModal={onModal} />}
    </div>
  );
}