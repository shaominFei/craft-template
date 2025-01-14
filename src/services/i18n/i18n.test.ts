import { describe, expect, it } from 'vitest';
import English from './data/en.json';
import French from './data/fr.json';
import i18n from './i18n';

describe('language test', () => {
  it('en', () => {
    expect(i18n.t('common.apiError')).toBe(English.common.apiError);
  });
  it('fr', async () => {
    await i18n.changeLanguage('fr');
    expect(i18n.t('common.apiError')).toBe(French.common.apiError);
  });
});
