import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contador from ".";

describe("Testes no componente contador", () => {
    it("deve começar com zero", () => {
        // Carregar o componente em tela
        render(<Contador />);

        // Recupera o elemento que contém o texto zero
        const tituloDoContador = screen.getByText("0");

        // Espera que o elemento esteja presente no documento
        expect(tituloDoContador).toBeInTheDocument();
    });

    it("deve ter o botão incrementar", () => {
        render(<Contador />);

        // Recupera o botão pela regra: o botão que contém o nome incrementar
        const botaoIncrementar = screen.getByRole("button", {
            name: /incrementar/i,
        });

        expect(botaoIncrementar).toHaveClass("button--increment");
    });

    it("deve ter o botão decremetar", () => {
        render(<Contador />);

        // Recupera o botão pela regra: o botão que contém o nome incrementar
        const botaoIncrementar = screen.getByRole("button", {
            name: /decrementar/i,
        });

        expect(botaoIncrementar).toHaveClass("button--decrement");
    });

    it("deve surigir na tela o 1 quando clicar no botão incrementar", () => {
        render(<Contador />);

        // Recupera o botão pela regra: o botão que contém o nome incrementar
        const botaoIncrementar = screen.getByRole("button", {
            name: /incrementar/i,
        });

        // Espero que não tenha nenhum elemento com texto 1 na tela
        expect(screen.queryByText("1")).toBeNull();

        // Ação de clicar no botão incrementar
        userEvent.click(botaoIncrementar);

        // Recupera o elemento que aparece como contador na tela
        const textoContador = screen.getByText("1");

        // Espero que esse elemento esteja aparecendo
        expect(textoContador).toBeInTheDocument();

        // Espero que esse elemento tenha o texto 1
        expect(textoContador.textContent).toEqual("1");

        // Clicando novamento no botão
        userEvent.click(botaoIncrementar);

        // Espero que o texto tenha o número 2
        expect(textoContador.textContent).toEqual("2");
    });

    it("deve surigir na tela o -1 quando clicar no botão decrementar", () => {
        render(<Contador />);

        const botaoDecrementar = screen.getByRole("button", {
            name: /decrementar/i,
        });

        expect(screen.queryByText("-1")).toBeNull();

        userEvent.click(botaoDecrementar);

        const textoContador = screen.getByText("-1");

        expect(textoContador).toBeInTheDocument();

        expect(textoContador.textContent).toEqual("-1");

        userEvent.click(botaoDecrementar);

        expect(textoContador.textContent).toEqual("-2");
    });

});