export const LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';

export const PROFILE_PICTURE =
  'https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp';

export const BACKGROUND_IMAGE =
  'https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_ACCESS_TOKEN,
  },
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w400';
