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
});