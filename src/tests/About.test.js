import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente About ', () => {
  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    renderWithRouter(<About />);
    const info1 = screen.getByText(
      /this application simulates a pokédex, a digital/i,
    );
    const info2 = screen.getByText(
      /One can filter Pokémons by type, and see more/i,
    );

    expect(info1).toBeInTheDocument();
    expect(info2).toBeInTheDocument();
  });

  test('Teste se a página contém as informações sobre a Pokédex;', () => {
    renderWithRouter(<About />);
    const info1 = screen.getByRole('heading', {
      name: /about pokédex/i,
    }, { level: 2 });

    expect(info1).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    renderWithRouter(<About />);
    const sobrePoke = screen.getAllByText(/Pokémons/i);
    console.log(sobrePoke);
    expect(sobrePoke).toHaveLength(2);
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    renderWithRouter(<About />);
    const fotoPoke = screen.getByRole('img');
    expect(fotoPoke).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(fotoPoke).toBeInTheDocument();
  });
});
