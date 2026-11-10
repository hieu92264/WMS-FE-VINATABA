import { apiBaseUrl } from '@/app/providers/env.config'
import axios from 'axios'
import qs from 'qs'

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15_000, // 15 giây
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      skipNulls: true,
      format: 'RFC1738',
    })
  },
})
