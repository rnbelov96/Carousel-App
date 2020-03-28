import IMAGETOGGLING from '../actions/actionsTypes';

const initialState = {
  currentImage: 0,
  images: [
    {
      title: 'China',
      url: 'https://www.graycell.ru/picture/big/kunmin2.jpg',
    },
    {
      title: 'Japan',
      url: 'https://i1.sndcdn.com/artworks-000121306028-f66izh-t500x500.jpg',
    },
    {
      title: 'Russia',
      url: 'https://i1.sndcdn.com/artworks-000102768957-h4o3s8-t500x500.jpg',
    },
    {
      title: 'America',
      url: 'https://i1.sndcdn.com/artworks-000046786273-hj4vwd-t500x500.jpg',
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IMAGETOGGLING:
      return {
        ...state,
        currentImage: action.payload,
      };

    default:
      return state;
  }
}
