import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

const API_KEY = '40273804-3b8c2dbaae3f52338e7fd3d6d';
// Ваші імпорти

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    showModal: false,
    modalImage: '',
    query: '',
    page: 1,
  };

  getUniqueKey = () => {
    return Math.floor(Math.random() * 10000000);
  };

  handleFormSubmit = query => {
    if (query.trim() !== this.state.query.trim()) {
      this.setState({ query, images: [], page: 1, showModal: false }, () => {
        this.fetchImages();
      });
    }
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const apiKey = '40273804-3b8c2dbaae3f52338e7fd3d6d';
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const newImages = data.hits.map(image => ({
          ...image,
          uniqueKey: this.getUniqueKey(),
        }));

        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error('Error fetching images:', error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleImageClick = imageUrl => {
    this.setState({ showModal: true, modalImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImage: '' });
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.closeModal();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  loadMoreImages = () => {
    this.fetchImages();
  };

  render() {
    const { images, isLoading, showModal, modalImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onLoadMore={this.loadMoreImages} />
        )}
        {showModal && (
          <div className="overlay" onClick={this.handleOverlayClick}>
            <Modal onClose={this.closeModal} largeImageURL={modalImage} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
