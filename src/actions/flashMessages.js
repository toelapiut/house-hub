import { ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE } from './types'


export const addFlashMessage = (message) => {
    console.log('adding message:', message);
    return {
      type: ADD_FLASH_MESSAGE,
      message
    };
}

export const deleteFlashMessage = (id) => {
  console.log('delete message');
  return{
    type: DELETE_FLASH_MESSAGE,
    id
  }
}
