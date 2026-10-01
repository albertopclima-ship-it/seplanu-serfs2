import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import google.generativeai as genai

# Configuração da página
st.set_page_config(page_title="Dashboard de Mobilidade", layout="wide")
st.title("📊 Pesquisa de Mobilidade Urbana - Faci Wyden / SEPLANU")

# Conectando o "Cérebro" (Gemini) usando a chave escondida com segurança
try:
    genai.configure(api_key=st.secrets["GEMINI_API_KEY"])
    model = genai.GenerativeModel('gemini-1.5-flash')
except:
    st.warning("⚠️ Chave de API não configurada. O chat de IA está desativado, mas os gráficos funcionarão.")

# Lendo os dados
@st.cache_data
def carregar_dados():
    return pd.read_csv("Base_de_Dados.csv")

df = carregar_dados()

# Criando abas no site
aba1, aba2 = st.tabs(["📈 Gráficos e Dados", "🤖 Chat Analista (IA)"])

with aba1:
    st.subheader("Perfil dos Usuários nas 4 Vias")
    
    # Preparando dados para os gráficos
    df_perfil = df[df['ID_da_Pergunta'] == 1].groupby('Opcao_de_Resposta')['Quantidade_de_Votos'].sum().reset_index()
    ordem_perfil = ['COMPRADOR', 'FUNCIONÁRIO', 'LOJISTA', 'AMBULANTE', 'PASSANDO']
    df_perfil['Opcao_de_Resposta'] = pd.Categorical(df_perfil['Opcao_de_Resposta'], categories=ordem_perfil, ordered=True)
    df_perfil = df_perfil.sort_values('Opcao_de_Resposta')

    df_idade = df[df['ID_da_Pergunta'] == 2].groupby('Opcao_de_Resposta')['Quantidade_de_Votos'].sum().reset_index()
    ordem_idade = ['ATÉ 17', '18 A 24', '25 A 34', '35 A 44', '45 A 59', '60 OU MAIS']
    df_idade['Opcao_de_Resposta'] = pd.Categorical(df_idade['Opcao_de_Resposta'], categories=ordem_idade, ordered=True)
    df_idade = df_idade.sort_values('Opcao_de_Resposta')

    # Desenhando os gráficos lado a lado
    col1, col2 = st.columns(2)
    
    with col1:
        fig1, ax1 = plt.subplots(figsize=(8, 5))
        sns.barplot(x='Quantidade_de_Votos', y='Opcao_de_Resposta', data=df_perfil, palette='Blues_r', ax=ax1)
        ax1.set_title("Vínculo com o Local (Todas as ruas)", weight='bold')
        ax1.set_xlabel("Total de Votos")
        ax1.set_ylabel("")
        st.pyplot(fig1)

    with col2:
        fig2, ax2 = plt.subplots(figsize=(8, 5))
        sns.barplot(x='Quantidade_de_Votos', y='Opcao_de_Resposta', data=df_idade, palette='Greens_r', ax=ax2)
        ax2.set_title("Faixa Etária", weight='bold')
        ax2.set_xlabel("Total de Votos")
        ax2.set_ylabel("")
        st.pyplot(fig2)

with aba2:
    st.subheader("Converse com os dados da pesquisa")
    st.markdown("Pergunte qualquer coisa sobre a mobilidade do Centro Histórico.")
    
    pergunta = st.text_input("Digite sua pergunta aqui:")
    if st.button("Enviar"):
        if pergunta:
            prompt_sistema = f"Você é um especialista em mobilidade urbana. Responda a pergunta do usuário baseando-se nestes dados da pesquisa: {df.to_string()}. Pergunta: {pergunta}"
            resposta = model.generate_content(prompt_sistema)
            st.info(resposta.text)
