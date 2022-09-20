import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente PokemonDetails', () => {
  test('Teste se as informações detalhadas são mostradas na tela', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const details = screen.getByRole('heading', { name: /pikachu details/i });
    expect(details).toBeInTheDocument();
    expect(moreDetails).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', {
      name: /summary/i }, { level: 2 });
    expect(summary).toBeInTheDocument();

    const resume = screen.getByText(/this intelligent pokémon roasts hard berries with/i);
    expect(resume).toBeInTheDocument();
  });

  test('Teste se existeuma seção com as localizações do pokémon:', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const location = screen.getByRole('heading', {
      name: /game locations of pikachu/i }, { level: 2 });
    expect(location).toBeInTheDocument();

    const loc1 = screen.getByText(/kanto viridian forest/i);
    const loc2 = screen.getByText(/Kanto Power Plant/i);
    expect(loc1).toBeInTheDocument();
    expect(loc2).toBeInTheDocument();
    const img1 = screen.getAllByAltText(/pikachu location/i);
    expect(img1[0]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(img1[1]).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Teste se pode favoritar um pokémon através da página de detalhes:', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const favBtn = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(favBtn).toBeInTheDocument();
    userEvent.click(favBtn);

    const fav = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(fav).toBeInTheDocument();
    userEvent.click(favBtn);
    expect(fav).not.toBeInTheDocument();
  });
});
