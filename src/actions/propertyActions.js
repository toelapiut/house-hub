import axios from "axios"
import {SET_OVERALL_PROPERTIES} from './types';

export function overallProperties(payload) {
  return {type: SET_OVERALL_PROPERTIES, payload}
}

export function eachProperty(payload) {
    return {type: SET_OVERALL_PROPERTIES, payload}
  }