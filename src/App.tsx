import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Tab = 'home' | 'chat' | 'library' | 'flows';

type Feature = {
  title: string;
  subtitle: string;
  accent: string;
};

const quickActions: Feature[] = [
  { title: 'Foto', subtitle: 'Editar e criar', accent: '#7C8CFF' },
  { title: 'Vídeo', subtitle: 'Gerar clipes', accent: '#FF7DB8' },
  { title: 'Áudio', subtitle: 'Voices e narração', accent: '#37D7B2' },
  { title: 'Doc', subtitle: 'PDF, Word e mais', accent: '#F4B740' },
  { title: 'APK', subtitle: 'Arquivos e códigos', accent: '#5EE0FF' },
  { title: 'IA', subtitle: 'Assistente criativo', accent: '#A78BFA' },
];

const flowCards: Feature[] = [
  { title: 'Criar foto', subtitle: 'A partir de comando ou referência', accent: '#8B5CF6' },
  { title: 'Editar imagem', subtitle: 'Recorte, iluminação, filtros', accent: '#EC4899' },
  { title: 'Criar vídeo', subtitle: 'Montagem com cenas e narração', accent: '#F59E0B' },
  { title: 'Gerar áudio', subtitle: 'Voz, música e efeitos', accent: '#10B981' },
  { title: 'Gerar documento', subtitle: 'Word, PDF, texto e relatórios', accent: '#3B82F6' },
  { title: 'Gerar APK', subtitle: 'Estruturas e arquivos de app', accent: '#22D3EE' },
];

const libraryItems = [
  { name: 'Campanha.png', type: 'Imagem', size: '2.4 MB' },
  { name: 'Promo_reel.mp4', type: 'Vídeo', size: '18.1 MB' },
  { name: 'Narracao.mp3', type: 'Áudio', size: '3.6 MB' },
  { name: 'Relatorio.docx', type: 'Documento', size: '860 KB' },
  { name: 'App_versao.apk', type: 'APK', size: '26.8 MB' },
];

const chatMessages = [
  { from: 'Potiza', text: 'Posso criar uma campanha visual, editar uma foto e montar um vídeo com a mesma estética.' },
  { from: 'Você', text: 'Quero um vídeo a partir de fotos do produto com música e texto.' },
  { from: 'Potiza', text: 'Claro. Posso organizar a sequência, gerar legenda, narração e exportar no formato ideal.' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderContent = useMemo(() => {
    if (activeTab === 'chat') {
      return (
        <View style={styles.panel}>
          <Text style={styles.sectionTitle}>Chat de conversa</Text>
          <View style={styles.chatBox}>
            {chatMessages.map((message, index) => (
              <View
                key={`${message.from}-${index}`}
                style={[
                  styles.bubble,
                  message.from === 'Você' ? styles.userBubble : styles.aiBubble,
                ]}
              >
                <Text style={styles.bubbleAuthor}>{message.from}</Text>
                <Text style={styles.bubbleText}>{message.text}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Nova conversa</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (activeTab === 'library') {
      return (
        <View style={styles.panel}>
          <Text style={styles.sectionTitle}>Biblioteca</Text>
          {libraryItems.map((item) => (
            <View key={item.name} style={styles.libraryRow}>
              <View style={styles.libraryIcon} />
              <View style={styles.libraryMeta}>
                <Text style={styles.libraryName}>{item.name}</Text>
                <Text style={styles.libraryType}>{item.type}</Text>
              </View>
              <Text style={styles.librarySize}>{item.size}</Text>
            </View>
          ))}
        </View>
      );
    }

    if (activeTab === 'flows') {
      return (
        <View style={styles.panel}>
          <Text style={styles.sectionTitle}>Fluxos de produção</Text>
          <View style={styles.grid}>
            {flowCards.map((card) => (
              <View key={card.title} style={[styles.card, { borderColor: card.accent }]}>
                <View style={[styles.cardDot, { backgroundColor: card.accent }]} />
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardText}>{card.subtitle}</Text>
              </View>
            ))}
          </View>
        </View>
      );
    }

    return (
      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Ações rápidas</Text>
        <View style={styles.grid}>
          {quickActions.map((action) => (
            <View key={action.title} style={[styles.card, { borderColor: action.accent }]}>
              <View style={[styles.cardDot, { backgroundColor: action.accent }]} />
              <Text style={styles.cardTitle}>{action.title}</Text>
              <Text style={styles.cardText}>{action.subtitle}</Text>
            </View>
          ))}
        </View>

        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Resumo do assistente</Text>
          <Text style={styles.summaryText}>
            Potiza pode criar conteúdo visual, editar arquivos, gerar documentos, analisar informações,
            trabalhar com pesquisa e organizar uma biblioteca de arquivos do celular.
          </Text>
        </View>
      </View>
    );
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>Assistente criativo</Text>
            <Text style={styles.title}>Potiza</Text>
          </View>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>+ Novo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          {[
            { label: 'Mídia', value: '24' },
            { label: 'Docs', value: '14' },
            { label: 'IA', value: '9' },
            { label: 'APK', value: '3' },
          ].map((item) => (
            <View key={item.label} style={styles.statItem}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.content}>{renderContent}</ScrollView>

        <View style={styles.navBar}>
          {[
            { key: 'home', label: 'Início' },
            { key: 'chat', label: 'Chat' },
            { key: 'library', label: 'Biblioteca' },
            { key: 'flows', label: 'Fluxos' },
          ].map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabButton, activeTab === tab.key && styles.tabButtonActive]}
              onPress={() => setActiveTab(tab.key as Tab)}
            >
              <Text style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}>{tab.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingHorizontal: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 16,
  },
  eyebrow: {
    color: '#7DD3FC',
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  title: {
    color: '#F8FAFC',
    fontSize: 36,
    fontWeight: '700',
  },
  headerButton: {
    backgroundColor: '#1D4ED8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerButtonText: {
    color: '#EFF6FF',
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  statItem: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '23%',
    alignItems: 'center',
  },
  statValue: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '700',
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 4,
  },
  content: {
    paddingBottom: 20,
  },
  panel: {
    backgroundColor: '#111827',
    borderColor: '#1F2937',
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
  },
  sectionTitle: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#0B1120',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  cardDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  cardTitle: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  summaryBox: {
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: '#0B1120',
    borderWidth: 1,
    borderColor: '#1F2937',
    padding: 16,
  },
  summaryTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  summaryText: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 20,
  },
  chatBox: {
    gap: 10,
  },
  bubble: {
    borderRadius: 16,
    padding: 12,
    maxWidth: '85%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#1D4ED8',
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#172554',
  },
  bubbleAuthor: {
    color: '#E2E8F0',
    fontSize: 11,
    marginBottom: 4,
    fontWeight: '700',
  },
  bubbleText: {
    color: '#F8FAFC',
    fontSize: 13,
    lineHeight: 20,
  },
  primaryButton: {
    marginTop: 18,
    backgroundColor: '#22C55E',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#052E16',
    fontWeight: '700',
  },
  libraryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0B1120',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  libraryIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#7C3AED',
    marginRight: 12,
  },
  libraryMeta: {
    flex: 1,
  },
  libraryName: {
    color: '#F8FAFC',
    fontWeight: '600',
  },
  libraryType: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  librarySize: {
    color: '#CBD5E1',
    fontSize: 12,
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#111827',
    borderTopWidth: 1,
    borderTopColor: '#1F2937',
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#1E293B',
  },
  tabText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#F8FAFC',
  },
});
