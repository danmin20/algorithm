// 완주하지 못한 선수
function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 위장
function solution(clothes) {
  let obj = {};
  let answer = 1;
  clothes.forEach((cloth) => {
    obj[cloth[1]] = (obj[cloth[1]] || 1) + 1;
  });
  console.log(obj);
  for (let key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
}

// 베스트앨범
function solution(genres, plays) {
  const answer = [];

  let songs = genres.map((genre, idx) => {
    return {
      no: idx,
      genre: genre,
      play: plays[idx],
    };
  });

  let genrePlayCnt = [];
  songs.forEach((song) => {
    let thisGenre = genrePlayCnt.find((a) => a.genre === song.genre);
    if (thisGenre) {
      thisGenre.play += song.play;
    } else {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    }
  });
  songs.sort((a, b) => b.play - a.play);
  genrePlayCnt.sort((a, b) => b.play - a.play);

  genrePlayCnt.forEach((a) => {
    let len = 0;
    songs.forEach((song) => {
      if (a.genre === song.genre && len < 2) {
        len++;
        answer.push(song.no);
      }
    });
  });
  return answer;
}
