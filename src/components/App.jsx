import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    showModal: false,
    modalImage: '',
    query: '',
    page: 1,
  };

  handleFormSubmit = query => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const apiKey = '40273804-3b8c2dbaae3f52338e7fd3d6d';
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
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
        {showModal && <Modal onClose={this.closeModal} image={modalImage} />}
      </div>
    );
  }
}

export default App;
