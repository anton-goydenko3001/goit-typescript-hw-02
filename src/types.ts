export interface Urls {
  small: string;
  regular?: string;
}

export interface Image {
  id: string;
  urls: Urls;
  alt_description: string;
}

export interface FetchImagesResponse {
  total_pages: number;
  results: Image[];
}

export interface SearchBarValues {
  search: string;
}