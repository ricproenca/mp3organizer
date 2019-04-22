import * as mm from "music-metadata";

async function parseFiles(audioFiles) {
  for (const audioFile of audioFiles) {
    // await will ensure the metadata parsing is completed before we move on to the next file
    const metadata = await mm.parseFile(audioFile);
    // Do great things with the metadata
    console.log(metadata.common.grouping);
    console.log(metadata.common.title);
    console.log(metadata.common.album);
    console.log(metadata.common.genre);
    console.log(metadata.common.year);
    console.log(metadata.common.artists);
    console.log(metadata.common.artist);
    //console.log(metadata.common);
  }
}

parseFiles(["./testfiles/15 Sheryl Crow - All I Wanna Do.mp3"]);
