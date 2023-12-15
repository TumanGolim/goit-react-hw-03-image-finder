import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

const API_KEY = '40273804-3b8c2dbaae3f52338e7fd3d6d';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      images: [],
      page: 1,
      isLoading: false,
      selectedImage: null,
    };
  }

  fetchData = async () => {
    const { query, page, isLoading } = this.state;

    if (isLoading) {
      return;
    }

    try {
      this.setState({ isLoading: true });

      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const newImages = response.data.hits;

      if (page === 1) {
        this.setState({ images: newImages });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
        }));
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    const { query } = this.state;
    if (query) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.fetchData();
    }
  }

  handleSearch = newQuery => {
    this.setState(prevState => {
      if (newQuery.trim() !== prevState.query.trim()) {
        return {
          query: newQuery,
          page: 1,
          images: [],
        };
      }

      return null;
    }, this.fetchData);
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {images.length > 0 && <Button onClick={this.loadMore} />}
        {isLoading && <Loader />}
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
