import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente FavoritePokemons', () => {
  test('A página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const NoFound = screen.getByRole('heading', {
      name: /page requested not found/i }, { level: 2 });
    expect(NoFound).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem;', () => {
    renderWithRouter(<NotFound />);
    const gifPoke = screen.getByRole('img');
    expect(gifPoke).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(gifPoke).toBeInTheDocument();
  });
});
