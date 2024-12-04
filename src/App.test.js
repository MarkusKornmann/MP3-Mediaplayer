import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('sollte die Audio-Elemente und Playlist korrekt rendern', () => {
    render(<App />);
    const audioPlayer = screen.getByRole('audio');
    const playlistItems = screen.getAllByRole('listitem');

    expect(audioPlayer).toBeInTheDocument();
    expect(playlistItems.length).toBe(10); // Anzahl der Tracks in der Playlist
});

test('sollte den ersten Track abspielen', () => {
    render(<App />);
    const audioPlayer = screen.getByRole('audio');
    const firstTrack = screen.getByText('Lotus 2');

    fireEvent.click(firstTrack);
    expect(audioPlayer.src).toContain('https://www.amigaremix.com/listen/3611/solarstriker_-_lotus_2_o.stelzer_remix_-_amigaremix_03611.mp3');
});

test('sollte den nächsten Track abspielen, wenn der aktuelle Track endet', () => {
    render(<App />);
    const audioPlayer = screen.getByRole('audio');
    const firstTrack = screen.getByText('Lotus 2');
    const secondTrack = screen.getByText('Spaceballs');

    fireEvent.click(firstTrack);
    fireEvent.ended(audioPlayer);

    expect(audioPlayer.src).toContain('https://www.amigaremix.com/listen/3612/gareth_wood_-_spaceballs_-_state_of_the_art_no_corruption_mix_-_amigaremix_03612.mp3');
});

/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/