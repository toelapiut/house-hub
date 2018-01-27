import axios from "axios"
import {SET_OVERALL_PROPERTIES} from './types';

export function overallProperties(payload) {
  console.log('====================================');
  console.log("property.action.js",payload);
  console.log('====================================');
  return {type: SET_OVERALL_PROPERTIES, payload}
}

export function eachProperty(payload) {
    return {type: SET_OVERALL_PROPERTIES, payload}
  }