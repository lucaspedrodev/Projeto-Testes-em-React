import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente Pokedex ', () => {
  test('A página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const texto = screen.getByRole('heading', {
      name: /encountered pokémons/i }, { level: 2 });
    expect(texto).toBeInTheDocument();
  });

  test('é exibido o próximo pokémon quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const botao = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(botao).toBeInTheDocument();

    const pikachuu = screen.getByText(/Pikachu/i);
    expect(pikachuu).toBeInTheDocument();

    userEvent.click(botao);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();

    userEvent.click(botao);
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();

    userEvent.click(botao);
    const ekans = screen.getByText(/ekans/i);
    expect(ekans).toBeInTheDocument();

    userEvent.click(botao);
    const alakazam = screen.getByText(/Alakazam/i);
    expect(alakazam).toBeInTheDocument();

    userEvent.click(botao);
    const mew = screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();

    userEvent.click(botao);
    const rapidash = screen.getByText(/rapidash/i);
    expect(rapidash).toBeInTheDocument();

    userEvent.click(botao);
    const snorlax = screen.getByText(/Snorlax/i);
    expect(snorlax).toBeInTheDocument();

    userEvent.click(botao);
    const dragonair = screen.getByText(/Dragonair/i);
    expect(dragonair).toBeInTheDocument();

    userEvent.click(botao);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um pokémon por vez;', () => {
    renderWithRouter(<App />);
    const umPorVez = screen.getAllByTestId('pokemon-name');
    expect(umPorVez).toHaveLength(1);
  });

  test('Testa se paga o botão de tipo;', () => {
    renderWithRouter(<App />);

    const sete = 7;
    const tipo = screen.getAllByTestId('pokemon-type-button');
    const all = screen.getByRole('button', { name: /all/i });
    const botao = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(tipo[0]).toHaveTextContent(/electric/i);
    expect(tipo[1]).toHaveTextContent(/fire/i);
    expect(tipo[2]).toHaveTextContent(/bug/i);
    expect(tipo[3]).toHaveTextContent(/poison/i);
    expect(tipo[4]).toHaveTextContent(/psychic/i);
    expect(tipo[5]).toHaveTextContent(/normal/i);
    expect(tipo[6]).toHaveTextContent(/dragon/i);

    expect(tipo).toHaveLength(sete);
    userEvent.click(tipo[0]);
    expect(all).toBeInTheDocument();
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    expect(botao).toBeDisabled();

    userEvent.click(tipo[1]);
    expect(all).toBeInTheDocument();
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
    userEvent.click(botao);
    const rapidash = screen.getByText(/rapidash/i);
    expect(rapidash).toBeInTheDocument();

    userEvent.click(tipo[2]);
    expect(all).toBeInTheDocument();
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();
    expect(botao).toBeDisabled();

    userEvent.click(tipo[3]);
    expect(all).toBeInTheDocument();
    const ekans = screen.getByText(/ekans/i);
    expect(ekans).toBeInTheDocument();
    expect(botao).toBeDisabled();

    userEvent.click(tipo[4]);
    expect(all).toBeInTheDocument();
    const alakazam = screen.getByText(/alakazam/i);
    expect(alakazam).toBeInTheDocument();
    userEvent.click(botao);
    const mew = screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();

    userEvent.click(tipo[5]);
    expect(all).toBeInTheDocument();
    const snorlax = screen.getByText(/Snorlax/i);
    expect(snorlax).toBeInTheDocument();
    expect(botao).toBeDisabled();

    userEvent.click(tipo[6]);
    expect(all).toBeInTheDocument();
    const dragonair = screen.getByText(/Dragonair/i);
    expect(dragonair).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeDefined();

    const botao = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(botao).toBeInTheDocument();

    const pikachuu1 = screen.getByText(/Pikachu/i);
    expect(pikachuu1).toBeInTheDocument();

    userEvent.click(botao);
    const charmander1 = screen.getByText(/charmander/i);
    expect(charmander1).toBeInTheDocument();

    userEvent.click(botao);
    const caterpie1 = screen.getByText(/caterpie/i);
    expect(caterpie1).toBeInTheDocument();

    userEvent.click(botao);
    const ekans1 = screen.getByText(/ekans/i);
    expect(ekans1).toBeInTheDocument();

    userEvent.click(botao);
    const alakazam1 = screen.getByText(/Alakazam/i);
    expect(alakazam1).toBeInTheDocument();

    userEvent.click(botao);
    const mew1 = screen.getByText(/mew/i);
    expect(mew1).toBeInTheDocument();

    userEvent.click(botao);
    const rapidash1 = screen.getByText(/rapidash/i);
    expect(rapidash1).toBeInTheDocument();

    userEvent.click(botao);
    const snorlax1 = screen.getByText(/Snorlax/i);
    expect(snorlax1).toBeInTheDocument();

    userEvent.click(botao);
    const dragonair1 = screen.getByText(/Dragonair/i);
    expect(dragonair1).toBeInTheDocument();

    userEvent.click(all);

    const pikachuu = screen.getByText(/Pikachu/i);
    expect(pikachuu).toBeInTheDocument();

    userEvent.click(botao);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();

    userEvent.click(botao);
    const caterpie = screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();

    userEvent.click(botao);
    const ekans = screen.getByText(/ekans/i);
    expect(ekans).toBeInTheDocument();

    userEvent.click(botao);
    const alakazam = screen.getByText(/Alakazam/i);
    expect(alakazam).toBeInTheDocument();

    userEvent.click(botao);
    const mew = screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();

    userEvent.click(botao);
    const rapidash = screen.getByText(/rapidash/i);
    expect(rapidash).toBeInTheDocument();

    userEvent.click(botao);
    const snorlax = screen.getByText(/Snorlax/i);
    expect(snorlax).toBeInTheDocument();

    userEvent.click(botao);
    const dragonair = screen.getByText(/Dragonair/i);
    expect(dragonair).toBeInTheDocument();
  });
});
