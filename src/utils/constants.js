export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const userAvatar =
  "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const MOVIE_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTc0NTQ2ZjVhNjJmM2NlYjc1NjBhYmJhMDQwZjc0ZiIsIm5iZiI6MTczODc4MDEzNi41ODIsInN1YiI6IjY3YTNhZGU4MmY0NGY4MmFkMzJmYjVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ftqbEAfg69GBqLtFLBjL1ufG6cDFhA0GBr6uYzuLL_0",
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", value: "English" },
  { identifier: "hindi", value: "Hindi" },
  { identifier: "spanish", value: "Spanish" },
];

export const OPENAPI_KEY = process.env.REACT_APP_OPENAPI_KEY;
