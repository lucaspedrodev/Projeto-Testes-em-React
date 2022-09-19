import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente FavoritePokemons', () => {
  test('exibe mensagem No favorite pokemon found, caso não existam favoritos', () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(linkFavorite);
    const noFavorite = screen.getByText(/no favorite pokemon found/i);
    expect(noFavorite).toBeInTheDocument();
  });

  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checkBoxFav = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkBoxFav);
    const clickFavorites = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(clickFavorites);
    const testIDname = screen.getByTestId('pokemon-name');
    const testIDtype = screen.getByTestId('pokemon-type');
    const testIDweight = screen.getByTestId('pokemon-weight');
    expect(testIDname).toBeInTheDocument();
    expect(testIDtype).toBeInTheDocument();
    expect(testIDweight).toBeInTheDocument();
  });
});
