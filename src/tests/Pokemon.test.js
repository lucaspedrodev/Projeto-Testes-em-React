import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente Pokedex ', () => {
  test('Teste o componente Pokemon.js', () => {
    renderWithRouter(<App />);
    const nome = screen.getByTestId(/pokemon-name/i);
    const tipo = screen.getAllByTestId(/pokemon-type/i);
    const weight = screen.getByTestId(/pokemon-weight/i);
    const pokeImg = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(nome).toBeInTheDocument();
    expect(tipo[0]).toHaveTextContent(/electric/i);
    expect(weight).toBeInTheDocument();
    expect(pokeImg).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokeImg).toBeInTheDocument();
  });

  test('Testa o link de navegação ', () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toHaveProperty('href', 'http://localhost/pokemons/25');
    userEvent.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const favPokeCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favPokeCheck);
    const star = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(star).toHaveProperty('src', 'http://localhost/star-icon.svg');
    expect(star).toBeInTheDocument();
  });
});
