const AVATAR_URL = `https://avatars.dicebear.com/api/avataaars`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/c/c1/90_%28Ninety%29.wav`,
      genre: `blues`
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/8/8b/Himno_nacional_fineslandes.ogg`,
      genre: `jazz`
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/9/90/Sare_Jahan_Se_Acha_-_Music.ogg`,
      genre: `rock`
    }]
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [{
      picture: `${AVATAR_URL}/JohnSnow.svg`,
      artist: `John Snow`
    },
    {
      picture: `${AVATAR_URL}/JackDaniels.svg`,
      artist: `Jack Daniels`
    },
    {
      picture: `${AVATAR_URL}/JimBeam.svg`,
      artist: `Jim Beam`
    }]
  }
];
