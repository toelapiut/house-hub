// export function addFlashMessage(message){
//   return {
//     type: ADD_FLASH_MESSAGE,
//     message
//   }
// }
import { ADD_FLASH_MESSAGE } from './types'
export const addMessage = (message) => {
    console.log('adding message:', message);
    return {
      type: ADD_FLASH_MESSAGE,
      message
    };
}
