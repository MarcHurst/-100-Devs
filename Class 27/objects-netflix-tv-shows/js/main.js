//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class FlixShow {
    constructor(name, genre, likePercent, episodeList) {
        this.name = name;
        this.genre = genre;
        this.likePercent = likePercent;
        this.episodeList = episodeList;
    }
    play = _ => console.log(`Now playing ${this.name}`);
    listEpisodes = _ => this.episodeList.join(', ');
    numberOfEpisodes = _ => this.episodeList.length;
    getGenre = _ => this.genre;
}

let newShow = new FlixShow("Wobble Cat", "Cats", 100, ['episode 1', 'episode 2', 'episode 3'])
console.log(newShow)

console.log(newShow.listEpisodes())