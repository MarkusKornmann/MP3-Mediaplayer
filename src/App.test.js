import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('überprüfe, ob die Titel noch unverändert sind:', () => {
    const expectedTitles = [
        "Lotus 2",
        "Spaceballs",
        "Turrican2",
        "Apidya",
        "Giana Sisters",
        "Monkey Island",
        "Wing Commander",
        "Speedball2",
        "Crystal Hammer",
        "Kid Chaos"
       ];

    render(<App />);
    const playlistItems = screen.getAllByRole('listitem');

    playlistItems.forEach((item, index) => {
        expect(item.textContent).toBe(expectedTitles[index]);
    });
});
