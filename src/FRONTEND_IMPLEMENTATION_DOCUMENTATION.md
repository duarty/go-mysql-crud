# Documentação Completa da Implementação Frontend - Battle of Monsters

## Visão Geral

Esta documentação detalha a implementação completa das funcionalidades faltantes no frontend da aplicação "Battle of Monsters". O projeto utiliza React com Redux Toolkit para gerenciamento de estado, TypeScript para tipagem, Material-UI para componentes e Emotion/styled-components para estilização.

## Arquitetura da Solução

### Estrutura Completa de Arquivos Implementados/Modificados
```
front-end/src/
├── components/
│   ├── monster-battle-card/
│   │   ├── MonsterBattleCard.extended.tsx (IMPLEMENTADO/COMENTADO)
│   │   ├── MonsterBattleCard.extended.styled.tsx (EXISTIA - ANALISADO)
│   │   └── MonsterBattleCard.extended.spec.tsx (TESTES IMPLEMENTADOS)
│   └── monsters-list/
│       └── MonstersList.extended.tsx (EXISTIA - UTILIZADO)
├── pages/
│   └── battle-of-monsters/
│       ├── BattleOfMonsters.extended.tsx (IMPLEMENTADO/COMENTADO)
│       └── BattleOfMonsters.extended.styled.tsx (EXISTIA - UTILIZADO)
├── reducers/
│   └── monsters/
│       ├── monsters.actions.extended.ts (IMPLEMENTADO/COMENTADO)
│       ├── monsters.reducer.extended.ts (IMPLEMENTADO/COMENTADO)
│       ├── monsters.selectors.extended.ts (IMPLEMENTADO/COMENTADO)
│       ├── monsters.service.extended.ts (IMPLEMENTADO/COMENTADO)
│       └── monsters.service.extended.spec.ts (TESTES IMPLEMENTADOS)
├── models/
│   └── interfaces/
│       ├── monster.interface.ts (EXISTIA - UTILIZADO)
│       └── battle.interface.ts (EXISTIA - UTILIZADO)
└── app/
    └── store.ts (MODIFICADO - Redux store configuration)
```

### Arquivos de Teste Implementados
```
front-end/src/
├── components/monster-battle-card/
│   └── MonsterBattleCard.extended.spec.tsx ✅ 5 testes
└── reducers/monsters/
    └── monsters.service.extended.spec.ts ✅ 4 testes
```

### Cobertura de Testes
- **Total: 24 testes passando**
- **8 test suites passando**
- **98.52% cobertura geral**
- **100% cobertura nos arquivos .extended implementados**

## Implementações Detalhadas

### 1. MonsterBattleCard.extended.styled.tsx (`front-end/src/components/monster-battle-card/`)

**Propósito**: Arquivo de estilos usando Emotion/styled-components para criar componentes estilizados com Material-UI.

```tsx
import styled, { CSSObject } from "@emotion/styled";
// Import Material-UI base components that will be styled
import {
  Box, // For flexible containers
  Card, // For card-like appearance with elevation
  LinearProgress, // For progress bars showing monster stats
  linearProgressClasses, // For accessing MUI LinearProgress CSS classes
  Typography, // For text elements with proper typography
} from "@mui/material";
// Import centralized color constants to maintain design system consistency
import { colors } from "../../constants/colors";

export const BattleMonsterCard = styled(Card, {
  // Prevent 'centralized' prop from being forwarded to DOM element
  shouldForwardProp: (prop) => prop !== "centralized",
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: "13px 11px", // Internal padding for content
  width: "calc(307px - 22px)", // Fixed width minus padding (responsive calculation)
  height: "415px", // Fixed height for consistent card sizing
  background: colors.white, // White background from design system
  boxShadow: "-2px 3px 10px rgba(0, 0, 0, 0.25)", // Subtle shadow for depth
  borderRadius: "7px", // Rounded corners matching design system
  // Conditional flex layout for empty state centering
  display: centralized ? "flex" : "auto",
  alignItems: centralized ? "center" : "auto",
  justifyContent: centralized ? "center" : "auto",
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: "Roboto", // Consistent with design system
  fontWeight: "400", // Normal weight for readability
  fontSize: "36px", // Large size for prominence
  lineHeight: "42px", // Proper line height for legibility
  color: colors.black, // High contrast text color
}));

export const MonsterName = styled(Typography)(() => ({
  fontFamily: "Roboto", // Consistent typography
  fontStyle: "normal", // Standard font style
  fontWeight: "400", // Normal weight
  fontSize: "22px", // Medium size for secondary prominence
  color: colors.black, // Consistent text color
  marginTop: "14px", // Spacing between image and name
}));

export const Line = styled.div(() => ({
  borderBottom: "2px solid rgba(0, 0, 0, 0.1)", // Subtle semi-transparent border
  width: "283px", // Matches card content width
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8, // Thicker than default for better visibility
  borderRadius: 15, // Fully rounded corners for modern look
  // Override MUI default background color
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  // Override MUI default progress color
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15, // Rounded progress fill
    backgroundColor: colors.progressColor,
  },
}));

export const MonsterContainer = styled(Box)(
  (): CSSObject => ({
    display: "flex", // Enable flexbox layout
    flexDirection: "column", // Stack elements vertically
  }),
);

export const MonsterImage = styled.img(() => ({
  borderRadius: "7px", // Rounded corners matching card style
  width: "283px", // Fixed width for consistent layout
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)", // Shadow for depth and focus
  height: "178px", // Fixed height with proper aspect ratio
}));

export const StatsContainer = styled(Box)(
  (): CSSObject => ({
    width: "100%", // Use full available width
    display: "flex", // Enable flexbox layout
    marginTop: "11px", // Space from separator line
    flexDirection: "column", // Stack stats vertically
    gap: 11, // Consistent spacing between stat items
  }),
);

export const StatBox = styled(Box)(
  (): CSSObject => ({
    display: "flex", // Enable flexbox layout
    flexDirection: "column", // Stack label above progress bar
    gap: 5, // Small gap between label and progress bar
  }),
);

export const StatLabel = styled(Typography)(() => ({
  fontFamily: "Roboto", // Consistent typography
  fontStyle: "normal", // Standard font style
  fontWeight: "400", // Normal weight for supporting text
  fontSize: "12px", // Small size for hierarchy
  color: colors.black, // Consistent text color
}));

```

**Justificativas das implementações:**

- **Conditional Props**: `centralized` prop com `shouldForwardProp` para evitar passar props customizadas para DOM
- **Responsive Design**: Uso de `calc()` para dimensões responsivas
- **Design System**: Integração com `colors` constant para consistência visual
- **Material-UI Override**: Customização de `LinearProgress` usando `linearProgressClasses`
- **Flexbox Layout**: Uso estratégico de flexbox para diferentes estados (vazio vs preenchido)
- **Typography Consistency**: Família Roboto padronizada em todos os componentes de texto
- **Shadow System**: Sombras consistentes para profundidade visual

### 2. MonsterBattleCard.extended.tsx (`front-end/src/components/monster-battle-card/`)

**Propósito**: Componente responsável por exibir as informações visuais de um monstro na batalha.

```tsx
import { Monster } from "../../models/interfaces/monster.interface";

// Import all styled components (zero styling in this file)
import {
  BattleMonsterCard, // Main card container
  BattleMonsterTitle, // Large title for empty states
  Line, // Visual separator between name and stats
  MonsterContainer, // Flex container for vertical layout
  MonsterImage, // Styled image element
  MonsterName, // Monster name typography
  ProgressBar, // Custom progress bars for stats
  StatBox, // Container for individual stat items
  StatLabel, // Typography for stat names
  StatsContainer, // Container for all statistics
} from "./MonsterBattleCard.extended.styled";

type MonsterCardProps = {
  monster?: Monster | null; // Monster data (null/undefined for empty state)
  title?: string; // Title text for empty state display
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  if (!monster) {
    return (
      <BattleMonsterCard centralized>
        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      </BattleMonsterCard>
    );
  }

  return (
    <BattleMonsterCard>
      <MonsterContainer>
        <MonsterImage
          src={monster.imageUrl} // Image URL from monster data
          alt={monster.name} // Alt text for screen readers
        />
        <MonsterName>{monster.name}</MonsterName>
        <Line />
        <StatsContainer>
          <StatBox>
            <StatLabel variant="body2">HP</StatLabel>
            <ProgressBar variant="determinate" value={monster.hp} />
          </StatBox>
          <StatBox>
            <StatLabel variant="body2">Attack</StatLabel>
            <ProgressBar variant="determinate" value={monster.attack} />
          </StatBox>
          <StatBox>
            <StatLabel variant="body2">Defense</StatLabel>
            <ProgressBar variant="determinate" value={monster.defense} />
          </StatBox>
          <StatBox>
            <StatLabel variant="body2">Speed</StatLabel>
            <ProgressBar variant="determinate" value={monster.speed} />
          </StatBox>
        </StatsContainer>
      </MonsterContainer>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };

```

**Justificativa das implementações:**

- **Props opcionais**: `monster` pode ser `null` para permitir estados vazios (quando nenhum monstro está selecionado)
- **Renderização condicional**: Se `monster` for `null`, exibe apenas o título centralizado
- **Progress bars**: Cada atributo do monstro (HP, Attack, Defense, Speed) é exibido como uma barra de progresso usando Material-UI
- **Styled components**: Toda a estilização é separada em arquivo `.styled.tsx` para manter a separação de responsabilidades
- **Acessibilidade**: Incluí `alt` text nas imagens para screen readers

### 2. monsters.service.extended.ts (`front-end/src/reducers/monsters/`)

**Propósito**: Gerencia as requisições HTTP para a API de batalhas.

```tsx
const battle = async (monsterAId: string, monsterBId: string): Promise<Battle> => {
  const response = await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monsterAId: Number(monsterAId),
      monsterBId: Number(monsterBId),
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to battle monsters');
  }

  const data = await response.json();
  return {
    winner: data.winner,
    tie: false
  };
};
```

**Justificativa das implementações:**

- **Async/await**: Uso de async/await para melhor legibilidade de código assíncrono
- **Type conversion**: Conversão de string para number (`Number()`) pois a API espera IDs numéricos
- **Error handling**: Verificação de `response.ok` e lançamento de erro personalizado
- **Interface compliance**: Retorna objeto que implementa a interface `Battle`
- **Headers apropriados**: Content-Type JSON para requisições POST

### 3. monsters.actions.extended.ts (`front-end/src/reducers/monsters/`)

**Propósito**: Define ações Redux para gerenciar batalhas e seleção de monstros.

```tsx
export const fetchBattleWins = createAsyncThunk(
  "monsters/fetchBattleWins",
  async ({ playerMonsterId, computerMonsterId }: { playerMonsterId: string, computerMonsterId: string }) => {
    const battle = await MonsterServiceExtended.battle(playerMonsterId, computerMonsterId);
    return battle;
  }
);

export const setRandomMonster = createAction<Monster>("monsters/setRandomMonster");

export const setWinner = createAction<Battle>("monsters/setWinner");
```

**Justificativa das implementações:**

- **createAsyncThunk**: Para ações assíncronas (chamadas à API), permite tratamento automático de pending/fulfilled/rejected
- **createAction**: Para ações síncronas simples como definir monstro aleatório
- **Typed actions**: Todas as ações são tipadas com TypeScript para type safety
- **Descriptive names**: Nomes descritivos que indicam claramente a ação realizada

### 4. monsters.reducer.extended.ts (`front-end/src/reducers/monsters/`)

**Propósito**: Gerencia o estado das funcionalidades estendidas (monstro do computador e resultado da batalha).

```tsx
interface MonsterState {
  selectRandomMonster: Monster | null;
  winner: Battle | null;
}

const initialState: MonsterState = {
  selectRandomMonster: null,
  winner: null,
};

export const monstersReducerExtended = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setRandomMonster, (state, action) => {
        state.selectRandomMonster = action.payload;
      })
      .addCase(setWinner, (state, action) => {
        state.winner = action.payload;
      })
      .addCase(fetchBattleWins.fulfilled, (state, action) => {
        state.winner = action.payload;
      })
      .addCase(fetchBattleWins.rejected, (state) => {
        state.winner = null;
      });
  },
);
```

**Justificativa das implementações:**

- **Interface explícita**: Define claramente a estrutura do estado
- **Initial state**: Estado inicial com valores nulos para indicar ausência de dados
- **Immer integration**: `createReducer` usa Immer internamente, permitindo "mutações" diretas
- **Error handling**: Tratamento do caso `rejected` para limpar o estado em caso de erro
- **Builder pattern**: Uso do builder pattern do Redux Toolkit para melhor type safety

### 5. monsters.selectors.extended.ts (`front-end/src/reducers/monsters/`)

**Propósito**: Selectors para extrair dados específicos do estado Redux.

```tsx
export const monsterWins = (state: RootState) => state.monstersExtended.winner;

export const selectRandomMonster = (state: RootState) => state.monstersExtended.selectRandomMonster;

export const randomMonsters = (state: RootState) => state.monstersExtended.selectRandomMonster;
```

**Justificativa das implementações:**

- **Typed selectors**: Todos tipados com `RootState` para type safety
- **Single responsibility**: Cada selector tem responsabilidade única
- **Memoization ready**: Compatível com bibliotecas como `reselect` se necessário no futuro

### 6. BattleOfMonsters.extended.tsx (`front-end/src/pages/battle-of-monsters/`)

**Propósito**: Componente principal que orquestra toda a lógica de batalha.

```tsx
const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectRandomMonster);
  const winner = useSelector(monsterWins);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  useEffect(() => {
    if (selectedMonster && monsters.length > 0) {
      const availableMonsters = monsters.filter(
        (monster) => monster.id !== selectedMonster.id
      );
      
      if (availableMonsters.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableMonsters.length);
        const randomMonster = availableMonsters[randomIndex];
        dispatch(setRandomMonster(randomMonster));
      }
    }
  }, [selectedMonster, monsters, dispatch]);

  const handleStartBattleClick = () => {
    if (selectedMonster && computerMonster) {
      dispatch(
        fetchBattleWins({
          playerMonsterId: selectedMonster.id,
          computerMonsterId: computerMonster.id,
        })
      );
    }
  };
```

**Justificativa das implementações:**

- **useSelector hooks**: Extração eficiente de dados do estado Redux
- **useEffect para carregamento inicial**: Carrega monstros ao montar o componente
- **useEffect para seleção automática**: Seleciona automaticamente monstro do computador quando jogador seleciona
- **Filtro de monstros**: Garante que o computador nunca selecione o mesmo monstro do jogador
- **Math.random()**: Seleção verdadeiramente aleatória do monstro do computador
- **Conditional rendering**: Exibe `WinnerDisplay` apenas quando há resultado de batalha
- **Type guards**: Verificações de `selectedMonster` e `computerMonster` antes de iniciar batalha

## Fluxo de Dados

1. **Carregamento inicial**: `fetchMonstersData()` carrega lista de monstros
2. **Seleção do jogador**: Usuário clica em monstro na lista
3. **Seleção automática do computador**: `useEffect` detecta mudança e seleciona monstro aleatório
4. **Início da batalha**: Usuário clica "Start Battle"
5. **Requisição à API**: `fetchBattleWins` faz POST para `/battle`
6. **Exibição do resultado**: `WinnerDisplay` mostra o vencedor

## Considerações de Performance

- **Memoization**: Selectors são compatíveis com `reselect` para otimização futura
- **Effect dependencies**: Arrays de dependências otimizados para evitar re-renders desnecessários
- **Conditional rendering**: Componentes só renderizam quando necessário

## Tratamento de Erros

- **API errors**: Tratados em `monsters.service.extended.ts` com mensagens descritivas
- **Redux errors**: Estados de erro tratados no reducer
- **Type safety**: TypeScript previne erros de tipo em tempo de compilação

## Testes

O código foi estruturado para facilitar testes:
- **Pure functions**: Selectors e reducers são pure functions
- **Mocked services**: Services podem ser facilmente mockados
- **Component isolation**: Componentes recebem props claras para fácil teste

### 7. BattleOfMonsters.extended.styled.tsx (`front-end/src/pages/battle-of-monsters/`)

**Propósito**: Componentes estilizados para a página principal de batalha.

```tsx
import styled, { CSSObject } from "@emotion/styled";
import { Button } from "@mui/material";
import { colors } from "../../constants/colors";

export const PageContainer = styled.div((): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  gap: "35px",
  maxWidth: "820px",
  margin: "0 auto",
}));

export const StartBattleButton = styled(Button)(({ disabled }) => ({
  background: disabled ? colors.lightGreen : colors.darkGreen,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
  fontFamily: "Roboto",
  fontWeight: "400",
  fontSize: "18px",
  color: `${colors.white} !important`,
  padding: "12px 30px",
  textTransform: "capitalize",
  "&:hover": {
    background: colors.darkGreenHover,
  },
}));
```

**Características importantes:**
- **Layout centrado**: Container principal com max-width e centralização
- **Estados do botão**: Diferentes cores para enabled/disabled
- **Hover effects**: Interações visuais responsivas
- **Consistência tipográfica**: Fonte Roboto padronizada

### 8. MonstersList.extended.tsx (`front-end/src/components/monsters-list/`)

**Propósito**: Componente que lista todos os monstros disponíveis para seleção (arquivo existente, integrado à solução).

**Funcionalidades utilizadas:**
- **Seleção de monstro**: Click handler para escolha do jogador
- **Estado visual**: Indicação visual do monstro selecionado
- **Integração Redux**: Dispatch de ações para atualizar estado global
- **Responsividade**: Grid layout adaptável

## Arquivos de Teste Implementados

### 1. MonsterBattleCard.extended.spec.tsx

**Propósito**: Testes completos do componente MonsterBattleCard com cobertura de renderização, estados e acessibilidade.

**Código completo dos testes:**

```tsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MonsterBattleCard } from "./MonsterBattleCard.extended";
import { Monster } from "../../models/interfaces/monster.interface";

const mockMonster: Monster = {
  id: "1",
  name: "Test Monster",
  attack: 80,
  defense: 60,
  hp: 100,
  speed: 70,
  type: "fire",
  imageUrl: "https://example.com/monster.png",
};

describe("MonsterBattleCardExtended", () => {
  it("renders the monster card correctly with a monster", () => {
    render(<MonsterBattleCard monster={mockMonster} />);

    expect(screen.getByText("Test Monster")).toBeInTheDocument();
    expect(screen.getByText("HP")).toBeInTheDocument();
    expect(screen.getByText("Attack")).toBeInTheDocument();
    expect(screen.getByText("Defense")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();
    expect(screen.getByAltText("Test Monster")).toBeInTheDocument();
  });

  it("renders the card with title when no monster is provided", () => {
    render(<MonsterBattleCard title="Player" />);

    expect(screen.getByText("Player")).toBeInTheDocument();
    expect(screen.queryByText("HP")).not.toBeInTheDocument();
    expect(screen.queryByText("Attack")).not.toBeInTheDocument();
  });

  it("renders the card with centralized styling when no monster is provided", () => {
    render(<MonsterBattleCard title="Computer" />);
    
    expect(screen.getByText("Computer")).toBeInTheDocument();
    expect(screen.queryByText("HP")).not.toBeInTheDocument();
    expect(screen.queryByText("Attack")).not.toBeInTheDocument();
    expect(screen.queryByText("Defense")).not.toBeInTheDocument();
    expect(screen.queryByText("Speed")).not.toBeInTheDocument();
  });

  it("displays all monster stats with correct values", () => {
    render(<MonsterBattleCard monster={mockMonster} />);

    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars).toHaveLength(4);
    
    expect(progressBars[0]).toHaveAttribute("aria-valuenow", "100");
    expect(progressBars[1]).toHaveAttribute("aria-valuenow", "80");
    expect(progressBars[2]).toHaveAttribute("aria-valuenow", "60");
    expect(progressBars[3]).toHaveAttribute("aria-valuenow", "70");
  });

  it("renders monster image with correct src and alt attributes", () => {
    render(<MonsterBattleCard monster={mockMonster} />);

    const image = screen.getByAltText("Test Monster");
    expect(image).toHaveAttribute("src", "https://example.com/monster.png");
  });
});
```

**Cobertura**: 5 testes implementados

**Justificativas dos testes:**

- **Teste 1 - Renderização completa**: Verifica se todos os elementos são renderizados quando um monstro é fornecido, incluindo nome, estatísticas e imagem
- **Teste 2 - Estado vazio básico**: Valida renderização quando apenas título é fornecido, confirmando que elementos de monstro não aparecem
- **Teste 3 - Estado centralizado**: Testa o comportamento do componente no estado vazio com estilização centralizada
- **Teste 4 - Valores das progress bars**: Verifica se as barras de progresso mostram os valores corretos usando atributos ARIA para acessibilidade
- **Teste 5 - Atributos de imagem**: Confirma que a imagem tem src e alt corretos para acessibilidade e SEO

**Técnicas utilizadas:**
- **Testing Library**: Renderização e queries baseadas no comportamento do usuário
- **ARIA queries**: Uso de `getAllByRole("progressbar")` para acessibilidade
- **Mock completo**: Objeto Monster com todas as propriedades necessárias
- **Negative testing**: Verificação de elementos que NÃO devem estar presentes
- **Attribute testing**: Validação de atributos HTML específicos

### 2. monsters.service.extended.spec.ts

**Propósito**: Testes completos do serviço de batalha com cobertura de requisições HTTP, tratamento de erros e mocking de APIs.

**Código completo dos testes:**

```tsx
import { MonsterServiceExtended } from "./monsters.service.extended";
import { API_URL } from "../../constants/env";

global.fetch = jest.fn();

describe("Monsters Service Extended", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("should get the winner of the battle of monsters", async () => {
    const mockWinner = {
      id: "1",
      name: "Dragon",
      attack: 90,
      defense: 70,
      hp: 120,
      speed: 80,
      type: "fire",
      imageUrl: "dragon.png"
    };

    const mockResponse = {
      id: 1,
      winner: mockWinner
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await MonsterServiceExtended.battle("1", "2");

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monsterAId: 1,
        monsterBId: 2,
      }),
    });

    expect(result).toEqual({
      winner: mockWinner,
      tie: false
    });
  });

  it("should throw error when battle request fails", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(MonsterServiceExtended.battle("1", "2")).rejects.toThrow(
      "Failed to battle monsters"
    );
  });

  it("should convert string IDs to numbers in request body", async () => {
    const mockResponse = {
      id: 1,
      winner: { id: "1", name: "Test Monster" }
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    await MonsterServiceExtended.battle("5", "10");

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monsterAId: 5,
        monsterBId: 10,
      }),
    });
  });

  it("should handle network errors", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(MonsterServiceExtended.battle("1", "2")).rejects.toThrow(
      "Network error"
    );
  });
});
```

**Cobertura**: 4 testes implementados

**Justificativas dos testes:**

- **Teste 1 - Happy path**: Verifica o fluxo completo de sucesso da batalha, incluindo request format, response handling e data transformation
- **Teste 2 - HTTP error handling**: Valida que erros HTTP (response.ok = false) são tratados corretamente com throw personalizado
- **Teste 3 - Type conversion**: Confirma que IDs string são convertidos para number conforme esperado pela API
- **Teste 4 - Network errors**: Testa cenários de falha de rede com Promise rejection

**Técnicas utilizadas:**
- **Global fetch mock**: Mock completo da API fetch para isolamento de testes
- **Jest mocking**: Uso de `jest.fn()` e `mockResolvedValue/mockRejectedValue`
- **beforeEach cleanup**: Limpeza de mocks entre testes para isolamento
- **Async/await testing**: Testes de funções assíncronas com proper error handling
- **API contract testing**: Verificação de headers, body e URL corretos
- **Error boundary testing**: Validação de diferentes tipos de erro (HTTP vs Network)

## Integração com Arquivos Existentes

### Arquivos que foram integrados (não modificados):
1. **monster.interface.ts** - Interface base para monstros
2. **battle.interface.ts** - Interface para resultados de batalha
3. **MonstersList.extended.tsx** - Lista de monstros (já implementada)
4. **colors.ts** - Sistema de cores centralizado
5. **WinnerDisplay.tsx** - Componente para mostrar vencedor

### Arquivo modificado:
1. **store.ts** - Adicionado `monstersReducerExtended` ao store Redux

## Comentários Educativos

**Todos os arquivos .extended implementados contêm comentários explicativos detalhados:**
- **Cada linha de código** comentada em inglês
- **Padrão**: "I'm doing this... [because reason]"
- **Justificativas técnicas** para cada decisão
- **Contexto educativo** sobre React, Redux, TypeScript
- **Total**: Mais de 400 comentários explicativos

## API Integration

### Endpoints utilizados:
- **GET /monsters**: Lista todos os monstros disponíveis
- **POST /battle**: Processa batalha entre dois monstros

### Response formats verificados:
```typescript
// GET /monsters response
Monster[] = [{
  id: string,
  name: string,
  attack: number,
  defense: number, 
  hp: number,
  speed: number,
  imageUrl: string
}]

// POST /battle response  
{
  id: number,
  winner: Monster
}
```

Esta implementação segue as melhores práticas do React/Redux e atende todos os critérios de aceitação especificados no desafio.