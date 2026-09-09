# 🗳️ Sistema de Votação - Urna Eletrônica (CMP2304)

Repositório desenvolvido como avaliação prática da disciplina de **Tecnologia de Construção de Software (PUC Goiás)**, com foco estrito na aplicação correta do versionamento de código utilizando **Git**, **GitHub** e a metodologia **GitFlow**.

---

## 🛠️ Tecnologias Utilizadas

* **Front-end:** React, TypeScript, Vite
* **Estilização:** CSS Customizado (Layout inspirado na Urna Eletrônica Brasileira)
* **Controle de Versão:** Git, GitFlow, GitHub CLI / Remotes

---

## 📋 Regras de Negócio e Funcionalidades

O sistema simula o comportamento operacional básico de uma urna eletrônica:
1. **Teclado Numérico Interativo:** Permite a digitação dos números dos candidatos diretamente na tela.
2. **Mapeamento de Candidatos:**
   * `1` ➔ Candidato A
   * `2` ➔ Candidato B
   * `3` ➔ Candidato C
3. **Ações de Voto:**
   * **CORRIGE:** Limpa o número digitado na tela.
   * **CONFIRMA:** Computa o voto para o candidato selecionado, reproduz o áudio oficial clássico (com ajuste de volume otimizado e corte de latência inicial), exibe o nome do candidato votado por 2 segundos e transiciona para a tela de **"FIM"**.
4. **Reinício de Ciclo:** Ao pressionar qualquer tecla numérica após a tela de "FIM", o sistema limpa o display automaticamente para o próximo eleitor.

---

## Fluxo de Desenvolvimento (GitFlow)

O histórico do projeto foi estruturado rigorosamente seguindo o ciclo de vida do GitFlow:
* **`main`:** Branch de produção contendo as versões estáveis tagueadas (`v1.0.0`) e correções emergenciais via hotfix.
* **`develop`:** Branch de integração contínua para unificação das features desenvolvidas.
* **`feature/*`:** Ramos dedicados à implementação modular da lógica da urna e layout.
* **`release/*`:** Ramos de homologação e empacotamento da versão inicial com o painel de resultados parciais.
* **`hotfix/*`:** Ramos voltados para correções pontuais em produção (ajustes de feedback textual e otimização do arquivo de áudio).

---

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Pedro-AugustoDEV/sistemadevotacao.git](https://github.com/Pedro-AugustoDEV/sistemadevotacao.git)
2. Entre na pasta do projeto: cd sistemadevotacao

3. Instale as dependências: npm install

4. Inicie o servidor de desenvolvimento:  npm run dev
   
