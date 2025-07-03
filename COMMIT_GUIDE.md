<p align="left">
  <img src="./src/assets/images/logo-dark.svg" alt="Logo | Code Begin" width="180">
</p>


# Guia oficial de commits — Comunidade Code Begin

Este documento define o padrão de mensagens de commit a serem utilizadas no repositório da **Code Begin**. Ter um padrão claro e bem definido ajuda a manter a organização, facilita o entendimento do histórico do projeto e torna a colaboração mais profissional.

## Estrutura da mensagem

Cada commit deve seguir a seguinte estrutura:

```
tipo(escopo): descrição breve
```

- `tipo`: define a categoria da mudança (ex: `feat`, `fix`, `docs`, etc.).
- `escopo`: opcional, indica a parte do projeto afetada (ex: `login`, `navbar`, `api`, etc.).
- `descrição breve`: explica de forma clara e direta o que foi feito (preferencialmente com até 50 caracteres).

### Tipos permitidos

| Tipo      | Uso recomendado                                     |
|-----------|-----------------------------------------------------|
| `feat`    | Adição de nova funcionalidade ao projeto            |
| `fix`     | Correção de bugs ou falhas                          |
| `docs`    | Alterações na documentação (README, comentários...) |
| `style`   | Mudanças visuais ou de formatação (sem afetar lógica) |
| `refactor`| Melhorias internas no código sem alterar comportamento |
| `test`    | Adição ou modificação de testes                     |
| `chore`   | Tarefas de manutenção (ex: atualização de deps, configs) |

## Exemplos práticos

```
feat(login): implementar autenticação por e-mail
fix(navbar): corrigir erro na responsividade
docs(README): atualizar instruções de contribuição
style(form): ajustar espaçamento entre campos
refactor(api): reorganizar lógica de requisições
test(button): adicionar testes de comportamento
chore(deps): atualizar bibliotecas do projeto
```

## Boas práticas

- Escreva em **português claro**, na **forma imperativa e no tempo presente**.  
  Exemplo correto: `adicionar`, `corrigir`, `ajustar`.  
- Não use ponto final na descrição.
- A primeira letra da descrição deve ser **minúscula**, exceto em nomes próprios.
- Mantenha a descrição o mais **curta e objetiva** possível (idealmente até 50 caracteres).
- Evite mensagens genéricas como `update`, `mudanças`, `ajustes`, etc.

## Por que isso importa?

Seguir um padrão de commits:

- Garante um histórico de alterações claro e consistente.
- Facilita a navegação e revisão do código.
- Melhora a colaboração entre desenvolvedores.
- Permite geração de changelogs automáticos no futuro.

## Considerações finais

Todos os membros da comunidade **Code Begin** devem seguir este padrão ao realizar commits no repositório oficial. Nosso objetivo é manter o projeto organizado, acessível e com alta qualidade desde sua base.
